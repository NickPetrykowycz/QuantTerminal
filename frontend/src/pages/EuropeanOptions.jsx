// frontend/src/pages/EuropeanOptions.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { useAuth } from '../contexts/AuthContext';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const EuropeanOptions = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('definition');

  const tabContent = {
    definition: {
      title: "European Option Definition & Characteristics",
      content: (
        <div className="space-y-8">
          <div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              <strong>European options</strong> can only be exercised at expiration, making them simpler to analyze 
              but more restrictive than American options. This constraint leads to elegant mathematical solutions 
              and forms the foundation of modern derivatives pricing theory.
            </p>
            
            <div className="bg-amber-100 border-2 border-amber-300 text-amber-900 p-6 rounded-xl mb-6">
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-bold mb-2">Historical Context</h4>
                  <p>
                    European options were the first to be mathematically modeled by Fischer Black, Myron Scholes, 
                    and Robert Merton in 1973, revolutionizing modern finance and earning them the Nobel Prize in Economics in 1997.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 p-6 rounded-xl">
              <h4 className="font-bold text-blue-800 text-xl mb-4 flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                Key Benefits
              </h4>
              <ul className="space-y-3 text-blue-700">
                <li className="flex items-start space-x-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Analytical Solutions:</strong> Closed-form pricing formulas available</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Computational Efficiency:</strong> Fast pricing with direct calculations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Theoretical Foundation:</strong> Basis for understanding advanced derivatives</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Risk Management:</strong> Predictable exercise patterns simplify hedging</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 border-2 border-purple-200 p-6 rounded-xl">
              <h4 className="font-bold text-purple-800 text-xl mb-4 flex items-center">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                Limitations
              </h4>
              <ul className="space-y-3 text-purple-700">
                <li className="flex items-start space-x-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>No Early Exercise:</strong> Cannot capture favorable market conditions</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Dividend Risk:</strong> Cannot exercise before ex-dividend dates</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Interest Rate Exposure:</strong> Fixed exercise date increases sensitivity</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Limited Market Usage:</strong> Mainly index options and OTC contracts</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-50 to-slate-50 border-2 border-gray-200 p-6 rounded-xl">
            <h4 className="font-bold text-gray-800 text-xl mb-4">Exercise Mechanism</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                <div className="text-2xl mb-2">📅</div>
                <h5 className="font-semibold text-gray-700 mb-2">Fixed Exercise Date</h5>
                <p className="text-gray-600 text-sm">Exercise only occurs at expiration, never before</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                <div className="text-2xl mb-2">⚖️</div>
                <h5 className="font-semibold text-gray-700 mb-2">Automatic Exercise</h5>
                <p className="text-gray-600 text-sm">ITM options typically exercised automatically</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                <div className="text-2xl mb-2">💭</div>
                <h5 className="font-semibold text-gray-700 mb-2">No Early Decision</h5>
                <p className="text-gray-600 text-sm">Simplifies strategy and risk management</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    pricing: {
      title: "Black-Scholes Pricing Framework",
      content: (
        <div className="space-y-8">
          <div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              European options are primarily priced using the Black-Scholes model, which provides elegant 
              closed-form solutions. This theoretical framework forms the foundation for understanding 
              all derivative pricing and risk management.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 p-6 rounded-xl">
            <div className="flex justify-between items-start mb-4">
              <h4 className="font-bold text-blue-800 text-2xl flex items-center">
                <svg className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2h8a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm0 8a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2z" clipRule="evenodd" />
                </svg>
                Black-Scholes Formula
              </h4>
              <button
                onClick={() => navigate('/learning/options/black-scholes')}
                className="!bg-blue-600 !hover:bg-blue-700 !text-white px-4 py-2 !rounded-lg text-sm !font-semibold !transition-colors !flex-shrink-0"
              >
                Learn More →
              </button>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-blue-200">
                <h5 className="font-semibold text-blue-700 mb-4 text-center">European Call & Put Prices</h5>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="text-center bg-blue-50 p-4 rounded">
                    <BlockMath math="C = S_0 N(d_1) - K e^{-rT} N(d_2)" />
                    <p className="text-xs text-blue-600 mt-2">Call Option Price</p>
                  </div>
                  <div className="text-center bg-blue-50 p-4 rounded">
                    <BlockMath math="P = K e^{-rT} N(-d_2) - S_0 N(-d_1)" />
                    <p className="text-xs text-blue-600 mt-2">Put Option Price</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h5 className="font-semibold text-blue-700 mb-3">Key Advantages</h5>
                  <ul className="text-blue-600 text-sm space-y-2">
                    <li>• Instant analytical solutions</li>
                    <li>• Clean mathematical framework</li>
                    <li>• Theoretical foundation for all derivatives</li>
                    <li>• Exact Greek calculations</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h5 className="font-semibold text-blue-700 mb-3">Alternative Methods</h5>
                  <ul className="text-blue-600 text-sm space-y-2">
                    <li>• Binomial trees (converge to B-S)</li>
                    <li>• Monte Carlo simulation</li>
                    <li>• Trinomial trees</li>
                    <li>• Finite difference methods</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-violet-50 border-2 border-purple-200 p-6 rounded-xl">
            <h4 className="font-bold text-purple-800 text-xl mb-4">Why European Options Use Black-Scholes</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-purple-700 mb-3">Perfect Match</h5>
                <p className="text-purple-600 text-sm">
                  European exercise restriction aligns perfectly with Black-Scholes assumptions. 
                  No early exercise means no complex boundary conditions to solve.
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-purple-700 mb-3">Market Standard</h5>
                <p className="text-purple-600 text-sm">
                  Index options, FX options, and interest rate derivatives rely on Black-Scholes 
                  for real-time pricing and risk management across global markets.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 p-6 rounded-xl">
            <h4 className="font-bold text-amber-800 text-xl mb-4">Dividend Adjustments</h4>
            <p className="text-amber-700 mb-4">
              For dividend-paying stocks, simply replace <InlineMath math="S_0" /> with <InlineMath math="S_0 e^{-qT}" /> 
              where <InlineMath math="q" /> is the continuous dividend yield.
            </p>
            <div className="bg-white p-4 rounded-lg border border-amber-200 text-center">
              <BlockMath math="C = S_0 e^{-qT} N(d_1) - K e^{-rT} N(d_2)" />
              <p className="text-sm text-amber-600 mt-2">Dividend-Adjusted Call Price</p>
            </div>
          </div>
        </div>
      )
    },
    markets: {
      title: "Market Applications & Usage",
      content: (
        <div className="space-y-8">
          <div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              European options dominate certain market segments where their exercise restrictions align with 
              trading needs and regulatory requirements. Understanding their prevalence helps traders 
              identify appropriate strategies and pricing models.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 p-6 rounded-xl">
              <h4 className="font-bold text-blue-800 text-xl mb-4">Primary Markets</h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h5 className="font-semibold text-blue-700 mb-2">Index Options</h5>
                  <p className="text-blue-600 text-sm mb-2">SPX, NDX, RUT, DJX, VIX</p>
                  <p className="text-gray-600 text-sm">
                    Cash-settled index options use European exercise to prevent market manipulation 
                    and ensure orderly settlement based on official closing values.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h5 className="font-semibold text-blue-700 mb-2">Currency Options</h5>
                  <p className="text-blue-600 text-sm mb-2">FX options, EUR/USD, GBP/USD</p>
                  <p className="text-gray-600 text-sm">
                    Over-the-counter currency options often use European exercise for 
                    standardization and pricing simplicity in institutional markets.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h5 className="font-semibold text-blue-700 mb-2">Interest Rate Options</h5>
                  <p className="text-blue-600 text-sm mb-2">Bond options, swaptions, caps</p>
                  <p className="text-gray-600 text-sm">
                    Most interest rate derivatives use European exercise to align with 
                    underlying bond maturity dates and payment schedules.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-200 p-6 rounded-xl">
              <h4 className="font-bold text-purple-800 text-xl mb-4">Trading Characteristics</h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h5 className="font-semibold text-purple-700 mb-2">Liquidity Patterns</h5>
                  <p className="text-gray-600 text-sm">
                    Generally high liquidity due to standardized exercise features 
                    and heavy institutional participation, especially in index markets.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h5 className="font-semibold text-purple-700 mb-2">Pricing Efficiency</h5>
                  <p className="text-gray-600 text-sm">
                    More efficient pricing due to closed-form solutions and 
                    reduced complexity from early exercise considerations.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h5 className="font-semibold text-purple-700 mb-2">Settlement</h5>
                  <p className="text-gray-600 text-sm">
                    Cash settlement reduces operational complexity and 
                    eliminates physical delivery logistics for index products.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto bg-white rounded-xl border-2 border-gray-200">
            <table className="w-full border-collapse">
              <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                <tr>
                  <th className="border border-gray-300 p-4 text-left font-bold text-gray-800">Market Segment</th>
                  <th className="border border-gray-300 p-4 text-left font-bold text-blue-600">European Prevalence</th>
                  <th className="border border-gray-300 p-4 text-left font-bold text-purple-600">Key Reasons</th>
                  <th className="border border-gray-300 p-4 text-left font-bold text-green-600">Examples</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-4 font-semibold">Index Options</td>
                  <td className="border border-gray-300 p-4">Nearly 100% European</td>
                  <td className="border border-gray-300 p-4">Cash settlement, manipulation prevention</td>
                  <td className="border border-gray-300 p-4">SPX, NDX, RUT, VIX</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-4 font-semibold">Equity Options</td>
                  <td className="border border-gray-300 p-4">Less than 5% European</td>
                  <td className="border border-gray-300 p-4">Special products, warrants</td>
                  <td className="border border-gray-300 p-4">Some warrants, exotic products</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-4 font-semibold">Currency Options</td>
                  <td className="border border-gray-300 p-4">60-80% European</td>
                  <td className="border border-gray-300 p-4">OTC standardization, pricing simplicity</td>
                  <td className="border border-gray-300 p-4">FX forwards, corporate hedging</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-4 font-semibold">Interest Rate Options</td>
                  <td className="border border-gray-300 p-4">70-90% European</td>
                  <td className="border border-gray-300 p-4">Term structure modeling, swaptions</td>
                  <td className="border border-gray-300 p-4">Bond options, caps, floors</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-4 font-semibold">Commodity Options</td>
                  <td className="border border-gray-300 p-4">30-50% European</td>
                  <td className="border border-gray-300 p-4">Delivery alignment, seasonal patterns</td>
                  <td className="border border-gray-300 p-4">Energy contracts, agricultural</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-200 p-6 rounded-xl">
            <h4 className="font-bold text-amber-800 text-xl mb-4">Volume & Liquidity Metrics</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-amber-200 text-center">
                <div className="text-2xl font-bold text-amber-700 mb-2">~25%</div>
                <h5 className="font-semibold text-amber-700 mb-2">Of Total Options Volume</h5>
                <p className="text-gray-600 text-sm">European-style options by contract count globally</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-amber-200 text-center">
                <div className="text-2xl font-bold text-amber-700 mb-2">~40%</div>
                <h5 className="font-semibold text-amber-700 mb-2">Of Institutional Trading</h5>
                <p className="text-gray-600 text-sm">Professional trading in European-style products</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-amber-200 text-center">
                <div className="text-2xl font-bold text-amber-700 mb-2">~80%</div>
                <h5 className="font-semibold text-amber-700 mb-2">Of OTC Derivatives</h5>
                <p className="text-gray-600 text-sm">Over-the-counter products use European exercise</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    greeks: {
      title: "The Greeks: European Option Risk Sensitivities",
      content: (
        <div className="space-y-8">
          <div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              European options provide the cleanest Greek calculations due to their analytical Black-Scholes solutions. 
              These risk sensitivities are essential for hedging, portfolio management, and understanding how 
              European option values respond to market changes.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 p-6 rounded-xl mb-8">
            <h4 className="font-bold text-blue-800 text-xl mb-4 text-center">Why European Greeks Are Special</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-blue-200 text-center">
                <div className="text-2xl mb-2">📐</div>
                <h5 className="font-semibold text-blue-700 mb-2">Exact Formulas</h5>
                <p className="text-blue-600 text-sm">Closed-form solutions give precise Greek values instantly</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-blue-200 text-center">
                <div className="text-2xl mb-2">🎯</div>
                <h5 className="font-semibold text-blue-700 mb-2">No Early Exercise Effects</h5>
                <p className="text-blue-600 text-sm">Greeks aren't complicated by early exercise boundaries</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-blue-200 text-center">
                <div className="text-2xl mb-2">⚡</div>
                <h5 className="font-semibold text-blue-700 mb-2">Real-Time Updates</h5>
                <p className="text-blue-600 text-sm">Instant Greek calculations for dynamic hedging</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 p-6 rounded-xl">
              <h4 className="font-bold text-green-800 text-xl mb-4">Delta (Δ) - Price Sensitivity</h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <div className="text-center bg-green-50 p-3 rounded mb-3">
                    <InlineMath math="\Delta_{call} = N(d_1)" />
                    <br />
                    <InlineMath math="\Delta_{put} = N(d_1) - 1" />
                  </div>
                  <div className="text-green-700 text-sm space-y-2">
                    <p><strong>Range:</strong> Calls 0→1, Puts -1→0</p>
                    <p><strong>ATM Delta:</strong> ~0.5 for calls, ~-0.5 for puts</p>
                    <p><strong>Hedge Ratio:</strong> Shares needed to hedge one contract</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 p-6 rounded-xl">
              <h4 className="font-bold text-blue-800 text-xl mb-4">Gamma (Γ) - Delta Sensitivity</h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <div className="text-center bg-blue-50 p-3 rounded mb-3">
                    <InlineMath math="\Gamma = \frac{\phi(d_1)}{S_0 \sigma \sqrt{T}}" />
                  </div>
                  <div className="text-blue-700 text-sm space-y-2">
                    <p><strong>Peak:</strong> ATM options near expiration</p>
                    <p><strong>Hedging:</strong> Higher gamma = more frequent rebalancing</p>
                    <p><strong>Risk:</strong> Gamma risk increases as expiration approaches</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 border-2 border-purple-200 p-6 rounded-xl">
              <h4 className="font-bold text-purple-800 text-xl mb-4">Theta (Θ) - Time Decay</h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <div className="text-center bg-purple-50 p-3 rounded mb-3 text-sm">
                    <InlineMath math="\Theta = -\frac{S_0 \phi(d_1) \sigma}{2\sqrt{T}} - rKe^{-rT}N(d_2)" />
                  </div>
                  <div className="text-purple-700 text-sm space-y-2">
                    <p><strong>Acceleration:</strong> Time decay speeds up near expiration</p>
                    <p><strong>ATM Effect:</strong> Highest theta for at-the-money options</p>
                    <p><strong>Weekend Risk:</strong> No decay when markets closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200 p-6 rounded-xl">
              <h4 className="font-bold text-orange-800 text-xl mb-4">Vega (ν) - Volatility Sensitivity</h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-orange-200">
                  <div className="text-center bg-orange-50 p-3 rounded mb-3">
                    <InlineMath math="\nu = S_0 \phi(d_1) \sqrt{T}" />
                  </div>
                  <div className="text-orange-700 text-sm space-y-2">
                    <p><strong>Peak:</strong> ATM options with longer time to expiration</p>
                    <p><strong>Vol Smile:</strong> Implied volatility varies by strike</p>
                    <p><strong>Term Structure:</strong> Different vega for different expiries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-50 to-slate-50 border-2 border-gray-200 p-6 rounded-xl">
            <h4 className="font-bold text-gray-800 text-xl mb-4">Advanced Greeks for European Options</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h5 className="font-semibold text-gray-700 mb-2">Rho (ρ)</h5>
                <div className="text-center bg-gray-50 p-2 rounded text-sm mb-2">
                  <InlineMath math="\rho = KTe^{-rT}N(d_2)" />
                </div>
                <p className="text-gray-600 text-xs">Interest rate sensitivity - more important for longer-dated options</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h5 className="font-semibold text-gray-700 mb-2">Vanna</h5>
                <div className="text-center bg-gray-50 p-2 rounded text-sm mb-2">
                  <InlineMath math="\frac{\partial \Delta}{\partial \sigma}" />
                </div>
                <p className="text-gray-600 text-xs">Delta's sensitivity to volatility changes - key for vol surface trading</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h5 className="font-semibold text-gray-700 mb-2">Volga</h5>
                <div className="text-center bg-gray-50 p-2 rounded text-sm mb-2">
                  <InlineMath math="\frac{\partial \nu}{\partial \sigma}" />
                </div>
                <p className="text-gray-600 text-xs">Vega's sensitivity to volatility - important for volatility strategies</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200 p-6 rounded-xl">
            <h4 className="font-bold text-indigo-800 text-xl mb-4">European Greek Applications</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-indigo-700 mb-3">Index Portfolio Hedging</h5>
                <ul className="text-indigo-600 text-sm space-y-2">
                  <li>• <strong>Delta hedging:</strong> SPX puts to protect equity portfolios</li>
                  <li>• <strong>Gamma management:</strong> Rebalance frequency for large portfolios</li>
                  <li>• <strong>Vega exposure:</strong> Manage volatility risk across strikes</li>
                  <li>• <strong>Theta decay:</strong> Premium collection strategies with time decay</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-indigo-700 mb-3">Institutional Risk Management</h5>
                <ul className="text-indigo-600 text-sm space-y-2">
                  <li>• <strong>Portfolio Greeks:</strong> Aggregate risk across all positions</li>
                  <li>• <strong>Stress testing:</strong> Greeks under extreme market scenarios</li>
                  <li>• <strong>Regulatory capital:</strong> Risk calculations for Basel compliance</li>
                  <li>• <strong>Real-time monitoring:</strong> Instant Greek updates for trading desks</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-50 to-green-50 border-2 border-emerald-200 p-6 rounded-xl">
            <h4 className="font-bold text-emerald-800 text-xl mb-4">Greek Behavior Patterns</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h5 className="font-semibold text-emerald-700">Near Expiration</h5>
                <ul className="text-emerald-600 text-sm space-y-1">
                  <li>• Delta approaches 0 (OTM) or 1 (ITM)</li>
                  <li>• Gamma spikes for ATM options</li>
                  <li>• Theta acceleration increases dramatically</li>
                  <li>• Vega approaches zero</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h5 className="font-semibold text-emerald-700">Long-Dated Options</h5>
                <ul className="text-emerald-600 text-sm space-y-1">
                  <li>• Delta changes more gradually</li>
                  <li>• Gamma relatively stable and lower</li>
                  <li>• Theta decay slow and steady</li>
                  <li>• Vega at maximum levels</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    strategies: {
      title: "Trading Strategies & Applications",
      content: (
        <div className="space-y-8">
          <div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              European options enable sophisticated trading strategies that leverage their predictable exercise patterns 
              and analytical pricing. These strategies are particularly popular in institutional trading and 
              structured products due to their mathematical tractability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 p-6 rounded-xl">
              <h4 className="font-bold text-blue-800 text-xl mb-4">Volatility Strategies</h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h5 className="font-semibold text-blue-700 mb-2">Long Straddle</h5>
                  <p className="text-blue-600 text-sm mb-2">Buy ATM call + put</p>
                  <p className="text-gray-600 text-sm">
                    Benefits from high volatility in either direction. European exercise 
                    eliminates early exercise risk, making volatility forecasting cleaner.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h5 className="font-semibold text-blue-700 mb-2">Iron Condor</h5>
                  <p className="text-blue-600 text-sm mb-2">Sell ATM strangle, buy OTM strangle</p>
                  <p className="text-gray-600 text-sm">
                    Profits from low volatility with defined maximum loss. Predictable 
                    P&L at expiration due to European exercise.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h5 className="font-semibold text-blue-700 mb-2">Calendar Spread</h5>
                  <p className="text-blue-600 text-sm mb-2">Sell near-term, buy long-term options</p>
                  <p className="text-gray-600 text-sm">
                    Exploits time decay differences. European exercise simplifies 
                    the analysis of time value erosion patterns.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 p-6 rounded-xl">
              <h4 className="font-bold text-green-800 text-xl mb-4">Directional Strategies</h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h5 className="font-semibold text-green-700 mb-2">Bull Call Spread</h5>
                  <p className="text-green-600 text-sm mb-2">Buy low strike, sell high strike</p>
                  <p className="text-gray-600 text-sm">
                    Limited profit and loss with known maximum values. Benefits from 
                    upward price movement with reduced premium cost.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h5 className="font-semibold text-green-700 mb-2">Protective Put</h5>
                  <p className="text-green-600 text-sm mb-2">Long stock + long put</p>
                  <p className="text-gray-600 text-sm">
                    Portfolio insurance with known floor value. European puts 
                    provide predictable protection without early exercise complications.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h5 className="font-semibold text-green-700 mb-2">Synthetic Positions</h5>
                  <p className="text-green-600 text-sm mb-2">Call + put combinations</p>
                  <p className="text-gray-600 text-sm">
                    Create synthetic stock or bond positions with precise 
                    expiration timing for European options.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border-2 border-purple-200 p-6 rounded-xl">
            <h4 className="font-bold text-purple-800 text-xl mb-4">Institutional Applications</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-purple-200">
                <h5 className="font-semibold text-purple-700 mb-2">Portfolio Hedging</h5>
                <p className="text-gray-600 text-sm">
                  Index puts provide portfolio insurance with predictable exercise timing 
                  aligned with quarterly rebalancing periods and reporting dates.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-purple-200">
                <h5 className="font-semibold text-purple-700 mb-2">Structured Products</h5>
                <p className="text-gray-600 text-sm">
                  Capital protected notes and reverse convertibles often use European 
                  exercise for cleaner payout structures and regulatory compliance.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-purple-200">
                <h5 className="font-semibold text-purple-700 mb-2">Risk Management</h5>
                <p className="text-gray-600 text-sm">
                  Predictable exercise patterns simplify risk calculations, 
                  regulatory capital requirements, and stress testing scenarios.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 p-6 rounded-xl">
            <h4 className="font-bold text-amber-800 text-xl mb-4">Strategy Selection Framework</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-amber-700 mb-3">Favor European When:</h5>
                <ul className="space-y-2 text-amber-700 text-sm">
                  <li className="flex items-start space-x-2">
                    <span className="text-amber-500 mt-1">•</span>
                    <span>Seeking analytical pricing precision and transparency</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-amber-500 mt-1">•</span>
                    <span>Trading index-based strategies and broad market exposure</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-amber-500 mt-1">•</span>
                    <span>Implementing pure volatility trades without directional bias</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-amber-500 mt-1">•</span>
                    <span>Building structured products with defined payoff profiles</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-amber-500 mt-1">•</span>
                    <span>Needing predictable Greeks for dynamic hedging programs</span>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-amber-700 mb-3">Consider American When:</h5>
                <ul className="space-y-2 text-amber-700 text-sm">
                  <li className="flex items-start space-x-2">
                    <span className="text-amber-500 mt-1">•</span>
                    <span>Dividend capture opportunities are significant</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-amber-500 mt-1">•</span>
                    <span>Early exercise adds material value (deep ITM puts)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-amber-500 mt-1">•</span>
                    <span>Trading individual equity options with high dividend yields</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-amber-500 mt-1">•</span>
                    <span>Requiring maximum flexibility for changing market conditions</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-amber-500 mt-1">•</span>
                    <span>Managing single-name event risk (earnings, announcements)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border-2 border-cyan-200 p-6 rounded-xl">
            <h4 className="font-bold text-cyan-800 text-xl mb-4">Advanced Strategy Considerations</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-cyan-700 mb-3">Volatility Surface Trading</h5>
                <p className="text-cyan-600 text-sm mb-3">
                  European options are ideal for volatility surface arbitrage because their prices 
                  are determined solely by the Black-Scholes formula, making mispricings easier to identify.
                </p>
                <ul className="text-cyan-600 text-xs space-y-1">
                  <li>• Strike arbitrage opportunities</li>
                  <li>• Calendar arbitrage across expiries</li>
                  <li>• Volatility smile modeling</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-cyan-700 mb-3">Cross-Asset Strategies</h5>
                <p className="text-cyan-600 text-sm mb-3">
                  European exercise allows for complex cross-asset strategies where precise 
                  expiration timing is crucial for correlation and basis trades.
                </p>
                <ul className="text-cyan-600 text-xs space-y-1">
                  <li>• Index vs. ETF arbitrage</li>
                  <li>• Currency carry trades</li>
                  <li>• Interest rate curve strategies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    }
  };

  const tabs = [
    { id: 'definition', label: 'Definition', icon: '📖' },
    { id: 'pricing', label: 'Pricing Model', icon: '🧮' },
    { id: 'markets', label: 'Markets', icon: '🏛️' },
    { id: 'greeks', label: 'Greeks', icon: '📊' },
    { id: 'strategies', label: 'Strategies', icon: '🎯' }
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
                onClick={() => navigate('/learning')}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Learning Center
              </button>
              <span className="mx-2 text-gray-500">/</span>
              <button 
                onClick={() => navigate('/learning/options')}
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
                  Master the theoretical foundation of modern derivatives pricing
                </p>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
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
              <span>2 of 7 lessons</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full" style={{width: '29%'}}></div>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 rounded-xl mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2 pr-4">Experience European Option Pricing</h3>
                <p className="text-purple-100">
                  Use our OptiPrice calculator to explore Black-Scholes pricing in real-time. 
                </p>
                <p className="text-purple-100 pr-4">
                  Compare analytical solutions with binomial and Monte Carlo methods.
                </p>
              </div>
              <button
                onClick={() => navigate('/toolbox/optiprice')}
                className="!bg-white !text-purple-600 px-6 py-3 !rounded-lg !font-semibold !hover:bg-purple-50 !transition-colors flex-shrink-0"
              >
                Open Calculator →
              </button>
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
              onClick={() => navigate('/learning/options/overview')}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back: Options Overview</span>
            </button>
            
            <button
              onClick={() => navigate('/learning/options/american')}
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <span>Next: American Options</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EuropeanOptions;