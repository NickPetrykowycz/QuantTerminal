import numpy as np


def price_binomial(
    S0,
    K,
    r,
    sigma,
    T,
    N,
    option_type="call",
    style="european",
    dividend_mode="none",
    q=0.0,
    div_amt=None,
    div_freq=None,
    div_first_day=None,
):
    """
    Vectorized binomial option pricing with Hull's dividend method (industry standard).

    Parameters
    ----------
    S0 : float - Initial stock price
    K : float - Strike price
    r : float - Risk-free annual interest rate (as a decimal)
    sigma : float - Annual volatility (as a decimal)
    T : float - Time to maturity (in years)
    N : int - Number of binomial steps
    option_type : str - 'call' or 'put'
    style : str - 'european' or 'american'
    dividend_mode : str - 'none', 'yield', or 'discrete'
    q : float - Continuous dividend yield (only if dividend_mode='yield')
    div_amt : float or None - Per-dividend cash amount (if 'discrete')
    div_freq : int or None - Number of days between dividends (if 'discrete')
    div_first_day : int or None - Days after t=0 for first dividend (if 'discrete')
    """

    dt = T / N
    disc = np.exp(-r * dt)

    # Calculate present value of dividends and adjust initial stock price (Hull method)
    S0_adj = S0
    if (
        dividend_mode == "discrete"
        and div_amt
        and div_freq
        and div_first_day is not None
    ):
        pv_dividends = 0.0
        current_div_day = div_first_day

        while current_div_day <= T * 365:
            div_time = current_div_day / 365.0
            if div_time <= T:
                pv_dividends += div_amt * np.exp(-r * div_time)
            current_div_day += div_freq

        S0_adj = S0 - pv_dividends

    # Dividend yield adjustment
    q_adj = q if dividend_mode == "yield" else 0.0

    # Binomial parameters using adjusted stock price
    u = np.exp(sigma * np.sqrt(dt))
    d = 1 / u
    pu = (np.exp((r - q_adj) * dt) - d) / (u - d)
    pd = 1 - pu

    # Vectorized stock price calculation at maturity
    j_values = np.arange(N + 1)  # j = 0, 1, ..., N (number of down moves)
    up_moves = N - j_values  # number of up moves
    down_moves = j_values  # number of down moves

    # Stock prices at maturity using adjusted initial price
    S_final = S0_adj * (u**up_moves) * (d**down_moves)

    # Option values at maturity
    if option_type == "call":
        option_values = np.maximum(S_final - K, 0)
    else:
        option_values = np.maximum(K - S_final, 0)

    # Vectorized backward induction
    for step in range(N - 1, -1, -1):
        # Number of nodes at this step
        n_nodes = step + 1

        # Expected option values (vectorized)
        expected_values = (
            pu * option_values[:n_nodes] + pd * option_values[1 : n_nodes + 1]
        ) * disc

        # For American options, check early exercise
        if style == "american":
            # Calculate stock prices at current step using adjusted initial price
            j_curr = np.arange(n_nodes)
            up_curr = step - j_curr
            down_curr = j_curr
            S_curr = S0_adj * (u**up_curr) * (d**down_curr)

            # Intrinsic values (vectorized)
            if option_type == "call":
                intrinsic_values = np.maximum(S_curr - K, 0)
            else:
                intrinsic_values = np.maximum(K - S_curr, 0)

            # Take maximum of expected and intrinsic values (vectorized)
            option_values = np.maximum(expected_values, intrinsic_values)
        else:
            option_values = expected_values

    return float(option_values[0])
