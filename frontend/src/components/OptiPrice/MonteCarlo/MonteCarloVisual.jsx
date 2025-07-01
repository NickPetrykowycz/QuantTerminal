import React from "react";
import MonteCarloChart from "./MonteCarloChart";
import MonteCarloPathChart from "./MonteCarloPathChart";

function MonteCarloVisual({
  convergence = [],
  pathSample = [],
  precision = "standard",
  onPrecisionChange,
  onGenerate,
  price,
  form,
  loading,
  confidence_interval = null,
  stats = null,
}) {
  const precisionOptions = [
    { label: "Fast (10K simulations)", value: "fast" },
    { label: "Standard (100K simulations)", value: "standard" },
    { label: "High (1M simulations)", value: "high" },
  ];

  const isCall = form?.option_type === "call";
  const optionTypeText = isCall ? "Call Option" : "Put Option";
  const isAmerican = form?.style === "american" || form?.american === true;
  const styleText = isAmerican ? "American" : "European";

  const divYieldMode = form?.dividend_mode || (form?.includeDividend ? (form?.q ? "yield" : "discrete") : "none");
  const getDividendText = () => {
    if (!form?.includeDividend || divYieldMode === "none") return "";
    if (divYieldMode === "yield") return " with Continuous Dividend Yield";
    if (divYieldMode === "discrete") return " with Discrete Dividends";
    return "";
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Monte Carlo Simulation
        </h2>
        <p className="text-gray-600">
          Stochastic simulation for American/European option pricing
        </p>
      </div>

      {/* Price Display */}
      <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl border border-purple-200 shadow-sm p-6">
        <div className="text-center">
          <p className="text-sm text-purple-600 mb-1">
            {styleText} {optionTypeText}{getDividendText()} Price
          </p>
          <div className="text-3xl font-bold text-purple-700">
            ${typeof price === "number" ? `${price.toFixed(4)}` : "—"}
          </div>
          {confidence_interval && (
            <div className="mt-2 text-sm text-purple-600">
              95% CI: [${confidence_interval.lower?.toFixed(4) || "—"}, ${confidence_interval.upper?.toFixed(4) || "—"}]
            </div>
          )}
          {stats && (
            <div className="mt-2 grid grid-cols-2 gap-4 text-xs text-purple-600">
              <div>
                <span className="font-medium">Std Error:</span> ${stats.std_error?.toFixed(6) || "—"}
              </div>
              <div>
                <span className="font-medium">Simulations:</span> {stats.simulations?.toLocaleString() || "—"}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Precision Settings and Generate Button */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Simulation Settings
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Choose simulation precision. Higher precision provides more accurate results but takes longer to compute.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
          {precisionOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => onPrecisionChange(option.value)}
              disabled={loading}
              className={`p-4 rounded-xl border text-left transition-all duration-200 ${
                precision === option.value
                  ? "bg-gradient-to-r from-purple-50 to-violet-50 border-purple-300 ring-2 ring-purple-500/20"
                  : "bg-white border-gray-200 hover:border-gray-300 hover:bg-gray-50"
              } ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              <div className="font-medium text-gray-900">{option.label}</div>
              <div className="text-sm text-gray-600 mt-1">
                {option.value === "fast" && "Quick approximation"}
                {option.value === "standard" && "Balanced accuracy"}
                {option.value === "high" && "Maximum precision"}
              </div>
            </button>
          ))}
        </div>

        <button
          onClick={onGenerate}
          disabled={loading}
          className={`w-full py-3 px-4 rounded-xl font-medium transition-all duration-200 ${
            loading
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-purple-600 to-violet-600 text-white hover:from-purple-700 hover:to-violet-700 shadow-md hover:shadow-lg"
          }`}
        >
          {loading ? "Running Simulation..." : "Run Monte Carlo Simulation"}
        </button>
      </div>

      {/* Convergence Chart */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
        <MonteCarloChart data={convergence} isCall={isCall} />
      </div>

      {/* Sample Paths Chart */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
        <MonteCarloPathChart data={pathSample} form={form} />
      </div>

      {/* Technical Details */}
      <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Monte Carlo Method Details
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Simulation Process</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Geometric Brownian Motion paths</li>
              <li>• Antithetic variance reduction</li>
              <li>• European & American exercise</li>
              <li>• Statistical confidence intervals</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Advantages</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Handles complex payoffs</li>
              <li>• Path-dependent options</li>
              <li>• Multiple underlying assets</li>
              <li>• Flexible boundary conditions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MonteCarloVisual;