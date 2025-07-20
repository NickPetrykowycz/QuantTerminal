// frontend/src/pages/BlackScholes.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import { useAuth } from "../contexts/AuthContext";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const BlackScholes = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("overview");

  const tabContent = {
    overview: {
      title: "Overview & Concept",
      content: (
        <div className="space-y-8">
          <div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              <strong>The Black-Scholes model</strong> revolutionized finance by
              providing the first mathematical framework to determine the fair
              value of options. Developed by Fischer Black, Myron Scholes, and
              Robert Merton in the early 1970s, it remains the cornerstone of
              derivatives pricing worldwide and forms the foundation for modern
              quantitative finance.
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
                  <h4 className="font-bold mb-2">The Replication Insight</h4>
                  <p>
                    Black-Scholes showed that an option can be perfectly
                    replicated by continuously adjusting a portfolio of the
                    underlying stock and risk-free bonds. This "replication
                    argument" means the option must cost exactly what the
                    replicating portfolio costs - otherwise arbitrage exists.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What It Does */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 p-6 rounded-xl">
            <h4 className="font-bold text-blue-800 text-xl mb-6 flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm">💡</span>
              </div>
              What the Black-Scholes Model Does
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold text-blue-700">
                        Fair Value Calculation
                      </div>
                      <p className="text-blue-600 text-sm">
                        Determines the theoretical price an option should trade
                        at based on underlying asset price, strike, time,
                        volatility, and interest rates
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold text-blue-700">
                        Risk Management
                      </div>
                      <p className="text-blue-600 text-sm">
                        Provides Greeks (Delta, Gamma, Theta, Vega, Rho) that
                        measure how option prices respond to changes in market
                        conditions
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold text-blue-700">
                        Arbitrage Prevention
                      </div>
                      <p className="text-blue-600 text-sm">
                        Creates a no-arbitrage framework ensuring options are
                        priced consistently relative to their underlying assets
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold text-blue-700">
                        Portfolio Hedging
                      </div>
                      <p className="text-blue-600 text-sm">
                        Enables precise hedging strategies by calculating
                        exactly how many shares to hold to offset option
                        position risk
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Approach: Continuous vs Discrete */}
          <div className="bg-gradient-to-r from-purple-50 to-violet-50 border-2 border-purple-200 p-6 rounded-xl">
            <h4 className="font-bold text-purple-800 text-xl mb-6 text-center">
              Modeling Approach: Continuous-Time Mathematics
            </h4>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-lg border border-purple-200">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white">📊</span>
                  </div>
                  <h5 className="font-bold text-purple-700">
                    Continuous Process
                  </h5>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    <span className="text-purple-600">
                      Stock price follows geometric Brownian motion
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    <span className="text-purple-600">
                      Infinite small price movements
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    <span className="text-purple-600">
                      Continuous trading possible
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-amber-200">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white">⚡</span>
                  </div>
                  <h5 className="font-bold text-amber-700">
                    vs. Discrete Models
                  </h5>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                    <span className="text-amber-600">
                      Binomial: Finite price steps
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                    <span className="text-amber-600">
                      Monte Carlo: Simulated paths
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                    <span className="text-amber-600">
                      Black-Scholes: Analytical solution
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-green-200">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white">🎯</span>
                  </div>
                  <h5 className="font-bold text-green-700">Key Advantage</h5>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span className="text-green-600">Closed-form solution</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span className="text-green-600">Instant computation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span className="text-green-600">
                      Perfect for real-time trading
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-white p-5 rounded-lg border border-purple-200">
              <h5 className="font-bold text-purple-700 mb-3 text-center">
                The Core Intuition
              </h5>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">📈</div>
                  <div className="font-semibold text-purple-700">
                    Stock Goes Up
                  </div>
                  <div className="text-purple-600 text-sm">
                    Buy more shares to match option's exposure
                  </div>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">⚖️</div>
                  <div className="font-semibold text-purple-700">
                    Perfect Hedge
                  </div>
                  <div className="text-purple-600 text-sm">
                    Portfolio value equals option value
                  </div>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">📉</div>
                  <div className="font-semibold text-purple-700">
                    Stock Goes Down
                  </div>
                  <div className="text-purple-600 text-sm">
                    Sell shares to reduce exposure
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <div className="flex items-start space-x-3">
                  <div className="text-xl">💭</div>
                  <div>
                    <div className="font-semibold text-amber-700 mb-1">
                      Why This Matters:
                    </div>
                    <p className="text-amber-600 text-sm">
                      If you can replicate an option's payoff with a stock-bond
                      portfolio, then the option must cost exactly what that
                      portfolio costs - otherwise, arbitrage opportunities
                      exist. This "replication argument" is the foundation of
                      derivatives pricing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Historical Context */}
          <div className="bg-gradient-to-r from-slate-50 to-gray-50 border-2 border-gray-200 p-6 rounded-xl">
            <h4 className="font-bold text-gray-800 text-xl mb-6">
              Historical Context & Development
            </h4>

            <div className="space-y-6">
              <div className="bg-white p-5 rounded-lg border border-gray-200">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-bold text-gray-700 mb-3">
                      The Pre-1973 Problem
                    </h5>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-start space-x-2">
                        <span className="text-red-500 mt-1">❌</span>
                        <span>No systematic way to price options</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-red-500 mt-1">❌</span>
                        <span>
                          Trading based on gut feeling and rules of thumb
                        </span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-red-500 mt-1">❌</span>
                        <span>No risk management framework</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-red-500 mt-1">❌</span>
                        <span>Limited options market development</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-bold text-gray-700 mb-3">
                      The 1973 Breakthrough
                    </h5>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-start space-x-2">
                        <span className="text-green-500 mt-1">✅</span>
                        <span>Mathematical framework for fair pricing</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-green-500 mt-1">✅</span>
                        <span>Risk-neutral valuation theory</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-green-500 mt-1">✅</span>
                        <span>Complete hedging strategies</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-green-500 mt-1">✅</span>
                        <span>Foundation for derivatives markets</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-4 rounded-lg border border-blue-200">
                  <div className="font-semibold text-blue-700 mb-2">
                    📅 1973
                  </div>
                  <div className="text-blue-600 text-sm">
                    <strong>Black-Scholes paper published</strong>
                    <br />
                    "The Pricing of Options and Corporate Liabilities"
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-4 rounded-lg border border-purple-200">
                  <div className="font-semibold text-purple-700 mb-2">
                    🏆 1997
                  </div>
                  <div className="text-purple-600 text-sm">
                    <strong>Nobel Prize in Economics</strong>
                    <br />
                    Myron Scholes and Robert Merton (Black died in 1995)
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-100 to-green-50 p-4 rounded-lg border border-green-200">
                  <div className="font-semibold text-green-700 mb-2">
                    🚀 Today
                  </div>
                  <div className="text-green-600 text-sm">
                    <strong>Global Standard</strong>
                    <br />
                    Trillions in derivatives priced daily using this framework
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why It Exists */}
          <div className="bg-gradient-to-r from-cyan-50 to-teal-50 border-2 border-cyan-200 p-6 rounded-xl">
            <h4 className="font-bold text-cyan-800 text-xl mb-6 text-center">
              Why the Black-Scholes Model Exists
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg border border-cyan-200">
                <h5 className="font-bold text-cyan-700 mb-4 flex items-center">
                  <span className="mr-2">🎯</span>
                  Market Need
                </h5>
                <div className="space-y-3 text-sm">
                  <div className="bg-cyan-50 p-3 rounded">
                    <div className="font-semibold text-cyan-700 mb-1">
                      Fair Value Determination
                    </div>
                    <div className="text-cyan-600">
                      Before Black-Scholes, there was no scientific method to
                      determine what an option should cost
                    </div>
                  </div>
                  <div className="bg-cyan-50 p-3 rounded">
                    <div className="font-semibold text-cyan-700 mb-1">
                      Risk Management
                    </div>
                    <div className="text-cyan-600">
                      Traders needed systematic ways to measure and hedge option
                      risks
                    </div>
                  </div>
                  <div className="bg-cyan-50 p-3 rounded">
                    <div className="font-semibold text-cyan-700 mb-1">
                      Market Efficiency
                    </div>
                    <div className="text-cyan-600">
                      Consistent pricing framework reduces arbitrage
                      opportunities and improves liquidity
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-cyan-200">
                <h5 className="font-bold text-cyan-700 mb-4 flex items-center">
                  <span className="mr-2">🔬</span>
                  Scientific Achievement
                </h5>
                <div className="space-y-3 text-sm">
                  <div className="bg-cyan-50 p-3 rounded">
                    <div className="font-semibold text-cyan-700 mb-1">
                      Mathematical Rigor
                    </div>
                    <div className="text-cyan-600">
                      Transformed options trading from art to science using
                      stochastic calculus
                    </div>
                  </div>
                  <div className="bg-cyan-50 p-3 rounded">
                    <div className="font-semibold text-cyan-700 mb-1">
                      Universality
                    </div>
                    <div className="text-cyan-600">
                      Same principles apply across all asset classes and market
                      conditions
                    </div>
                  </div>
                  <div className="bg-cyan-50 p-3 rounded">
                    <div className="font-semibold text-cyan-700 mb-1">
                      Foundation Building
                    </div>
                    <div className="text-cyan-600">
                      Created framework for pricing all types of derivative
                      instruments
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-cyan-50 p-4 rounded-lg border border-cyan-200">
              <h6 className="font-semibold text-cyan-700 mb-2">
                Market Reality Check
              </h6>
              <p className="text-cyan-600 text-sm">
                Black-Scholes isn't just academic theory - it's the working
                foundation of a multi-trillion dollar derivatives market. Every
                options exchange, investment bank, and hedge fund uses
                Black-Scholes or its extensions as their starting point. While
                markets have evolved beyond its original assumptions, the core
                insights about replication, hedging, and risk-neutral pricing
                remain central to modern finance.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    assumptions: {
      title: "Assumptions & Inputs",
      content: (
        <div className="space-y-8">
          <div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              The Black-Scholes model relies on several critical assumptions to
              derive its elegant closed-form solution. Understanding these
              assumptions—and recognizing when they break down—is essential for
              effective application and risk management of the model in real
              markets.
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
                  <h4 className="font-bold mb-2">
                    The Perfect World Foundation
                  </h4>
                  <p>
                    Black-Scholes assumes a "perfect" financial world with no
                    transaction costs, continuous trading, and constant
                    parameters. While these assumptions seem unrealistic, they
                    enable precise mathematical treatment and provide remarkably
                    accurate pricing in liquid markets.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Assumptions */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200 p-6 rounded-xl">
            <h4 className="font-bold text-indigo-800 text-xl mb-6 text-center">
              The Seven Core Assumptions
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white p-5 rounded-lg border border-indigo-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h5 className="font-bold text-indigo-700 mb-2">
                        Constant Volatility
                      </h5>
                      <p className="text-indigo-600 text-sm mb-2">
                        Stock price volatility remains constant throughout the
                        option's life
                      </p>
                      <div className="bg-indigo-50 p-2 rounded text-xs">
                        <strong>Reality Check:</strong> Volatility changes with
                        market conditions, earnings, and events
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-lg border border-indigo-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h5 className="font-bold text-indigo-700 mb-2">
                        Constant Risk-Free Rate
                      </h5>
                      <p className="text-indigo-600 text-sm mb-2">
                        Interest rates remain fixed and known throughout the
                        option period
                      </p>
                      <div className="bg-indigo-50 p-2 rounded text-xs">
                        <strong>Reality Check:</strong> Interest rates fluctuate
                        with monetary policy and economic conditions
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-lg border border-indigo-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h5 className="font-bold text-indigo-700 mb-2">
                        Log-Normal Price Distribution
                      </h5>
                      <p className="text-indigo-600 text-sm mb-2">
                        Stock prices follow geometric Brownian motion with
                        normally distributed returns
                      </p>
                      <div className="bg-indigo-50 p-2 rounded text-xs">
                        <strong>Reality Check:</strong> Markets show fat tails,
                        skewness, and jump discontinuities
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-lg border border-indigo-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h5 className="font-bold text-purple-700 mb-2">
                        European Exercise Only
                      </h5>
                      <p className="text-purple-600 text-sm mb-2">
                        Options can only be exercised at expiration, never
                        before
                      </p>
                      <div className="bg-purple-50 p-2 rounded text-xs">
                        <strong>Reality Check:</strong> Most equity options are
                        American style with early exercise rights
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-lg border border-indigo-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">5</span>
                    </div>
                    <div>
                      <h5 className="font-bold text-purple-700 mb-2">
                        No Dividends
                      </h5>
                      <p className="text-purple-600 text-sm mb-2">
                        Stock pays no dividends during the option's life
                      </p>
                      <div className="bg-purple-50 p-2 rounded text-xs">
                        <strong>Extension:</strong> Dividend-adjusted
                        Black-Scholes handles continuous dividend yields
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-lg border border-indigo-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">6</span>
                    </div>
                    <div>
                      <h5 className="font-bold text-purple-700 mb-2">
                        No Transaction Costs
                      </h5>
                      <p className="text-purple-600 text-sm mb-2">
                        Trading is frictionless with no bid-ask spreads,
                        commissions, or taxes
                      </p>
                      <div className="bg-purple-50 p-2 rounded text-xs">
                        <strong>Reality Check:</strong> Trading costs affect
                        hedging frequency and profitability
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-lg border border-indigo-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">7</span>
                    </div>
                    <div>
                      <h5 className="font-bold text-purple-700 mb-2">
                        Continuous Trading
                      </h5>
                      <p className="text-purple-600 text-sm mb-2">
                        Markets trade continuously with infinite liquidity and
                        perfect hedging possible
                      </p>
                      <div className="bg-purple-50 p-2 rounded text-xs">
                        <strong>Reality Check:</strong> Markets close, liquidity
                        varies, and gaps occur
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Required Inputs */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 p-6 rounded-xl">
            <h4 className="font-bold text-green-800 text-xl mb-6 text-center">
              Required Input Parameters
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg border border-green-200">
                <h5 className="font-bold text-green-700 mb-4 text-center">
                  📊 Market Data Inputs
                </h5>
                <div className="space-y-3">
                  <div className="bg-green-50 p-3 rounded">
                    <div className="font-semibold text-green-700 text-sm mb-1">
                      Current Stock Price (S)
                    </div>
                    <p className="text-green-600 text-xs mb-1">
                      Current market price of the underlying asset
                    </p>
                    <div className="text-gray-600 text-xs">
                      <strong>Source:</strong> Real-time market feed, last
                      traded price
                    </div>
                  </div>

                  <div className="bg-green-50 p-3 rounded">
                    <div className="font-semibold text-green-700 text-sm mb-1">
                      Strike Price (K)
                    </div>
                    <p className="text-green-600 text-xs mb-1">
                      Exercise price specified in the option contract
                    </p>
                    <div className="text-gray-600 text-xs">
                      <strong>Source:</strong> Option contract specifications
                    </div>
                  </div>

                  <div className="bg-green-50 p-3 rounded">
                    <div className="font-semibold text-green-700 text-sm mb-1">
                      Time to Expiration (T)
                    </div>
                    <p className="text-green-600 text-xs mb-1">
                      Time remaining until option expiration (in years)
                    </p>
                    <div className="text-gray-600 text-xs">
                      <strong>Calculation:</strong> (Expiration Date - Current
                      Date) / 365
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-green-200">
                <h5 className="font-bold text-green-700 mb-4 text-center">
                  📈 Model Parameters
                </h5>
                <div className="space-y-3">
                  <div className="bg-green-50 p-3 rounded">
                    <div className="font-semibold text-green-700 text-sm mb-1">
                      Risk-Free Rate (r)
                    </div>
                    <p className="text-green-600 text-xs mb-1">
                      Yield on risk-free government bond matching option
                      maturity
                    </p>
                    <div className="text-gray-600 text-xs">
                      <strong>Typical:</strong> Treasury rate interpolated to
                      option expiration
                    </div>
                  </div>

                  <div className="bg-green-50 p-3 rounded">
                    <div className="font-semibold text-green-700 text-sm mb-1">
                      Volatility (σ)
                    </div>
                    <p className="text-green-600 text-xs mb-1">
                      Annualized standard deviation of stock returns (most
                      critical input)
                    </p>
                    <div className="text-gray-600 text-xs">
                      <strong>Sources:</strong> Historical volatility, implied
                      volatility, GARCH models
                    </div>
                  </div>

                  <div className="bg-green-50 p-3 rounded">
                    <div className="font-semibold text-green-700 text-sm mb-1">
                      Dividend Yield (q) - Optional
                    </div>
                    <p className="text-green-600 text-xs mb-1">
                      Continuous dividend yield for dividend-paying stocks
                    </p>
                    <div className="text-gray-600 text-xs">
                      <strong>Extension:</strong> Uses modified Black-Scholes
                      formula
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Volatility Deep Dive */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 p-6 rounded-xl">
            <h4 className="font-bold text-amber-800 text-xl mb-6">
              Volatility: The Most Critical Input
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg border border-amber-200">
                <h5 className="font-bold text-amber-700 mb-4">
                  📊 Types of Volatility
                </h5>
                <div className="space-y-3">
                  <div className="bg-amber-50 p-3 rounded">
                    <div className="font-semibold text-amber-700 text-sm mb-2">
                      Historical Volatility
                    </div>
                    <p className="text-amber-600 text-xs mb-2">
                      Calculated from past price movements using standard
                      deviation of returns
                    </p>
                    <div className="text-center">
                      <InlineMath math="\sigma = \sqrt{\frac{252}{n-1} \sum_{i=1}^{n} (r_i - \bar{r})^2}" />
                    </div>
                  </div>

                  <div className="bg-amber-50 p-3 rounded">
                    <div className="font-semibold text-amber-700 text-sm mb-2">
                      Implied Volatility
                    </div>
                    <p className="text-amber-600 text-xs mb-2">
                      Market's expectation of future volatility, backed out from
                      current option prices
                    </p>
                    <div className="text-gray-600 text-xs">
                      <strong>Formula:</strong> No closed form - requires
                      numerical iteration
                    </div>
                  </div>

                  <div className="bg-gray-50 p-3 rounded">
                    <div className="font-semibold text-gray-700 text-sm mb-1">
                      Which to Use?
                    </div>
                    <ul className="text-gray-600 text-xs space-y-1">
                      <li>
                        • <strong>Pricing:</strong> Implied volatility
                      </li>
                      <li>
                        • <strong>Hedging:</strong> Realized volatility
                      </li>
                      <li>
                        • <strong>Analysis:</strong> Compare both
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-amber-200">
                <h5 className="font-bold text-amber-700 mb-4">
                  ⚡ Volatility Estimation Methods
                </h5>
                <div className="space-y-3">
                  <div className="bg-amber-50 p-3 rounded text-xs">
                    <div className="font-semibold text-amber-700 mb-2">
                      Simple Historical (30-day):
                    </div>
                    <div className="space-y-1">
                      <div>
                        1. Calculate daily returns:{" "}
                        <InlineMath math="ln(S_t/S_{t-1})" />
                      </div>
                      <div>2. Find standard deviation of returns</div>
                      <div>3. Annualize: multiply by √252</div>
                      <div className="text-green-600 font-semibold">
                        ✓ Simple, widely used
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50 p-3 rounded text-xs">
                    <div className="font-semibold text-amber-700 mb-2">
                      GARCH Models:
                    </div>
                    <div className="space-y-1">
                      <div>Account for volatility clustering</div>
                      <div>Model time-varying volatility</div>
                      <div className="text-blue-600 font-semibold">
                        ✓ More sophisticated, captures patterns
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50 p-3 rounded text-xs">
                    <div className="font-semibold text-amber-700 mb-2">
                      VIX/Implied Approach:
                    </div>
                    <div className="space-y-1">
                      <div>Use market's volatility expectations</div>
                      <div>Extract from option smile/surface</div>
                      <div className="text-purple-600 font-semibold">
                        ✓ Forward-looking, market consensus
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Assumption Violations */}
          <div className="bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 p-6 rounded-xl">
            <h4 className="font-bold text-red-800 text-xl mb-6 text-center">
              When Assumptions Break Down
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <h5 className="font-semibold text-red-700 mb-3">
                    🌊 Volatility Smile & Skew
                  </h5>
                  <div className="bg-red-50 p-3 rounded text-xs">
                    <div className="font-semibold text-red-700 mb-1">
                      Problem:
                    </div>
                    <div className="text-red-600 mb-2">
                      Different strikes trade at different implied volatilities
                    </div>
                    <div className="font-semibold text-red-700 mb-1">
                      Solution:
                    </div>
                    <div className="text-red-600">
                      Use strike-specific implied volatilities or local
                      volatility models
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <h5 className="font-semibold text-red-700 mb-3">
                    📉 Market Crashes & Jumps
                  </h5>
                  <div className="bg-red-50 p-3 rounded text-xs">
                    <div className="font-semibold text-red-700 mb-1">
                      Problem:
                    </div>
                    <div className="text-red-600 mb-2">
                      Markets have fat tails and sudden gaps, not smooth
                      log-normal moves
                    </div>
                    <div className="font-semibold text-red-700 mb-1">
                      Solution:
                    </div>
                    <div className="text-red-600">
                      Jump-diffusion models (Merton) or stochastic volatility
                      models
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <h5 className="font-semibold text-red-700 mb-3">
                    💰 Dividend Adjustments
                  </h5>
                  <div className="bg-red-50 p-3 rounded text-xs">
                    <div className="font-semibold text-red-700 mb-1">
                      Problem:
                    </div>
                    <div className="text-red-600 mb-2">
                      Discrete dividends cause price jumps and early exercise
                      incentives
                    </div>
                    <div className="font-semibold text-red-700 mb-1">
                      Solution:
                    </div>
                    <div className="text-red-600">
                      Dividend-adjusted models or American option pricing for
                      high-dividend stocks
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <h5 className="font-semibold text-red-700 mb-3">
                    ⏰ Time-Varying Parameters
                  </h5>
                  <div className="bg-red-50 p-3 rounded text-xs">
                    <div className="font-semibold text-red-700 mb-1">
                      Problem:
                    </div>
                    <div className="text-red-600 mb-2">
                      Interest rates and volatility change over time, especially
                      for long-dated options
                    </div>
                    <div className="font-semibold text-red-700 mb-1">
                      Solution:
                    </div>
                    <div className="text-red-600">
                      Term structure models for rates, stochastic volatility for
                      vol
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <h5 className="font-semibold text-red-700 mb-3">
                    🔄 Transaction Costs
                  </h5>
                  <div className="bg-red-50 p-3 rounded text-xs">
                    <div className="font-semibold text-red-700 mb-1">
                      Problem:
                    </div>
                    <div className="text-red-600 mb-2">
                      Trading costs prevent continuous hedging and affect option
                      values
                    </div>
                    <div className="font-semibold text-red-700 mb-1">
                      Solution:
                    </div>
                    <div className="text-red-600">
                      Adjust volatility upward or use discrete hedging models
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <h5 className="font-semibold text-red-700 mb-3">
                    🚫 Market Closures
                  </h5>
                  <div className="bg-red-50 p-3 rounded text-xs">
                    <div className="font-semibold text-red-700 mb-1">
                      Problem:
                    </div>
                    <div className="text-red-600 mb-2">
                      Markets close overnight and on weekends, creating gaps and
                      preventing continuous hedging
                    </div>
                    <div className="font-semibold text-red-700 mb-1">
                      Solution:
                    </div>
                    <div className="text-red-600">
                      Time-weighted volatility or separate overnight volatility
                      estimates
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Practical Input Guidelines */}
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border-2 border-cyan-200 p-6 rounded-xl">
            <h4 className="font-bold text-cyan-800 text-xl mb-6">
              Practical Input Guidelines
            </h4>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg border border-cyan-200">
                <h5 className="font-semibold text-cyan-700 mb-3 text-center">
                  📊 For Pricing
                </h5>
                <ul className="text-cyan-600 text-sm space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      <strong>Volatility:</strong> Use implied volatility from
                      similar options
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      <strong>Interest Rate:</strong> Treasury yield matching
                      option maturity
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      <strong>Time:</strong> Exact days to expiration,
                      accounting for holidays
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg border border-cyan-200">
                <h5 className="font-semibold text-cyan-700 mb-3 text-center">
                  🛡️ For Hedging
                </h5>
                <ul className="text-cyan-600 text-sm space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      <strong>Volatility:</strong> Use realized volatility
                      estimates or GARCH forecasts
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      <strong>Update Frequency:</strong> Recalculate Greeks
                      daily or intraday
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      <strong>Risk Management:</strong> Stress test with ±5-10%
                      volatility scenarios
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg border border-cyan-200">
                <h5 className="font-semibold text-cyan-700 mb-3 text-center">
                  📈 For Analysis
                </h5>
                <ul className="text-cyan-600 text-sm space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      <strong>Sensitivity Analysis:</strong> Test impact of
                      different volatility estimates
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      <strong>Model Validation:</strong> Compare Black-Scholes
                      with market prices
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      <strong>Documentation:</strong> Record all input sources
                      and methodologies
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    how: {
      title: "How It Works",
      content: (
        <div className="space-y-8">
          <div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              The Black-Scholes model transforms option pricing from art to
              science through elegant mathematical derivation. At its core, it
              uses partial differential equations and risk-neutral valuation to
              arrive at the famous closed-form formula that revolutionized
              derivatives trading.
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
                  <h4 className="font-bold mb-2">The Replication Strategy</h4>
                  <p>
                    Black-Scholes works by creating a portfolio of stocks and
                    bonds that perfectly replicates the option's payoff. Since
                    this portfolio has no risk, it must earn the risk-free rate,
                    which determines the option's fair value through arbitrage
                    arguments.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* The Famous Formula */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 p-6 rounded-xl">
            <h4 className="font-bold text-blue-800 text-xl mb-6 text-center">
              The Black-Scholes Formula
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg border border-blue-200">
                <h5 className="font-bold text-blue-700 mb-4 text-center">
                  📈 Call Option
                </h5>
                <div className="text-center mb-4">
                  <BlockMath math="C = S_0 N(d_1) - K e^{-rT} N(d_2)" />
                </div>
                <div className="space-y-2 text-xs">
                  <div className="bg-blue-50 p-3 rounded">
                    <div className="font-semibold text-blue-700 mb-2">
                      Where:
                    </div>
                    <div className="space-y-1">
                      <div>
                        <InlineMath math="d_1 = \frac{\ln(S_0/K) + (r + \sigma^2/2)T}{\sigma\sqrt{T}}" />
                      </div>
                      <div>
                        <InlineMath math="d_2 = d_1 - \sigma\sqrt{T}" />
                      </div>
                      <div>
                        <InlineMath math="N(x)" /> = Cumulative standard normal
                        distribution
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-blue-200">
                <h5 className="font-bold text-red-700 mb-4 text-center">
                  📉 Put Option
                </h5>
                <div className="text-center mb-4">
                  <BlockMath math="P = K e^{-rT} N(-d_2) - S_0 N(-d_1)" />
                </div>
                <div className="space-y-2 text-xs">
                  <div className="bg-red-50 p-3 rounded">
                    <div className="font-semibold text-red-700 mb-2">
                      Put-Call Parity:
                    </div>
                    <div className="text-center">
                      <BlockMath math="C - P = S_0 - K e^{-rT}" />
                    </div>
                    <div className="text-gray-600 text-center">
                      Fundamental relationship between calls and puts
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step-by-Step Calculation */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 p-6 rounded-xl">
            <h4 className="font-bold text-green-800 text-xl mb-6 text-center">
              Step-by-Step Calculation Process
            </h4>

            <div className="space-y-6">
              <div className="bg-white p-5 rounded-lg border border-green-200">
                <h5 className="font-bold text-green-700 mb-4">
                  🧮 Worked Example: AAPL Call Option
                </h5>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 p-4 rounded">
                    <div className="font-semibold text-green-700 mb-3">
                      Given Parameters:
                    </div>
                    <div className="space-y-1 text-sm">
                      <div>Current Stock Price (S₀): $150.00</div>
                      <div>Strike Price (K): $155.00</div>
                      <div>Time to Expiration (T): 30 days = 0.0822 years</div>
                      <div>Risk-free Rate (r): 5.0% = 0.05</div>
                      <div>Volatility (σ): 25% = 0.25</div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded">
                    <div className="font-semibold text-gray-700 mb-3">
                      Step 1: Calculate d₁ and d₂
                    </div>
                    <div className="space-y-2 text-xs">
                      <div>
                        <InlineMath math="d_1 = \frac{\ln(150/155) + (0.05 + 0.25^2/2) \times 0.0822}{0.25 \times \sqrt{0.0822}}" />
                      </div>
                      <div>
                        <InlineMath math="d_1 = \frac{-0.0328 + 0.0066}{0.0717} = -0.366" />
                      </div>
                      <div>
                        <InlineMath math="d_2 = -0.366 - 0.25 \times \sqrt{0.0822} = -0.438" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-4 rounded">
                    <div className="font-semibold text-blue-700 mb-3">
                      Step 2: Find Normal Distribution Values
                    </div>
                    <div className="space-y-1 text-sm">
                      <div>N(d₁) = N(-0.366) = 0.357</div>
                      <div>N(d₂) = N(-0.438) = 0.331</div>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-4 rounded">
                    <div className="font-semibold text-purple-700 mb-3">
                      Step 3: Calculate Call Price
                    </div>
                    <div className="space-y-1 text-sm">
                      <div>
                        C = 150 × 0.357 - 155 × e^(-0.05×0.0822) × 0.331
                      </div>
                      <div>C = 53.55 - 155 × 0.996 × 0.331</div>
                      <div>
                        C = 53.55 - 51.04 ={" "}
                        <strong className="text-green-600">$2.51</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Parameter Impact */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 p-6 rounded-xl">
            <h4 className="font-bold text-amber-800 text-xl mb-6 text-center">
              How Each Parameter Affects Option Value
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-amber-200">
                  <h5 className="font-semibold text-amber-700 mb-3">
                    📈 Stock Price Impact
                  </h5>
                  <div className="space-y-2 text-xs">
                    <div className="bg-amber-50 p-2 rounded">
                      <strong>Higher Stock Price →</strong> Higher call value,
                      lower put value
                    </div>
                    <div className="grid grid-cols-3 gap-1 text-center font-mono">
                      <div>Stock: $145</div>
                      <div>Call: $1.45</div>
                      <div>Put: $7.89</div>
                    </div>
                    <div className="grid grid-cols-3 gap-1 text-center font-mono">
                      <div>Stock: $150</div>
                      <div>Call: $2.51</div>
                      <div>Put: $6.15</div>
                    </div>
                    <div className="grid grid-cols-3 gap-1 text-center font-mono">
                      <div>Stock: $155</div>
                      <div>Call: $4.12</div>
                      <div>Put: $4.61</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-amber-200">
                  <h5 className="font-semibold text-amber-700 mb-3">
                    ⏰ Time to Expiration Impact
                  </h5>
                  <div className="space-y-2 text-xs">
                    <div className="bg-amber-50 p-2 rounded">
                      <strong>More Time →</strong> Higher option values (both
                      calls and puts)
                    </div>
                    <div className="grid grid-cols-3 gap-1 text-center font-mono">
                      <div>Days: 7</div>
                      <div>Call: $0.89</div>
                      <div>Put: $5.52</div>
                    </div>
                    <div className="grid grid-cols-3 gap-1 text-center font-mono">
                      <div>Days: 30</div>
                      <div>Call: $2.51</div>
                      <div>Put: $6.15</div>
                    </div>
                    <div className="grid grid-cols-3 gap-1 text-center font-mono">
                      <div>Days: 90</div>
                      <div>Call: $5.23</div>
                      <div>Put: $8.87</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-amber-200">
                  <h5 className="font-semibold text-amber-700 mb-3">
                    📊 Volatility Impact
                  </h5>
                  <div className="space-y-2 text-xs">
                    <div className="bg-amber-50 p-2 rounded">
                      <strong>Higher Volatility →</strong> Higher option values
                      (both calls and puts)
                    </div>
                    <div className="grid grid-cols-3 gap-1 text-center font-mono">
                      <div>Vol: 15%</div>
                      <div>Call: $1.52</div>
                      <div>Put: $5.16</div>
                    </div>
                    <div className="grid grid-cols-3 gap-1 text-center font-mono">
                      <div>Vol: 25%</div>
                      <div>Call: $2.51</div>
                      <div>Put: $6.15</div>
                    </div>
                    <div className="grid grid-cols-3 gap-1 text-center font-mono">
                      <div>Vol: 35%</div>
                      <div>Call: $3.67</div>
                      <div>Put: $7.31</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-amber-200">
                  <h5 className="font-semibold text-amber-700 mb-3">
                    💰 Interest Rate Impact
                  </h5>
                  <div className="space-y-2 text-xs">
                    <div className="bg-amber-50 p-2 rounded">
                      <strong>Higher Rates →</strong> Higher call values, lower
                      put values
                    </div>
                    <div className="grid grid-cols-3 gap-1 text-center font-mono">
                      <div>Rate: 2%</div>
                      <div>Call: $2.41</div>
                      <div>Put: $6.20</div>
                    </div>
                    <div className="grid grid-cols-3 gap-1 text-center font-mono">
                      <div>Rate: 5%</div>
                      <div>Call: $2.51</div>
                      <div>Put: $6.15</div>
                    </div>
                    <div className="grid grid-cols-3 gap-1 text-center font-mono">
                      <div>Rate: 8%</div>
                      <div>Call: $2.62</div>
                      <div>Put: $6.09</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dividend Adjustment */}
          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border-2 border-teal-200 p-6 rounded-xl">
            <h4 className="font-bold text-teal-800 text-xl mb-6 text-center">
              Dividend-Adjusted Black-Scholes
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg border border-teal-200">
                <h5 className="font-bold text-teal-700 mb-4 text-center">
                  💰 Modified Formula
                </h5>
                <div className="text-center mb-4 space-y-4">
                  <BlockMath math="C = S_0 e^{-qT} N(d_1) - K e^{-rT} N(d_2)" />
                  <BlockMath math="P = K e^{-rT} N(-d_2) - S_0 e^{-qT} N(-d_1)" />
                </div>
                <div className="space-y-2 text-xs">
                  <div className="bg-teal-50 p-3 rounded">
                    <div className="font-semibold text-teal-700 mb-2">
                      Where q = Continuous dividend yield:
                    </div>
                    <div className="space-y-1">
                      <div>
                        <InlineMath math="d_1 = \frac{\ln(S_0/K) + (r - q + \sigma^2/2)T}{\sigma\sqrt{T}}" />
                      </div>
                      <div>
                        <InlineMath math="d_2 = d_1 - \sigma\sqrt{T}" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-teal-200">
                <h5 className="font-bold text-teal-700 mb-4 text-center">
                  📊 Dividend Impact Example
                </h5>
                <div className="space-y-3 text-xs">
                  <div className="bg-teal-50 p-3 rounded">
                    <div className="font-semibold text-teal-700 mb-2">
                      Same AAPL example with 2% dividend yield:
                    </div>
                    <div className="space-y-1">
                      <div>Without dividends: Call = $2.51</div>
                      <div>With 2% dividend yield: Call = $2.27</div>
                      <div className="text-red-600 font-semibold">
                        Difference: -$0.24 (-9.6%)
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-3 rounded">
                    <div className="font-semibold text-gray-700 mb-1">
                      Why Lower?
                    </div>
                    <div className="text-gray-600">
                      Dividends reduce the stock's forward price, making calls
                      less valuable and puts more valuable
                    </div>
                  </div>

                  <div className="bg-gray-50 p-3 rounded">
                    <div className="font-semibold text-gray-700 mb-1">
                      Converting Annual Dividend:
                    </div>
                    <div className="text-gray-600">
                      If annual dividend = $3.00, Stock = $150
                      <br />q = $3.00 / $150 = 2% = 0.02
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* The Greeks */}
          <div className="bg-gradient-to-r from-purple-50 to-violet-50 border-2 border-purple-200 p-6 rounded-xl">
            <h4 className="font-bold text-purple-800 text-xl mb-6 text-center">
              The Greeks: Risk Sensitivities
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg border border-purple-200">
                <h5 className="font-bold text-purple-700 mb-4 text-center">
                  Primary Greeks
                </h5>
                <div className="space-y-3">
                  <div className="bg-purple-50 p-3 rounded">
                    <div className="font-semibold text-purple-700 text-sm mb-1">
                      Delta (Δ) - Price Sensitivity
                    </div>
                    <div className="text-center mb-2">
                      <InlineMath math="\Delta = \frac{\partial C}{\partial S} = N(d_1)" />
                    </div>
                    <p className="text-purple-600 text-xs">
                      Change in option price per $1 change in stock price
                    </p>
                  </div>

                  <div className="bg-purple-50 p-3 rounded">
                    <div className="font-semibold text-purple-700 text-sm mb-1">
                      Gamma (Γ) - Delta Sensitivity
                    </div>
                    <div className="text-center mb-2">
                      <InlineMath math="\Gamma = \frac{\partial^2 C}{\partial S^2} = \frac{n(d_1)}{S_0\sigma\sqrt{T}}" />
                    </div>
                    <p className="text-purple-600 text-xs">
                      Change in delta per $1 change in stock price
                    </p>
                  </div>

                  <div className="bg-purple-50 p-3 rounded">
                    <div className="font-semibold text-purple-700 text-sm mb-1">
                      Theta (Θ) - Time Decay
                    </div>
                    <div className="text-center mb-2">
                      <InlineMath math="\Theta = \frac{\partial C}{\partial t}" />
                    </div>
                    <p className="text-purple-600 text-xs">
                      Change in option price per day passing
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-purple-200">
                <h5 className="font-bold text-purple-700 mb-4 text-center">
                  Secondary Greeks
                </h5>
                <div className="space-y-3">
                  <div className="bg-purple-50 p-3 rounded">
                    <div className="font-semibold text-purple-700 text-sm mb-1">
                      Vega (ν) - Volatility Sensitivity
                    </div>
                    <div className="text-center mb-2">
                      <InlineMath math="\nu = \frac{\partial C}{\partial \sigma} = S_0 n(d_1) \sqrt{T}" />
                    </div>
                    <p className="text-purple-600 text-xs">
                      Change in option price per 1% change in volatility
                    </p>
                  </div>

                  <div className="bg-purple-50 p-3 rounded">
                    <div className="font-semibold text-purple-700 text-sm mb-1">
                      Rho (ρ) - Interest Rate Sensitivity
                    </div>
                    <div className="text-center mb-2">
                      <InlineMath math="\rho = \frac{\partial C}{\partial r} = K T e^{-rT} N(d_2)" />
                    </div>
                    <p className="text-purple-600 text-xs">
                      Change in option price per 1% change in interest rate
                    </p>
                  </div>

                  <div className="bg-gray-50 p-3 rounded text-xs">
                    <div className="font-semibold text-gray-700 mb-1">
                      Example Greeks for our AAPL call:
                    </div>
                    <div className="grid grid-cols-2 gap-1">
                      <div>Delta: 0.357</div>
                      <div>Gamma: 0.045</div>
                      <div>Theta: -0.086</div>
                      <div>Vega: 0.134</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Conceptual Understanding */}
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border-2 border-cyan-200 p-6 rounded-xl">
            <h4 className="font-bold text-cyan-800 text-xl mb-6 text-center">
              Conceptual Understanding: What the Formula Really Means
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg border border-cyan-200">
                <h5 className="font-bold text-cyan-700 mb-4">
                  🎯 Breaking Down the Call Formula
                </h5>
                <div className="space-y-3 text-sm">
                  <div className="bg-cyan-50 p-3 rounded">
                    <div className="font-semibold text-cyan-700 mb-2">
                      <InlineMath math="S_0 N(d_1)" /> - Expected Stock Value
                    </div>
                    <p className="text-cyan-600 text-xs">
                      Current stock price × Probability of finishing ITM ×
                      Expected stock price given ITM finish
                    </p>
                  </div>

                  <div className="bg-cyan-50 p-3 rounded">
                    <div className="font-semibold text-cyan-700 mb-2">
                      <InlineMath math="K e^{-rT} N(d_2)" /> - Expected Strike
                      Payment
                    </div>
                    <p className="text-cyan-600 text-xs">
                      Present value of strike price × Probability of exercise
                    </p>
                  </div>

                  <div className="bg-gray-50 p-3 rounded">
                    <div className="font-semibold text-gray-700 mb-1">
                      Economic Intuition:
                    </div>
                    <p className="text-gray-600 text-xs">
                      Call value = Expected benefit from owning stock - Expected
                      cost of strike payment, both risk-adjusted
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-cyan-200">
                <h5 className="font-bold text-cyan-700 mb-4">
                  🔄 The Replication Portfolio
                </h5>
                <div className="space-y-3 text-sm">
                  <div className="bg-cyan-50 p-3 rounded">
                    <div className="font-semibold text-cyan-700 mb-2">
                      Portfolio Components:
                    </div>
                    <ul className="text-cyan-600 text-xs space-y-1">
                      <li>• Buy Δ shares of stock</li>
                      <li>
                        • Borrow <InlineMath math="K e^{-rT} N(d_2)" /> at
                        risk-free rate
                      </li>
                      <li>• This portfolio has same payoff as call option</li>
                    </ul>
                  </div>

                  <div className="bg-cyan-50 p-3 rounded">
                    <div className="font-semibold text-cyan-700 mb-2">
                      Dynamic Hedging:
                    </div>
                    <p className="text-cyan-600 text-xs">
                      Portfolio must be rebalanced continuously as delta changes
                      with stock price and time
                    </p>
                  </div>

                  <div className="bg-gray-50 p-3 rounded">
                    <div className="font-semibold text-gray-700 mb-1">
                      No-Arbitrage Logic:
                    </div>
                    <p className="text-gray-600 text-xs">
                      If option price ≠ replication cost, risk-free profit
                      exists
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Common Calculation Mistakes */}
          <div className="bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 p-6 rounded-xl">
            <h4 className="font-bold text-red-800 text-xl mb-6">
              Common Calculation Mistakes to Avoid
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <h5 className="font-semibold text-red-700 mb-3">
                    📅 Time Conversion Errors
                  </h5>
                  <div className="bg-red-50 p-3 rounded text-xs">
                    <div className="font-semibold text-red-700 mb-1">
                      Common Mistake:
                    </div>
                    <div className="text-red-600 mb-2">
                      Using calendar days instead of trading days for time
                      calculation
                    </div>
                    <div className="font-semibold text-red-700 mb-1">
                      Correct Approach:
                    </div>
                    <div className="text-red-600">
                      T = Trading days remaining / 252 (or Calendar days / 365)
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <h5 className="font-semibold text-red-700 mb-3">
                    📊 Volatility Input Errors
                  </h5>
                  <div className="bg-red-50 p-3 rounded text-xs">
                    <div className="font-semibold text-red-700 mb-1">
                      Common Mistake:
                    </div>
                    <div className="text-red-600 mb-2">
                      Using percentage (25%) instead of decimal (0.25)
                    </div>
                    <div className="font-semibold text-red-700 mb-1">
                      Also Watch:
                    </div>
                    <div className="text-red-600">
                      Confusing daily vs annualized volatility
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <h5 className="font-semibold text-red-700 mb-3">
                    🔢 Normal Distribution Lookup
                  </h5>
                  <div className="bg-red-50 p-3 rounded text-xs">
                    <div className="font-semibold text-red-700 mb-1">
                      Common Mistake:
                    </div>
                    <div className="text-red-600 mb-2">
                      Using wrong tail of normal distribution (N(-x) vs 1-N(x))
                    </div>
                    <div className="font-semibold text-red-700 mb-1">
                      Remember:
                    </div>
                    <div className="text-red-600">
                      N(-x) = 1 - N(x) for standard normal distribution
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <h5 className="font-semibold text-red-700 mb-3">
                    💰 Interest Rate Convention
                  </h5>
                  <div className="bg-red-50 p-3 rounded text-xs">
                    <div className="font-semibold text-red-700 mb-1">
                      Common Mistake:
                    </div>
                    <div className="text-red-600 mb-2">
                      Using simple interest instead of continuous compounding
                    </div>
                    <div className="font-semibold text-red-700 mb-1">
                      Black-Scholes Uses:
                    </div>
                    <div className="text-red-600">
                      Continuous compounding: <InlineMath math="e^{-rT}" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    advantages: {
      title: "Advantages & Limitations",
      content: (
        <div className="space-y-8">
          <div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              The Black-Scholes model revolutionized finance by providing the
              first mathematically rigorous framework for option pricing. While
              its elegant closed-form solution offers tremendous advantages, the
              model's restrictive assumptions create significant limitations in
              real-world applications that traders must understand and manage.
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
                  <h4 className="font-bold mb-2">The Foundation Paradox</h4>
                  <p>
                    Black-Scholes remains the cornerstone of derivatives pricing
                    despite its known limitations. Its theoretical elegance and
                    computational efficiency make it indispensable, while its
                    assumptions require constant adjustment and enhancement in
                    practice.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Advantages vs Limitations */}
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
                        Closed-Form Solution
                      </h5>
                      <p className="text-green-600 text-sm mb-2">
                        Instant, exact calculation without iterative methods or
                        simulations
                      </p>
                      <div className="bg-green-50 p-2 rounded text-xs">
                        <strong>Benefit:</strong> Real-time pricing for market
                        making and high-frequency trading
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
                        Mathematical Rigor
                      </h5>
                      <p className="text-green-600 text-sm mb-2">
                        Solid theoretical foundation based on arbitrage-free
                        pricing and risk-neutral valuation
                      </p>
                      <div className="bg-green-50 p-2 rounded text-xs">
                        <strong>Foundation:</strong> Provides framework for all
                        modern derivatives pricing
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
                        Complete Greeks
                      </h5>
                      <p className="text-green-600 text-sm mb-2">
                        Analytical formulas for all risk sensitivities enable
                        precise hedging and risk management
                      </p>
                      <div className="bg-green-50 p-2 rounded text-xs">
                        <strong>Advantage:</strong> Delta, gamma, theta, vega,
                        and rho all available instantly
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
                        Industry Standard
                      </h5>
                      <p className="text-green-600 text-sm mb-2">
                        Universal benchmark for option pricing, supported by all
                        major trading platforms
                      </p>
                      <div className="bg-green-50 p-2 rounded text-xs">
                        <strong>Reality:</strong> Basis for regulatory capital
                        calculations and accounting standards
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
                        Computational Efficiency
                      </h5>
                      <p className="text-green-600 text-sm mb-2">
                        Minimal computational requirements enable real-time
                        portfolio analysis
                      </p>
                      <div className="bg-green-50 p-2 rounded text-xs">
                        <strong>Scale:</strong> Price millions of options per
                        second on standard hardware
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-pink-50 border-2 border-red-200 p-6 rounded-xl">
              <h4 className="font-bold text-red-800 text-xl mb-6 text-center">
                ❌ Key Limitations
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
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-semibold text-red-700 mb-2">
                        Constant Volatility Assumption
                      </h5>
                      <p className="text-red-600 text-sm mb-2">
                        Volatility changes dramatically with market conditions,
                        earnings, and events
                      </p>
                      <div className="bg-red-50 p-2 rounded text-xs">
                        <strong>Reality:</strong> VIX ranges from 10% to 80%+
                        during market stress
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
                        Volatility Smile & Skew
                      </h5>
                      <p className="text-red-600 text-sm mb-2">
                        Different strikes and expirations trade at different
                        implied volatilities
                      </p>
                      <div className="bg-red-50 p-2 rounded text-xs">
                        <strong>Evidence:</strong> OTM puts consistently trade
                        at higher implied vol than ATM calls
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
                        Fat Tails & Market Crashes
                      </h5>
                      <p className="text-red-600 text-sm mb-2">
                        Markets exhibit extreme moves more often than normal
                        distribution predicts
                      </p>
                      <div className="bg-red-50 p-2 rounded text-xs">
                        <strong>Example:</strong> October 1987 crash was a
                        22-sigma event under Black-Scholes
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
                          d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-semibold text-red-700 mb-2">
                        European Exercise Only
                      </h5>
                      <p className="text-red-600 text-sm mb-2">
                        Most equity options are American style with early
                        exercise features
                      </p>
                      <div className="bg-red-50 p-2 rounded text-xs">
                        <strong>Impact:</strong> Can undervalue options on
                        dividend-paying stocks by 5-15%
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
                        Transaction Costs Ignored
                      </h5>
                      <p className="text-red-600 text-sm mb-2">
                        Real trading involves bid-ask spreads, commissions, and
                        market impact
                      </p>
                      <div className="bg-red-50 p-2 rounded text-xs">
                        <strong>Effect:</strong> Perfect continuous hedging is
                        impossible and expensive
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
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-semibold text-red-700 mb-2">
                        Market Closure Gaps
                      </h5>
                      <p className="text-red-600 text-sm mb-2">
                        Markets close overnight and on weekends, creating price
                        gaps and hedge risk
                      </p>
                      <div className="bg-red-50 p-2 rounded text-xs">
                        <strong>Risk:</strong> Overnight news can create large
                        gaps that break hedging
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* When to Use vs When to Avoid */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 p-6 rounded-xl">
            <h4 className="font-bold text-blue-800 text-xl mb-6 text-center">
              When to Use Black-Scholes vs When to Look for Alternatives
            </h4>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg border border-blue-200">
                <h5 className="font-bold text-green-700 mb-4 text-center">
                  ✅ Use Black-Scholes When:
                </h5>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">1</span>
                    </div>
                    <div>
                      <div className="font-semibold text-green-700 text-sm">
                        European Options
                      </div>
                      <p className="text-green-600 text-xs">
                        Index options, FX options, or other European-style
                        contracts
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">2</span>
                    </div>
                    <div>
                      <div className="font-semibold text-green-700 text-sm">
                        Liquid Markets
                      </div>
                      <p className="text-green-600 text-xs">
                        High-volume stocks with tight spreads and continuous
                        trading
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">3</span>
                    </div>
                    <div>
                      <div className="font-semibold text-green-700 text-sm">
                        Short-Term Options
                      </div>
                      <p className="text-green-600 text-xs">
                        Less time for assumptions to break down ({"<"} 3 months)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">4</span>
                    </div>
                    <div>
                      <div className="font-semibold text-green-700 text-sm">
                        Portfolio Analysis
                      </div>
                      <p className="text-green-600 text-xs">
                        Risk management and position sizing across many options
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">5</span>
                    </div>
                    <div>
                      <div className="font-semibold text-green-700 text-sm">
                        Baseline Pricing
                      </div>
                      <p className="text-green-600 text-xs">
                        Starting point for more sophisticated models
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-blue-200">
                <h5 className="font-bold text-red-700 mb-4 text-center">
                  ❌ Consider Alternatives When:
                </h5>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">1</span>
                    </div>
                    <div>
                      <div className="font-semibold text-red-700 text-sm">
                        High Volatility Environments
                      </div>
                      <p className="text-red-600 text-xs">
                        VIX {">"} 30 or market stress periods with extreme moves
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">2</span>
                    </div>
                    <div>
                      <div className="font-semibold text-red-700 text-sm">
                        Dividend-Heavy Stocks
                      </div>
                      <p className="text-red-600 text-xs">
                        Dividend yield {">"} 3% or stocks with large special
                        dividends
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">3</span>
                    </div>
                    <div>
                      <div className="font-semibold text-red-700 text-sm">
                        Long-Dated Options
                      </div>
                      <p className="text-red-600 text-xs">
                        LEAPS or options {">"} 1 year where assumptions likely
                        to change
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">4</span>
                    </div>
                    <div>
                      <div className="font-semibold text-red-700 text-sm">
                        Illiquid Underlyings
                      </div>
                      <p className="text-red-600 text-xs">
                        Wide spreads, gap risk, or difficulty hedging
                        continuously
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">5</span>
                    </div>
                    <div>
                      <div className="font-semibold text-red-700 text-sm">
                        Event-Driven Strategies
                      </div>
                      <p className="text-red-600 text-xs">
                        Earnings, M&A, FDA approvals where jumps are expected
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Model Improvements */}
          <div className="bg-gradient-to-r from-purple-50 to-violet-50 border-2 border-purple-200 p-6 rounded-xl">
            <h4 className="font-bold text-purple-800 text-xl mb-6 text-center">
              Common Model Improvements & Extensions
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h5 className="font-semibold text-purple-700 mb-3">
                    📊 Implied Volatility Surface
                  </h5>
                  <div className="bg-purple-50 p-3 rounded text-xs">
                    <div className="font-semibold text-purple-700 mb-1">
                      Solution:
                    </div>
                    <div className="text-purple-600 mb-2">
                      Use different volatilities for different strikes and
                      expirations
                    </div>
                    <div className="font-semibold text-purple-700 mb-1">
                      Implementation:
                    </div>
                    <div className="text-purple-600">
                      Interpolate vol surface, use strike-specific vols for
                      pricing
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h5 className="font-semibold text-purple-700 mb-3">
                    🎯 American Option Adjustment
                  </h5>
                  <div className="bg-purple-50 p-3 rounded text-xs">
                    <div className="font-semibold text-purple-700 mb-1">
                      Solution:
                    </div>
                    <div className="text-purple-600 mb-2">
                      Add early exercise premium using binomial trees
                    </div>
                    <div className="font-semibold text-purple-700 mb-1">
                      Rule of Thumb:
                    </div>
                    <div className="text-purple-600">
                      American premium ≈ 2-8% for ITM options with dividends
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h5 className="font-semibold text-purple-700 mb-3">
                    📈 Stochastic Volatility
                  </h5>
                  <div className="bg-purple-50 p-3 rounded text-xs">
                    <div className="font-semibold text-purple-700 mb-1">
                      Models:
                    </div>
                    <div className="text-purple-600 mb-2">
                      Heston, SABR models allow volatility to change randomly
                    </div>
                    <div className="font-semibold text-purple-700 mb-1">
                      Benefit:
                    </div>
                    <div className="text-purple-600">
                      Better captures vol clustering and mean reversion
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h5 className="font-semibold text-purple-700 mb-3">
                    🦘 Jump-Diffusion Models
                  </h5>
                  <div className="bg-purple-50 p-3 rounded text-xs">
                    <div className="font-semibold text-purple-700 mb-1">
                      Solution:
                    </div>
                    <div className="text-purple-600 mb-2">
                      Add random jumps to stock price process (Merton model)
                    </div>
                    <div className="font-semibold text-purple-700 mb-1">
                      Application:
                    </div>
                    <div className="text-purple-600">
                      Better pricing for OTM options and earnings plays
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h5 className="font-semibold text-purple-700 mb-3">
                    💰 Transaction Cost Adjustment
                  </h5>
                  <div className="bg-purple-50 p-3 rounded text-xs">
                    <div className="font-semibold text-purple-700 mb-1">
                      Method:
                    </div>
                    <div className="text-purple-600 mb-2">
                      Increase volatility by √(transaction cost rate)
                    </div>
                    <div className="font-semibold text-purple-700 mb-1">
                      Example:
                    </div>
                    <div className="text-purple-600">
                      0.1% round-trip cost → add ~1.6% to volatility
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h5 className="font-semibold text-purple-700 mb-3">
                    ⏰ Time-Varying Parameters
                  </h5>
                  <div className="bg-purple-50 p-3 rounded text-xs">
                    <div className="font-semibold text-purple-700 mb-1">
                      Approach:
                    </div>
                    <div className="text-purple-600 mb-2">
                      Use term structure of volatility and interest rates
                    </div>
                    <div className="font-semibold text-purple-700 mb-1">
                      Tools:
                    </div>
                    <div className="text-purple-600">
                      VIX term structure, yield curve for rate inputs
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Practical Reality Check */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 p-6 rounded-xl">
            <h4 className="font-bold text-amber-800 text-xl mb-6">
              Practical Reality: How Markets Actually Use Black-Scholes
            </h4>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg border border-amber-200 text-center">
                <div className="text-2xl mb-3">🏦</div>
                <h5 className="font-semibold text-amber-700 mb-3">
                  Investment Banks
                </h5>
                <p className="text-amber-600 text-sm mb-3">
                  Use Black-Scholes as baseline, then apply sophisticated
                  adjustments for client pricing
                </p>
                <div className="bg-amber-50 p-2 rounded text-xs">
                  <strong>Reality:</strong> Vol surface + credit adjustments +
                  funding costs
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border border-amber-200 text-center">
                <div className="text-2xl mb-3">📊</div>
                <h5 className="font-semibold text-amber-700 mb-3">
                  Market Makers
                </h5>
                <p className="text-amber-600 text-sm mb-3">
                  Fast BS calculations with real-time volatility updates for
                  quotes
                </p>
                <div className="bg-amber-50 p-2 rounded text-xs">
                  <strong>Focus:</strong> Speed over perfect accuracy for
                  bid/offer
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border border-amber-200 text-center">
                <div className="text-2xl mb-3">🎯</div>
                <h5 className="font-semibold text-amber-700 mb-3">
                  Retail Platforms
                </h5>
                <p className="text-amber-600 text-sm mb-3">
                  Standard Black-Scholes with implied vol from exchange data
                </p>
                <div className="bg-amber-50 p-2 rounded text-xs">
                  <strong>Approach:</strong> Simple implementation, widely
                  understood
                </div>
              </div>
            </div>

            <div className="mt-6 bg-amber-50 p-4 rounded-lg border border-amber-200">
              <h5 className="font-semibold text-amber-700 mb-2">
                The Bottom Line for Traders
              </h5>
              <p className="text-amber-600 text-sm">
                Black-Scholes isn't perfect, but it's the universal language of
                options trading. Even when using more sophisticated models,
                traders still reference "Black-Scholes delta" and "implied
                volatility." Master the fundamentals first, then understand its
                limitations and when to apply adjustments. The model's elegance
                and speed make it indispensable for real-time decision making,
                even if it requires constant calibration to market realities.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    applications: {
      title: "Practical Application",
      content: (
        <div className="space-y-8">
          <div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Black-Scholes transforms from academic theory to practical trading
              tool through proper implementation, calibration, and real-world
              adjustments. Understanding how to apply the model effectively—and
              when to deviate from it—separates successful options traders from
              those who rely purely on theoretical calculations.
            </p>

            <div className="bg-green-100 border-2 border-green-300 text-green-900 p-6 rounded-xl mb-6">
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
                  <h4 className="font-bold mb-2">
                    From Theory to Trading Floor
                  </h4>
                  <p>
                    Professional traders don't use Black-Scholes in isolation.
                    They combine it with market intuition, real-time
                    adjustments, and sophisticated risk management to create
                    profitable strategies. The model provides the foundation,
                    but successful application requires understanding its
                    practical limitations and market context.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Software & Tools */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 p-6 rounded-xl">
            <h4 className="font-bold text-blue-800 text-xl mb-6 text-center">
              Software & Tools That Use Black-Scholes
            </h4>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-lg border border-blue-200">
                <h5 className="font-bold text-blue-700 mb-4 text-center">
                  🏛️ Professional Platforms
                </h5>
                <div className="space-y-3">
                  <div className="bg-blue-50 p-3 rounded">
                    <div className="font-semibold text-blue-700 text-sm mb-1">
                      Bloomberg Terminal (OVML)
                    </div>
                    <p className="text-blue-600 text-xs">
                      Industry standard with real-time vol surface and Greeks
                    </p>
                  </div>

                  <div className="bg-blue-50 p-3 rounded">
                    <div className="font-semibold text-blue-700 text-sm mb-1">
                      Thomson Reuters Eikon
                    </div>
                    <p className="text-blue-600 text-xs">
                      Comprehensive options analytics and risk management
                    </p>
                  </div>

                  <div className="bg-blue-50 p-3 rounded">
                    <div className="font-semibold text-blue-700 text-sm mb-1">
                      FactSet Options
                    </div>
                    <p className="text-blue-600 text-xs">
                      Portfolio-level options analysis and scenario modeling
                    </p>
                  </div>

                  <div className="bg-gray-50 p-3 rounded text-xs">
                    <div className="font-semibold text-gray-700 mb-1">
                      Key Features:
                    </div>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Real-time implied volatility</li>
                      <li>• Multi-model pricing comparison</li>
                      <li>• Risk scenario analysis</li>
                      <li>• Portfolio Greeks aggregation</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-blue-200">
                <h5 className="font-bold text-green-700 mb-4 text-center">
                  📱 Retail Platforms
                </h5>
                <div className="space-y-3">
                  <div className="bg-green-50 p-3 rounded">
                    <div className="font-semibold text-green-700 text-sm mb-1">
                      Interactive Brokers TWS
                    </div>
                    <p className="text-green-600 text-xs">
                      Advanced options analytics for active traders
                    </p>
                  </div>

                  <div className="bg-green-50 p-3 rounded">
                    <div className="font-semibold text-green-700 text-sm mb-1">
                      TD Ameritrade thinkorswim
                    </div>
                    <p className="text-green-600 text-xs">
                      User-friendly interface with comprehensive Greeks
                    </p>
                  </div>

                  <div className="bg-green-50 p-3 rounded">
                    <div className="font-semibold text-green-700 text-sm mb-1">
                      E*TRADE Power E*TRADE
                    </div>
                    <p className="text-green-600 text-xs">
                      Options chains with real-time Black-Scholes pricing
                    </p>
                  </div>

                  <div className="bg-gray-50 p-3 rounded text-xs">
                    <div className="font-semibold text-gray-700 mb-1">
                      Typical Features:
                    </div>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Implied volatility display</li>
                      <li>• Probability calculators</li>
                      <li>• P&L scenarios</li>
                      <li>• Options strategies builder</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-blue-200">
                <h5 className="font-bold text-purple-700 mb-4 text-center">
                  💻 Programming Libraries
                </h5>
                <div className="space-y-3">
                  <div className="bg-purple-50 p-3 rounded">
                    <div className="font-semibold text-purple-700 text-sm mb-1">
                      Python: QuantLib
                    </div>
                    <p className="text-purple-600 text-xs">
                      Comprehensive quantitative finance library
                    </p>
                  </div>

                  <div className="bg-purple-50 p-3 rounded">
                    <div className="font-semibold text-purple-700 text-sm mb-1">
                      R: RQuantLib
                    </div>
                    <p className="text-purple-600 text-xs">
                      Statistical analysis and options pricing
                    </p>
                  </div>

                  <div className="bg-purple-50 p-3 rounded">
                    <div className="font-semibold text-purple-700 text-sm mb-1">
                      MATLAB Financial Toolbox
                    </div>
                    <p className="text-purple-600 text-xs">
                      Built-in Black-Scholes functions and Greeks
                    </p>
                  </div>

                  <div className="bg-gray-50 p-3 rounded text-xs">
                    <div className="font-semibold text-gray-700 mb-1">
                      Use Cases:
                    </div>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Custom strategy backtesting</li>
                      <li>• Research and model validation</li>
                      <li>• Automated trading systems</li>
                      <li>• Risk management systems</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Real-World Implementation Steps */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 p-6 rounded-xl">
            <h4 className="font-bold text-green-800 text-xl mb-6 text-center">
              Step-by-Step Implementation Guide
            </h4>

            <div className="space-y-6">
              <div className="bg-white p-5 rounded-lg border border-green-200">
                <h5 className="font-bold text-green-700 mb-4">
                  🚀 Getting Started: Your First Black-Scholes Implementation
                </h5>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-green-50 p-3 rounded">
                      <div className="font-semibold text-green-700 text-sm mb-2">
                        Step 1: Data Collection
                      </div>
                      <ul className="text-green-600 text-xs space-y-1">
                        <li>
                          • Get current stock price (Yahoo Finance, Bloomberg)
                        </li>
                        <li>
                          • Identify strike price and expiration from option
                          chain
                        </li>
                        <li>• Find Treasury rate matching option maturity</li>
                        <li>• Calculate time to expiration in years</li>
                        <li>• Estimate volatility (historical or implied)</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-3 rounded">
                      <div className="font-semibold text-green-700 text-sm mb-2">
                        Step 2: Volatility Estimation
                      </div>
                      <div className="text-green-600 text-xs space-y-1">
                        <div>
                          <strong>Quick Method:</strong> Use implied vol from
                          similar options
                        </div>
                        <div>
                          <strong>Historical Method:</strong> 30-day realized
                          volatility
                        </div>
                        <div>
                          <strong>Formula:</strong>{" "}
                          <InlineMath math="\sigma = \sqrt{252} \times \text{std}(\text{daily returns})" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-green-50 p-3 rounded">
                      <div className="font-semibold text-green-700 text-sm mb-2">
                        Step 3: Calculate & Validate
                      </div>
                      <ul className="text-green-600 text-xs space-y-1">
                        <li>• Compute d₁ and d₂ values</li>
                        <li>• Look up normal distribution values</li>
                        <li>• Calculate option price and Greeks</li>
                        <li>• Compare to market price</li>
                        <li>• Adjust volatility if needed</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-3 rounded">
                      <div className="font-semibold text-green-700 text-sm mb-2">
                        Step 4: Real-Time Updates
                      </div>
                      <ul className="text-green-600 text-xs space-y-1">
                        <li>• Monitor stock price changes</li>
                        <li>• Update time to expiration daily</li>
                        <li>• Recalculate Greeks for risk management</li>
                        <li>• Adjust volatility based on market conditions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Comparison with Other Models */}
          <div className="bg-gradient-to-r from-purple-50 to-violet-50 border-2 border-purple-200 p-6 rounded-xl">
            <h4 className="font-bold text-purple-800 text-xl mb-6 text-center">
              Black-Scholes vs Other Pricing Methods
            </h4>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
                <thead className="bg-gradient-to-r from-purple-100 to-violet-100">
                  <tr>
                    <th className="border border-gray-300 p-4 text-left font-bold text-gray-800">
                      Method
                    </th>
                    <th className="border border-gray-300 p-4 text-center font-bold text-blue-600">
                      Speed
                    </th>
                    <th className="border border-gray-300 p-4 text-center font-bold text-green-600">
                      Accuracy
                    </th>
                    <th className="border border-gray-300 p-4 text-center font-bold text-orange-600">
                      Complexity
                    </th>
                    <th className="border border-gray-300 p-4 text-center font-bold text-purple-600">
                      Best Use Case
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-4 font-semibold">
                      Black-Scholes
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-semibold">
                        Instant
                      </span>
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm font-semibold">
                        Good
                      </span>
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-semibold">
                        Low
                      </span>
                    </td>
                    <td className="border border-gray-300 p-4 text-center text-sm">
                      European options, baseline pricing
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-gray-25">
                    <td className="border border-gray-300 p-4 font-semibold">
                      Binomial Trees
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm font-semibold">
                        Fast
                      </span>
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-semibold">
                        Very Good
                      </span>
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm font-semibold">
                        Medium
                      </span>
                    </td>
                    <td className="border border-gray-300 p-4 text-center text-sm">
                      American options, dividends
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-4 font-semibold">
                      Monte Carlo
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-semibold">
                        Slow
                      </span>
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-semibold">
                        Excellent
                      </span>
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-semibold">
                        High
                      </span>
                    </td>
                    <td className="border border-gray-300 p-4 text-center text-sm">
                      Exotic options, complex payoffs
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-gray-25">
                    <td className="border border-gray-300 p-4 font-semibold">
                      Finite Difference
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm font-semibold">
                        Medium
                      </span>
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-semibold">
                        Excellent
                      </span>
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-semibold">
                        High
                      </span>
                    </td>
                    <td className="border border-gray-300 p-4 text-center text-sm">
                      Multi-factor models, barriers
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h5 className="font-semibold text-purple-700 mb-2">
                When to Use Each Method
              </h5>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-semibold text-purple-700 mb-1">
                    Start with Black-Scholes for:
                  </div>
                  <ul className="text-purple-600 space-y-1">
                    <li>• Quick pricing estimates</li>
                    <li>• Portfolio-level analysis</li>
                    <li>• Risk management dashboards</li>
                    <li>• Educational understanding</li>
                  </ul>
                </div>
                <div>
                  <div className="font-semibold text-purple-700 mb-1">
                    Upgrade to other methods for:
                  </div>
                  <ul className="text-purple-600 space-y-1">
                    <li>• American exercise features</li>
                    <li>• High-stakes trading decisions</li>
                    <li>• Exotic option structures</li>
                    <li>• Model validation and stress testing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Trading Strategy Examples */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 p-6 rounded-xl">
            <h4 className="font-bold text-amber-800 text-xl mb-6 text-center">
              Practical Trading Applications
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white p-5 rounded-lg border border-amber-200">
                  <h5 className="font-bold text-amber-700 mb-3">
                    💹 Market Making Strategy
                  </h5>
                  <div className="space-y-3 text-sm">
                    <div className="bg-amber-50 p-3 rounded">
                      <div className="font-semibold text-amber-700 mb-2">
                        Setup:
                      </div>
                      <ul className="text-amber-600 text-xs space-y-1">
                        <li>• Calculate Black-Scholes fair value: $2.50</li>
                        <li>• Add bid-ask spread: ±$0.10</li>
                        <li>• Quote: $2.40 bid / $2.60 offer</li>
                        <li>• Delta hedge immediately upon fill</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-3 rounded">
                      <div className="font-semibold text-gray-700 mb-1">
                        Key Success Factors:
                      </div>
                      <ul className="text-gray-600 text-xs space-y-1">
                        <li>• Fast recalculation of Greeks</li>
                        <li>• Real-time volatility adjustments</li>
                        <li>• Efficient hedge execution</li>
                        <li>• Position size management</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-lg border border-amber-200">
                  <h5 className="font-bold text-amber-700 mb-3">
                    🎯 Volatility Trading
                  </h5>
                  <div className="space-y-3 text-sm">
                    <div className="bg-amber-50 p-3 rounded">
                      <div className="font-semibold text-amber-700 mb-2">
                        Strategy:
                      </div>
                      <ul className="text-amber-600 text-xs space-y-1">
                        <li>• Implied vol: 25%, Historical vol: 20%</li>
                        <li>• Sell overpriced options</li>
                        <li>• Delta hedge to isolate vol exposure</li>
                        <li>• Profit if realized vol {"<"} implied vol</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-3 rounded">
                      <div className="font-semibold text-gray-700 mb-1">
                        Risk Management:
                      </div>
                      <ul className="text-gray-600 text-xs space-y-1">
                        <li>• Monitor gamma exposure</li>
                        <li>• Adjust hedges frequently</li>
                        <li>• Set vol stop-loss levels</li>
                        <li>• Track PnL attribution</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-lg border border-amber-200">
                  <h5 className="font-bold text-amber-700 mb-3">
                    🛡️ Portfolio Hedging
                  </h5>
                  <div className="space-y-3 text-sm">
                    <div className="bg-amber-50 p-3 rounded">
                      <div className="font-semibold text-amber-700 mb-2">
                        Application:
                      </div>
                      <ul className="text-amber-600 text-xs space-y-1">
                        <li>• Portfolio value: $10M</li>
                        <li>• Buy SPX puts for protection</li>
                        <li>• Calculate hedge ratio using delta</li>
                        <li>• Monitor portfolio Greeks daily</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-3 rounded">
                      <div className="font-semibold text-gray-700 mb-1">
                        Implementation:
                      </div>
                      <ul className="text-gray-600 text-xs space-y-1">
                        <li>• Use Black-Scholes for put pricing</li>
                        <li>• Adjust for dividend timing</li>
                        <li>• Rebalance based on delta drift</li>
                        <li>• Cost-benefit analysis vs alternatives</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-lg border border-amber-200">
                  <h5 className="font-bold text-amber-700 mb-3">
                    📊 Risk Management
                  </h5>
                  <div className="space-y-3 text-sm">
                    <div className="bg-amber-50 p-3 rounded">
                      <div className="font-semibold text-amber-700 mb-2">
                        Daily Process:
                      </div>
                      <ul className="text-amber-600 text-xs space-y-1">
                        <li>• Calculate portfolio Greeks</li>
                        <li>• Stress test with ±2σ moves</li>
                        <li>• Check maximum loss scenarios</li>
                        <li>• Adjust positions if needed</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-3 rounded">
                      <div className="font-semibold text-gray-700 mb-1">
                        Key Metrics:
                      </div>
                      <ul className="text-gray-600 text-xs space-y-1">
                        <li>• Total delta exposure</li>
                        <li>• Gamma risk concentration</li>
                        <li>• Theta decay projections</li>
                        <li>• Vega sensitivity to vol changes</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Best Practices */}
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border-2 border-cyan-200 p-6 rounded-xl">
            <h4 className="font-bold text-cyan-800 text-xl mb-6">
              Best Practices for Professional Implementation
            </h4>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg border border-cyan-200">
                <h5 className="font-semibold text-cyan-700 mb-3 text-center">
                  🎯 Model Calibration
                </h5>
                <ul className="text-cyan-600 text-sm space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      <strong>Volatility Source:</strong> Use implied vol from
                      liquid ATM options as primary input
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      <strong>Interest Rates:</strong> Match Treasury curve to
                      option expiration exactly
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      <strong>Dividend Timing:</strong> Account for known
                      ex-dividend dates in pricing
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      <strong>Model Validation:</strong> Compare theoretical to
                      market prices daily
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg border border-cyan-200">
                <h5 className="font-semibold text-cyan-700 mb-3 text-center">
                  ⚡ Risk Management
                </h5>
                <ul className="text-cyan-600 text-sm space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      <strong>Greeks Monitoring:</strong> Update risk metrics in
                      real-time during market hours
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      <strong>Stress Testing:</strong> Test portfolio under ±20%
                      moves and vol shocks
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      <strong>Position Limits:</strong> Set maximum exposure
                      based on Greeks, not notional
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      <strong>Hedge Frequency:</strong> Rebalance when delta
                      moves beyond tolerance bands
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg border border-cyan-200">
                <h5 className="font-semibold text-cyan-700 mb-3 text-center">
                  🔧 System Implementation
                </h5>
                <ul className="text-cyan-600 text-sm space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      <strong>Data Quality:</strong> Implement checks for stale
                      prices and outliers
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      <strong>Performance:</strong> Optimize calculations for
                      real-time portfolio analysis
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      <strong>Backup Models:</strong> Have binomial trees ready
                      when Black-Scholes fails
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      <strong>Documentation:</strong> Track all model parameters
                      and assumption changes
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Modern Evolution */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200 p-6 rounded-xl">
            <h4 className="font-bold text-indigo-800 text-xl mb-6">
              Modern Evolution & Future Applications
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-indigo-200">
                  <h5 className="font-semibold text-indigo-700 mb-3">
                    🤖 Technology Integration
                  </h5>
                  <div className="space-y-2 text-sm">
                    <div className="bg-indigo-50 p-3 rounded">
                      <div className="font-semibold text-indigo-700 mb-1">
                        Machine Learning Enhancement
                      </div>
                      <p className="text-indigo-600 text-xs">
                        AI algorithms use Black-Scholes as baseline, then apply
                        ML corrections for volatility surface modeling and
                        parameter estimation
                      </p>
                    </div>

                    <div className="bg-indigo-50 p-3 rounded">
                      <div className="font-semibold text-indigo-700 mb-1">
                        High-Frequency Trading
                      </div>
                      <p className="text-indigo-600 text-xs">
                        Microsecond Black-Scholes calculations in FPGA chips
                        enable real-time market making and arbitrage detection
                      </p>
                    </div>

                    <div className="bg-indigo-50 p-3 rounded">
                      <div className="font-semibold text-indigo-700 mb-1">
                        Blockchain & DeFi
                      </div>
                      <p className="text-indigo-600 text-xs">
                        Smart contracts implement Black-Scholes for automated
                        options pricing in decentralized finance protocols
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-indigo-200">
                  <h5 className="font-semibold text-indigo-700 mb-3">
                    🌐 New Asset Classes
                  </h5>
                  <div className="space-y-2 text-sm">
                    <div className="bg-indigo-50 p-3 rounded">
                      <div className="font-semibold text-indigo-700 mb-1">
                        Cryptocurrency Options
                      </div>
                      <p className="text-indigo-600 text-xs">
                        Adapting Black-Scholes for Bitcoin and Ethereum options,
                        adjusting for extreme volatility and 24/7 trading
                      </p>
                    </div>

                    <div className="bg-indigo-50 p-3 rounded">
                      <div className="font-semibold text-indigo-700 mb-1">
                        ESG Derivatives
                      </div>
                      <p className="text-indigo-600 text-xs">
                        Carbon credit options and sustainability-linked
                        derivatives using modified Black-Scholes frameworks
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-indigo-200">
                  <h5 className="font-semibold text-indigo-700 mb-3">
                    📈 Enhanced Applications
                  </h5>
                  <div className="space-y-2 text-sm">
                    <div className="bg-indigo-50 p-3 rounded">
                      <div className="font-semibold text-indigo-700 mb-1">
                        Real-Time Risk Management
                      </div>
                      <p className="text-indigo-600 text-xs">
                        Continuous portfolio rebalancing using streaming
                        Black-Scholes calculations and dynamic hedging
                        algorithms
                      </p>
                    </div>

                    <div className="bg-indigo-50 p-3 rounded">
                      <div className="font-semibold text-indigo-700 mb-1">
                        Regulatory Technology
                      </div>
                      <p className="text-indigo-600 text-xs">
                        Automated compliance systems using Black-Scholes for
                        capital adequacy calculations and stress testing
                      </p>
                    </div>

                    <div className="bg-indigo-50 p-3 rounded">
                      <div className="font-semibold text-indigo-700 mb-1">
                        Retail Democratization
                      </div>
                      <p className="text-indigo-600 text-xs">
                        Mobile apps bringing professional-grade Black-Scholes
                        analysis to individual investors through simplified
                        interfaces
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-indigo-200">
                  <h5 className="font-semibold text-indigo-700 mb-3">
                    🔮 Future Directions
                  </h5>
                  <div className="space-y-2 text-sm">
                    <div className="bg-indigo-50 p-3 rounded">
                      <div className="font-semibold text-indigo-700 mb-1">
                        Quantum Computing
                      </div>
                      <p className="text-indigo-600 text-xs">
                        Quantum algorithms may revolutionize complex derivatives
                        pricing while Black-Scholes remains the benchmark
                      </p>
                    </div>

                    <div className="bg-indigo-50 p-3 rounded">
                      <div className="font-semibold text-indigo-700 mb-1">
                        Alternative Data Integration
                      </div>
                      <p className="text-indigo-600 text-xs">
                        Satellite imagery, social media, and IoT data feeding
                        into enhanced volatility models built on Black-Scholes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Final Takeaways */}
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-200 p-6 rounded-xl">
            <h4 className="font-bold text-emerald-800 text-xl mb-4">
              Key Takeaways for Practical Implementation
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg border border-emerald-200">
                <h5 className="font-semibold text-emerald-700 mb-3">
                  ✅ What Works Well
                </h5>
                <ul className="text-emerald-600 text-sm space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>
                      <strong>Foundation:</strong> Excellent starting point for
                      any options analysis
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>
                      <strong>Speed:</strong> Instant calculations enable
                      real-time decision making
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>
                      <strong>Greeks:</strong> Risk management framework works
                      across all market conditions
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>
                      <strong>Standardization:</strong> Universal language for
                      options professionals
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg border border-emerald-200">
                <h5 className="font-semibold text-emerald-700 mb-3">
                  ⚠️ Critical Success Factors
                </h5>
                <ul className="text-emerald-600 text-sm space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>
                      <strong>Calibration:</strong> Regularly update volatility
                      inputs with market data
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>
                      <strong>Limitations:</strong> Understand when assumptions
                      break down
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>
                      <strong>Enhancements:</strong> Know when to use more
                      sophisticated models
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>
                      <strong>Context:</strong> Combine model output with market
                      intuition
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-emerald-50 p-4 rounded-lg border border-emerald-200">
              <h5 className="font-semibold text-emerald-700 mb-2">
                Bottom Line for Traders
              </h5>
              <p className="text-emerald-600 text-sm">
                Black-Scholes isn't perfect, but it's indispensable. Master the
                model first, understand its limitations second, and learn its
                practical applications third. In today's markets, successful
                traders use Black-Scholes as their foundation while building
                sophisticated enhancements on top. The model's 50-year track
                record proves its enduring value—not as the final answer, but as
                the essential starting point for all options analysis.
              </p>
            </div>
          </div>
        </div>
      ),
    },
  };

  const tabs = [
    { id: "overview", label: "Overview", icon: "📖" },
    { id: "assumptions", label: "Assumptions", icon: "📝" },
    { id: "how", label: "How it Works", icon: "🛠️" },
    { id: "advantages", label: "Pros and Cons", icon: "⚖️" },
    { id: "applications", label: "Applications", icon: "🌍" },
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
                <span>45 min read</span>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50 p-4 mb-8">
            <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
              <span>Lesson Progress</span>
              <span>5 of 8 lessons</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full"
                style={{ width: "62.5%" }}
              ></div>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-xl mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2 pr-4">
                  Master Black-Scholes with OptiPrice
                </h3>
                <p className="text-blue-100">
                  Use our calculator to explore Black-Scholes pricing in
                  real-time and see how Greeks change.
                </p>
                <p className="text-blue-100 pr-4">
                  Compare analytical solutions with binomial and Monte Carlo
                  methods side by side.
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
              onClick={() => navigate("/learning/options/asian")}
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
              <span>Back: Asian Options</span>
            </button>

            <button
              onClick={() => navigate("/learning/options/binomial")}
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <span>Next: Binomial Model</span>
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

export default BlackScholes;
