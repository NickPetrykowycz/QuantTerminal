import React from "react";
import BinomialChart from "./BinomialChart";
import BinomialTimeChart from "./BinomialTimeChart";

function BinomialVisual({
  convergence = [],
  timeSeries = [],
  precision = "advanced",
  onPrecisionChange,
  onGenerate,
  price,
  form,
  loading,
}) {
  const precisionOptions = [
    { label: "Low (Log steps)", value: "simple" },
    { label: "Medium (Linear+Log steps)", value: "advanced" },
    { label: "High (All steps)", value: "precise" },
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
          Binomial Model
        </h2>
        <p className="text-gray-600">
          Lattice-based approach for American/European option pricing
        </p>
      </div>

      {/* Price Display */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200 shadow-sm p-6">
        <div className="text-center">
          <p className="text-sm text-green-600 mb-1">
            {styleText} {optionTypeText}{getDividendText()} Price
          </p>
          <div className="text-3xl font-bold text-green-700">
            ${typeof price === "number" ? `${price.toFixed(4)}` : "—"}
          </div>
          <p className="text-xs text-green-600 mt-2">
            All modes calculate the price at N = 512. Precision only changes the number of convergence points shown.
          </p>
        </div>
      </div>

      {/* Precision Settings and Generate Button */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Convergence Analysis Settings
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Choose precision level for convergence visualization. Higher precision shows more data points.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
          {precisionOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => onPrecisionChange(option.value)}
              disabled={loading}
              className={`p-4 rounded-xl border text-left transition-all duration-200 ${
                precision === option.value
                  ? "bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-300 ring-2 ring-blue-500/20"
                  : "bg-white border-gray-200 hover:border-gray-300 hover:bg-gray-50"
              } ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              <div className="font-medium text-gray-900">{option.label}</div>
              <div className="text-sm text-gray-600 mt-1">
                {option.value === "simple" && "Logarithmic steps"}
                {option.value === "advanced" && "Linear + Log steps"}
                {option.value === "precise" && "All steps"}
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
              : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-md hover:shadow-lg"
          }`}
        >
          {loading ? "Generating Analysis..." : "Generate Convergence Analysis"}
        </button>
      </div>

      {/* Convergence Chart */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
        <BinomialChart data={convergence} isCall={isCall} />
      </div>

      {/* Price vs Time Chart */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
        <BinomialTimeChart data={timeSeries} form={form} />
      </div>
    </div>
  );
}

export default BinomialVisual;