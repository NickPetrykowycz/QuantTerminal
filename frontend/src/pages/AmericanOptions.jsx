// frontend/src/pages/AmericanOptions.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import { useAuth } from "../contexts/AuthContext";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const AmericanOptions = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("overview");

  const tabContent = {
    overview: {
      title: "Overview & Definition",
      content: (
        <div className="space-y-8">
          <div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              <strong>American options</strong> provide maximum flexibility by
              allowing exercise at any time before expiration. This early
              exercise feature makes them the most common type of
              exchange-traded options, dominating equity markets worldwide while
              creating complex pricing challenges that require sophisticated
              mathematical models.
            </p>

            <div className="bg-emerald-100 border-2 border-emerald-300 text-emerald-900 p-6 rounded-xl mb-6">
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
                  <h4 className="font-bold mb-2">The Flexibility Premium</h4>
                  <p>
                    American options contain an "embedded option" - the right to
                    choose optimal exercise timing. This flexibility creates
                    additional value beyond the European equivalent, making them
                    inherently more expensive but offering strategic advantages
                    in volatile markets.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Timeline */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 p-6 rounded-xl">
            <h4 className="font-bold text-green-800 text-xl mb-6 text-center">
              Exercise Window Timeline
            </h4>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-green-300 rounded"></div>

              {/* Timeline points */}
              <div className="relative flex justify-between items-center">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full mb-2 relative z-10"></div>
                  <div className="text-center">
                    <div className="text-sm font-semibold text-green-700">
                      Option Purchase
                    </div>
                    <div className="text-xs text-green-600">Today</div>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full mb-2 relative z-10 flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-semibold text-green-700">
                      Early Exercise
                    </div>
                    <div className="text-xs text-green-600">
                      Available Anytime
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full mb-2 relative z-10 flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-semibold text-green-700">
                      Still Flexible
                    </div>
                    <div className="text-xs text-green-600">
                      Exercise or Hold
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 bg-green-600 rounded-full mb-2 relative z-10 flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-semibold text-green-700">
                      Expiration
                    </div>
                    <div className="text-xs text-green-600">
                      Final Opportunity
                    </div>
                  </div>
                </div>
              </div>

              {/* Exercise flexibility indicator */}
              <div className="mt-6 text-center">
                <div className="inline-flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-lg">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Exercise allowed at ANY time during option life
                </div>
              </div>
            </div>
          </div>

          {/* Key Characteristics */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 p-6 rounded-xl">
              <h4 className="font-bold text-blue-800 text-xl mb-4 flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
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
                How It Works
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-blue-700">
                      Continuous Exercise Window
                    </div>
                    <p className="text-blue-600 text-sm">
                      Can be exercised at any point from purchase until
                      expiration
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-blue-700">
                      Strategic Timing
                    </div>
                    <p className="text-blue-600 text-sm">
                      Holder chooses optimal exercise moment based on market
                      conditions
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-blue-700">
                      Immediate Settlement
                    </div>
                    <p className="text-blue-600 text-sm">
                      Exercise results in immediate stock delivery or cash
                      settlement
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 border-2 border-purple-200 p-6 rounded-xl">
              <h4 className="font-bold text-purple-800 text-xl mb-4 flex items-center">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                Key Characteristics
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-purple-700">
                      Higher Premium
                    </div>
                    <p className="text-purple-600 text-sm">
                      Early exercise flexibility commands 1-8% price premium
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-purple-700">
                      Complex Pricing
                    </div>
                    <p className="text-purple-600 text-sm">
                      Requires numerical methods (binomial trees, finite
                      difference)
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-purple-700">
                      Dynamic Greeks
                    </div>
                    <p className="text-purple-600 text-sm">
                      Risk sensitivities change with proximity to exercise
                      boundary
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Comparison with European Options */}
          <div className="bg-gradient-to-r from-gray-50 to-slate-50 border-2 border-gray-200 p-6 rounded-xl">
            <h4 className="font-bold text-gray-800 text-xl mb-6 text-center">
              American vs European Options
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-3 text-left font-semibold">
                      Feature
                    </th>
                    <th className="border border-gray-300 p-3 text-center font-semibold text-green-600">
                      American
                    </th>
                    <th className="border border-gray-300 p-3 text-center font-semibold text-blue-600">
                      European
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium">
                      Exercise Timing
                    </td>
                    <td className="border border-gray-300 p-3 text-center text-green-600 font-semibold">
                      Any time before expiration
                    </td>
                    <td className="border border-gray-300 p-3 text-center">
                      Expiration only
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium">
                      Premium Cost
                    </td>
                    <td className="border border-gray-300 p-3 text-center">
                      Higher
                    </td>
                    <td className="border border-gray-300 p-3 text-center text-blue-600 font-semibold">
                      Lower
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium">
                      Pricing Methods
                    </td>
                    <td className="border border-gray-300 p-3 text-center">
                      Numerical (binomial, FDM)
                    </td>
                    <td className="border border-gray-300 p-3 text-center text-blue-600 font-semibold">
                      Analytical (Black-Scholes)
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium">
                      Flexibility
                    </td>
                    <td className="border border-gray-300 p-3 text-center text-green-600 font-semibold">
                      Maximum
                    </td>
                    <td className="border border-gray-300 p-3 text-center">
                      Limited
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium">
                      Market Prevalence
                    </td>
                    <td className="border border-gray-300 p-3 text-center text-green-600 font-semibold">
                      95% of equity options
                    </td>
                    <td className="border border-gray-300 p-3 text-center">
                      Index options, FX
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium">
                      Dividend Capture
                    </td>
                    <td className="border border-gray-300 p-3 text-center text-green-600 font-semibold">
                      Possible
                    </td>
                    <td className="border border-gray-300 p-3 text-center">
                      Not allowed
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Early Exercise Decision Factors */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 p-6 rounded-xl">
            <h4 className="font-bold text-amber-800 text-xl mb-6 text-center">
              When Early Exercise Makes Sense
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg border border-amber-200">
                <h5 className="font-bold text-green-700 mb-4 text-center">
                  📈 Call Options
                </h5>
                <div className="space-y-3">
                  <div className="bg-green-50 p-3 rounded">
                    <div className="font-semibold text-green-700 text-sm">
                      Pre-Dividend Exercise
                    </div>
                    <p className="text-green-600 text-xs">
                      When dividend amount exceeds time value remaining
                    </p>
                  </div>
                  <div className="bg-green-50 p-3 rounded">
                    <div className="font-semibold text-green-700 text-sm">
                      Deep In-the-Money
                    </div>
                    <p className="text-green-600 text-xs">
                      Very low time value, high carrying costs
                    </p>
                  </div>
                  <div className="bg-green-50 p-3 rounded">
                    <div className="font-semibold text-green-700 text-sm">
                      High Interest Rates
                    </div>
                    <p className="text-green-600 text-xs">
                      Opportunity cost of delayed strike payment
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-amber-200">
                <h5 className="font-bold text-red-700 mb-4 text-center">
                  📉 Put Options
                </h5>
                <div className="space-y-3">
                  <div className="bg-red-50 p-3 rounded">
                    <div className="font-semibold text-red-700 text-sm">
                      Deep In-the-Money
                    </div>
                    <p className="text-red-600 text-xs">
                      Low time value, immediate cash needs
                    </p>
                  </div>
                  <div className="bg-red-50 p-3 rounded">
                    <div className="font-semibold text-red-700 text-sm">
                      High Interest Rates
                    </div>
                    <p className="text-red-600 text-xs">
                      Early receipt of strike price for reinvestment
                    </p>
                  </div>
                  <div className="bg-red-50 p-3 rounded">
                    <div className="font-semibold text-red-700 text-sm">
                      Bankruptcy Risk
                    </div>
                    <p className="text-red-600 text-xs">
                      Underlying stock approaching zero value
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Market Reality */}
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border-2 border-cyan-200 p-6 rounded-xl">
            <h4 className="font-bold text-cyan-800 text-xl mb-4">
              Market Reality: Why American Style Dominates
            </h4>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-cyan-200 text-center">
                <div className="text-2xl mb-2">📊</div>
                <div className="text-lg font-bold text-cyan-600 mb-1">95%</div>
                <div className="text-sm text-cyan-700 font-semibold">
                  Equity Options
                </div>
                <p className="text-cyan-600 text-xs mt-1">
                  Nearly all individual stock options use American exercise
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg border border-cyan-200 text-center">
                <div className="text-2xl mb-2">💰</div>
                <div className="text-lg font-bold text-cyan-600 mb-1">$40T</div>
                <div className="text-sm text-cyan-700 font-semibold">
                  Annual Volume
                </div>
                <p className="text-cyan-600 text-xs mt-1">
                  Notional value of American options traded globally
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg border border-cyan-200 text-center">
                <div className="text-2xl mb-2">🏆</div>
                <div className="text-lg font-bold text-cyan-600 mb-1">
                  Standard
                </div>
                <div className="text-sm text-cyan-700 font-semibold">
                  Exchange Default
                </div>
                <p className="text-cyan-600 text-xs mt-1">
                  Most exchanges default to American exercise for equity
                  derivatives
                </p>
              </div>
            </div>

            <div className="mt-6 bg-cyan-50 p-4 rounded-lg border border-cyan-200">
              <h5 className="font-semibold text-cyan-700 mb-2">
                Why This Matters for Traders
              </h5>
              <p className="text-cyan-600 text-sm">
                Understanding American options isn't academic - it's essential
                for practical trading. Whether you're buying calls on
                dividend-paying stocks, selling puts for income, or managing a
                complex portfolio, the early exercise feature affects pricing,
                risk management, and strategy selection in ways that can
                significantly impact your returns.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    payoff: {
      title: "Payoff & Examples",
      content: (
        <div className="space-y-8">
          <div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              American option payoffs are identical to European options at
              expiration, but the early exercise feature creates additional
              value throughout the option's life. Understanding when and why to
              exercise early requires analyzing the trade-off between immediate
              intrinsic value and remaining time value.
            </p>
          </div>

          {/* Payoff vs Time Analysis */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200 p-6 rounded-xl">
            <h4 className="font-bold text-indigo-800 text-xl mb-6 text-center">
              American vs European Value Over Time
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg border border-indigo-200">
                <h5 className="font-bold text-indigo-700 mb-4 text-center">
                  📈 Call Option Value Evolution
                </h5>

                <div className="space-y-4">
                  <div className="bg-indigo-50 p-3 rounded">
                    <div className="font-semibold text-indigo-700 text-sm mb-2">
                      Value Components:
                    </div>
                    <div className="text-xs space-y-1">
                      <div className="flex justify-between">
                        <span>American Value:</span>
                        <span className="font-mono text-indigo-600">$8.50</span>
                      </div>
                      <div className="flex justify-between">
                        <span>European Value:</span>
                        <span className="font-mono text-indigo-600">$8.20</span>
                      </div>
                      <div className="flex justify-between border-t pt-1">
                        <span className="font-semibold">
                          Early Exercise Premium:
                        </span>
                        <span className="font-mono text-green-600">$0.30</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-3 rounded text-xs">
                    <div className="font-semibold text-gray-700 mb-1">
                      Key Insight:
                    </div>
                    <p className="text-gray-600">
                      American calls are most valuable when dividends are large
                      relative to time value, especially just before ex-dividend
                      dates.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-indigo-200">
                <h5 className="font-bold text-indigo-700 mb-4 text-center">
                  📉 Put Option Value Evolution
                </h5>

                <div className="space-y-4">
                  <div className="bg-indigo-50 p-3 rounded">
                    <div className="font-semibold text-indigo-700 text-sm mb-2">
                      Value Components:
                    </div>
                    <div className="text-xs space-y-1">
                      <div className="flex justify-between">
                        <span>American Value:</span>
                        <span className="font-mono text-indigo-600">
                          $12.75
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>European Value:</span>
                        <span className="font-mono text-indigo-600">
                          $11.90
                        </span>
                      </div>
                      <div className="flex justify-between border-t pt-1">
                        <span className="font-semibold">
                          Early Exercise Premium:
                        </span>
                        <span className="font-mono text-green-600">$0.85</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-3 rounded text-xs">
                    <div className="font-semibold text-gray-700 mb-1">
                      Key Insight:
                    </div>
                    <p className="text-gray-600">
                      American puts show higher early exercise premiums,
                      especially for deep ITM positions where time value is
                      minimal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Early Exercise Decision Tree */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 p-6 rounded-xl">
            <h4 className="font-bold text-green-800 text-xl mb-6 text-center">
              Early Exercise Decision Framework
            </h4>

            <div className="flow-chart">
              <div className="bg-white p-4 rounded-lg border-2 border-green-300 text-center mb-4">
                <div className="font-bold text-green-700 mb-2">
                  Step 1: Calculate Values
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="bg-green-50 p-2 rounded">
                    <div className="font-semibold">Market Price</div>
                    <div className="font-mono">$8.50</div>
                  </div>
                  <div className="bg-green-50 p-2 rounded">
                    <div className="font-semibold">Intrinsic Value</div>
                    <div className="font-mono">$7.00</div>
                  </div>
                  <div className="bg-green-50 p-2 rounded">
                    <div className="font-semibold">Time Value</div>
                    <div className="font-mono">$1.50</div>
                  </div>
                </div>
              </div>

              <div className="text-center mb-4">
                <div className="inline-block bg-green-200 p-2 rounded-full">
                  <svg
                    className="w-6 h-6 text-green-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <div className="text-center mb-3">
                    <div className="font-bold text-red-700">
                      ❌ Don't Exercise Early
                    </div>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="bg-white p-2 rounded">
                      <strong>When:</strong> Time Value {">"} Benefits
                    </div>
                    <div className="bg-white p-2 rounded">
                      <strong>Example:</strong> $1.50 time value {">"} $0.50
                      dividend
                    </div>
                    <div className="bg-white p-2 rounded">
                      <strong>Action:</strong> Sell option for $8.50
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <div className="text-center mb-3">
                    <div className="font-bold text-green-700">
                      ✅ Exercise Early
                    </div>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="bg-white p-2 rounded">
                      <strong>When:</strong> Benefits {">"} Time Value
                    </div>
                    <div className="bg-white p-2 rounded">
                      <strong>Example:</strong> $2.00 dividend {">"} $1.50 time
                      value
                    </div>
                    <div className="bg-white p-2 rounded">
                      <strong>Action:</strong> Exercise for intrinsic + dividend
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Real-World Examples */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 p-6 rounded-xl">
            <h4 className="font-bold text-blue-800 text-xl mb-6 text-center">
              Real-World Early Exercise Examples
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Dividend Capture Example */}
              <div className="bg-white p-5 rounded-lg border border-blue-200">
                <h5 className="font-bold text-blue-700 mb-4">
                  📊 Dividend Capture Strategy
                </h5>

                <div className="space-y-4">
                  <div className="bg-blue-50 p-3 rounded">
                    <div className="text-sm font-semibold text-blue-800 mb-2">
                      Apple (AAPL) Call Option Scenario
                    </div>
                    <div className="text-xs text-blue-600 space-y-1">
                      <div>• Stock Price: $180.00</div>
                      <div>• Strike Price: $170.00</div>
                      <div>• Days to Expiration: 15</div>
                      <div>• Ex-Dividend Date: Tomorrow</div>
                      <div>• Dividend Amount: $0.95</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded text-xs">
                      <div className="font-semibold text-blue-700 mb-1">
                        Option Values:
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          Market Price:{" "}
                          <span className="font-mono">$11.20</span>
                        </div>
                        <div>
                          Intrinsic Value:{" "}
                          <span className="font-mono">$10.00</span>
                        </div>
                        <div>
                          Time Value: <span className="font-mono">$1.20</span>
                        </div>
                        <div>
                          Dividend: <span className="font-mono">$0.95</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-red-50 p-3 rounded text-xs">
                      <div className="font-semibold text-red-700 mb-1">
                        Decision:
                      </div>
                      <div>
                        <strong>DON'T Exercise</strong> - Time value ($1.20)
                        exceeds dividend ($0.95)
                      </div>
                      <div className="mt-1 text-red-600">
                        Better to sell option for $11.20 than exercise for
                        $10.00 + $0.95 = $10.95
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Deep ITM Put Example */}
              <div className="bg-white p-5 rounded-lg border border-blue-200">
                <h5 className="font-bold text-red-700 mb-4">
                  📉 Deep ITM Put Exercise
                </h5>

                <div className="space-y-4">
                  <div className="bg-red-50 p-3 rounded">
                    <div className="text-sm font-semibold text-red-800 mb-2">
                      GameStop (GME) Put Option Scenario
                    </div>
                    <div className="text-xs text-red-600 space-y-1">
                      <div>• Stock Price: $15.00</div>
                      <div>• Strike Price: $35.00</div>
                      <div>• Days to Expiration: 45</div>
                      <div>• Interest Rate: 5.0%</div>
                      <div>• Volatility: 85%</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded text-xs">
                      <div className="font-semibold text-red-700 mb-1">
                        Option Values:
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          Market Price:{" "}
                          <span className="font-mono">$20.50</span>
                        </div>
                        <div>
                          Intrinsic Value:{" "}
                          <span className="font-mono">$20.00</span>
                        </div>
                        <div>
                          Time Value: <span className="font-mono">$0.50</span>
                        </div>
                        <div>
                          Interest Benefit:{" "}
                          <span className="font-mono">$0.65</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 p-3 rounded text-xs">
                      <div className="font-semibold text-green-700 mb-1">
                        Decision:
                      </div>
                      <div>
                        <strong>EXERCISE</strong> - Interest benefit ($0.65)
                        exceeds time value ($0.50)
                      </div>
                      <div className="mt-1 text-green-600">
                        Exercise to receive $35.00 strike price for reinvestment
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Exercise Boundary Visualization */}
          <div className="bg-gradient-to-r from-purple-50 to-violet-50 border-2 border-purple-200 p-6 rounded-xl">
            <h4 className="font-bold text-purple-800 text-xl mb-6 text-center">
              Dynamic Exercise Boundaries
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg border border-purple-200">
                <h5 className="font-semibold text-purple-700 mb-4 text-center">
                  Call Option Exercise Boundary
                </h5>

                <div className="space-y-3">
                  <div className="bg-purple-50 p-3 rounded text-center">
                    <div className="text-sm font-semibold text-purple-700 mb-2">
                      Critical Stock Price for Early Exercise
                    </div>
                    <div className="text-xs text-purple-600">
                      Varies with time to expiration and dividend timing
                    </div>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="bg-gray-50 p-2 rounded">
                      <div className="font-semibold text-purple-700">
                        60 Days to Expiry:
                      </div>
                      <div>Exercise if S {">"} $185.20</div>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <div className="font-semibold text-purple-700">
                        30 Days to Expiry:
                      </div>
                      <div>Exercise if S {">"} $178.50</div>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <div className="font-semibold text-purple-700">
                        1 Day to Ex-Div:
                      </div>
                      <div>Exercise if S {">"} $172.10</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-purple-200">
                <h5 className="font-semibold text-purple-700 mb-4 text-center">
                  Put Option Exercise Boundary
                </h5>

                <div className="space-y-3">
                  <div className="bg-purple-50 p-3 rounded text-center">
                    <div className="text-sm font-semibold text-purple-700 mb-2">
                      Critical Stock Price for Early Exercise
                    </div>
                    <div className="text-xs text-purple-600">
                      Generally lower than strike price, depends on interest
                      rates
                    </div>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="bg-gray-50 p-2 rounded">
                      <div className="font-semibold text-purple-700">
                        Interest Rate 5%:
                      </div>
                      <div>Exercise if S {"<"} $32.75</div>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <div className="font-semibold text-purple-700">
                        Interest Rate 3%:
                      </div>
                      <div>Exercise if S {"<"} $30.80</div>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <div className="font-semibold text-purple-700">
                        Interest Rate 1%:
                      </div>
                      <div>Exercise if S {"<"} $28.90</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="bg-gradient-to-r from-gray-50 to-slate-50 border-2 border-gray-200 p-6 rounded-xl">
            <h4 className="font-bold text-gray-800 text-xl mb-6 text-center">
              Exercise Decision Comparison
            </h4>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
                <thead className="bg-gradient-to-r from-gray-100 to-slate-100">
                  <tr>
                    <th className="border border-gray-300 p-4 text-left font-bold text-gray-800">
                      Scenario
                    </th>
                    <th className="border border-gray-300 p-4 text-center font-bold text-blue-600">
                      Option Value
                    </th>
                    <th className="border border-gray-300 p-4 text-center font-bold text-green-600">
                      Exercise Value
                    </th>
                    <th className="border border-gray-300 p-4 text-center font-bold text-purple-600">
                      Decision
                    </th>
                    <th className="border border-gray-300 p-4 text-center font-bold text-orange-600">
                      Optimal Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-4 font-medium">
                      High Dividend Call (AAPL)
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      $11.20
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      $10.95
                    </td>
                    <td className="border border-gray-300 p-4 text-center text-red-600 font-semibold">
                      Don't Exercise
                    </td>
                    <td className="border border-gray-300 p-4 text-center text-sm">
                      Sell option
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-gray-25">
                    <td className="border border-gray-300 p-4 font-medium">
                      Deep ITM Put (GME)
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      $20.50
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      $20.65
                    </td>
                    <td className="border border-gray-300 p-4 text-center text-green-600 font-semibold">
                      Exercise Early
                    </td>
                    <td className="border border-gray-300 p-4 text-center text-sm">
                      Exercise for cash
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-4 font-medium">
                      ATM Call (TSLA)
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      $8.75
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      $2.00
                    </td>
                    <td className="border border-gray-300 p-4 text-center text-red-600 font-semibold">
                      Don't Exercise
                    </td>
                    <td className="border border-gray-300 p-4 text-center text-sm">
                      Hold or sell
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-gray-25">
                    <td className="border border-gray-300 p-4 font-medium">
                      ITM Put High Interest
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      $15.30
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      $15.45
                    </td>
                    <td className="border border-gray-300 p-4 text-center text-green-600 font-semibold">
                      Exercise Early
                    </td>
                    <td className="border border-gray-300 p-4 text-center text-sm">
                      Exercise for interest
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Key Takeaways */}
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-200 p-6 rounded-xl">
            <h4 className="font-bold text-emerald-800 text-xl mb-4">
              Key Exercise Insights
            </h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-emerald-200 text-center">
                <div className="text-2xl mb-2">🎯</div>
                <h5 className="font-semibold text-emerald-700 mb-2">
                  Timing is Critical
                </h5>
                <p className="text-emerald-600 text-sm">
                  Early exercise decisions require precise timing analysis,
                  especially around dividend and earnings dates
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-emerald-200 text-center">
                <div className="text-2xl mb-2">⚖️</div>
                <h5 className="font-semibold text-emerald-700 mb-2">
                  Trade-off Analysis
                </h5>
                <p className="text-emerald-600 text-sm">
                  Always compare immediate exercise value against potential
                  future gains from holding
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-emerald-200 text-center">
                <div className="text-2xl mb-2">📊</div>
                <h5 className="font-semibold text-emerald-700 mb-2">
                  Dynamic Boundaries
                </h5>
                <p className="text-emerald-600 text-sm">
                  Exercise boundaries change constantly with market conditions,
                  requiring continuous monitoring
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    pricing: {
      title: "Pricing Impact",
      content: (
        <div className="space-y-8">
          <div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              The early exercise feature fundamentally changes how American
              options are priced, making them inherently more valuable than
              European options while creating complex mathematical challenges.
              Understanding these pricing dynamics is essential for accurate
              valuation and effective trading strategies.
            </p>
          </div>

          {/* Early Exercise Premium Analysis */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 p-6 rounded-xl">
            <h4 className="font-bold text-blue-800 text-xl mb-6 text-center">
              Early Exercise Premium Breakdown
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg border border-blue-200">
                <h5 className="font-bold text-blue-700 mb-4 text-center">
                  🎯 Value Components
                </h5>

                <div className="space-y-4">
                  <div className="text-center mb-4">
                    <BlockMath math="C_{American} = C_{European} + \text{Early Exercise Premium}" />
                  </div>

                  <div className="space-y-3">
                    <div className="bg-blue-50 p-3 rounded">
                      <div className="font-semibold text-blue-700 text-sm mb-1">
                        European Value: $8.25
                      </div>
                      <p className="text-blue-600 text-xs">
                        Black-Scholes theoretical price without early exercise
                      </p>
                    </div>

                    <div className="bg-green-50 p-3 rounded">
                      <div className="font-semibold text-green-700 text-sm mb-1">
                        Early Exercise Premium: $0.45
                      </div>
                      <p className="text-green-600 text-xs">
                        Additional value from flexibility to exercise early
                      </p>
                    </div>

                    <div className="bg-indigo-50 p-3 rounded border-2 border-indigo-300">
                      <div className="font-bold text-indigo-700 text-sm mb-1">
                        American Value: $8.70
                      </div>
                      <p className="text-indigo-600 text-xs">
                        Total market price including exercise flexibility
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-blue-200">
                <h5 className="font-bold text-blue-700 mb-4 text-center">
                  📊 Premium Determinants
                </h5>

                <div className="space-y-3">
                  <div className="bg-gray-50 p-3 rounded">
                    <div className="font-semibold text-blue-700 text-sm mb-2">
                      Factors Increasing Premium:
                    </div>
                    <ul className="text-blue-600 text-xs space-y-1">
                      <li>• High dividend yields</li>
                      <li>• Deep in-the-money positions</li>
                      <li>• High interest rates</li>
                      <li>• Longer time to expiration</li>
                      <li>• High volatility</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-3 rounded">
                    <div className="font-semibold text-blue-700 text-sm mb-2">
                      Factors Decreasing Premium:
                    </div>
                    <ul className="text-blue-600 text-xs space-y-1">
                      <li>• Low or no dividends</li>
                      <li>• Out-of-the-money positions</li>
                      <li>• Low interest rates</li>
                      <li>• Short time to expiration</li>
                      <li>• Low volatility</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Methods Comparison */}
          <div className="bg-gradient-to-r from-purple-50 to-violet-50 border-2 border-purple-200 p-6 rounded-xl">
            <h4 className="font-bold text-purple-800 text-xl mb-6 text-center">
              Pricing Methods for American Options
            </h4>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-lg border border-purple-200">
                <h5 className="font-bold text-purple-700 mb-4 text-center">
                  🌳 Binomial Trees
                </h5>

                <div className="space-y-3">
                  <div className="bg-purple-50 p-3 rounded text-center">
                    <div className="text-lg font-bold text-purple-600">
                      Most Popular
                    </div>
                    <div className="text-xs text-purple-500">
                      for American options
                    </div>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="bg-gray-50 p-2 rounded">
                      <div className="font-semibold text-purple-700">
                        Advantages:
                      </div>
                      <ul className="text-purple-600 mt-1 space-y-1">
                        <li>• Intuitive framework</li>
                        <li>• Handles dividends easily</li>
                        <li>• Shows exercise decisions</li>
                        <li>• Greeks calculation</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-2 rounded">
                      <div className="font-semibold text-purple-700">
                        Limitations:
                      </div>
                      <ul className="text-purple-600 mt-1 space-y-1">
                        <li>• Computationally intensive</li>
                        <li>• Convergence issues</li>
                        <li>• Memory requirements</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-purple-200">
                <h5 className="font-bold text-purple-700 mb-4 text-center">
                  🔢 Finite Difference
                </h5>

                <div className="space-y-3">
                  <div className="bg-purple-50 p-3 rounded text-center">
                    <div className="text-lg font-bold text-purple-600">
                      Most Accurate
                    </div>
                    <div className="text-xs text-purple-500">
                      for complex scenarios
                    </div>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="bg-gray-50 p-2 rounded">
                      <div className="font-semibold text-purple-700">
                        Advantages:
                      </div>
                      <ul className="text-purple-600 mt-1 space-y-1">
                        <li>• High precision</li>
                        <li>• Stable convergence</li>
                        <li>• Efficient for Greeks</li>
                        <li>• Multiple underlyings</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-2 rounded">
                      <div className="font-semibold text-purple-700">
                        Limitations:
                      </div>
                      <ul className="text-purple-600 mt-1 space-y-1">
                        <li>• Complex implementation</li>
                        <li>• Boundary conditions</li>
                        <li>• Technical expertise</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-purple-200">
                <h5 className="font-bold text-purple-700 mb-4 text-center">
                  🎲 Monte Carlo
                </h5>

                <div className="space-y-3">
                  <div className="bg-purple-50 p-3 rounded text-center">
                    <div className="text-lg font-bold text-purple-600">
                      Most Flexible
                    </div>
                    <div className="text-xs text-purple-500">
                      for exotic features
                    </div>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="bg-gray-50 p-2 rounded">
                      <div className="font-semibold text-purple-700">
                        Advantages:
                      </div>
                      <ul className="text-purple-600 mt-1 space-y-1">
                        <li>• Path-dependent features</li>
                        <li>• Multiple factors</li>
                        <li>• Complex payoffs</li>
                        <li>• Barrier options</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-2 rounded">
                      <div className="font-semibold text-purple-700">
                        Limitations:
                      </div>
                      <ul className="text-purple-600 mt-1 space-y-1">
                        <li>• Early exercise is difficult</li>
                        <li>• Computational time</li>
                        <li>• Statistical noise</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Time Value Behavior */}
          <div className="bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-200 p-6 rounded-xl">
            <h4 className="font-bold text-orange-800 text-xl mb-6">
              Time Value Behavior Near Exercise Boundary
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg border border-orange-200">
                <h5 className="font-bold text-orange-700 mb-4">
                  📉 Time Decay Acceleration
                </h5>

                <div className="space-y-3">
                  <div className="bg-orange-50 p-3 rounded">
                    <div className="font-semibold text-orange-700 text-sm mb-2">
                      Near Exercise Boundary:
                    </div>
                    <div className="text-orange-600 text-xs space-y-1">
                      <div>• Time value approaches zero</div>
                      <div>• Theta becomes very negative</div>
                      <div>• Delta approaches ±1.0</div>
                      <div>• Gamma spikes dramatically</div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-3 rounded text-xs">
                    <div className="font-semibold text-gray-700 mb-1">
                      Example:
                    </div>
                    <div className="text-gray-600">
                      Deep ITM call (S=$180, K=$150) with 5 days to expiration:
                      <br />• Time Value: $0.25
                      <br />• Theta: -0.15 per day
                      <br />• Exercise likely optimal
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-orange-200">
                <h5 className="font-bold text-orange-700 mb-4">
                  📊 Greek Behavior Changes
                </h5>

                <div className="space-y-3">
                  <div className="bg-orange-50 p-3 rounded">
                    <div className="font-semibold text-orange-700 text-sm mb-2">
                      Near Exercise:
                    </div>
                    <div className="text-orange-600 text-xs space-y-1">
                      <div>
                        • <strong>Delta:</strong> Approaches ±1.0
                      </div>
                      <div>
                        • <strong>Gamma:</strong> Extremely high
                      </div>
                      <div>
                        • <strong>Theta:</strong> Very negative
                      </div>
                      <div>
                        • <strong>Vega:</strong> Approaches zero
                      </div>
                      <div>
                        • <strong>Rho:</strong> Maximum sensitivity
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-3 rounded text-xs">
                    <div className="font-semibold text-gray-700 mb-1">
                      Risk Management:
                    </div>
                    <div className="text-gray-600">
                      High gamma and negative theta create significant overnight
                      risk for option sellers near exercise boundaries.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dividend Impact Analysis */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 p-6 rounded-xl">
            <h4 className="font-bold text-green-800 text-xl mb-6 text-center">
              Dividend Impact on American Option Pricing
            </h4>

            <div className="bg-white p-6 rounded-lg border border-green-200">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-green-700 mb-4">
                    Pre-Dividend Exercise Analysis
                  </h5>

                  <div className="space-y-3">
                    <div className="bg-green-50 p-3 rounded">
                      <div className="font-semibold text-green-700 text-sm mb-2">
                        Call Option Decision:
                      </div>
                      <div className="text-xs text-green-600">
                        <div className="mb-2">
                          <strong>Exercise if:</strong>{" "}
                          <InlineMath math="D > c - (S - K)" />
                        </div>
                        <div>
                          Where D = dividend, c = call price, S = stock price, K
                          = strike
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-3 rounded text-xs">
                      <div className="font-semibold text-gray-700 mb-1">
                        Example Calculation:
                      </div>
                      <div className="space-y-1">
                        <div>Stock Price (S): $180.00</div>
                        <div>Strike Price (K): $170.00</div>
                        <div>Call Price (c): $11.50</div>
                        <div>Dividend (D): $2.00</div>
                        <div className="border-t pt-1 mt-2">
                          <strong>Analysis:</strong> $2.00 {">"} $11.50 - ($180
                          - $170) = $1.50
                          <br />
                          <span className="text-green-600 font-semibold">
                            ✓ Exercise before ex-dividend
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold text-green-700 mb-4">
                    Dividend Adjustment Mechanics
                  </h5>

                  <div className="space-y-3">
                    <div className="bg-green-50 p-3 rounded">
                      <div className="font-semibold text-green-700 text-sm mb-2">
                        Stock Price Adjustment:
                      </div>
                      <div className="text-green-600 text-xs">
                        On ex-dividend date, stock price typically falls by
                        approximately the dividend amount
                      </div>
                    </div>

                    <div className="bg-gray-50 p-3 rounded text-xs">
                      <div className="space-y-1">
                        <div>
                          <strong>Before Ex-Date:</strong> Stock = $180.00
                        </div>
                        <div>
                          <strong>Dividend Amount:</strong> $2.00
                        </div>
                        <div>
                          <strong>After Ex-Date:</strong> Stock ≈ $178.00
                        </div>
                        <div className="border-t pt-1 mt-2">
                          <strong>Call Value Impact:</strong>
                          <br />• Pre-exercise: Capture full $2.00 dividend
                          <br />• Post ex-date: Option worth $2.00 less
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interest Rate Sensitivity */}
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border-2 border-cyan-200 p-6 rounded-xl">
            <h4 className="font-bold text-cyan-800 text-xl mb-6">
              Interest Rate Impact on Early Exercise
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg border border-cyan-200">
                <h5 className="font-bold text-cyan-700 mb-4">
                  📈 Call Options
                </h5>

                <div className="space-y-3">
                  <div className="bg-cyan-50 p-3 rounded">
                    <div className="font-semibold text-cyan-700 text-sm mb-2">
                      Higher Interest Rates →
                    </div>
                    <ul className="text-cyan-600 text-xs space-y-1">
                      <li>• Decrease early exercise incentive</li>
                      <li>• Delay strike payment is valuable</li>
                      <li>• American premium decreases</li>
                      <li>• Exercise boundary moves higher</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-3 rounded text-xs">
                    <div className="font-semibold text-cyan-700 mb-1">
                      Logic:
                    </div>
                    <div className="text-cyan-600">
                      Delaying payment of strike price allows money to earn
                      interest, making early exercise less attractive.
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-cyan-200">
                <h5 className="font-bold text-cyan-700 mb-4">📉 Put Options</h5>

                <div className="space-y-3">
                  <div className="bg-cyan-50 p-3 rounded">
                    <div className="font-semibold text-cyan-700 text-sm mb-2">
                      Higher Interest Rates →
                    </div>
                    <ul className="text-cyan-600 text-xs space-y-1">
                      <li>• Increase early exercise incentive</li>
                      <li>• Early strike receipt is valuable</li>
                      <li>• American premium increases</li>
                      <li>• Exercise boundary moves higher</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-3 rounded text-xs">
                    <div className="font-semibold text-cyan-700 mb-1">
                      Logic:
                    </div>
                    <div className="text-cyan-600">
                      Receiving strike price early allows reinvestment at higher
                      rates, making early exercise more attractive.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Numerical Example */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200 p-6 rounded-xl">
            <h4 className="font-bold text-indigo-800 text-xl mb-6 text-center">
              Pricing Example: Binomial Tree vs Black-Scholes
            </h4>

            <div className="bg-white p-6 rounded-lg border border-indigo-200">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-indigo-700 mb-4">
                    Market Conditions
                  </h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Stock Price (S₀):</span>
                      <span className="font-mono">$100.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Strike Price (K):</span>
                      <span className="font-mono">$95.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Time to Expiration (T):</span>
                      <span className="font-mono">0.25 years</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Risk-free Rate (r):</span>
                      <span className="font-mono">5.00%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Volatility (σ):</span>
                      <span className="font-mono">30.00%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Dividend Yield (q):</span>
                      <span className="font-mono">3.00%</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold text-indigo-700 mb-4">
                    Pricing Results
                  </h5>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-3 rounded">
                      <div className="text-center">
                        <div className="font-semibold text-blue-700">
                          European Call (Black-Scholes)
                        </div>
                        <div className="text-2xl font-bold text-blue-600">
                          $7.89
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 p-3 rounded">
                      <div className="text-center">
                        <div className="font-semibold text-green-700">
                          American Call (Binomial)
                        </div>
                        <div className="text-2xl font-bold text-green-600">
                          $8.23
                        </div>
                      </div>
                    </div>

                    <div className="bg-amber-50 p-3 rounded border-2 border-amber-300">
                      <div className="text-center">
                        <div className="font-semibold text-amber-700">
                          Early Exercise Premium
                        </div>
                        <div className="text-xl font-bold text-amber-600">
                          $0.34 (4.3%)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Insights */}
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-200 p-6 rounded-xl">
            <h4 className="font-bold text-emerald-800 text-xl mb-6">
              Key Pricing Insights
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-emerald-200">
                  <h5 className="font-semibold text-emerald-700 mb-2">
                    🎯 Premium Drivers
                  </h5>
                  <p className="text-emerald-600 text-sm">
                    Early exercise premium is highest for deep ITM options with
                    high dividends or interest rates. The premium can range from
                    near zero for OTM options to 10%+ for deep ITM puts in
                    high-rate environments.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-emerald-200">
                  <h5 className="font-semibold text-emerald-700 mb-2">
                    ⚡ Computational Reality
                  </h5>
                  <p className="text-emerald-600 text-sm">
                    While Black-Scholes gives instant results, American option
                    pricing requires iterative methods. Modern systems use
                    optimized binomial trees or finite difference methods for
                    real-time pricing.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-emerald-200">
                  <h5 className="font-semibold text-emerald-700 mb-2">
                    📊 Risk Management
                  </h5>
                  <p className="text-emerald-600 text-sm">
                    American options create assignment risk and require dynamic
                    hedging strategies. Greeks near exercise boundaries can
                    change rapidly, demanding frequent portfolio adjustments.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-emerald-200">
                  <h5 className="font-semibold text-emerald-700 mb-2">
                    🎪 Market Impact
                  </h5>
                  <p className="text-emerald-600 text-sm">
                    The flexibility premium makes American options more
                    expensive but provides strategic value. This trade-off
                    between cost and flexibility drives most equity option
                    market structure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    markets: {
      title: "Market Applications",
      content: (
        <div className="space-y-8">
          <div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              American options dominate equity markets worldwide, representing
              the vast majority of exchange-traded options. Their early exercise
              flexibility makes them the preferred choice for individual stocks,
              ETFs, and many institutional strategies where timing flexibility
              provides significant strategic value.
            </p>
          </div>

          {/* Market Dominance */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 p-6 rounded-xl">
            <h4 className="font-bold text-blue-800 text-xl mb-6 text-center">
              American Options Market Dominance
            </h4>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-lg border border-blue-200">
                <h5 className="font-bold text-blue-700 mb-4 text-center">
                  📈 Equity Options
                </h5>
                <div className="space-y-3">
                  <div className="bg-blue-50 p-3 rounded text-center">
                    <div className="text-lg font-bold text-blue-600">Nearly All</div>
                    <div className="text-xs text-blue-500">
                    Induvidual Stocks
                    </div>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="font-semibold text-blue-700">
                      Major Markets:
                    </div>
                    <ul className="text-blue-600 space-y-1">
                      <li>• Individual stock options</li>
                      <li>• Sector ETF options</li>
                      <li>• REIT options</li>
                      <li>• ADR options</li>
                      <li>• Dividend-focused ETFs</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-2 rounded">
                    <div className="font-semibold text-gray-700 text-xs">
                      Why American?
                    </div>
                    <div className="text-gray-600 text-xs">
                      Dividend capture and earnings-driven volatility require
                      exercise flexibility
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-blue-200">
                <h5 className="font-bold text-green-700 mb-4 text-center">
                  🏛️ Exchange Standards
                </h5>
                <div className="space-y-3">
                  <div className="bg-green-50 p-3 rounded text-center">
                    <div className="text-lg font-bold text-green-600">
                      Default
                    </div>
                    <div className="text-xs text-green-500">
                      Exchange Setting
                    </div>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="font-semibold text-green-700">
                      Global Exchanges:
                    </div>
                    <ul className="text-green-600 space-y-1">
                      <li>• CBOE (Chicago)</li>
                      <li>• NYSE American</li>
                      <li>• NASDAQ Options</li>
                      <li>• TSX (Toronto)</li>
                      <li>• LSE (London)</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-2 rounded">
                    <div className="font-semibold text-gray-700 text-xs">
                      Why Default?
                    </div>
                    <div className="text-gray-600 text-xs">
                      Market demand for flexibility and competitive positioning
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-blue-200">
                <h5 className="font-bold text-purple-700 mb-4 text-center">
                  💰 Trading Volume
                </h5>
                <div className="space-y-3">
                  <div className="bg-purple-50 p-3 rounded text-center">
                    <div className="text-lg font-bold text-purple-600">
                      ~15M
                    </div>
                    <div className="text-xs text-purple-500">
                      Daily Contracts
                    </div>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="font-semibold text-purple-700">
                      Volume Leaders:
                    </div>
                    <ul className="text-purple-600 space-y-1">
                      <li>• SPY (S&P 500 ETF)</li>
                      <li>• AAPL, TSLA, NVDA</li>
                      <li>• QQQ (NASDAQ ETF)</li>
                      <li>• IWM (Russell 2000)</li>
                      <li>• Meme stocks (AMC, GME)</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-2 rounded">
                    <div className="font-semibold text-gray-700 text-xs">
                      Driver:
                    </div>
                    <div className="text-gray-600 text-xs">
                      Retail and institutional demand for tactical flexibility
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

{/* Asset Class Breakdown */}
<div className="bg-gradient-to-r from-cyan-50 to-blue-50 border-2 border-cyan-200 p-6 rounded-xl">
  <h4 className="font-bold text-cyan-800 text-xl mb-6 text-center">
    American Options by Asset Class
  </h4>

  <div className="overflow-x-auto">
    <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
      <thead className="bg-gradient-to-r from-cyan-100 to-blue-100">
        <tr>
          <th className="border border-gray-300 p-4 text-left font-bold text-gray-800">
            Asset Class
          </th>
          <th className="border border-gray-300 p-4 text-center font-bold text-blue-600">
            American Usage
          </th>
          <th className="border border-gray-300 p-4 text-center font-bold text-green-600">
            Market Activity
          </th>
          <th className="border border-gray-300 p-4 text-center font-bold text-purple-600">
            Premium Characteristics
          </th>
          <th className="border border-gray-300 p-4 text-left font-bold text-orange-600">
            Key Drivers
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="hover:bg-gray-50">
          <td className="border border-gray-300 p-4 font-semibold">
            Individual Equity Options
          </td>
          <td className="border border-gray-300 p-4 text-center text-blue-600 font-bold">
            Dominant
          </td>
          <td className="border border-gray-300 p-4 text-center">
            Very High Volume
          </td>
          <td className="border border-gray-300 p-4 text-center">
            Moderate premium over European
          </td>
          <td className="border border-gray-300 p-4 text-sm">
            Dividend capture, earnings events
          </td>
        </tr>
        <tr className="hover:bg-gray-50 bg-gray-25">
          <td className="border border-gray-300 p-4 font-semibold">
            Broad Market ETFs
          </td>
          <td className="border border-gray-300 p-4 text-center text-blue-600 font-bold">
            Standard
          </td>
          <td className="border border-gray-300 p-4 text-center">
            High Volume
          </td>
          <td className="border border-gray-300 p-4 text-center">
            Low premium over European
          </td>
          <td className="border border-gray-300 p-4 text-sm">
            Portfolio hedging flexibility
          </td>
        </tr>
        <tr className="hover:bg-gray-50">
          <td className="border border-gray-300 p-4 font-semibold">
            Sector ETFs
          </td>
          <td className="border border-gray-300 p-4 text-center text-blue-600 font-bold">
            Common
          </td>
          <td className="border border-gray-300 p-4 text-center">
            Moderate Volume
          </td>
          <td className="border border-gray-300 p-4 text-center">
            Variable premium
          </td>
          <td className="border border-gray-300 p-4 text-sm">
            Sector rotation strategies
          </td>
        </tr>
        <tr className="hover:bg-gray-50 bg-gray-25">
          <td className="border border-gray-300 p-4 font-semibold">
            REITs
          </td>
          <td className="border border-gray-300 p-4 text-center text-blue-600 font-bold">
            Preferred
          </td>
          <td className="border border-gray-300 p-4 text-center">
            Moderate Volume
          </td>
          <td className="border border-gray-300 p-4 text-center">
            High premium over European
          </td>
          <td className="border border-gray-300 p-4 text-sm">
            High dividend yields
          </td>
        </tr>
        <tr className="hover:bg-gray-50">
          <td className="border border-gray-300 p-4 font-semibold">
            Commodity ETFs
          </td>
          <td className="border border-gray-300 p-4 text-center text-blue-600">
            Mixed
          </td>
          <td className="border border-gray-300 p-4 text-center">
            Moderate Volume
          </td>
          <td className="border border-gray-300 p-4 text-center">
            Low premium over European
          </td>
          <td className="border border-gray-300 p-4 text-sm">
            Event-driven volatility
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

          {/* Trading Strategies */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 p-6 rounded-xl">
              <h4 className="font-bold text-green-800 text-xl mb-4">
                🎯 Retail Trading Strategies
              </h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h5 className="font-semibold text-green-700 mb-2">
                    Covered Calls on Dividend Stocks
                  </h5>
                  <p className="text-green-600 text-sm mb-2">
                    Write calls against stock holdings, exercise flexibility
                    protects against early assignment
                  </p>
                  <ul className="text-gray-600 text-xs space-y-1">
                    <li>• Popular with income-focused investors</li>
                    <li>• Assignment risk around ex-dividend dates</li>
                    <li>• Strategy requires early exercise monitoring</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h5 className="font-semibold text-green-700 mb-2">
                    Protective Puts
                  </h5>
                  <p className="text-green-600 text-sm mb-2">
                    Portfolio insurance with flexibility to exercise during
                    market crashes
                  </p>
                  <ul className="text-gray-600 text-xs space-y-1">
                    <li>• Early exercise in severe downturns</li>
                    <li>• Immediate portfolio protection</li>
                    <li>• Popular during earnings seasons</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h5 className="font-semibold text-green-700 mb-2">
                    Earnings Straddles
                  </h5>
                  <p className="text-green-600 text-sm mb-2">
                    Profit from volatility around earnings with exercise timing
                    flexibility
                  </p>
                  <ul className="text-gray-600 text-xs space-y-1">
                    <li>• Exercise ITM side after earnings move</li>
                    <li>• Avoid theta decay through expiration</li>
                    <li>• Capitalize on sustained price moves</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200 p-6 rounded-xl">
              <h4 className="font-bold text-orange-800 text-xl mb-4">
                🏢 Institutional Applications
              </h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-orange-200">
                  <h5 className="font-semibold text-orange-700 mb-2">
                    Dynamic Portfolio Hedging
                  </h5>
                  <p className="text-orange-600 text-sm mb-2">
                    Adjust hedge ratios through early exercise as portfolio
                    composition changes
                  </p>
                  <ul className="text-gray-600 text-xs space-y-1">
                    <li>• Pension fund portfolio protection</li>
                    <li>• Mutual fund volatility management</li>
                    <li>• Tactical asset allocation overlays</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-orange-200">
                  <h5 className="font-semibold text-orange-700 mb-2">
                    Market Making Operations
                  </h5>
                  <p className="text-orange-600 text-sm mb-2">
                    Provide liquidity while managing early exercise and
                    assignment risk
                  </p>
                  <ul className="text-gray-600 text-xs space-y-1">
                    <li>• Delta hedging with stock positions</li>
                    <li>• Pin risk management at expiration</li>
                    <li>• Dividend risk on short calls</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-orange-200">
                  <h5 className="font-semibold text-orange-700 mb-2">
                    Tax-Efficient Strategies
                  </h5>
                  <p className="text-orange-600 text-sm mb-2">
                    Optimize timing of gains/losses through strategic exercise
                    decisions
                  </p>
                  <ul className="text-gray-600 text-xs space-y-1">
                    <li>• Year-end tax loss harvesting</li>
                    <li>• Long-term vs short-term gains</li>
                    <li>• Cross-year P&L management</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Industry-Specific Applications */}
          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-200 p-6 rounded-xl">
            <h4 className="font-bold text-amber-800 text-xl mb-6">
              Industry-Specific Use Cases
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-amber-200">
                  <h5 className="font-semibold text-amber-700 mb-2">
                    📱 Technology Sector
                  </h5>
                  <ul className="text-amber-600 text-sm space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>
                        <strong>Employee Stock Options:</strong> American
                        exercise for tax planning and liquidity needs
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>
                        <strong>Earnings Volatility:</strong> Exercise
                        flexibility around quarterly results
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>
                        <strong>M&A Activity:</strong> Early exercise in
                        takeover situations
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-amber-200">
                  <h5 className="font-semibold text-amber-700 mb-2">
                    🏦 Financial Services
                  </h5>
                  <ul className="text-amber-600 text-sm space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>
                        <strong>Interest Rate Sensitivity:</strong> Early
                        exercise optimal in rising rate environments
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>
                        <strong>Dividend Policies:</strong> Quarterly dividends
                        create regular exercise decisions
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>
                        <strong>Regulatory Changes:</strong> Exercise timing
                        around policy announcements
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-amber-200">
                  <h5 className="font-semibold text-amber-700 mb-2">
                    🏭 Industrial & Energy
                  </h5>
                  <ul className="text-amber-600 text-sm space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>
                        <strong>Commodity Exposure:</strong> Exercise during
                        commodity price spikes
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>
                        <strong>Cyclical Patterns:</strong> Early exercise at
                        cycle peaks
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>
                        <strong>ESG Transitions:</strong> Exercise flexibility
                        during energy transition
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-amber-200">
                  <h5 className="font-semibold text-amber-700 mb-2">
                    🏥 Healthcare & Biotech
                  </h5>
                  <ul className="text-amber-600 text-sm space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>
                        <strong>FDA Approvals:</strong> Immediate exercise after
                        positive trial results
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>
                        <strong>Patent Expirations:</strong> Early exercise
                        before generic competition
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>
                        <strong>M&A Premiums:</strong> Exercise during biotech
                        acquisition activity
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Market Evolution Trends */}
          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border-2 border-teal-200 p-6 rounded-xl">
            <h4 className="font-bold text-teal-800 text-xl mb-6">
              Market Evolution & Future Trends
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-teal-200">
                  <h5 className="font-semibold text-teal-700 mb-2">
                    📈 Growing Segments
                  </h5>
                  <ul className="text-teal-600 text-sm space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-teal-500 mt-1">•</span>
                      <span>
                        <strong>Zero-Day Options (0DTE):</strong> Same-day
                        expiration American options with extreme gamma
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-teal-500 mt-1">•</span>
                      <span>
                        <strong>ESG ETF Options:</strong> Sustainable investing
                        with exercise flexibility
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-teal-500 mt-1">•</span>
                      <span>
                        <strong>Thematic ETFs:</strong> AI, clean energy,
                        genomics with event-driven exercise
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-teal-200">
                  <h5 className="font-semibold text-teal-700 mb-2">
                    🚀 Technology Impact
                  </h5>
                  <ul className="text-teal-600 text-sm space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-teal-500 mt-1">•</span>
                      <span>
                        <strong>Algorithmic Exercise:</strong> AI-driven optimal
                        exercise timing decisions
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-teal-500 mt-1">•</span>
                      <span>
                        <strong>Real-time Risk Management:</strong>{" "}
                        Instantaneous assignment risk monitoring
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-teal-500 mt-1">•</span>
                      <span>
                        <strong>Cross-Market Arbitrage:</strong> Global American
                        option arbitrage strategies
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-teal-50 p-4 rounded-lg border border-teal-200">
              <h5 className="font-semibold text-teal-700 mb-2">
                Looking Forward: The Next Decade
              </h5>
              <p className="text-teal-600 text-sm">
                American options will likely expand into new asset classes as
                markets demand greater flexibility. Expect growth in
                cryptocurrency options, climate derivatives, and cross-asset
                structures. The integration of AI for optimal exercise decisions
                and blockchain for settlement efficiency will reshape how these
                markets operate, while regulatory harmonization may standardize
                exercise styles globally.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    advantages: {
      title: "Advantages & Disadvantages",
      content: (
        <div className="space-y-8">
          <div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              American options offer maximum flexibility through early exercise
              rights, but this flexibility comes at a cost and with additional
              complexity. Understanding when the advantages outweigh the
              disadvantages is crucial for optimal options strategy selection
              and effective portfolio management.
            </p>
          </div>

          {/* Main Advantages vs Disadvantages */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 p-6 rounded-xl">
              <h4 className="font-bold text-green-800 text-xl mb-6 text-center">
                ✅ Key Advantages
              </h4>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-semibold text-green-700 mb-2">
                        Maximum Exercise Flexibility
                      </h5>
                      <p className="text-green-600 text-sm mb-2">
                        Exercise at any optimal moment based on market
                        conditions, dividends, or strategic needs
                      </p>
                      <div className="bg-green-50 p-2 rounded text-xs">
                        <strong>Example:</strong> Exercise AAPL calls before
                        $0.95 dividend to capture full payment
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-semibold text-green-700 mb-2">
                        Dividend Capture Opportunities
                      </h5>
                      <p className="text-green-600 text-sm mb-2">
                        Capture dividends on deep ITM calls or optimize timing
                        around ex-dividend dates
                      </p>
                      <div className="bg-green-50 p-2 rounded text-xs">
                        <strong>Benefit:</strong> Can earn dividend + intrinsic
                        value vs just intrinsic value
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-semibold text-green-700 mb-2">
                        Market Responsiveness
                      </h5>
                      <p className="text-green-600 text-sm mb-2">
                        React immediately to earnings, news, or market crashes
                        without waiting for expiration
                      </p>
                      <div className="bg-green-50 p-2 rounded text-xs">
                        <strong>Strategy:</strong> Exercise protective puts
                        during flash crashes for immediate protection
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 2a2 2 0 00-2 2v11a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4zm4 5a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1zm0 3a1 1 0 011-1h6a1 1 0 110 2H9a1 1 0 01-1-1zm0 3a1 1 0 011-1h6a1 1 0 110 2H9a1 1 0 01-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-semibold text-green-700 mb-2">
                        Tax Optimization
                      </h5>
                      <p className="text-green-600 text-sm mb-2">
                        Control timing of gains and losses for optimal tax
                        treatment across calendar years
                      </p>
                      <div className="bg-green-50 p-2 rounded text-xs">
                        <strong>Application:</strong> Exercise profitable
                        positions in low-tax years, defer losses
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-semibold text-green-700 mb-2">
                        Market Standard
                      </h5>
                      <p className="text-green-600 text-sm mb-2">
                        Available on 95%+ of equity options, providing
                        consistent access and deep liquidity
                      </p>
                      <div className="bg-green-50 p-2 rounded text-xs">
                        <strong>Reality:</strong> Most brokers and exchanges
                        default to American style for individual stocks
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-pink-50 border-2 border-red-200 p-6 rounded-xl">
              <h4 className="font-bold text-red-800 text-xl mb-6 text-center">
                ❌ Key Disadvantages
              </h4>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-semibold text-red-700 mb-2">
                        Higher Premium Cost
                      </h5>
                      <p className="text-red-600 text-sm mb-2">
                        Pay 1-8% premium over European options for early
                        exercise flexibility you may never use
                      </p>
                      <div className="bg-red-50 p-2 rounded text-xs">
                        <strong>Cost:</strong> Extra $0.30-0.50 per contract on
                        typical ATM options
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-semibold text-red-700 mb-2">
                        Assignment Risk for Sellers
                      </h5>
                      <p className="text-red-600 text-sm mb-2">
                        Option sellers face unpredictable early assignment,
                        especially around dividends and earnings
                      </p>
                      <div className="bg-red-50 p-2 rounded text-xs">
                        <strong>Impact:</strong> Disrupts delta hedging and
                        requires higher margin requirements
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-semibold text-red-700 mb-2">
                        Complex Pricing Models
                      </h5>
                      <p className="text-red-600 text-sm mb-2">
                        Require sophisticated numerical methods instead of
                        simple analytical formulas
                      </p>
                      <div className="bg-red-50 p-2 rounded text-xs">
                        <strong>Challenge:</strong> Binomial trees, finite
                        difference, or Monte Carlo required
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-semibold text-red-700 mb-2">
                        Decision Complexity
                      </h5>
                      <p className="text-red-600 text-sm mb-2">
                        Requires continuous monitoring and analysis to determine
                        optimal exercise timing
                      </p>
                      <div className="bg-red-50 p-2 rounded text-xs">
                        <strong>Burden:</strong> Must track dividends, interest
                        rates, time decay, and volatility changes
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-semibold text-red-700 mb-2">
                        Suboptimal Exercise Risk
                      </h5>
                      <p className="text-red-600 text-sm mb-2">
                        Most retail traders exercise suboptimally, destroying
                        time value unnecessarily
                      </p>
                      <div className="bg-red-50 p-2 rounded text-xs">
                        <strong>Reality:</strong> Studies show 80%+ of early
                        exercises are economically suboptimal
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decision Framework */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 p-6 rounded-xl">
            <h4 className="font-bold text-blue-800 text-xl mb-6 text-center">
              When to Choose American Options
            </h4>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg border border-blue-200">
                <h5 className="font-bold text-green-700 mb-4 text-center">
                  ✅ Choose American When:
                </h5>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">1</span>
                    </div>
                    <div>
                      <div className="font-semibold text-green-700 text-sm">
                        High Dividend Stocks
                      </div>
                      <p className="text-green-600 text-xs">
                        Dividend yield {">"} 2% with regular quarterly payments
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">2</span>
                    </div>
                    <div>
                      <div className="font-semibold text-green-700 text-sm">
                        Deep ITM Positions
                      </div>
                      <p className="text-green-600 text-xs">
                        Options with minimal time value remaining
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">3</span>
                    </div>
                    <div>
                      <div className="font-semibold text-green-700 text-sm">
                        Event-Driven Strategies
                      </div>
                      <p className="text-green-600 text-xs">
                        Earnings, M&A, or FDA approval plays requiring timing
                        flexibility
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">4</span>
                    </div>
                    <div>
                      <div className="font-semibold text-green-700 text-sm">
                        Tax Management Needs
                      </div>
                      <p className="text-green-600 text-xs">
                        Year-end planning or capital gains optimization
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">5</span>
                    </div>
                    <div>
                      <div className="font-semibold text-green-700 text-sm">
                        Single Stock Exposure
                      </div>
                      <p className="text-green-600 text-xs">
                        Individual equity options (only style available)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-blue-200">
                <h5 className="font-bold text-red-700 mb-4 text-center">
                  ❌ Avoid American When:
                </h5>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">1</span>
                    </div>
                    <div>
                      <div className="font-semibold text-red-700 text-sm">
                        Cost is Primary Concern
                      </div>
                      <p className="text-red-600 text-xs">
                        Budget constraints make 3-5% premium savings important
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">2</span>
                    </div>
                    <div>
                      <div className="font-semibold text-red-700 text-sm">
                        Algorithmic Trading
                      </div>
                      <p className="text-red-600 text-xs">
                        Need analytical pricing formulas for high-frequency
                        strategies
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">3</span>
                    </div>
                    <div>
                      <div className="font-semibold text-red-700 text-sm">
                        Low Dividend Environments
                      </div>
                      <p className="text-red-600 text-xs">
                        Stocks with {"<"}1% dividend yield or no dividends
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">4</span>
                    </div>
                    <div>
                      <div className="font-semibold text-red-700 text-sm">
                        Passive Strategies
                      </div>
                      <p className="text-red-600 text-xs">
                        Set-and-forget positions held to expiration
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">5</span>
                    </div>
                    <div>
                      <div className="font-semibold text-red-700 text-sm">
                        Index Exposure Available
                      </div>
                      <p className="text-red-600 text-xs">
                        When European index options meet strategy needs
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cost-Benefit Analysis */}
          <div className="bg-gradient-to-r from-purple-50 to-violet-50 border-2 border-purple-200 p-6 rounded-xl">
            <h4 className="font-bold text-purple-800 text-xl mb-6 text-center">
              Cost-Benefit Analysis by Scenario
            </h4>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
                <thead className="bg-gradient-to-r from-purple-100 to-violet-100">
                  <tr>
                    <th className="border border-gray-300 p-4 text-left font-bold text-gray-800">
                      Scenario
                    </th>
                    <th className="border border-gray-300 p-4 text-center font-bold text-green-600">
                      American Advantage
                    </th>
                    <th className="border border-gray-300 p-4 text-center font-bold text-red-600">
                      American Disadvantage
                    </th>
                    <th className="border border-gray-300 p-4 text-center font-bold text-blue-600">
                      Net Benefit
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-4 font-semibold">
                      High Dividend Stock (4% yield)
                    </td>
                    <td className="border border-gray-300 p-4 text-center text-green-600">
                      Dividend capture worth 3-5%
                    </td>
                    <td className="border border-gray-300 p-4 text-center text-red-600">
                      2-5% higher premium
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-semibold">
                        High Positive
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-gray-25">
                    <td className="border border-gray-300 p-4 font-semibold">
                      Low Dividend Tech Stock
                    </td>
                    <td className="border border-gray-300 p-4 text-center text-green-600">
                      Earnings flexibility
                    </td>
                    <td className="border border-gray-300 p-4 text-center text-red-600">
                      3-4% higher premium
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm font-semibold">
                        Neutral
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-4 font-semibold">
                      Deep ITM Put (Protection)
                    </td>
                    <td className="border border-gray-300 p-4 text-center text-green-600">
                      Immediate exercise value
                    </td>
                    <td className="border border-gray-300 p-4 text-center text-red-600">
                      5-8% higher premium
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-semibold">
                        High Positive
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-gray-25">
                    <td className="border border-gray-300 p-4 font-semibold">
                      OTM Speculation
                    </td>
                    <td className="border border-gray-300 p-4 text-center text-green-600">
                      Minimal early exercise value
                    </td>
                    <td className="border border-gray-300 p-4 text-center text-red-600">
                      2-5% higher premium
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-semibold">
                        Negative
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-4 font-semibold">
                      Volatility Trading
                    </td>
                    <td className="border border-gray-300 p-4 text-center text-green-600">
                      Event-driven flexibility
                    </td>
                    <td className="border border-gray-300 p-4 text-center text-red-600">
                      2-3% higher premium
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm font-semibold">
                        Depends on Events
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Strategy-Specific Recommendations */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200 p-6 rounded-xl">
            <h4 className="font-bold text-indigo-800 text-xl mb-6 text-center">
              Strategy-Specific Recommendations
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-indigo-200">
                  <h5 className="font-semibold text-indigo-700 mb-2">
                    📈 Bullish Strategies
                  </h5>
                  <div className="space-y-3">
                    <div className="bg-indigo-50 p-3 rounded">
                      <div className="font-semibold text-indigo-700 text-sm">
                        Long Calls on Dividend Stocks
                      </div>
                      <p className="text-indigo-600 text-xs">
                        ✅ American essential for dividend capture
                      </p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <div className="font-semibold text-gray-700 text-sm">
                        Covered Calls
                      </div>
                      <p className="text-gray-600 text-xs">
                        ⚠️ Assignment risk requires monitoring
                      </p>
                    </div>
                    <div className="bg-indigo-50 p-3 rounded">
                      <div className="font-semibold text-indigo-700 text-sm">
                        Bull Call Spreads
                      </div>
                      <p className="text-indigo-600 text-xs">
                        ✅ Early exercise can optimize profits
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-indigo-200">
                  <h5 className="font-semibold text-indigo-700 mb-2">
                    📉 Bearish Strategies
                  </h5>
                  <div className="space-y-3">
                    <div className="bg-indigo-50 p-3 rounded">
                      <div className="font-semibold text-indigo-700 text-sm">
                        Protective Puts
                      </div>
                      <p className="text-indigo-600 text-xs">
                        ✅ Critical for crash protection flexibility
                      </p>
                    </div>
                    <div className="bg-indigo-50 p-3 rounded">
                      <div className="font-semibold text-indigo-700 text-sm">
                        Long Puts (Speculation)
                      </div>
                      <p className="text-indigo-600 text-xs">
                        ✅ Exercise during rapid declines
                      </p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <div className="font-semibold text-gray-700 text-sm">
                        Bear Put Spreads
                      </div>
                      <p className="text-gray-600 text-xs">
                        ⚠️ Early exercise complicates spread management
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-indigo-200">
                  <h5 className="font-semibold text-indigo-700 mb-2">
                    ⚡ Volatility Strategies
                  </h5>
                  <div className="space-y-3">
                    <div className="bg-indigo-50 p-3 rounded">
                      <div className="font-semibold text-indigo-700 text-sm">
                        Long Straddles/Strangles
                      </div>
                      <p className="text-indigo-600 text-xs">
                        ✅ Exercise winning side, hold losing side
                      </p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <div className="font-semibold text-gray-700 text-sm">
                        Short Straddles/Strangles
                      </div>
                      <p className="text-gray-600 text-xs">
                        ❌ Assignment risk from either side
                      </p>
                    </div>
                    <div className="bg-indigo-50 p-3 rounded">
                      <div className="font-semibold text-indigo-700 text-sm">
                        Iron Condors/Butterflies
                      </div>
                      <p className="text-indigo-600 text-xs">
                        ✅ Early exercise can reduce max loss
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-indigo-200">
                  <h5 className="font-semibold text-indigo-700 mb-2">
                    🏢 Income Strategies
                  </h5>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded">
                      <div className="font-semibold text-gray-700 text-sm">
                        Cash-Secured Puts
                      </div>
                      <p className="text-gray-600 text-xs">
                        ❌ Early assignment disrupts income timing
                      </p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <div className="font-semibold text-gray-700 text-sm">
                        Covered Calls
                      </div>
                      <p className="text-gray-600 text-xs">
                        ❌ Dividend assignment risk reduces income
                      </p>
                    </div>
                    <div className="bg-indigo-50 p-3 rounded">
                      <div className="font-semibold text-indigo-700 text-sm">
                        Wheel Strategy
                      </div>
                      <p className="text-indigo-600 text-xs">
                        ✅ Assignment is part of the strategy
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trader Sophistication Matrix */}
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border-2 border-cyan-200 p-6 rounded-xl">
            <h4 className="font-bold text-cyan-800 text-xl mb-6 text-center">
              Suitability by Trader Experience Level
            </h4>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-lg border border-cyan-200">
                <h5 className="font-bold text-cyan-700 mb-4 text-center">
                  🎓 Beginner Traders
                </h5>

                <div className="space-y-3">
                  <div className="bg-cyan-50 p-3 rounded">
                    <div className="font-semibold text-cyan-700 text-sm mb-2">
                      Recommended Approach:
                    </div>
                    <ul className="text-cyan-600 text-xs space-y-1">
                      <li>• Start with American by default</li>
                      <li>• Focus on basic long calls/puts</li>
                      <li>• Avoid early exercise initially</li>
                      <li>• Learn dividend calendar impact</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
                    <div className="font-semibold text-yellow-700 text-xs mb-1">
                      ⚠️ Common Mistakes:
                    </div>
                    <ul className="text-yellow-600 text-xs space-y-1">
                      <li>• Exercising OTM options</li>
                      <li>• Missing dividend deadlines</li>
                      <li>• Ignoring time value</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-cyan-200">
                <h5 className="font-bold text-cyan-700 mb-4 text-center">
                  📊 Intermediate Traders
                </h5>

                <div className="space-y-3">
                  <div className="bg-cyan-50 p-3 rounded">
                    <div className="font-semibold text-cyan-700 text-sm mb-2">
                      Skill Development:
                    </div>
                    <ul className="text-cyan-600 text-xs space-y-1">
                      <li>• Master early exercise analysis</li>
                      <li>• Compare American vs European</li>
                      <li>• Use spreads and combinations</li>
                      <li>• Monitor assignment risk</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-3 rounded border border-green-200">
                    <div className="font-semibold text-green-700 text-xs mb-1">
                      ✅ Optimal Strategies:
                    </div>
                    <ul className="text-green-600 text-xs space-y-1">
                      <li>• Covered calls on dividends</li>
                      <li>• Protective puts for hedging</li>
                      <li>• Simple spread strategies</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-cyan-200">
                <h5 className="font-bold text-cyan-700 mb-4 text-center">
                  🏆 Advanced Traders
                </h5>

                <div className="space-y-3">
                  <div className="bg-cyan-50 p-3 rounded">
                    <div className="font-semibold text-cyan-700 text-sm mb-2">
                      Advanced Applications:
                    </div>
                    <ul className="text-cyan-600 text-xs space-y-1">
                      <li>• Optimal exercise algorithms</li>
                      <li>• Tax-loss harvesting</li>
                      <li>• Cross-asset arbitrage</li>
                      <li>• Portfolio optimization</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-3 rounded border border-purple-200">
                    <div className="font-semibold text-purple-700 text-xs mb-1">
                      🚀 Professional Tools:
                    </div>
                    <ul className="text-purple-600 text-xs space-y-1">
                      <li>• Real-time pricing models</li>
                      <li>• Dynamic hedging systems</li>
                      <li>• Multi-leg optimization</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Final Decision Matrix */}
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-200 p-6 rounded-xl">
            <h4 className="font-bold text-emerald-800 text-xl mb-6 text-center">
              The American Option Decision Matrix
            </h4>

            <div className="bg-white p-6 rounded-lg border border-emerald-200">
              <div className="text-center mb-6">
                <h5 className="font-semibold text-emerald-700 text-lg mb-2">
                  Quick Decision Framework
                </h5>
                <p className="text-emerald-600 text-sm">
                  Use this flowchart to determine if American options are right
                  for your situation
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-400">
                  <div className="font-bold text-emerald-700 mb-2">
                    Step 1: Asset Class Check
                  </div>
                  <p className="text-emerald-600 text-sm">
                    Individual stock options? →{" "}
                    <span className="font-semibold">
                      American (97% of market)
                    </span>
                    <br />
                    Index options available? →{" "}
                    <span className="font-semibold">
                      Consider European for cost savings
                    </span>
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <div className="font-bold text-blue-700 mb-2">
                    Step 2: Dividend Analysis
                  </div>
                  <p className="text-blue-600 text-sm">
                    High dividend yield {"(>2%)?"} →{" "}
                    <span className="font-semibold">
                      American strongly preferred
                    </span>
                    <br />
                    Low/no dividends? →{" "}
                    <span className="font-semibold">
                      American less critical
                    </span>
                  </p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                  <div className="font-bold text-purple-700 mb-2">
                    Step 3: Strategy Requirements
                  </div>
                  <p className="text-purple-600 text-sm">
                    Need exercise flexibility? →{" "}
                    <span className="font-semibold">American essential</span>
                    <br />
                    Hold to expiration strategy? →{" "}
                    <span className="font-semibold">European may suffice</span>
                  </p>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                  <div className="font-bold text-orange-700 mb-2">
                    Step 4: Cost Sensitivity
                  </div>
                  <p className="text-orange-600 text-sm">
                    Premium budget tight? →{" "}
                    <span className="font-semibold">
                      Consider European alternatives
                    </span>
                    <br />
                    Flexibility worth premium? →{" "}
                    <span className="font-semibold">American justified</span>
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-lg">
                <div className="text-center">
                  <div className="font-bold text-emerald-700 mb-2">
                    Bottom Line Recommendation
                  </div>
                  <p className="text-emerald-600 text-sm">
                    For most equity traders, American options are the practical
                    choice due to market availability and dividend
                    considerations. The flexibility premium (1-8%) is usually
                    justified by the strategic value, especially for stocks with
                    significant dividend yields or event-driven volatility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  };

  const tabs = [
    { id: "overview", label: "Overview", icon: "📖" },
    { id: "payoff", label: "Payoff", icon: "💰" },
    { id: "pricing", label: "Pricing", icon: "🏷️" },
    { id: "markets", label: "Markets", icon: "🏛️" },
    { id: "advantages", label: "Pros & Cons", icon: "⚖️" },
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
              <span className="text-gray-700">American Options</span>
            </nav>

            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  American Options
                </h1>
                <p className="text-xl text-gray-600">
                  Early exercise flexibility and advanced valuation techniques
                </p>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">
                  Intermediate
                </span>
                <span>35 min read</span>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50 p-4 mb-8">
            <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
              <span>Lesson Progress</span>
              <span>3 of 7 lessons</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full"
                style={{ width: "43%" }}
              ></div>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-xl mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2 pr-4">
                  Experience American Option Pricing
                </h3>
                <p className="text-blue-100">
                  Use our OptiPrice calculator to explore binomial trees and
                  Monte Carlo methods.
                </p>
                <p className="text-blue-100 pr-4">
                  See how early exercise affects option values in real-time.
                </p>
              </div>
              <button
                onClick={() => navigate("/toolbox/optiprice")}
                className="!bg-white !text-blue-600 px-6 py-3 !rounded-lg !font-semibold !hover:bg-blue-50 !transition-colors flex-shrink-0"
              >
                Open Calculator →
              </button>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="mb-8">
            {/* Desktop Tabs */}
            <div className="hidden lg:flex bg-white rounded-lg border border-gray-200 p-2 mb-4 gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center !px-1 !py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? "!bg-blue-600 !text-white !shadow-sm"
                      : "!bg-gray-100 !border-gray-200 !text-gray-600 !hover:text-blue-600 !hover:bg-gray-50"
                  }`}
                >
                  <span className="mr-2 text-lg">{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile Dropdown */}
            <div className="lg:hidden mb-6">
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
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
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
              onClick={() => navigate("/learning/options/european")}
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
              <span>Back: European Options</span>
            </button>

            <button
              onClick={() => navigate("/learning/options/asian")}
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <span>Next: Asian Options</span>
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

export default AmericanOptions;
