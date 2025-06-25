import numpy as np
from math import exp, sqrt

def price_binomial(S0, K, r, sigma, T, N,
                   option_type='call', style='european',
                   dividend_mode='none', q=0.0,
                   div_freq=None, div_amt=None, div_first_day=None):
    """
    Binomial option pricing with three dividend modes and European/American style:
    - style='european': no early exercise
    - style='american': allow early exercise
    Dividend modes:
      * 'none': No dividends
      * 'yield': Continuous dividend yield q
      * 'discrete': Fixed discrete dividends

    Parameters:
      S0 (float): initial stock price
      K  (float): strike price
      r  (float): risk-free rate (annual)
      sigma (float): volatility (annual)
      T  (float): time to expiry (years)
      N  (int): number of time steps
      option_type (str): 'call' or 'put'
      style (str): 'european' or 'american'
      dividend_mode (str): 'none' | 'yield' | 'discrete'
      q (float): continuous dividend yield (if mode='yield')
      div_freq (int): days between dividends (if mode='discrete')
      div_amt (float): dividend amount per payment
      div_first_day (int): days until first payment
    Returns:
      float: option price
    """
    dt = T / N
    yd = q if dividend_mode == 'yield' else 0.0

    # up/down factors
    u = exp((r - yd) * dt + sigma * sqrt(dt))
    d = exp((r - yd) * dt - sigma * sqrt(dt))
    p = (exp((r - yd) * dt) - d) / (u - d)

    # asset price at maturity
    ST = S0 * d**np.arange(N, -1, -1) * u**np.arange(0, N+1)
    if option_type == 'call':
        option = np.maximum(ST - K, 0.0)
    else:
        option = np.maximum(K - ST, 0.0)

    # discrete dividend steps
    if dividend_mode == 'discrete' and div_freq and div_amt is not None and div_first_day is not None:
        steps_per_year = N / (T * 365)
        first_step = int(div_first_day * steps_per_year)
        freq_steps = int(div_freq * steps_per_year)
        div_steps = set(range(first_step, N, freq_steps))
    else:
        div_steps = set()

    # backward induction
    for step in range(N-1, -1, -1):
        for i in range(step+1):
            cont = exp(-r * dt) * (p * option[i+1] + (1-p) * option[i])

            # compute underlying at this node
            S_node = S0 * (u**i) * (d**(step - i)) * exp(-yd * dt * step)
            if step in div_steps:
                S_node = max(S_node - div_amt, 0.0)

            # exercise payoff
            if option_type == 'call':
                exercise = max(S_node - K, 0.0)
            else:
                exercise = max(K - S_node, 0.0)

            # choose continuation or exercise
            if style == 'american':
                option[i] = max(cont, exercise)
            else:
                option[i] = cont

    return option[0]

# wrappers

def call_price(*args, **kwargs):
    return price_binomial(*args, option_type='call', **kwargs)

def put_price(*args, **kwargs):
    return price_binomial(*args, option_type='put', **kwargs)
