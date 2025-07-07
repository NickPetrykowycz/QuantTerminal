// Updated MonteCarloVisual.jsx - Remove discrete dividend references
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
    { label: "Fast", value: "fast", description: "10K simulations" },
    { label: "Standard", value: "standard", description: "100K simulations" },
    { label: "High", value: "high", description: "1M simulations" },
  ];

  const isCall = form?.option_type === "call";
  const optionTypeText = isCall ? "Call Option" : "Put Option";

  // Updated style logic for Monte Carlo (American/Asian only)
  const style = form?.style || "american";
  const styleText = style === "american" ? "American" : "Asian";

  // Simplified dividend text - only continuous yield for Monte Carlo
  const getDividendText = () => {
    if (!form?.includeDividend) return "";
    return " with Continuous Dividend Yield";
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Monte Carlo Simulation
        </h2>
        <p className="text-gray-600">
          Stochastic simulation for American and Asian option pricing
        </p>
      </div>

      {/* Price Display */}
      <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl border border-purple-200 shadow-sm p-6">
        <div className="text-center">
          <p className="text-sm text-purple-600 mb-1">
            {styleText} {optionTypeText}
            {getDividendText()} Price
          </p>
          <div className="text-3xl font-bold text-purple-700">
            ${typeof price === "number" ? `${price.toFixed(4)}` : "—"}
          </div>
          {confidence_interval && (
            <p className="text-xs text-purple-600 mt-2">
              95% CI: [${confidence_interval.lower.toFixed(4)}, $
              {confidence_interval.upper.toFixed(4)}]
            </p>
          )}
        </div>
      </div>

      {/* Precision Settings and Generate Button */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Simulation Settings
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Choose simulation precision. Higher precision provides more accurate
          results but takes longer to compute.
        </p>

<div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
          {precisionOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => onPrecisionChange(option.value)}
              disabled={loading}
              className={`p-4 rounded-xl border text-left transition-all duration-200 ${
                precision === option.value
                  ? "bg-gradient-to-r from-purple-500 to-violet-600 text-white border-purple-500 shadow-lg"
                  : "bg-gray-50 hover:bg-purple-50 border-gray-200 hover:border-purple-300 text-gray-700 hover:text-purple-700"
              } ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              <div className="font-medium">{option.label}</div>
              <div className={`text-sm mt-1 ${
                precision === option.value ? "text-white/90" : "text-gray-600"
              }`}>
                {option.description}
              </div>
            </button>
          ))}
        </div>

        <button
          onClick={onGenerate}
          disabled={loading}
          className="w-full bg-gradient-to-r from-purple-600 to-violet-600 text-white py-3 px-6 rounded-xl font-medium hover:from-purple-700 hover:to-violet-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
        >
          {loading ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Running Monte Carlo Simulation...</span>
            </div>
          ) : (
            "Run Monte Carlo Simulation"
          )}
        </button>
      </div>

          {/* Statistics */}
          {stats && (
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Statistical Results
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">
                    {stats.simulations?.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">Simulations</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">
                    ${stats.std_error?.toFixed(6)}
                  </div>
                  <div className="text-sm text-gray-600">Standard Error</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">
                    {((stats.confidence_level || 0.95) * 100).toFixed(0)}%
                  </div>
                  <div className="text-sm text-gray-600">Confidence Level</div>
                </div>
              </div>
            </div>
          )}

      {/* Results Section */}
      {convergence.length > 0 || pathSample.length > 0 ? (
        <div className="space-y-8">
          {/* Convergence Chart */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <MonteCarloChart data={convergence} isCall={isCall} />
          </div>

          {/* Path Chart */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <MonteCarloPathChart data={pathSample} form={form} />
          </div>
        </div>
      ) : (
        // Empty state with nice styling (like the original)
        <div className="space-y-8">
          {/* Convergence Chart Placeholder */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <MonteCarloChart data={[]} isCall={isCall} />
          </div>

          {/* Path Chart Placeholder */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <MonteCarloPathChart data={[]} form={form} />
          </div>
        </div>
      )}
    </div>
  );
}

export default MonteCarloVisual;