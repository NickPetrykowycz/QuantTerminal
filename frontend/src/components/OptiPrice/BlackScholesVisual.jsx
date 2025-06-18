import React from 'react';
import BlackScholesFormula from './BlackScholesFormula';

function BlackScholesVisual({ form }) {
  return (
    <div>
      <BlackScholesFormula
        S0={form.S0}
        K={form.K}
        T={form.T}
        r={form.r}
        sigma={form.sigma}
        q={form.q}
      />
    </div>
  );
}

export default BlackScholesVisual;
