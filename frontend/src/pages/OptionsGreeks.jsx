// frontend/src/pages/OptionsGreeks.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import { useAuth } from "../contexts/AuthContext";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const OptionsGreeks = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("overview");

  const tabContent = {
    overview: {
      title: "What Are the Greeks?",
      content: (
        <div className="space-y-8">
          <div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              <strong>The Greeks</strong> are mathematical measures that quantify how sensitive an option's price is to various market factors. Named after Greek letters (Delta, Gamma, Theta, Vega, Rho), they provide traders and risk managers with precise tools to understand, hedge, and profit from options exposure.
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
                  <h4 className="font-bold mb-2">Why Greeks Matter</h4>
                  <p>
                    Without the Greeks, trading options is like flying blind. They transform complex derivatives into manageable risk components, enabling sophisticated strategies like delta-neutral hedging, gamma scalping, and volatility trading.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 p-6 rounded-xl mb-6">
              <h4 className="font-bold text-blue-800 text-xl mb-4">Sample Option: AAPL $150 Call, 30 Days to Expiration</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg border">
                  <div className="text-sm text-gray-600 mb-1">Delta (Δ)</div>
                  <div className="text-2xl font-bold text-blue-600">0.65</div>
                  <div className="text-xs text-gray-500">$0.65 price change per $1 stock move</div>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <div className="text-sm text-gray-600 mb-1">Gamma (Γ)</div>
                  <div className="text-2xl font-bold text-green-600">0.08</div>
                  <div className="text-xs text-gray-500">Delta changes by 0.08 per $1 stock move</div>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <div className="text-sm text-gray-600 mb-1">Theta (Θ)</div>
                  <div className="text-2xl font-bold text-red-600">-0.12</div>
                  <div className="text-xs text-gray-500">Loses $0.12 per day from time decay</div>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <div className="text-sm text-gray-600 mb-1">Vega (ν)</div>
                  <div className="text-2xl font-bold text-purple-600">0.25</div>
                  <div className="text-xs text-gray-500">$0.25 change per 1% vol move</div>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <div className="text-sm text-gray-600 mb-1">Rho (ρ)</div>
                  <div className="text-2xl font-bold text-orange-600">0.08</div>
                  <div className="text-xs text-gray-500">$0.08 change per 1% rate move</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-200 p-6 rounded-xl">
              <h4 className="font-bold text-amber-800 text-lg mb-4">Greeks Solve These Problems:</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <div>
                    <div className="font-semibold text-amber-700 text-sm">Portfolio Risk Management</div>
                    <p className="text-amber-600 text-xs">Calculate total exposure across hundreds of options positions instantly</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <div>
                    <div className="font-semibold text-amber-700 text-sm">Dynamic Hedging</div>
                    <p className="text-amber-600 text-xs">Maintain delta-neutral positions as markets move throughout the day</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <div>
                    <div className="font-semibold text-amber-700 text-sm">Strategy Selection</div>
                    <p className="text-amber-600 text-xs">Choose optimal strikes and expirations based on Greek characteristics</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">4</span>
                  </div>
                  <div>
                    <div className="font-semibold text-amber-700 text-sm">P&L Attribution</div>
                    <p className="text-amber-600 text-xs">Understand what drove profits/losses: stock moves, time decay, or volatility</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    delta: {
      title: "Delta - Direction Risk",
      content: (
        <div className="space-y-8">
          <div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              <strong>Delta (Δ)</strong> measures how much an option's price changes for a $1 move in the underlying stock. It's the most important Greek for understanding directional exposure and forms the foundation of all hedging strategies.
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
                  <h4 className="font-bold mb-2">Delta as Hedge Ratio</h4>
                  <p>
                    Delta tells you exactly how many shares of stock to buy/sell to hedge an options position. A call with 0.60 delta behaves like owning 60 shares - hedge with short 60 shares for delta-neutral exposure.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 p-6 rounded-xl">
                <h4 className="font-bold text-green-800 text-lg mb-4">Call Options</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-green-700 font-medium">Deep ITM:</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-bold">0.80 - 1.00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-green-700 font-medium">ATM:</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-bold">~0.50</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-green-700 font-medium">Deep OTM:</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-bold">0.00 - 0.20</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-pink-50 border-2 border-red-200 p-6 rounded-xl">
                <h4 className="font-bold text-red-800 text-lg mb-4">Put Options</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-red-700 font-medium">Deep ITM:</span>
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-bold">-0.80 to -1.00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-red-700 font-medium">ATM:</span>
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-bold">~-0.50</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-red-700 font-medium">Deep OTM:</span>
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-bold">-0.20 to 0.00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border-2 border-purple-200 p-6 rounded-xl">
              <h4 className="font-bold text-purple-800 text-xl mb-4">Delta Hedging in Practice</h4>
              <p className="text-purple-700 mb-4">
                Market makers use delta hedging to remain directionally neutral while profiting from volatility and time decay. Here's how it works:
              </p>
              <div className="bg-white p-4 rounded-lg border-2 border-purple-100">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="font-bold text-purple-800 mb-2">Initial Position</div>
                    <div>Sell 100 calls @ 0.60 delta</div>
                    <div>Buy 6,000 shares (hedge)</div>
                    <div className="text-green-600 font-medium">Net Delta: 0</div>
                  </div>
                  <div>
                    <div className="font-bold text-purple-800 mb-2">Stock Rises $1</div>
                    <div>Delta increases to 0.65</div>
                    <div>Need 6,500 shares now</div>
                    <div className="text-red-600 font-medium">Buy 500 more shares</div>
                  </div>
                  <div>
                    <div className="font-bold text-purple-800 mb-2">Stock Falls $1</div>
                    <div>Delta decreases to 0.55</div>
                    <div>Need 5,500 shares now</div>
                    <div className="text-blue-600 font-medium">Sell 500 shares</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    gamma: {
      title: "Gamma - Delta Risk",
      content: (
        <div className="space-y-8">
          <div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              <strong>Gamma (Γ)</strong> measures how much delta changes for a $1 move in the underlying stock. It's the "delta of delta" - showing how rapidly your hedge ratio changes as the stock moves. High gamma positions require frequent rebalancing but offer greater profit potential.
            </p>

            <div className="bg-orange-100 border-2 border-orange-300 text-orange-900 p-6 rounded-xl mb-6">
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
                  <h4 className="font-bold mb-2">Gamma Scalping Strategy</h4>
                  <p>
                    Professional traders use gamma to profit from volatility through "gamma scalping" - buying low-gamma, selling high-gamma as stocks oscillate, while maintaining delta-neutral exposure.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-slate-50 to-gray-50 border-2 border-gray-200 p-6 rounded-xl mb-6">
              <h4 className="font-bold text-gray-800 text-xl mb-4">Gamma Characteristics by Moneyness</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-red-50 p-4 rounded-lg border-2 border-red-200">
                  <h5 className="font-bold text-red-800 mb-2">Out-of-the-Money</h5>
                  <div className="text-2xl font-bold text-red-600 mb-1">Low Gamma</div>
                  <p className="text-red-700 text-sm">Delta barely changes with stock moves. Position stays relatively stable.</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
                  <h5 className="font-bold text-green-800 mb-2">At-the-Money</h5>
                  <div className="text-2xl font-bold text-green-600 mb-1">High Gamma</div>
                  <p className="text-green-700 text-sm">Maximum gamma. Delta changes rapidly, requiring frequent hedging.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
                  <h5 className="font-bold text-blue-800 mb-2">In-the-Money</h5>
                  <div className="text-2xl font-bold text-blue-600 mb-1">Medium Gamma</div>
                  <p className="text-blue-700 text-sm">Gamma decreases as delta approaches 1.0 (calls) or -1.0 (puts).</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200 p-6 rounded-xl">
              <h4 className="font-bold text-indigo-800 text-xl mb-4">Gamma vs Time to Expiration</h4>
              <p className="text-indigo-700 mb-4">
                Time decay dramatically affects gamma behavior, creating both opportunities and risks:
              </p>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-indigo-800">Long-Term Options (60+ days)</span>
                    <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">Stable Gamma</span>
                  </div>
                  <p className="text-indigo-600 text-sm">Gamma changes slowly, hedging is manageable, less profit potential from gamma scalping.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-purple-800">Medium-Term Options (15-60 days)</span>
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">Sweet Spot</span>
                  </div>
                  <p className="text-purple-600 text-sm">Optimal balance of gamma exposure and time value. Most gamma trading occurs here.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-red-800">Short-Term Options (0-15 days)</span>
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">Explosive Gamma</span>
                  </div>
                  <p className="text-red-600 text-sm">Extreme gamma for ATM options. Huge profits or losses possible. Requires expert timing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    theta: {
      title: "Theta - Time Decay",
      content: (
        <div className="space-y-8">
          <div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              <strong>Theta (Θ)</strong> measures how much an option's value decreases each day due to time decay. It's the only Greek that works against option buyers and for option sellers, making it crucial for understanding the "time game" in options trading.
            </p>

            <div className="bg-red-100 border-2 border-red-300 text-red-900 p-6 rounded-xl mb-6">
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
                  <h4 className="font-bold mb-2">Time is Money... Literally</h4>
                  <p>
                    Theta represents the daily "rent" you pay for holding options. Every day that passes without favorable price movement, theta silently erodes your position's value - even if you're right about direction.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200 p-6 rounded-xl mb-6">
              <h4 className="font-bold text-yellow-800 text-xl mb-4">Theta by Moneyness & Time</h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
                  <thead className="bg-gradient-to-r from-yellow-100 to-orange-100">
                    <tr>
                      <th className="border border-gray-300 p-3 text-left font-bold">Option Type</th>
                      <th className="border border-gray-300 p-3 text-center font-bold text-purple-600">60 Days</th>
                      <th className="border border-gray-300 p-3 text-center font-bold text-blue-600">30 Days</th>
                      <th className="border border-gray-300 p-3 text-center font-bold text-red-600">10 Days</th>
                      <th className="border border-gray-300 p-3 text-center font-bold text-orange-600">Weekend Risk</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 p-3 font-semibold">ATM Options</td>
                      <td className="border border-gray-300 p-3 text-center text-purple-600">-$0.05</td>
                      <td className="border border-gray-300 p-3 text-center text-blue-600">-$0.10</td>
                      <td className="border border-gray-300 p-3 text-center text-red-600">-$0.25</td>
                      <td className="border border-gray-300 p-3 text-center text-orange-600 font-bold">Highest</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 p-3 font-semibold">ITM Options</td>
                      <td className="border border-gray-300 p-3 text-center text-purple-600">-$0.03</td>
                      <td className="border border-gray-300 p-3 text-center text-blue-600">-$0.06</td>
                      <td className="border border-gray-300 p-3 text-center text-red-600">-$0.15</td>
                      <td className="border border-gray-300 p-3 text-center text-orange-600">Medium</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 p-3 font-semibold">OTM Options</td>
                      <td className="border border-gray-300 p-3 text-center text-purple-600">-$0.02</td>
                      <td className="border border-gray-300 p-3 text-center text-blue-600">-$0.03</td>
                      <td className="border border-gray-300 p-3 text-center text-red-600">-$0.05</td>
                      <td className="border border-gray-300 p-3 text-center text-orange-600">Low</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-green-50 border-2 border-green-200 p-6 rounded-xl">
                <h4 className="font-bold text-green-800 text-lg mb-4 flex items-center">
                  <span className="mr-2">💰</span>
                  Theta Strategies (Sellers)
                </h4>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded border">
                    <div className="font-semibold text-green-700">Covered Calls</div>
                    <p className="text-green-600 text-sm">Earn theta decay on calls written against stock positions</p>
                  </div>
                  <div className="bg-white p-3 rounded border">
                    <div className="font-semibold text-green-700">Iron Condors</div>
                    <p className="text-green-600 text-sm">Profit from theta in range-bound markets</p>
                  </div>
                  <div className="bg-white p-3 rounded border">
                    <div className="font-semibold text-green-700">Short Straddles</div>
                    <p className="text-green-600 text-sm">Maximum theta collection, highest risk</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border-2 border-red-200 p-6 rounded-xl">
                <h4 className="font-bold text-red-800 text-lg mb-4 flex items-center">
                  <span className="mr-2">⚠️</span>
                  Theta Risks (Buyers)
                </h4>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded border">
                    <div className="font-semibold text-red-700">Weekend Decay</div>
                    <p className="text-red-600 text-sm">Options lose 2-3 days of theta over weekends</p>
                  </div>
                  <div className="bg-white p-3 rounded border">
                    <div className="font-semibold text-red-700">Holiday Risk</div>
                    <p className="text-red-600 text-sm">Long holidays accelerate time decay significantly</p>
                  </div>
                  <div className="bg-white p-3 rounded border">
                    <div className="font-semibold text-red-700">Last Week Theta</div>
                    <p className="text-red-600 text-sm">ATM options can lose 50%+ of value in final week</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    vega: {
      title: "Vega - Volatility Risk",
      content: (
        <div className="space-y-8">
          <div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              <strong>Vega (ν)</strong> measures how much an option's price changes for a 1% change in implied volatility. It's the most misunderstood Greek but arguably the most important for professional traders, as volatility changes can overwhelm price movements in their impact on option values.
            </p>

            <div className="bg-purple-100 border-2 border-purple-300 text-purple-900 p-6 rounded-xl mb-6">
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
                  <h4 className="font-bold mb-2">Volatility is King</h4>
                  <p>
                    Vega explains why options can lose money even when you're right about direction. A 5% vol drop can easily offset a favorable $2 stock move. Understanding vega separates amateur from professional options trading.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200 p-6 rounded-xl mb-6">
              <h4 className="font-bold text-indigo-800 text-xl mb-4">Vega Across Strikes and Expirations</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-bold text-indigo-700 mb-3">By Moneyness</h5>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center bg-white p-2 rounded border">
                      <span>Deep OTM:</span>
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">Low Vega</span>
                    </div>
                    <div className="flex justify-between items-center bg-white p-2 rounded border">
                      <span>ATM:</span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">High Vega</span>
                    </div>
                    <div className="flex justify-between items-center bg-white p-2 rounded border">
                      <span>Deep ITM:</span>
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">Low Vega</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="font-bold text-purple-700 mb-3">By Time to Expiration</h5>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center bg-white p-2 rounded border">
                      <span>90+ Days:</span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Highest Vega</span>
                    </div>
                    <div className="flex justify-between items-center bg-white p-2 rounded border">
                      <span>30-60 Days:</span>
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">Medium Vega</span>
                    </div>
                    <div className="flex justify-between items-center bg-white p-2 rounded border">
                      <span>{"<"} 15 Days:</span>
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">Low Vega</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border-2 border-cyan-200 p-6 rounded-xl">
              <h4 className="font-bold text-cyan-800 text-xl mb-4">Volatility Trading Implications</h4>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-bold text-cyan-700 mb-3">High Vega Strategies</h5>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded border">
                      <div className="font-semibold text-cyan-700">Long Straddles</div>
                      <p className="text-cyan-600 text-sm">Profit from volatility expansion, earnings plays</p>
                    </div>
                    <div className="bg-white p-3 rounded border">
                      <div className="font-semibold text-cyan-700">Calendar Spreads</div>
                      <p className="text-cyan-600 text-sm">Different vega exposures across months</p>
                    </div>
                    <div className="bg-white p-3 rounded border">
                      <div className="font-semibold text-cyan-700">Ratio Spreads</div>
                      <p className="text-cyan-600 text-sm">Exploit vega differences between strikes</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="font-bold text-blue-700 mb-3">Vol Crush Scenarios</h5>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded border">
                      <div className="font-semibold text-blue-700">Post-Earnings</div>
                      <p className="text-blue-600 text-sm">IV often drops 50%+ overnight after earnings</p>
                    </div>
                    <div className="bg-white p-3 rounded border">
                      <div className="font-semibold text-blue-700">Event Resolution</div>
                      <p className="text-blue-600 text-sm">FDA approvals, merger decisions cause vol collapse</p>
                    </div>
                    <div className="bg-white p-3 rounded border">
                      <div className="font-semibold text-blue-700">Market Calm</div>
                      <p className="text-blue-600 text-sm">VIX normalization hurts all option buyers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    advanced: {
      title: "Advanced Greeks & Applications",
      content: (
        <div className="space-y-8">
          <div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Beyond the primary Greeks, sophisticated traders use <strong>second-order Greeks</strong> and <strong>cross-Greeks</strong> to manage complex portfolio risks and exploit subtle market inefficiencies. These advanced measures become critical for large portfolios and exotic strategies.
            </p>

            <div className="bg-gradient-to-r from-slate-50 to-gray-50 border-2 border-gray-200 p-6 rounded-xl mb-6">
              <h4 className="font-bold text-gray-800 text-xl mb-4">Rho - Interest Rate Sensitivity</h4>
              <p className="text-gray-700 mb-4">
                <strong>Rho (ρ)</strong> measures option price sensitivity to interest rate changes. Usually ignored in normal markets, but becomes crucial during rate cycles or for long-dated options.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg border">
                  <div className="font-semibold text-gray-700 mb-2">Calls</div>
                  <div className="text-green-600 font-bold">Positive Rho</div>
                  <p className="text-gray-600 text-sm">Benefit from rising rates</p>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <div className="font-semibold text-gray-700 mb-2">Puts</div>
                  <div className="text-red-600 font-bold">Negative Rho</div>
                  <p className="text-gray-600 text-sm">Hurt by rising rates</p>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <div className="font-semibold text-gray-700 mb-2">Impact</div>
                  <div className="text-blue-600 font-bold">Time Dependent</div>
                  <p className="text-gray-600 text-sm">Stronger for longer expirations</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-200 p-6 rounded-xl mb-6">
              <h4 className="font-bold text-amber-800 text-xl mb-4">Higher-Order Greeks</h4>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border-2 border-amber-100">
                    <h5 className="font-bold text-amber-700 mb-2">Charm (Delta Decay)</h5>
                    <p className="text-amber-600 text-sm mb-2">Rate of delta change with respect to time</p>
                    <div className="text-xs text-amber-500">
                      <InlineMath math="\text{Charm} = -\frac{\partial \Delta}{\partial t}" />
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-2 border-amber-100">
                    <h5 className="font-bold text-amber-700 mb-2">Vanna (Delta-Vol)</h5>
                    <p className="text-amber-600 text-sm mb-2">Delta sensitivity to volatility changes</p>
                    <div className="text-xs text-amber-500">
                      <InlineMath math="\text{Vanna} = \frac{\partial \Delta}{\partial \sigma}" />
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border-2 border-amber-100">
                    <h5 className="font-bold text-amber-700 mb-2">Volga (Vega Convexity)</h5>
                    <p className="text-amber-600 text-sm mb-2">Vega sensitivity to volatility changes</p>
                    <div className="text-xs text-amber-500">
                      <InlineMath math="\text{Volga} = \frac{\partial \text{Vega}}{\partial \sigma}" />
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-2 border-amber-100">
                    <h5 className="font-bold text-amber-700 mb-2">Vera (Rho-Vol)</h5>
                    <p className="text-amber-600 text-sm mb-2">Rho sensitivity to volatility changes</p>
                    <div className="text-xs text-amber-500">
                      <InlineMath math="\text{Vera} = \frac{\partial \text{Rho}}{\partial \sigma}" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-50 to-green-50 border-2 border-emerald-200 p-6 rounded-xl">
              <h4 className="font-bold text-emerald-800 text-xl mb-4">When Advanced Greeks Matter</h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">1</span>
                    </div>
                    <div>
                      <div className="font-semibold text-emerald-700 text-sm">Large Portfolios</div>
                      <p className="text-emerald-600 text-xs">Managing hundreds of option positions across multiple underlyings and expirations</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg border">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">2</span>
                    </div>
                    <div>
                      <div className="font-semibold text-emerald-700 text-sm">Volatility Surface Trading</div>
                      <p className="text-emerald-600 text-xs">Exploiting relative value across different strikes and expirations</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">3</span>
                    </div>
                    <div>
                      <div className="font-semibold text-emerald-700 text-sm">Exotic Options</div>
                      <p className="text-emerald-600 text-xs">Barrier options, Asian options, and other path-dependent derivatives</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">4</span>
                    </div>
                    <div>
                      <div className="font-semibold text-emerald-700 text-sm">Market Making</div>
                      <p className="text-emerald-600 text-xs">Professional liquidity provision requiring precise risk measurement</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">5</span>
                    </div>
                    <div>
                      <div className="font-semibold text-emerald-700 text-sm">Regime Changes</div>
                      <p className="text-emerald-600 text-xs">During major volatility shifts, rate cycles, or market crises</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 p-6 rounded-xl">
              <h4 className="font-bold text-blue-800 text-xl mb-4">Practical Greeks Mastery</h4>
              <p className="text-blue-700 mb-4">
                The path to Greeks mastery follows a clear progression. Start with delta hedging, add gamma awareness, then incorporate theta and vega management. Advanced Greeks come naturally as portfolio complexity increases.
              </p>
              
              <div className="bg-blue-600 text-white p-4 rounded-lg">
                <div className="font-bold mb-2">Professional Tip:</div>
                <p className="text-blue-100 text-sm">
                  Focus on position-level Greeks first, then portfolio Greeks. A single bad gamma exposure can overwhelm perfect delta hedging. Master the basics before attempting exotic strategies, but never stop learning - the Greeks reveal new insights at every level of sophistication.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  };

  const tabs = [
    { id: "overview", label: "What Are Greeks?", icon: "📖" },
    { id: "delta", label: "Delta", icon: "📈" },
    { id: "gamma", label: "Gamma", icon: "🔄" },
    { id: "theta", label: "Theta", icon: "⏰" },
    { id: "vega", label: "Vega", icon: "📊" },
    { id: "advanced", label: "Advanced Greeks", icon: "🧠" },
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
              <span className="mx-2 text-gray-400">→</span>
              <button
                onClick={() => navigate("/learning/options")}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Options Hub
              </button>
              <span className="mx-2 text-gray-400">→</span>
              <span className="text-gray-600">The Greeks</span>
            </nav>

            <div className="bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50 p-6 mb-6">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                The Greeks
              </h1>
              <p className="text-lg text-gray-600 mb-4">
                Master the mathematical tools that quantify option risk and enable sophisticated trading strategies
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full font-medium">
                  Intermediate
                </span>
                <span>20 min read</span>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50 p-4 mb-8">
            <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
              <span>Lesson Progress</span>
              <span>6 of 8 lessons</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full"
                style={{ width: "67%" }}
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
              onClick={() => navigate("/learning/options/monte-carlo")}
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
              <span>Back: Monte Carlo</span>
            </button>

            <button
              onClick={() => navigate("/learning/options")}
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <span>Back to Options Hub</span>
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

export default OptionsGreeks;