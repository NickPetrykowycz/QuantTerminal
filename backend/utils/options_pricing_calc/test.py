import numpy as np
from typing import Optional, Tuple


def price_american_option_accurate(
    S0: float, 
    K: float, 
    r: float, 
    sigma: float, 
    T: float, 
    option_type: str = 'call',
    div_amount: Optional[float] = None,
    div_days: Optional[int] = None,
    N: int = 2000,
    use_acceleration: bool = True
) -> float:
    """
    Most accurate vectorized binomial pricing for American options.
    
    Features:
    - Richardson extrapolation for bias reduction
    - Optimal step count (2000+ for accuracy)
    - Vectorized operations for speed
    - Proper discrete dividend handling
    - Acceleration techniques
    
    Parameters:
    -----------
    S0 : float - Current stock price
    K : float - Strike price  
    r : float - Risk-free rate (annual)
    sigma : float - Volatility (annual)
    T : float - Time to expiration (years)
    option_type : str - 'call' or 'put'
    div_amount : float - Dividend amount (if any)
    div_days : int - Days until dividend (if any)
    N : int - Number of time steps (recommended: 2000+)
    use_acceleration : bool - Use Richardson extrapolation
    
    Returns:
    --------
    float - Option price
    """
    
    if use_acceleration and N >= 500:
        # Richardson extrapolation: more accurate for smooth payoffs
        p1 = _binomial_core_vectorized(S0, K, r, sigma, T, N, option_type, div_amount, div_days)
        p2 = _binomial_core_vectorized(S0, K, r, sigma, T, N*2, option_type, div_amount, div_days)
        
        # Second-order Richardson: P ≈ (4*P(2N) - P(N)) / 3
        return (4.0 * p2 - p1) / 3.0
    else:
        return _binomial_core_vectorized(S0, K, r, sigma, T, N, option_type, div_amount, div_days)


def _binomial_core_vectorized(
    S0: float, K: float, r: float, sigma: float, T: float, N: int,
    option_type: str, div_amount: Optional[float], div_days: Optional[int]
) -> float:
    """Vectorized binomial core with optimal numerical techniques"""
    
    dt = T / N
    
    # Handle discrete dividend (Hull's method)
    S0_adj = S0
    if div_amount is not None and div_days is not None:
        div_time = div_days / 365.0
        if 0 < div_time <= T:
            pv_dividend = div_amount * np.exp(-r * div_time)
            S0_adj = S0 - pv_dividend
    
    # Binomial parameters (CRR)
    u = np.exp(sigma * np.sqrt(dt))
    d = 1.0 / u
    pu = (np.exp(r * dt) - d) / (u - d)
    disc = np.exp(-r * dt)
    
    # Validate numerical stability
    if not (0 < pu < 1):
        raise ValueError(f"Unstable binomial parameters: pu={pu:.6f}")
    
    # Vectorized final stock prices
    # At maturity: j down moves, (N-j) up moves
    j_values = np.arange(N + 1)  # 0, 1, 2, ..., N
    up_moves = N - j_values      # N, N-1, N-2, ..., 0
    down_moves = j_values        # 0, 1, 2, ..., N
    
    # Final stock prices: S0_adj * u^(up_moves) * d^(down_moves)
    final_prices = S0_adj * (u ** up_moves) * (d ** down_moves)
    
    # Final option payoffs
    if option_type.lower() == 'call':
        option_values = np.maximum(final_prices - K, 0.0)
    else:  # put
        option_values = np.maximum(K - final_prices, 0.0)
    
    # Backward induction (vectorized)
    for step in range(N - 1, -1, -1):
        # Number of nodes at this step
        n_nodes = step + 1
        
        # Expected continuation values
        # V[j] = (pu * V[j] + (1-pu) * V[j+1]) * discount
        expected_values = (pu * option_values[:n_nodes] + 
                          (1 - pu) * option_values[1:n_nodes+1]) * disc
        
        # American early exercise check
        # Current stock prices at step
        j_current = np.arange(n_nodes)
        up_current = step - j_current
        down_current = j_current
        current_prices = S0_adj * (u ** up_current) * (d ** down_current)
        
        # Intrinsic values
        if option_type.lower() == 'call':
            intrinsic_values = np.maximum(current_prices - K, 0.0)
        else:  # put
            intrinsic_values = np.maximum(K - current_prices, 0.0)
        
        # American option value: max(continuation, exercise)
        option_values = np.maximum(expected_values, intrinsic_values)
    
    return option_values[0]


def price_european_benchmark(
    S0: float, K: float, r: float, sigma: float, T: float, option_type: str = 'call',
    div_amount: Optional[float] = None, div_days: Optional[int] = None
) -> float:
    """Black-Scholes European benchmark for comparison"""
    
    # Adjust for discrete dividend
    S_adj = S0
    if div_amount is not None and div_days is not None:
        div_time = div_days / 365.0
        if 0 < div_time <= T:
            pv_dividend = div_amount * np.exp(-r * div_time)
            S_adj = S0 - pv_dividend
    
    # Black-Scholes formula
    d1 = (np.log(S_adj / K) + (r + 0.5 * sigma**2) * T) / (sigma * np.sqrt(T))
    d2 = d1 - sigma * np.sqrt(T)
    
    # Cumulative normal distribution
    from scipy.stats import norm
    N1 = norm.cdf(d1)
    N2 = norm.cdf(d2)
    
    if option_type.lower() == 'call':
        return S_adj * N1 - K * np.exp(-r * T) * N2
    else:  # put
        return K * np.exp(-r * T) * norm.cdf(-d2) - S_adj * norm.cdf(-d1)


def comprehensive_accuracy_test():
    """Test accuracy against multiple benchmarks"""
    
    print("=== MOST ACCURATE BINOMIAL PRICING TEST ===\n")
    
    # Your parameters
    S0, K, r, sigma, T = 100.0, 100.0, 0.05, 0.2, 1.0
    div_amount, div_days = 10.0, 151
    
    print(f"Parameters: S=${S0}, K=${K}, r={r*100}%, vol={sigma*100}%, T={T}yr")
    print(f"Dividend: ${div_amount} on day {div_days}")
    
    # Calculate adjustments
    div_time = div_days / 365.0
    pv_dividend = div_amount * np.exp(-r * div_time)
    print(f"PV of dividend: ${pv_dividend:.4f}")
    print(f"Effective stock price: ${S0 - pv_dividend:.4f}\n")
    
    # Test different step counts for convergence
    step_counts = [500, 1000, 2000, 4000]
    
    print("1. CONVERGENCE ANALYSIS:")
    print("-" * 70)
    print(f"{'Steps':<8} {'Call':<10} {'Put':<10} {'Call (Rich)':<12} {'Put (Rich)':<12}")
    print("-" * 70)
    
    results = {}
    for N in step_counts:
        # Standard binomial
        call_std = price_american_option_accurate(
            S0, K, r, sigma, T, 'call', div_amount, div_days, N, use_acceleration=False
        )
        put_std = price_american_option_accurate(
            S0, K, r, sigma, T, 'put', div_amount, div_days, N, use_acceleration=False
        )
        
        # Richardson accelerated
        call_rich = price_american_option_accurate(
            S0, K, r, sigma, T, 'call', div_amount, div_days, N, use_acceleration=True
        )
        put_rich = price_american_option_accurate(
            S0, K, r, sigma, T, 'put', div_amount, div_days, N, use_acceleration=True
        )
        
        print(f"{N:<8} {call_std:<10.5f} {put_std:<10.5f} {call_rich:<12.5f} {put_rich:<12.5f}")
        results[N] = {
            'call_std': call_std, 'put_std': put_std,
            'call_rich': call_rich, 'put_rich': put_rich
        }
    
    # European benchmarks
    print("\n2. EUROPEAN BENCHMARKS:")
    print("-" * 40)
    euro_call = price_european_benchmark(S0, K, r, sigma, T, 'call', div_amount, div_days)
    euro_put = price_european_benchmark(S0, K, r, sigma, T, 'put', div_amount, div_days)
    
    print(f"Black-Scholes Call: {euro_call:.5f}")
    print(f"Black-Scholes Put:  {euro_put:.5f}")
    
    # Best estimates (highest step count with Richardson)
    best_call = results[max(step_counts)]['call_rich']
    best_put = results[max(step_counts)]['put_rich']
    
    print("\n3. FINAL ACCURATE RESULTS:")
    print("-" * 40)
    print(f"American Call: {best_call:.5f}")
    print(f"American Put:  {best_put:.5f}")
    
    # Early exercise premiums
    call_premium = best_call - euro_call
    put_premium = best_put - euro_put
    
    print(f"\nEarly Exercise Premiums:")
    print(f"Call: {call_premium:+.5f}")
    print(f"Put:  {put_premium:+.5f}")
    
    print("\n4. ACCURACY VALIDATION:")
    print("-" * 40)
    
    # Convergence check
    conv_call = abs(results[4000]['call_rich'] - results[2000]['call_rich'])
    conv_put = abs(results[4000]['put_rich'] - results[2000]['put_rich'])
    
    print(f"Convergence (4000 vs 2000 steps):")
    print(f"Call difference: {conv_call:.6f}")
    print(f"Put difference:  {conv_put:.6f}")
    
    if conv_call < 0.001 and conv_put < 0.001:
        print("Excellent convergence achieved")
    elif conv_call < 0.01 and conv_put < 0.01:
        print("Good convergence achieved")
    else:
        print("May need more steps for full convergence")
    
    # Comparison to your results
    print(f"\n5. COMPARISON TO YOUR RESULTS:")
    print("-" * 40)
    print(f"Your Call:     6.0427")
    print(f"Accurate Call: {best_call:.4f}")
    print(f"Difference:    {best_call - 6.0427:+.4f}")
    
    print(f"\nYour Put:      10.6780")
    print(f"Accurate Put:  {best_put:.4f}")
    print(f"Difference:    {best_put - 10.6780:+.4f}")
    
    return {
        'call': best_call,
        'put': best_put,
        'euro_call': euro_call,
        'euro_put': euro_put,
        'convergence': (conv_call, conv_put)
    }


# Simplified function for quick use
def quick_american_price(S0, K, r, sigma, T, option_type, div_amount=None, div_days=None):
    """Quick function for most accurate American option pricing"""
    return price_american_option_accurate(
        S0, K, r, sigma, T, option_type, div_amount, div_days, N=2000, use_acceleration=True
    )


if __name__ == "__main__":
    # Run comprehensive test
    results = comprehensive_accuracy_test()
    
    print(f"\n{'='*60}")
    print("FINAL RECOMMENDATIONS:")
    print(f"{'='*60}")
    print(f"Use these values for industry-standard accuracy:")
    print(f"American Call: {results['call']:.4f}")
    print(f"American Put:  {results['put']:.4f}")
    
    # Quick example usage
    print(f"\nQuick usage example:")
    print("call_price = quick_american_price(100, 100, 0.05, 0.2, 1.0, 'call', 10.0, 151)")
    print("put_price = quick_american_price(100, 100, 0.05, 0.2, 1.0, 'put', 10.0, 151)")