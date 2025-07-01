# Monte Carlo Options Pricing Calculator
# Designed and created by Nick Petrykowycz 2025.

import numpy as np
from typing import Tuple, List, Optional
import math
from scipy import stats

def price_monte_carlo(
    S0: float,
    K: float,
    T: float,
    r: float,
    sigma: float,
    simulations: int = 100000,
    option_type: str = "call",
    style: str = "european",
    time_steps: int = 252,
    random_seed: Optional[int] = None,
    antithetic: bool = True,
    q: float = 0.0,
    **kwargs
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
        'european' or 'american'
    time_steps : int
        Number of time steps per simulation
    random_seed : int, optional
        Random seed for reproducibility
    antithetic : bool
        Use antithetic variance reduction
    q : float
        Continuous dividend yield
        
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
    drift = (r - q - 0.5 * sigma**2) * dt
    vol_sqrt_dt = sigma * math.sqrt(dt)
    
    # Generate random numbers
    Z = np.random.standard_normal((actual_sims, time_steps))
    
    if antithetic:
        # Add antithetic variates
        Z = np.concatenate([Z, -Z], axis=0)
    
    # Initialize price paths
    S = np.zeros((Z.shape[0], time_steps + 1))
    S[:, 0] = S0
    
    # Generate stock price paths using geometric Brownian motion
    for t in range(1, time_steps + 1):
        S[:, t] = S[:, t-1] * np.exp(drift + vol_sqrt_dt * Z[:, t-1])
    
    # Calculate payoffs based on option type and style
    if style.lower() == "european":
        # European options: payoff at expiry only
        if option_type.lower() == "call":
            payoffs = np.maximum(S[:, -1] - K, 0)
        else:  # put
            payoffs = np.maximum(K - S[:, -1], 0)
    
    else:  # American options
        # American options: optimal exercise at any time
        if option_type.lower() == "call":
            # For American calls without dividends, early exercise is rarely optimal
            # Use simple max over all time steps (approximation)
            intrinsic_values = np.maximum(S - K, 0)
            payoffs = np.max(intrinsic_values, axis=1)
        else:  # put
            # For American puts, early exercise can be optimal
            intrinsic_values = np.maximum(K - S, 0)
            payoffs = np.max(intrinsic_values, axis=1)
    
    # Discount payoffs to present value
    option_price = np.mean(payoffs) * math.exp(-r * T)
    
    return option_price, payoffs

def monte_carlo_convergence_analysis(
    S0: float,
    K: float,
    T: float,
    r: float,
    sigma: float,
    max_simulations: int,
    convergence_points: int = 20,
    option_type: str = "call",
    style: str = "european",
    time_steps: int = 252,
    random_seed: Optional[int] = None,
    antithetic: bool = True,
    q: float = 0.0,
    **kwargs
) -> List[dict]:
    """
    Perform convergence analysis for Monte Carlo simulation.
    
    Returns a list of convergence points showing how the estimate improves
    with more simulations.
    """
    
    if random_seed is not None:
        np.random.seed(random_seed)
    
    # Generate simulation points (logarithmic scale for better visualization)
    min_sims = max(1000, max_simulations // 1000)
    sim_points = np.logspace(
        np.log10(min_sims), 
        np.log10(max_simulations), 
        convergence_points
    ).astype(int)
    
    # Remove duplicates and sort
    sim_points = sorted(list(set(sim_points)))
    
    convergence_data = []
    cumulative_payoffs = []
    
    # Generate all random numbers at once for consistency
    total_sims = max_simulations
    if antithetic:
        actual_sims = total_sims // 2
    else:
        actual_sims = total_sims
    
    dt = T / time_steps
    drift = (r - q - 0.5 * sigma**2) * dt
    vol_sqrt_dt = sigma * math.sqrt(dt)
    
    # Generate all random numbers
    Z = np.random.standard_normal((actual_sims, time_steps))
    if antithetic:
        Z = np.concatenate([Z, -Z], axis=0)
    
    # Calculate all payoffs
    S = np.zeros((Z.shape[0], time_steps + 1))
    S[:, 0] = S0
    
    for t in range(1, time_steps + 1):
        S[:, t] = S[:, t-1] * np.exp(drift + vol_sqrt_dt * Z[:, t-1])
    
    # Calculate payoffs
    if style.lower() == "european":
        if option_type.lower() == "call":
            payoffs = np.maximum(S[:, -1] - K, 0)
        else:
            payoffs = np.maximum(K - S[:, -1], 0)
    else:  # American
        if option_type.lower() == "call":
            intrinsic_values = np.maximum(S - K, 0)
            payoffs = np.max(intrinsic_values, axis=1)
        else:
            intrinsic_values = np.maximum(K - S, 0)
            payoffs = np.max(intrinsic_values, axis=1)
    
    # Calculate convergence points
    for n_sims in sim_points:
        current_payoffs = payoffs[:n_sims]
        price = np.mean(current_payoffs) * math.exp(-r * T)
        
        # Calculate standard error and confidence interval
        std_error = np.std(current_payoffs) / math.sqrt(n_sims) * math.exp(-r * T)
        
        # 95% confidence interval
        z_score = 1.96  # For 95% confidence
        ci_margin = z_score * std_error
        
        convergence_data.append({
            'simulations': int(n_sims),
            'price': float(price),
            'std_error': float(std_error),
            'upper_ci': float(price + ci_margin),
            'lower_ci': float(price - ci_margin)
        })
    
    return convergence_data

def generate_sample_paths(
    S0: float,
    T: float,
    r: float,
    sigma: float,
    time_steps: int = 252,
    num_paths: int = 10,
    random_seed: Optional[int] = None,
    q: float = 0.0,
    **kwargs
) -> List[dict]:
    """
    Generate sample price paths for visualization.
    
    Returns a list of path points for charting.
    """
    
    if random_seed is not None:
        np.random.seed(random_seed + 1000)  # Different seed for paths
    
    dt = T / time_steps
    drift = (r - q - 0.5 * sigma**2) * dt
    vol_sqrt_dt = sigma * math.sqrt(dt)
    
    # Generate random numbers
    Z = np.random.standard_normal((num_paths, time_steps))
    
    # Initialize price paths
    S = np.zeros((num_paths, time_steps + 1))
    S[:, 0] = S0
    
    # Generate paths
    for t in range(1, time_steps + 1):
        S[:, t] = S[:, t-1] * np.exp(drift + vol_sqrt_dt * Z[:, t-1])
    
    # Convert to chart format
    path_data = []
    time_points = np.linspace(0, T, time_steps + 1)
    
    for path_id in range(num_paths):
        for t_idx, (time, price) in enumerate(zip(time_points, S[path_id, :])):
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
    precision_map = {
        'fast': 10000,
        'standard': 100000,
        'high': 1000000
    }
    return precision_map.get(precision.lower(), 100000)

def calculate_monte_carlo_full(
    S0: float,
    K: float,
    T: float,
    r: float,
    sigma: float,
    option_type: str = "call",
    style: str = "european",
    precision: str = "standard",
    random_seed: Optional[int] = None,
    **kwargs
) -> dict:
    """
    Full Monte Carlo calculation with convergence analysis and sample paths.
    
    Returns a complete analysis including price, convergence, and sample paths.
    """
    
    simulations = get_simulation_count(precision)
    
    # Calculate main price
    price, all_payoffs = price_monte_carlo(
        S0=S0, K=K, T=T, r=r, sigma=sigma,
        simulations=simulations,
        option_type=option_type,
        style=style,
        random_seed=random_seed,
        **kwargs
    )
    
    # Calculate convergence analysis
    convergence = monte_carlo_convergence_analysis(
        S0=S0, K=K, T=T, r=r, sigma=sigma,
        max_simulations=simulations,
        option_type=option_type,
        style=style,
        random_seed=random_seed,
        **kwargs
    )
    
    # Generate sample paths
    sample_paths = generate_sample_paths(
        S0=S0, T=T, r=r, sigma=sigma,
        random_seed=random_seed,
        **kwargs
    )
    
    # Calculate final statistics
    discounted_payoffs = all_payoffs * math.exp(-r * T)
    std_error = np.std(discounted_payoffs) / math.sqrt(len(discounted_payoffs))
    
    # 95% confidence interval
    z_score = 1.96
    ci_margin = z_score * std_error
    
    return {
        'price': float(price),
        'convergence': convergence,
        'path_sample': sample_paths,
        'confidence_interval': {
            'lower': float(price - ci_margin),
            'upper': float(price + ci_margin),
            'confidence_level': 0.95
        },
        'stats': {
            'simulations': int(simulations),
            'std_error': float(std_error),
            'confidence_level': 0.95
        }
    }