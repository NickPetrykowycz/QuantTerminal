import React from 'react';
import BlackScholesFormula from './BlackScholesFormula';
import BlackScholesChart from './BlackScholesChart';

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
        includeDividend={form.includeDividend}
        option_type={form.option_type}
      />
      <BlackScholesChart form={form} />
    </div>
  );
}

export default BlackScholesVisual;
