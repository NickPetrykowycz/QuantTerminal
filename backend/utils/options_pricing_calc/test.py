import matplotlib.pyplot as plt
from Binomial import binomial_option_price

# Parameters
S0 = 100
K = 120
T = 1
r = 0.05
sigma = 0.2
option_type = 'call'
american = True
q = 0.03

# Run for increasing N
Ns = list(range(1, 501))
prices = [binomial_option_price(S0, K, T, r, sigma, N, option_type, american, q=q) for N in Ns]

# Plot
plt.figure(figsize=(10, 6))
plt.plot(Ns, prices, label='Binomial Price')
plt.axhline(prices[-1], linestyle='--', color='gray', label='Asymptotic Value')
plt.xlabel('Number of Steps (N)')
plt.ylabel('Option Price')
plt.title(f'Convergence of Binomial Pricing ({"American" if american else "European"} {option_type.capitalize()})')
plt.legend()
plt.grid(True)
plt.tight_layout()
plt.show()
