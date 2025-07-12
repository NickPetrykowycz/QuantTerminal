// frontend/src/pages/AsianOptions.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { useAuth } from '../contexts/AuthContext';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const AsianOptions = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('definition');

  const tabContent = {
    definition: {
      title: "Asian Options: Path-Dependent Derivatives",
      content: (
        <div className="space-y-8">
          <div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              <strong>Asian options</strong> are exotic derivatives whose payoff depends on the average price 
              of the underlying asset over a specified period, rather than just the price at expiration. 
              This path-dependent feature makes them valuable for reducing volatility risk and manipulation concerns.
            </p>
            
            <div className="bg-amber-100 border-2 border-amber-300 text-amber-900 p-6 rounded-xl mb-6">
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-bold mb-2">Why "Asian" Options?</h4>
                  <p>
                    Named after the Asian financial markets where they were first widely traded in the 1980s, 
                    particularly in Japan for currency hedging and commodity trading applications.
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
                Key Advantages
              </h4>
              <ul className="space-y-3 text-blue-700">
                <li className="flex items-start space-x-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Reduced Volatility:</strong> Averaging smooths out price fluctuations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Lower Premiums:</strong> Less volatile = cheaper than standard options</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Manipulation Resistant:</strong> Hard to manipulate average over time</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Natural Hedging:</strong> Matches cash flow patterns for many businesses</span>
                </li>
              </ul>
              
              <div className="mt-4 bg-white p-4 rounded-lg border border-blue-200">
                <h5 className="font-semibold text-blue-700 mb-2">Why Averaging Reduces Volatility</h5>
                <p className="text-blue-600 text-sm mb-2">
                  <strong>Mathematical Principle:</strong> When you average many random observations, 
                  the variance of the average decreases by the number of observations.
                </p>
                <p className="text-blue-600 text-sm">
                  <strong>Practical Example:</strong> If daily oil prices swing ±$5, the average over 30 days 
                  will typically swing much less than ±$5, making the option payoff more predictable.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200 p-6 rounded-xl">
              <h4 className="font-bold text-orange-800 text-xl mb-4 flex items-center">
                <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                Challenges
              </h4>
              <ul className="space-y-3 text-orange-700">
                <li className="flex items-start space-x-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span><strong>Complex Pricing:</strong> No closed-form solutions for most cases</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span><strong>Path Dependency:</strong> Must track entire price history</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span><strong>Computational Intensity:</strong> Requires numerical methods</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span><strong>Limited Liquidity:</strong> Mainly OTC market with less standardization</span>
                </li>
              </ul>
              
              <div className="mt-4 bg-white p-4 rounded-lg border border-orange-200">
                <h5 className="font-semibold text-orange-700 mb-2">Why Manipulation Resistant?</h5>
                <p className="text-orange-600 text-sm mb-2">
                  <strong>The Challenge:</strong> To manipulate an Asian option's payoff, you'd need to 
                  manipulate the average price over the entire averaging period.
                </p>
                <p className="text-orange-600 text-sm">
                  <strong>Example:</strong> Even if someone pushes oil prices up 10% on the last day, 
                  if it's a 30-day average, that only affects 1/30th of the average price calculation.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 p-6 rounded-xl">
              <h4 className="font-bold text-green-800 text-xl mb-4">Average Price Options</h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h5 className="font-semibold text-green-700 mb-2">Payoff Structure</h5>
                  <div className="text-center bg-green-50 p-3 rounded mb-2">
                    <InlineMath math="\text{Call: } \max(\bar{S} - K, 0)" />
                    <br />
                    <InlineMath math="\text{Put: } \max(K - \bar{S}, 0)" />
                  </div>
                  <p className="text-green-600 text-sm">
                    Where <InlineMath math="\bar{S}" /> is the average price over the monitoring period
                  </p>
                </div>
                <div className="text-green-700 text-sm">
                  <p><strong>Most Common:</strong> 85% of Asian options are average price</p>
                  <p><strong>Use Case:</strong> Currency hedging, commodity price protection</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 border-2 border-purple-200 p-6 rounded-xl">
              <h4 className="font-bold text-purple-800 text-xl mb-4">Average Strike Options</h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h5 className="font-semibold text-purple-700 mb-2">Payoff Structure</h5>
                  <div className="text-center bg-purple-50 p-3 rounded mb-2">
                    <InlineMath math="\text{Call: } \max(S_T - \bar{S}, 0)" />
                    <br />
                    <InlineMath math="\text{Put: } \max(\bar{S} - S_T, 0)" />
                  </div>
                  <p className="text-purple-600 text-sm">
                    Where <InlineMath math="S_T" /> is the final price and <InlineMath math="\bar{S}" /> is the average strike
                  </p>
                </div>
                <div className="text-purple-700 text-sm">
                  <p><strong>Usage:</strong> 15% of Asian options are average strike</p>
                  <p><strong>Benefit:</strong> Strike automatically adjusts to market conditions</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-50 to-slate-50 border-2 border-gray-200 p-6 rounded-xl">
            <h4 className="font-bold text-gray-800 text-xl mb-4">Averaging Methods</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h5 className="font-semibold text-gray-700 mb-3">Arithmetic Average</h5>
                <div className="text-center bg-gray-50 p-3 rounded mb-3">
                  <InlineMath math="\bar{S}_A = \frac{1}{n} \sum_{i=1}^{n} S_i" />
                </div>
                <div className="text-gray-600 text-sm space-y-2">
                  <p><strong>Simple example:</strong> Prices $100, $110, $90</p>
                  <p><strong>Arithmetic average:</strong> (100+110+90)/3 = $100</p>
                  <p><strong>Usage:</strong> 95% of Asian options use this method</p>
                  <p><strong>Pricing:</strong> Requires Monte Carlo simulation</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h5 className="font-semibold text-gray-700 mb-3">Geometric Average</h5>
                <div className="text-center bg-gray-50 p-3 rounded mb-3">
                  <InlineMath math="\bar{S}_G = \left(\prod_{i=1}^{n} S_i\right)^{1/n}" />
                </div>
                <div className="text-gray-600 text-sm space-y-2">
                  <p><strong>Same example:</strong> Prices $100, $110, $90</p>
                  <p><strong>Geometric average:</strong> (100×110×90)^(1/3) = $99.50</p>
                  <p><strong>Usage:</strong> 5% of Asian options (mainly theoretical)</p>
                  <p><strong>Pricing:</strong> Has exact closed-form solution</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h5 className="font-semibold text-blue-700 mb-2">Why the Difference Matters</h5>
              <div className="grid md:grid-cols-2 gap-4 text-blue-600 text-sm">
                <div>
                  <p><strong>Geometric average is always ≤ arithmetic average</strong></p>
                  <p>This means geometric Asian options are always cheaper to buy</p>
                </div>
                <div>
                  <p><strong>Difference increases with volatility</strong></p>
                  <p>The more volatile the underlying, the bigger the gap between the two averages</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    pricing: {
      title: "Pricing Challenges & Methods",
      content: (
        <div className="space-y-8">
          <div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Asian options present unique pricing challenges due to their path-dependent nature. 
              Unlike European options with closed-form solutions, most Asian options require 
              sophisticated numerical methods for accurate valuation.
            </p>
          </div>

          <div className="bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 p-6 rounded-xl">
            <h4 className="font-bold text-red-800 text-xl mb-4">The Pricing Challenge: Why Most Asian Options Need Numerical Methods</h4>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-red-200">
                <h5 className="font-semibold text-red-700 mb-2">The Core Problem (For Arithmetic Averages)</h5>
                <p className="text-red-600 text-sm mb-3">
                  <strong>Simple Answer:</strong> Black-Scholes works because stock prices are log-normally distributed. 
                  But when you add up (average) many log-normal variables, the result isn't log-normal anymore.
                </p>
                <p className="text-red-600 text-sm">
                  <strong>Why This Matters:</strong> Since 95% of Asian options use arithmetic averaging, 
                  most Asian options can't use the elegant Black-Scholes formula and require numerical methods.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-red-200">
                <h5 className="font-semibold text-red-700 mb-2">The Exception: Geometric Averages</h5>
                <p className="text-red-600 text-sm mb-3">
                  Geometric averages of log-normal variables ARE still log-normal, so they do have 
                  closed-form solutions. However, these represent only ~5% of the Asian options market.
                </p>
                <p className="text-red-600 text-sm">
                  <strong>Bottom Line:</strong> The vast majority of real-world Asian options 
                  (arithmetic averaging) require Monte Carlo simulation or numerical methods.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 p-6 rounded-xl">
            <div className="flex justify-between items-start mb-4">
              <h4 className="font-bold text-blue-800 text-2xl flex items-center">
                <svg className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                Monte Carlo Simulation
              </h4>
              <button
                onClick={() => navigate('/learning/options/monte-carlo')}
                className="!bg-blue-600 !hover:bg-blue-700 !text-white px-4 py-2 !rounded-lg text-sm !font-semibold !transition-colors !flex-shrink-0"
              >
                Learn More →
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h5 className="font-semibold text-blue-700 mb-3">🎲 Simulation Process</h5>
                <ul className="text-blue-600 space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Generate many price paths using GBM
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Calculate average price for each path
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Compute payoff for each simulation
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Average and discount to present value
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-blue-700 mb-3">⚡ Advantages</h5>
                <ul className="text-blue-600 space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Handles any averaging method
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Works with complex payoff structures
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Easy to implement variance reduction
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Most accurate for arithmetic averages
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 p-6 rounded-xl">
              <h4 className="font-bold text-green-800 text-xl mb-4">Analytical Approximations</h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h5 className="font-semibold text-green-700 mb-2">Turnbull-Wakeman Approximation</h5>
                  <p className="text-green-600 text-sm mb-2">
                    Matches first two moments of arithmetic average with a log-normal distribution
                  </p>
                  <ul className="text-green-600 text-xs space-y-1">
                    <li>• Fast computation (milliseconds)</li>
                    <li>• Accuracy within 1-2% for most cases</li>
                    <li>• Works well for short maturities</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h5 className="font-semibold text-green-700 mb-2">Kemna-Vorst Method</h5>
                  <p className="text-green-600 text-sm mb-2">
                    Uses geometric average as control variate for arithmetic average
                  </p>
                  <ul className="text-green-600 text-xs space-y-1">
                    <li>• Balances speed and accuracy</li>
                    <li>• Better for longer maturities</li>
                    <li>• Industry standard for quick pricing</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 border-2 border-purple-200 p-6 rounded-xl">
              <h4 className="font-bold text-purple-800 text-xl mb-4">PDE Methods</h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h5 className="font-semibold text-purple-700 mb-2">Finite Difference</h5>
                  <p className="text-purple-600 text-sm mb-2">
                    Discretize the PDE and solve numerically on a grid
                  </p>
                  <ul className="text-purple-600 text-xs space-y-1">
                    <li>• High accuracy for smooth payoffs</li>
                    <li>• Memory intensive for high dimensions</li>
                    <li>• Good for Greeks calculations</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h5 className="font-semibold text-purple-700 mb-2">Fourier Transform Methods</h5>
                  <p className="text-purple-600 text-sm mb-2">
                    Transform to frequency domain for efficient computation
                  </p>
                  <ul className="text-purple-600 text-xs space-y-1">
                    <li>• Very fast for European-style exercise</li>
                    <li>• Handles jump-diffusion models</li>
                    <li>• Complex implementation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 p-6 rounded-xl">
            <h4 className="font-bold text-amber-800 text-xl mb-4">Special Case: Geometric Average Closed-Form Solution</h4>
            <div className="bg-white p-4 rounded-lg border border-amber-200 mb-4">
              <div className="bg-amber-100 p-3 rounded-lg mb-3">
                <p className="text-amber-800 text-sm font-semibold">
                  ⚠️ Important: This only works for geometric averages, which represent ~5% of Asian options market
                </p>
              </div>
              <p className="text-amber-700 mb-4">
                The geometric average Asian option is the only type with an exact closed-form solution, 
                because geometric averages of log-normal variables remain log-normal. This allows us to 
                use a modified Black-Scholes approach with adjusted parameters.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-amber-200">
                <h5 className="font-semibold text-amber-700 mb-2">Adjusted Volatility</h5>
                <div className="text-center bg-amber-50 p-2 rounded">
                  <InlineMath math="\sigma_{adj} = \sigma \sqrt{\frac{1}{3}\left(1 + \frac{1}{n} + \frac{1}{n^2}\right)}" />
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg border border-amber-200">
                <h5 className="font-semibold text-amber-700 mb-2">Adjusted Drift</h5>
                <div className="text-center bg-amber-50 p-2 rounded">
                  <InlineMath math="r_{adj} = \frac{1}{2}(r - \frac{\sigma^2}{2})" />
                </div>
              </div>
            </div>
            <p className="text-amber-600 text-sm mt-3">
              Then use standard Black-Scholes formula with these adjusted parameters. 
              <strong>Remember:</strong> This mathematical elegance is why geometric averaging 
              is popular in academic studies, but arithmetic averaging dominates real markets.
            </p>
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
              Asian options are primarily traded in OTC markets where their path-dependent features 
              provide natural hedging solutions for businesses with exposure to average prices over time. 
              Their applications span multiple asset classes and geographic regions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 p-6 rounded-xl">
              <h4 className="font-bold text-blue-800 text-xl mb-4">Primary Markets</h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h5 className="font-semibold text-blue-700 mb-2">Currency Markets</h5>
                  <p className="text-blue-600 text-sm mb-2">40% of Asian option volume</p>
                  <p className="text-gray-600 text-sm">
                    Multinational corporations hedge average exchange rates for 
                    monthly revenue conversion or quarterly repatriation flows.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h5 className="font-semibold text-blue-700 mb-2">Commodity Markets</h5>
                  <p className="text-blue-600 text-sm mb-2">35% of Asian option volume</p>
                  <p className="text-gray-600 text-sm">
                    Oil refiners, mining companies, and agricultural businesses hedge 
                    average prices for continuous production and sales cycles.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h5 className="font-semibold text-blue-700 mb-2">Equity Markets</h5>
                  <p className="text-blue-600 text-sm mb-2">25% of Asian option volume</p>
                  <p className="text-gray-600 text-sm">
                    Fund managers and pension funds use Asian options for 
                    dollar-cost averaging strategies and systematic investment plans.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 p-6 rounded-xl">
              <h4 className="font-bold text-green-800 text-xl mb-4">Regional Distribution</h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h5 className="font-semibold text-green-700 mb-2">Asia-Pacific</h5>
                  <p className="text-green-600 text-sm mb-2">55% of global volume</p>
                  <p className="text-gray-600 text-sm">
                    Highest adoption due to commodity export economies and 
                    manufacturing supply chain hedging needs.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h5 className="font-semibold text-green-700 mb-2">Europe</h5>
                  <p className="text-green-600 text-sm mb-2">25% of global volume</p>
                  <p className="text-gray-600 text-sm">
                    Strong in energy markets and currency hedging for 
                    cross-border trade within the EU.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h5 className="font-semibold text-green-700 mb-2">Americas</h5>
                  <p className="text-green-600 text-sm mb-2">20% of global volume</p>
                  <p className="text-gray-600 text-sm">
                    Growing adoption in commodity-linked structured products 
                    and pension fund strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto bg-white rounded-xl border-2 border-gray-200">
            <table className="w-full border-collapse">
              <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                <tr>
                  <th className="border border-gray-300 p-4 text-left font-bold text-gray-800">Sector</th>
                  <th className="border border-gray-300 p-4 text-left font-bold text-blue-600">Common Use Cases</th>
                  <th className="border border-gray-300 p-4 text-left font-bold text-purple-600">Typical Maturity</th>
                  <th className="border border-gray-300 p-4 text-left font-bold text-green-600">Averaging Period</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-4 font-semibold">Oil & Gas</td>
                  <td className="border border-gray-300 p-4">Refining margin protection, production hedging</td>
                  <td className="border border-gray-300 p-4">3-12 months</td>
                  <td className="border border-gray-300 p-4">Daily fixing</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-4 font-semibold">Mining</td>
                  <td className="border border-gray-300 p-4">Metal price hedging, cost averaging</td>
                  <td className="border border-gray-300 p-4">6-24 months</td>
                  <td className="border border-gray-300 p-4">Weekly/Monthly</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-4 font-semibold">Airlines</td>
                  <td className="border border-gray-300 p-4">Fuel cost hedging over operating periods</td>
                  <td className="border border-gray-300 p-4">3-6 months</td>
                  <td className="border border-gray-300 p-4">Daily fixing</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-4 font-semibold">Agriculture</td>
                  <td className="border border-gray-300 p-4">Crop price floors, feed cost management</td>
                  <td className="border border-gray-300 p-4">1-12 months</td>
                  <td className="border border-gray-300 p-4">Weekly fixing</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-4 font-semibold">Technology</td>
                  <td className="border border-gray-300 p-4">Currency hedging for overseas revenue</td>
                  <td className="border border-gray-300 p-4">1-4 quarters</td>
                  <td className="border border-gray-300 p-4">Monthly fixing</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-200 p-6 rounded-xl">
            <h4 className="font-bold text-amber-800 text-xl mb-4">Market Size & Growth</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-amber-200 text-center">
                <div className="text-2xl font-bold text-amber-700 mb-2">3-5%</div>
                <h5 className="font-semibold text-amber-700 mb-2">Of OTC Options Volume</h5>
                <p className="text-gray-600 text-sm">Asian options share of total exotic options market</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-amber-200 text-center">
                <div className="text-2xl font-bold text-amber-700 mb-2">15%</div>
                <h5 className="font-semibold text-amber-700 mb-2">Annual Growth Rate</h5>
                <p className="text-gray-600 text-sm">Driven by commodity volatility and supply chain hedging</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-amber-200 text-center">
                <div className="text-2xl font-bold text-amber-700 mb-2">95%</div>
                <h5 className="font-semibold text-amber-700 mb-2">OTC Market Share</h5>
                <p className="text-gray-600 text-sm">Nearly all Asian options are customized OTC contracts</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border-2 border-purple-200 p-6 rounded-xl">
            <h4 className="font-bold text-purple-800 text-xl mb-4">Regulatory & Clearing Trends</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-purple-700 mb-3">Standardization Efforts</h5>
                <ul className="text-purple-600 text-sm space-y-2">
                  <li>• ISDA working on standard Asian option definitions</li>
                  <li>• CME Group launched cleared Asian FX options in 2023</li>
                  <li>• ICE developing energy Asian option clearing</li>
                  <li>• Eurex considering equity Asian option listings</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-purple-700 mb-3">Risk Management Focus</h5>
                <ul className="text-purple-600 text-sm space-y-2">
                  <li>• Basel III capital treatment for path-dependent derivatives</li>
                  <li>• Enhanced margin requirements for complex exotics</li>
                  <li>• Improved model validation standards</li>
                  <li>• Greater transparency through trade reporting</li>
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
              Asian options enable sophisticated risk management strategies that take advantage of their 
              unique averaging properties. These strategies are particularly valuable for businesses with 
              ongoing exposure to asset prices and institutional investors implementing systematic approaches.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 p-6 rounded-xl">
              <h4 className="font-bold text-blue-800 text-xl mb-4">Corporate Hedging Strategies</h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h5 className="font-semibold text-blue-700 mb-2">Revenue Smoothing</h5>
                  <p className="text-blue-600 text-sm mb-2">Commodity producers using average price calls</p>
                  <p className="text-gray-600 text-sm">
                    Oil companies can protect against sustained low prices while 
                    benefiting from temporary spikes, matching their continuous production.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h5 className="font-semibold text-blue-700 mb-2">Cost Protection</h5>
                  <p className="text-blue-600 text-sm mb-2">Manufacturing companies using average price puts</p>
                  <p className="text-gray-600 text-sm">
                    Airlines hedge average fuel costs over operational periods, 
                    reducing budget volatility for quarterly planning.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h5 className="font-semibold text-blue-700 mb-2">Currency Hedging</h5>
                  <p className="text-blue-600 text-sm mb-2">Multinationals using average FX options</p>
                  <p className="text-gray-600 text-sm">
                    Technology companies hedge average exchange rates for 
                    monthly overseas revenue conversion at predictable rates.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 p-6 rounded-xl">
              <h4 className="font-bold text-green-800 text-xl mb-4">Investment Strategies</h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h5 className="font-semibold text-green-700 mb-2">Dollar-Cost Averaging Protection</h5>
                  <p className="text-green-600 text-sm mb-2">Pension funds and systematic investors</p>
                  <p className="text-gray-600 text-sm">
                    Protect systematic investment plans from adverse average entry prices 
                    while maintaining exposure to market appreciation.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h5 className="font-semibold text-green-700 mb-2">Volatility Arbitrage</h5>
                  <p className="text-green-600 text-sm mb-2">Hedge funds exploiting pricing inefficiencies</p>
                  <p className="text-gray-600 text-sm">
                    Asian options typically trade with implied volatility 10-30% 
                    lower than equivalent European options, creating arbitrage opportunities.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h5 className="font-semibold text-green-700 mb-2">Structured Products</h5>
                  <p className="text-green-600 text-sm mb-2">Banks creating retail investment products</p>
                  <p className="text-gray-600 text-sm">
                    Asian feature reduces product volatility, allowing higher 
                    participation rates in equity-linked certificates and notes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border-2 border-purple-200 p-6 rounded-xl">
            <h4 className="font-bold text-purple-800 text-xl mb-4">Advanced Asian Option Strategies</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-purple-200">
                <h5 className="font-semibold text-purple-700 mb-2">Asian Spreads</h5>
                <p className="text-gray-600 text-sm mb-2">
                  Combine multiple Asian options with different strikes or averaging periods 
                  to create tailored risk-reward profiles.
                </p>
                <p className="text-xs text-purple-600">
                  Example: Long 3-month Asian call + Short 6-month Asian call
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-purple-200">
                <h5 className="font-semibold text-purple-700 mb-2">Hybrid Structures</h5>
                <p className="text-gray-600 text-sm mb-2">
                  Mix Asian and European features, such as European options 
                  on Asian baskets or Asian options with European knockouts.
                </p>
                <p className="text-xs text-purple-600">
                  Example: European call on average of multiple commodities
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-purple-200">
                <h5 className="font-semibold text-purple-700 mb-2">Forward-Starting Asian</h5>
                <p className="text-gray-600 text-sm mb-2">
                  Asian options where the averaging period starts at a future date, 
                  useful for seasonal business cycles.
                </p>
                <p className="text-xs text-purple-600">
                  Example: Agricultural hedging starting at harvest season
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 p-6 rounded-xl">
            <h4 className="font-bold text-amber-800 text-xl mb-4">Risk Management Considerations</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-amber-700 mb-3">Model Risk</h5>
                <ul className="text-amber-600 text-sm space-y-2">
                  <li>• <strong>Pricing accuracy:</strong> Monte Carlo convergence requires many simulations</li>
                  <li>• <strong>Volatility assumptions:</strong> Constant volatility rarely holds in practice</li>
                  <li>• <strong>Correlation effects:</strong> Time-series correlations affect average distributions</li>
                  <li>• <strong>Discretization error:</strong> Continuous vs discrete averaging differences</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-amber-700 mb-3">Operational Risk</h5>
                <ul className="text-amber-600 text-sm space-y-2">
                  <li>• <strong>Fixing disputes:</strong> Agreement on averaging calculation methods</li>
                  <li>• <strong>Data quality:</strong> Reliable price feeds for averaging periods</li>
                  <li>• <strong>Settlement complexity:</strong> Multiple observation dates increase operational burden</li>
                  <li>• <strong>Liquidity risk:</strong> Limited secondary market for unwinding positions</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border-2 border-cyan-200 p-6 rounded-xl">
            <h4 className="font-bold text-cyan-800 text-xl mb-4">Practical Implementation Guidelines</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-cyan-700 mb-3">Contract Design</h5>
                <ul className="text-cyan-600 text-sm space-y-2">
                  <li>• <strong>Averaging frequency:</strong> Daily for liquid markets, weekly/monthly for others</li>
                  <li>• <strong>Business day adjustments:</strong> Clear rules for holidays and market closures</li>
                  <li>• <strong>Price sources:</strong> Specify primary and backup data providers</li>
                  <li>• <strong>Calculation agent:</strong> Independent third party for complex structures</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-cyan-700 mb-3">Hedging Best Practices</h5>
                <ul className="text-cyan-600 text-sm space-y-2">
                  <li>• <strong>Delta hedging:</strong> More stable than European options due to averaging</li>
                  <li>• <strong>Vega management:</strong> Lower vega makes volatility hedging easier</li>
                  <li>• <strong>Gamma effects:</strong> Reduced gamma near expiration compared to Europeans</li>
                  <li>• <strong>Path monitoring:</strong> Track running average for early exercise decisions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    greeks: {
      title: "Asian Option Greeks & Risk Sensitivities",
      content: (
        <div className="space-y-8">
          <div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Asian option Greeks behave differently from their European counterparts due to the averaging effect. 
              The path-dependent nature creates unique risk characteristics that require specialized hedging approaches 
              and risk management techniques.
            </p>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 p-6 rounded-xl mb-8">
            <h4 className="font-bold text-amber-800 text-xl mb-4 text-center">How Averaging Affects Greeks</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-amber-200 text-center">
                <div className="text-2xl mb-2">📉</div>
                <h5 className="font-semibold text-amber-700 mb-2">Reduced Magnitude</h5>
                <p className="text-amber-600 text-sm">All Greeks typically 20-50% lower than European equivalents</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-amber-200 text-center">
                <div className="text-2xl mb-2">🔄</div>
                <h5 className="font-semibold text-amber-700 mb-2">Path Dependency</h5>
                <p className="text-amber-600 text-sm">Greeks depend on running average, not just current price</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-amber-200 text-center">
                <div className="text-2xl mb-2">⏱️</div>
                <h5 className="font-semibold text-amber-700 mb-2">Time Evolution</h5>
                <p className="text-amber-600 text-sm">Greeks change as averaging period progresses</p>
              </div>
            </div>
            
            <div className="mt-6 bg-white p-4 rounded-lg border border-amber-200">
              <h5 className="font-semibold text-amber-700 mb-2">Why Greeks Are Dampened</h5>
              <p className="text-amber-600 text-sm mb-2">
                <strong>Intuitive Explanation:</strong> When only part of the averaging period remains, 
                a price change has less impact on the final average. This "dilution effect" reduces 
                all the sensitivities (Greeks) compared to European options.
              </p>
              <p className="text-amber-600 text-sm">
                <strong>Example:</strong> If 20 days of a 30-day average are already "locked in," 
                today's 10% price move only affects 10/30 = 33% of the final average calculation.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 p-6 rounded-xl">
              <h4 className="font-bold text-blue-800 text-xl mb-4">Delta (Δ) - Modified Price Sensitivity</h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h5 className="font-semibold text-blue-700 mb-2">Asian Delta Characteristics</h5>
                  <div className="text-blue-700 text-sm space-y-2">
                    <p><strong>Magnitude:</strong> Generally 30-60% of European delta</p>
                    <p><strong>Evolution:</strong> Decreases as averaging period progresses</p>
                    <p><strong>Dependency:</strong> Function of current price vs running average</p>
                    <p><strong>Stability:</strong> More stable than European delta near expiration</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h5 className="font-semibold text-blue-700 mb-2">Hedging Implications</h5>
                  <ul className="text-blue-600 text-sm space-y-1">
                    <li>• Lower hedge ratios required</li>
                    <li>• Less frequent rebalancing needed</li>
                    <li>• More predictable hedging costs</li>
                    <li>• Better hedging efficiency for ongoing exposures</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 p-6 rounded-xl">
              <h4 className="font-bold text-green-800 text-xl mb-4">Gamma (Γ) - Reduced Convexity</h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h5 className="font-semibold text-green-700 mb-2">Asian Gamma Behavior</h5>
                  <div className="text-green-700 text-sm space-y-2">
                    <p><strong>Lower Peak:</strong> Maximum gamma 50-80% less than European</p>
                    <p><strong>Broader Distribution:</strong> Less concentrated around ATM</p>
                    <p><strong>Time Decay:</strong> Gamma decreases more gradually</p>
                    <p><strong>Averaging Effect:</strong> Smoothed price sensitivity changes</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h5 className="font-semibold text-green-700 mb-2">Risk Management Benefits</h5>
                  <ul className="text-green-600 text-sm space-y-1">
                    <li>• Reduced gamma risk near expiration</li>
                    <li>• Less dramatic hedging adjustments</li>
                    <li>• Lower transaction costs for market makers</li>
                    <li>• More manageable portfolio gamma exposure</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 border-2 border-purple-200 p-6 rounded-xl">
              <h4 className="font-bold text-purple-800 text-xl mb-4">Theta (Θ) - Complex Time Decay</h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h5 className="font-semibold text-purple-700 mb-2">Two-Phase Time Decay</h5>
                  <div className="text-purple-700 text-sm space-y-2">
                    <p><strong>Early Phase:</strong> Lower theta during averaging period</p>
                    <p><strong>Late Phase:</strong> Accelerated decay near expiration</p>
                    <p><strong>Path Dependence:</strong> Theta varies with running average position</p>
                    <p><strong>Averaging Complete:</strong> Reverts to European-like behavior</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h5 className="font-semibent text-purple-700 mb-2">Strategic Implications</h5>
                  <ul className="text-purple-600 text-sm space-y-1">
                    <li>• Time decay strategies require longer horizons</li>
                    <li>• Less predictable theta acceleration</li>
                    <li>• Weekend/holiday effects are dampened</li>
                    <li>• Better for income strategies in volatile markets</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200 p-6 rounded-xl">
              <h4 className="font-bold text-orange-800 text-xl mb-4">Vega (ν) - Volatility Sensitivity</h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-orange-200">
                  <h5 className="font-semibold text-orange-700 mb-2">Reduced Vega Profile</h5>
                  <div className="text-orange-700 text-sm space-y-2">
                    <p><strong>Lower Sensitivity:</strong> Vega typically 40-70% of European</p>
                    <p><strong>Period Dependence:</strong> Higher early in averaging period</p>
                    <p><strong>Volatility Type:</strong> More sensitive to long-term volatility</p>
                    <p><strong>Smile Effects:</strong> Less pronounced volatility smile impact</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-orange-200">
                  <h5 className="font-semibold text-orange-700 mb-2">Volatility Trading Advantages</h5>
                  <ul className="text-orange-600 text-sm space-y-1">
                    <li>• Lower volatility risk for hedgers</li>
                    <li>• More stable pricing in volatile markets</li>
                    <li>• Reduced sensitivity to vol smile changes</li>
                    <li>• Better for long-term volatility views</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-50 to-slate-50 border-2 border-gray-200 p-6 rounded-xl">
            <h4 className="font-bold text-gray-800 text-xl mb-4">Advanced Asian Greeks</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h5 className="font-semibold text-gray-700 mb-2">Rho (ρ)</h5>
                <p className="text-gray-600 text-sm mb-2">Interest rate sensitivity</p>
                <p className="text-gray-600 text-xs">
                  Lower than European due to averaging effect, but still important for 
                  long-dated contracts with extended averaging periods.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h5 className="font-semibold text-gray-700 mb-2">Path Rho</h5>
                <p className="text-gray-600 text-sm mb-2">Sensitivity to running average</p>
                <p className="text-gray-600 text-xs">
                  Unique to path-dependent options - measures how option value 
                  changes with the current running average level.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h5 className="font-semibold text-gray-700 mb-2">Time Proportion Greek</h5>
                <p className="text-gray-600 text-sm mb-2">Sensitivity to averaging progress</p>
                <p className="text-gray-600 text-xs">
                  Measures how option value changes as the averaging period 
                  progresses, critical for mid-life risk management.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200 p-6 rounded-xl">
            <h4 className="font-bold text-indigo-800 text-xl mb-4">Practical Greek Applications</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-indigo-700 mb-3">Corporate Risk Management</h5>
                <ul className="text-indigo-600 text-sm space-y-2">
                  <li>• <strong>Lower hedge ratios:</strong> Reduced delta means smaller hedge positions</li>
                  <li>• <strong>Stable Greeks:</strong> Less frequent risk parameter updates needed</li>
                  <li>• <strong>Volatility protection:</strong> Natural hedge against vol spikes</li>
                  <li>• <strong>Path monitoring:</strong> Track running average for decision making</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibent text-indigo-700 mb-3">Portfolio Management</h5>
                <ul className="text-indigo-600 text-sm space-y-2">
                  <li>• <strong>Diversification:</strong> Asian Greeks correlate differently with markets</li>
                  <li>• <strong>Risk budgeting:</strong> Lower Greeks allow larger position sizes</li>
                  <li>• <strong>Stress testing:</strong> More predictable behavior in extreme scenarios</li>
                  <li>• <strong>Regulatory capital:</strong> Lower risk metrics reduce capital requirements</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-50 to-green-50 border-2 border-emerald-200 p-6 rounded-xl">
            <h4 className="font-bold text-emerald-800 text-xl mb-4">Greek Evolution Patterns</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h5 className="font-semibold text-emerald-700">Early in Averaging Period</h5>
                <ul className="text-emerald-600 text-sm space-y-1">
                  <li>• Greeks closer to European equivalents</li>
                  <li>• Higher sensitivity to price changes</li>
                  <li>• Volatility sensitivity at maximum</li>
                  <li>• Time decay relatively slow</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h5 className="font-semibold text-emerald-700">Late in Averaging Period</h5>
                <ul className="text-emerald-600 text-sm space-y-1">
                  <li>• Greeks significantly dampened</li>
                  <li>• Reduced price sensitivity</li>
                  <li>• Lower volatility impact</li>
                  <li>• Accelerated time decay</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    }
  };

  const tabs = [
    { id: 'definition', label: 'Definition', icon: '🌏' },
    { id: 'pricing', label: 'Pricing Methods', icon: '🧮' },
    { id: 'markets', label: 'Markets', icon: '🏭' },
    { id: 'strategies', label: 'Strategies', icon: '📊' },
    { id: 'greeks', label: 'Greeks', icon: '📈' }
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
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
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
              <span>4 of 7 lessons</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 h-2 rounded-full" style={{width: '57%'}}></div>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-6 rounded-xl mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2 pr-4">Experience Asian Option Pricing</h3>
                <p className="text-amber-100">
                  Use our OptiPrice calculator to explore Monte Carlo simulation for Asian options. 
                </p>
                <p className="text-amber-100 pr-4">
                  Compare arithmetic vs geometric averaging and see path-dependent pricing in action.
                </p>
              </div>
              <button
                onClick={() => navigate('/toolbox/optiprice')}
                className="!bg-white !text-amber-600 px-6 py-3 !rounded-lg !font-semibold !hover:bg-amber-50 !transition-colors flex-shrink-0"
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
                      ? `!bg-white !text-gray-700 !border-gray-300 !border-b-white !relative !z-30 !rounded-t-lg !rounded-b-none !border-2 !border-t-2 !border-r-2 !border-l-2`
                      : `!bg-gray-100 !text-gray-600 !border-gray-300 !border-b-gray-300 !hover:bg-gray-200 !hover:text-blue-700 !rounded-t-lg !rounded-b-none !border-b-0 !border-t-2 !border-r-2 !border-l-2`
                  }`}
                  style={{ outline: 'none', boxShadow: 'none' }}
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
                style={{zIndex: 5}}
              ></div>
              
              {/* White content on top */}
              <div 
                className={`bg-white border-2 border-gray-300 p-8 relative z-20 ${
                  activeTab === 'definition' ?
                    'rounded-tr-2xl rounded-b-2xl' : 'rounded-2xl'
                }`}
                style={{marginTop: '-2px'}}
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
              onClick={() => navigate('/learning/options/american')}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back: American Options</span>
            </button>
            
            <button
              onClick={() => navigate('/learning/options/black-scholes')}
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <span>Next: Black-Scholes Model</span>
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

export default AsianOptions;