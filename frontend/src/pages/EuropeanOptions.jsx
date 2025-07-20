// frontend/src/pages/EuropeanOptions.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import { useAuth } from "../contexts/AuthContext";
import { InlineMath, BlockMath } from "react-katex";
import { LineChart, Line, XAxis, YAxis, ReferenceLine } from "recharts";
import "katex/dist/katex.min.css";

const EuropeanOptions = () => {
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
              <strong>European options</strong> can only be exercised at
              expiration, making them simpler to analyze but more restrictive
              than American options. This constraint leads to elegant
              mathematical solutions and forms the foundation of modern
              derivatives pricing theory.
            </p>

            <div className="bg-amber-100 border-2 border-amber-300 text-amber-900 p-6 rounded-xl mb-6">
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
                  <h4 className="font-bold mb-2">Historical Context</h4>
                  <p>
                    European options were the first to be mathematically modeled
                    by Fischer Black, Myron Scholes, and Robert Merton in 1973,
                    revolutionizing modern finance and earning them the Nobel
                    Prize in Economics in 1997.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Timeline */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 p-6 rounded-xl">
            <h4 className="font-bold text-blue-800 text-xl mb-6 text-center">
              Exercise Window Timeline
            </h4>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300 rounded"></div>

              {/* Timeline points */}
              <div className="relative flex justify-between items-center">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-gray-400 rounded-full mb-2 relative z-10"></div>
                  <div className="text-center">
                    <div className="text-sm font-semibold text-gray-600">
                      Option Purchase
                    </div>
                    <div className="text-xs text-gray-500">Today</div>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-gray-400 rounded-full mb-2 relative z-10"></div>
                  <div className="text-center">
                    <div className="text-sm font-semibold text-gray-600">
                      Time Passes
                    </div>
                    <div className="text-xs text-gray-500">
                      No Exercise Allowed
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-gray-400 rounded-full mb-2 relative z-10"></div>
                  <div className="text-center">
                    <div className="text-sm font-semibold text-gray-600">
                      More Time
                    </div>
                    <div className="text-xs text-gray-500">
                      Still No Exercise
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
                    <div className="text-sm font-semibold text-green-600">
                      Expiration
                    </div>
                    <div className="text-xs text-green-500">
                      Exercise Decision
                    </div>
                  </div>
                </div>
              </div>

              {/* Exercise restriction indicator */}
              <div className="mt-6 text-center">
                <div className="inline-flex items-center bg-red-100 text-red-700 px-4 py-2 rounded-lg">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Exercise ONLY allowed at expiration
                </div>
              </div>
            </div>
          </div>

          {/* Key Characteristics */}
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
                How It Works
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-green-700">
                      Single Exercise Date
                    </div>
                    <p className="text-green-600 text-sm">
                      Can only be exercised on the expiration date, never before
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-green-700">
                      Automatic Exercise
                    </div>
                    <p className="text-green-600 text-sm">
                      ITM options are typically exercised automatically at
                      expiration
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-green-700">
                      Fixed Timing
                    </div>
                    <p className="text-green-600 text-sm">
                      Exercise decision is made once, at expiration based on
                      final price
                    </p>
                  </div>
                </div>
              </div>
            </div>

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
                      d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                Key Characteristics
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-blue-700">
                      Analytical Pricing
                    </div>
                    <p className="text-blue-600 text-sm">
                      Exact mathematical formulas available (Black-Scholes)
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-blue-700">
                      Simpler Analysis
                    </div>
                    <p className="text-blue-600 text-sm">
                      No early exercise decisions to model or predict
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-blue-700">
                      Predictable Greeks
                    </div>
                    <p className="text-blue-600 text-sm">
                      Clean sensitivity measures without exercise boundaries
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Comparison with American Options */}
          <div className="bg-gradient-to-r from-gray-50 to-slate-50 border-2 border-gray-200 p-6 rounded-xl">
            <h4 className="font-bold text-gray-800 text-xl mb-6 text-center">
              European vs American Options
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-3 text-left font-semibold">
                      Feature
                    </th>
                    <th className="border border-gray-300 p-3 text-center font-semibold text-blue-600">
                      European
                    </th>
                    <th className="border border-gray-300 p-3 text-center font-semibold text-green-600">
                      American
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium">
                      Exercise Timing
                    </td>
                    <td className="border border-gray-300 p-3 text-center">
                      Expiration only
                    </td>
                    <td className="border border-gray-300 p-3 text-center">
                      Any time before expiration
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium">
                      Premium Cost
                    </td>
                    <td className="border border-gray-300 p-3 text-center text-blue-600">
                      Lower
                    </td>
                    <td className="border border-gray-300 p-3 text-center text-green-600">
                      Higher
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium">
                      Pricing Complexity
                    </td>
                    <td className="border border-gray-300 p-3 text-center text-blue-600">
                      Simple (analytical)
                    </td>
                    <td className="border border-gray-300 p-3 text-center">
                      Complex (numerical)
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium">
                      Flexibility
                    </td>
                    <td className="border border-gray-300 p-3 text-center">
                      Limited
                    </td>
                    <td className="border border-gray-300 p-3 text-center text-green-600">
                      High
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium">
                      Common Markets
                    </td>
                    <td className="border border-gray-300 p-3 text-center">
                      Index options, FX
                    </td>
                    <td className="border border-gray-300 p-3 text-center">
                      Equity options
                    </td>
                  </tr>
                </tbody>
              </table>
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
              European option payoffs are determined solely at expiration,
              creating clean and predictable profit/loss profiles. Understanding
              these payoff structures is essential for strategy development and
              risk management.
            </p>
          </div>

          {/* Payoff Diagrams */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 p-6 rounded-xl">
              <h4 className="font-bold text-green-800 text-xl mb-4 text-center">
                European Call Option
              </h4>

              {/* Recharts payoff diagram */}
              <div className="bg-white p-4 rounded-lg border border-green-200 mb-4 h-64">
                <div className="text-center mb-2">
                  <span className="text-sm text-gray-600">
                    Payoff at Expiration
                  </span>
                </div>
                <LineChart
                  width={280}
                  height={200}
                  data={[
                    { price: 80, payoff: 0 },
                    { price: 90, payoff: 0 },
                    { price: 100, payoff: 0 },
                    { price: 100, payoff: 0 },
                    { price: 110, payoff: 10 },
                    { price: 120, payoff: 20 },
                    { price: 130, payoff: 30 },
                    { price: 140, payoff: 40 },
                    { price: 150, payoff: 50 },
                  ]}
                >
                  <XAxis
                    dataKey="price"
                    tick={{ fontSize: 10 }}
                    label={{
                      value: "Stock Price ($)",
                      position: "insideBottom",
                      offset: -5,
                      fontSize: 10,
                    }}
                  />
                  <YAxis
                    tick={{ fontSize: 10 }}
                    label={{
                      value: "Payoff ($)",
                      angle: -90,
                      position: "insideLeft",
                      fontSize: 10,
                    }}
                  />
                  <Line
                    type="linear"
                    dataKey="payoff"
                    stroke="#16a34a"
                    strokeWidth={3}
                    dot={false}
                  />
                  <ReferenceLine
                    x={100}
                    stroke="#ef4444"
                    strokeDasharray="5 5"
                    label={{ value: "K=100", position: "top", fontSize: 10 }}
                  />
                </LineChart>
              </div>

              <div className="space-y-3">
                <div className="bg-white p-3 rounded border border-green-200">
                  <div className="font-semibold text-green-700 text-sm">
                    If <InlineMath math="S_T > K" /> (In-the-Money)
                  </div>
                  <div className="text-green-600 text-sm">
                    Payoff = <InlineMath math="S_T - K" />
                  </div>
                  <div className="text-gray-600 text-xs">
                    Exercise and buy stock below market price
                  </div>
                </div>
                <div className="bg-white p-3 rounded border border-green-200">
                  <div className="font-semibold text-green-700 text-sm">
                    If <InlineMath math="S_T \leq K" /> (Out-of-the-Money)
                  </div>
                  <div className="text-green-600 text-sm">
                    Payoff = <InlineMath math="0" />
                  </div>
                  <div className="text-gray-600 text-xs">
                    Option expires worthless
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-pink-50 border-2 border-red-200 p-6 rounded-xl">
              <h4 className="font-bold text-red-800 text-xl mb-4 text-center">
                European Put Option
              </h4>

              {/* Recharts payoff diagram */}
              <div className="bg-white p-4 rounded-lg border border-red-200 mb-4 h-64">
                <div className="text-center mb-2">
                  <span className="text-sm text-gray-600">
                    Payoff at Expiration
                  </span>
                </div>
                <LineChart
                  width={280}
                  height={200}
                  data={[
                    { price: 80, payoff: 20 },
                    { price: 90, payoff: 10 },
                    { price: 100, payoff: 0 },
                    { price: 100, payoff: 0 },
                    { price: 110, payoff: 0 },
                    { price: 120, payoff: 0 },
                    { price: 130, payoff: 0 },
                    { price: 140, payoff: 0 },
                    { price: 150, payoff: 0 },
                  ]}
                >
                  <XAxis
                    dataKey="price"
                    tick={{ fontSize: 10 }}
                    label={{
                      value: "Stock Price ($)",
                      position: "insideBottom",
                      offset: -5,
                      fontSize: 10,
                    }}
                  />
                  <YAxis
                    tick={{ fontSize: 10 }}
                    label={{
                      value: "Payoff ($)",
                      angle: -90,
                      position: "insideLeft",
                      fontSize: 10,
                    }}
                  />
                  <Line
                    type="linear"
                    dataKey="payoff"
                    stroke="#dc2626"
                    strokeWidth={3}
                    dot={false}
                  />
                  <ReferenceLine
                    x={100}
                    stroke="#ef4444"
                    strokeDasharray="5 5"
                    label={{ value: "K=100", position: "top", fontSize: 10 }}
                  />
                </LineChart>
              </div>

              <div className="space-y-3">
                <div className="bg-white p-3 rounded border border-red-200">
                  <div className="font-semibold text-red-700 text-sm">
                    If <InlineMath math="S_T < K" /> (In-the-Money)
                  </div>
                  <div className="text-red-600 text-sm">
                    Payoff = <InlineMath math="K - S_T" />
                  </div>
                  <div className="text-gray-600 text-xs">
                    Exercise and sell stock above market price
                  </div>
                </div>
                <div className="bg-white p-3 rounded border border-red-200">
                  <div className="font-semibold text-red-700 text-sm">
                    If <InlineMath math="S_T \geq K" /> (Out-of-the-Money)
                  </div>
                  <div className="text-red-600 text-sm">
                    Payoff = <InlineMath math="0" />
                  </div>
                  <div className="text-gray-600 text-xs">
                    Option expires worthless
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mathematical Formulas */}
          <div className="bg-gradient-to-r from-slate-50 to-gray-50 border-2 border-gray-200 p-6 rounded-xl">
            <h4 className="font-bold text-gray-800 text-xl mb-6 text-center">
              Payoff Functions
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
                <h5 className="font-semibold text-green-700 mb-4">
                  Call Option Payoff
                </h5>
                <BlockMath math="\text{Payoff}_\text{call} = \max(S_T - K, 0)" />
                <p className="text-gray-600 text-sm mt-2">
                  Where <InlineMath math="S_T" /> is stock price at expiration
                  and <InlineMath math="K" /> is strike price
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
                <h5 className="font-semibold text-red-700 mb-4">
                  Put Option Payoff
                </h5>
                <BlockMath math="\text{Payoff}_\text{put} = \max(K - S_T, 0)" />
                <p className="text-gray-600 text-sm mt-2">
                  Where <InlineMath math="K" /> is strike price and{" "}
                  <InlineMath math="S_T" /> is stock price at expiration
                </p>
              </div>
            </div>
          </div>

          {/* Worked Examples */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 p-6 rounded-xl">
            <h4 className="font-bold text-blue-800 text-xl mb-6 text-center">
              Worked Examples
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Call Example */}
              <div className="bg-white p-5 rounded-lg border border-blue-200">
                <h5 className="font-bold text-blue-700 mb-4">
                  📈 Call Option Example
                </h5>
                <div className="space-y-3">
                  <div className="bg-blue-50 p-3 rounded">
                    <div className="text-sm font-semibold text-blue-800">
                      Initial Setup
                    </div>
                    <div className="text-xs text-blue-600">
                      • Buy AAPL <InlineMath math="K = \$150" /> Call (European)
                      <br />
                      • Premium paid: <InlineMath math="C_0 = \$5.00" />
                      <br />
                      • Current stock price: <InlineMath math="S_0 = \$145" />
                      <br />
                      • Time to expiration: <InlineMath math="T = 30" /> days
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-gray-700">
                      Scenarios at Expiration:
                    </div>

                    <div className="bg-gray-50 p-2 rounded text-xs">
                      <div className="font-semibold text-green-600">
                        If <InlineMath math="S_T = \$160" />
                      </div>
                      <div>
                        Payoff = <InlineMath math="\max(160 - 150, 0) = \$10" />
                      </div>
                      <div>
                        Profit = <InlineMath math="\$10 - \$5 = " />
                        <span className="text-green-600 font-semibold">
                          +$5
                        </span>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-2 rounded text-xs">
                      <div className="font-semibold text-blue-600">
                        If <InlineMath math="S_T = \$155" />
                      </div>
                      <div>
                        Payoff = <InlineMath math="\max(155 - 150, 0) = \$5" />
                      </div>
                      <div>
                        Profit = <InlineMath math="\$5 - \$5 = " />
                        <span className="text-gray-600 font-semibold">
                          $0 (breakeven)
                        </span>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-2 rounded text-xs">
                      <div className="font-semibold text-red-600">
                        If <InlineMath math="S_T = \$145" />
                      </div>
                      <div>
                        Payoff = <InlineMath math="\max(145 - 150, 0) = \$0" />
                      </div>
                      <div>
                        Profit = <InlineMath math="\$0 - \$5 = " />
                        <span className="text-red-600 font-semibold">-$5</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Put Example */}
              <div className="bg-white p-5 rounded-lg border border-blue-200">
                <h5 className="font-bold text-red-700 mb-4">
                  📉 Put Option Example
                </h5>
                <div className="space-y-3">
                  <div className="bg-red-50 p-3 rounded">
                    <div className="text-sm font-semibold text-red-800">
                      Initial Setup
                    </div>
                    <div className="text-xs text-red-600">
                      • Buy SPY <InlineMath math="K = \$400" /> Put (European)
                      <br />
                      • Premium paid: <InlineMath math="P_0 = \$8.00" />
                      <br />
                      • Current index price: <InlineMath math="S_0 = \$410" />
                      <br />
                      • Time to expiration: <InlineMath math="T = 21" /> days
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-gray-700">
                      Scenarios at Expiration:
                    </div>

                    <div className="bg-gray-50 p-2 rounded text-xs">
                      <div className="font-semibold text-green-600">
                        If <InlineMath math="S_T = \$385" />
                      </div>
                      <div>
                        Payoff = <InlineMath math="\max(400 - 385, 0) = \$15" />
                      </div>
                      <div>
                        Profit = <InlineMath math="\$15 - \$8 = " />
                        <span className="text-green-600 font-semibold">
                          +$7
                        </span>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-2 rounded text-xs">
                      <div className="font-semibold text-blue-600">
                        If <InlineMath math="S_T = \$392" />
                      </div>
                      <div>
                        Payoff = <InlineMath math="\max(400 - 392, 0) = \$8" />
                      </div>
                      <div>
                        Profit = <InlineMath math="\$8 - \$8 = " />
                        <span className="text-gray-600 font-semibold">
                          $0 (breakeven)
                        </span>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-2 rounded text-xs">
                      <div className="font-semibold text-red-600">
                        If <InlineMath math="S_T = \$405" />
                      </div>
                      <div>
                        Payoff = <InlineMath math="\max(400 - 405, 0) = \$0" />
                      </div>
                      <div>
                        Profit = <InlineMath math="\$0 - \$8 = " />
                        <span className="text-red-600 font-semibold">-$8</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Profit/Loss Charts */}
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border-2 border-cyan-200 p-6 rounded-xl">
            <h4 className="font-bold text-cyan-800 text-xl mb-6 text-center">
              Profit/Loss Including Premium
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg border border-cyan-200">
                <h5 className="font-semibold text-cyan-700 mb-3 text-center">
                  Long Call P&L
                </h5>
                <div className="w-full flex justify-center">
                  <LineChart
                    width={300}
                    height={200}
                    data={[
                      { price: 140, pnl: -5 },
                      { price: 145, pnl: -5 },
                      { price: 150, pnl: -5 },
                      { price: 150, pnl: -5 },
                      { price: 155, pnl: 0 },
                      { price: 160, pnl: 5 },
                      { price: 165, pnl: 10 },
                      { price: 170, pnl: 15 },
                    ]}
                  >
                    <XAxis
                      dataKey="price"
                      tick={{ fontSize: 10 }}
                      label={{
                        value: "Stock Price ($)",
                        position: "insideBottom",
                        offset: -5,
                        fontSize: 10,
                      }}
                    />
                    <YAxis
                      tick={{ fontSize: 10 }}
                      label={{
                        value: "P&L ($)",
                        angle: -90,
                        position: "insideLeft",
                        fontSize: 10,
                      }}
                    />
                    <Line
                      type="linear"
                      dataKey="pnl"
                      stroke="#0891b2"
                      strokeWidth={3}
                      dot={false}
                    />
                    <ReferenceLine
                      y={0}
                      stroke="#6b7280"
                      strokeDasharray="3 3"
                    />
                    <ReferenceLine
                      x={150}
                      stroke="#ef4444"
                      strokeDasharray="5 5"
                    />
                    <ReferenceLine
                      x={155}
                      stroke="#16a34a"
                      strokeDasharray="2 2"
                    />
                  </LineChart>
                </div>
                <p className="text-xs text-center text-gray-600 mt-2">
                  Breakeven at{" "}
                  <InlineMath math="S_T = K + \text{Premium} = \$155" />
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg border border-cyan-200">
                <h5 className="font-semibold text-cyan-700 mb-3 text-center">
                  Long Put P&L
                </h5>
                <div className="w-full flex justify-center">
                  <LineChart
                    width={300}
                    height={200}
                    data={[
                      { price: 370, pnl: 22 },
                      { price: 380, pnl: 12 },
                      { price: 390, pnl: 2 },
                      { price: 392, pnl: 0 },
                      { price: 400, pnl: -8 },
                      { price: 400, pnl: -8 },
                      { price: 410, pnl: -8 },
                      { price: 420, pnl: -8 },
                    ]}
                  >
                    <XAxis
                      dataKey="price"
                      tick={{ fontSize: 10 }}
                      label={{
                        value: "Stock Price ($)",
                        position: "insideBottom",
                        offset: -5,
                        fontSize: 10,
                      }}
                    />
                    <YAxis
                      tick={{ fontSize: 10 }}
                      label={{
                        value: "P&L ($)",
                        angle: -90,
                        position: "insideLeft",
                        fontSize: 10,
                      }}
                    />
                    <Line
                      type="linear"
                      dataKey="pnl"
                      stroke="#dc2626"
                      strokeWidth={3}
                      dot={false}
                    />
                    <ReferenceLine
                      y={0}
                      stroke="#6b7280"
                      strokeDasharray="3 3"
                    />
                    <ReferenceLine
                      x={400}
                      stroke="#ef4444"
                      strokeDasharray="5 5"
                    />
                    <ReferenceLine
                      x={392}
                      stroke="#16a34a"
                      strokeDasharray="2 2"
                    />
                  </LineChart>
                </div>
                <p className="text-xs text-center text-gray-600 mt-2">
                  Breakeven at{" "}
                  <InlineMath math="S_T = K - \text{Premium} = \$392" />
                </p>
              </div>
            </div>
          </div>

          {/* Key Takeaways */}
          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-200 p-6 rounded-xl">
            <h4 className="font-bold text-amber-800 text-xl mb-4">
              Key Payoff Insights
            </h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-amber-200 text-center">
                <div className="text-2xl mb-2">🎯</div>
                <h5 className="font-semibold text-amber-700 mb-2">
                  Binary Decision
                </h5>
                <p className="text-gray-600 text-sm">
                  Exercise decision is made once, based solely on final stock
                  price vs strike
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-amber-200 text-center">
                <div className="text-2xl mb-2">⏰</div>
                <h5 className="font-semibold text-amber-700 mb-2">
                  Time Decay
                </h5>
                <p className="text-gray-600 text-sm">
                  Premium erodes predictably toward intrinsic value as
                  expiration approaches
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-amber-200 text-center">
                <div className="text-2xl mb-2">📊</div>
                <h5 className="font-semibold text-amber-700 mb-2">Clean P&L</h5>
                <p className="text-gray-600 text-sm">
                  No early exercise complications make payoff analysis
                  straightforward
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
              The exercise restriction of European options significantly impacts
              their pricing, making them cheaper than American options while
              creating predictable time decay patterns. Understanding these
              pricing dynamics is crucial for effective options trading and risk
              management.
            </p>
          </div>

          {/* Premium Comparison */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 p-6 rounded-xl">
            <h4 className="font-bold text-blue-800 text-xl mb-6 text-center">
              How Exercise Flexibility Affects Premium
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg border border-blue-200 flex flex-col">
                <h5 className="font-bold text-blue-700 mb-4 text-center">
                  🇪🇺 European Option Premium
                </h5>
                <div className="text-center mb-4">
                  <BlockMath math="C_{European} = S_0 N(d_1) - K e^{-rT} N(d_2)" />
                </div>
                <div className="flex-1 flex flex-col justify-end">
                  <div className="bg-blue-50 p-3 rounded">
                    <div className="font-semibold text-blue-700 text-sm">
                      Lower Premium Because:
                    </div>
                    <ul className="text-blue-600 text-xs mt-2 space-y-1">
                      <li>• No early exercise optionality</li>
                      <li>• Cannot capture dividends early</li>
                      <li>• Limited to expiration-only exercise</li>
                      <li>• Simpler valuation model</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-blue-200 flex flex-col">
                <h5 className="font-bold text-green-700 mb-4 text-center">
                  🇺🇸 American Option Premium
                </h5>
                <div className="text-center mb-4">
                  <BlockMath math="C_{American} \geq C_{European}" />
                  <p className="text-xs text-gray-600 mt-2">
                    Always worth at least as much as European
                  </p>
                </div>
                <div className="flex-1 flex flex-col justify-end">
                  <div className="bg-green-50 p-3 rounded">
                    <div className="font-semibold text-green-700 text-sm">
                      Higher Premium Because:
                    </div>
                    <ul className="text-green-600 text-xs mt-2 space-y-1">
                      <li>• Early exercise flexibility</li>
                      <li>• Dividend capture opportunities</li>
                      <li>• Can respond to market changes</li>
                      <li>• Additional optionality has value</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-amber-50 p-4 rounded-lg border border-amber-200">
              <div className="text-center">
                <h6 className="font-semibold text-amber-700 mb-2">
                  Early Exercise Premium
                </h6>
                <BlockMath math="\text{Early Exercise Premium} = C_{American} - C_{European}" />
                <p className="text-amber-600 text-sm">
                  The extra amount paid for early exercise flexibility
                </p>
              </div>
            </div>
          </div>

          {/* Time Value Considerations */}
          <div className="bg-gradient-to-r from-purple-50 to-violet-50 border-2 border-purple-200 p-6 rounded-xl">
            <h4 className="font-bold text-purple-800 text-xl mb-6">
              Time Value Behavior
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg border border-purple-200">
                <h5 className="font-bold text-purple-700 mb-4">
                  📉 Time Decay (Theta)
                </h5>
                <div className="space-y-3">
                  <div className="bg-purple-50 p-3 rounded text-center">
                    <BlockMath math="\Theta = \frac{\partial C}{\partial t}" />
                    <p className="text-purple-600 text-xs mt-1">
                      Rate of time value erosion
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="bg-gray-50 p-2 rounded text-xs">
                      <div className="font-semibold text-purple-700">
                        Predictable Decay Pattern
                      </div>
                      <div className="text-purple-600">
                        European options decay smoothly toward intrinsic value
                      </div>
                    </div>
                    <div className="bg-gray-50 p-2 rounded text-xs">
                      <div className="font-semibold text-purple-700">
                        Accelerating Near Expiration
                      </div>
                      <div className="text-purple-600">
                        Time decay accelerates as expiration approaches
                      </div>
                    </div>
                    <div className="bg-gray-50 p-2 rounded text-xs">
                      <div className="font-semibold text-purple-700">
                        No Early Exercise Disruption
                      </div>
                      <div className="text-purple-600">
                        Clean decay without exercise boundary effects
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-purple-200">
                <h5 className="font-bold text-purple-700 mb-4">
                  📊 Time Value Chart
                </h5>
                <div className="bg-gray-50 p-4 rounded">
                  <LineChart
                    width={280}
                    height={160}
                    data={[
                      { days: 60, timeValue: 8.5 },
                      { days: 50, timeValue: 7.08 },
                      { days: 40, timeValue: 5.67 },
                      { days: 30, timeValue: 4.25 },
                      { days: 20, timeValue: 2.83 },
                      { days: 10, timeValue: 1.42 },
                      { days: 0, timeValue: 0 },
                    ]}
                  >
                    <XAxis
                      dataKey="days"
                      tick={{ fontSize: 10 }}
                      label={{
                        value: "Days to Expiration",
                        position: "insideBottom",
                        offset: -5,
                        fontSize: 9,
                      }}
                    />
                    <YAxis
                      tick={{ fontSize: 10 }}
                      label={{
                        value: "Time Value ($)",
                        angle: -90,
                        position: "insideLeft",
                        fontSize: 9,
                      }}
                    />
                    <Line
                      type="linear"
                      dataKey="timeValue"
                      stroke="#7c3aed"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </div>
                <p className="text-xs text-center text-gray-600 mt-2">
                  Typical time value decay for ATM European option
                </p>
              </div>
            </div>
          </div>

          {/* Early Exercise Decision Factors */}
          <div className="bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-200 p-6 rounded-xl">
            <h4 className="font-bold text-orange-800 text-xl mb-6">
              Why European Options Are Never Exercised Early
            </h4>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-orange-200">
                <h5 className="font-semibold text-orange-700 mb-3 text-center">
                  🚫 No Choice Available
                </h5>
                <div className="text-center mb-3">
                  <div className="text-2xl">⏰</div>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="bg-orange-50 p-2 rounded">
                    <div className="font-semibold text-orange-700">
                      Physical Restriction
                    </div>
                    <div className="text-orange-600">
                      Contract terms prevent any exercise before expiration
                    </div>
                  </div>
                  <div className="bg-orange-50 p-2 rounded">
                    <div className="font-semibold text-orange-700">
                      Market Enforcement
                    </div>
                    <div className="text-orange-600">
                      Exchanges and clearinghouses enforce this rule
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border border-orange-200">
                <h5 className="font-semibold text-orange-700 mb-3 text-center">
                  💰 Economic Logic
                </h5>
                <div className="text-center mb-3">
                  <div className="text-2xl">💡</div>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="bg-orange-50 p-2 rounded">
                    <div className="font-semibold text-orange-700">
                      Time Value Preservation
                    </div>
                    <div className="text-orange-600">
                      Selling option captures remaining time value
                    </div>
                  </div>
                  <div className="bg-orange-50 p-2 rounded">
                    <div className="font-semibold text-orange-700">
                      Interest Rate Benefit
                    </div>
                    <div className="text-orange-600">
                      Delayed payment of strike price has value
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border border-orange-200">
                <h5 className="font-semibold text-orange-700 mb-3 text-center">
                  📈 Pricing Clarity
                </h5>
                <div className="text-center mb-3">
                  <div className="text-2xl">🎯</div>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="bg-orange-50 p-2 rounded">
                    <div className="font-semibold text-orange-700">
                      Predictable Value
                    </div>
                    <div className="text-orange-600">
                      No early exercise uncertainty in pricing models
                    </div>
                  </div>
                  <div className="bg-orange-50 p-2 rounded">
                    <div className="font-semibold text-orange-700">
                      Clean Greeks
                    </div>
                    <div className="text-orange-600">
                      Risk sensitivities unaffected by exercise boundaries
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Numerical Example */}
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border-2 border-cyan-200 p-6 rounded-xl">
            <h4 className="font-bold text-cyan-800 text-xl mb-6 text-center">
              Pricing Example: European vs American
            </h4>

            <div className="bg-white p-6 rounded-lg border border-cyan-200">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-cyan-700 mb-4">
                    Market Conditions
                  </h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>
                        Stock Price (<InlineMath math="S_0" />
                        ):
                      </span>
                      <span className="font-mono">$100.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>
                        Strike Price (<InlineMath math="K" />
                        ):
                      </span>
                      <span className="font-mono">$100.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>
                        Time to Expiration (<InlineMath math="T" />
                        ):
                      </span>
                      <span className="font-mono">90 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span>
                        Risk-free Rate (<InlineMath math="r" />
                        ):
                      </span>
                      <span className="font-mono">5.00%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>
                        Volatility (<InlineMath math="\sigma" />
                        ):
                      </span>
                      <span className="font-mono">25.00%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>
                        Dividend Yield (<InlineMath math="q" />
                        ):
                      </span>
                      <span className="font-mono">2.00%</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold text-cyan-700 mb-4">
                    Option Prices
                  </h5>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-3 rounded">
                      <div className="text-center">
                        <div className="font-semibold text-blue-700">
                          European Call
                        </div>
                        <div className="text-2xl font-bold text-blue-600">
                          $6.25
                        </div>
                        <div className="text-xs text-blue-500">
                          Black-Scholes Price
                        </div>
                      </div>
                    </div>
                    <div className="bg-green-50 p-3 rounded">
                      <div className="text-center">
                        <div className="font-semibold text-green-700">
                          American Call
                        </div>
                        <div className="text-2xl font-bold text-green-600">
                          $6.42
                        </div>
                        <div className="text-xs text-green-500">
                          Binomial Tree Price
                        </div>
                      </div>
                    </div>
                    <div className="bg-amber-50 p-3 rounded border-2 border-amber-300">
                      <div className="text-center">
                        <div className="font-semibold text-amber-700">
                          Early Exercise Premium
                        </div>
                        <div className="text-xl font-bold text-amber-600">
                          $0.17
                        </div>
                        <div className="text-xs text-amber-500">
                          2.7% of European price
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Insights */}
          <div className="bg-gradient-to-r from-emerald-50 to-green-50 border-2 border-emerald-200 p-6 rounded-xl">
            <h4 className="font-bold text-emerald-800 text-xl mb-6">
              Key Pricing Insights
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-emerald-200">
                  <h5 className="font-semibold text-emerald-700 mb-2">
                    💡 Cost Efficiency
                  </h5>
                  <p className="text-emerald-600 text-sm">
                    European options typically cost 1-5% less than equivalent
                    American options, making them attractive for strategies that
                    don't require early exercise.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-emerald-200">
                  <h5 className="font-semibold text-emerald-700 mb-2">
                    ⚡ Computational Speed
                  </h5>
                  <p className="text-emerald-600 text-sm">
                    Analytical pricing formulas allow for instantaneous
                    valuation and risk calculation, crucial for high-frequency
                    trading and real-time risk management.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-emerald-200">
                  <h5 className="font-semibold text-emerald-700 mb-2">
                    📊 Model Accuracy
                  </h5>
                  <p className="text-emerald-600 text-sm">
                    Black-Scholes assumptions align perfectly with European
                    exercise restrictions, leading to more accurate pricing in
                    liquid markets.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-emerald-200">
                  <h5 className="font-semibold text-emerald-700 mb-2">
                    🎯 Strategy Clarity
                  </h5>
                  <p className="text-emerald-600 text-sm">
                    Predictable time decay and exercise patterns simplify
                    strategy selection and performance attribution for portfolio
                    managers.
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
          European options dominate specific market segments where their
          exercise restrictions align with trading needs, regulatory
          requirements, and settlement mechanisms. Understanding where these
          options are used helps traders identify appropriate strategies and
          pricing models.
        </p>
      </div>

      {/* Market Dominance */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 p-6 rounded-xl">
        <h4 className="font-bold text-blue-800 text-xl mb-6 text-center">
          European Options Market Dominance
        </h4>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-lg border border-blue-200">
            <h5 className="font-bold text-blue-700 mb-4 text-center">
              📊 Index Options
            </h5>
            <div className="space-y-3">
              <div className="bg-blue-50 p-3 rounded text-center">
                <div className="text-lg font-bold text-blue-600">Nearly Universal</div>
                <div className="text-xs text-blue-500">
                  Cash Settlement
                </div>
              </div>
              <div className="space-y-2 text-xs">
                <div className="font-semibold text-blue-700">
                  Major Contracts:
                </div>
                <ul className="text-blue-600 space-y-1">
                  <li>• SPX (S&P 500)</li>
                  <li>• NDX (NASDAQ-100)</li>
                  <li>• RUT (Russell 2000)</li>
                  <li>• VIX (Volatility Index)</li>
                  <li>• DJX (Dow Jones)</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-2 rounded">
                <div className="font-semibold text-gray-700 text-xs">
                  Why European?
                </div>
                <div className="text-gray-600 text-xs">
                  Cash settlement prevents manipulation and ensures orderly
                  settlement
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg border border-blue-200">
            <h5 className="font-bold text-green-700 mb-4 text-center">
              💱 Currency Options
            </h5>
            <div className="space-y-3">
              <div className="bg-green-50 p-3 rounded text-center">
                <div className="text-lg font-bold text-green-600">
                  OTC Standard
                </div>
                <div className="text-xs text-green-500">
                  Institutional Markets
                </div>
              </div>
              <div className="space-y-2 text-xs">
                <div className="font-semibold text-green-700">
                  Major Markets:
                </div>
                <ul className="text-green-600 space-y-1">
                  <li>• EUR/USD options</li>
                  <li>• GBP/USD options</li>
                  <li>• USD/JPY options</li>
                  <li>• Corporate FX hedging</li>
                  <li>• OTC currency derivatives</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-2 rounded">
                <div className="font-semibold text-gray-700 text-xs">
                  Why European?
                </div>
                <div className="text-gray-600 text-xs">
                  Standardization and pricing simplicity in institutional
                  markets
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg border border-blue-200">
            <h5 className="font-bold text-purple-700 mb-4 text-center">
              🏦 Interest Rate Options
            </h5>
            <div className="space-y-3">
              <div className="bg-purple-50 p-3 rounded text-center">
                <div className="text-lg font-bold text-purple-600">
                  Market Standard
                </div>
                <div className="text-xs text-purple-500">
                  Fixed Income Markets
                </div>
              </div>
              <div className="space-y-2 text-xs">
                <div className="font-semibold text-purple-700">
                  Major Products:
                </div>
                <ul className="text-purple-600 space-y-1">
                  <li>• Interest rate swaptions</li>
                  <li>• Bond options</li>
                  <li>• Caps and floors</li>
                  <li>• Treasury options</li>
                  <li>• Credit derivatives</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-2 rounded">
                <div className="font-semibold text-gray-700 text-xs">
                  Why European?
                </div>
                <div className="text-gray-600 text-xs">
                  Alignment with underlying bond maturity and payment
                  schedules
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Asset Class Breakdown */}
      <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border-2 border-cyan-200 p-6 rounded-xl">
        <h4 className="font-bold text-cyan-800 text-xl mb-6 text-center">
          European Options by Asset Class
        </h4>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
            <thead className="bg-gradient-to-r from-cyan-100 to-blue-100">
              <tr>
                <th className="border border-gray-300 p-4 text-left font-bold text-gray-800">
                  Asset Class
                </th>
                <th className="border border-gray-300 p-4 text-center font-bold text-blue-600">
                  European Usage
                </th>
                <th className="border border-gray-300 p-4 text-center font-bold text-green-600">
                  Market Activity
                </th>
                <th className="border border-gray-300 p-4 text-center font-bold text-purple-600">
                  Cost Advantage
                </th>
                <th className="border border-gray-300 p-4 text-left font-bold text-orange-600">
                  Primary Reason
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-300 p-4 font-semibold">
                  Equity Index Options
                </td>
                <td className="border border-gray-300 p-4 text-center text-blue-600 font-bold">
                  Dominant
                </td>
                <td className="border border-gray-300 p-4 text-center">
                  Very High Volume
                </td>
                <td className="border border-gray-300 p-4 text-center">
                  Lower than American
                </td>
                <td className="border border-gray-300 p-4 text-sm">
                  Cash settlement requirement
                </td>
              </tr>
              <tr className="hover:bg-gray-50 bg-gray-25">
                <td className="border border-gray-300 p-4 font-semibold">
                  Individual Equity Options
                </td>
                <td className="border border-gray-300 p-4 text-center text-blue-600">
                  Minimal
                </td>
                <td className="border border-gray-300 p-4 text-center">
                  Low Volume
                </td>
                <td className="border border-gray-300 p-4 text-center">
                  Cost effective
                </td>
                <td className="border border-gray-300 p-4 text-sm">
                  Special products only
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-300 p-4 font-semibold">
                  Currency Options (OTC)
                </td>
                <td className="border border-gray-300 p-4 text-center text-blue-600 font-bold">
                  Preferred
                </td>
                <td className="border border-gray-300 p-4 text-center">
                  High Volume
                </td>
                <td className="border border-gray-300 p-4 text-center">
                  Pricing efficiency
                </td>
                <td className="border border-gray-300 p-4 text-sm">
                  Institutional standardization
                </td>
              </tr>
              <tr className="hover:bg-gray-50 bg-gray-25">
                <td className="border border-gray-300 p-4 font-semibold">
                  Interest Rate Options
                </td>
                <td className="border border-gray-300 p-4 text-center text-blue-600 font-bold">
                  Standard
                </td>
                <td className="border border-gray-300 p-4 text-center">
                  High Volume
                </td>
                <td className="border border-gray-300 p-4 text-center">
                  Analytical pricing
                </td>
                <td className="border border-gray-300 p-4 text-sm">
                  Term structure modeling
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-300 p-4 font-semibold">
                  Commodity Options
                </td>
                <td className="border border-gray-300 p-4 text-center text-blue-600">
                  Mixed
                </td>
                <td className="border border-gray-300 p-4 text-center">
                  Moderate Volume
                </td>
                <td className="border border-gray-300 p-4 text-center">
                  Variable benefit
                </td>
                <td className="border border-gray-300 p-4 text-sm">
                  Delivery alignment
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
            🏢 Institutional Applications
          </h4>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-green-200">
              <h5 className="font-semibold text-green-700 mb-2">
                Portfolio Hedging
              </h5>
              <p className="text-green-600 text-sm mb-2">
                Index puts provide portfolio insurance with predictable
                exercise timing aligned with rebalancing periods
              </p>
              <ul className="text-gray-600 text-xs space-y-1">
                <li>• Quarterly rebalancing alignment</li>
                <li>• Regulatory reporting periods</li>
                <li>• Clean P&L attribution</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg border border-green-200">
              <h5 className="font-semibold text-green-700 mb-2">
                Structured Products
              </h5>
              <p className="text-green-600 text-sm mb-2">
                Capital protected notes and reverse convertibles with defined
                maturity structures
              </p>
              <ul className="text-gray-600 text-xs space-y-1">
                <li>• Defined maturity structures</li>
                <li>• Regulatory compliance</li>
                <li>• Simplified documentation</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg border border-green-200">
              <h5 className="font-semibold text-green-700 mb-2">
                Risk Management
              </h5>
              <p className="text-green-600 text-sm mb-2">
                Predictable exercise patterns simplify risk calculations and
                capital requirements
              </p>
              <ul className="text-gray-600 text-xs space-y-1">
                <li>• VaR modeling accuracy</li>
                <li>• Stress testing scenarios</li>
                <li>• Capital requirement calculations</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200 p-6 rounded-xl">
          <h4 className="font-bold text-orange-800 text-xl mb-4">
            📈 Trading Strategies
          </h4>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-orange-200">
              <h5 className="font-semibold text-orange-700 mb-2">
                Volatility Trading
              </h5>
              <p className="text-orange-600 text-sm mb-2">
                Pure volatility exposure without early exercise complications
                using VIX and index options
              </p>
              <ul className="text-gray-600 text-xs space-y-1">
                <li>• VIX options strategies</li>
                <li>• Volatility surface arbitrage</li>
                <li>• Calendar spread trading</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg border border-orange-200">
              <h5 className="font-semibold text-orange-700 mb-2">
                Index Arbitrage
              </h5>
              <p className="text-orange-600 text-sm mb-2">
                Precise timing for index vs ETF arbitrage opportunities with
                predictable settlement
              </p>
              <ul className="text-gray-600 text-xs space-y-1">
                <li>• SPX vs SPY basis trades</li>
                <li>• Cross-market arbitrage</li>
                <li>• Settlement timing strategies</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg border border-orange-200">
              <h5 className="font-semibold text-orange-700 mb-2">
                Systematic Strategies
              </h5>
              <p className="text-orange-600 text-sm mb-2">
                Algorithm-friendly due to predictable exercise behavior and
                analytical pricing
              </p>
              <ul className="text-gray-600 text-xs space-y-1">
                <li>• Automated market making</li>
                <li>• High-frequency strategies</li>
                <li>• Cross-asset momentum</li>
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
                🏦 Asset Management
              </h5>
              <ul className="text-amber-600 text-sm space-y-2">
                <li className="flex items-start space-x-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span>
                    <strong>Index Fund Hedging:</strong> European index puts for
                    portfolio protection without early exercise uncertainty
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span>
                    <strong>Pension Fund Overlays:</strong> Long-term protection
                    with predictable expiration timing
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span>
                    <strong>Volatility Overlays:</strong> Systematic volatility
                    strategies using index options
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg border border-amber-200">
              <h5 className="font-semibold text-amber-700 mb-2">
                💼 Investment Banks
              </h5>
              <ul className="text-amber-600 text-sm space-y-2">
                <li className="flex items-start space-x-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span>
                    <strong>Structured Product Creation:</strong> Capital
                    protected notes with European exercise features
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span>
                    <strong>Market Making:</strong> Provide liquidity in index
                    options with analytical pricing advantages
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span>
                    <strong>Cross-Asset Trading:</strong> Currency and interest
                    rate derivative strategies
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-amber-200">
              <h5 className="font-semibold text-amber-700 mb-2">
                🏛️ Central Banks
              </h5>
              <ul className="text-amber-600 text-sm space-y-2">
                <li className="flex items-start space-x-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span>
                    <strong>Monetary Policy Tools:</strong> Interest rate options
                    for policy implementation and market signaling
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span>
                    <strong>Currency Intervention:</strong> FX options for
                    managing exchange rate volatility
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span>
                    <strong>Reserve Management:</strong> Portfolio hedging with
                    predictable settlement timing
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg border border-amber-200">
              <h5 className="font-semibold text-amber-700 mb-2">
                💻 Hedge Funds
              </h5>
              <ul className="text-amber-600 text-sm space-y-2">
                <li className="flex items-start space-x-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span>
                    <strong>Volatility Arbitrage:</strong> Exploit mispricings in
                    volatility surface using analytical models
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span>
                    <strong>Macro Strategies:</strong> Currency and interest rate
                    bets using European exercise features
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span>
                    <strong>Statistical Arbitrage:</strong> High-frequency
                    trading using predictable pricing models
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
                    <strong>ESG Index Options:</strong> New sustainable index
                    derivatives with European exercise features
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-teal-500 mt-1">•</span>
                  <span>
                    <strong>Crypto Index Derivatives:</strong> Bitcoin and
                    Ethereum index options with cash settlement
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-teal-500 mt-1">•</span>
                  <span>
                    <strong>Climate Risk Products:</strong> Weather and
                    catastrophe derivatives using European exercise
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
                    <strong>Electronic Trading:</strong> Nearly universal
                    electronic trading with millisecond pricing
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-teal-500 mt-1">•</span>
                  <span>
                    <strong>Real-time Pricing:</strong> Instant Black-Scholes
                    calculations for market making
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-teal-500 mt-1">•</span>
                  <span>
                    <strong>Cross-Market Access:</strong> Global index option
                    trading platforms and arbitrage
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
            European options will continue to dominate index and institutional
            markets due to their cost efficiency and analytical tractability.
            Expect growth in ESG indices, climate derivatives, and automated
            trading strategies. The integration of AI for volatility surface
            modeling and blockchain for settlement efficiency will enhance their
            market position, while their role in systematic strategies will
            expand as quantitative trading becomes more prevalent.
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
              European options offer distinct advantages in certain situations
              while imposing limitations in others. Understanding when to choose
              European over American exercise styles is crucial for optimal
              strategy selection and cost-effective options trading.
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
                        Lower Premium Cost
                      </h5>
                      <p className="text-green-600 text-sm mb-2">
                        Typically 1-5% cheaper than equivalent American options
                        due to restricted exercise rights
                      </p>
                      <div className="bg-green-50 p-2 rounded text-xs">
                        <strong>Example:</strong> SPX 4000 call: European $6.25,
                        American equivalent $6.42
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
                          d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"
                          clipRule="evenodd"
                        />
                        <path
                          fillRule="evenodd"
                          d="M4 5a2 2 0 012-2h8a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm0 8a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-semibold text-green-700 mb-2">
                        Analytical Pricing
                      </h5>
                      <p className="text-green-600 text-sm mb-2">
                        Closed-form Black-Scholes solutions provide instant,
                        exact pricing and Greeks
                      </p>
                      <div className="bg-green-50 p-2 rounded text-xs">
                        <strong>Benefit:</strong>{" "}
                        <InlineMath math="C = S_0 N(d_1) - K e^{-rT} N(d_2)" />{" "}
                        computes in microseconds
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
                        Predictable Behavior
                      </h5>
                      <p className="text-green-600 text-sm mb-2">
                        Clean time decay patterns and exercise outcomes simplify
                        strategy analysis
                      </p>
                      <div className="bg-green-50 p-2 rounded text-xs">
                        <strong>Advantage:</strong> No early exercise
                        uncertainty in P&L projections
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
                          d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-semibold text-green-700 mb-2">
                        High Liquidity Markets
                      </h5>
                      <p className="text-green-600 text-sm mb-2">
                        Dominate index and institutional markets with tight
                        bid-ask spreads
                      </p>
                      <div className="bg-green-50 p-2 rounded text-xs">
                        <strong>Example:</strong> SPX options often have 1-2
                        cent spreads vs 5+ cents for individual stocks
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
                          d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-semibold text-red-700 mb-2">
                        No Early Exercise
                      </h5>
                      <p className="text-red-600 text-sm mb-2">
                        Cannot capture favorable price movements or dividends
                        before expiration
                      </p>
                      <div className="bg-red-50 p-2 rounded text-xs">
                        <strong>Miss:</strong> Deep ITM puts worth exercising
                        early, pre-dividend exercise opportunities
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
                        Dividend Risk
                      </h5>
                      <p className="text-red-600 text-sm mb-2">
                        Cannot exercise calls before ex-dividend dates to
                        capture dividend payments
                      </p>
                      <div className="bg-red-50 p-2 rounded text-xs">
                        <strong>Impact:</strong> Deep ITM calls may lose value
                        equal to dividend amount
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
                        Limited Flexibility
                      </h5>
                      <p className="text-red-600 text-sm mb-2">
                        Cannot adapt to changing market conditions or new
                        information before expiration
                      </p>
                      <div className="bg-red-50 p-2 rounded text-xs">
                        <strong>Constraint:</strong> Stuck with position
                        regardless of earnings, news, or volatility changes
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
                        Limited Availability
                      </h5>
                      <p className="text-red-600 text-sm mb-2">
                        Mainly available on indices and OTC markets, not
                        individual equity options
                      </p>
                      <div className="bg-red-50 p-2 rounded text-xs">
                        <strong>Reality:</strong> {"<"} 95% of single-stock
                        options are American style
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
              When to Choose European Options
            </h4>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg border border-blue-200">
                <h5 className="font-bold text-green-700 mb-4 text-center">
                  ✅ Choose European When:
                </h5>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">1</span>
                    </div>
                    <div>
                      <div className="font-semibold text-green-700 text-sm">
                        Cost Sensitivity is High
                      </div>
                      <p className="text-green-600 text-xs">
                        Premium savings of 1-5% matter for your strategy
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">2</span>
                    </div>
                    <div>
                      <div className="font-semibold text-green-700 text-sm">
                        Trading Index Exposure
                      </div>
                      <p className="text-green-600 text-xs">
                        SPX, NDX, RUT, or other broad market indices
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">3</span>
                    </div>
                    <div>
                      <div className="font-semibold text-green-700 text-sm">
                        Pure Volatility Strategies
                      </div>
                      <p className="text-green-600 text-xs">
                        Straddles, strangles, and vol trading without
                        directional bias
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">4</span>
                    </div>
                    <div>
                      <div className="font-semibold text-green-700 text-sm">
                        Algorithmic Trading
                      </div>
                      <p className="text-green-600 text-xs">
                        Need predictable pricing for systematic strategies
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">5</span>
                    </div>
                    <div>
                      <div className="font-semibold text-green-700 text-sm">
                        Institutional Hedging
                      </div>
                      <p className="text-green-600 text-xs">
                        Portfolio insurance with defined expiration timing
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-blue-200">
                <h5 className="font-bold text-red-700 mb-4 text-center">
                  ❌ Avoid European When:
                </h5>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">1</span>
                    </div>
                    <div>
                      <div className="font-semibold text-red-700 text-sm">
                        High Dividend Stocks
                      </div>
                      <p className="text-red-600 text-xs">
                        Significant dividends before expiration {"(>2% yield)"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">2</span>
                    </div>
                    <div>
                      <div className="font-semibold text-red-700 text-sm">
                        Deep ITM Put Positions
                      </div>
                      <p className="text-red-600 text-xs">
                        Early exercise may be optimal for deep in-the-money puts
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">3</span>
                    </div>
                    <div>
                      <div className="font-semibold text-red-700 text-sm">
                        Event-Driven Strategies
                      </div>
                      <p className="text-red-600 text-xs">
                        Earnings, M&A, or other catalyst-based trades
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">4</span>
                    </div>
                    <div>
                      <div className="font-semibold text-red-700 text-sm">
                        Need Maximum Flexibility
                      </div>
                      <p className="text-red-600 text-xs">
                        Uncertain timing or changing market conditions
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">5</span>
                    </div>
                    <div>
                      <div className="font-semibold text-red-700 text-sm">
                        Individual Stock Options
                      </div>
                      <p className="text-red-600 text-xs">
                        Single-name equity options (usually only American
                        available)
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
              Cost-Benefit Analysis
            </h4>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
                <thead className="bg-gradient-to-r from-purple-100 to-violet-100">
                  <tr>
                    <th className="border border-gray-300 p-4 text-left font-bold text-gray-800">
                      Factor
                    </th>
                    <th className="border border-gray-300 p-4 text-center font-bold text-green-600">
                      European Advantage
                    </th>
                    <th className="border border-gray-300 p-4 text-center font-bold text-red-600">
                      European Disadvantage
                    </th>
                    <th className="border border-gray-300 p-4 text-center font-bold text-blue-600">
                      Impact Level
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-4 font-semibold">
                      Premium Cost
                    </td>
                    <td className="border border-gray-300 p-4 text-center text-green-600">
                      1-5% savings
                    </td>
                    <td className="border border-gray-300 p-4 text-center text-gray-400">
                      -
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-semibold">
                        Medium
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-gray-25">
                    <td className="border border-gray-300 p-4 font-semibold">
                      Pricing Speed
                    </td>
                    <td className="border border-gray-300 p-4 text-center text-green-600">
                      Instant analytical
                    </td>
                    <td className="border border-gray-300 p-4 text-center text-gray-400">
                      -
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-semibold">
                        High
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-4 font-semibold">
                      Dividend Capture
                    </td>
                    <td className="border border-gray-300 p-4 text-center text-gray-400">
                      -
                    </td>
                    <td className="border border-gray-300 p-4 text-center text-red-600">
                      Cannot exercise early
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm font-semibold">
                        Variable
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-gray-25">
                    <td className="border border-gray-300 p-4 font-semibold">
                      Market Liquidity
                    </td>
                    <td className="border border-gray-300 p-4 text-center text-green-600">
                      High in indices
                    </td>
                    <td className="border border-gray-300 p-4 text-center text-red-600">
                      Low in single stocks
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-semibold">
                        Medium
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-4 font-semibold">
                      Strategy Flexibility
                    </td>
                    <td className="border border-gray-300 p-4 text-center text-green-600">
                      Predictable P&L
                    </td>
                    <td className="border border-gray-300 p-4 text-center text-red-600">
                      Cannot adapt
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-semibold">
                        High
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Final Recommendations */}
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-200 p-6 rounded-xl">
            <h4 className="font-bold text-emerald-800 text-xl mb-6 text-center">
              Strategic Recommendations
            </h4>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-lg border border-emerald-200 text-center">
                <div className="text-3xl mb-3">🎯</div>
                <h5 className="font-bold text-emerald-700 mb-3">
                  For Beginners
                </h5>
                <p className="text-emerald-600 text-sm mb-3">
                  Start with European index options (SPX) to learn fundamentals
                  without early exercise complexity
                </p>
                <div className="bg-emerald-50 p-2 rounded text-xs">
                  <strong>Best Practice:</strong> Master Black-Scholes concepts
                  first
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-emerald-200 text-center">
                <div className="text-3xl mb-3">📊</div>
                <h5 className="font-bold text-emerald-700 mb-3">
                  For Institutions
                </h5>
                <p className="text-emerald-600 text-sm mb-3">
                  European options excel for portfolio hedging, risk management,
                  and systematic strategies
                </p>
                <div className="bg-emerald-50 p-2 rounded text-xs">
                  <strong>Advantage:</strong> Regulatory capital efficiency
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-emerald-200 text-center">
                <div className="text-3xl mb-3">⚡</div>
                <h5 className="font-bold text-emerald-700 mb-3">
                  For Algo Traders
                </h5>
                <p className="text-emerald-600 text-sm mb-3">
                  Analytical pricing and predictable behavior ideal for
                  high-frequency and systematic strategies
                </p>
                <div className="bg-emerald-50 p-2 rounded text-xs">
                  <strong>Key:</strong> Microsecond pricing calculations
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
              <span className="text-gray-700">European Options</span>
            </nav>

            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  European Options
                </h1>
                <p className="text-xl text-gray-600">
                  Master the theoretical foundation of modern derivatives
                  pricing
                </p>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <svg
                  className="w-4 h-4"
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
                <span>25 min read</span>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50 p-4 mb-8">
            <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
              <span>Lesson Progress</span>
              <span>2 of 8 lessons</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full"
                style={{ width: "25%" }}
              ></div>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 rounded-xl mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2 pr-4">
                  Experience European Option Pricing
                </h3>
                <p className="text-purple-100">
                  Use our OptiPrice calculator to explore Black-Scholes pricing
                  in real-time.
                </p>
                <p className="text-purple-100 pr-4">
                  Compare analytical solutions with binomial and Monte Carlo
                  methods.
                </p>
              </div>
              <button
                onClick={() => navigate("/toolbox/optiprice")}
                className="!bg-white !text-purple-600 px-6 py-3 !rounded-lg !font-semibold !hover:bg-purple-50 !transition-colors flex-shrink-0"
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
                  className={`flex-1 flex items-center justify-center !px-3 !py-2 rounded-md text-sm font-medium transition-all duration-200 ${
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
              onClick={() => navigate("/learning/options/overview")}
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
              <span>Back: Options Overview</span>
            </button>

            <button
              onClick={() => navigate("/learning/options/american")}
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <span>Next: American Options</span>
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

export default EuropeanOptions;
