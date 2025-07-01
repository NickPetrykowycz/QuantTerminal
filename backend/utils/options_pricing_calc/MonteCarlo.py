# Monte Carlo Options Pricing Calculator
# Designed and created by Nick Petrykowycz 2025.

import math
from typing import List, Optional, Tuple

import numpy as np
from scipy import stats


def price_monte_carlo(
    S0: float,
    K: float,
    T: float,
    r: float,
    sigma: float,
    simulations: int = 100000,
    option_type: str = "call",
    style: str = "american",
    time_steps: int = 252,
    random_seed: Optional[int] = None,
    antithetic: bool = True,
    q: float = 0.0,
    dividend_dates: Optional[List[float]] = None,
    dividend_amounts: Optional[List[float]] = None,
    **kwargs,
) -> Tuple[float, np.ndarray]:
    """
    Calculate option price using Monte Carlo simulation.

    Parameters:
    -----------
    S0 : float
        Current stock price
    K : float
        Strike price
    T : float
        Time to expiry in years
    r : float
        Risk-free rate
    sigma : float
        Volatility
    simulations : int
        Number of simulations to run
    option_type : str
        'call' or 'put'
    style : str
        'american' or 'asian'
    time_steps : int
        Number of time steps per simulation
    random_seed : int, optional
        Random seed for reproducibility
    antithetic : bool
        Use antithetic variance reduction
    q : float
        Continuous dividend yield
    dividend_dates : List[float], optional
        Discrete dividend payment dates (in years)
    dividend_amounts : List[float], optional
        Discrete dividend amounts

    Returns:
    --------
    Tuple[float, np.ndarray]
        Option price and array of all simulated payoffs
    """

    if random_seed is not None:
        np.random.seed(random_seed)

    # Adjust simulations for antithetic variates
    if antithetic:
        actual_sims = simulations // 2
    else:
        actual_sims = simulations

    dt = T / time_steps
    time_grid = np.linspace(0, T, time_steps + 1)

    # Generate random numbers
    Z = np.random.standard_normal((actual_sims, time_steps))

    if antithetic:
        # Add antithetic variates
        Z = np.concatenate([Z, -Z], axis=0)

    # Initialize price paths
    S = np.zeros((Z.shape[0], time_steps + 1))
    S[:, 0] = S0

    # Generate stock price paths with discrete dividends
    for t in range(1, time_steps + 1):
        current_time = time_grid[t]

        # Adjust for continuous dividend yield
        drift = (r - q - 0.5 * sigma**2) * dt
        vol_term = sigma * math.sqrt(dt) * Z[:, t - 1]

        S[:, t] = S[:, t - 1] * np.exp(drift + vol_term)

        # Apply discrete dividends if any
        if dividend_dates and dividend_amounts:
            for div_date, div_amount in zip(dividend_dates, dividend_amounts):
                if abs(current_time - div_date) < dt / 2:  # Dividend payment
                    S[:, t] -= div_amount
                    S[:, t] = np.maximum(S[:, t], 0.01)  # Prevent negative prices

    # Calculate payoffs based on option type and style
    if style.lower() == "asian":
        # Asian options: payoff based on average price
        avg_prices = np.mean(S[:, 1:], axis=1)  # Exclude initial price
        if option_type.lower() == "call":
            payoffs = np.maximum(avg_prices - K, 0)
        else:  # put
            payoffs = np.maximum(K - avg_prices, 0)

        # Discount payoffs to present value
        option_price = np.mean(payoffs) * math.exp(-r * T)
        return option_price, payoffs

    elif style.lower() == "american":
        # American options: optimal exercise at any time
        payoffs = np.zeros(S.shape[0])

        for path_idx in range(S.shape[0]):
            max_payoff = 0.0

            for t in range(time_steps + 1):
                current_time = time_grid[t]
                current_price = S[path_idx, t]

                if option_type.lower() == "call":
                    intrinsic = max(current_price - K, 0)
                else:  # put
                    intrinsic = max(K - current_price, 0)

                # Discount to present value
                discounted_intrinsic = intrinsic * math.exp(-r * current_time)
                max_payoff = max(max_payoff, discounted_intrinsic)

            payoffs[path_idx] = max_payoff

        # For American options, payoffs are already discounted
        option_price = np.mean(payoffs)
        return option_price, payoffs

    else:
        raise ValueError(
            f"Unsupported option style: {style}. Use 'american' or 'asian'."
        )


def monte_carlo_convergence_analysis(
    S0: float,
    K: float,
    T: float,
    r: float,
    sigma: float,
    max_simulations: int,
    convergence_points: int = 20,
    option_type: str = "call",
    style: str = "american",
    time_steps: int = 252,
    random_seed: Optional[int] = None,
    antithetic: bool = True,
    q: float = 0.0,
    dividend_dates: Optional[List[float]] = None,
    dividend_amounts: Optional[List[float]] = None,
    **kwargs,
) -> List[dict]:
    """
    Perform convergence analysis for Monte Carlo simulation.

    Returns a list of convergence points showing how the estimate improves
    with more simulations.
    """

    if random_seed is not None:
        np.random.seed(random_seed)

    # Create logarithmically spaced simulation counts
    sim_counts = np.logspace(
        np.log10(1000),  # Start at 1K
        np.log10(max_simulations),  # End at max_simulations
        convergence_points,
    ).astype(int)

    convergence_data = []

    for sim_count in sim_counts:
        # Calculate price with current simulation count
        price, payoffs = price_monte_carlo(
            S0=S0,
            K=K,
            T=T,
            r=r,
            sigma=sigma,
            simulations=sim_count,
            option_type=option_type,
            style=style,
            time_steps=time_steps,
            random_seed=random_seed,
            antithetic=antithetic,
            q=q,
            dividend_dates=dividend_dates,
            dividend_amounts=dividend_amounts,
            **kwargs,
        )

        # Calculate standard error and confidence interval
        if style.lower() == "asian":
            discounted_payoffs = payoffs * math.exp(-r * T)
        else:  # American already discounted
            discounted_payoffs = payoffs

        std_error = np.std(discounted_payoffs) / math.sqrt(len(discounted_payoffs))
        z_score = 1.96  # 95% confidence
        ci_margin = z_score * std_error

        convergence_data.append(
            {
                "simulations": int(sim_count),
                "price": float(price),
                "std_error": float(std_error),
                "lower_ci": float(price - ci_margin),
                "upper_ci": float(price + ci_margin),
            }
        )

    return convergence_data


def generate_sample_paths(
    S0: float,
    T: float,
    r: float,
    sigma: float,
    num_paths: int = 10,
    time_steps: int = 252,
    random_seed: Optional[int] = None,
    q: float = 0.0,
    dividend_dates: Optional[List[float]] = None,
    dividend_amounts: Optional[List[float]] = None,
    **kwargs,
) -> List[dict]:
    """
    Generate sample paths for visualization.

    Returns a list of path points for charting.
    """

    if random_seed is not None:
        np.random.seed(random_seed + 1000)  # Different seed for paths

    dt = T / time_steps
    time_grid = np.linspace(0, T, time_steps + 1)

    # Generate random numbers
    Z = np.random.standard_normal((num_paths, time_steps))

    # Initialize price paths
    S = np.zeros((num_paths, time_steps + 1))
    S[:, 0] = S0

    # Generate paths
    for t in range(1, time_steps + 1):
        current_time = time_grid[t]

        # Adjust for continuous dividend yield
        drift = (r - q - 0.5 * sigma**2) * dt
        vol_term = sigma * math.sqrt(dt) * Z[:, t - 1]

        S[:, t] = S[:, t - 1] * np.exp(drift + vol_term)

        # Apply discrete dividends if any
        if dividend_dates and dividend_amounts:
            for div_date, div_amount in zip(dividend_dates, dividend_amounts):
                if abs(current_time - div_date) < dt / 2:  # Dividend payment
                    S[:, t] -= div_amount
                    S[:, t] = np.maximum(S[:, t], 0.01)  # Prevent negative prices

    # Convert to chart format
    path_data = []

    for path_id in range(num_paths):
        for time, price in zip(time_grid, S[path_id, :]):
            path_data.append({
                'time': float(time),
                'price': float(price),
                'path_id': int(path_id)
            })
    
    return path_data


def get_simulation_count(precision: str) -> int:
    """
    Get the number of simulations based on precision level.
    """
    precision_map = {"fast": 10000, "standard": 100000, "high": 1000000}
    return precision_map.get(precision.lower(), 100000)


def calculate_monte_carlo_full(
    S0: float,
    K: float,
    T: float,
    r: float,
    sigma: float,
    option_type: str = "call",
    style: str = "american",
    precision: str = "standard",
    random_seed: Optional[int] = None,
    dividend_mode: str = "none",
    dividend_dates: Optional[List[float]] = None,
    dividend_amounts: Optional[List[float]] = None,
    **kwargs,
) -> dict:
    """
    Full Monte Carlo calculation with convergence analysis and sample paths.

    Returns a complete analysis including price, convergence, and sample paths.
    """

    simulations = get_simulation_count(precision)

    # Prepare dividend parameters
    div_dates = None
    div_amounts = None

    if dividend_mode == "discrete" and dividend_dates and dividend_amounts:
        div_dates = dividend_dates
        div_amounts = dividend_amounts

    # Calculate main price
    price, all_payoffs = price_monte_carlo(
        S0=S0,
        K=K,
        T=T,
        r=r,
        sigma=sigma,
        simulations=simulations,
        option_type=option_type,
        style=style,
        random_seed=random_seed,
        dividend_dates=div_dates,
        dividend_amounts=div_amounts,
        **kwargs,
    )

    # Calculate convergence analysis
    convergence = monte_carlo_convergence_analysis(
        S0=S0,
        K=K,
        T=T,
        r=r,
        sigma=sigma,
        max_simulations=simulations,
        option_type=option_type,
        style=style,
        random_seed=random_seed,
        dividend_dates=div_dates,
        dividend_amounts=div_amounts,
        **kwargs,
    )

    # Generate sample paths
    sample_paths = generate_sample_paths(
        S0=S0,
        T=T,
        r=r,
        sigma=sigma,
        random_seed=random_seed,
        dividend_dates=div_dates,
        dividend_amounts=div_amounts,
        **kwargs,
    )

    # Calculate final statistics
    if style.lower() == "asian":
        discounted_payoffs = all_payoffs * math.exp(-r * T)
    else:  # American already discounted
        discounted_payoffs = all_payoffs

    std_error = np.std(discounted_payoffs) / math.sqrt(len(discounted_payoffs))

    # 95% confidence interval
    z_score = 1.96
    ci_margin = z_score * std_error

    return {
        "price": float(price),
        "convergence": convergence,
        "path_sample": sample_paths,
        "confidence_interval": {
            "lower": float(price - ci_margin),
            "upper": float(price + ci_margin),
            "confidence_level": 0.95,
        },
        "stats": {
            "simulations": int(simulations),
            "std_error": float(std_error),
            "confidence_level": 0.95,
        },
    }
