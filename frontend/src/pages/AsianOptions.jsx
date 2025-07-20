// frontend/src/pages/AsianOptions.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import { useAuth } from "../contexts/AuthContext";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const AsianOptions = () => {
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
              <strong>Asian options</strong> are path-dependent derivatives
              where the payoff depends on the average price of the underlying
              asset over a specified period, rather than just the price at
              expiration. This averaging feature makes them particularly
              valuable for hedging continuous exposure and reducing the impact
              of price manipulation at expiration.
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
                  <h4 className="font-bold mb-2">The Averaging Advantage</h4>
                  <p>
                    Asian options solve the "weekend risk" and manipulation
                    problems inherent in standard options by using average
                    prices instead of single-point pricing. This makes them
                    especially popular in commodity markets and for hedging
                    regular business cash flows.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Timeline */}
          <div className="bg-gradient-to-r from-purple-50 to-violet-50 border-2 border-purple-200 p-6 rounded-xl">
            <h4 className="font-bold text-purple-800 text-xl mb-6 text-center">
              Price Averaging Timeline
            </h4>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-purple-300 rounded"></div>

              {/* Timeline points */}
              <div className="relative flex justify-between items-center">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-purple-500 rounded-full mb-2 relative z-10"></div>
                  <div className="text-center">
                    <div className="text-sm font-semibold text-purple-700">
                      Option Start
                    </div>
                    <div className="text-xs text-purple-600">
                      Begin Averaging
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 bg-purple-500 rounded-full mb-2 relative z-10 flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-semibold text-purple-700">
                      Price Sampling
                    </div>
                    <div className="text-xs text-purple-600">
                      Daily/Weekly Observations
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 bg-purple-500 rounded-full mb-2 relative z-10 flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-semibold text-purple-700">
                      More Sampling
                    </div>
                    <div className="text-xs text-purple-600">
                      Continuous Averaging
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
                      Final Average Calculation
                    </div>
                  </div>
                </div>
              </div>

              {/* Averaging indicator */}
              <div className="mt-6 text-center">
                <div className="inline-flex items-center bg-purple-100 text-purple-700 px-4 py-2 rounded-lg">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Payoff based on average price over entire period
                </div>
              </div>
            </div>
          </div>

          {/* Asian Option Types */}
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border-2 border-cyan-200 p-6 rounded-xl">
            <h4 className="font-bold text-cyan-800 text-xl mb-6 text-center">
              Types of Asian Options
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg border border-cyan-200">
                <h5 className="font-bold text-cyan-700 mb-4 text-center">
                  🔢 Arithmetic Average
                </h5>
                <div className="space-y-3">
                  <div className="bg-cyan-50 p-3 rounded text-center">
                    <div className="text-lg font-bold text-cyan-600">
                      Most Common
                    </div>
                    <div className="text-xs text-cyan-500">
                      Standard Definition
                    </div>
                  </div>

                  <div className="text-center mb-3">
                    <BlockMath math="A = \frac{1}{n}\sum_{i=1}^{n} S_i" />
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="bg-gray-50 p-2 rounded">
                      <div className="font-semibold text-cyan-700">
                        Simple Average:
                      </div>
                      <div className="text-cyan-600">
                        Sum all observed prices and divide by number of
                        observations
                      </div>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <div className="font-semibold text-cyan-700">
                        Market Standard:
                      </div>
                      <div className="text-cyan-600">
                        Used in most exchange-traded Asian options
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-cyan-200">
                <h5 className="font-bold text-cyan-700 mb-4 text-center">
                  📊 Geometric Average
                </h5>
                <div className="space-y-3">
                  <div className="bg-cyan-50 p-3 rounded text-center">
                    <div className="text-lg font-bold text-cyan-600">
                      Theoretical
                    </div>
                    <div className="text-xs text-cyan-500">Academic Models</div>
                  </div>

                  <div className="text-center mb-3">
                    <BlockMath math="G = \sqrt[n]{\prod_{i=1}^{n} S_i}" />
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="bg-gray-50 p-2 rounded">
                      <div className="font-semibold text-cyan-700">
                        Compound Average:
                      </div>
                      <div className="text-cyan-600">
                        nth root of the product of all observed prices
                      </div>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <div className="font-semibold text-cyan-700">
                        Lower Values:
                      </div>
                      <div className="text-cyan-600">
                        Always less than or equal to arithmetic average
                      </div>
                    </div>
                  </div>
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
                How They Work
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-green-700">
                      Path-Dependent Payoff
                    </div>
                    <p className="text-green-600 text-sm">
                      Payoff depends on the entire price path, not just final
                      price
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-green-700">
                      Continuous Monitoring
                    </div>
                    <p className="text-green-600 text-sm">
                      Price observations taken at regular intervals throughout
                      life
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-green-700">
                      Volatility Reduction
                    </div>
                    <p className="text-green-600 text-sm">
                      Averaging smooths out price spikes and manipulation
                      attempts
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200 p-6 rounded-xl">
              <h4 className="font-bold text-orange-800 text-xl mb-4 flex items-center">
                <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center mr-3">
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
                Key Features
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-orange-700">
                      Lower Volatility
                    </div>
                    <p className="text-orange-600 text-sm">
                      Typically 20-40% lower volatility than equivalent vanilla
                      options
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-orange-700">
                      Cheaper Premiums
                    </div>
                    <p className="text-orange-600 text-sm">
                      Cost 15-30% less than vanilla options due to reduced
                      volatility
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-orange-700">
                      Complex Pricing
                    </div>
                    <p className="text-orange-600 text-sm">
                      Require Monte Carlo simulation or approximation methods
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Averaging Methods Comparison */}
          <div className="bg-gradient-to-r from-slate-50 to-gray-50 border-2 border-gray-200 p-6 rounded-xl">
            <h4 className="font-bold text-gray-800 text-xl mb-6 text-center">
              Asian vs Standard Options Comparison
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-3 text-left font-semibold">
                      Feature
                    </th>
                    <th className="border border-gray-300 p-3 text-center font-semibold text-purple-600">
                      Asian Options
                    </th>
                    <th className="border border-gray-300 p-3 text-center font-semibold text-blue-600">
                      Standard Options
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium">
                      Payoff Determination
                    </td>
                    <td className="border border-gray-300 p-3 text-center text-purple-600 font-semibold">
                      Average price over period
                    </td>
                    <td className="border border-gray-300 p-3 text-center">
                      Price at expiration only
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium">
                      Volatility Exposure
                    </td>
                    <td className="border border-gray-300 p-3 text-center text-purple-600 font-semibold">
                      Reduced by averaging
                    </td>
                    <td className="border border-gray-300 p-3 text-center">
                      Full volatility exposure
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium">
                      Premium Cost
                    </td>
                    <td className="border border-gray-300 p-3 text-center text-purple-600 font-semibold">
                      Lower (15-30% discount)
                    </td>
                    <td className="border border-gray-300 p-3 text-center">
                      Higher (full volatility cost)
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium">
                      Manipulation Risk
                    </td>
                    <td className="border border-gray-300 p-3 text-center text-purple-600 font-semibold">
                      Very low
                    </td>
                    <td className="border border-gray-300 p-3 text-center">
                      Higher (expiration pinning)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium">
                      Pricing Complexity
                    </td>
                    <td className="border border-gray-300 p-3 text-center">
                      High (numerical methods)
                    </td>
                    <td className="border border-gray-300 p-3 text-center text-blue-600 font-semibold">
                      Low (analytical formulas)
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium">
                      Common Markets
                    </td>
                    <td className="border border-gray-300 p-3 text-center">
                      Commodities, FX, OTC
                    </td>
                    <td className="border border-gray-300 p-3 text-center text-blue-600 font-semibold">
                      Equities, indices, exchanges
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Real-World Applications Preview */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200 p-6 rounded-xl">
            <h4 className="font-bold text-indigo-800 text-xl mb-6 text-center">
              Why Asian Options Matter
            </h4>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg border border-indigo-200 text-center">
                <div className="text-2xl mb-3">🛢️</div>
                <h5 className="font-semibold text-indigo-700 mb-3">
                  Commodity Hedging
                </h5>
                <p className="text-indigo-600 text-sm">
                  Perfect for hedging continuous production or consumption of
                  commodities like oil, gold, or agricultural products
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg border border-indigo-200 text-center">
                <div className="text-2xl mb-3">💱</div>
                <h5 className="font-semibold text-indigo-700 mb-3">
                  Currency Risk
                </h5>
                <p className="text-indigo-600 text-sm">
                  Ideal for multinational companies with regular foreign
                  exchange exposures over extended periods
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg border border-indigo-200 text-center">
                <div className="text-2xl mb-3">📊</div>
                <h5 className="font-semibold text-indigo-700 mb-3">
                  Price Smoothing
                </h5>
                <p className="text-indigo-600 text-sm">
                  Eliminates "weekend effects" and reduces impact of temporary
                  price spikes or market manipulation
                </p>
              </div>
            </div>

            <div className="mt-6 bg-indigo-50 p-4 rounded-lg border border-indigo-200">
              <h6 className="font-semibold text-indigo-700 mb-2">
                Market Reality Check
              </h6>
              <p className="text-indigo-600 text-sm">
                While Asian options represent a smaller portion of total options
                volume compared to vanilla options, they're essential in
                specific markets. The crude oil market alone sees billions in
                Asian option notional annually, and they're the preferred choice
                for systematic commodity hedging programs at major corporations
                and financial institutions.
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
              Asian option payoffs depend on the average price of the underlying
              asset over the option's life, creating unique profit/loss profiles
              that are smoother and less volatile than standard options.
              Understanding these averaging effects is crucial for effective
              hedging and risk management strategies.
            </p>
          </div>

          {/* Payoff Formulas */}
          <div className="bg-gradient-to-r from-purple-50 to-violet-50 border-2 border-purple-200 p-6 rounded-xl">
            <h4 className="font-bold text-purple-800 text-xl mb-6 text-center">
              Asian Option Payoff Formulas
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg border border-purple-200">
                <h5 className="font-bold text-green-700 mb-4 text-center">
                  📈 Asian Call Option
                </h5>

                <div className="text-center mb-4">
                  <BlockMath math="\text{Payoff} = \max(A - K, 0)" />
                </div>

                <div className="space-y-3">
                  <div className="bg-green-50 p-3 rounded">
                    <div className="font-semibold text-green-700 text-sm mb-2">
                      Where:
                    </div>
                    <div className="text-green-600 text-xs space-y-1">
                      <div>
                        <InlineMath math="A" /> = Average price over observation
                        period
                      </div>
                      <div>
                        <InlineMath math="K" /> = Strike price
                      </div>
                      <div>
                        <InlineMath math="A = \frac{1}{n}\sum_{i=1}^{n} S_i" />{" "}
                        (Arithmetic average)
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-3 rounded text-xs">
                    <div className="font-semibold text-gray-700 mb-1">
                      Exercise Condition:
                    </div>
                    <div className="text-gray-600">
                      Exercise if average price exceeds strike price:
                      <br />
                      <InlineMath math="A > K" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-purple-200">
                <h5 className="font-bold text-red-700 mb-4 text-center">
                  📉 Asian Put Option
                </h5>

                <div className="text-center mb-4">
                  <BlockMath math="\text{Payoff} = \max(K - A, 0)" />
                </div>

                <div className="space-y-3">
                  <div className="bg-red-50 p-3 rounded">
                    <div className="font-semibold text-red-700 text-sm mb-2">
                      Where:
                    </div>
                    <div className="text-red-600 text-xs space-y-1">
                      <div>
                        <InlineMath math="K" /> = Strike price
                      </div>
                      <div>
                        <InlineMath math="A" /> = Average price over observation
                        period
                      </div>
                      <div>
                        <InlineMath math="A = \frac{1}{n}\sum_{i=1}^{n} S_i" />{" "}
                        (Arithmetic average)
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-3 rounded text-xs">
                    <div className="font-semibold text-gray-700 mb-1">
                      Exercise Condition:
                    </div>
                    <div className="text-gray-600">
                      Exercise if strike price exceeds average price:
                      <br />
                      <InlineMath math="K > A" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Averaging Effect Visualization */}
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border-2 border-cyan-200 p-6 rounded-xl">
            <h4 className="font-bold text-cyan-800 text-xl mb-6 text-center">
              The Averaging Effect on Payoffs
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg border border-cyan-200">
                <h5 className="font-semibold text-cyan-700 mb-4 text-center">
                  Volatility Smoothing
                </h5>

                <div className="space-y-3">
                  <div className="bg-cyan-50 p-3 rounded">
                    <div className="font-semibold text-cyan-700 text-sm mb-2">
                      Price Path Example:
                    </div>
                    <div className="text-cyan-600 text-xs space-y-1">
                      <div>Week 1: $95, Week 2: $105, Week 3: $110</div>
                      <div>Week 4: $90, Week 5: $100</div>
                      <div className="border-t pt-1 mt-2 font-semibold">
                        Final Price: $100 | Average: $100
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-3 rounded text-xs">
                    <div className="font-semibold text-gray-700 mb-1">
                      Impact vs Vanilla Option:
                    </div>
                    <ul className="text-gray-600 space-y-1">
                      <li>
                        • Vanilla: Payoff depends only on $100 final price
                      </li>
                      <li>
                        • Asian: Payoff uses $100 average (same in this case)
                      </li>
                      <li>• But path volatility was smoothed out</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-cyan-200">
                <h5 className="font-semibent text-cyan-700 mb-4 text-center">
                  Manipulation Protection
                </h5>

                <div className="space-y-3">
                  <div className="bg-cyan-50 p-3 rounded">
                    <div className="font-semibold text-cyan-700 text-sm mb-2">
                      Expiration Spike Scenario:
                    </div>
                    <div className="text-cyan-600 text-xs space-y-1">
                      <div>4 weeks at $100, Final day spike to $120</div>
                      <div>Strike price: $105</div>
                      <div className="border-t pt-1 mt-2">
                        <div>
                          Vanilla payoff: $120 - $105 ={" "}
                          <span className="font-semibold text-green-600">
                            $15
                          </span>
                        </div>
                        <div>
                          Asian payoff: $104 - $105 ={" "}
                          <span className="font-semibold text-red-600">$0</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-3 rounded text-xs">
                    <div className="font-semibold text-gray-700 mb-1">
                      Protection Benefit:
                    </div>
                    <div className="text-gray-600">
                      Asian options are immune to last-minute price manipulation
                      or artificial expiration spikes
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Worked Examples */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 p-6 rounded-xl">
            <h4 className="font-bold text-amber-800 text-xl mb-6 text-center">
              Detailed Worked Examples
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Call Example */}
              <div className="bg-white p-5 rounded-lg border border-amber-200">
                <h5 className="font-bold text-green-700 mb-4">
                  📈 Asian Call Example: Oil Hedging
                </h5>

                <div className="space-y-4">
                  <div className="bg-green-50 p-3 rounded">
                    <div className="text-sm font-semibold text-green-800 mb-2">
                      Setup: 3-Month Oil Asian Call
                    </div>
                    <div className="text-xs text-green-600 space-y-1">
                      <div>• Strike Price: $70/barrel</div>
                      <div>• Premium Paid: $3.50/barrel</div>
                      <div>• Averaging: Weekly price observations</div>
                      <div>• Use Case: Airline fuel cost hedging</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="text-sm font-semibold text-gray-700">
                      Weekly Price Observations:
                    </div>

                    <div className="bg-gray-50 p-3 rounded text-xs">
                      <div className="grid grid-cols-2 gap-2">
                        <div>Week 1: $68</div>
                        <div>Week 2: $72</div>
                        <div>Week 3: $69</div>
                        <div>Week 4: $75</div>
                        <div>Week 5: $73</div>
                        <div>Week 6: $71</div>
                        <div>Week 7: $76</div>
                        <div>Week 8: $74</div>
                        <div>Week 9: $70</div>
                        <div>Week 10: $77</div>
                        <div>Week 11: $72</div>
                        <div>Week 12: $75</div>
                      </div>

                      <div className="border-t pt-2 mt-3">
                        <div className="font-semibold text-gray-700">
                          Average Calculation:
                        </div>
                        <div>
                          <InlineMath math="A = \frac{68+72+69+75+73+71+76+74+70+77+72+75}{12} = \frac{872}{12} = 72.67" />
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-3 rounded text-xs">
                      <div className="font-semibold text-blue-700 mb-2">
                        Payoff Calculation:
                      </div>
                      <div className="space-y-1">
                        <div>Average Price (A): $72.67</div>
                        <div>Strike Price (K): $70.00</div>
                        <div>
                          Intrinsic Value:{" "}
                          <InlineMath math="\max(72.67 - 70.00, 0) = \$2.67" />
                        </div>
                        <div>Premium Paid: $3.50</div>
                        <div className="border-t pt-1 mt-2">
                          <div className="font-semibold">
                            Net P&L: $2.67 - $3.50 ={" "}
                            <span className="text-red-600">-$0.83 loss</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-amber-50 p-3 rounded text-xs">
                      <div className="font-semibold text-amber-700 mb-1">
                        Vanilla Comparison:
                      </div>
                      <div className="text-amber-600">
                        If this were a vanilla option with final price of $75:
                        <br />
                        Payoff would be $75 - $70 = $5.00 (better)
                        <br />
                        But airline got protection from average $72.67 cost
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Put Example */}
              <div className="bg-white p-5 rounded-lg border border-amber-200">
                <h5 className="font-bold text-red-700 mb-4">
                  📉 Asian Put Example: Gold Mining
                </h5>

                <div className="space-y-4">
                  <div className="bg-red-50 p-3 rounded">
                    <div className="text-sm font-semibold text-red-800 mb-2">
                      Setup: 6-Month Gold Asian Put
                    </div>
                    <div className="text-xs text-red-600 space-y-1">
                      <div>• Strike Price: $1,800/oz</div>
                      <div>• Premium Paid: $45/oz</div>
                      <div>• Averaging: Daily closing prices</div>
                      <div>• Use Case: Gold mining revenue protection</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="text-sm font-semibold text-gray-700">
                      Monthly Average Prices:
                    </div>

                    <div className="bg-gray-50 p-3 rounded text-xs">
                      <div className="space-y-1">
                        <div>Month 1 Average: $1,820</div>
                        <div>Month 2 Average: $1,790</div>
                        <div>Month 3 Average: $1,760</div>
                        <div>Month 4 Average: $1,740</div>
                        <div>Month 5 Average: $1,720</div>
                        <div>Month 6 Average: $1,710</div>
                      </div>

                      <div className="border-t pt-2 mt-3">
                        <div className="font-semibold text-gray-700">
                          Overall Average:
                        </div>
                        <div>
                          <InlineMath math="A = \frac{1820+1790+1760+1740+1720+1710}{6} = \frac{10540}{6} = 1756.67" />
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-3 rounded text-xs">
                      <div className="font-semibold text-blue-700 mb-2">
                        Payoff Calculation:
                      </div>
                      <div className="space-y-1">
                        <div>Strike Price (K): $1,800.00</div>
                        <div>Average Price (A): $1,756.67</div>
                        <div>
                          Intrinsic Value:{" "}
                          <InlineMath math="\max(1800 - 1756.67, 0) = \$43.33" />
                        </div>
                        <div>Premium Paid: $45.00</div>
                        <div className="border-t pt-1 mt-2">
                          <div className="font-semibold">
                            Net P&L: $43.33 - $45.00 ={" "}
                            <span className="text-red-600">-$1.67 loss</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-amber-50 p-3 rounded text-xs">
                      <div className="font-semibold text-amber-700 mb-1">
                        Hedging Success:
                      </div>
                      <div className="text-amber-600">
                        Small loss on option, but miner was protected from
                        average selling price of $1,756.67 vs feared decline.
                        <br />
                        Final spot price was $1,710 (would be $90 vanilla put
                        payoff)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Payoff Comparison Charts */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200 p-6 rounded-xl">
            <h4 className="font-bold text-indigo-800 text-xl mb-6 text-center">
              Asian vs Vanilla Payoff Comparison
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg border border-indigo-200">
                <h5 className="font-semibold text-indigo-700 mb-4 text-center">
                  Call Option Payoffs (K = $100)
                </h5>

                <div className="space-y-3">
                  <div className="bg-indigo-50 p-3 rounded text-xs">
                    <div className="font-semibold text-indigo-700 mb-2">
                      Scenario Analysis:
                    </div>
                    <div className="space-y-2">
                      <div className="grid grid-cols-4 gap-1 font-semibold">
                        <div>Final Price</div>
                        <div>Average</div>
                        <div>Vanilla</div>
                        <div>Asian</div>
                      </div>
                      <div className="grid grid-cols-4 gap-1 text-xs">
                        <div>$120</div>
                        <div>$110</div>
                        <div>$20</div>
                        <div>$10</div>
                      </div>
                      <div className="grid grid-cols-4 gap-1 text-xs">
                        <div>$110</div>
                        <div>$105</div>
                        <div>$10</div>
                        <div>$5</div>
                      </div>
                      <div className="grid grid-cols-4 gap-1 text-xs">
                        <div>$95</div>
                        <div>$102</div>
                        <div>$0</div>
                        <div>$2</div>
                      </div>
                      <div className="grid grid-cols-4 gap-1 text-xs">
                        <div>$90</div>
                        <div>$96</div>
                        <div>$0</div>
                        <div>$0</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-3 rounded text-xs">
                    <div className="font-semibold text-gray-700 mb-1">
                      Key Observations:
                    </div>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Asian payoffs generally lower than vanilla</li>
                      <li>• Less sensitive to final price spikes</li>
                      <li>• Can be ITM when vanilla is OTM (row 3)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-indigo-200">
                <h5 className="font-semibold text-indigo-700 mb-4 text-center">
                  Put Option Payoffs (K = $100)
                </h5>

                <div className="space-y-3">
                  <div className="bg-indigo-50 p-3 rounded text-xs">
                    <div className="font-semibold text-indigo-700 mb-2">
                      Scenario Analysis:
                    </div>
                    <div className="space-y-2">
                      <div className="grid grid-cols-4 gap-1 font-semibold">
                        <div>Final Price</div>
                        <div>Average</div>
                        <div>Vanilla</div>
                        <div>Asian</div>
                      </div>
                      <div className="grid grid-cols-4 gap-1 text-xs">
                        <div>$70</div>
                        <div>$85</div>
                        <div>$30</div>
                        <div>$15</div>
                      </div>
                      <div className="grid grid-cols-4 gap-1 text-xs">
                        <div>$80</div>
                        <div>$90</div>
                        <div>$20</div>
                        <div>$10</div>
                      </div>
                      <div className="grid grid-cols-4 gap-1 text-xs">
                        <div>$105</div>
                        <div>$98</div>
                        <div>$0</div>
                        <div>$2</div>
                      </div>
                      <div className="grid grid-cols-4 gap-1 text-xs">
                        <div>$110</div>
                        <div>$103</div>
                        <div>$0</div>
                        <div>$0</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-3 rounded text-xs">
                    <div className="font-semibold text-gray-700 mb-1">
                      Key Observations:
                    </div>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Asian puts also show reduced payoffs</li>
                      <li>• Protection from temporary price recoveries</li>
                      <li>• More consistent with average exposure</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Advanced Scenarios */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 p-6 rounded-xl">
            <h4 className="font-bold text-green-800 text-xl mb-6 text-center">
              Advanced Averaging Scenarios
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg border border-green-200">
                <h5 className="font-semibold text-green-700 mb-4">
                  🌊 High Volatility Environment
                </h5>

                <div className="space-y-3">
                  <div className="bg-green-50 p-3 rounded text-xs">
                    <div className="font-semibold text-green-700 mb-2">
                      Cryptocurrency Example:
                    </div>
                    <div className="space-y-1">
                      <div>Bitcoin prices over 4 weeks:</div>
                      <div>$45K → $52K → $38K → $49K</div>
                      <div>Final: $49K | Average: $46K</div>
                      <div>Strike: $47K (ATM at start)</div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-3 rounded text-xs">
                    <div className="font-semibold text-gray-700 mb-1">
                      Comparison:
                    </div>
                    <div className="space-y-1">
                      <div>• Vanilla call payoff: $49K - $47K = $2K</div>
                      <div>• Asian call payoff: $46K - $47K = $0</div>
                      <div>• Volatility absorbed by averaging</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-green-200">
                <h5 className="font-semibold text-green-700 mb-4">
                  📅 Different Averaging Periods
                </h5>

                <div className="space-y-3">
                  <div className="bg-green-50 p-3 rounded text-xs">
                    <div className="font-semibold text-green-700 mb-2">
                      Same Price Path, Different Averaging:
                    </div>
                    <div className="space-y-1">
                      <div>Daily prices: $98, $99, $101, $102</div>
                      <div>Final price: $102</div>
                      <div>Strike: $100</div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-3 rounded text-xs">
                    <div className="font-semibold text-gray-700 mb-1">
                      Results by Averaging Frequency:
                    </div>
                    <div className="space-y-1">
                      <div>• Daily average: $100 → Payoff: $0</div>
                      <div>• Weekly average (end): $102 → Payoff: $2</div>
                      <div>• Vanilla: $102 → Payoff: $2</div>
                      <div className="text-amber-600 font-semibold">
                        → More frequent = more smoothing
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Takeaways */}
          <div className="bg-gradient-to-r from-slate-50 to-gray-50 border-2 border-gray-200 p-6 rounded-xl">
            <h4 className="font-bold text-gray-800 text-xl mb-4">
              Key Payoff Insights
            </h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                <div className="text-2xl mb-2">📊</div>
                <h5 className="font-semibold text-gray-700 mb-2">
                  Volatility Dampening
                </h5>
                <p className="text-gray-600 text-sm">
                  Asian options reduce payoff volatility by 20-40% compared to
                  vanilla options, providing smoother outcomes
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                <div className="text-2xl mb-2">🛡️</div>
                <h5 className="font-semibold text-gray-700 mb-2">
                  Manipulation Immunity
                </h5>
                <p className="text-gray-600 text-sm">
                  Averaging makes Asian options nearly immune to expiration day
                  manipulation or artificial price spikes
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                <div className="text-2xl mb-2">⚖️</div>
                <h5 className="font-semibent text-gray-700 mb-2">
                  Risk-Return Trade-off
                </h5>
                <p className="text-gray-600 text-sm">
                  Lower maximum payoffs in exchange for more predictable
                  outcomes and reduced premium costs
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
              Asian option pricing is fundamentally more complex than vanilla
              options due to their path-dependent nature. The averaging
              mechanism reduces effective volatility and creates unique pricing
              challenges that require sophisticated numerical methods, while
              generally offering significant cost savings to option buyers.
            </p>
          </div>

          {/* Volatility Reduction Impact */}
          <div className="bg-gradient-to-r from-purple-50 to-violet-50 border-2 border-purple-200 p-6 rounded-xl">
            <h4 className="font-bold text-purple-800 text-xl mb-6 text-center">
              How Averaging Reduces Effective Volatility
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg border border-purple-200">
                <h5 className="font-bold text-purple-700 mb-4 text-center">
                  📉 Volatility Scaling Effect
                </h5>

                <div className="text-center mb-4">
                  <BlockMath math="\sigma_{eff} = \sigma \sqrt{\frac{2n+1}{3(n+1)}}" />
                  <p className="text-xs text-gray-600 mt-2">
                    Effective volatility for arithmetic Asian option
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="bg-purple-50 p-3 rounded">
                    <div className="font-semibold text-purple-700 text-sm mb-2">
                      Where:
                    </div>
                    <ul className="text-purple-600 text-xs space-y-1">
                      <li>
                        • <InlineMath math="\sigma_{eff}" /> = Effective
                        volatility
                      </li>
                      <li>
                        • <InlineMath math="\sigma" /> = Underlying asset
                        volatility
                      </li>
                      <li>
                        • <InlineMath math="n" /> = Number of averaging periods
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-3 rounded text-xs">
                    <div className="font-semibold text-gray-700 mb-1">
                      Key Insight:
                    </div>
                    <div className="text-gray-600">
                      As averaging periods increase, effective volatility
                      approaches
                      <InlineMath math="\sigma/\sqrt{3} \approx 0.577\sigma" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-purple-200">
                <h5 className="font-bold text-purple-700 mb-4 text-center">
                  📊 Volatility Reduction Examples
                </h5>

                <div className="space-y-3">
                  <div className="bg-purple-50 p-3 rounded text-xs">
                    <div className="font-semibold text-purple-700 mb-2">
                      Underlying Volatility: 30%
                    </div>
                    <div className="space-y-1">
                      <div className="grid grid-cols-3 gap-2 font-semibold">
                        <div>Periods</div>
                        <div>Effective Vol</div>
                        <div>Reduction</div>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div>12</div>
                        <div>18.4%</div>
                        <div>-38.7%</div>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div>52</div>
                        <div>17.5%</div>
                        <div>-41.7%</div>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div>252</div>
                        <div>17.3%</div>
                        <div>-42.3%</div>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div>∞</div>
                        <div>17.3%</div>
                        <div>-42.3%</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50 p-3 rounded text-xs border border-amber-200">
                    <div className="font-semibold text-amber-700 mb-1">
                      Pricing Impact:
                    </div>
                    <div className="text-amber-600">
                      42% volatility reduction typically translates to 15-30%
                      lower option premiums compared to vanilla options
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Methods Comparison */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 p-6 rounded-xl">
            <h4 className="font-bold text-blue-800 text-xl mb-6 text-center">
              Asian Option Pricing Methods
            </h4>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-lg border border-blue-200">
                <h5 className="font-bold text-blue-700 mb-4 text-center">
                  🎲 Monte Carlo
                </h5>

                <div className="space-y-3">
                  <div className="bg-blue-50 p-3 rounded text-center">
                    <div className="text-lg font-bold text-blue-600">
                      Most Accurate
                    </div>
                    <div className="text-xs text-blue-500">Gold Standard</div>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="bg-gray-50 p-2 rounded">
                      <div className="font-semibold text-blue-700">Method:</div>
                      <div className="text-blue-600">
                        Simulate thousands of price paths, calculate average for
                        each path
                      </div>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <div className="font-semibold text-blue-700">
                        Advantages:
                      </div>
                      <ul className="text-blue-600 mt-1 space-y-1">
                        <li>• Handles any averaging method</li>
                        <li>• Works with barriers, caps</li>
                        <li>• Most flexible approach</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <div className="font-semibold text-blue-700">
                        Limitations:
                      </div>
                      <ul className="text-blue-600 mt-1 space-y-1">
                        <li>• Computationally intensive</li>
                        <li>• Convergence can be slow</li>
                        <li>• Not real-time pricing</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-blue-200">
                <h5 className="font-bold text-blue-700 mb-4 text-center">
                  📐 Analytical Approximations
                </h5>

                <div className="space-y-3">
                  <div className="bg-blue-50 p-3 rounded text-center">
                    <div className="text-lg font-bold text-blue-600">
                      Fastest
                    </div>
                    <div className="text-xs text-blue-500">
                      Real-time Pricing
                    </div>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="bg-gray-50 p-2 rounded">
                      <div className="font-semibold text-blue-700">
                        Methods:
                      </div>
                      <div className="text-blue-600">
                        Turnbull-Wakeman, Levy, Kemna-Vorst approximations
                      </div>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <div className="font-semibold text-blue-700">
                        Advantages:
                      </div>
                      <ul className="text-blue-600 mt-1 space-y-1">
                        <li>• Instant pricing</li>
                        <li>• Easy to implement</li>
                        <li>• Good for market making</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <div className="font-semibold text-blue-700">
                        Limitations:
                      </div>
                      <ul className="text-blue-600 mt-1 space-y-1">
                        <li>• 1-3% pricing errors</li>
                        <li>• Only arithmetic averaging</li>
                        <li>• Limited exotic features</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-blue-200">
                <h5 className="font-bold text-blue-700 mb-4 text-center">
                  🌳 PDE Methods
                </h5>

                <div className="space-y-3">
                  <div className="bg-blue-50 p-3 rounded text-center">
                    <div className="text-lg font-bold text-blue-600">
                      Balanced
                    </div>
                    <div className="text-xs text-blue-500">Accurate & Fast</div>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="bg-gray-50 p-2 rounded">
                      <div className="font-semibold text-blue-700">Method:</div>
                      <div className="text-blue-600">
                        Finite difference solution of augmented PDE system
                      </div>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <div className="font-semibold text-blue-700">
                        Advantages:
                      </div>
                      <ul className="text-blue-600 mt-1 space-y-1">
                        <li>• High accuracy</li>
                        <li>• Greeks available</li>
                        <li>• Reasonable speed</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <div className="font-semibold text-blue-700">
                        Limitations:
                      </div>
                      <ul className="text-blue-600 mt-1 space-y-1">
                        <li>• Complex implementation</li>
                        <li>• Memory intensive</li>
                        <li>• Curse of dimensionality</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cost Comparison Analysis */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 p-6 rounded-xl">
            <h4 className="font-bold text-green-800 text-xl mb-6 text-center">
              Asian vs Vanilla Pricing Comparison
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg border border-green-200">
                <h5 className="font-bold text-green-700 mb-4">
                  💰 Premium Savings Analysis
                </h5>

                <div className="space-y-3">
                  <div className="bg-green-50 p-3 rounded">
                    <div className="font-semibold text-green-700 text-sm mb-2">
                      Typical Cost Reductions:
                    </div>
                    <div className="text-green-600 text-xs space-y-1">
                      <div>• ATM options: 15-25% cheaper</div>
                      <div>• OTM options: 20-35% cheaper</div>
                      <div>• ITM options: 10-20% cheaper</div>
                      <div>• High volatility assets: Up to 40% cheaper</div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-3 rounded text-xs">
                    <div className="font-semibold text-gray-700 mb-1">
                      Market Example:
                    </div>
                    <div className="text-gray-600">
                      Crude oil 3-month ATM call:
                      <br />• Vanilla: $4.50/barrel
                      <br />• Asian: $3.20/barrel
                      <br />• Savings: 29%
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-green-200">
                <h5 className="font-bold text-green-700 mb-4">
                  📊 Factors Affecting Discount
                </h5>

                <div className="space-y-3">
                  <div className="bg-green-50 p-3 rounded text-xs">
                    <div className="font-semibold text-green-700 mb-2">
                      Larger Discounts When:
                    </div>
                    <ul className="text-green-600 space-y-1">
                      <li>• Higher underlying volatility</li>
                      <li>• More averaging periods</li>
                      <li>• Longer time to expiration</li>
                      <li>• ATM or slightly OTM</li>
                      <li>• Arithmetic vs geometric averaging</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-3 rounded text-xs">
                    <div className="font-semibold text-gray-700 mb-1">
                      Smaller Discounts When:
                    </div>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Deep ITM or OTM options</li>
                      <li>• Low volatility environments</li>
                      <li>• Few averaging observations</li>
                      <li>• Short time to expiration</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Numerical Pricing Example */}
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border-2 border-cyan-200 p-6 rounded-xl">
            <h4 className="font-bold text-cyan-800 text-xl mb-6 text-center">
              Detailed Pricing Example
            </h4>

            <div className="bg-white p-6 rounded-lg border border-cyan-200">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-cyan-700 mb-4">
                    Market Parameters
                  </h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Underlying Price (S₀):</span>
                      <span className="font-mono">$100.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Strike Price (K):</span>
                      <span className="font-mono">$100.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Time to Expiration (T):</span>
                      <span className="font-mono">90 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Risk-free Rate (r):</span>
                      <span className="font-mono">5.00%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Volatility (σ):</span>
                      <span className="font-mono">25.00%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Averaging Frequency:</span>
                      <span className="font-mono">Daily</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Dividend Yield (q):</span>
                      <span className="font-mono">0.00%</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold text-cyan-700 mb-4">
                    Pricing Results
                  </h5>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-3 rounded">
                      <div className="text-center">
                        <div className="font-semibold text-blue-700">
                          Vanilla Call (Black-Scholes)
                        </div>
                        <div className="text-2xl font-bold text-blue-600">
                          $6.04
                        </div>
                      </div>
                    </div>

                    <div className="bg-purple-50 p-3 rounded">
                      <div className="text-center">
                        <div className="font-semibold text-purple-700">
                          Asian Call (Monte Carlo)
                        </div>
                        <div className="text-2xl font-bold text-purple-600">
                          $4.38
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 p-3 rounded border-2 border-green-300">
                      <div className="text-center">
                        <div className="font-semibold text-green-700">
                          Cost Savings
                        </div>
                        <div className="text-xl font-bold text-green-600">
                          $1.66 (27.5%)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-3 rounded text-xs">
                  <div className="font-semibold text-gray-700 mb-1">
                    Effective Volatility:
                  </div>
                  <div className="text-gray-600">
                    25% → 14.4% (42% reduction)
                  </div>
                </div>
                <div className="bg-gray-50 p-3 rounded text-xs">
                  <div className="font-semibold text-gray-700 mb-1">
                    Greeks Comparison:
                  </div>
                  <div className="text-gray-600">
                    Delta: 0.58 → 0.42
                    <br />
                    Vega: 0.24 → 0.15
                  </div>
                </div>
                <div className="bg-gray-50 p-3 rounded text-xs">
                  <div className="font-semibold text-gray-700 mb-1">
                    Monte Carlo Details:
                  </div>
                  <div className="text-gray-600">
                    1M simulations
                    <br />
                    Standard error: ±$0.02
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Challenges */}
          <div className="bg-gradient-to-r from-slate-50 to-gray-50 border-2 border-gray-200 p-6 rounded-xl">
            <h4 className="font-bold text-gray-800 text-xl mb-6">
              Practical Pricing Challenges
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h5 className="font-semibold text-gray-700 mb-2">
                    🔄 Path Dependency Complexity
                  </h5>
                  <p className="text-gray-600 text-sm mb-2">
                    Unlike vanilla options, Asian options require tracking the
                    entire price history, making real-time pricing
                    computationally intensive.
                  </p>
                  <div className="bg-gray-50 p-2 rounded text-xs">
                    <strong>Solution:</strong> Pre-computed grids and
                    approximation methods for market making
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h5 className="font-semibond text-gray-700 mb-2">
                    📊 Model Risk
                  </h5>
                  <p className="text-gray-600 text-sm mb-2">
                    Different pricing methods can yield 2-5% price differences,
                    requiring careful model selection and validation.
                  </p>
                  <div className="bg-gray-50 p-2 rounded text-xs">
                    <strong>Best Practice:</strong> Use Monte Carlo as
                    benchmark, approximations for speed
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h5 className="font-semibold text-gray-700 mb-2">
                    ⏰ Averaging Period Effects
                  </h5>
                  <p className="text-gray-600 text-sm mb-2">
                    Options partially through their averaging period require
                    complex adjustments to account for observed prices.
                  </p>
                  <div className="bg-gray-50 p-2 rounded text-xs">
                    <strong>Challenge:</strong> Current average must be
                    incorporated into pricing models
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h5 className="font-semibold text-gray-700 mb-2">
                    🎯 Hedging Complexity
                  </h5>
                  <p className="text-gray-600 text-sm mb-2">
                    Dynamic hedging requires frequent rebalancing due to
                    path-dependent Greeks and changing effective volatility.
                  </p>
                  <div className="bg-gray-50 p-2 rounded text-xs">
                    <strong>Impact:</strong> Higher transaction costs but more
                    stable hedge ratios
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
                    💡 Cost Efficiency
                  </h5>
                  <p className="text-emerald-600 text-sm">
                    Asian options typically cost 15-30% less than vanilla
                    options due to volatility reduction from averaging, making
                    them attractive for cost-conscious hedging strategies.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-emerald-200">
                  <h5 className="font-semibold text-emerald-700 mb-2">
                    🔬 Pricing Precision
                  </h5>
                  <p className="text-emerald-600 text-sm">
                    Monte Carlo simulation remains the gold standard for
                    accuracy, while analytical approximations provide speed for
                    market making at the cost of 1-3% pricing errors.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-emerald-200">
                  <h5 className="font-semibold text-emerald-700 mb-2">
                    📈 Greek Advantages
                  </h5>
                  <p className="text-emerald-600 text-sm">
                    Lower gamma and vega make Asian options easier to hedge
                    dynamically, with more stable risk parameters and reduced
                    sensitivity to volatility changes.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-emerald-200">
                  <h5 className="font-semibold text-emerald-700 mb-2">
                    ⚡ Computational Trade-offs
                  </h5>
                  <p className="text-emerald-600 text-sm">
                    The path-dependent nature requires more sophisticated
                    pricing infrastructure but enables more precise risk
                    management for continuous exposures.
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
              Asian options excel in markets where continuous exposure needs
              hedging and price manipulation is a concern. Their averaging
              mechanism makes them particularly valuable in commodity markets,
              currency hedging, and structured products where smooth outcomes
              are preferred over maximum upside.
            </p>
          </div>

          {/* Market Dominance */}
          <div className="bg-gradient-to-r from-purple-50 to-violet-50 border-2 border-purple-200 p-6 rounded-xl">
            <h4 className="font-bold text-purple-800 text-xl mb-6 text-center">
              Asian Options Market Dominance
            </h4>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-lg border border-purple-200">
                <h5 className="font-bold text-purple-700 mb-4 text-center">
                  🛢️ Commodity Markets
                </h5>
                <div className="space-y-3">
                  <div className="bg-purple-50 p-3 rounded text-center">
                    <div className="text-lg font-bold text-purple-600">
                      Dominant
                    </div>
                    <div className="text-xs text-purple-500">
                      $50B+ Annually
                    </div>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="font-semibold text-purple-700">
                      Major Markets:
                    </div>
                    <ul className="text-purple-600 space-y-1">
                      <li>• Crude oil and refined products</li>
                      <li>• Natural gas and LNG</li>
                      <li>• Precious metals (gold, silver)</li>
                      <li>• Base metals and agriculture</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-2 rounded">
                    <div className="font-semibold text-gray-700 text-xs">
                      Why Asian?
                    </div>
                    <div className="text-gray-600 text-xs">
                      Matches continuous production patterns and reduces
                      manipulation risk
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-purple-200">
                <h5 className="font-bold text-orange-700 mb-4 text-center">
                  💱 Currency Markets
                </h5>
                <div className="space-y-3">
                  <div className="bg-orange-50 p-3 rounded text-center">
                    <div className="text-lg font-bold text-orange-600">
                      Growing
                    </div>
                    <div className="text-xs text-orange-500">
                      Corporate Focus
                    </div>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="font-semibold text-orange-700">
                      Applications:
                    </div>
                    <ul className="text-orange-600 space-y-1">
                      <li>• Multinational cash flow hedging</li>
                      <li>• Export/import protection</li>
                      <li>• Tourism revenue smoothing</li>
                      <li>• Supply chain FX management</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-2 rounded">
                    <div className="font-semibold text-gray-700 text-xs">
                      Advantage:
                    </div>
                    <div className="text-gray-600 text-xs">
                      Matches regular business cash flows better than spot
                      hedging
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-purple-200">
                <h5 className="font-bold text-blue-700 mb-4 text-center">
                  🏦 Structured Products
                </h5>
                <div className="space-y-3">
                  <div className="bg-blue-50 p-3 rounded text-center">
                    <div className="text-lg font-bold text-blue-600">Niche</div>
                    <div className="text-xs text-blue-500">Institutional</div>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="font-semibold text-blue-700">Products:</div>
                    <ul className="text-blue-600 space-y-1">
                      <li>• Capital-protected notes</li>
                      <li>• Commodity-linked bonds</li>
                      <li>• Barrier options with averaging</li>
                      <li>• Weather derivatives</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-2 rounded">
                    <div className="font-semibold text-gray-700 text-xs">
                      Appeal:
                    </div>
                    <div className="text-gray-600 text-xs">
                      Smoother returns and lower volatility for investors
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Asset Class Breakdown */}
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border-2 border-cyan-200 p-6 rounded-xl">
            <h4 className="font-bold text-cyan-800 text-xl mb-6 text-center">
              Asian Options by Asset Class
            </h4>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
                <thead className="bg-gradient-to-r from-cyan-100 to-blue-100">
                  <tr>
                    <th className="border border-gray-300 p-4 text-left font-bold text-gray-800">
                      Asset Class
                    </th>
                    <th className="border border-gray-300 p-4 text-center font-bold text-purple-600">
                      Asian Usage
                    </th>
                    <th className="border border-gray-300 p-4 text-center font-bold text-green-600">
                      Market Activity
                    </th>
                    <th className="border border-gray-300 p-4 text-center font-bold text-orange-600">
                      Cost Advantage
                    </th>
                    <th className="border border-gray-300 p-4 text-left font-bold text-blue-600">
                      Primary Driver
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-4 font-semibold">
                      Energy Commodities
                    </td>
                    <td className="border border-gray-300 p-4 text-center text-purple-600 font-bold">
                      Very High
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      High Volume
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      20-35% savings
                    </td>
                    <td className="border border-gray-300 p-4 text-sm">
                      Continuous production hedging
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-gray-25">
                    <td className="border border-gray-300 p-4 font-semibold">
                      Precious Metals
                    </td>
                    <td className="border border-gray-300 p-4 text-center text-purple-600 font-bold">
                      High
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      Moderate Volume
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      15-25% savings
                    </td>
                    <td className="border border-gray-300 p-4 text-sm">
                      Mining revenue protection
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-4 font-semibold">
                      Agricultural Products
                    </td>
                    <td className="border border-gray-300 p-4 text-center text-purple-600">
                      Moderate
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      Seasonal Volume
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      25-40% savings
                    </td>
                    <td className="border border-gray-300 p-4 text-sm">
                      Price smoothing
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-gray-25">
                    <td className="border border-gray-300 p-4 font-semibold">
                      Currency Pairs
                    </td>
                    <td className="border border-gray-300 p-4 text-center text-purple-600">
                      Growing
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      Moderate Volume
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      10-20% savings
                    </td>
                    <td className="border border-gray-300 p-4 text-sm">
                      Cash flow hedging
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-4 font-semibold">
                      Equity Indices
                    </td>
                    <td className="border border-gray-300 p-4 text-center text-purple-600">
                      Limited
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      Low Volume
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      15-25% savings
                    </td>
                    <td className="border border-gray-300 p-4 text-sm">
                      Structured products
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
                🏭 Corporate Applications
              </h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h5 className="font-semibold text-green-700 mb-2">
                    Energy Sector Hedging
                  </h5>
                  <p className="text-green-600 text-sm mb-2">
                    Airlines, refineries, and producers hedge fuel costs and
                    revenues over quarters
                  </p>
                  <ul className="text-gray-600 text-xs space-y-1">
                    <li>• Airlines hedging jet fuel costs</li>
                    <li>• Oil companies securing production prices</li>
                    <li>• Utilities managing natural gas purchases</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h5 className="font-semibold text-green-700 mb-2">
                    Manufacturing Cost Protection
                  </h5>
                  <p className="text-green-600 text-sm mb-2">
                    Industrial companies hedge raw material costs throughout
                    production cycles
                  </p>
                  <ul className="text-gray-600 text-xs space-y-1">
                    <li>• Auto makers hedging steel/aluminum</li>
                    <li>• Food processors hedging commodities</li>
                    <li>• Chemical companies hedging feedstock</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h5 className="font-semibold text-green-700 mb-2">
                    Currency Cash Flow Hedging
                  </h5>
                  <p className="text-green-600 text-sm mb-2">
                    Multinationals hedge regular foreign exchange exposures
                  </p>
                  <ul className="text-gray-600 text-xs space-y-1">
                    <li>• Export revenue smoothing</li>
                    <li>• Supply chain cost management</li>
                    <li>• Tourism operators (seasonal flows)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200 p-6 rounded-xl">
              <h4 className="font-bold text-orange-800 text-xl mb-4">
                🏦 Institutional Strategies
              </h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-orange-200">
                  <h5 className="font-semibold text-orange-700 mb-2">
                    Investment Bank Products
                  </h5>
                  <p className="text-orange-600 text-sm mb-2">
                    Create structured products and provide corporate hedging
                    solutions
                  </p>
                  <ul className="text-gray-600 text-xs space-y-1">
                    <li>• Commodity-linked certificates</li>
                    <li>• Capital-protected notes</li>
                    <li>• Corporate hedging programs</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-orange-200">
                  <h5 className="font-semibold text-orange-700 mb-2">
                    Asset Manager Overlays
                  </h5>
                  <p className="text-orange-600 text-sm mb-2">
                    Portfolio managers use Asian options for cost-effective
                    exposure
                  </p>
                  <ul className="text-gray-600 text-xs space-y-1">
                    <li>• Commodity fund overlays</li>
                    <li>• Currency hedged strategies</li>
                    <li>• Low-volatility equity products</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-orange-200">
                  <h5 className="font-semibold text-orange-700 mb-2">
                    Hedge Fund Strategies
                  </h5>
                  <p className="text-orange-600 text-sm mb-2">
                    Quantitative strategies exploiting Asian option
                    characteristics
                  </p>
                  <ul className="text-gray-600 text-xs space-y-1">
                    <li>• Volatility arbitrage</li>
                    <li>• Commodity momentum strategies</li>
                    <li>• Cross-asset correlation plays</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Industry Case Studies */}
          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-200 p-6 rounded-xl">
            <h4 className="font-bold text-amber-800 text-xl mb-6">
              Industry-Specific Use Cases
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-amber-200">
                  <h5 className="font-semibold text-amber-700 mb-2">
                    ✈️ Airline Industry
                  </h5>
                  <ul className="text-amber-600 text-sm space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>
                        <strong>Jet Fuel Hedging:</strong> Asian options on jet
                        fuel with monthly averaging to match consumption
                        patterns
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>
                        <strong>Cost Savings:</strong> 25-30% premium reduction
                        vs vanilla options enables larger hedge ratios
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>
                        <strong>Risk Management:</strong> Protection from
                        expiration manipulation by oil traders
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-amber-200">
                  <h5 className="font-semibold text-amber-700 mb-2">
                    🥇 Mining Companies
                  </h5>
                  <ul className="text-amber-600 text-sm space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>
                        <strong>Revenue Protection:</strong> Asian puts on gold,
                        copper, and other metals with daily averaging
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>
                        <strong>Production Matching:</strong> Hedge ratios
                        aligned with continuous production schedules
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>
                        <strong>Financing Benefits:</strong> Reduced earnings
                        volatility improves credit ratings and covenant
                        compliance
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-amber-200">
                  <h5 className="font-semibold text-amber-700 mb-2">
                    🏭 Manufacturing Sector
                  </h5>
                  <ul className="text-amber-600 text-sm space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>
                        <strong>Raw Material Hedging:</strong> Asian calls on
                        steel, aluminum, and copper for input cost management
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>
                        <strong>FX Exposure:</strong> Asian options on EUR/USD,
                        USD/JPY for multinational operations
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>
                        <strong>Supply Chain:</strong> Regular purchasing
                        patterns matched with averaging periods
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
                        <strong>Structured Products:</strong> Capital-protected
                        notes with commodity or FX Asian performance
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>
                        <strong>Retail Appeal:</strong> Smoother return profiles
                        attract conservative investors
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>
                        <strong>Risk Management:</strong> Lower volatility
                        reduces capital requirements for issuers
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Market Evolution */}
          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border-2 border-teal-200 p-6 rounded-xl">
            <h4 className="font-bold text-teal-800 text-xl mb-6">
              Market Evolution & Future Trends
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-teal-200">
                  <h5 className="font-semibold text-teal-700 mb-2">
                    📈 Emerging Applications
                  </h5>
                  <ul className="text-teal-600 text-sm space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-teal-500 mt-1">•</span>
                      <span>
                        <strong>ESG Commodities:</strong> Asian options on
                        carbon credits and renewable energy certificates
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-teal-500 mt-1">•</span>
                      <span>
                        <strong>Cryptocurrency:</strong> Bitcoin and Ethereum
                        Asian options to reduce manipulation risk
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-teal-500 mt-1">•</span>
                      <span>
                        <strong>Climate Risk:</strong> Weather derivatives with
                        temperature and precipitation averaging
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-teal-200">
                  <h5 className="font-semibold text-teal-700 mb-2">
                    🚀 Technology Drivers
                  </h5>
                  <ul className="text-teal-600 text-sm space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-teal-500 mt-1">•</span>
                      <span>
                        <strong>Real-time Pricing:</strong> GPU acceleration
                        enabling live market making for Asian options
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-teal-500 mt-1">•</span>
                      <span>
                        <strong>Smart Contracts:</strong> Blockchain-based Asian
                        options with automated averaging
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-teal-500 mt-1">•</span>
                      <span>
                        <strong>Alternative Data:</strong> Satellite and IoT
                        data for commodity production averaging
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
                Asian options are positioned for growth as markets seek
                alternatives to traditional hedging. The rise of ESG investing,
                cryptocurrency adoption, and supply chain transparency will
                drive demand for path-dependent derivatives that provide
                smoother, more predictable outcomes. Expect innovations in
                climate risk hedging, DeFi protocols with built-in averaging,
                and AI-optimized strategies that leverage Asian options' unique
                characteristics.
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
              Asian options offer unique advantages through their averaging
              mechanism, including significant cost savings and manipulation
              protection, but sacrifice maximum upside potential and add
              complexity. Understanding when these trade-offs favor Asian over
              vanilla options is crucial for effective hedging decisions.
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
                        Significant Cost Savings
                      </h5>
                      <p className="text-green-600 text-sm mb-2">
                        Typically 15-30% cheaper than vanilla options due to
                        reduced effective volatility
                      </p>
                      <div className="bg-green-50 p-2 rounded text-xs">
                        <strong>Example:</strong> Oil hedge costs $3.20 vs $4.50
                        vanilla (29% savings)
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
                          d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-semibold text-green-700 mb-2">
                        Manipulation Protection
                      </h5>
                      <p className="text-green-600 text-sm mb-2">
                        Averaging makes options immune to expiration pinning and
                        artificial price spikes
                      </p>
                      <div className="bg-green-50 p-2 rounded text-xs">
                        <strong>Benefit:</strong> Single price spike can't
                        determine entire payoff
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
                          d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-semibold text-green-700 mb-2">
                        Perfect Hedging Match
                      </h5>
                      <p className="text-green-600 text-sm mb-2">
                        Aligns with continuous business exposures like
                        production or regular cash flows
                      </p>
                      <div className="bg-green-50 p-2 rounded text-xs">
                        <strong>Application:</strong> Matches airline fuel
                        purchases or mining output
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
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-semibold text-green-700 mb-2">
                        Smoother Risk Profile
                      </h5>
                      <p className="text-green-600 text-sm mb-2">
                        Lower gamma and vega create more stable hedging ratios
                        and predictable outcomes
                      </p>
                      <div className="bg-green-50 p-2 rounded text-xs">
                        <strong>Advantage:</strong> Less frequent rebalancing
                        required
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
                        Reduced Maximum Payoff
                      </h5>
                      <p className="text-red-600 text-sm mb-2">
                        Averaging caps upside potential - can't fully benefit
                        from large favorable moves
                      </p>
                      <div className="bg-red-50 p-2 rounded text-xs">
                        <strong>Example:</strong> Stock spikes to $150 but
                        average only $110
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
                        Complex Pricing
                      </h5>
                      <p className="text-red-600 text-sm mb-2">
                        Requires Monte Carlo simulation - no simple analytical
                        formulas available
                      </p>
                      <div className="bg-red-50 p-2 rounded text-xs">
                        <strong>Challenge:</strong> Sophisticated models needed
                        for valuation
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
                        Limited Market Liquidity
                      </h5>
                      <p className="text-red-600 text-sm mb-2">
                        Mainly OTC market with wider spreads and limited
                        standardization
                      </p>
                      <div className="bg-red-50 p-2 rounded text-xs">
                        <strong>Impact:</strong> Higher transaction costs, exit
                        difficulty
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
                        Operational Complexity
                      </h5>
                      <p className="text-red-600 text-sm mb-2">
                        Requires continuous price monitoring and averaging
                        calculations
                      </p>
                      <div className="bg-red-50 p-2 rounded text-xs">
                        <strong>Burden:</strong> Path tracking and settlement
                        complexity
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
                        Model Risk
                      </h5>
                      <p className="text-red-600 text-sm mb-2">
                        Sensitive to averaging methodology and pricing model
                        assumptions
                      </p>
                      <div className="bg-red-50 p-2 rounded text-xs">
                        <strong>Risk:</strong> Different models can yield 2-5%
                        price differences
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
              When to Choose Asian Options
            </h4>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg border border-blue-200">
                <h5 className="font-bold text-green-700 mb-4 text-center">
                  ✅ Choose Asian When:
                </h5>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">1</span>
                    </div>
                    <div>
                      <div className="font-semibold text-green-700 text-sm">
                        Continuous Exposure Hedging
                      </div>
                      <p className="text-green-600 text-xs">
                        Production, consumption, or regular cash flow patterns
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">2</span>
                    </div>
                    <div>
                      <div className="font-semibold text-green-700 text-sm">
                        Cost Sensitivity
                      </div>
                      <p className="text-green-600 text-xs">
                        15-30% premium savings are meaningful for strategy
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">3</span>
                    </div>
                    <div>
                      <div className="font-semibold text-green-700 text-sm">
                        Manipulation Concerns
                      </div>
                      <p className="text-green-600 text-xs">
                        Worried about expiration pinning or artificial spikes
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">4</span>
                    </div>
                    <div>
                      <div className="font-semibold text-green-700 text-sm">
                        Commodity/FX Markets
                      </div>
                      <p className="text-green-600 text-xs">
                        Energy, metals, agriculture, or currency exposures
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">5</span>
                    </div>
                    <div>
                      <div className="font-semibold text-green-700 text-sm">
                        Smooth Outcomes Preferred
                      </div>
                      <p className="text-green-600 text-xs">
                        Value predictability over maximum upside potential
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-blue-200">
                <h5 className="font-bold text-red-700 mb-4 text-center">
                  ❌ Avoid Asian When:
                </h5>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">1</span>
                    </div>
                    <div>
                      <div className="font-semibold text-red-700 text-sm">
                        Maximum Upside Priority
                      </div>
                      <p className="text-red-600 text-xs">
                        Want full participation in large favorable movements
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">2</span>
                    </div>
                    <div>
                      <div className="font-semibold text-red-700 text-sm">
                        Need Liquidity
                      </div>
                      <p className="text-red-600 text-xs">
                        Require ability to trade in/out of positions easily
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">3</span>
                    </div>
                    <div>
                      <div className="font-semibold text-red-700 text-sm">
                        Simple Pricing Required
                      </div>
                      <p className="text-red-600 text-xs">
                        Need transparent, easily understood valuations
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">4</span>
                    </div>
                    <div>
                      <div className="font-semibold text-red-700 text-sm">
                        Event-Driven Strategies
                      </div>
                      <p className="text-red-600 text-xs">
                        Betting on specific events like earnings or
                        announcements
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">5</span>
                    </div>
                    <div>
                      <div className="font-semibold text-red-700 text-sm">
                        Single-Point Exposure
                      </div>
                      <p className="text-red-600 text-xs">
                        Hedging single events rather than continuous exposure
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Final Decision Matrix */}
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-200 p-6 rounded-xl">
            <h4 className="font-bold text-emerald-800 text-xl mb-6 text-center">
              The Asian Option Decision Matrix
            </h4>

            <div className="bg-white p-6 rounded-lg border border-emerald-200">
              <div className="text-center mb-6">
                <h5 className="font-semibold text-emerald-700 text-lg mb-2">
                  Quick Decision Framework
                </h5>
                <p className="text-emerald-600 text-sm">
                  Use this flowchart to determine if Asian options are right for
                  your situation
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-400">
                  <div className="font-bold text-emerald-700 mb-2">
                    Step 1: Exposure Pattern
                  </div>
                  <p className="text-emerald-600 text-sm">
                    Continuous business exposure (production/consumption)? →{" "}
                    <span className="font-semibold">
                      Asian strongly preferred
                    </span>
                    <br />
                    Single-point or event exposure? →{" "}
                    <span className="font-semibold">
                      Consider vanilla options
                    </span>
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <div className="font-bold text-blue-700 mb-2">
                    Step 2: Cost vs Upside Trade-off
                  </div>
                  <p className="text-blue-600 text-sm">
                    Value cost savings over maximum upside? →{" "}
                    <span className="font-semibold">Asian provides value</span>
                    <br />
                    Maximum upside capture critical? →{" "}
                    <span className="font-semibold">Vanilla may be better</span>
                  </p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                  <div className="font-bold text-purple-700 mb-2">
                    Step 3: Operational Capability
                  </div>
                  <p className="text-purple-600 text-sm">
                    Can handle complex pricing and monitoring? →{" "}
                    <span className="font-semibold">Asian feasible</span>
                    <br />
                    Need simple, liquid instruments? →{" "}
                    <span className="font-semibold">Vanilla preferred</span>
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-lg">
                <div className="text-center">
                  <div className="font-bold text-emerald-700 mb-2">
                    Bottom Line Recommendation
                  </div>
                  <p className="text-emerald-600 text-sm">
                    Asian options excel for continuous exposure hedging where
                    the 15-30% cost savings justify reduced upside
                    participation. They're particularly powerful for commodity
                    producers/consumers and multinational corporations with
                    regular cash flows. The averaging mechanism provides
                    valuable manipulation protection and smoother outcomes, but
                    requires sophisticated pricing and operational capabilities.
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
              <span className="text-gray-700">Asian Options</span>
            </nav>

            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  Asian Options
                </h1>
                <p className="text-xl text-gray-600">
                  Master path-dependent derivatives and exotic option structures
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
                <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full font-medium">
                  Advanced
                </span>
                <span>35 min read</span>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50 p-4 mb-8">
            <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
              <span>Lesson Progress</span>
              <span>4 of 8 lessons</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full"
                style={{ width: "50%" }}
              ></div>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-6 rounded-xl mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2 pr-4">
                  Experience Asian Option Pricing
                </h3>
                <p className="text-amber-100">
                  Use our OptiPrice calculator to explore Monte Carlo simulation
                  for Asian options.
                </p>
                <p className="text-amber-100 pr-4">
                  Compare arithmetic vs geometric averaging and see
                  path-dependent pricing in action.
                </p>
              </div>
              <button
                onClick={() => navigate("/toolbox/optiprice")}
                className="!bg-white !text-amber-600 px-6 py-3 !rounded-lg !font-semibold !hover:bg-amber-50 !transition-colors flex-shrink-0"
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
                  className={`flex-1 flex items-center justify-center !px-2 !py-2 rounded-md text-sm font-medium transition-all duration-200 ${
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
              onClick={() => navigate("/learning/options/american")}
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
              <span>Back: American Options</span>
            </button>

            <button
              onClick={() => navigate("/learning/options/black-scholes")}
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <span>Next: Black-Scholes Model</span>
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

export default AsianOptions;
