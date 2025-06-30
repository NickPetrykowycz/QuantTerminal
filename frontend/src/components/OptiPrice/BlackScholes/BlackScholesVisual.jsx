import React from 'react';
import BlackScholesFormula from './BlackScholesFormula';
import BlackScholesChart from './BlackScholesChart';

function BlackScholesVisual({ form }) {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Black-Scholes Model
        </h2>
        <p className="text-gray-600">
          Analytical solution for European option pricing
        </p>
      </div>

      <BlackScholesFormula
        S0={form.S0}
        K={form.K}
        T={form.T}
        r={form.r}
        sigma={form.sigma}
        q={form.q}
        includeDividend={form.includeDividend}
        option_type={form.option_type}
      />

      <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
        <BlackScholesChart form={form} />
      </div>
    </div>
  );
}

export default BlackScholesVisual;