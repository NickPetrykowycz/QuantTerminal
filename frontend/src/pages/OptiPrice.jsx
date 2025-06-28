import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import InputPanel from '../components/OptiPrice/InputPanel';
import BlackScholesVisual from '../components/OptiPrice/BlackScholes/BlackScholesVisual';
import BinomialVisual from '../components/OptiPrice/Binomial/BinomialVisual';
import MonteCarloVisual from '../components/OptiPrice/MonteCarlo/MonteCarloVisual';

function OptiPrice() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [model, setModel] = useState('black-scholes');
  const [result, setResult] = useState(null);

  const [form, setForm] = useState({
    includeDividend: false,
    S0: '',
    K: '',
    T: '',
    r: '',
    sigma: '',
    q: '',
    r_percent: '',
    sigma_percent: '',
    q_percent: '',
    option_type: 'call',
    N: 100,
    american: false,
  });

  const [binomial, setBinomial] = useState({
    convergence: [],
    price: null,
    precision: 'simple',
  });
  const [loading, setLoading] = useState(false);

  async function fetchBinomialPrice(form, precision = 'simple') {
    const payload = {
      S0: Number(form.S0),
      K: Number(form.K),
      T: Number(form.T),
      r: Number(form.r),
      sigma: Number(form.sigma),
      N: 512,
      option_type: form.option_type,
      style: form.style ? form.style : (form.american ? 'american' : 'european'),
      dividend_mode: form.dividend_mode ? form.dividend_mode : (form.includeDividend ? (form.q ? 'yield' : 'discrete') : 'none'),
      precision,
      q: form.includeDividend && form.dividend_mode === 'yield' ? Number(form.q) : null,
      dividend_freq: form.includeDividend && form.dividend_mode === 'discrete' ? Number(form.dividend_freq) : null,
      dividend_amt: form.includeDividend && form.dividend_mode === 'discrete' ? Number(form.dividend_amt) : null,
      dividend_first_day: form.includeDividend && form.dividend_mode === 'discrete' ? Number(form.dividend_first_day) : null,
    };
    const res = await fetch('http://localhost:8000/api/binomial', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error('API error');
    return await res.json();
  }

  const handleBinomialPrecisionChange = (precision) => {
    setBinomial(s => ({ ...s, precision }));
  };

  const handleBinomialGenerate = async () => {
    setLoading(true);
    try {
      const result = await fetchBinomialPrice(form, binomial.precision);
      setBinomial(s => ({
        ...s,
        convergence: result.convergence,
        price: result.price,
      }));
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100/30">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-indigo-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-tr from-purple-400/10 to-pink-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/5 to-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation Header */}
      <nav className="relative bg-white/80 backdrop-blur-xl border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900">
                QuantTerminal
              </span>
            </div>

            {/* Navigation Links
            <div className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => navigate('/home')}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
                Home
              </button>
              <span className="text-blue-600 font-medium">
                OptiPrice
              </span>
            </div> */}

            {/* User Actions */}
            <div className="flex items-center space-x-4">
              {user ? (
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">
                      {user.user_metadata?.first_name?.[0] ||
                        user.email[0].toUpperCase()}
                    </span>
                  </div>
                  <div className="hidden sm:block">
                    <span className="text-gray-700 font-medium">
                      {user.user_metadata?.first_name &&
                      user.user_metadata?.last_name
                        ? `${user.user_metadata.first_name} ${user.user_metadata.last_name}`
                        : user.email}
                    </span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="text-gray-500 hover:text-gray-700 text-sm font-medium transition-colors"
                  >
                    Sign out
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </nav>

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
                  {model === 'black-scholes' && <BlackScholesVisual form={form} />}
                  {model === 'binomial' && (
                    <BinomialVisual
                      form={form}
                      convergence={binomial.convergence}
                      precision={binomial.precision}
                      onPrecisionChange={handleBinomialPrecisionChange}
                      onGenerate={handleBinomialGenerate}
                      price={binomial.price}
                      loading={loading}
                    />
                  )}
                  {model === 'monte-carlo' && <MonteCarloVisual form={form} />}
                  {/* Result Display */}
                  {result !== null && (
                    <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200/50">
                      <div className="text-center">
                        <p className="text-sm font-medium text-blue-600 mb-1">Option Price</p>
                        <p className="text-3xl font-bold text-blue-900">
                          ${typeof result === 'number' ? result.toFixed(4) : result}
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