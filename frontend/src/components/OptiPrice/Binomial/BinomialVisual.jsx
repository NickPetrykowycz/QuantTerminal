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

      {/* Price Display - Purple theme for consistency */}
      <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl border border-purple-200 shadow-sm p-6">
        <div className="text-center">
          <p className="text-sm text-purple-600 mb-1">
            {styleText} {optionTypeText}{getDividendText()} Price
          </p>
          <div className="text-3xl font-bold text-purple-700">
            ${typeof price === "number" ? `${price.toFixed(4)}` : "—"}
          </div>
          <p className="text-xs text-purple-600 mt-2">
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
                  ? "bg-gradient-to-r from-purple-500 to-violet-600 text-white border-purple-500 shadow-lg"
                  : "bg-gray-50 hover:bg-purple-50 border-gray-200 hover:border-purple-300 text-gray-700 hover:text-purple-700"
              } ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              <div className="font-medium">{option.label.split(" ")[0]}</div>
              <div className="text-sm opacity-90 mt-1">
                {option.label.match(/\((.*?)\)/)?.[1] || ""}
              </div>
            </button>
          ))}
        </div>

        <button
          onClick={onGenerate}
          disabled={loading || !form?.S0 || !form?.K || !form?.T || !form?.r || !form?.sigma}
          className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 ${
            loading || !form?.S0 || !form?.K || !form?.T || !form?.r || !form?.sigma
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-purple-600 to-violet-600 text-white hover:from-purple-700 hover:to-violet-700 shadow-md hover:shadow-lg"
          }`}
        >
          {loading ? "Running Analysis..." : "Generate Binomial Analysis"}
        </button>
      </div>

      {/* Convergence Chart */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
        <BinomialChart data={convergence} isCall={isCall} />
      </div>

      {/* Time Series Chart */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
        <BinomialTimeChart data={timeSeries} form={form} />
      </div>
    </div>
  );
}

export default BinomialVisual;