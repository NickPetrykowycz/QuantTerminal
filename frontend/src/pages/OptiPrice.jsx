import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import InputPanel from "../components/OptiPrice/InputPanel";
import BlackScholesVisual from "../components/OptiPrice/BlackScholes/BlackScholesVisual";
import BinomialVisual from "../components/OptiPrice/Binomial/BinomialVisual";
import MonteCarloVisual from "../components/OptiPrice/MonteCarlo/MonteCarloVisual";
import Navigation from "../components/Navigation";

function OptiPrice() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [model, setModel] = useState("black-scholes");
  const [result, setResult] = useState(null);

  const [form, setForm] = useState({
    includeDividend: false,
    S0: "",
    K: "",
    T: "",
    r: "",
    sigma: "",
    q: "",
    r_percent: "",
    sigma_percent: "",
    q_percent: "",
    option_type: "call",
    N: 100,
    american: false,
  });
  const isFormValid = form.S0 && form.K && form.T && form.r && form.sigma;

  const [binomial, setBinomial] = useState({
    convergence: [],
    timeSeries: [], // ADD THIS LINE
    price: null,
    precision: "simple",
  });

  const [monteCarlo, setMonteCarlo] = useState({
    convergence: [],
    pathSample: [],
    price: null,
    precision: "standard",
    confidence_interval: null,
    stats: null,
  });

  const [loading, setLoading] = useState(false);

  async function fetchBinomialPrice(form, precision = "simple") {
    const payload = {
      S0: Number(form.S0),
      K: Number(form.K),
      T: Number(form.T),
      r: Number(form.r),
      sigma: Number(form.sigma),
      N: 512,
      option_type: form.option_type,
      style: form.style ? form.style : form.american ? "american" : "european",
      dividend_mode: form.dividend_mode
        ? form.dividend_mode
        : form.includeDividend
          ? form.q
            ? "yield"
            : "discrete"
          : "none",
      precision,
      q:
        form.includeDividend && form.dividend_mode === "yield"
          ? Number(form.q)
          : null,
      dividend_freq:
        form.includeDividend && form.dividend_mode === "discrete"
          ? Number(form.dividend_freq)
          : null,
      dividend_amt:
        form.includeDividend && form.dividend_mode === "discrete"
          ? Number(form.dividend_amt)
          : null,
      dividend_first_day:
        form.includeDividend && form.dividend_mode === "discrete"
          ? Number(form.dividend_first_day)
          : null,
    };
    const res = await fetch("http://localhost:8000/api/binomial", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error("API error");
    return await res.json();
  }

  const handleBinomialPrecisionChange = (precision) => {
    setBinomial((s) => ({ ...s, precision }));
  };

  const handleBinomialGenerate = async () => {
    setLoading(true);
    try {
      const result = await fetchBinomialPrice(form, binomial.precision);
      setBinomial((s) => ({
        ...s,
        convergence: result.convergence,
        timeSeries: result.time_series || [], // ADD THIS LINE
        price: result.price,
      }));
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  const handleMonteCarloGenerate = async () => {
    if (!isFormValid) return;

    setLoading(true);
    try {
      await fetchMonteCarloPrice(form, monteCarlo.precision);
    } catch (error) {
      console.error("Error generating Monte Carlo analysis:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleMonteCarloPrecisionChange = (newPrecision) => {
    setMonteCarlo((prev) => ({
      ...prev,
      precision: newPrecision,
    }));
  };

  async function fetchMonteCarloPrice(form, precision = "standard") {
    const payload = {
      S0: Number(form.S0),
      K: Number(form.K),
      T: Number(form.T),
      r: Number(form.r),
      sigma: Number(form.sigma),
      option_type: form.option_type,
      style: form.style ? form.style : form.american ? "american" : "european",
      dividend_mode: form.dividend_mode
        ? form.dividend_mode
        : form.includeDividend
          ? form.q
            ? "yield"
            : "discrete"
          : "none",
      precision,
      q:
        form.includeDividend && form.dividend_mode === "yield"
          ? Number(form.q)
          : null,
      dividend_freq:
        form.includeDividend && form.dividend_mode === "discrete"
          ? Number(form.dividend_freq)
          : null,
      dividend_amt:
        form.includeDividend && form.dividend_mode === "discrete"
          ? Number(form.dividend_amt)
          : null,
      dividend_first_day:
        form.includeDividend && form.dividend_mode === "discrete"
          ? Number(form.dividend_first_day)
          : null,
    };

    try {
      const response = await fetch("http://localhost:8000/api/monte-carlo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Monte Carlo API response:", data);

      if (data.success) {
        setMonteCarlo((prev) => ({
          ...prev,
          price: data.price,
          convergence: data.convergence || [],
          pathSample: data.path_sample || [],
          confidence_interval: data.confidence_interval || null,
          stats: data.stats || null,
        }));
      } else {
        throw new Error(data.error || "Monte Carlo calculation failed");
      }
    } catch (error) {
      console.error("Monte Carlo API Error:", error);
      throw error;
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100/30">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-indigo-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-tr from-purple-400/10 to-pink-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/5 to-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      <Navigation user={user} currentPage="optiprice" />

      {/* Main Content */}
      <div className="relative pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                OptiPrice
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional options pricing with advanced mathematical models.
              Precise calculations made simple.
            </p>
          </div>

          {/* Main Content Card */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 overflow-hidden">
            <div className="flex flex-col lg:flex-row min-h-[80vh]">
              {/* Left Panel - Controls */}
              <div className="lg:w-2/5 p-8 border-b lg:border-b-0 lg:border-r border-gray-200/50">
                <div className="sticky top-8">
                  <InputPanel
                    model={model}
                    setModel={setModel}
                    form={form}
                    setForm={setForm}
                    setResult={setResult}
                  />
                </div>
              </div>

              {/* Right Panel - Visualization */}
              <div className="lg:w-3/5 p-8 bg-gray-50/50">
                <div className="h-full">
                  {model === "black-scholes" && (
                    <BlackScholesVisual form={form} />
                  )}
                  {model === "binomial" && (
                    <BinomialVisual
                      form={form}
                      convergence={binomial.convergence}
                      timeSeries={binomial.timeSeries} // ADD THIS LINE
                      precision={binomial.precision}
                      onPrecisionChange={handleBinomialPrecisionChange}
                      onGenerate={handleBinomialGenerate}
                      price={binomial.price}
                      loading={loading}
                    />
                  )}
                  {model === "monte-carlo" && (
                    <MonteCarloVisual
                      form={form}
                      convergence={monteCarlo.convergence}
                      pathSample={monteCarlo.pathSample}
                      precision={monteCarlo.precision}
                      onPrecisionChange={handleMonteCarloPrecisionChange}
                      onGenerate={handleMonteCarloGenerate}
                      price={monteCarlo.price}
                      loading={loading}
                      confidence_interval={monteCarlo.confidence_interval}
                      stats={monteCarlo.stats}
                    />
                  )}
                  {/* Result Display */}
                  {result !== null && (
                    <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200/50">
                      <div className="text-center">
                        <p className="text-sm font-medium text-blue-600 mb-1">
                          Option Price
                        </p>
                        <p className="text-3xl font-bold text-blue-900">
                          $
                          {typeof result === "number"
                            ? result.toFixed(4)
                            : result}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OptiPrice;
