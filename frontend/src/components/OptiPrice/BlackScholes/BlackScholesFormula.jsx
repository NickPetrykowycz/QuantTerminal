import React from "react";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

function BlackScholesFormula({
  S0,
  K,
  T,
  r,
  sigma,
  q,
  includeDividend,
  option_type,
}) {
  const isCall = option_type === "call";

  // Calculate price if all values are provided
  let price = null;
  if (S0 && K && T && r && sigma) {
    const adjQ = includeDividend ? q || 0 : 0;
    const d1 =
      (Math.log(S0 / K) + (r - adjQ + 0.5 * sigma ** 2) * T) /
      (sigma * Math.sqrt(T));
    const d2 = d1 - sigma * Math.sqrt(T);

    // Cumulative normal distribution approximation
    const normcdf = (x) =>
      0.5 *
      (1 + Math.sign(x) * Math.sqrt(1 - Math.exp((-2 * x * x) / Math.PI)));

    if (isCall) {
      price =
        S0 * Math.exp(-adjQ * T) * normcdf(d1) -
        K * Math.exp(-r * T) * normcdf(d2);
    } else {
      price =
        K * Math.exp(-r * T) * normcdf(-d2) -
        S0 * Math.exp(-adjQ * T) * normcdf(-d1);
    }
  }

  // LaTeX formatting for KaTeX
  const s = S0 || "S_0";
  const k = K || "K";
  const t = T || "T";
  const rf = r || "r";
  const vol = sigma || "\\sigma";
  const div = q || "q";
  const displayPrice = isCall ? "C" : "P";

  // KaTeX formulas
  const d1Latex = `d_1 = \\frac{\\ln\\left(\\frac{${s}}{${k}}\\right) + \\left(${rf}${includeDividend ? ` - ${div}` : ""} + \\frac{${vol}^2}{2}\\right)${t}}{${vol}\\sqrt{${t}}}`;
  const d2Latex = `d_2 = d_1 - ${vol}\\sqrt{${t}}`;

  // Main pricing formula
  const priceLatex = isCall
    ? `${displayPrice} = ${s}${includeDividend ? `e^{-${div}${t}}` : ""}N(d_1) - ${k}e^{-${rf}${t}}N(d_2)`
    : `${displayPrice} = ${k}e^{-${rf}${t}}N(-d_2) - ${s}${includeDividend ? `e^{-${div}${t}}` : ""}N(-d_1)`;

  const resultLatex =
    price !== null
      ? `${displayPrice} \\approx ${price.toFixed(4)}`
      : `${displayPrice} = ?`;

  // Check if all required fields are filled
  const requiredFieldsFilled = S0 && K && T && r && sigma;

  return (
    <div className="space-y-8">
      {/* Price Display */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200 shadow-sm p-6">
        <div className="text-center">
          <p className="text-sm text-green-600 mb-1">
            European {isCall ? "Call Option" : "Put Option"}{includeDividend ? " with Dividend Yield" : ""} Price
          </p>
          <div className="text-3xl font-bold text-green-700">
            {requiredFieldsFilled
              ? `$${price?.toFixed(4) || '0.0000'}`
              : '—'
            }
          </div>
        </div>
      </div>

      {/* Formula Section */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
        <div className="text-center mb-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Black-Scholes Formula
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Main Formula */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
            <div className="text-center" style={{ color: "#1e40af" }}>
              <div className="text-xl">
                <InlineMath math={priceLatex} />
              </div>
            </div>
          </div>

          {/* Result */}
          <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-xl p-6 border border-red-200">
            <div className="text-center" style={{ color: "#dc2626" }}>
              <div className="text-2xl font-bold">
                <InlineMath math={resultLatex} />
              </div>
            </div>
          </div>

          {/* d1 Formula */}
          <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 border border-purple-200">
            <div className="text-center" style={{ color: "#6b21a8" }}>
              <div className="text-lg">
                <InlineMath math={d1Latex} />
              </div>
            </div>
          </div>

          {/* d2 Formula */}
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border border-orange-200">
            <div className="text-center" style={{ color: "#c2410c" }}>
              <div className="text-lg">
                <InlineMath math={d2Latex} />
              </div>
            </div>
          </div>
        </div>

        {/* Parameter Explanations */}
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mt-6">
          <h4 className="text-sm font-medium text-gray-800 mb-4">
            Parameter Definitions
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            <div>
              <span className="font-medium">S₀:</span> Current stock price
            </div>
            <div>
              <span className="font-medium">K:</span> Strike price
            </div>
            <div>
              <span className="font-medium">T:</span> Time to expiration
            </div>
            <div>
              <span className="font-medium">r:</span> Risk-free rate
            </div>
            <div>
              <span className="font-medium">σ:</span> Volatility
            </div>
            {includeDividend && (
              <div>
                <span className="font-medium">q:</span> Dividend yield
              </div>
            )}
            <div>
              <span className="font-medium">N(x):</span> Standard normal CDF
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlackScholesFormula;