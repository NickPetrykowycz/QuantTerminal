import React from 'react';
import { erf } from 'mathjs';

function normcdf(x) {
  return 0.5 * (1 + erf(x / Math.sqrt(2)));
}

function BlackScholesFormula({ S0, K, T, r, sigma, q }) {
  const d1 =
    (Math.log(S0 / K) + (r - q + 0.5 * sigma ** 2) * T) /
    (sigma * Math.sqrt(T));
  const d2 = d1 - sigma * Math.sqrt(T);

  const Nd1 = normcdf(d1);
  const Nd2 = normcdf(d2);

  const discountedS = S0 * Math.exp(-q * T);
  const discountedK = K * Math.exp(-r * T);
  const callPrice = discountedS * Nd1 - discountedK * Nd2;

  return (
    <div className="text-green-300 font-mono space-y-4 text-sm">
      <h2 className="text-xl font-bold text-green-400 mb-2">
        Black-Scholes Formula (Call Option)
      </h2>
      <pre>
        C = S₀ × e^(-qT) × N(d₁) - K × e^(-rT) × N(d₂)
      </pre>
      <pre>
        C = {S0} × e^(-{q}×{T}) × N({d1.toFixed(4)}) - {K} × e^(-{r}×{T}) × N({d2.toFixed(4)})
      </pre>
      <pre>
        C = {discountedS.toFixed(2)} × {Nd1.toFixed(4)} - {discountedK.toFixed(2)} × {Nd2.toFixed(4)}
      </pre>
      <pre className="text-green-500 font-bold text-lg">
        ≈ ${callPrice.toFixed(4)}
      </pre>
    </div>
  );
}

export default BlackScholesFormula;
