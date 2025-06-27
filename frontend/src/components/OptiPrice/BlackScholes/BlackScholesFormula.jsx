import React from 'react';
import { erf } from 'mathjs';
import { MathJax } from 'better-react-mathjax';

function normcdf(x) {
  return 0.5 * (1 + erf(x / Math.sqrt(2)));
}

function getValOrSymbol(val, symbol) {
  return val !== '' && val !== null && !isNaN(val) ? val : symbol;
}

function allFilled(...args) {
  return args.every((v) => v !== '' && v !== null && !isNaN(v));
}

function BlackScholesFormula({ S0, K, T, r, sigma, q, includeDividend, option_type }) {
  const isCall = option_type === 'call';
  const displayPrice = isCall ? 'C' : 'P';

  const s = getValOrSymbol(S0, 'S₀');
  const k = getValOrSymbol(K, 'K');
  const t = getValOrSymbol(T, 'T');
  const rf = getValOrSymbol(r, 'r');
  const vol = getValOrSymbol(sigma, 'σ');
  const div = getValOrSymbol(q, 'q');

  let d1, d2, price = null;

  if (allFilled(S0, K, T, r, sigma) && (!includeDividend || q !== '')) {
    const adjQ = includeDividend ? q : 0;
    d1 = (Math.log(S0 / K) + (r - adjQ + 0.5 * sigma ** 2) * T) / (sigma * Math.sqrt(T));
    d2 = d1 - sigma * Math.sqrt(T);

    if (isCall) {
      const Nd1 = normcdf(d1);
      const Nd2 = normcdf(d2);
      price = S0 * Math.exp(-adjQ * T) * Nd1 - K * Math.exp(-r * T) * Nd2;
    } else {
      const N_neg_d1 = normcdf(-d1);
      const N_neg_d2 = normcdf(-d2);
      price = K * Math.exp(-r * T) * N_neg_d2 - S0 * Math.exp(-adjQ * T) * N_neg_d1;
    }
  }

  const d1Latex = includeDividend
    ? `\\frac{\\ln\\left(\\frac{${s}}{${k}}\\right) + \\left(${rf} - ${div} + \\frac{${vol}^2}{2}\\right)${t}}{${vol}\\sqrt{${t}}}`
    : `\\frac{\\ln\\left(\\frac{${s}}{${k}}\\right) + \\left(${rf} + \\frac{${vol}^2}{2}\\right)${t}}{${vol}\\sqrt{${t}}}`;

  const d2Latex = `d_1 - ${vol}\\sqrt{${t}}`;

  const priceLatex = isCall
    ? `${displayPrice} = ${s}${includeDividend ? `e^{- ${div}${t}}` : ''}N(d_1) - ${k}e^{- ${rf}${t}}N(d_2)`
    : `${displayPrice} = ${k}e^{- ${rf}${t}}N(-d_2) - ${s}${includeDividend ? `e^{- ${div}${t}}` : ''}N(-d_1)`;

  const resultLatex = price !== null ? `${displayPrice} \\approx ${price.toFixed(4)}` : `${displayPrice} =`;

return (
  <div className="text-green-300 font-mono px-4">
    <h1 className="text-4xl md:text-4xl font-bold text-green-400 text-center mb-2">
      Black-Scholes Formula
    </h1>

    <p className="text-center text-green-300 text-xl mb-8">
      {isCall ? 'Call Option' : 'Put Option'}
    </p>

      <div className="grid [grid-template-columns:2fr_1fr] grid-rows-2 gap-6 ml-6">

        <div className="flex items-center justify-left text-center text-2xl p-4 min-h-[120px] mathjax-wrapper">
          <MathJax dynamic>{`\\[ ${priceLatex} \\]`}</MathJax>
        </div>

        <div className="flex items-center justify-left text-center text-green-500 text-2xl p-4 min-h-[120px] mathjax-wrapper">
          <MathJax dynamic>{`\\[ ${resultLatex} \\]`}</MathJax>
        </div>

        <div className="flex items-center justify-left text-center text-2xl p-4 min-h-[120px] mathjax-wrapper">
          <MathJax dynamic>{`\\[ d_1 = ${d1Latex} \\]`}</MathJax>
        </div>

        <div className="flex items-center justify-left text-center text-2xl p-4 min-h-[120px] mathjax-wrapper">
          <MathJax dynamic>{`\\[ d_2 = ${d2Latex} \\]`}</MathJax>
        </div>
    </div>
  </div>
);


}

export default BlackScholesFormula;
