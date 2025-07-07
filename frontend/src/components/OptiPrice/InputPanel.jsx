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
      description: "American/Asian simulation pricing",
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
                  : "!bg-gray-100 text-gray-900 border-gray-500 hover:hover:text-blue-700 shadow-md"
              }`}
            >
              <div className="font-semibold text-lg">{modelOption.name}</div>
              <div
                className={`text-sm mt-1 ${
                  model === modelOption.id ? "text-blue-100" : "text-gray-600"
                }`}
              >
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
                  : "!bg-gray-100 text-gray-900 border-gray-500 hover:hover:text-blue-700 shadow-md"
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)} Option
            </button>
          ))}
        </div>
      </div>

      {/* Option Style Selection - Binomial and Monte Carlo */}
      {(model === "binomial" || model === "monte-carlo") && (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Option Style
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {model === "binomial"
              ? ["american", "european"].map((style) => (
                  <button
                    key={style}
                    onClick={() =>
                      setForm((prev) => ({ ...prev, style: style }))
                    }
                    className={`py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 border-2 ${
                      (form.style || "american") === style
                        ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white border-blue-500 shadow-lg scale-105"
                        : "!bg-gray-100 text-gray-900 border-gray-500 hover:hover:text-blue-700 shadow-md"
                    }`}
                  >
                    {style.charAt(0).toUpperCase() + style.slice(1)}
                  </button>
                ))
              : ["american", "asian"].map((style) => (
                  <button
                    key={style}
                    onClick={() =>
                      setForm((prev) => ({ ...prev, style: style }))
                    }
                    className={`py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 border-2 ${
                      (form.style || "american") === style
                        ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white border-blue-500 shadow-lg scale-105"
                        : "!bg-gray-100 text-gray-900 border-gray-500 hover:hover:text-blue-700 shadow-md"
                    }`}
                  >
                    {style.charAt(0).toUpperCase() + style.slice(1)}
                  </button>
                ))}
          </div>
        </div>
      )}

      {/* Market Parameters */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Market Parameters
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Price (S₀)
            </label>
            <input
              type="number"
              step="any"
              name="S0"
              value={form.S0 || ""}
              onChange={handleChange}
              placeholder="100"
              required
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Strike Price (K)
            </label>
            <input
              type="number"
              step="any"
              name="K"
              value={form.K || ""}
              onChange={handleChange}
              placeholder="105"
              required
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Time to Expiry (Years)
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
              Risk-free Rate (%)
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
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Volatility (%)
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

        {/* Dividend Section - UPDATED */}
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
              Include Dividends
            </label>
          </div>

          {form.includeDividend && (
            <div className="space-y-6">
              {/* Dividend Mode Selection - Only for Binomial */}
              {model === "binomial" && (
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-3">
                    Dividend Type
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {["yield", "discrete"].map((mode) => (
                      <button
                        key={mode}
                        type="button"
                        onClick={() =>
                          setForm((prev) => ({ ...prev, dividend_mode: mode }))
                        }
                        className={`py-3 px-4 rounded-xl font-medium transition-all duration-200 border-2 ${
                          (form.dividend_mode || "yield") === mode
                            ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white border-blue-500 shadow-lg"
                            : "!bg-gray-100 text-gray-900 border-gray-300 hover:border-blue-300 hover:text-blue-700 shadow-md"
                        }`}
                      >
                        {mode === "yield"
                          ? "Continuous Yield"
                          : "Discrete Payments"}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Monte Carlo Info - Only Continuous Yield Supported */}
              {model === "monte-carlo" && (
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mt-0.5">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-blue-800">
                        Monte Carlo Dividend Support
                      </p>
                      <p className="text-xs text-blue-600 mt-1">
                        Monte Carlo simulation supports continuous dividend yield only.
                        For discrete dividends, use the Binomial model.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Dividend Yield Input - Always shown when dividends enabled */}
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

              {/* Discrete Dividend Inputs - Only for Binomial */}
              {model === "binomial" && form.dividend_mode === "discrete" && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Dividend Amount ($)
                      </label>
                      <input
                        type="number"
                        step="any"
                        name="dividend_amt"
                        value={form.dividend_amt || ""}
                        onChange={handleChange}
                        placeholder="2.0"
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Frequency (Days)
                      </label>
                      <select
                        name="dividend_freq"
                        value={form.dividend_freq || "90"}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
                      >
                        <option value="90">Quarterly (90 days)</option>
                        <option value="180">Semi-Annual (180 days)</option>
                        <option value="365">Annual (365 days)</option>
                        <option value="30">Monthly (30 days)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Payment (Days from now)
                    </label>
                    <input
                      type="number"
                      name="dividend_first_day"
                      value={form.dividend_first_day || ""}
                      onChange={handleChange}
                      placeholder="90"
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
                    />
                  </div>
                </div>
              )}
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