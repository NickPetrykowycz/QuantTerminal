import React from "react";
import { useNavigate } from "react-router-dom";

function InputPanel({ model, setModel, form, setForm, setResult }) {
  const navigate = useNavigate();

  const models = [
    {
      id: "black-scholes",
      name: "Black-Scholes",
      description: "European options analytical solution",
    },
    {
      id: "binomial",
      name: "Binomial",
      description: "American/European lattice model",
    },
    {
      id: "monte-carlo",
      name: "Monte Carlo",
      description: "Simulation-based pricing",
    },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handlePercentageChange = (e) => {
    const { name, value } = e.target;
    const numValue = parseFloat(value);

    if (name === "r_percent") {
      setForm((prev) => ({
        ...prev,
        r_percent: value,
        r: isNaN(numValue) ? "" : (numValue / 100).toString(),
      }));
    } else if (name === "sigma_percent") {
      setForm((prev) => ({
        ...prev,
        sigma_percent: value,
        sigma: isNaN(numValue) ? "" : (numValue / 100).toString(),
      }));
    } else if (name === "q_percent") {
      setForm((prev) => ({
        ...prev,
        q_percent: value,
        q: isNaN(numValue) ? "" : (numValue / 100).toString(),
      }));
    }
  };

  const handleCalculate = async () => {
    if (model === "black-scholes") {
      const payload = {
        S0: Number(form.S0),
        K: Number(form.K),
        T: Number(form.T),
        r: Number(form.r),
        sigma: Number(form.sigma),
        option_type: form.option_type,
        q: form.includeDividend ? Number(form.q) : 0,
      };

      try {
        const res = await fetch("http://localhost:8000/api/black-scholes", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const data = await res.json();
        setResult(data.price);
      } catch (error) {
        console.error("Error calculating price:", error);
      }
    }
  };

  const isFormValid = form.S0 && form.K && form.T && form.r && form.sigma;

  const displayModel = models.find((m) => m.id === model)?.name || model;

  return (
    <div className="space-y-8">
      {/* Model Selection */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Select Pricing Model
        </h3>
        <div className="grid grid-cols-1 gap-3">
          {models.map((modelOption) => (
            <button
              key={modelOption.id}
              onClick={() => setModel(modelOption.id)}
              className={`py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 border-2 ${
                model === modelOption.id
                  ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white border-blue-500 shadow-lg scale-105"
                  : "!bg-gray-100 text-gray-900 border-gray-500 hover:text-blue-700 shadow-md"
              }`}
            >
              <div className="font-semibold text-lg">
                {modelOption.name}
              </div>
              <div className={`text-sm mt-1 ${
                model === modelOption.id ? "text-blue-100" : "text-gray-600"
              }`}>
                {modelOption.description}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Option Type Selection */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Option Type
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {["call", "put"].map((type) => (
            <button
              key={type}
              onClick={() =>
                setForm((prev) => ({ ...prev, option_type: type }))
              }
              className={`py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 border-2 ${
                form.option_type === type
                  ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white border-blue-500 shadow-lg scale-105"
                  : "!bg-gray-100 text-gray-900 border-gray-500 hover: hover:text-blue-700 shadow-md"
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)} Option
            </button>
          ))}
        </div>
      </div>

      {/* Input Parameters */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Parameters</h3>
        <div className="space-y-4">
          {/* Basic Parameters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Price ($) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                step="any"
                name="S0"
                value={form.S0 || ""}
                onChange={handleChange}
                placeholder="100.00"
                required
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Strike Price ($) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                step="any"
                name="K"
                value={form.K || ""}
                onChange={handleChange}
                placeholder="105.00"
                required
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Expiry (Years) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                step="any"
                name="T"
                value={form.T || ""}
                onChange={handleChange}
                placeholder="0.25"
                required
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Risk-Free Rate (%) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                step="any"
                name="r_percent"
                value={form.r_percent || ""}
                onChange={handlePercentageChange}
                placeholder="5.0"
                required
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Volatility (%) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                step="any"
                name="sigma_percent"
                value={form.sigma_percent || ""}
                onChange={handlePercentageChange}
                placeholder="20.0"
                required
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
              />
            </div>
          </div>

          {/* Dividend Section */}
          <div className="border-t border-gray-200 pt-4">
            <div className="flex items-center space-x-3 mb-4">
              <input
                type="checkbox"
                id="includeDividend"
                name="includeDividend"
                checked={form.includeDividend}
                onChange={handleChange}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              />
              <label
                htmlFor="includeDividend"
                className="text-sm font-medium text-gray-700"
              >
                Include Dividend Yield
              </label>
            </div>

            {form.includeDividend && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Dividend Yield (%)
                </label>
                <input
                  type="number"
                  step="any"
                  name="q_percent"
                  value={form.q_percent || ""}
                  onChange={handlePercentageChange}
                  placeholder="2.0"
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
                />
              </div>
            )}
          </div>

          {/* Monte Carlo Specific */}
          {model === "monte-carlo" && (
            <div className="border-t border-gray-200 pt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Simulations
                  </label>
                  <input
                    type="number"
                    name="simulations"
                    value={form.simulations || ""}
                    onChange={handleChange}
                    placeholder="10000"
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Time Steps
                  </label>
                  <input
                    type="number"
                    name="timeSteps"
                    value={form.timeSteps || ""}
                    onChange={handleChange}
                    placeholder="252"
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Binomial Specific */}
          {model === "binomial" && (
            <div className="border-t border-gray-200 pt-4">
              <div className="flex items-center space-x-3 mb-4">
                <input
                  type="checkbox"
                  id="american"
                  name="american"
                  checked={form.american}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                />
                <label
                  htmlFor="american"
                  className="text-sm font-medium text-gray-700"
                >
                  American Style Option
                </label>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <button
          onClick={() => navigate(`/${model}-info`)}
          className="w-full py-3 px-4 rounded-xl font-medium text-blue-600 !bg-gray-100 hover:bg-blue-100 border border-blue-200 transition-all duration-200 shadow-md"
        >
          Learn About {displayModel} Model
        </button>
      </div>
    </div>
  );
}

export default InputPanel;
