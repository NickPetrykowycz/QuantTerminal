// frontend/src/pages/HomePage.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { marketDataService } from "../services/marketData";

const HomePage = () => {
  const {
    user,
    loading,
    preferences,
    updateMarketPreferences,
    logout,
    marketSymbols,
  } = useAuth();
  const navigate = useNavigate();

  // Market data state
  const [marketData, setMarketData] = useState([]);
  const [loadingMarket, setLoadingMarket] = useState(true);
  const [marketError, setMarketError] = useState(null);

  // UI state
  const [showConfigPopup, setShowConfigPopup] = useState(false);
  const [guestConfigMessage, setGuestConfigMessage] = useState(false);
  const [selectedSymbols, setSelectedSymbols] = useState(marketSymbols);
  const [symbolInput, setSymbolInput] = useState("");
  const [draggedIndex, setDraggedIndex] = useState(null);

  const quickActions = [
    {
      title: "Options Pricing",
      description:
        "Calculate option prices using Black-Scholes, Binomial, and Monte Carlo models",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      route: "/toolbox/optiprice",
    },
    {
      title: "Learning Center",
      description:
        "Interactive tutorials and guides for options trading and quantitative finance",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      gradient: "from-orange-500 to-amber-500",
      bgGradient: "from-orange-50 to-amber-50",
      route: "/learning",
    },
  ];

  // Fetch market data
  useEffect(() => {
    const fetchMarketData = async () => {
      setLoadingMarket(true);
      setMarketError(null);

      // Use preferences?.market_symbols if available, otherwise fall back to default
      const symbols = preferences?.market_symbols ||
        marketSymbols || ["SPY", "AAPL", "MSFT", "TSLA"];
      console.log("Fetching market data for symbols:", symbols); // Debug log

      const result = await marketDataService.getMarketData(symbols);

      if (result.success) {
        setMarketData(result.data);
      } else {
        setMarketError(result.error);
        // Use fallback data if API fails
        setMarketData(result.data);
      }

      setLoadingMarket(false);
    };

    // Only fetch if we have preferences loaded or if user is not authenticated
    if (preferences !== null || !user) {
      fetchMarketData();

      // Refresh market data every 30 seconds
      const interval = setInterval(fetchMarketData, 30000);
      return () => clearInterval(interval);
    }
  }, [preferences?.market_symbols, user]); // Depend on preferences.market_symbols directly

  const handleConfigureMarket = () => {
    if (user) {
      setShowConfigPopup(true);
      // Use preferences.market_symbols if available, otherwise fall back to marketSymbols
      const currentSymbols = preferences?.market_symbols ||
        marketSymbols || ["SPY", "AAPL", "MSFT", "TSLA"];
      setSelectedSymbols([...currentSymbols]); // Copy current symbols
    } else {
      setGuestConfigMessage(true);
      setTimeout(() => setGuestConfigMessage(false), 3000);
    }
  };

  const addSymbol = async () => {
    const symbol = symbolInput.trim().toUpperCase();
    if (
      symbol &&
      selectedSymbols.length < 4 &&
      !selectedSymbols.includes(symbol)
    ) {
      try {
        const validation = await marketDataService.validateSymbol(symbol);
        if (validation.success && validation.data?.valid) {
          setSelectedSymbols([...selectedSymbols, symbol]);
          setSymbolInput("");
        } else {
          // For demo purposes, add anyway but show warning
          console.warn(`Could not validate symbol: ${symbol}, adding anyway`);
          setSelectedSymbols([...selectedSymbols, symbol]);
          setSymbolInput("");
        }
      } catch (error) {
        console.error("Validation error:", error);
        // Add anyway for demo purposes
        setSelectedSymbols([...selectedSymbols, symbol]);
        setSymbolInput("");
      }
    }
  };

  const removeSymbol = (index) => {
    setSelectedSymbols(selectedSymbols.filter((_, i) => i !== index));
  };

  const handleDragStart = (e, index) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e, dropIndex) => {
    e.preventDefault();
    if (draggedIndex === null) return;

    const newSymbols = [...selectedSymbols];
    const draggedSymbol = newSymbols[draggedIndex];

    // Remove the dragged item
    newSymbols.splice(draggedIndex, 1);
    // Insert it at the drop position
    newSymbols.splice(dropIndex, 0, draggedSymbol);

    setSelectedSymbols(newSymbols);
    setDraggedIndex(null);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addSymbol();
    }
  };

  const saveConfiguration = async () => {
    const result = await updateMarketPreferences(selectedSymbols);
    if (result.success) {
      console.log("Market preferences saved successfully");
      // Force a refresh of market data with new symbols
      const newResult = await marketDataService.getMarketData(selectedSymbols);
      if (newResult.success) {
        setMarketData(newResult.data);
      }
    } else {
      console.error("Failed to save preferences:", result.error);
    }
    setShowConfigPopup(false);
  };

  const handleNavigation = (route) => {
    navigate(route);
  };

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30">
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
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleNavigation("/")}
                    className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => handleNavigation("/")}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all"
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="max-w-4xl mx-auto">
          {/* Welcome Section */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Welcome back
              {user?.user_metadata?.first_name
                ? `, ${user.user_metadata.first_name}`
                : user
                  ? `, ${user.email.split("@")[0]}`
                  : ""}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Your one-stop quantitative finance platform. From options pricing
              to risk analysis, we provide the tools and knowledge to elevate
              your financial modeling and trading strategies.
            </p>
          </div>
        </div>

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={() => handleNavigation(action.route)}
              className="group p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:border-gray-300/70 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 text-left transform hover:-translate-y-1"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${action.gradient} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-200 shadow-lg`}
              >
                {action.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {action.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {action.description}
              </p>
              <div className="flex items-center text-blue-600 font-medium">
                Get started
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </button>
          ))}
        </div>

        {/* Dashboard Grid */}
        <div className="max-w-4xl mx-auto">
          {/* Market Overview */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200/50 p-6 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <h2 className="text-xl font-semibold text-gray-900">
                  Market Overview
                </h2>
                {!user && (
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    Demo data
                  </span>
                )}
                {marketError && (
                  <span className="text-sm text-amber-600 bg-amber-100 px-2 py-1 rounded-full">
                    Offline mode
                  </span>
                )}
              </div>
              <div className="flex items-center space-x-3">
                {guestConfigMessage && (
                  <div className="text-sm text-amber-600 bg-amber-50 px-3 py-1 rounded-lg border border-amber-200">
                    Sign in to configure
                  </div>
                )}
                <button
                  onClick={handleConfigureMarket}
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center space-x-1"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>Configure</span>
                </button>
              </div>
            </div>

            {loadingMarket ? (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[...Array(4)].map((_, index) => (
                  <div
                    key={index}
                    className="text-center p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 animate-pulse"
                  >
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-6 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded"></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {marketData.map((item, index) => (
                  <div
                    key={index}
                    className="text-center p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100"
                  >
                    <div className="font-semibold text-gray-900 text-sm mb-1">
                      {item.symbol}
                    </div>
                    <div className="text-lg font-bold text-gray-900">
                      ${item.price}
                    </div>
                    <div
                      className={`text-sm ${item.change >= 0 ? "text-green-600" : "text-red-600"} flex items-center justify-center`}
                    >
                      {item.change >= 0 ? "+" : ""}
                      {item.change} ({item.changePercent}%)
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Configuration Popup */}
        {showConfigPopup && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white/90 backdrop-blur-xl rounded-2xl border border-white/20 p-6 w-full max-w-md shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Configure Market Data
                </h3>
                <button
                  onClick={() => setShowConfigPopup(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <p className="text-gray-600 mb-4">
                Add up to 4 symbols to display. Drag to reorder.
              </p>

              {/* Add Symbol Input */}
              <div className="mb-6">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={symbolInput}
                    onChange={(e) => setSymbolInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Enter symbol (e.g., AAPL)"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    maxLength={10}
                  />
                  <button
                    onClick={addSymbol}
                    disabled={
                      selectedSymbols.length >= 4 || !symbolInput.trim()
                    }
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed transition-all shadow-sm"
                  >
                    Add
                  </button>
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {selectedSymbols.length}/4 symbols added
                </div>
              </div>

              {/* Selected Symbols List */}
              <div className="space-y-2 mb-6">
                {selectedSymbols.map((symbol, index) => (
                  <div
                    key={`${symbol}-${index}`}
                    draggable
                    onDragStart={(e) => handleDragStart(e, index)}
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, index)}
                    className={`flex items-center justify-between p-3 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200 cursor-move hover:bg-gray-100 transition-colors ${
                      draggedIndex === index ? "opacity-50" : ""
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 8h16M4 16h16"
                        />
                      </svg>
                      <span className="font-medium text-gray-900">
                        {symbol}
                      </span>
                      <span className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded">
                        #{index + 1}
                      </span>
                    </div>
                    <button
                      onClick={() => removeSymbol(index)}
                      className="text-red-500 hover:text-red-700 p-1 hover:bg-red-50 rounded transition-colors"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                ))}

                {selectedSymbols.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    <svg
                      className="w-8 h-8 mx-auto mb-2 text-gray-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                    No symbols added yet
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <button
                  onClick={() => {
                    setShowConfigPopup(false);
                    setSymbolInput("");
                    setSelectedSymbols([...marketSymbols]); // Reset to original
                  }}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={saveConfiguration}
                  disabled={selectedSymbols.length === 0}
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-400 disabled:cursor-not-allowed transition-all"
                >
                  Save ({selectedSymbols.length})
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
