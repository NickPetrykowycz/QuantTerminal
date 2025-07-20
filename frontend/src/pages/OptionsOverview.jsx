// frontend/src/pages/OptionsOverview.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import { useAuth } from "../contexts/AuthContext";

const OptionsOverview = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("basics");

  const tabContent = {
    basics: {
      title: "What Are Options?",
      content: (
        <div className="space-y-8">
          <div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              An <strong>option</strong> is a financial contract that gives the
              holder the right, but not the obligation, to buy or sell an
              underlying asset at a specified price (strike price) within a
              certain time period.
            </p>

            <div className="bg-blue-100 border-2 border-blue-300 text-blue-900 p-6 rounded-xl mb-6">
              <div className="flex items-start space-x-3">
                <svg
                  className="w-6 h-6 mt-1 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <h4 className="font-bold mb-2">Key Insight</h4>
                  <p>
                    Options provide leverage and flexibility, allowing traders
                    to control larger positions with less capital while limiting
                    potential losses to the premium paid.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 p-6 rounded-xl">
              <h4 className="font-bold text-green-800 text-xl mb-4 flex items-center">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                Call Options
              </h4>
              <p className="text-green-700 mb-4 text-lg">
                Gives the right to <strong>buy</strong> the underlying asset at
                the strike price.
              </p>
              <div className="space-y-2 text-green-800">
                <p>
                  <strong>Market outlook:</strong> Bullish (expecting price to
                  rise)
                </p>
                <p>
                  <strong>Profit when:</strong> Asset price &gt; Strike price +
                  Premium
                </p>
                <p>
                  <strong>Maximum loss:</strong> Limited to premium paid
                </p>
                <p>
                  <strong>Maximum profit:</strong> Unlimited upside potential
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-rose-50 border-2 border-red-200 p-6 rounded-xl">
              <h4 className="font-bold text-red-800 text-xl mb-4 flex items-center">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                Put Options
              </h4>
              <p className="text-red-700 mb-4 text-lg">
                Gives the right to <strong>sell</strong> the underlying asset at
                the strike price.
              </p>
              <div className="space-y-2 text-red-800">
                <p>
                  <strong>Market outlook:</strong> Bearish (expecting price to
                  fall)
                </p>
                <p>
                  <strong>Profit when:</strong> Strike price - Premium &gt;
                  Asset price
                </p>
                <p>
                  <strong>Maximum loss:</strong> Limited to premium paid
                </p>
                <p>
                  <strong>Maximum profit:</strong> K - Premium (when stock goes
                  to zero)
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 border-2 border-gray-200 p-6 rounded-xl">
            <h4 className="font-bold text-gray-600 text-xl mb-4">
              Option Types by Exercise Style
            </h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                    />
                  </svg>
                </div>
                <h5 className="font-bold text-blue-800 mb-2">
                  American Options
                </h5>
                <p className="text-blue-700 text-sm">
                  Can be exercised at any time before expiration
                </p>
                <button
                  onClick={() => navigate("/learning/options/american")}
                  className="mt-3 !bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors shadow-md"
                >
                  Learn More →
                </button>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
                    />
                  </svg>
                </div>
                <h5 className="font-bold text-purple-800 mb-2">
                  European Options
                </h5>
                <p className="text-purple-700 text-sm">
                  Can only be exercised at expiration date
                </p>
                <button
                  onClick={() => navigate("/learning/options/european")}
                  className="mt-3 !bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors shadow-md"
                >
                  Learn More →
                </button>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-8 h-8 text-white"
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
                <h5 className="font-bold text-orange-800 mb-2">
                  Asian Options
                </h5>
                <p className="text-orange-700 text-sm">
                  Payoff depends on average price over time
                </p>
                <button
                  onClick={() => navigate("/learning/options/asian")}
                  className="mt-3 !bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-orange-700 transition-colors shadow-md"
                >
                  Learn More →
                </button>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    terminology: {
      title: "Essential Terminology",
      content: (
        <div className="space-y-6">
          <div className="text-lg text-gray-700 mb-8">
            <p className="leading-relaxed">
              Mastering options terminology is essential for effective trading.
              These key concepts form the foundation of all options strategies
              and pricing models.
            </p>
          </div>

          <div className="grid gap-6">
            {[
              {
                term: "Strike Price (K)",
                definition: "The price at which the option can be exercised",
                example:
                  "A call option with K=$100 allows buying the stock at $100",
                color: "red",
                icon: "🎯",
              },
              {
                term: "Premium",
                definition: "The cost to purchase the option",
                example: "Pay $5 premium for the right to buy a $100 stock",
                color: "orange",
                icon: "💰",
              },
              {
                term: "Expiration Date",
                definition: "The last date the option can be exercised",
                example: "Options expire on the third Friday of each month",
                color: "amber",
                icon: "📅",
              },
              {
                term: "In-the-Money (ITM)",
                definition: "When exercising would be profitable",
                example: "Call is ITM when stock price > strike price",
                color: "green",
                icon: "✅",
              },
              {
                term: "Out-of-the-Money (OTM)",
                definition: "When exercising would result in a loss",
                example: "Call is OTM when stock price {'<'} strike price",
                color: "blue",
                icon: "❌",
              },
              {
                term: "At-the-Money (ATM)",
                definition: "When the stock price equals the strike price",
                example: "Stock at $100, strike at $100 = ATM",
                color: "purple",
                icon: "⚖️",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-${item.color}-50 to-${item.color}-100 border-2 border-${item.color}-200 rounded-xl p-6`}
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r from-${item.color}-500 to-${item.color}-600 rounded-full flex items-center justify-center flex-shrink-0 text-xl`}
                  >
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h4
                      className={`font-bold text-${item.color}-900 text-xl mb-2`}
                    >
                      {item.term}
                    </h4>
                    <p className={`text-${item.color}-800 mb-3 text-lg`}>
                      {item.definition}
                    </p>
                    <div
                      className={`bg-white/60 p-3 rounded-lg border border-${item.color}-300`}
                    >
                      <p
                        className={`text-sm text-${item.color}-700 italic font-medium`}
                      >
                        <strong>Example:</strong> {item.example}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Moneyness Visual Guide */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl p-8 mt-8">
            <h4 className="font-bold text-2xl mb-6 text-center">
              📊 Moneyness Quick Reference
            </h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/20 rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">📈</div>
                <h5 className="font-bold mb-2">In-the-Money (ITM)</h5>
                <p className="text-sm text-purple-100">
                  Call: S {">"} K | Put: S {"<"} K
                </p>
                <p className="text-xs text-purple-200 mt-2">
                  Has intrinsic value
                </p>
              </div>
              <div className="bg-white/20 rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">⚖️</div>
                <h5 className="font-bold mb-2">At-the-Money (ATM)</h5>
                <p className="text-sm text-purple-100">S ≈ K</p>
                <p className="text-xs text-purple-200 mt-2">
                  Zero intrinsic value
                </p>
              </div>
              <div className="bg-white/20 rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">📉</div>
                <h5 className="font-bold mb-2">Out-of-the-Money (OTM)</h5>
                <p className="text-sm text-purple-100">
                  Call: S {"<"} K | Put: S {">"} K
                </p>
                <p className="text-xs text-purple-200 mt-2">
                  Only time value remains
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    payoffs: {
      title: "Payoff Diagrams & Profit/Loss Analysis",
      content: (
        <div className="space-y-8">
          <div>
            <p className="text-lg text-gray-700 mb-6">
              Understanding how options make or lose money at expiration is
              crucial for successful trading. The payoff diagram shows the
              profit or loss at different stock prices.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-6">
              <h4 className="font-bold text-green-800 text-xl mb-6 flex items-center">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                  </svg>
                </div>
                Long Call Payoff Analysis
              </h4>

              <div className="bg-white/80 p-4 rounded-lg mb-6 border border-green-300">
                <div className="text-center mb-4">
                  <h5 className="font-semibold text-green-800 mb-2">
                    Payoff Formula
                  </h5>
                  <div className="bg-green-100 px-4 py-3 rounded-lg border border-green-300">
                    <code className="text-green-800 font-mono text-lg font-bold">
                      Payoff = max(S - K, 0) - Premium
                    </code>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>S:</strong> Stock price at expiration
                  </div>
                  <div>
                    <strong>K:</strong> Strike price
                  </div>
                  <div>
                    <strong>Premium:</strong> Cost paid for option
                  </div>
                  <div>
                    <strong>max():</strong> Take the higher value
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white/80 p-4 rounded-lg border border-green-300">
                  <h6 className="font-semibold text-green-800 mb-2">
                    Breakeven Point
                  </h6>
                  <p className="text-green-700">
                    Stock Price = Strike Price + Premium Paid
                  </p>
                </div>
                <div className="bg-white/80 p-4 rounded-lg border border-green-300">
                  <h6 className="font-semibold text-green-800 mb-2">
                    Risk/Reward Profile
                  </h6>
                  <div className="space-y-2 text-green-700">
                    <p>
                      <strong>Maximum Loss:</strong> Limited to premium paid
                    </p>
                    <p>
                      <strong>Maximum Profit:</strong> Unlimited (as stock price
                      rises)
                    </p>
                    <p>
                      <strong>Probability:</strong> Higher success rate at lower
                      strikes
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-rose-50 border-2 border-red-200 rounded-xl p-6">
              <h4 className="font-bold text-red-800 text-xl mb-6 flex items-center">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.106-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z" />
                  </svg>
                </div>
                Long Put Payoff Analysis
              </h4>

              <div className="bg-white/80 p-4 rounded-lg mb-6 border border-red-300">
                <div className="text-center mb-4">
                  <h5 className="font-semibold text-red-800 mb-2">
                    Payoff Formula
                  </h5>
                  <div className="bg-red-100 px-4 py-3 rounded-lg border border-red-300">
                    <code className="text-red-800 font-mono text-lg font-bold">
                      Payoff = max(K - S, 0) - Premium
                    </code>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>K:</strong> Strike price
                  </div>
                  <div>
                    <strong>S:</strong> Stock price at expiration
                  </div>
                  <div>
                    <strong>Premium:</strong> Cost paid for option
                  </div>
                  <div>
                    <strong>max():</strong> Take the higher value
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white/80 p-4 rounded-lg border border-red-300">
                  <h6 className="font-semibold text-red-800 mb-2">
                    Breakeven Point
                  </h6>
                  <p className="text-red-700">
                    Stock Price = Strike Price - Premium Paid
                  </p>
                </div>
                <div className="bg-white/80 p-4 rounded-lg border border-red-300">
                  <h6 className="font-semibold text-red-800 mb-2">
                    Risk/Reward Profile
                  </h6>
                  <div className="space-y-2 text-red-700">
                    <p>
                      <strong>Maximum Loss:</strong> Limited to premium paid
                    </p>
                    <p>
                      <strong>Maximum Profit:</strong> K - Premium (when stock →
                      $0)
                    </p>
                    <p>
                      <strong>Probability:</strong> Higher success rate at
                      higher strikes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 p-6 rounded-xl">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-xl mb-3 text-blue-800">
                  Interactive Practice
                </h4>
                <p className="mb-4 text-blue-700">
                  Want to see these payoffs in action? Use our OptiPrice
                  calculator to experiment with different strike prices,
                  expiration dates, and see how option values and payoffs change
                  in real-time.
                </p>
                <button
                  onClick={() => navigate("/toolbox/optiprice")}
                  className="!bg-blue-600 !text-white px-6 py-3 !rounded-lg !font-semibold !hover:bg-blue-700 !transition-colors"
                >
                  Open OptiPrice Calculator →
                </button>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    factors: {
      title: "Advanced Pricing & Market Dynamics",
      content: (
        <div className="space-y-8">
          <div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Beyond basic terminology, successful options trading requires
              understanding market dynamics, pricing sensitivities, and
              real-world factors that influence option values minute by minute.
            </p>
          </div>

          {/* Market Forces Section */}
          <div className="bg-gradient-to-r from-gray-100 to-slate-200 border-2 border-gray-300 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center text-gray-800">
              <span className="text-3xl mr-3">🌊</span>
              Market Forces & Price Discovery
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/80 border border-gray-300 rounded-lg p-6">
                <h4 className="font-bold text-lg mb-3 flex items-center text-gray-700">
                  <span className="mr-2">📊</span>Supply & Demand
                </h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Open interest (total contracts outstanding)</li>
                  <li>• Bid-ask spreads (liquidity indicators)</li>
                  <li>• Volume patterns (institutional vs retail)</li>
                  <li>• Market maker positioning</li>
                </ul>
              </div>
              <div className="bg-white/80 border border-gray-300 rounded-lg p-6">
                <h4 className="font-bold text-lg mb-3 flex items-center text-gray-700">
                  <span className="mr-2">⚡</span>Volatility Regimes
                </h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Implied vs Historical volatility</li>
                  <li>• Volatility skew and smile effects</li>
                  <li>• Term structure of volatility</li>
                  <li>• VIX and volatility clustering</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Greeks in Action */}
          <div className="bg-gradient-to-br from-purple-50 to-indigo-100 border-2 border-purple-200 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center text-purple-800">
              <span className="text-3xl mr-3">🔮</span>
              The Greeks: Risk Management Tools
            </h3>
            <p className="text-purple-700 mb-6">
              The Greeks quantify how option prices respond to market changes,
              essential for risk management and strategy selection.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/60 border border-purple-300 rounded-lg p-4">
                <h5 className="font-bold mb-2 text-purple-800">
                  First-Order Greeks
                </h5>
                <div className="space-y-1 text-sm text-purple-700">
                  <p>
                    <strong>Delta (Δ):</strong> Price sensitivity
                  </p>
                  <p>
                    <strong>Vega (ν):</strong> Volatility sensitivity
                  </p>
                  <p>
                    <strong>Theta (Θ):</strong> Time decay
                  </p>
                  <p>
                    <strong>Rho (ρ):</strong> Interest rate risk
                  </p>
                </div>
              </div>
              <div className="bg-white/60 border border-purple-300 rounded-lg p-4">
                <h5 className="font-bold mb-2 text-purple-800">
                  Second-Order Greeks
                </h5>
                <div className="space-y-1 text-sm text-purple-700">
                  <p>
                    <strong>Gamma (Γ):</strong> Delta acceleration
                  </p>
                  <p>
                    <strong>Vanna:</strong> Vega-Delta interaction
                  </p>
                  <p>
                    <strong>Charm:</strong> Delta time decay
                  </p>
                  <p>
                    <strong>Volga:</strong> Vega convexity
                  </p>
                </div>
              </div>
              <div className="bg-white/60 border border-purple-300 rounded-lg p-4">
                <h5 className="font-bold mb-2 text-purple-800">
                  Portfolio Greeks
                </h5>
                <div className="space-y-1 text-sm text-purple-700">
                  <p>
                    <strong>Net Delta:</strong> Directional exposure
                  </p>
                  <p>
                    <strong>Gamma Exposure:</strong> Convexity risk
                  </p>
                  <p>
                    <strong>Vega Risk:</strong> Vol sensitivity
                  </p>
                  <p>
                    <strong>Theta Burn:</strong> Time decay P&L
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => navigate("/learning/options/black-scholes")}
              className="mt-6 !bg-purple-600 !text-white px-6 py-3 !rounded-lg !font-semibold !hover:bg-purple-700 !transition-colors"
            >
              Deep Dive: Black-Scholes & Greeks →
            </button>
          </div>

          {/* Real-World Factors */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-red-50 to-rose-100 border-2 border-red-200 rounded-xl p-6">
              <h4 className="font-bold text-red-800 text-xl mb-4 flex items-center">
                <span className="text-2xl mr-3">⚠️</span>Risk Factors
              </h4>
              <div className="space-y-3">
                <div className="bg-white/60 p-3 rounded-lg border border-red-300">
                  <h5 className="font-semibold text-red-700">Liquidity Risk</h5>
                  <p className="text-red-600 text-sm">
                    Wide bid-ask spreads, low volume, difficulty exiting
                    positions
                  </p>
                </div>
                <div className="bg-white/60 p-3 rounded-lg border border-red-300">
                  <h5 className="font-semibold text-red-700">
                    Assignment Risk
                  </h5>
                  <p className="text-red-600 text-sm">
                    Early exercise on American options, especially near
                    ex-dividend dates
                  </p>
                </div>
                <div className="bg-white/60 p-3 rounded-lg border border-red-300">
                  <h5 className="font-semibold text-red-700">Model Risk</h5>
                  <p className="text-red-600 text-sm">
                    Black-Scholes assumptions don't always hold in real markets
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-xl p-6">
              <h4 className="font-bold text-blue-800 text-xl mb-4 flex items-center">
                <span className="text-2xl mr-3">🎯</span>Strategy Considerations
              </h4>
              <div className="space-y-3">
                <div className="bg-white/60 p-3 rounded-lg border border-blue-300">
                  <h5 className="font-semibold text-blue-700">Market Regime</h5>
                  <p className="text-blue-600 text-sm">
                    Bull/bear markets, trending vs range-bound, volatility
                    environment
                  </p>
                </div>
                <div className="bg-white/60 p-3 rounded-lg border border-blue-300">
                  <h5 className="font-semibold text-blue-700">Time Horizon</h5>
                  <p className="text-blue-600 text-sm">
                    Day trading vs swing trading vs long-term positioning
                  </p>
                </div>
                <div className="bg-white/60 p-3 rounded-lg border border-blue-300">
                  <h5 className="font-semibold text-blue-700">
                    Capital Allocation
                  </h5>
                  <p className="text-blue-600 text-sm">
                    Position sizing, risk per trade, portfolio correlation
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Advanced Topics Preview */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-100 border-2 border-emerald-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center text-emerald-800">
              <span className="text-3xl mr-3">🚀</span>
              Ready for Advanced Concepts?
            </h3>
            <p className="text-emerald-700 mb-6 text-lg">
              Now that you understand the fundamentals, explore specific option
              types and advanced pricing models.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <button
                onClick={() => navigate("/learning/options/american")}
                className="bg-white/60 hover:bg-white/80 border border-emerald-300 rounded-lg p-4 text-left transition-colors h-full flex flex-col"
              >
                <h5 className="font-bold mb-2 text-emerald-800">
                  American Options
                </h5>
                <p className="text-sm text-emerald-700 flex-1">
                  Early exercise features and optimal stopping theory
                </p>
              </button>
              <button
                onClick={() => navigate("/learning/options/european")}
                className="bg-white/60 hover:bg-white/80 border border-emerald-300 rounded-lg p-4 text-left transition-colors h-full flex flex-col"
              >
                <h5 className="font-bold mb-2 text-emerald-800">
                  European Options
                </h5>
                <p className="text-sm text-emerald-700 flex-1">
                  Classic Black-Scholes framework and closed-form solutions
                </p>
              </button>
              <button
                onClick={() => navigate("/learning/options/asian")}
                className="bg-white/60 hover:bg-white/80 border border-emerald-300 rounded-lg p-4 text-left transition-colors h-full flex flex-col"
              >
                <h5 className="font-bold mb-2 text-emerald-800">
                  Asian Options
                </h5>
                <p className="text-sm text-emerald-700 flex-1">
                  Path-dependent payoffs and average price options
                </p>
              </button>
            </div>
          </div>

          {/* Interactive Practice */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-100 border-2 border-amber-200 p-6 rounded-xl">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-xl mb-3 text-amber-800">
                  Master These Concepts with OptiPrice
                </h4>
                <p className="mb-4 text-amber-700">
                  Experience how market dynamics affect pricing in real-time.
                  Compare Black-Scholes, Binomial, and Monte Carlo models while
                  experimenting with Greeks and sensitivity analysis.
                </p>
                <button
                  onClick={() => navigate("/toolbox/optiprice")}
                  className="!bg-amber-600 !text-white px-6 py-3 !rounded-lg !font-semibold !hover:bg-amber-700 !transition-colors"
                >
                  Open OptiPrice Calculator →
                </button>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  };

  const tabs = [
    { id: "basics", label: "Basics", icon: "📚" },
    { id: "terminology", label: "Terminology", icon: "📖" },
    { id: "payoffs", label: "Payoffs", icon: "📊" },
    { id: "factors", label: "Pricing Factors", icon: "⚙️" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-indigo-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-tr from-purple-400/10 to-pink-600/10 rounded-full blur-3xl"></div>
      </div>

      <Navigation user={user} currentPage="learning" />

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <nav className="text-sm mb-4">
              <button
                onClick={() => navigate("/learning")}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Learning Center
              </button>
              <span className="mx-2 text-gray-500">/</span>
              <button
                onClick={() => navigate("/learning/options")}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Options Trading
              </button>
              <span className="mx-2 text-gray-500">/</span>
              <span className="text-gray-700">Options Overview</span>
            </nav>

            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  Options Overview
                </h1>
                <p className="text-xl text-gray-600">
                  Master the fundamentals of options contracts
                </p>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full font-medium">
                  Beginner
                </span>
                <span>15 min read</span>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50 p-4 mb-8">
            <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
              <span>Lesson Progress</span>
              <span>1 of 8 lessons</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full"
                style={{ width: "12.5%" }}
              ></div>
            </div>
          </div>

{/* Tab Navigation */}
<div className="mb-8">
  {/* Desktop Tabs */}
  <div className="hidden md:flex bg-white rounded-lg border border-gray-200 p-2 mb-4 gap-1">
    {tabs.map((tab) => (
      <button
        key={tab.id}
        onClick={() => setActiveTab(tab.id)}
        className={`flex-1 flex items-center justify-center !px-3 !py-2 rounded-md text-sm font-medium transition-all duration-200 ${
          activeTab === tab.id
            ? '!bg-blue-600 !text-white !shadow-sm'
            : '!bg-gray-100 !border-gray-200 !text-gray-600 !hover:text-blue-600 !hover:bg-gray-50'
        }`}
      >
        <span className="mr-2 text-lg">{tab.icon}</span>
        <span>{tab.label}</span>
      </button>
    ))}
  </div>

  {/* Mobile Dropdown */}
  <div className="md:hidden mb-6">
    <div className="relative">
      <select
        value={activeTab}
        onChange={(e) => setActiveTab(e.target.value)}
        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
      >
        {tabs.map((tab) => (
          <option key={tab.id} value={tab.id}>
            {tab.icon} {tab.label}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  </div>

  {/* Tab Content */}
  <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8">
    <h2 className="text-3xl font-bold text-gray-900 mb-6">
      {tabContent[activeTab].title}
    </h2>
    {tabContent[activeTab].content}
  </div>
</div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <button
              onClick={() => navigate("/learning/options")}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span>Back to Options Hub</span>
            </button>

            <button
              onClick={() => navigate("/learning/options/european")}
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <span>Next: European Options</span>
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionsOverview;
