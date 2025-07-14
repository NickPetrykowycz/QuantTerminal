// frontend/src/pages/BlackScholes.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { useAuth } from '../contexts/AuthContext';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const BlackScholes = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('foundation');

  const tabContent = {
    foundation: {
      title: "The Black-Scholes Revolution",
      content: (
        <div className="space-y-8">
          <div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              The <strong>Black-Scholes model</strong> revolutionized finance by providing the first complete 
              mathematical framework for pricing options. Developed by Fischer Black, Myron Scholes, and Robert Merton 
              in the early 1970s, it solved a problem that had puzzled economists for decades: how to determine 
              the fair value of an option.
            </p>
            
            <div className="bg-blue-100 border-2 border-blue-300 text-blue-900 p-6 rounded-xl mb-6">
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-bold mb-2">Nobel Prize Impact</h4>
                  <p>
                    The Black-Scholes formula earned Myron Scholes and Robert Merton the 1997 Nobel Prize in Economics. 
                    Fischer Black had passed away in 1995, but his contribution was acknowledged as equally fundamental 
                    to this groundbreaking achievement.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 p-6 rounded-xl">
              <h4 className="font-bold text-green-800 text-xl mb-4 flex items-center">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                Revolutionary Contributions
              </h4>
              <ul className="space-y-3 text-green-700">
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span><strong>Risk-Neutral Pricing:</strong> Introduced the concept of pricing without knowing expected returns</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span><strong>Dynamic Hedging:</strong> Showed how to create a risk-free portfolio with options and stocks</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span><strong>Mathematical Rigor:</strong> Brought advanced calculus and PDEs to finance</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span><strong>Market Foundation:</strong> Enabled the explosive growth of derivatives markets</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 border-2 border-purple-200 p-6 rounded-xl">
              <h4 className="font-bold text-purple-800 text-xl mb-4 flex items-center">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                Historical Timeline
              </h4>
              <div className="space-y-3 text-purple-700">
                <div className="flex items-start space-x-3">
                  <span className="text-purple-500 font-bold">1900:</span>
                  <span className="text-sm">Louis Bachelier's thesis on option pricing - 70 years ahead of its time</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-purple-500 font-bold">1973:</span>
                  <span className="text-sm">Black-Scholes paper published in Journal of Political Economy</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-purple-500 font-bold">1973:</span>
                  <span className="text-sm">Chicago Board Options Exchange (CBOE) opens - perfect timing</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-purple-500 font-bold">1997:</span>
                  <span className="text-sm">Nobel Prize awarded to Scholes and Merton</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-50 to-slate-50 border-2 border-gray-200 p-6 rounded-xl">
            <h4 className="font-bold text-gray-800 text-xl mb-4">Core Insight: Risk-Neutral Valuation</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h5 className="font-semibold text-gray-700 mb-3">The Breakthrough Idea</h5>
                <p className="text-gray-600 text-sm mb-3">
                  <strong>Key Insight:</strong> You don't need to know how fast a stock will grow to price an option! 
                  By creating a perfect hedge (stock + option), the growth rate cancels out.
                </p>
                <p className="text-gray-600 text-sm">
                  <strong>Why Revolutionary:</strong> Previous attempts failed because they tried to estimate 
                  expected stock returns, which is nearly impossible. Black-Scholes bypassed this entirely.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h5 className="font-semibold text-gray-700 mb-3">Mathematical Elegance</h5>
                <p className="text-gray-600 text-sm mb-3">
                  The model reduces option pricing to solving a partial differential equation, similar to 
                  heat diffusion in physics. This connection allowed financial engineers to borrow 
                  well-established mathematical techniques.
                </p>
                <p className="text-gray-600 text-sm">
                  <strong>Result:</strong> A single formula that works for any European option, 
                  regardless of the underlying asset or market conditions.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 p-6 rounded-xl">
            <h4 className="font-bold text-amber-800 text-xl mb-4">Market Impact & Growth</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-amber-200 text-center">
                <div className="text-2xl font-bold text-amber-700 mb-2">$0</div>
                <h5 className="font-semibold text-amber-700 mb-2">Options Market 1973</h5>
                <p className="text-gray-600 text-sm">Before Black-Scholes, organized options trading barely existed</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-amber-200 text-center">
                <div className="text-2xl font-bold text-amber-700 mb-2">$600T+</div>
                <h5 className="font-semibold text-amber-700 mb-2">Derivatives Market Today</h5>
                <p className="text-gray-600 text-sm">Global notional value of all derivative contracts</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-amber-200 text-center">
                <div className="text-2xl font-bold text-amber-700 mb-2">Billions</div>
                <h5 className="font-semibold text-amber-700 mb-2">Daily Calculations</h5>
                <p className="text-gray-600 text-sm">Black-Scholes computations performed every trading day</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    formula: {
      title: "The Black-Scholes Formula & Mathematical Framework",
      content: (
        <div className="space-y-8">
          <div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              The Black-Scholes formula provides an exact solution for pricing European options. 
              While the derivation involves advanced mathematics, the final formula is elegantly simple 
              and computationally efficient, making it practical for real-time trading applications.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 p-8 rounded-xl">
            <h4 className="font-bold text-blue-800 text-xl mb-6 text-center">The Complete Black-Scholes Formula</h4>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-blue-200">
                <h5 className="font-semibold text-blue-700 mb-4 text-center">European Call Option (No Dividends)</h5>
                <div className="text-center bg-blue-50 p-4 rounded text-lg mb-4">
                  <BlockMath math="C = S_0 N(d_1) - K e^{-rT} N(d_2)" />
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-center">
                  <div className="bg-blue-50 p-3 rounded">
                    <BlockMath math="d_1 = \frac{\ln(S_0/K) + (r + \sigma^2/2)T}{\sigma\sqrt{T}}" />
                  </div>
                  <div className="bg-blue-50 p-3 rounded">
                    <BlockMath math="d_2 = d_1 - \sigma\sqrt{T}" />
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-blue-200">
                <h5 className="font-semibold text-blue-700 mb-4 text-center">European Put Option (No Dividends)</h5>
                <div className="text-center bg-blue-50 p-4 rounded text-lg mb-4">
                  <BlockMath math="P = K e^{-rT} N(-d_2) - S_0 N(-d_1)" />
                </div>
                <p className="text-blue-600 text-sm text-center">
                  Note: Uses the same d₁ and d₂ parameters as the call formula
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-blue-200">
                <h5 className="font-semibold text-blue-700 mb-4 text-center">Dividend-Adjusted Formulas</h5>
                <div className="text-center bg-blue-50 p-4 rounded text-lg mb-4">
                  <div className="space-y-2">
                    <div><BlockMath math="C = S_0 e^{-qT} N(d_1) - K e^{-rT} N(d_2)" /></div>
                    <div><BlockMath math="P = K e^{-rT} N(-d_2) - S_0 e^{-qT} N(-d_1)" /></div>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-center">
                  <div className="bg-blue-50 p-3 rounded">
                    <BlockMath math="d_1 = \frac{\ln(S_0/K) + (r - q + \sigma^2/2)T}{\sigma\sqrt{T}}" />
                  </div>
                  <div className="bg-blue-50 p-3 rounded">
                    <BlockMath math="d_2 = d_1 - \sigma\sqrt{T}" />
                  </div>
                </div>
                <p className="text-blue-600 text-sm text-center mt-3">
                  Where <strong>q</strong> is the continuous dividend yield
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 p-6 rounded-xl">
              <h4 className="font-bold text-green-800 text-xl mb-4">Parameter Definitions</h4>
              <div className="space-y-3 text-green-700">
                <div className="flex items-center space-x-3">
                  <InlineMath math="S_0" />
                  <span className="text-sm">Current stock price (observable)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <InlineMath math="K" />
                  <span className="text-sm">Strike price (contract specification)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <InlineMath math="T" />
                  <span className="text-sm">Time to expiration in years (observable)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <InlineMath math="r" />
                  <span className="text-sm">Risk-free rate (observable from bonds)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <InlineMath math="q" />
                  <span className="text-sm">Dividend yield - continuous rate (estimated)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <InlineMath math="\sigma" />
                  <span className="text-sm">Volatility (must be estimated!)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <InlineMath math="N(\cdot)" />
                  <span className="text-sm">Cumulative standard normal distribution</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 border-2 border-purple-200 p-6 rounded-xl">
              <h4 className="font-bold text-purple-800 text-xl mb-4">Formula Intuition</h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h5 className="font-semibold text-purple-700 mb-2">Two-Part Structure</h5>
                  <p className="text-purple-600 text-sm mb-3">
                    <strong>Part 1:</strong> <InlineMath math="S_0 N(d_1)" /> = Expected value of stock if option finishes in-the-money
                  </p>
                  <p className="text-purple-600 text-sm">
                    <strong>Part 2:</strong> <InlineMath math="K e^{-rT} N(d_2)" /> = Present value of strike payment, weighted by exercise probability
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h5 className="font-semibold text-purple-700 mb-2">The <InlineMath math="N(d_1)" /> and <InlineMath math="N(d_2)" /> Terms</h5>
                  <p className="text-purple-600 text-sm mb-2">
                    <InlineMath math="N(d_1)" /> = "Delta" - hedge ratio and risk-adjusted probability
                  </p>
                  <p className="text-purple-600 text-sm">
                    <InlineMath math="N(d_2)" /> = Probability option expires in-the-money
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 p-6 rounded-xl">
            <h4 className="font-bold text-amber-800 text-xl mb-4">Practical Calculation Steps</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg border border-amber-200">
                <h5 className="font-semibold text-amber-700 mb-3">Step-by-Step Process</h5>
                <ol className="text-amber-600 text-sm space-y-2">
                  <li><strong>1.</strong> Gather inputs: S₀, K, T, r, q, σ</li>
                  <li><strong>2.</strong> Calculate d₁ using the appropriate formula</li>
                  <li><strong>3.</strong> Calculate d₂ = d₁ - σ√T</li>
                  <li><strong>4.</strong> Look up N(d₁) and N(d₂) from normal table</li>
                  <li><strong>5.</strong> Apply call or put formula (with/without dividends)</li>
                  <li><strong>6.</strong> Verify result makes economic sense</li>
                </ol>
              </div>
              <div className="bg-white p-4 rounded-lg border border-amber-200">
                <h5 className="font-semibold text-amber-700 mb-3">Common Pitfalls</h5>
                <ul className="text-amber-600 text-sm space-y-2">
                  <li>• <strong>Time units:</strong> T must be in years (30 days = 30/365)</li>
                  <li>• <strong>Rate format:</strong> r as decimal (5% = 0.05)</li>
                  <li>• <strong>Volatility:</strong> σ as decimal (20% = 0.20)</li>
                  <li>• <strong>Dividend yield:</strong> q as continuous rate (4% = 0.04)</li>
                  <li>• <strong>Continuous rates:</strong> Use ln() for continuous compounding</li>
                </ul>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-amber-200 mt-4">
              <h5 className="font-semibold text-amber-700 mb-3">Dividend Considerations</h5>
              <div className="grid md:grid-cols-2 gap-4 text-amber-600 text-sm">
                <div>
                  <p><strong>Continuous yield (q):</strong> For stocks with regular dividends, estimate annual yield</p>
                  <p><strong>Discrete dividends:</strong> Subtract PV of expected dividends from S₀</p>
                </div>
                <div>
                  <p><strong>No dividends:</strong> Set q = 0, use standard formula</p>
                  <p><strong>Index options:</strong> Use index dividend yield (typically 1-3%)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border-2 border-cyan-200 p-6 rounded-xl">
            <h4 className="font-bold text-cyan-800 text-xl mb-4">Put-Call Parity Relationship</h4>
            <div className="bg-white p-4 rounded-lg border border-cyan-200">
              <h5 className="font-semibold text-cyan-700 mb-3 text-center">Fundamental Relationship</h5>
              <div className="text-center bg-cyan-50 p-4 rounded text-lg mb-4">
                <BlockMath math="C - P = S_0 - K e^{-rT}" />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h6 className="font-semibold text-cyan-700 text-sm mb-2">Economic Intuition</h6>
                  <p className="text-cyan-600 text-xs">
                    Buying a call and selling a put with the same strike creates a synthetic forward contract. 
                    The price difference must equal the forward premium.
                  </p>
                </div>
                <div>
                  <h6 className="font-semibold text-cyan-700 text-sm mb-2">Arbitrage Prevention</h6>
                  <p className="text-cyan-600 text-xs">
                    If this relationship doesn't hold, traders can profit risk-free by buying the 
                    cheap side and selling the expensive side.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    derivation: {
      title: "Deriving the Black-Scholes Formula: The Mathematical Journey",
      content: (
        <div className="space-y-8">
          <div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              The Black-Scholes derivation is a masterpiece of mathematical finance, combining insights from 
              physics, probability theory, and economic reasoning. The key breakthrough was realizing that you 
              can create a risk-free portfolio by combining options with stocks, eliminating the need to 
              know expected returns.
            </p>
          </div>

          <div className="bg-gradient-to-r from-emerald-50 to-green-50 border-2 border-emerald-200 p-6 rounded-xl">
            <h4 className="font-bold text-emerald-800 text-xl mb-4 text-center">The Core Insight: Dynamic Replication</h4>
            <div className="bg-white p-4 rounded-lg border border-emerald-200">
              <p className="text-emerald-700 mb-3">
                <strong>Central Idea:</strong> If you can perfectly replicate an option's payoff using stocks and bonds, 
                then the option must have the same value as the replicating portfolio. Otherwise, arbitrage opportunities would exist.
              </p>
              <p className="text-emerald-600 text-sm">
                This "no-arbitrage" principle is the foundation of all derivatives pricing. It converts a complex 
                valuation problem into a simpler portfolio construction problem.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 p-6 rounded-xl">
            <h4 className="font-bold text-blue-800 text-xl mb-4">Step 1: Setting Up the Stock Price Model</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h5 className="font-semibold text-blue-700 mb-3">Geometric Brownian Motion</h5>
                <div className="text-center bg-blue-50 p-3 rounded mb-3">
                  <BlockMath math="dS = \mu S dt + \sigma S dW" />
                </div>
                <div className="text-blue-600 text-sm space-y-2">
                  <p><strong>dS:</strong> Change in stock price over small time dt</p>
                  <p><strong>μ:</strong> Expected return (drift)</p>
                  <p><strong>σ:</strong> Volatility (random component)</p>
                  <p><strong>dW:</strong> Random Brownian motion increment</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h5 className="font-semibold text-blue-700 mb-3">Why This Model?</h5>
                <div className="text-blue-600 text-sm space-y-2">
                  <p>• <strong>Proportional changes:</strong> Stock moves by percentage, not absolute amounts</p>
                  <p>• <strong>Continuous trading:</strong> No gaps or jumps in prices</p>
                  <p>• <strong>Random walks:</strong> Future prices independent of path taken</p>
                  <p>• <strong>Constant parameters:</strong> μ and σ don't change over time</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-violet-50 border-2 border-purple-200 p-6 rounded-xl">
            <h4 className="font-bold text-purple-800 text-xl mb-4">Step 2: Creating the Replicating Portfolio</h4>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-purple-200">
                <h5 className="font-semibold text-purple-700 mb-3">Portfolio Construction</h5>
                <p className="text-purple-600 text-sm mb-3">
                  Create a portfolio Π that replicates the option: <strong>Π = V - ΔS</strong>
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-purple-50 p-3 rounded">
                    <p className="text-purple-600 text-sm">
                      <strong>V:</strong> Option value (what we want to find)
                    </p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded">
                    <p className="text-purple-600 text-sm">
                      <strong>Δ:</strong> Number of shares (hedge ratio)
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg border border-purple-200">
                <h5 className="font-semibold text-purple-700 mb-3">The Key Insight</h5>
                <p className="text-purple-600 text-sm mb-2">
                  <strong>Goal:</strong> Choose Δ such that the portfolio change dΠ has no random component
                </p>
                <p className="text-gray-600 text-xs">
                  If we can eliminate randomness, the portfolio must earn the risk-free rate to prevent arbitrage
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 p-6 rounded-xl">
            <h4 className="font-bold text-amber-800 text-xl mb-4">Step 3: Applying Itô's Lemma</h4>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-amber-200">
                <h5 className="font-semibold text-amber-700 mb-3">Option Price Changes</h5>
                <p className="text-amber-600 text-sm mb-3">
                  Since V = V(S,t), we need to find how the option price changes with stock price and time:
                </p>
                <div className="text-center bg-amber-50 p-3 rounded mb-3">
                  <BlockMath math="dV = \frac{\partial V}{\partial t}dt + \frac{\partial V}{\partial S}dS + \frac{1}{2}\frac{\partial^2 V}{\partial S^2}(dS)^2" />
                </div>
                <p className="text-amber-600 text-sm">
                  <strong>Itô's Lemma:</strong> Extension of calculus chain rule to stochastic processes
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-amber-200">
                <h5 className="font-semibold text-amber-700 mb-3">Substituting the Stock Model</h5>
                <div className="text-center bg-amber-50 p-3 rounded mb-3">
                  <BlockMath math="dV = \left(\frac{\partial V}{\partial t} + \frac{1}{2}\sigma^2 S^2\frac{\partial^2 V}{\partial S^2}\right)dt + \frac{\partial V}{\partial S}\sigma S dW" />
                </div>
                <p className="text-amber-600 text-sm">
                  Note: The drift term μ appears in both dS and dV, which will be crucial for the next step
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-rose-50 to-pink-50 border-2 border-rose-200 p-6 rounded-xl">
            <h4 className="font-bold text-rose-800 text-xl mb-4">Step 4: Eliminating Risk - The Magic Cancellation</h4>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-rose-200">
                <h5 className="font-semibold text-rose-700 mb-3">Portfolio Change</h5>
                <div className="text-center bg-rose-50 p-3 rounded mb-3">
                  <BlockMath math="d\Pi = dV - \Delta dS" />
                </div>
                <p className="text-rose-600 text-sm mb-3">
                  Substituting our expressions and collecting terms by dt and dW:
                </p>
                <div className="text-center bg-rose-50 p-3 rounded">
                  <BlockMath math="d\Pi = \left[\frac{\partial V}{\partial t} + \frac{1}{2}\sigma^2 S^2\frac{\partial^2 V}{\partial S^2} - \Delta(\mu S)\right]dt + \left[\frac{\partial V}{\partial S} - \Delta\right]\sigma S dW" />
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg border border-rose-200">
                <h5 className="font-semibold text-rose-700 mb-3">The Crucial Choice</h5>
                <p className="text-rose-600 text-sm mb-3">
                  <strong>Set the coefficient of dW to zero:</strong> Choose <InlineMath math="\Delta = \frac{\partial V}{\partial S}" />
                </p>
                <p className="text-gray-600 text-xs">
                  This eliminates all randomness from the portfolio! The portfolio becomes risk-free.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border-2 border-cyan-200 p-6 rounded-xl">
            <h4 className="font-bold text-cyan-800 text-xl mb-4">Step 5: Risk-Free Return Condition</h4>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-cyan-200">
                <h5 className="font-semibold text-cyan-700 mb-3">No-Arbitrage Requirement</h5>
                <p className="text-cyan-600 text-sm mb-3">
                  Since our portfolio Π is now risk-free, it must earn the risk-free rate r:
                </p>
                <div className="text-center bg-cyan-50 p-3 rounded mb-3">
                  <BlockMath math="d\Pi = r\Pi dt" />
                </div>
                <p className="text-cyan-600 text-sm">
                  Where <InlineMath math="\Pi = V - \Delta S = V - \frac{\partial V}{\partial S}S" />
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-cyan-200">
                <h5 className="font-semibold text-cyan-700 mb-3">The Black-Scholes PDE</h5>
                <p className="text-cyan-600 text-sm mb-3">
                  Equating our two expressions for dΠ and simplifying:
                </p>
                <div className="text-center bg-cyan-50 p-3 rounded text-lg">
                  <BlockMath math="\frac{\partial V}{\partial t} + \frac{1}{2}\sigma^2 S^2\frac{\partial^2 V}{\partial S^2} + rS\frac{\partial V}{\partial S} - rV = 0" />
                </div>
                <p className="text-cyan-600 text-sm mt-3">
                  <strong>Notice:</strong> The expected return μ has completely disappeared! This is the key insight.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200 p-6 rounded-xl">
            <h4 className="font-bold text-indigo-800 text-xl mb-4">Step 6: Boundary Conditions & Solution</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg border border-indigo-200">
                <h5 className="font-semibold text-indigo-700 mb-3">European Call Boundaries</h5>
                <div className="text-indigo-600 text-sm space-y-2">
                  <p><strong>At expiration (t = T):</strong></p>
                  <div className="bg-indigo-50 p-2 rounded text-center">
                    <InlineMath math="V(S,T) = \max(S-K, 0)" />
                  </div>
                  <p><strong>As S → 0:</strong> V(0,t) = 0</p>
                  <p><strong>As S → ∞:</strong> V(S,t) ≈ S - Ke^(-r(T-t))</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg border border-indigo-200">
                <h5 className="font-semibold text-indigo-700 mb-3">Solution Method</h5>
                <div className="text-indigo-600 text-sm space-y-2">
                  <p>• <strong>Change of variables:</strong> Transform to heat equation</p>
                  <p>• <strong>Risk-neutral measure:</strong> Work in probability space where drift = r</p>
                  <p>• <strong>Analytical solution:</strong> Express as expectation under risk-neutral measure</p>
                  <p>• <strong>Final result:</strong> The Black-Scholes formula!</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 p-6 rounded-xl">
            <h4 className="font-bold text-green-800 text-xl mb-4">The Elegant Final Result</h4>
            <div className="bg-white p-6 rounded-lg border border-green-200">
              <h5 className="font-semibold text-green-700 mb-4 text-center">European Call Option Price</h5>
              <div className="text-center bg-green-50 p-4 rounded text-lg mb-4">
                <BlockMath math="C = S_0 N(d_1) - K e^{-rT} N(d_2)" />
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-center">
                <div className="bg-green-50 p-3 rounded">
                  <BlockMath math="d_1 = \frac{\ln(S_0/K) + (r + \sigma^2/2)T}{\sigma\sqrt{T}}" />
                </div>
                <div className="bg-green-50 p-3 rounded">
                  <BlockMath math="d_2 = d_1 - \sigma\sqrt{T}" />
                </div>
              </div>
              <p className="text-green-600 text-sm mt-4 text-center">
                <strong>Remarkable:</strong> An exact closed-form solution to a complex stochastic differential equation!
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-50 to-slate-50 border-2 border-gray-200 p-6 rounded-xl">
            <h4 className="font-bold text-gray-800 text-xl mb-4">Why This Derivation Is Brilliant</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-gray-700 mb-3">Mathematical Elegance</h5>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• <strong>Parameter elimination:</strong> Expected return μ cancels out completely</li>
                  <li>• <strong>Risk-neutral world:</strong> Pricing as if all assets earn risk-free rate</li>
                  <li>• <strong>Analytical solution:</strong> Exact formula, no numerical approximation</li>
                  <li>• <strong>Universal applicability:</strong> Works for any underlying following GBM</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-700 mb-3">Economic Insights</h5>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• <strong>No-arbitrage pricing:</strong> Market efficiency ensures consistent prices</li>
                  <li>• <strong>Dynamic hedging:</strong> Continuous rebalancing creates perfect replication</li>
                  <li>• <strong>Volatility focus:</strong> Only uncertainty that matters for pricing</li>
                  <li>• <strong>Time value decay:</strong> Options lose value as expiration approaches</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-yellow-200 p-6 rounded-xl">
            <h4 className="font-bold text-yellow-800 text-xl mb-4">Alternative Derivation Approaches</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-yellow-200">
                <h5 className="font-semibold text-yellow-700 mb-2">Risk-Neutral Valuation</h5>
                <p className="text-yellow-600 text-sm">
                  Start directly with risk-neutral expectation. Mathematically equivalent but more intuitive for some.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-yellow-200">
                <h5 className="font-semibold text-yellow-700 mb-2">Martingale Approach</h5>
                <p className="text-yellow-600 text-sm">
                  Use martingale theory and change of measure. More advanced but generalizes to complex derivatives.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-yellow-200">
                <h5 className="font-semibold text-yellow-700 mb-2">PDE Methods</h5>
                <p className="text-yellow-600 text-sm">
                  Start with the PDE directly and solve using Green's functions or Fourier transforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    assumptions: {
      title: "Model Assumptions & Real-World Limitations",
      content: (
        <div className="space-y-8">
          <div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              The Black-Scholes model makes several simplifying assumptions to achieve mathematical tractability. 
              Understanding these assumptions—and where they break down in practice—is crucial for effective 
              options trading and risk management.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 p-6 rounded-xl">
            <h4 className="font-bold text-blue-800 text-xl mb-4 text-center">The Seven Core Assumptions</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h5 className="font-semibold text-blue-700 mb-2">1. Constant Volatility</h5>
                  <p className="text-blue-600 text-sm mb-2">
                    <strong>Assumption:</strong> Volatility σ remains constant over the option's life
                  </p>
                  <p className="text-gray-600 text-xs">
                    <strong>Reality:</strong> Volatility clusters, spikes during crises, and varies with market conditions
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h5 className="font-semibold text-blue-700 mb-2">2. Constant Risk-Free Rate</h5>
                  <p className="text-blue-600 text-sm mb-2">
                    <strong>Assumption:</strong> Interest rate r is known and constant
                  </p>
                  <p className="text-gray-600 text-xs">
                    <strong>Reality:</strong> Interest rates change frequently, especially in volatile economic periods
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h5 className="font-semibold text-blue-700 mb-2">3. Geometric Brownian Motion</h5>
                  <p className="text-blue-600 text-sm mb-2">
                    <strong>Assumption:</strong> Stock prices follow continuous, smooth random walks
                  </p>
                  <p className="text-gray-600 text-xs">
                    <strong>Reality:</strong> Markets have gaps, jumps, and extreme moves (fat tails)
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h5 className="font-semibold text-blue-700 mb-2">4. European Exercise Only</h5>
                  <p className="text-blue-600 text-sm mb-2">
                    <strong>Assumption:</strong> Options can only be exercised at expiration
                  </p>
                  <p className="text-gray-600 text-xs">
                    <strong>Reality:</strong> Most exchange-traded equity options are American-style
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h5 className="font-semibold text-blue-700 mb-2">5. No Dividends</h5>
                  <p className="text-blue-600 text-sm mb-2">
                    <strong>Assumption:</strong> The underlying pays no dividends during option life
                  </p>
                  <p className="text-gray-600 text-xs">
                    <strong>Reality:</strong> Many stocks pay regular dividends; can be adjusted for
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h5 className="font-semibold text-blue-700 mb-2">6. No Transaction Costs</h5>
                  <p className="text-blue-600 text-sm mb-2">
                    <strong>Assumption:</strong> Trading is frictionless with no bid-ask spreads
                  </p>
                  <p className="text-gray-600 text-xs">
                    <strong>Reality:</strong> Spreads, commissions, and slippage affect profitability
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h5 className="font-semibold text-blue-700 mb-2">7. Perfect Liquidity</h5>
                  <p className="text-blue-600 text-sm mb-2">
                    <strong>Assumption:</strong> Can trade any amount instantly at market price
                  </p>
                  <p className="text-gray-600 text-xs">
                    <strong>Reality:</strong> Large trades move markets; some options are illiquid
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h5 className="font-semibold text-blue-700 mb-2">8. Continuous Trading</h5>
                  <p className="text-blue-600 text-sm mb-2">
                    <strong>Assumption:</strong> Markets never close; hedging possible 24/7
                  </p>
                  <p className="text-gray-600 text-xs">
                    <strong>Reality:</strong> Markets close nights, weekends, holidays; gap risk exists
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-pink-50 border-2 border-red-200 p-6 rounded-xl">
              <h4 className="font-bold text-red-800 text-xl mb-4">Major Violations & Market Phenomena</h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <h5 className="font-semibold text-red-700 mb-2">Volatility Smile/Skew</h5>
                  <p className="text-red-600 text-sm mb-2">
                    <strong>Observation:</strong> Implied volatility varies by strike price and time to expiration
                  </p>
                  <p className="text-gray-600 text-xs">
                    Market prices options differently than Black-Scholes suggests, creating "volatility surface"
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <h5 className="font-semibold text-red-700 mb-2">Fat Tails & Jump Risk</h5>
                  <p className="text-red-600 text-sm mb-2">
                    <strong>Observation:</strong> Extreme moves happen more often than normal distribution predicts
                  </p>
                  <p className="text-gray-600 text-xs">
                    Black Monday 1987: 22% drop had probability of 1 in 10²⁰ under normal distribution
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <h5 className="font-semibold text-red-700 mb-2">Volatility Clustering</h5>
                  <p className="text-red-600 text-sm mb-2">
                    <strong>Observation:</strong> High volatility periods tend to cluster together
                  </p>
                  <p className="text-gray-600 text-xs">
                    Mandelbrot: "Large changes tend to be followed by large changes"
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 p-6 rounded-xl">
              <h4 className="font-bold text-green-800 text-xl mb-4">Practical Adjustments & Solutions</h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h5 className="font-semibold text-green-700 mb-2">Implied Volatility Approach</h5>
                  <p className="text-green-600 text-sm mb-2">
                    <strong>Solution:</strong> Use market prices to imply volatility rather than historical data
                  </p>
                  <p className="text-gray-600 text-xs">
                    Treat Black-Scholes as a "conversion tool" between prices and volatilities
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h5 className="font-semibold text-green-700 mb-2">Dividend Adjustments</h5>
                  <p className="text-green-600 text-sm mb-2">
                    <strong>Solution:</strong> Subtract present value of expected dividends from stock price
                  </p>
                  <p className="text-gray-600 text-xs">
                    For continuous dividend yield q: replace S₀ with S₀e⁻ᵠᵀ
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h5 className="font-semibold text-green-700 mb-2">American Approximations</h5>
                  <p className="text-green-600 text-sm mb-2">
                    <strong>Solution:</strong> Use Black-Scholes as lower bound; add early exercise premium
                  </p>
                  <p className="text-gray-600 text-xs">
                    Barone-Adesi-Whaley and other approximations for American options
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border-2 border-purple-200 p-6 rounded-xl">
            <h4 className="font-bold text-purple-800 text-xl mb-4">Model Extensions & Alternatives</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-purple-200">
                <h5 className="font-semibold text-purple-700 mb-2">Stochastic Volatility</h5>
                <p className="text-purple-600 text-sm mb-2">
                  <strong>Models:</strong> Heston, SABR, Hull-White
                </p>
                <p className="text-gray-600 text-xs">
                  Allow volatility to vary randomly, fitting volatility surface better
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-purple-200">
                <h5 className="font-semibold text-purple-700 mb-2">Jump-Diffusion</h5>
                <p className="text-purple-600 text-sm mb-2">
                  <strong>Models:</strong> Merton, Kou, Variance Gamma
                </p>
                <p className="text-gray-600 text-xs">
                  Add sudden price jumps to capture fat-tail risk and crisis events
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-purple-200">
                <h5 className="font-semibold text-purple-700 mb-2">Local Volatility</h5>
                <p className="text-purple-600 text-sm mb-2">
                  <strong>Models:</strong> Dupire, CEV models
                </p>
                <p className="text-gray-600 text-xs">
                  Make volatility depend on stock price level and time
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 p-6 rounded-xl">
            <h4 className="font-bold text-amber-800 text-xl mb-4">When Black-Scholes Works Best</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-amber-700 mb-3">Ideal Conditions</h5>
                <ul className="text-amber-600 text-sm space-y-2">
                  <li>• <strong>Liquid stocks:</strong> Large-cap with tight bid-ask spreads</li>
                  <li>• <strong>Short maturities:</strong> Less time for assumptions to break down</li>
                  <li>• <strong>At-the-money options:</strong> Where model is most accurate</li>
                  <li>• <strong>Stable periods:</strong> No major events or volatility regimes</li>
                  <li>• <strong>Index options:</strong> Diversification reduces jump risk</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-amber-700 mb-3">Use with Caution</h5>
                <ul className="text-amber-600 text-sm space-y-2">
                  <li>• <strong>Deep ITM/OTM:</strong> Volatility smile effects prominent</li>
                  <li>• <strong>Around earnings:</strong> Jump risk and volatility uncertainty</li>
                  <li>• <strong>Long-dated options:</strong> More time for assumptions to fail</li>
                  <li>• <strong>Small-cap stocks:</strong> Higher transaction costs, less liquidity</li>
                  <li>• <strong>Crisis periods:</strong> All assumptions tend to break simultaneously</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    applications: {
      title: "Real-World Applications & Modern Usage",
      content: (
        <div className="space-y-8">
          <div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Despite its limitations, the Black-Scholes model remains the cornerstone of modern options trading. 
              Rather than being replaced, it has evolved into a versatile framework that supports sophisticated 
              trading strategies, risk management systems, and financial innovation across global markets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 p-6 rounded-xl">
              <h4 className="font-bold text-blue-800 text-xl mb-4">Market Making & Trading</h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h5 className="font-semibold text-blue-700 mb-2">Real-Time Pricing</h5>
                  <p className="text-blue-600 text-sm mb-2">
                    <strong>Usage:</strong> Market makers use Black-Scholes for instant quote generation
                  </p>
                  <p className="text-gray-600 text-xs">
                    Provides baseline pricing; adjusted with volatility surface and supply/demand factors
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h5 className="font-semibold text-blue-700 mb-2">Delta Hedging</h5>
                  <p className="text-blue-600 text-sm mb-2">
                    <strong>Usage:</strong> Automatic hedging systems based on Black-Scholes delta
                  </p>
                  <p className="text-gray-600 text-xs">
                    Algorithms continuously rebalance portfolios to maintain market neutrality
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h5 className="font-semibold text-blue-700 mb-2">Volatility Trading</h5>
                  <p className="text-blue-600 text-sm mb-2">
                    <strong>Usage:</strong> Traders use implied vs. Black-Scholes theoretical volatility
                  </p>
                  <p className="text-gray-600 text-xs">
                    Model serves as benchmark for identifying mispriced volatility in the market
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 p-6 rounded-xl">
              <h4 className="font-bold text-green-800 text-xl mb-4">Risk Management Systems</h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h5 className="font-semibold text-green-700 mb-2">Portfolio Greeks</h5>
                  <p className="text-green-600 text-sm mb-2">
                    <strong>Usage:</strong> Aggregate risk measures across entire trading books
                  </p>
                  <p className="text-gray-600 text-xs">
                    Banks calculate portfolio delta, gamma, vega in real-time for risk limits
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h5 className="font-semibold text-green-700 mb-2">Stress Testing</h5>
                  <p className="text-green-600 text-sm mb-2">
                    <strong>Usage:</strong> Scenario analysis using Black-Scholes sensitivity measures
                  </p>
                  <p className="text-gray-600 text-xs">
                    Regulators require banks to stress test derivatives portfolios under extreme scenarios
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h5 className="font-semibold text-green-700 mb-2">Capital Allocation</h5>
                  <p className="text-green-600 text-sm mb-2">
                    <strong>Usage:</strong> Risk-adjusted return calculations for trading strategies
                  </p>
                  <p className="text-gray-600 text-xs">
                    Firms use Black-Scholes Greeks to allocate capital based on risk contribution
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border-2 border-purple-200 p-6 rounded-xl">
            <h4 className="font-bold text-purple-800 text-xl mb-4">Modern Adaptations & Hybrid Approaches</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-purple-200">
                <h5 className="font-semibold text-purple-700 mb-2">Implied Volatility Framework</h5>
                <p className="text-purple-600 text-sm mb-2">
                  <strong>Approach:</strong> Use Black-Scholes as conversion tool between prices and volatilities
                </p>
                <p className="text-gray-600 text-xs">
                  Market standard: quote options in "vol terms" rather than dollar prices
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-purple-200">
                <h5 className="font-semibold text-purple-700 mb-2">Volatility Surface Modeling</h5>
                <p className="text-purple-600 text-sm mb-2">
                  <strong>Approach:</strong> Black-Scholes + volatility surface corrections
                </p>
                <p className="text-gray-600 text-xs">
                  Practitioners fit volatility as function of strike and time to expiration
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-purple-200">
                <h5 className="font-semibold text-purple-700 mb-2">American Approximations</h5>
                <p className="text-purple-600 text-sm mb-2">
                  <strong>Approach:</strong> Black-Scholes as European lower bound + early exercise premium
                </p>
                <p className="text-gray-600 text-xs">
                  Fast approximations like Barone-Adesi-Whaley for American options
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto bg-white rounded-xl border-2 border-gray-200">
            <table className="w-full border-collapse">
              <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                <tr>
                  <th className="border border-gray-300 p-4 text-left font-bold text-gray-800">Application Area</th>
                  <th className="border border-gray-300 p-4 text-left font-bold text-blue-600">Black-Scholes Usage</th>
                  <th className="border border-gray-300 p-4 text-left font-bold text-purple-600">Modern Enhancements</th>
                  <th className="border border-gray-300 p-4 text-left font-bold text-green-600">Industry Standard</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-4 font-semibold">Exchange Trading</td>
                  <td className="border border-gray-300 p-4">Baseline pricing model</td>
                  <td className="border border-gray-300 p-4">+ Volatility smile adjustments</td>
                  <td className="border border-gray-300 p-4">Universal adoption</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-4 font-semibold">Investment Banks</td>
                  <td className="border border-gray-300 p-4">Risk management framework</td>
                  <td className="border border-gray-300 p-4">+ Stochastic volatility models</td>
                  <td className="border border-gray-300 p-4">Core infrastructure</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-4 font-semibold">Hedge Funds</td>
                  <td className="border border-gray-300 p-4">Volatility arbitrage strategies</td>
                  <td className="border border-gray-300 p-4">+ Machine learning overlays</td>
                  <td className="border border-gray-300 p-4">Strategy foundation</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-4 font-semibold">Corporate Finance</td>
                  <td className="border border-gray-300 p-4">Employee stock option valuation</td>
                  <td className="border border-gray-300 p-4">+ Vesting and forfeiture adjustments</td>
                  <td className="border border-gray-300 p-4">Accounting standard</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-4 font-semibold">Structured Products</td>
                  <td className="border border-gray-300 p-4">Component option pricing</td>
                  <td className="border border-gray-300 p-4">+ Local volatility models</td>
                  <td className="border border-gray-300 p-4">Building block</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 p-6 rounded-xl">
            <h4 className="font-bold text-amber-800 text-xl mb-4">Technology & Implementation</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-amber-700 mb-3">Trading Systems Integration</h5>
                <ul className="text-amber-600 text-sm space-y-2">
                  <li>• <strong>Real-time pricing:</strong> Microsecond Black-Scholes calculations in FPGA chips</li>
                  <li>• <strong>Auto-hedging:</strong> Algorithm-driven delta rebalancing systems</li>
                  <li>• <strong>Risk monitoring:</strong> Continuous Greeks calculation across portfolios</li>
                  <li>• <strong>Regulatory reporting:</strong> Standardized risk measures for compliance</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-amber-700 mb-3">Modern Enhancements</h5>
                <ul className="text-amber-600 text-sm space-y-2">
                  <li>• <strong>ML calibration:</strong> Machine learning for volatility surface fitting</li>
                  <li>• <strong>Real-time data:</strong> Integration with market data feeds and news</li>
                  <li>• <strong>Cloud computing:</strong> Massively parallel Monte Carlo simulations</li>
                  <li>• <strong>API integration:</strong> Black-Scholes as a service for fintech applications</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border-2 border-cyan-200 p-6 rounded-xl">
            <h4 className="font-bold text-cyan-800 text-xl mb-4">Future Evolution & Trends</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h5 className="font-semibold text-cyan-700">Emerging Applications</h5>
                <ul className="text-cyan-600 text-sm space-y-2">
                  <li>• <strong>Cryptocurrency options:</strong> Adapting Black-Scholes for digital assets</li>
                  <li>• <strong>ESG derivatives:</strong> Carbon credit and sustainability-linked options</li>
                  <li>• <strong>DeFi protocols:</strong> Automated market makers using Black-Scholes pricing</li>
                  <li>• <strong>Real-time settlement:</strong> Instant options settlement using blockchain</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h5 className="font-semibold text-cyan-700">Model Evolution</h5>
                <ul className="text-cyan-600 text-sm space-y-2">
                  <li>• <strong>Quantum computing:</strong> Solving complex derivatives PDEs</li>
                  <li>• <strong>AI integration:</strong> Neural networks for volatility prediction</li>
                  <li>• <strong>Regime-switching:</strong> Models that adapt to changing market conditions</li>
                  <li>• <strong>Jump-diffusion:</strong> Better handling of extreme market events</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    }
  };

  const tabs = [
    { id: 'foundation', label: 'Foundation', icon: '🏛️' },
    { id: 'formula', label: 'Formula', icon: '🧮' },
    { id: 'derivation', label: 'Derivation', icon: '⚡' },
    { id: 'assumptions', label: 'Assumptions', icon: '⚠️' },
    { id: 'applications', label: 'Applications', icon: '🚀' }
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
              <span className="text-gray-700">Black-Scholes Model</span>
            </nav>
            
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  Black-Scholes Model
                </h1>
                <p className="text-xl text-gray-600">
                  The mathematical foundation of modern derivatives pricing
                </p>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">
                  Intermediate
                </span>
                <span>45 min read</span>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50 p-4 mb-8">
            <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
              <span>Lesson Progress</span>
              <span>5 of 7 lessons</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full" style={{width: '71%'}}></div>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-xl mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2 pr-4">Master Black-Scholes with OptiPrice</h3>
                <p className="text-blue-100">
                  Use our calculator to explore Black-Scholes pricing in real-time and see how Greeks change. 
                </p>
                <p className="text-blue-100 pr-4">
                  Compare analytical solutions with binomial and Monte Carlo methods side by side.
                </p>
              </div>
              <button
                onClick={() => navigate('/toolbox/optiprice')}
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
              onClick={() => navigate('/learning/options/asian')}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back: Asian Options</span>
            </button>
            
            <button
              onClick={() => navigate('/learning/options/binomial')}
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <span>Next: Binomial Model</span>
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

export default BlackScholes;