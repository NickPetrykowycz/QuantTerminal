# This program calculates the price of a european call/put option using the black-scholes model.
# It also provides a little explanation behind the black-scholes formula.
# Designed and created by Nick Petrykowycz 2025.

    # === Black-Scholes Formula Overview ===
    # The Black-Scholes formula provides a theoretical estimate of the price of European-style options.

    # === Black-Scholes Assumptions ===
    # - Markets are frictionless (no transaction costs or taxes).
    # - The risk-free interest rate and volatility are constant.
    # - Stock prices are lognormally distributed
    # - The stock pays no dividends (unless adjusted via q).
    # - The underlying follows a geometric Brownian motion.
    # - European-style option: exercisable only at maturity.

    # === Call Option Value Formula ===
    # C = S0 * e^(-qT) * N(d1) - K * e^(-rT) * N(d2)
    # The formula calculates the expected gain from holding the option,
    # discounted to present value and weighted by probabilities under the risk-neutral measure.
    # Call Value = Expected Benefit - Expected Cost.
    # e^(-qT) is only included if there is dividend yield.

    # === Put Option Value Formula ===
    # P = K * e^(-rT) * N(-d2) - S0 * e^(-qT) * N(-d1)
    # The formula calculates the expected gain from having the right to sell the asset at the strike price,
    # discounted to present value and weighted by probabilities under the risk-neutral measure.
    # Put Value = Expected Benefit - Expected Cost.
    # e^(-qT) is only included if there is dividend yield.

    # === Expected Benefit and Expected Cost Breakdown ===

    # --- For Call Options ---
    # Expected Benefit (Call): S0 * e^(-qT) * N(d1)
    #   - This term represents the benefit of being able to buy the stock at expiry if it's worth more than the strike.
    #   - N(d1) approximates the probability (under risk-neutral measure) that the option ends up in the money,
    #     adjusted for volatility and time.
    #   - e^(-qT) discounts the benefit due to lost dividends while holding the option.
    
    # Expected Cost (Call): K * e^(-rT) * N(d2)
    #   - This is the present value of the expected cost of exercising the option (paying the strike).
    #   - N(d2) represents the risk-neutral probability that the option finishes in the money.

    # --- For Put Options ---
    # Expected Benefit (Put): K * e^(-rT) * N(-d2)
    #   - This is the present value of the strike you would receive if you sell the stock at strike price.
    #   - N(-d2) is the risk-neutral probability that the option finishes in the money (S_T < K).

    # Expected Cost (Put): S0 * e^(-qT) * N(-d1)
    #   - This represents the opportunity cost of not holding the stock (e.g., if the stock price recovers).
    #   - e^(-qT) accounts for lost dividends you would have received if you had held the stock.

    # N(d1) - Delta/Hedge Ratio
    # It approximates the sensitivity of the option price to changes in the underlying stock price.
    # It's also interpreted as the risk-neutral probability that the option will be exercised and that you'll actially end up owning the stock.
    # If you're delta hedgind, N(d1) tells you how many shares to hold per option written.

    # N(d2) - Risk-Neutral Probability of Exercise.
    # Risk-Nuetral probability that S_T > K.
    # S_T : the stock price at expiration.
    # K   : the strike price.
    # N(d2) is the probability that the option end up in the money (under the risk-neutral measure, not the real world one).

    # d1
    # Measures how far (in standard deviations) the expected stock price at maturity is above the strike price.
    # It captures the stock's moneyness, time to maturity, risk-free rate, dividend yield, and volatility.
    # Numerator: ln(S0 / K) + (r - q + 0.5 * sigma^2) * T
    #   - ln(S0 / K) = how far in or out of the money the option is.
    #   - (r - q) * T = the expected growth rate under the risk-neutral measure.
    #   - 0.5 * sigma^2 * T = the volatility adjustment (accounts for diffusion).
    # Denominator: sigma * sqrt(T)
    #   - This scales the numerator by how uncertain the stock's return is over time (standard deviation of log returns).
    # Interpretation: a "z-score" of how likely the option will be exercised profitably, considering time and uncertainty.

    # d2
    # Equal to d1 minus one standard deviation of uncertainty: d2 = d1 - sigma * sqrt(T)
    # Represents the risk-neutral probability that the option finishes in the money (S_T > K).
    # Reflects the adjusted "distance" between the expected stock price and the strike price under uncertainty.
    # Interpretation: used in the Black-Scholes formula to discount the strike price by the probability of exercise.

# === Variable Meanings ===

    # C        - Price of European Call Option.
    # P        - Price of European Put Option.
    # S0       - Current Stock Price.
    # K        - Strike Price (price you pay to buy/sell stock at expiry).
    # T        - Time to maturity (in years).
    # r        - Risk-free interest rate (continiously compounded).
    # sigma    - Volatility of the stock's returns (standard deviation). Represents the market’s expectation of future uncertainty.
    #            Higher volatility increases the chance of large price moves, which increases option value.
    # N(x)     - CDF of the standard normal distribution. (gives probability that a standard normal variable is less than or equal to x).
    # q        - Continious dividend yield.
 

# === Import Libraries ===
import numpy as np
from scipy.stats import norm

# === Define Functions ===

#d1: Moneyness Adjusted for Volatility and Time
def d1(S0, K, T, r, sigma, q=None):
    q = 0 if q is None else q
    numerator = np.log(S0 / K) + (r - q + 0.5 * sigma**2) * T
    denominator = sigma * np.sqrt(T)
    return numerator / denominator

#d2 Risk-Adjusted Probability of Exercise
def d2(S0, K, T, r, sigma, q=None):
    q = 0 if q is None else q 
    numerator = np.log(S0 / K) + (r - q - 0.5 * sigma**2) * T
    denominator = sigma * np.sqrt(T)
    return numerator / denominator

def callOptionPrice(S0, K, T, r, sigma, q=None):
 # d1 and d2
    d1_v = d1(S0, K, T, r, sigma, q)
    d2_v = d2(S0, K, T, r, sigma, q)

    # Spot Price Adjustment
    spa = 1
    if q != None:
        spa = np.exp(-q*T)

    # Present Value Factor
    pvf = np.exp(-r*T)

    #Call Option price
    return S0*spa*norm.cdf(d1_v) - K*pvf*norm.cdf(d2_v)

def putOptionPrice(S0, K, T, r, sigma, q=None):
 # d1 and d2
    d1_v = d1(S0, K, T, r, sigma, q)
    d2_v = d2(S0, K, T, r, sigma, q)

    # Spot Price Adjustment
    spa = 1
    if q != None:
        spa = np.exp(-q*T)

    # Present Value Factor
    pvf = np.exp(-r*T)

    #Call Option price
    return K*pvf*norm.cdf(-d2_v) - S0*spa*norm.cdf(-d1_v)

# === Main Execution ===

def main():

    # Values
    S0 = 120
    K = 100
    T = 0.5
    r = 0.04
    sigma = 0.25
    q = 0.03

    C = callOptionPrice(S0, K, T, r, sigma, q)
    P = putOptionPrice(S0, K, T, r, sigma, q)

    print(f"Price of Call Option: {C:.2f}")
    print(f"Price of Put Option:  {P:.2f}")

# === Script Entry Point ===
if __name__ == "__main__":
    main()