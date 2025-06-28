import React from "react";
import BinomialChart from "./BinomialChart";

function BinomialVisual({
  convergence = [],
  precision = "advanced",
  onPrecisionChange,
  onGenerate,
  price,
  form,
  loading,
}) {
  const precisionOptions = [
    { label: "Low Precision", value: "simple", desc: "Logarithmic steps" },
    {
      label: "Medium Precision",
      value: "advanced",
      desc: "Linear + Log steps",
    },
    { label: "High Precision", value: "precise", desc: "All steps" },
  ];

  const isCall = form?.option_type === "call";
  const optionTypeText = isCall ? "Call Option" : "Put Option";
  const isAmerican = form?.style === "american" || form?.american === true;
  const styleText = isAmerican ? "American" : "European";

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Binomial Model
        </h2>
        <p className="text-gray-600">
          Lattice-based approach for {styleText.toLowerCase()} option pricing
        </p>
      </div>

      {/* Price Display */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
        <div className="text-center">
          <p className="text-sm font-medium text-blue-600 mb-1">
            {styleText} {optionTypeText} Price
          </p>
          <p className="text-3xl font-bold text-blue-900">
            {typeof price === "number" ? `$${price.toFixed(4)}` : "—"}
          </p>
          <p className="text-xs text-blue-600 mt-2">
            Calculated at N = 512 steps
          </p>
        </div>
      </div>

      {/* Precision Settings */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Convergence Analysis Settings
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Choose precision level for convergence visualization. Higher precision
          shows more data points.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
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
              <div className="text-sm text-gray-600 mt-1">{option.desc}</div>
            </button>
          ))}
        </div>

        <button
          onClick={onGenerate}
          disabled={loading}
          className={`w-full mt-6 py-3 px-4 rounded-xl font-medium transition-all duration-200 ${
            loading
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-md hover:shadow-lg"
          }`}
        >
          {loading
            ? "Generating Convergence Data..."
            : "Generate Convergence Analysis"}
        </button>
      </div>

      {/* Chart */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
        <BinomialChart data={convergence} isCall={isCall} />
      </div>
    </div>
  );
}

export default BinomialVisual;
