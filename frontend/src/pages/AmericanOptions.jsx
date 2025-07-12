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
  const [activeTab, setActiveTab] = useState("basics");

  const tabContent = {
    basics: {
      title: "Understanding American Options",
      content: (
        <div className="space-y-8">
          <div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              An <strong>American option</strong> grants the holder the right to
              exercise at any time before or on the expiration date. This early
              exercise feature fundamentally changes the option's value and
              creates complex pricing challenges that require sophisticated
              mathematical models.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 p-6 rounded-xl mb-6">
              <div className="flex items-start space-x-3">
                <svg
                  className="w-6 h-6 mt-1 flex-shrink-0 text-blue-600"
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
                  <h4 className="font-bold mb-2 text-blue-800">
                    Core Principle
                  </h4>
                  <p className="text-blue-700">
                    The early exercise feature creates an "embedded option"
                    within the option itself - the right to choose the optimal
                    exercise timing. This makes American options inherently more
                    valuable than their European counterparts.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 border-2 border-emerald-200 p-6 rounded-xl">
              <h4 className="font-bold text-emerald-800 text-xl mb-4 flex items-center">
                <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="w-5 h-5 text-white"
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
                Flexibility Advantages
              </h4>
              <ul className="text-emerald-600 space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-600 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong>Immediate Profit Capture:</strong> Exercise when
                    intrinsic value exceeds time value
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-600 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong>Dividend Strategy:</strong> Capture dividends by
                    exercising calls before ex-dividend
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-600 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong>Risk Management:</strong> Lock in profits during
                    volatile periods
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-600 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong>Interest Rate Benefits:</strong> Optimize cash flows
                    based on rate environment
                  </div>
                </li>
              </ul>
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
                      d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                Pricing Complexity
              </h4>
              <ul className="text-purple-600 space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong>No Closed-Form Solution:</strong> Cannot use
                    Black-Scholes directly
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong>Optimal Stopping Problem:</strong> Requires dynamic
                    programming approaches
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong>Free Boundary:</strong> Exercise boundary moves with
                    market conditions
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong>Path Dependence:</strong> Value depends on possible
                    future scenarios
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 border-2 border-gray-200 p-6 rounded-xl">
            <h4 className="font-bold text-gray-800 text-xl mb-4">
              Market Prevalence
            </h4>
            <p className="text-gray-700 mb-4">
              American-style exercise is the standard for most exchange-traded
              equity options, making up approximately 90% of all options traded.
              Understanding their behavior is crucial for practical options
              trading.
            </p>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                <h5 className="font-semibold text-gray-700 mb-2">
                  Equity Options
                </h5>
                <p className="text-gray-600 text-sm">
                  Individual stocks on major exchanges
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                <h5 className="font-semibold text-gray-700 mb-2">
                  ETF Options
                </h5>
                <p className="text-gray-600 text-sm">Exchange-traded funds</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                <h5 className="font-semibold text-gray-700 mb-2">
                  Some Index Options
                </h5>
                <p className="text-gray-600 text-sm">
                  OEX (S&P 100) and others
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                <h5 className="font-semibold text-gray-700 mb-2">
                  Commodity Options
                </h5>
                <p className="text-gray-600 text-sm">
                  Physical delivery contracts
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    comparison: {
      title: "American vs European: The Critical Differences",
      content: (
        <div className="space-y-8">
          <div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              The distinction between American and European options goes far
              beyond exercise timing. These differences impact pricing, trading
              strategies, risk management, and market dynamics.
            </p>
          </div>

          <div className="overflow-x-auto bg-white rounded-xl border-2 border-gray-200">
            <table className="w-full border-collapse">
              <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                <tr>
                  <th className="border border-gray-300 p-4 text-left font-bold text-gray-800">
                    Characteristic
                  </th>
                  <th className="border border-gray-300 p-4 text-left font-bold text-blue-600">
                    American Options
                  </th>
                  <th className="border border-gray-300 p-4 text-left font-bold text-purple-600">
                    European Options
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-4 font-semibold">
                    Exercise Window
                  </td>
                  <td className="border border-gray-300 p-4">
                    Any time before expiration
                  </td>
                  <td className="border border-gray-300 p-4">
                    Only at expiration date
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-4 font-semibold">
                    Pricing Model
                  </td>
                  <td className="border border-gray-300 p-4">
                    Binomial trees, Monte Carlo, Finite differences
                  </td>
                  <td className="border border-gray-300 p-4">
                    Black-Scholes (closed-form), Binomial trees
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-4 font-semibold">
                    Premium Level
                  </td>
                  <td className="border border-gray-300 p-4">
                    Higher (early exercise premium)
                  </td>
                  <td className="border border-gray-300 p-4">
                    Lower (no early exercise value)
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-4 font-semibold">
                    Dividend Sensitivity
                  </td>
                  <td className="border border-gray-300 p-4">
                    High (early exercise for dividend capture)
                  </td>
                  <td className="border border-gray-300 p-4">
                    Moderate (built into pricing formula)
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-4 font-semibold">
                    Interest Rate Impact
                  </td>
                  <td className="border border-gray-300 p-4">
                    Complex (affects exercise timing)
                  </td>
                  <td className="border border-gray-300 p-4">
                    Straightforward (discount factor only)
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-4 font-semibold">
                    Computational Cost
                  </td>
                  <td className="border border-gray-300 p-4">
                    High (iterative methods required)
                  </td>
                  <td className="border border-gray-300 p-4">
                    Low (direct formula calculation)
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-4 font-semibold">
                    Market Usage
                  </td>
                  <td className="border border-gray-300 p-4">
                    90% of exchange-traded equity options
                  </td>
                  <td className="border border-gray-300 p-4">
                    Most index options, some OTC contracts
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 p-6 rounded-xl">
              <h4 className="font-bold text-blue-800 text-xl mb-4">
                Value Relationship
              </h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h5 className="font-semibold text-blue-700 mb-2">
                    Mathematical Certainty
                  </h5>
                  <div className="text-blue-600 text-center bg-blue-50 p-3 rounded text-lg">
                    <InlineMath math="V_{\text{American}} \geq V_{\text{European}} \geq \text{Intrinsic Value}" />
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h5 className="font-semibold text-blue-700 mb-2">
                    Typical Premium Difference
                  </h5>
                  <p className="text-blue-600 text-sm">
                    Usually 2-5% for at-the-money options, but can be 10-20% for
                    deep ITM options with dividends
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h5 className="font-semibold text-blue-700 mb-2">
                    When Difference is Minimal
                  </h5>
                  <p className="text-blue-600 text-sm">
                    Out-of-the-money options, short time to expiration, low
                    dividend yields
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 border-2 border-purple-200 p-6 rounded-xl">
              <h4 className="font-bold text-purple-800 text-xl mb-4">
                Practical Implications
              </h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h5 className="font-semibold text-purple-700 mb-2">
                    For Option Buyers
                  </h5>
                  <p className="text-purple-600 text-sm">
                    Must actively monitor for optimal exercise opportunities,
                    especially around dividend dates
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h5 className="font-semibold text-purple-700 mb-2">
                    For Option Sellers
                  </h5>
                  <p className="text-purple-600 text-sm">
                    Face assignment risk at any time, requiring continuous delta
                    hedging and risk management
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h5 className="font-semibold text-purple-700 mb-2">
                    For Market Makers
                  </h5>
                  <p className="text-purple-600 text-sm">
                    Need sophisticated pricing models and real-time risk
                    management systems
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    earlyExercise: {
      title: "Mastering Early Exercise Decisions",
      content: (
        <div className="space-y-8">
          <div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              The decision to exercise early involves a fundamental trade-off:
              capturing immediate intrinsic value versus maintaining the
              option's time value and upside potential. This decision requires
              careful analysis of multiple market factors and your investment
              objectives.
            </p>
          </div>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200 p-6 rounded-xl mb-8">
            <h4 className="font-bold text-indigo-800 text-xl mb-4">
              The Early Exercise Decision Framework
            </h4>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg border border-indigo-200">
                <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center mb-3">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <h5 className="font-semibold text-indigo-700 mb-2">
                  Calculate Intrinsic Value
                </h5>
                <p className="text-indigo-600 text-sm">
                  For calls: <InlineMath math="\max(S - K, 0)" />
                  <br />
                  For puts: <InlineMath math="\max(K - S, 0)" />
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-indigo-200">
                <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center mb-3">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <h5 className="font-semibold text-indigo-700 mb-2">
                  Estimate Time Value
                </h5>
                <p className="text-indigo-600 text-sm">
                  Option Market Price - Intrinsic Value = Time Value remaining
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-indigo-200">
                <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center mb-3">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <h5 className="font-semibold text-indigo-700 mb-2">
                  Assess Opportunity Costs
                </h5>
                <p className="text-indigo-600 text-sm">
                  Dividends, interest rates, carrying costs, volatility changes
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-indigo-200">
                <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center mb-3">
                  <span className="text-white text-sm font-bold">4</span>
                </div>
                <h5 className="font-semibold text-indigo-700 mb-2">
                  Make Strategic Decision
                </h5>
                <p className="text-indigo-600 text-sm">
                  Exercise if opportunity benefits exceed time value +
                  transaction costs
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 p-6 rounded-xl">
              <h4 className="font-bold text-green-800 text-xl mb-4 flex items-center">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">C</span>
                </div>
                Call Option Early Exercise
              </h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h5 className="font-semibold text-green-700 mb-2">
                    🎯 Dividend Capture Strategy
                  </h5>
                  <p className="text-green-600 text-sm mb-2">
                    <strong>When:</strong> Just before ex-dividend date
                  </p>
                  <p className="text-green-600 text-sm mb-2">
                    <strong>Condition:</strong> Dividend {">"} Time Value +
                    Interest Cost
                  </p>
                  <p className="text-green-600 text-sm">
                    <strong>Example:</strong> $2 dividend vs $1.50 time value →
                    Exercise profitable
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h5 className="font-semibold text-green-700 mb-2">
                    📈 Deep In-the-Money Scenario
                  </h5>
                  <p className="text-green-600 text-sm mb-2">
                    <strong>When:</strong> Stock price {">>"} Strike price
                  </p>
                  <p className="text-green-600 text-sm mb-2">
                    <strong>Condition:</strong> Delta ≈ 1.0, minimal time value
                  </p>
                  <p className="text-green-600 text-sm">
                    <strong>Benefit:</strong> Convert to stock position, avoid
                    theta decay
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h5 className="font-semibold text-green-700 mb-2">
                    💰 High Interest Rate Environment
                  </h5>
                  <p className="text-green-600 text-sm mb-2">
                    <strong>When:</strong> Risk-free rate {">"} 8-10%
                  </p>
                  <p className="text-green-600 text-sm mb-2">
                    <strong>Logic:</strong> Invest exercise proceeds at high
                    rates
                  </p>
                  <p className="text-green-600 text-sm">
                    <strong>Calculation:</strong> Interest earned {">"} time
                    value + option upside
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-rose-50 border-2 border-red-200 p-6 rounded-xl">
              <h4 className="font-bold text-red-800 text-xl mb-4 flex items-center">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">P</span>
                </div>
                Put Option Early Exercise
              </h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <h5 className="font-semibold text-red-700 mb-2">
                    📉 Deep In-the-Money Scenario
                  </h5>
                  <p className="text-red-600 text-sm mb-2">
                    <strong>When:</strong> Stock price approaches zero
                  </p>
                  <p className="text-red-600 text-sm mb-2">
                    <strong>Condition:</strong> Put value ≈ Strike price,
                    minimal upside
                  </p>
                  <p className="text-red-600 text-sm">
                    <strong>Benefit:</strong> Capture maximum value{" "}
                    <InlineMath math="K" /> immediately
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <h5 className="font-semibold text-red-700 mb-2">
                    🏦 Interest Rate Arbitrage
                  </h5>
                  <p className="text-red-600 text-sm mb-2">
                    <strong>When:</strong> High interest rates available
                  </p>
                  <p className="text-red-600 text-sm mb-2">
                    <strong>Logic:</strong> Receive strike price, invest at
                    risk-free rate
                  </p>
                  <p className="text-red-600 text-sm">
                    <strong>Formula:</strong> If{" "}
                    <InlineMath math="K \cdot e^{rT} - K > \text{Time Value}" />
                    , exercise
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <h5 className="font-semibold text-red-700 mb-2">
                    🛡️ Risk Management
                  </h5>
                  <p className="text-red-600 text-sm mb-2">
                    <strong>When:</strong> Volatility crush expected, earnings
                    over
                  </p>
                  <p className="text-red-600 text-sm mb-2">
                    <strong>Scenario:</strong> Protect against time decay and
                    vega risk
                  </p>
                  <p className="text-red-600 text-sm">
                    <strong>Decision:</strong> Lock in profits when further
                    downside limited
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-2 border-yellow-300 p-6 rounded-xl">
            <h4 className="font-bold text-yellow-800 text-xl mb-4 flex items-center">
              <svg
                className="w-6 h-6 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              Common Early Exercise Mistakes
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold text-yellow-700 mb-2">
                  ❌ Avoid These Errors
                </h5>
                <ul className="text-yellow-600 space-y-1 text-sm">
                  <li>• Exercising out-of-the-money options</li>
                  <li>• Ignoring transaction costs in calculations</li>
                  <li>• Exercising just for psychological satisfaction</li>
                  <li>• Missing ex-dividend dates for call options</li>
                  <li>• Exercising without comparing to market price</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-yellow-700 mb-2">
                  ✅ Best Practices
                </h5>
                <ul className="text-yellow-600 space-y-1 text-sm">
                  <li>• Always compare exercise vs. selling the option</li>
                  <li>• Consider tax implications of exercise</li>
                  <li>• Monitor dividend announcements</li>
                  <li>• Use broker's early exercise calculators</li>
                  <li>• Account for bid-ask spreads in decisions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    valuation: {
      title: "Valuation Methods: From Theory to Practice",
      content: (
        <div className="space-y-8">
          <div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Pricing American options requires sophisticated numerical methods
              because no closed-form solution exists. Each method has unique
              strengths and is suited for different market conditions and
              computational constraints.
            </p>
          </div>

          <div className="bg-gradient-to-r from-slate-50 to-gray-50 border-2 border-gray-200 p-6 rounded-xl mb-8">
            <h4 className="font-bold text-gray-800 text-xl mb-4">
              Why No Closed-Form Solution?
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-gray-700 mb-3">
                  Mathematical Challenge
                </h5>
                <p className="text-gray-600 text-sm mb-3">
                  American options create a "free boundary problem" where the
                  optimal exercise boundary is unknown and must be determined as
                  part of the solution process.
                </p>
                <p className="text-gray-600 text-sm">
                  The Black-Scholes PDE becomes:{" "}
                  <InlineMath math="\max(V, S - K) = V" /> for calls, requiring
                  iterative solution methods.
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-gray-700 mb-3">
                  Optimal Stopping Theory
                </h5>
                <p className="text-gray-600 text-sm mb-3">
                  The problem becomes finding the optimal policy{" "}
                  <InlineMath math="\pi^*(t,S)" /> that maximizes expected
                  payoff across all possible exercise strategies.
                </p>
                <p className="text-gray-600 text-sm">
                  This requires dynamic programming:{" "}
                  <InlineMath math="V(t,S) = \max(\text{intrinsic}, \text{continuation value})" />
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Binomial Trees */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 p-6 rounded-xl">
              <div className="flex justify-between items-start mb-4">
                <h4 className="font-bold text-blue-800 text-2xl flex items-center">
                  <svg
                    className="w-8 h-8 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Binomial Tree Model
                </h4>
                <button
                  onClick={() => navigate("/learning/options/binomial")}
                  className="!bg-blue-600 !hover:bg-blue-700 !text-white px-4 py-2 !rounded-lg text-sm !font-semibold !transition-colors !flex-shrink-0"
                >
                  Learn More →
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h5 className="font-semibold text-blue-700 mb-3">
                    🔧 How It Works
                  </h5>
                  <ul className="text-blue-600 space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Discretize time into N periods (
                      <InlineMath math="\Delta t = T/N" />)
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Stock moves up (u factor) or down (d factor) each period
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Work backward from expiration using risk-neutral
                      probabilities
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      At each node: V = max(intrinsic, discounted continuation)
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-blue-700 mb-3">
                    ⚡ Key Parameters
                  </h5>
                  <div className="bg-white p-4 rounded border border-blue-200 text-sm space-y-2">
                    <div className="text-center">
                      <InlineMath math="u = e^{\sigma\sqrt{\Delta t}}" /> (up
                      factor)
                    </div>
                    <div className="text-center">
                      <InlineMath math="d = \frac{1}{u} = e^{-\sigma\sqrt{\Delta t}}" />{" "}
                      (down factor)
                    </div>
                    <div className="text-center">
                      <InlineMath math="p = \frac{e^{r\Delta t} - d}{u - d}" />{" "}
                      (risk-neutral prob)
                    </div>
                    <div className="text-center text-gray-600">
                      Convergence: Increase N for accuracy
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h5 className="font-semibold text-blue-700 mb-2">
                    ✅ Advantages
                  </h5>
                  <ul className="text-blue-600 space-y-1 text-sm">
                    <li>• Intuitive and transparent methodology</li>
                    <li>• Converges to analytical solution</li>
                    <li>• Shows optimal exercise boundary clearly</li>
                    <li>• Handles dividends naturally</li>
                    <li>• Provides Greeks at each node</li>
                    <li>• Relatively fast computation</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h5 className="font-semibold text-blue-700 mb-2">
                    ⚠️ Limitations
                  </h5>
                  <ul className="text-blue-600 space-y-1 text-sm">
                    <li>• Requires many steps for accuracy (N {">"} 1000)</li>
                    <li>• Oscillating convergence patterns</li>
                    <li>
                      • Memory scales as <InlineMath math="O(N^2)" />
                    </li>
                    <li>• Less efficient for path-dependent options</li>
                    <li>• Discrete approximation artifacts</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 bg-blue-100 p-4 rounded-lg">
                <h5 className="font-semibold text-blue-700 mb-2">
                  🎯 Best Use Cases
                </h5>
                <p className="text-blue-600 text-sm">
                  Standard American options, educational purposes, when you need
                  to visualize the exercise boundary, and for options with
                  discrete dividend payments.
                </p>
              </div>
            </div>

            {/* Monte Carlo */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 p-6 rounded-xl">
              <div className="flex justify-between items-start mb-4">
                <h4 className="font-bold text-green-800 text-2xl flex items-center">
                  <svg
                    className="w-8 h-8 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Monte Carlo Simulation
                </h4>
                <button
                  onClick={() => navigate("/learning/options/monte-carlo")}
                  className="!bg-green-600 !hover:bg-green-700 !text-white px-4 py-2 !rounded-lg !text-sm !font-semibold !transition-colors !flex-shrink-0"
                >
                  Learn More →
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h5 className="font-semibold text-green-700 mb-3">
                    🎲 LSM Algorithm (Longstaff-Schwartz)
                  </h5>
                  <ul className="text-green-600 space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Simulate thousands of price paths using GBM
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Use regression to estimate continuation value
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Compare intrinsic vs continuation at each step
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Update exercise strategy and average payoffs
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-green-700 mb-3">
                    📊 Implementation Details
                  </h5>
                  <div className="bg-white p-3 rounded border border-green-200 text-sm">
                    <p className="mb-2">
                      <strong>Basis Functions:</strong> Powers of S, S², S³,
                      etc.
                    </p>
                    <p className="mb-2">
                      <strong>Regression:</strong> Ordinary least squares
                    </p>
                    <p className="mb-2">
                      <strong>Paths:</strong> 50,000+ for convergence
                    </p>
                    <p>
                      <strong>Time Steps:</strong> Weekly/Daily for accuracy
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h5 className="font-semibold text-green-700 mb-2">
                    ✅ Strengths
                  </h5>
                  <ul className="text-green-600 space-y-1 text-sm">
                    <li>• Handles complex payoff structures</li>
                    <li>• Scales well to high dimensions</li>
                    <li>• Natural variance reduction techniques</li>
                    <li>• Flexible for exotic features</li>
                    <li>• Provides confidence intervals</li>
                    <li>• Parallelizable computation</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h5 className="font-semibold text-green-700 mb-2">
                    ⚠️ Challenges
                  </h5>
                  <ul className="text-green-600 space-y-1 text-sm">
                    <li>• Computationally intensive</li>
                    <li>• Convergence can be slow</li>
                    <li>• Requires careful basis function selection</li>
                    <li>• Statistical noise in results</li>
                    <li>• More complex to implement correctly</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 bg-green-100 p-4 rounded-lg">
                <h5 className="font-semibold text-green-700 mb-2">
                  🎯 Optimal For
                </h5>
                <p className="text-green-600 text-sm">
                  Multi-asset options, path-dependent features, complex exercise
                  conditions, and when you need to price portfolios of options
                  simultaneously. Our OptiPrice calculator implements LSM for
                  American options.
                </p>
              </div>
            </div>

            {/* Finite Difference */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 border-2 border-purple-200 p-6 rounded-xl">
              <h4 className="font-bold text-purple-800 text-2xl mb-4 flex items-center">
                <svg
                  className="w-8 h-8 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Finite Difference Methods
              </h4>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h5 className="font-semibold text-purple-700 mb-3">
                    🔬 PDE Approach
                  </h5>
                  <ul className="text-purple-600 space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Solve Black-Scholes PDE on discrete grid
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Handle free boundary with penalty methods
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Implicit/explicit time stepping schemes
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Adaptive mesh refinement for accuracy
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-purple-700 mb-3">
                    ⚙️ Implementation
                  </h5>
                  <div className="bg-white p-3 rounded border border-purple-200 text-sm">
                    <p className="mb-2">
                      <strong>Schemes:</strong> Crank-Nicolson, PSOR
                    </p>
                    <p className="mb-2">
                      <strong>Boundary:</strong> Dirichlet/Neumann conditions
                    </p>
                    <p className="mb-2">
                      <strong>Grid:</strong> Non-uniform, log-normal spacing
                    </p>
                    <p>
                      <strong>Stability:</strong> CFL condition compliance
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h5 className="font-semibold text-purple-700 mb-2">
                    ✅ Advantages
                  </h5>
                  <ul className="text-purple-600 space-y-1 text-sm">
                    <li>• High accuracy with fine grids</li>
                    <li>• Provides full surface of option values</li>
                    <li>• Greeks computed directly</li>
                    <li>• Deterministic results (no randomness)</li>
                    <li>• Well-established mathematical theory</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h5 className="font-semibold text-purple-700 mb-2">
                    ⚠️ Complexity
                  </h5>
                  <ul className="text-purple-600 space-y-1 text-sm">
                    <li>• Requires PDE expertise to implement</li>
                    <li>• Curse of dimensionality for multi-asset</li>
                    <li>• Numerical stability concerns</li>
                    <li>• Boundary condition specification critical</li>
                    <li>• Memory intensive for 3D problems</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 bg-purple-100 p-4 rounded-lg">
                <h5 className="font-semibold text-purple-700 mb-2">
                  🎯 Professional Usage
                </h5>
                <p className="text-purple-600 text-sm">
                  Investment banks, quant funds for high-precision pricing,
                  real-time Greeks computation, and when you need the complete
                  option surface for risk management and hedging strategies.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border-2 border-indigo-200 p-6 rounded-xl">
            <h4 className="font-bold text-indigo-800 text-xl mb-4">
              Method Selection Guide
            </h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-indigo-200">
                <h5 className="font-semibold text-indigo-700 mb-2">
                  🎓 Learning & Research
                </h5>
                <p className="text-indigo-600 text-sm mb-2">
                  <strong>Use:</strong> Binomial Trees
                </p>
                <p className="text-indigo-600 text-sm">
                  Clear visualization of exercise decisions and convergence
                  behavior
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-indigo-200">
                <h5 className="font-semibold text-indigo-700 mb-2">
                  🚀 Complex Products
                </h5>
                <p className="text-indigo-600 text-sm mb-2">
                  <strong>Use:</strong> Monte Carlo
                </p>
                <p className="text-indigo-600 text-sm">
                  Path-dependent options, multiple underlyings, exotic features
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-indigo-200">
                <h5 className="font-semibold text-indigo-700 mb-2">
                  ⚡ Production Trading
                </h5>
                <p className="text-indigo-600 text-sm mb-2">
                  <strong>Use:</strong> Finite Difference
                </p>
                <p className="text-indigo-600 text-sm">
                  High-frequency trading, real-time Greeks, risk management
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    practical: {
      title: "Practical Examples & Trading Strategies",
      content: (
        <div className="space-y-8">
          <div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Understanding American options theory is just the beginning. Here
              are real-world scenarios and strategies that demonstrate when and
              how to leverage the early exercise feature for optimal outcomes.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 p-6 rounded-xl mb-8">
            <h4 className="font-bold text-blue-800 text-xl mb-4">
              🎯 Real-World Example: Apple (AAPL) Dividend Play
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h5 className="font-semibold text-blue-700 mb-3">
                  Scenario Setup
                </h5>
                <ul className="text-blue-600 space-y-2 text-sm">
                  <li>
                    <strong>Position:</strong> Long AAPL $180 calls, expires in
                    3 weeks
                  </li>
                  <li>
                    <strong>Current Price:</strong> AAPL at $195
                  </li>
                  <li>
                    <strong>Dividend:</strong> $0.95 ex-dividend in 2 days
                  </li>
                  <li>
                    <strong>Option Price:</strong> $16.50 (intrinsic: $15.00)
                  </li>
                  <li>
                    <strong>Time Value:</strong> $1.50 remaining
                  </li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h5 className="font-semibold text-blue-700 mb-3">
                  Decision Analysis
                </h5>
                <ul className="text-blue-600 space-y-2 text-sm">
                  <li>
                    <strong>Dividend:</strong> $0.95 {">"} Time Value $1.50? No
                  </li>
                  <li>
                    <strong>But:</strong> Stock typically drops by dividend
                    amount
                  </li>
                  <li>
                    <strong>Expected drop:</strong> ~$0.95 on ex-date
                  </li>
                  <li>
                    <strong>Option impact:</strong> Delta of 0.85 means ~$0.81
                    loss
                  </li>
                  <li>
                    <strong>Decision:</strong> Exercise to capture dividend
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-4 bg-blue-100 p-4 rounded-lg">
              <p className="text-blue-700 text-sm">
                <strong>Result:</strong> By exercising, you receive the $0.95
                dividend, avoid the $0.81 option value loss from the stock drop,
                and maintain upside exposure through stock ownership.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-gray-800 text-2xl">
              Strategic Applications
            </h4>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 p-6 rounded-xl">
                <h5 className="font-bold text-green-800 text-xl mb-4">
                  📈 Covered Call Management
                </h5>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-green-200">
                    <h6 className="font-semibold text-green-700 mb-2">
                      Strategy Overview
                    </h6>
                    <p className="text-green-600 text-sm">
                      When you've sold covered calls and the stock rallies
                      significantly, you face assignment risk that can be
                      managed proactively.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-green-200">
                    <h6 className="font-semibold text-green-700 mb-2">
                      Management Tactics
                    </h6>
                    <ul className="text-green-600 text-sm space-y-1">
                      <li>• Buy back calls when 80% of max profit achieved</li>
                      <li>• Roll up and out to higher strikes/later dates</li>
                      <li>
                        • Accept assignment if stock fundamentally overvalued
                      </li>
                      <li>• Monitor early exercise probability daily</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-violet-50 border-2 border-purple-200 p-6 rounded-xl">
                <h5 className="font-bold text-purple-800 text-xl mb-4">
                  🛡️ Protective Put Optimization
                </h5>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-purple-200">
                    <h6 className="font-semibold text-purple-700 mb-2">
                      Dynamic Hedging
                    </h6>
                    <p className="text-purple-600 text-sm">
                      Use American puts' early exercise feature to actively
                      manage downside protection as market conditions change.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-purple-200">
                    <h6 className="font-semibold text-purple-700 mb-2">
                      Tactical Decisions
                    </h6>
                    <ul className="text-purple-600 text-sm space-y-1">
                      <li>
                        • Exercise when put is deep ITM with minimal time value
                      </li>
                      <li>• Roll to new strikes as stock price changes</li>
                      <li>
                        • Consider cost vs benefit of maintaining protection
                      </li>
                      <li>• Time exercises around earnings/events</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-2 border-yellow-300 p-6 rounded-xl">
            <h4 className="font-bold text-yellow-800 text-xl mb-4">
              ⚡ High-Frequency Considerations
            </h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-yellow-200">
                <h5 className="font-semibold text-yellow-700 mb-2">
                  Assignment Risk
                </h5>
                <p className="text-yellow-600 text-sm">
                  Short option positions can be assigned at any time. Monitor
                  positions with intrinsic value $0.05 closely, especially
                  before dividends.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-yellow-200">
                <h5 className="font-semibold text-yellow-700 mb-2">Pin Risk</h5>
                <p className="text-yellow-600 text-sm">
                  At expiration, stock prices near strike prices create
                  uncertainty about exercise. Plan exit strategies in advance.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-yellow-200">
                <h5 className="font-semibold text-yellow-700 mb-2">
                  Margin Impact
                </h5>
                <p className="text-yellow-600 text-sm">
                  Early exercise affects margin requirements immediately. Ensure
                  adequate capital for potential stock positions from
                  assignments.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-50 to-rose-50 border-2 border-red-200 p-6 rounded-xl">
            <h4 className="font-bold text-red-800 text-xl mb-4">
              🎲 Advanced Strategy: American Straddles
            </h4>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-red-700 mb-3">
                    Strategy Mechanics
                  </h5>
                  <p className="text-red-600 text-sm mb-3">
                    Long American straddles (call + put at same strike) benefit
                    from the early exercise optionality on both sides,
                    especially around dividend dates and earnings.
                  </p>
                  <ul className="text-red-600 text-sm space-y-1">
                    <li>• Early exercise the call for dividend capture</li>
                    <li>• Maintain put protection during volatility</li>
                    <li>• Exercise put side if stock collapses quickly</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-red-700 mb-3">
                    Timing Considerations
                  </h5>
                  <div className="bg-white p-3 rounded border border-red-200 text-sm">
                    <p className="mb-2">
                      <strong>Pre-earnings:</strong> High implied volatility
                    </p>
                    <p className="mb-2">
                      <strong>Post-earnings:</strong> Volatility crush risk
                    </p>
                    <p className="mb-2">
                      <strong>Ex-dividend:</strong> Call exercise opportunity
                    </p>
                    <p>
                      <strong>Time decay:</strong> Monitor theta daily
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 border-2 border-gray-200 p-6 rounded-xl">
            <h4 className="font-bold text-gray-800 text-xl mb-4">
              📊 Using OptiPrice for Analysis
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-gray-700 mb-3">
                  Scenario Testing
                </h5>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>
                    • Model dividend capture strategies with different timing
                  </li>
                  <li>
                    • Compare American vs European pricing for same parameters
                  </li>
                  <li>
                    • Visualize early exercise boundaries under various
                    conditions
                  </li>
                  <li>
                    • Test sensitivity to volatility and interest rate changes
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-700 mb-3">
                  Practical Applications
                </h5>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>
                    • Validate broker pricing with independent calculations
                  </li>
                  <li>• Optimize exercise timing with Monte Carlo analysis</li>
                  <li>• Understand Greeks behavior near exercise boundaries</li>
                  <li>
                    • Compare binomial vs Monte Carlo convergence patterns
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  };

  const tabs = [
    { id: "basics", label: "Basics", icon: "🇺🇸" },
    { id: "comparison", label: "vs European", icon: "⚖️" },
    { id: "earlyExercise", label: "Early Exercise", icon: "⏰" },
    { id: "valuation", label: "Valuation", icon: "🧮" },
    { id: "practical", label: "Trading Examples", icon: "📈" },
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
            <div className="flex space-x-1 mb-0">
              {tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`!px-6 !py-3 text-sm !font-bold !transition-all duration-200 border-2 focus:outline-none focus:ring-0 focus:border-gray-300 active:outline-none ${
                    activeTab === tab.id
                      ? `!bg-white !text-gray-700 !border-gray-300 !border-b-white !relative !z-30 !rounded-t-lg !rounded-b-none !sborder-2 !border-t-2 !border-r-2 !border-l-2`
                      : `!bg-gray-100 !text-gray-600 !border-gray-300 !border-b-gray-300 !hover:bg-gray-200 !hover:text-blue-700 !rounded-t-lg !rounded-b-none !border-b-0 !border-t-2 !border-r-2 !border-l-2`
                  }`}
                  style={{ outline: "none", boxShadow: "none" }}
                >
                  <span className="mr-2 text-lg">{tab.icon}</span>
                  <span className="font-semibold">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab Content Container */}
            <div className="relative">
              {/* Gray background - matches content area only */}
              <div
                className="absolute inset-0 bg-gray-100 border-2 border-gray-300 shadow-lg border-t-0 rounded-tr-2xl rounded-b-2xl"
                style={{ zIndex: 5 }}
              ></div>

              {/* White content on top */}
              <div
                className={`bg-white border-2 border-gray-300 p-8 relative z-20 ${
                  activeTab === "basics"
                    ? "rounded-tr-2xl rounded-b-2xl"
                    : "rounded-2xl"
                }`}
                style={{ marginTop: "-2px" }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {tabContent[activeTab].title}
                </h2>
                {tabContent[activeTab].content}
              </div>
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
