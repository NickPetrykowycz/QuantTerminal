from typing import Dict, List, Optional, Tuple

import numpy as np
import pandas as pd


class MonteCarloSimulator:
    """
    Vectorized Monte Carlo option pricing simulator with dividend yield support.
    """

    def __init__(self, num_simulations: int = 10000):
        """
        Initialize the Monte Carlo simulator.

        Args:
            num_simulations: Number of Monte Carlo simulations to run
        """
        self.num_simulations = num_simulations

    def simulate_geometric_brownian_motion(
        self,
        S0: float,
        r: float,
        q: float,
        sigma: float,
        T: float,
        num_steps: int = 252,
    ) -> np.ndarray:
        """
        Simulate stock price paths using Geometric Brownian Motion.

        Args:
            S0: Initial stock price
            r: Risk-free rate
            q: Dividend yield (0 if not paying dividends)
            sigma: Volatility
            T: Time to maturity
            num_steps: Number of time steps

        Returns:
            Array of simulated stock prices at maturity
        """
        dt = T / num_steps

        # Pre-calculate constants for efficiency
        drift = (r - q - 0.5 * sigma**2) * dt
        diffusion = sigma * np.sqrt(dt)

        # Generate random shocks for all simulations and time steps
        random_shocks = np.random.normal(0, 1, (self.num_simulations, num_steps))

        # Calculate price changes
        price_changes = drift + diffusion * random_shocks

        # Calculate cumulative log returns
        log_returns = np.cumsum(price_changes, axis=1)

        # Calculate final stock prices
        ST = S0 * np.exp(log_returns[:, -1])

        return ST

    def simulate_american_option_paths(
        self,
        S0: float,
        r: float,
        q: float,
        sigma: float,
        T: float,
        num_steps: int = 252,
    ) -> np.ndarray:
        """
        Simulate full stock price paths for American option pricing.

        Args:
            S0: Initial stock price
            r: Risk-free rate
            q: Dividend yield (0 if not paying dividends)
            sigma: Volatility
            T: Time to maturity
            num_steps: Number of time steps

        Returns:
            Array of shape (num_simulations, num_steps + 1) containing full price paths
        """
        dt = T / num_steps

        # Pre-calculate constants
        drift = (r - q - 0.5 * sigma**2) * dt
        diffusion = sigma * np.sqrt(dt)

        # Generate random shocks
        random_shocks = np.random.normal(0, 1, (self.num_simulations, num_steps))

        # Calculate price changes
        price_changes = drift + diffusion * random_shocks

        # Initialize paths array
        paths = np.zeros((self.num_simulations, num_steps + 1))
        paths[:, 0] = S0

        # Calculate full paths
        for i in range(num_steps):
            paths[:, i + 1] = paths[:, i] * np.exp(price_changes[:, i])

        return paths

    def price_european_option(
        self,
        S0: float,
        K: float,
        r: float,
        q: float,
        sigma: float,
        T: float,
        option_type: str = "call",
    ) -> Dict[str, float]:
        """
        Price European option using Monte Carlo simulation.

        Args:
            S0: Initial stock price
            K: Strike price
            r: Risk-free rate
            q: Dividend yield (0 if not paying dividends)
            sigma: Volatility
            T: Time to maturity
            option_type: 'call' or 'put'

        Returns:
            Dictionary containing option price and statistics
        """
        # Simulate final stock prices
        ST = self.simulate_geometric_brownian_motion(S0, r, q, sigma, T)

        # Calculate payoffs
        if option_type.lower() == "call":
            payoffs = np.maximum(ST - K, 0)
        elif option_type.lower() == "put":
            payoffs = np.maximum(K - ST, 0)
        else:
            raise ValueError("option_type must be 'call' or 'put'")

        # Discount payoffs to present value
        option_price = np.exp(-r * T) * np.mean(payoffs)

        # Calculate statistics
        std_error = np.std(payoffs) / np.sqrt(self.num_simulations)
        confidence_interval = 1.96 * std_error * np.exp(-r * T)

        return {
            "price": option_price,
            "std_error": std_error * np.exp(-r * T),
            "confidence_interval": confidence_interval,
            "lower_bound": option_price - confidence_interval,
            "upper_bound": option_price + confidence_interval,
            "payoff_mean": np.mean(payoffs),
            "payoff_std": np.std(payoffs),
        }

    def price_asian_option(
        self,
        S0: float,
        K: float,
        r: float,
        q: float,
        sigma: float,
        T: float,
        option_type: str = "call",
        num_steps: int = 252,
    ) -> Dict[str, float]:
        """
        Price Asian option using arithmetic average.

        Args:
            S0: Initial stock price
            K: Strike price
            r: Risk-free rate
            q: Dividend yield (0 if not paying dividends)
            sigma: Volatility
            T: Time to maturity
            option_type: 'call' or 'put'
            num_steps: Number of time steps

        Returns:
            Dictionary containing option price and statistics
        """
        # Simulate stock price paths
        paths = self.simulate_american_option_paths(S0, r, q, sigma, T, num_steps)

        # Calculate arithmetic average for each path
        average_prices = np.mean(paths, axis=1)

        # Calculate payoffs based on average prices
        if option_type.lower() == "call":
            payoffs = np.maximum(average_prices - K, 0)
        elif option_type.lower() == "put":
            payoffs = np.maximum(K - average_prices, 0)
        else:
            raise ValueError("option_type must be 'call' or 'put'")

        # Discount payoffs to present value
        option_price = np.exp(-r * T) * np.mean(payoffs)

        # Calculate statistics
        std_error = np.std(payoffs) / np.sqrt(self.num_simulations)
        confidence_interval = 1.96 * std_error * np.exp(-r * T)

        return {
            "price": option_price,
            "std_error": std_error * np.exp(-r * T),
            "confidence_interval": confidence_interval,
            "lower_bound": option_price - confidence_interval,
            "upper_bound": option_price + confidence_interval,
            "payoff_mean": np.mean(payoffs),
            "payoff_std": np.std(payoffs),
        }

    def price_american_option(
        self,
        S0: float,
        K: float,
        r: float,
        q: float,
        sigma: float,
        T: float,
        option_type: str = "call",
        num_steps: int = 252,
    ) -> Dict[str, float]:
        """
        Price American option using Longstaff-Schwartz Monte Carlo method.

        Args:
            S0: Initial stock price
            K: Strike price
            r: Risk-free rate
            q: Dividend yield (0 if not paying dividends)
            sigma: Volatility
            T: Time to maturity
            option_type: 'call' or 'put'
            num_steps: Number of time steps

        Returns:
            Dictionary containing option price and statistics
        """
        # Simulate stock price paths
        paths = self.simulate_american_option_paths(S0, r, q, sigma, T, num_steps)

        dt = T / num_steps
        discount_factor = np.exp(-r * dt)

        # Calculate intrinsic values for all paths and times
        if option_type.lower() == "call":
            intrinsic_values = np.maximum(paths - K, 0)
        elif option_type.lower() == "put":
            intrinsic_values = np.maximum(K - paths, 0)
        else:
            raise ValueError("option_type must be 'call' or 'put'")

        # Initialize option values at maturity
        option_values = intrinsic_values[:, -1].copy()

        # Work backwards through time
        for t in range(num_steps - 1, 0, -1):
            # Find in-the-money paths
            itm_mask = intrinsic_values[:, t] > 0

            if np.any(itm_mask):
                # Regression on in-the-money paths
                X = paths[itm_mask, t]
                Y = option_values[itm_mask] * discount_factor

                # Polynomial regression (quadratic)
                if len(X) > 2:
                    A = np.vstack([X**2, X, np.ones(len(X))]).T
                    try:
                        continuation_values = np.linalg.lstsq(A, Y, rcond=None)[0]
                        cont_val = np.dot(A, continuation_values)
                    except:
                        cont_val = np.mean(Y)
                else:
                    cont_val = np.mean(Y) if len(Y) > 0 else 0

                # Exercise decision
                exercise_mask = intrinsic_values[itm_mask, t] > cont_val

                # Update option values
                option_values[itm_mask] = np.where(
                    exercise_mask,
                    intrinsic_values[itm_mask, t],
                    option_values[itm_mask] * discount_factor,
                )

                # Update non-ITM paths
                non_itm_mask = ~itm_mask
                option_values[non_itm_mask] *= discount_factor
            else:
                # No ITM paths, just discount
                option_values *= discount_factor

        # Final discounting to present value
        option_values *= discount_factor

        # Calculate statistics
        option_price = np.mean(option_values)
        std_error = np.std(option_values) / np.sqrt(self.num_simulations)
        confidence_interval = 1.96 * std_error

        return {
            "price": option_price,
            "std_error": std_error,
            "confidence_interval": confidence_interval,
            "lower_bound": option_price - confidence_interval,
            "upper_bound": option_price + confidence_interval,
            "payoff_mean": np.mean(option_values),
            "payoff_std": np.std(option_values),
        }

    def calculate_greeks(
        self,
        S0: float,
        K: float,
        r: float,
        q: float,
        sigma: float,
        T: float,
        option_type: str = "call",
        style: str = "european",
    ) -> Dict[str, float]:
        """
        Calculate option Greeks using finite difference method.

        Args:
            S0: Initial stock price
            K: Strike price
            r: Risk-free rate
            q: Dividend yield (0 if not paying dividends)
            sigma: Volatility
            T: Time to maturity
            option_type: 'call' or 'put'
            style: 'european' or 'american'

        Returns:
            Dictionary containing Greeks
        """
        # Small perturbations for finite differences
        dS = S0 * 0.01
        dr = 0.0001
        dsigma = 0.01
        dT = T * 0.01

        # Base price
        if style.lower() == "european":
            base_price = self.price_european_option(S0, K, r, q, sigma, T, option_type)[
                "price"
            ]
        else:
            base_price = self.price_american_option(S0, K, r, q, sigma, T, option_type)[
                "price"
            ]

        # Delta: sensitivity to stock price
        if style.lower() == "european":
            price_up = self.price_european_option(
                S0 + dS, K, r, q, sigma, T, option_type
            )["price"]
            price_down = self.price_european_option(
                S0 - dS, K, r, q, sigma, T, option_type
            )["price"]
        else:
            price_up = self.price_american_option(
                S0 + dS, K, r, q, sigma, T, option_type
            )["price"]
            price_down = self.price_american_option(
                S0 - dS, K, r, q, sigma, T, option_type
            )["price"]

        delta = (price_up - price_down) / (2 * dS)

        # Gamma: second derivative w.r.t. stock price
        gamma = (price_up - 2 * base_price + price_down) / (dS**2)

        # Theta: sensitivity to time
        if T > dT:
            if style.lower() == "european":
                price_theta = self.price_european_option(
                    S0, K, r, q, sigma, T - dT, option_type
                )["price"]
            else:
                price_theta = self.price_american_option(
                    S0, K, r, q, sigma, T - dT, option_type
                )["price"]
            theta = (price_theta - base_price) / dT
        else:
            theta = 0

        # Vega: sensitivity to volatility
        if style.lower() == "european":
            price_vega = self.price_european_option(
                S0, K, r, q, sigma + dsigma, T, option_type
            )["price"]
        else:
            price_vega = self.price_american_option(
                S0, K, r, q, sigma + dsigma, T, option_type
            )["price"]
        vega = (price_vega - base_price) / dsigma

        # Rho: sensitivity to interest rate
        if style.lower() == "european":
            price_rho = self.price_european_option(
                S0, K, r + dr, q, sigma, T, option_type
            )["price"]
        else:
            price_rho = self.price_american_option(
                S0, K, r + dr, q, sigma, T, option_type
            )["price"]
        rho = (price_rho - base_price) / dr

        return {
            "delta": delta,
            "gamma": gamma,
            "theta": theta,
            "vega": vega,
            "rho": rho,
        }

    def run_sensitivity_analysis(
        self,
        base_params: Dict[str, float],
        sensitivity_ranges: Dict[str, Tuple[float, float]],
        option_type: str = "call",
        style: str = "european",
    ) -> pd.DataFrame:
        """
        Run sensitivity analysis across parameter ranges.

        Args:
            base_params: Dictionary with keys 'S0', 'K', 'r', 'q', 'sigma', 'T'
            sensitivity_ranges: Dictionary with parameter ranges to test
            option_type: 'call' or 'put'
            style: 'european' or 'american'

        Returns:
            DataFrame with sensitivity analysis results
        """
        results = []

        for param, (min_val, max_val) in sensitivity_ranges.items():
            param_values = np.linspace(min_val, max_val, 20)

            for param_val in param_values:
                # Create parameter set
                params = base_params.copy()
                params[param] = param_val

                # Ensure dividend yield is included
                if "q" not in params:
                    params["q"] = 0.0

                # Price option
                if style.lower() == "european":
                    result = self.price_european_option(
                        params["S0"],
                        params["K"],
                        params["r"],
                        params["q"],
                        params["sigma"],
                        params["T"],
                        option_type,
                    )
                else:
                    result = self.price_american_option(
                        params["S0"],
                        params["K"],
                        params["r"],
                        params["q"],
                        params["sigma"],
                        params["T"],
                        option_type,
                    )

                results.append(
                    {
                        "parameter": param,
                        "value": param_val,
                        "option_price": result["price"],
                        "std_error": result["std_error"],
                        "lower_bound": result["lower_bound"],
                        "upper_bound": result["upper_bound"],
                    }
                )

        return pd.DataFrame(results)

    def batch_price_options(self, option_specs: List[Dict[str, any]]) -> pd.DataFrame:
        """
        Price multiple options in batch.

        Args:
            option_specs: List of dictionaries, each containing option parameters

        Returns:
            DataFrame with pricing results for all options
        """
        results = []

        for i, spec in enumerate(option_specs):
            # Ensure dividend yield is included
            if "q" not in spec:
                spec["q"] = 0.0

            # Extract parameters
            S0 = spec["S0"]
            K = spec["K"]
            r = spec["r"]
            q = spec["q"]
            sigma = spec["sigma"]
            T = spec["T"]
            option_type = spec.get("option_type", "call")
            style = spec.get("style", "european")

            # Price option
            if style.lower() == "european":
                result = self.price_european_option(S0, K, r, q, sigma, T, option_type)
            else:
                result = self.price_american_option(S0, K, r, q, sigma, T, option_type)

            # Calculate Greeks if requested
            greeks = {}
            if spec.get("calculate_greeks", False):
                greeks = self.calculate_greeks(
                    S0, K, r, q, sigma, T, option_type, style
                )

            # Compile results
            result_dict = {
                "option_id": i,
                "S0": S0,
                "K": K,
                "r": r,
                "q": q,
                "sigma": sigma,
                "T": T,
                "option_type": option_type,
                "style": style,
                "price": result["price"],
                "std_error": result["std_error"],
                "lower_bound": result["lower_bound"],
                "upper_bound": result["upper_bound"],
            }

            # Add Greeks if calculated
            result_dict.update(greeks)

            results.append(result_dict)

        return pd.DataFrame(results)
