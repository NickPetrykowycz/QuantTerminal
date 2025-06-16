# This program calculates the price of a European or American call/put option using the binomial options pricing model.
# It supports both continuous dividend yields and discrete dividend payouts in multiple user-defined formats.
# Designed and created by Nick Petrykowycz 2025.

# === Binomial Model Overview ===
# The binomial options pricing model simulates stock price paths through discrete time intervals.
# At each step, the stock moves up or down. This forms a recombining binomial tree.
# At expiry, option payoffs are known and are discounted back to the present using risk-neutral probabilities.
# American options allow early exercise at each node; European options do not.

# === Binomial Model Assumptions ===
# - Stock prices follow a binomial process (up/down each time step)
# - Risk-free interest rate and volatility are constant
# - No arbitrage and frictionless markets
# - Options are either European (exercise at expiry) or American (exercise any time)
# - Dividends can be modeled as a continuous yield or discrete cash payouts

# === Variable Meanings ===
# S0        - Initial stock price
# K         - Strike price of the option
# T         - Time to maturity (in years)
# r         - Risk-free interest rate (continuously compounded)
# sigma     - Volatility of the stock
# N         - Number of time steps in the binomial model
# option_type - 'call' or 'put'
# american  - Boolean flag: True for American option
# q         - Continuous dividend yield
# dividend_schedule - List of (day, amount) tuples for known dividend payments
# dividend_freq     - Frequency of dividend payments (in days)
# dividend_amt      - Fixed dividend amount per payment
# dividend_first_day - First dividend payment day (from t=0)

# === Import Libraries ===
import numpy as np

# === Helper Function ===
def generate_dividend_steps(T, N, dt, dividend_schedule=None, freq=None, amt=None, first_day=None):
    """Generate a mapping of tree time steps to dividend amounts."""
    dividend_steps = {}
    if dividend_schedule:
        for day, amount in dividend_schedule:
            t = day / 365
            step = int(round(t / dt))
            dividend_steps[step] = dividend_steps.get(step, 0) + amount
    elif freq and amt is not None and first_day is not None:
        start_year = first_day / 365
        freq_years = freq / 365
        n_divs = int((T - start_year) // freq_years) + 1
        for i in range(n_divs):
            t = start_year + i * freq_years
            step = int(round(t / dt))
            dividend_steps[step] = dividend_steps.get(step, 0) + amt
    return dividend_steps

# === Core Pricing Function ===
# Builds the binomial tree and calculates the option price.
# Handles both European and American options with support for continuous and discrete dividends.
def binomial_option_price(S0, K, T, r, sigma, N, option_type='call', american=False,
                          q=None, dividend_schedule=None,
                          dividend_freq=None, dividend_amt=None, dividend_first_day=None):
    # Time step size
    dt = T / N
    # Up and down factors for stock price movement
    u = np.exp(sigma * np.sqrt(dt))
    d = 1 / u
    # Risk-neutral probability of upward move
    p = (np.exp((r - (q if q else 0)) * dt) - d) / (u - d)

    # Get dividend payments as a dictionary {step_index: amount}
    dividend_steps = generate_dividend_steps(
        T, N, dt,
        dividend_schedule=dividend_schedule,
        freq=dividend_freq,
        amt=dividend_amt,
        first_day=dividend_first_day
    )

    # Array for terminal node indices
    j = np.arange(N + 1)
    # Calculate stock prices at maturity
    ST = S0 * (u ** (N - j)) * (d ** j)
    # Subtract dividends from stock prices at maturity
    for step, div in dividend_steps.items():
        ST -= div * ((N - j) >= step)

    # Calculate option value at maturity
    if option_type == 'call':
        option_values = np.maximum(0, ST - K)
    elif option_type == 'put':
        option_values = np.maximum(0, K - ST)

    # Discount factor per time step
    discount = np.exp(-r * dt)

    # Backward induction to calculate option price at earlier nodes
    for i in range(N - 1, -1, -1):
        # Risk-neutral expected value from next time step
        option_values = discount * (p * option_values[:-1] + (1 - p) * option_values[1:])
        # Recalculate stock prices at this step
        ST = S0 * (u ** (i - j[:i+1])) * (d ** j[:i+1])
        # Adjust for dividends paid before or at this step
        for step, div in dividend_steps.items():
            if step <= i:
                ST -= div
        # Check for early exercise (American option)
        if american:
            if option_type == 'call':
                exercise = np.maximum(0, ST - K)
            else:
                exercise = np.maximum(0, K - ST)
            # Choose maximum between holding and early exercise
            option_values = np.maximum(option_values, exercise)

    # Return the option price at the root node
    return option_values[0]

# === Main Execution ===
def main():
    S0 = 100
    K = 105
    T = 1
    r = 0.05
    sigma = 0.2
    N = 150

    discrete_schedule = [(43, 1.0), (64, 1.5)]
    freq_days = 30
    first_day = 43
    dividend_amt = 1.0
    q = 0.03

    american_call_yield = binomial_option_price(S0, K, T, r, sigma, N, option_type='call', american=True, q=q)

    american_put_yield = binomial_option_price(S0, K, T, r, sigma, N, option_type='put', american=True, q=q)

    european_call_yield = binomial_option_price(S0, K, T, r, sigma, N, option_type='call', american=False, q=q)
    european_put_yield = binomial_option_price(S0, K, T, r, sigma, N, option_type='put', american=False, q=q)

    print(f"American Call (Yield):        {american_call_yield:.4f}")
    print(f"American Put  (Yield):        {american_put_yield:.4f}")
    print(f"European Call (Yield):        {european_call_yield:.4f}")
    print(f"European Put  (Yield):        {european_put_yield:.4f}")

# === Script Entry Point ===
if __name__ == "__main__":
    main()
