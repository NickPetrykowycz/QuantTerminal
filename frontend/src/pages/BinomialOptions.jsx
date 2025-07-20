import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import { useAuth } from "../contexts/AuthContext";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import {
  BinomialTreeFlow,
  CompleteTreeVisualization,
} from "../components/OptiPrice/Binomial/BinomialTreeComponents";

import { CodeBlock } from "../components/OptiPrice/Binomial/CodeBlock";

const BinomialOptions = () => {
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
              <strong>The Binomial Model</strong> provides an intuitive,
              step-by-step approach to option pricing by modeling stock price
              movements as a series of discrete up and down moves. Developed by
              Cox, Ross, and Rubinstein in 1979, it bridges the gap between
              simple intuition and complex mathematical models, making option
              pricing accessible while maintaining theoretical rigor.
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
                  <h4 className="font-bold mb-2">The Tree Building Insight</h4>
                  <p>
                    Binomial models work by breaking time into small periods
                    where stock prices can only move up or down by specific
                    amounts. By building a "tree" of all possible price paths
                    and working backwards from expiration, we can determine
                    today's fair option value through simple risk-neutral
                    probability calculations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What It Does */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 p-6 rounded-xl">
            <h4 className="font-bold text-blue-800 text-xl mb-6 flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm">🌳</span>
              </div>
              What the Binomial Model Does
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold text-blue-700">
                        Discrete Price Modeling
                      </div>
                      <p className="text-blue-600 text-sm">
                        Models stock price as a series of discrete up/down
                        movements over time periods, creating a branching tree
                        of possible paths
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold text-blue-700">
                        Backward Induction Pricing
                      </div>
                      <p className="text-blue-600 text-sm">
                        Starts at expiration with known payoffs and works
                        backward through the tree using risk-neutral
                        probabilities
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
                        American Option Handling
                      </div>
                      <p className="text-blue-600 text-sm">
                        Naturally handles early exercise decisions by comparing
                        intrinsic value to continuation value at each node
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold text-blue-700">
                        Dividend Flexibility
                      </div>
                      <p className="text-blue-600 text-sm">
                        Easily incorporates discrete dividends and complex
                        payout schedules by adjusting tree structure
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Approach: Discrete vs Continuous */}
          <div className="bg-gradient-to-r from-purple-50 to-violet-50 border-2 border-purple-200 p-6 rounded-xl">
            <h4 className="font-bold text-purple-800 text-xl mb-6 text-center">
              Modeling Approach: Discrete-Time Framework
            </h4>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-lg border border-purple-200">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white">🌳</span>
                  </div>
                  <h5 className="font-bold text-purple-700">Discrete Steps</h5>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    <span className="text-purple-600">
                      Time divided into finite periods
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    <span className="text-purple-600">
                      Only two possible moves per period
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    <span className="text-purple-600">
                      Tree structure builds all paths
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-amber-200">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white">⚡</span>
                  </div>
                  <h5 className="font-bold text-amber-700">vs. Other Models</h5>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                    <span className="text-amber-600">
                      Black-Scholes: Continuous time
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                    <span className="text-amber-600">
                      Monte Carlo: Random paths
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                    <span className="text-amber-600">
                      Binomial: Discrete approximation
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
                    <span className="text-green-600">
                      Intuitive visualization
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span className="text-green-600">
                      American exercise natural
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span className="text-green-600">
                      Converges to Black-Scholes
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-white p-5 rounded-lg border border-purple-200">
              <h5 className="font-bold text-purple-700 mb-3 text-center">
                The Core Tree Logic
              </h5>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">📈</div>
                  <div className="font-semibold text-purple-700">
                    Up Move (u)
                  </div>
                  <div className="text-purple-600 text-sm">
                    Stock multiplied by up factor
                  </div>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">⚖️</div>
                  <div className="font-semibold text-purple-700">
                    Risk-Neutral Probability
                  </div>
                  <div className="text-purple-600 text-sm">
                    Probability that ensures no arbitrage
                  </div>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">📉</div>
                  <div className="font-semibold text-purple-700">
                    Down Move (d)
                  </div>
                  <div className="text-purple-600 text-sm">
                    Stock multiplied by down factor
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <div className="flex items-start space-x-3">
                  <div className="text-xl">💭</div>
                  <div>
                    <div className="font-semibold text-amber-700 mb-1">
                      Why This Works:
                    </div>
                    <p className="text-amber-600 text-sm">
                      The binomial model approximates continuous price movements
                      by making the time steps smaller and smaller. As the
                      number of steps approaches infinity, the binomial tree
                      converges exactly to the Black-Scholes formula, providing
                      both intuitive understanding and mathematical rigor.
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
                      The Pre-1979 Challenge
                    </h5>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-start space-x-2">
                        <span className="text-red-500 mt-1">❌</span>
                        <span>Black-Scholes limited to European options</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-red-500 mt-1">❌</span>
                        <span>No clear way to handle early exercise</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-red-500 mt-1">❌</span>
                        <span>Dividend timing complications</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-red-500 mt-1">❌</span>
                        <span>Difficult to explain to non-mathematicians</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-bold text-gray-700 mb-3">
                      The 1979 Solution
                    </h5>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-start space-x-2">
                        <span className="text-green-500 mt-1">✅</span>
                        <span>Intuitive discrete-time framework</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-green-500 mt-1">✅</span>
                        <span>Natural American option pricing</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-green-500 mt-1">✅</span>
                        <span>Easy dividend incorporation</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-green-500 mt-1">✅</span>
                        <span>Visual tree representation</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-4 rounded-lg border border-blue-200">
                  <div className="font-semibold text-blue-700 mb-2">
                    📅 1979
                  </div>
                  <div className="text-blue-600 text-sm">
                    <strong>Cox-Ross-Rubinstein paper</strong>
                    <br />
                    "Option Pricing: A Simplified Approach"
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-4 rounded-lg border border-purple-200">
                  <div className="font-semibold text-purple-700 mb-2">
                    🏆 1980s
                  </div>
                  <div className="text-purple-600 text-sm">
                    <strong>Computing Revolution</strong>
                    <br />
                    Personal computers make multi-step trees practical
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-100 to-green-50 p-4 rounded-lg border border-green-200">
                  <div className="font-semibold text-green-700 mb-2">
                    🚀 Today
                  </div>
                  <div className="text-green-600 text-sm">
                    <strong>Teaching Standard</strong>
                    <br />
                    Primary educational tool for option pricing worldwide
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why It Exists */}
          <div className="bg-gradient-to-r from-cyan-50 to-teal-50 border-2 border-cyan-200 p-6 rounded-xl">
            <h4 className="font-bold text-cyan-800 text-xl mb-6 text-center">
              Why the Binomial Model Exists
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg border border-cyan-200">
                <h5 className="font-bold text-cyan-700 mb-4 flex items-center">
                  <span className="mr-2">📚</span>
                  Educational Need
                </h5>
                <div className="space-y-3 text-sm">
                  <div className="bg-cyan-50 p-3 rounded">
                    <div className="font-semibold text-cyan-700 mb-1">
                      Intuitive Understanding
                    </div>
                    <div className="text-cyan-600">
                      Students can see and understand each step of the pricing
                      process without advanced mathematics
                    </div>
                  </div>
                  <div className="bg-cyan-50 p-3 rounded">
                    <div className="font-semibold text-cyan-700 mb-1">
                      Visual Representation
                    </div>
                    <div className="text-cyan-600">
                      Tree diagrams make abstract concepts concrete and help
                      build financial intuition
                    </div>
                  </div>
                  <div className="bg-cyan-50 p-3 rounded">
                    <div className="font-semibold text-cyan-700 mb-1">
                      Foundation Building
                    </div>
                    <div className="text-cyan-600">
                      Demonstrates core principles like risk-neutral valuation
                      and dynamic hedging clearly
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-cyan-200">
                <h5 className="font-bold text-cyan-700 mb-4 flex items-center">
                  <span className="mr-2">🔧</span>
                  Practical Solutions
                </h5>
                <div className="space-y-3 text-sm">
                  <div className="bg-cyan-50 p-3 rounded">
                    <div className="font-semibold text-cyan-700 mb-1">
                      American Options
                    </div>
                    <div className="text-cyan-600">
                      Black-Scholes couldn't handle early exercise; binomial
                      trees solve this naturally
                    </div>
                  </div>
                  <div className="bg-cyan-50 p-3 rounded">
                    <div className="font-semibold text-cyan-700 mb-1">
                      Dividend Handling
                    </div>
                    <div className="text-cyan-600">
                      Discrete dividends and complex payout schedules are easily
                      incorporated
                    </div>
                  </div>
                  <div className="bg-cyan-50 p-3 rounded">
                    <div className="font-semibold text-cyan-700 mb-1">
                      Computational Flexibility
                    </div>
                    <div className="text-cyan-600">
                      Can be programmed easily and adjusted for exotic features
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-cyan-50 p-4 rounded-lg border border-cyan-200">
              <h6 className="font-semibold text-cyan-700 mb-2">
                Bridge Between Theory and Practice
              </h6>
              <p className="text-cyan-600 text-sm">
                The binomial model serves as the perfect bridge between
                intuitive understanding and mathematical sophistication. It's
                simple enough for beginners to grasp the fundamental concepts of
                option pricing, yet powerful enough for professionals to use in
                complex applications. This dual nature has made it the standard
                teaching tool in finance programs worldwide and a practical
                pricing method for many real-world scenarios.
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
              The Binomial Model operates under a simpler set of assumptions
              compared to Black-Scholes, making it more flexible and adaptable
              to real-world conditions. While it shares some fundamental
              assumptions with continuous-time models, its discrete framework
              allows for easier handling of dividends, early exercise, and other
              practical complications.
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
                    Flexible Discrete Framework
                  </h4>
                  <p>
                    The binomial model's discrete time structure makes it
                    inherently more flexible than continuous models. Many of the
                    restrictive assumptions of Black-Scholes become less
                    problematic when working with discrete time steps, allowing
                    for practical implementations that better match real market
                    conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Assumptions */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200 p-6 rounded-xl">
            <h4 className="font-bold text-indigo-800 text-xl mb-6 text-center">
              The Five Core Assumptions
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
                        Binary Price Movements
                      </h5>
                      <p className="text-indigo-600 text-sm mb-2">
                        Stock price can only move up or down by predetermined
                        factors during each time period
                      </p>
                      <div className="bg-indigo-50 p-2 rounded text-xs">
                        <strong>Formula:</strong> S(up) = S × u, S(down) = S × d
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
                        Interest rate remains constant throughout all time
                        periods
                      </p>
                      <div className="bg-indigo-50 p-2 rounded text-xs">
                        <strong>Reality:</strong> Can be adjusted for
                        time-varying rates in practice
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-lg border border-indigo-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h5 className="font-bold text-purple-700 mb-2">
                        No Transaction Costs
                      </h5>
                      <p className="text-purple-600 text-sm mb-2">
                        Trading is frictionless with no bid-ask spreads or
                        commissions
                      </p>
                      <div className="bg-purple-50 p-2 rounded text-xs">
                        <strong>Impact:</strong> Less critical than in
                        continuous models due to discrete rebalancing
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-lg border border-indigo-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h5 className="font-bold text-purple-700 mb-2">
                        Constant Volatility Within Periods
                      </h5>
                      <p className="text-purple-600 text-sm mb-2">
                        Up and down factors remain constant across all time
                        periods
                      </p>
                      <div className="bg-purple-50 p-2 rounded text-xs">
                        <strong>Flexibility:</strong> Can vary parameters
                        between periods if needed
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-lg border border-indigo-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">5</span>
                    </div>
                    <div>
                      <h5 className="font-bold text-purple-700 mb-2">
                        Perfect Market Liquidity
                      </h5>
                      <p className="text-purple-600 text-sm mb-2">
                        Can trade any amount at fair value without market impact
                      </p>
                      <div className="bg-purple-50 p-2 rounded text-xs">
                        <strong>Practice:</strong> Less restrictive for discrete
                        rebalancing strategies
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <h5 className="font-bold text-gray-700 mb-2">
                    Key Advantage Over Black-Scholes
                  </h5>
                  <p className="text-gray-600 text-sm">
                    The binomial model doesn't require continuous trading or
                    perfect hedge maintenance. This makes many assumptions more
                    realistic and violations less problematic.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Required Parameters */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 p-6 rounded-xl">
            <h4 className="font-bold text-green-800 text-xl mb-6 text-center">
              Required Input Parameters
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg border border-green-200">
                <h5 className="font-bold text-green-700 mb-4 text-center">
                  📊 Basic Market Inputs
                </h5>
                <div className="space-y-3">
                  <div className="bg-green-50 p-3 rounded">
                    <div className="font-semibold text-green-700 text-sm mb-1">
                      Current Stock Price (S₀)
                    </div>
                    <p className="text-green-600 text-xs mb-1">
                      Starting point for the binomial tree construction
                    </p>
                    <div className="text-gray-600 text-xs">
                      <strong>Use:</strong> Today's market price or last traded
                      price
                    </div>
                  </div>

                  <div className="bg-green-50 p-3 rounded">
                    <div className="font-semibold text-green-700 text-sm mb-1">
                      Strike Price (K)
                    </div>
                    <p className="text-green-600 text-xs mb-1">
                      Exercise price specified in option contract
                    </p>
                    <div className="text-gray-600 text-xs">
                      <strong>Note:</strong> Fixed throughout tree calculation
                    </div>
                  </div>

                  <div className="bg-green-50 p-3 rounded">
                    <div className="font-semibold text-green-700 text-sm mb-1">
                      Time to Expiration (T)
                    </div>
                    <p className="text-green-600 text-xs mb-1">
                      Total time remaining until option expiration
                    </p>
                    <div className="text-gray-600 text-xs">
                      <strong>Units:</strong> Typically in years (e.g., 30 days
                      = 30/365)
                    </div>
                  </div>

                  <div className="bg-green-50 p-3 rounded">
                    <div className="font-semibold text-green-700 text-sm mb-1">
                      Number of Steps (N)
                    </div>
                    <p className="text-green-600 text-xs mb-1">
                      How many time periods to divide the option's life into
                    </p>
                    <div className="text-gray-600 text-xs">
                      <strong>Trade-off:</strong> More steps = better accuracy
                      but slower computation
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
                      Continuous risk-free interest rate
                    </p>
                    <div className="text-gray-600 text-xs">
                      <strong>Source:</strong> Treasury rate matching option
                      maturity
                    </div>
                  </div>

                  <div className="bg-green-50 p-3 rounded">
                    <div className="font-semibold text-green-700 text-sm mb-1">
                      Volatility (σ)
                    </div>
                    <p className="text-green-600 text-xs mb-1">
                      Annualized volatility used to calculate up/down factors
                    </p>
                    <div className="text-gray-600 text-xs">
                      <strong>Calculation:</strong> u = e^(σ√Δt), d = 1/u
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
                      <strong>Alternative:</strong> Can use discrete dividend
                      amounts
                    </div>
                  </div>

                  <div className="bg-green-50 p-3 rounded">
                    <div className="font-semibold text-green-700 text-sm mb-1">
                      Option Style
                    </div>
                    <p className="text-green-600 text-xs mb-1">
                      European (exercise at expiration) or American (early
                      exercise)
                    </p>
                    <div className="text-gray-600 text-xs">
                      <strong>Default:</strong> American for equity options
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tree Parameters */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 p-6 rounded-xl">
            <h4 className="font-bold text-amber-800 text-xl mb-6">
              Tree Construction Parameters
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg border border-amber-200">
                <h5 className="font-bold text-amber-700 mb-4">
                  📐 Up and Down Factors
                </h5>
                <div className="space-y-3">
                  <div className="bg-amber-50 p-3 rounded">
                    <div className="font-semibold text-amber-700 text-sm mb-2">
                      Standard CRR Parameterization:
                    </div>
                    <div className="text-center space-y-2">
                      <div>
                        <InlineMath math="u = e^{\sigma\sqrt{\Delta t}}" />
                      </div>
                      <div>
                        <InlineMath math="d = \frac{1}{u} = e^{-\sigma\sqrt{\Delta t}}" />
                      </div>
                      <div>
                        <InlineMath math="\Delta t = \frac{T}{N}" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-3 rounded text-xs">
                    <div className="font-semibold text-gray-700 mb-1">
                      Why this parameterization?
                    </div>
                    <div className="text-gray-600">
                      • Ensures ud = 1 (recombining tree)
                      <br />• Matches volatility of underlying process
                      <br />• Converges to Black-Scholes as N → ∞
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-amber-200">
                <h5 className="font-bold text-amber-700 mb-4">
                  ⚖️ Risk-Neutral Probability
                </h5>
                <div className="space-y-3">
                  <div className="bg-amber-50 p-3 rounded">
                    <div className="font-semibold text-amber-700 text-sm mb-2">
                      Probability Calculation:
                    </div>
                    <div className="text-center space-y-2">
                      <div>
                        <InlineMath math="p = \frac{e^{r\Delta t} - d}{u - d}" />
                      </div>
                      <div className="text-xs">Risk-neutral up probability</div>
                      <div>
                        <InlineMath math="1-p" /> = Down probability
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-3 rounded text-xs">
                    <div className="font-semibold text-gray-700 mb-1">
                      Key Properties:
                    </div>
                    <div className="text-gray-600">
                      • 0 {"<"} p {"<"} 1 (valid probability)
                      <br />• Independent of risk preferences
                      <br />• Ensures no-arbitrage condition
                      <br />• Creates risk-neutral expected return = r
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Convergence and Accuracy */}
          <div className="bg-gradient-to-r from-purple-50 to-violet-50 border-2 border-purple-200 p-6 rounded-xl">
            <h4 className="font-bold text-purple-800 text-xl mb-6 text-center">
              Number of Steps: Accuracy vs Speed Trade-off
            </h4>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg border border-purple-200">
                <h5 className="font-semibold text-purple-700 mb-3 text-center">
                  🚀 Few Steps (N = 10-50)
                </h5>
                <div className="space-y-2 text-sm">
                  <div className="bg-green-50 p-2 rounded">
                    <strong className="text-green-700">Pros:</strong>
                    <ul className="text-green-600 text-xs mt-1 space-y-1">
                      <li>• Very fast calculation</li>
                      <li>• Easy to visualize tree</li>
                      <li>• Good for education</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-2 rounded">
                    <strong className="text-red-700">Cons:</strong>
                    <ul className="text-red-600 text-xs mt-1 space-y-1">
                      <li>• Lower accuracy</li>
                      <li>• May not converge well</li>
                      <li>• Choppy convergence pattern</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border border-purple-200">
                <h5 className="font-semibold text-purple-700 mb-3 text-center">
                  ⚖️ Moderate Steps (N = 100-500)
                </h5>
                <div className="space-y-2 text-sm">
                  <div className="bg-green-50 p-2 rounded">
                    <strong className="text-green-700">Pros:</strong>
                    <ul className="text-green-600 text-xs mt-1 space-y-1">
                      <li>• Good accuracy</li>
                      <li>• Reasonable speed</li>
                      <li>• Practical for most uses</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 p-2 rounded">
                    <strong className="text-yellow-700">Best for:</strong>
                    <ul className="text-yellow-600 text-xs mt-1 space-y-1">
                      <li>• Real-time pricing</li>
                      <li>• Portfolio analysis</li>
                      <li>• Risk management</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border border-purple-200">
                <h5 className="font-semibold text-purple-700 mb-3 text-center">
                  🎯 Many Steps (N = 1000+)
                </h5>
                <div className="space-y-2 text-sm">
                  <div className="bg-green-50 p-2 rounded">
                    <strong className="text-green-700">Pros:</strong>
                    <ul className="text-green-600 text-xs mt-1 space-y-1">
                      <li>• High accuracy</li>
                      <li>• Smooth convergence</li>
                      <li>• Close to Black-Scholes</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-2 rounded">
                    <strong className="text-red-700">Cons:</strong>
                    <ul className="text-red-600 text-xs mt-1 space-y-1">
                      <li>• Slower computation</li>
                      <li>• Memory intensive</li>
                      <li>• Diminishing returns</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h5 className="font-semibold text-purple-700 mb-2">
                Convergence Rate and Error
              </h5>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-semibold text-purple-700 mb-1">
                    Theoretical Convergence:
                  </div>
                  <ul className="text-purple-600 space-y-1">
                    <li>• Error decreases as O(1/N)</li>
                    <li>• Oscillatory convergence pattern</li>
                    <li>• Even N often more accurate than odd N</li>
                    <li>• Converges to Black-Scholes limit</li>
                  </ul>
                </div>
                <div>
                  <div className="font-semibold text-purple-700 mb-1">
                    Practical Guidelines:
                  </div>
                  <ul className="text-purple-600 space-y-1">
                    <li>• N ≥ 30 for basic accuracy</li>
                    <li>• N ≥ 100 for serious pricing</li>
                    <li>• N ≥ 500 for high-precision work</li>
                    <li>• Test convergence with your specific parameters</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Dividend Handling */}
          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border-2 border-teal-200 p-6 rounded-xl">
            <h4 className="font-bold text-teal-800 text-xl mb-6 text-center">
              Dividend Handling in Binomial Trees
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg border border-teal-200">
                <h5 className="font-bold text-teal-700 mb-4">
                  💰 Continuous Dividend Yield
                </h5>
                <div className="space-y-3 text-sm">
                  <div className="bg-teal-50 p-3 rounded">
                    <div className="font-semibold text-teal-700 mb-2">
                      Modified Risk-Neutral Probability:
                    </div>
                    <div className="text-center">
                      <InlineMath math="p = \frac{e^{(r-q)\Delta t} - d}{u - d}" />
                    </div>
                    <div className="text-teal-600 text-xs mt-2">
                      Where q is the continuous dividend yield
                    </div>
                  </div>

                  <div className="bg-gray-50 p-3 rounded text-xs">
                    <div className="font-semibold text-gray-700 mb-1">
                      Implementation:
                    </div>
                    <div className="text-gray-600">
                      • Replace r with (r-q) in probability calculation
                      <br />• Stock prices unaffected in tree
                      <br />• Simple and mathematically clean
                      <br />• Good for high dividend yield stocks
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-teal-200">
                <h5 className="font-bold text-teal-700 mb-4">
                  📅 Discrete Dividends
                </h5>
                <div className="space-y-3 text-sm">
                  <div className="bg-teal-50 p-3 rounded">
                    <div className="font-semibold text-teal-700 mb-2">
                      Tree Adjustment Method:
                    </div>
                    <div className="space-y-1 text-xs">
                      <div>1. Subtract PV of dividends from S₀</div>
                      <div>2. Build tree with adjusted price</div>
                      <div>3. Add back dividends at payment nodes</div>
                      <div>4. Check early exercise after dividends</div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-3 rounded text-xs">
                    <div className="font-semibold text-gray-700 mb-1">
                      Key Advantages:
                    </div>
                    <div className="text-gray-600">
                      • Handles exact dividend timing
                      <br />• Natural early exercise checking
                      <br />• Matches real market behavior
                      <br />• Can model variable dividend amounts
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
                  🎯 For Accuracy
                </h5>
                <ul className="text-cyan-600 text-sm space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      <strong>Steps:</strong> Use N ≥ 100 for pricing, N ≥ 500
                      for Greeks
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      <strong>Volatility:</strong> Use implied vol from similar
                      options when available
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      <strong>Dividends:</strong> Use discrete method for known
                      dividend dates
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg border border-cyan-200">
                <h5 className="font-semibold text-cyan-700 mb-3 text-center">
                  ⚡ For Speed
                </h5>
                <ul className="text-cyan-600 text-sm space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      <strong>Steps:</strong> N = 50-100 for quick estimates and
                      screening
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      <strong>Batch Processing:</strong> Reuse tree structure
                      for multiple strikes
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      <strong>Convergence:</strong> Test with small N first,
                      then increase if needed
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg border border-cyan-200">
                <h5 className="font-semibold text-cyan-700 mb-3 text-center">
                  🛡️ For Reliability
                </h5>
                <ul className="text-cyan-600 text-sm space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      <strong>Validation:</strong> Compare with Black-Scholes
                      for European options
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      <strong>Stress Testing:</strong> Vary N to check
                      convergence stability
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      <strong>Documentation:</strong> Record parameter choices
                      and rationale
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
              The Binomial Model works by building a tree of possible stock
              price paths, then calculating option values backward from
              expiration. This intuitive approach makes American option pricing
              natural while providing the same accuracy as more complex methods
              when enough steps are used.
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
                  <h4 className="font-bold mb-2">The Two-Step Process</h4>
                  <p>
                    First, build the stock price tree forward in time using up
                    and down factors. Then, work backward from expiration,
                    comparing intrinsic value with continuation value at each
                    node to determine optimal exercise decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Formulas - Consistent blue theme */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 p-6 rounded-xl">
            <h4 className="font-bold text-blue-800 text-xl mb-6 text-center">
              The Core Binomial Formulas
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg border border-blue-200 shadow-sm">
                <h5 className="font-bold text-blue-700 mb-4 text-center">
                  🌳 Tree Construction
                </h5>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <div className="font-semibold text-blue-700 mb-3 text-center">
                      Up Factor:
                    </div>
                    <div className="text-center">
                      <BlockMath math="u = e^{\sigma\sqrt{\Delta t}}" />
                    </div>
                    <div className="text-blue-600 text-xs text-center mt-2">
                      Stock multiplies by u in up movements
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <div className="font-semibold text-blue-700 mb-3 text-center">
                      Down Factor:
                    </div>
                    <div className="text-center">
                      <BlockMath math="d = \frac{1}{u}" />
                    </div>
                    <div className="text-blue-600 text-xs text-center mt-2">
                      Ensures tree recombines: ud = 1
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-blue-200 shadow-sm">
                <h5 className="font-bold text-blue-700 mb-4 text-center">
                  💰 Option Valuation
                </h5>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <div className="font-semibold text-blue-700 mb-3 text-center">
                      Risk-Neutral Probability:
                    </div>
                    <div className="text-center">
                      <BlockMath math="p = \frac{e^{r\Delta t} - d}{u - d}" />
                    </div>
                    <div className="text-blue-600 text-xs text-center mt-2">
                      Probability that ensures no arbitrage
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <div className="font-semibold text-blue-700 mb-3 text-center">
                      Backward Induction:
                    </div>
                    <div className="text-center">
                      <BlockMath math="V = e^{-r\Delta t}[p \cdot V_u + (1-p) \cdot V_d]" />
                    </div>
                    <div className="text-blue-600 text-xs text-center mt-2">
                      Expected discounted future value
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step-by-Step Example - Consistent green theme */}
          <div className="bg-gradient-to-r from-emerald-50 to-green-50 border-2 border-emerald-200 p-6 rounded-xl">
            <h4 className="font-bold text-emerald-800 text-xl mb-6 text-center">
              📚 Step-by-Step Example: American Put Option
            </h4>

            <div className="bg-white p-6 rounded-lg border border-emerald-200 shadow-sm">
              <div className="text-center mb-6">
                <h5 className="font-bold text-emerald-700 text-lg mb-2">
                  Two-Period Tree Calculation
                </h5>
                <p className="text-emerald-600 text-sm">
                  See how American options handle early exercise naturally
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-emerald-50 p-5 rounded-lg border border-emerald-200">
                  <div className="font-semibold text-emerald-700 mb-4 text-center">
                    📊 Input Parameters
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>Stock Price (S₀):</span>
                      <span className="font-mono font-bold">$50</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Strike Price (K):</span>
                      <span className="font-mono font-bold">$52</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Periods (N):</span>
                      <span className="font-mono font-bold">2</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Up Factor (u):</span>
                      <span className="font-mono font-bold">1.2</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Down Factor (d):</span>
                      <span className="font-mono font-bold">0.8</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Risk-free Rate:</span>
                      <span className="font-mono font-bold">5%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                  <div className="font-semibold text-slate-700 mb-4 text-center">
                    ⚖️ Risk-Neutral Probability
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="text-center">
                      <InlineMath math="p = \frac{e^{0.05} - 0.8}{1.2 - 0.8}" />
                    </div>
                    <div className="text-center">
                      <InlineMath math="p = \frac{1.0513 - 0.8}{0.4} = 0.628" />
                    </div>
                    <div className="bg-blue-50 p-3 rounded mt-3">
                      <div className="text-center font-bold text-blue-700">
                        <div>Up probability: 62.8%</div>
                        <div>Down probability: 37.2%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Tree */}
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 mb-6">
                <h6 className="font-semibold text-amber-700 mb-4 text-center">
                  🎨 Interactive Decision Tree
                </h6>
                <BinomialTreeFlow />
                <div className="mt-4 flex justify-center space-x-8 text-sm">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-white border-2 border-gray-300 rounded mr-2"></div>
                    <span>Continue Holding</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-red-50 border-2 border-red-300 rounded mr-2"></div>
                    <span>Exercise Early</span>
                  </div>
                </div>
              </div>

              {/* Step-by-Step Calculation Process - Harmonized colors */}
              <div className="mt-6 bg-white p-6 rounded-lg border border-emerald-200 shadow-sm">
                <h6 className="font-semibold text-emerald-700 mb-4 text-center">
                  📝 Step-by-Step Calculation Process
                </h6>

                <div className="grid md:grid-cols-1 gap-6">
                  {/* Step 1 - Blue theme */}
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">1</span>
                      </div>
                      <div className="flex-1">
                        <h6 className="font-semibold text-blue-700 mb-2">
                          Build the Stock Price Tree Forward
                        </h6>
                        <div className="text-blue-600 text-sm mb-3">
                          Start at $50 and calculate all possible stock prices
                          using up and down factors.
                        </div>
                        <div className="bg-white p-3 rounded border text-xs">
                          <div className="grid grid-cols-3 gap-4">
                            <div className="text-center">
                              <div className="font-bold text-gray-700">
                                Period 0
                              </div>
                              <div className="font-mono">$50</div>
                            </div>
                            <div className="text-center">
                              <div className="font-bold text-gray-700">
                                Period 1
                              </div>
                              <div className="font-mono">$60 (×1.2)</div>
                              <div className="font-mono">$40 (×0.8)</div>
                            </div>
                            <div className="text-center">
                              <div className="font-bold text-gray-700">
                                Period 2
                              </div>
                              <div className="font-mono">$72, $48, $32</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 2 - Indigo theme */}
                  <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">2</span>
                      </div>
                      <div className="flex-1">
                        <h6 className="font-semibold text-indigo-700 mb-2">
                          Calculate Option Values at Expiration
                        </h6>
                        <div className="text-indigo-600 text-sm mb-3">
                          At period 2, option values are simply the intrinsic
                          value (payoff if exercised).
                        </div>
                        <div className="bg-white p-3 rounded border text-xs">
                          <div className="grid grid-cols-3 gap-4 text-center">
                            <div>
                              <div className="font-bold">S=$72</div>
                              <div className="font-mono">max(52-72,0) = $0</div>
                            </div>
                            <div>
                              <div className="font-bold">S=$48</div>
                              <div className="font-mono">max(52-48,0) = $4</div>
                            </div>
                            <div>
                              <div className="font-bold">S=$32</div>
                              <div className="font-mono">
                                max(52-32,0) = $20
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 3 - Emerald theme */}
                  <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">3</span>
                      </div>
                      <div className="flex-1">
                        <h6 className="font-semibold text-emerald-700 mb-2">
                          Work Backward Through Tree
                        </h6>
                        <div className="text-emerald-600 text-sm mb-3">
                          At each node, compare continuation value vs. immediate
                          exercise value.
                        </div>
                        <div className="bg-white p-3 rounded border text-xs space-y-2">
                          <div>
                            <div className="font-bold text-emerald-700">
                              At $60 node:
                            </div>
                            <div>
                              Continuation: e^(-0.05) × [0.628×$0 + 0.372×$4] =
                              $1.42
                            </div>
                            <div>Exercise now: max(52-60,0) = $0</div>
                            <div className="text-emerald-600 font-bold">
                              → Continue holding ($1.42)
                            </div>
                          </div>
                          <div>
                            <div className="font-bold text-red-700">
                              At $40 node:
                            </div>
                            <div>
                              Continuation: e^(-0.05) × [0.628×$4 + 0.372×$20] =
                              $9.45
                            </div>
                            <div>Exercise now: max(52-40,0) = $12</div>
                            <div className="text-red-600 font-bold">
                              → Exercise early ($12.00)
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 4 - Orange theme */}
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">4</span>
                      </div>
                      <div className="flex-1">
                        <h6 className="font-semibold text-orange-700 mb-2">
                          Calculate Today's Option Value
                        </h6>
                        <div className="text-orange-600 text-sm mb-3">
                          Use the period 1 values to find today's fair price.
                        </div>
                        <div className="bg-white p-3 rounded border text-xs">
                          <div>
                            <div className="font-bold text-orange-700">
                              At $50 node (today):
                            </div>
                            <div>
                              Continuation: e^(-0.05) × [0.628×$1.42 +
                              0.372×$12.00] = $5.10
                            </div>
                            <div>Exercise now: max(52-50,0) = $2.00</div>
                            <div className="text-orange-600 font-bold text-lg">
                              → American Put Value = $5.10
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Results - Consistent color scheme */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-center">
                  <div className="text-2xl mb-2">🎯</div>
                  <div className="font-bold text-blue-700">Final Result</div>
                  <div className="text-blue-600 text-sm mb-2">
                    American Put Value
                  </div>
                  <div className="text-2xl font-bold text-blue-800">$5.10</div>
                </div>

                <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200 text-center">
                  <div className="text-2xl mb-2">⚡</div>
                  <div className="font-bold text-emerald-700">Key Insight</div>
                  <div className="text-emerald-600 text-sm mb-2">
                    Early exercise optimal at
                  </div>
                  <div className="text-xl font-bold text-emerald-800">
                    $40 node
                  </div>
                </div>

                <div className="bg-violet-50 p-4 rounded-lg border border-violet-200 text-center">
                  <div className="text-2xl mb-2">💎</div>
                  <div className="font-bold text-violet-700">
                    American Premium
                  </div>
                  <div className="text-violet-600 text-sm mb-2">
                    Value above European
                  </div>
                  <div className="text-xl font-bold text-violet-800">$0.61</div>
                </div>
              </div>
            </div>
          </div>

          {/* European vs American Comparison - Streamlined color scheme */}
          <div className="bg-gradient-to-r from-slate-50 to-gray-50 border-2 border-slate-200 p-6 rounded-xl">
            <h4 className="font-bold text-slate-800 text-xl mb-6 text-center">
              🔄 European vs American: Implementation Comparison
            </h4>

            <div className="space-y-8">
              {/* European Implementation */}
              <div className="bg-white p-5 rounded-lg border border-slate-200">
                <h5 className="font-bold text-slate-700 mb-4 text-center">
                  🇪🇺 European Option - Simple Backward Induction
                </h5>

                {/* Algorithm explanation above code */}
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-slate-50 p-3 rounded">
                    <div className="font-semibold text-slate-700 mb-2">
                      Algorithm Steps:
                    </div>
                    <ul className="text-slate-600 space-y-1 text-sm">
                      <li>1. Calculate payoffs at expiration only</li>
                      <li>2. Work backward using continuation values</li>
                      <li>3. No early exercise checking needed</li>
                      <li>4. Faster computation</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-3 rounded text-center">
                    <div className="font-semibold text-blue-700 mb-2">
                      Performance:
                    </div>
                    <div className="text-blue-600 text-sm">
                      <div>Complexity: O(N²)</div>
                      <div>Memory: Single array</div>
                      <div>Speed: Fast convergence</div>
                    </div>
                  </div>

                  <div className="bg-emerald-50 p-3 rounded text-center">
                    <div className="font-semibold text-emerald-700 mb-2">
                      Result:
                    </div>
                    <div className="text-emerald-600 font-mono text-lg font-bold">
                      $4.49
                    </div>
                    <div className="text-emerald-600 text-sm">
                      European Put Value
                    </div>
                  </div>
                </div>

                {/* Full-width code block */}
                <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
                  <div className="text-green-400 mb-4">
                    # European Option - Simple Backward Induction
                  </div>
                  <div className="space-y-1">
                    <div>
                      <span className="text-blue-300">for</span>{" "}
                      <span className="text-yellow-300">period</span>{" "}
                      <span className="text-blue-300">in</span>{" "}
                      <span className="text-purple-300">range</span>(N
                      <span className="text-red-300">-</span>
                      <span className="text-orange-300">1</span>,{" "}
                      <span className="text-red-300">-</span>
                      <span className="text-orange-300">1</span>,{" "}
                      <span className="text-red-300">-</span>
                      <span className="text-orange-300">1</span>):
                    </div>
                    <div>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="text-blue-300">for</span>{" "}
                      <span className="text-yellow-300">j</span>{" "}
                      <span className="text-blue-300">in</span>{" "}
                      <span className="text-purple-300">range</span>(period{" "}
                      <span className="text-red-300">+</span>{" "}
                      <span className="text-orange-300">1</span>):
                    </div>
                    <div>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="text-gray-400">
                        # Simple continuation value calculation
                      </span>
                    </div>
                    <div>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;option_values[j]{" "}
                      <span className="text-red-300">=</span> discount{" "}
                      <span className="text-red-300">*</span> (
                    </div>
                    <div>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;p{" "}
                      <span className="text-red-300">*</span> option_values[j]{" "}
                      <span className="text-red-300">+</span>
                    </div>
                    <div>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
                      <span className="text-orange-300">1</span>{" "}
                      <span className="text-red-300">-</span> p){" "}
                      <span className="text-red-300">*</span> option_values[j{" "}
                      <span className="text-red-300">+</span>{" "}
                      <span className="text-orange-300">1</span>]
                    </div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)</div>
                    <div className="mt-4 text-green-400">
                      # No early exercise check needed - that's it!
                    </div>
                  </div>
                </div>
              </div>

              {/* American Implementation */}
              <div className="bg-white p-5 rounded-lg border border-slate-200">
                <h5 className="font-bold text-slate-700 mb-4 text-center">
                  🇺🇸 American Option - Enhanced with Early Exercise
                </h5>

                {/* Algorithm explanation above code */}
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-slate-50 p-3 rounded">
                    <div className="font-semibold text-slate-700 mb-2">
                      Enhanced Algorithm:
                    </div>
                    <ul className="text-slate-600 space-y-1 text-sm">
                      <li>1. Calculate payoffs at expiration</li>
                      <li>2. At each node: compute continuation value</li>
                      <li>3. Compare with immediate exercise value</li>
                      <li>4. Take maximum of both options</li>
                    </ul>
                  </div>

                  <div className="bg-amber-50 p-3 rounded text-center">
                    <div className="font-semibold text-amber-700 mb-2">
                      Additional Complexity:
                    </div>
                    <div className="text-amber-600 text-sm">
                      <div>Complexity: O(N²) + checks</div>
                      <div>Memory: Extra calculations</div>
                      <div>Speed: Slightly slower</div>
                    </div>
                  </div>

                  <div className="bg-rose-50 p-3 rounded text-center">
                    <div className="font-semibold text-rose-700 mb-2">
                      Result:
                    </div>
                    <div className="text-rose-600 font-mono text-lg font-bold">
                      $5.10
                    </div>
                    <div className="text-rose-600 text-sm">
                      American Put Value
                    </div>
                    <div className="text-rose-600 text-xs font-semibold">
                      +$0.61 premium
                    </div>
                  </div>
                </div>

                {/* Full-width code block */}
                <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
                  <div className="text-green-400 mb-4">
                    # American Option - Early Exercise Check Added
                  </div>
                  <div className="space-y-1">
                    <div>
                      <span className="text-blue-300">for</span>{" "}
                      <span className="text-yellow-300">period</span>{" "}
                      <span className="text-blue-300">in</span>{" "}
                      <span className="text-purple-300">range</span>(N
                      <span className="text-red-300">-</span>
                      <span className="text-orange-300">1</span>,{" "}
                      <span className="text-red-300">-</span>
                      <span className="text-orange-300">1</span>,{" "}
                      <span className="text-red-300">-</span>
                      <span className="text-orange-300">1</span>):
                    </div>
                    <div>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="text-blue-300">for</span>{" "}
                      <span className="text-yellow-300">j</span>{" "}
                      <span className="text-blue-300">in</span>{" "}
                      <span className="text-purple-300">range</span>(period{" "}
                      <span className="text-red-300">+</span>{" "}
                      <span className="text-orange-300">1</span>):
                    </div>
                    <div>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="text-gray-400">
                        # Calculate continuation value (same as European)
                      </span>
                    </div>
                    <div>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;continuation{" "}
                      <span className="text-red-300">=</span> discount{" "}
                      <span className="text-red-300">*</span> (
                    </div>
                    <div>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;p{" "}
                      <span className="text-red-300">*</span> option_values[j]{" "}
                      <span className="text-red-300">+</span>
                    </div>
                    <div>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
                      <span className="text-orange-300">1</span>{" "}
                      <span className="text-red-300">-</span> p){" "}
                      <span className="text-red-300">*</span> option_values[j{" "}
                      <span className="text-red-300">+</span>{" "}
                      <span className="text-orange-300">1</span>]
                    </div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)</div>
                    <div className="mt-2">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="text-gray-400">
                        # Calculate immediate exercise value
                      </span>
                    </div>
                    <div>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;intrinsic{" "}
                      <span className="text-red-300">=</span>{" "}
                      <span className="text-purple-300">max</span>(K{" "}
                      <span className="text-red-300">-</span>{" "}
                      stock_price[period][j],{" "}
                      <span className="text-orange-300">0</span>)
                    </div>
                    <div className="mt-2">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="text-gray-400">
                        # KEY DIFFERENCE: Take maximum of both values
                      </span>
                    </div>
                    <div>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;option_values[j]{" "}
                      <span className="text-red-300">=</span>{" "}
                      <span className="text-purple-300">max</span>(continuation,
                      intrinsic)
                    </div>
                    <div className="mt-4 text-yellow-400">
                      # This max() operation captures the early exercise
                      premium!
                    </div>
                  </div>
                </div>
              </div>

              {/* Summary comparison - Harmonized colors */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 p-6 rounded-lg">
                <h6 className="font-semibold text-blue-700 mb-4 text-center">
                  🔑 Key Implementation Differences Summary
                </h6>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded border border-blue-200">
                      <div className="font-bold text-blue-700 mb-3 text-center">
                        💡 The Core Difference
                      </div>
                      <div className="text-blue-600 text-sm text-center">
                        <div className="bg-slate-50 p-3 rounded mb-2">
                          <strong>European:</strong>{" "}
                          <code>value = continuation</code>
                        </div>
                        <div className="bg-rose-50 p-3 rounded">
                          <strong>American:</strong>{" "}
                          <code>value = max(continuation, intrinsic)</code>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded border border-blue-200">
                      <div className="font-bold text-blue-700 mb-3 text-center">
                        📊 Performance Impact
                      </div>
                      <div className="text-blue-600 text-sm">
                        <div>
                          • <strong>Speed:</strong> European ~10% faster
                        </div>
                        <div>
                          • <strong>Memory:</strong> Similar usage
                        </div>
                        <div>
                          • <strong>Complexity:</strong> One extra max()
                          operation
                        </div>
                        <div>
                          • <strong>Accuracy:</strong> American captures real
                          market behavior
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded border border-blue-200">
                      <div className="font-bold text-blue-700 mb-3 text-center">
                        🎯 When to Use Each
                      </div>
                      <div className="text-blue-600 text-sm">
                        <div className="bg-slate-50 p-2 rounded mb-2">
                          <strong>European Model:</strong> Index options,
                          theoretical analysis, speed-critical applications
                        </div>
                        <div className="bg-rose-50 p-2 rounded">
                          <strong>American Model:</strong> Equity options, real
                          trading, dividend-paying stocks
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded border border-blue-200">
                      <div className="font-bold text-blue-700 mb-3 text-center">
                        💰 Value Difference
                      </div>
                      <div className="text-blue-600 text-sm text-center">
                        <div className="text-2xl font-bold text-emerald-600">
                          $5.10 - $4.49 = $0.61
                        </div>
                        <div className="text-xs mt-1">
                          American premium (12% higher value)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Convergence - Consistent teal theme */}
          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border-2 border-teal-200 p-6 rounded-xl">
            <h4 className="font-bold text-teal-800 text-xl mb-6 text-center">
              📈 Convergence to Black-Scholes
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg border border-teal-200">
                <h5 className="font-bold text-teal-700 mb-4 text-center">
                  🎯 Accuracy vs Speed
                </h5>
                <div className="space-y-3 text-sm">
                  <div className="bg-teal-50 p-3 rounded">
                    <div className="font-semibold text-teal-700 mb-2">
                      As N increases:
                    </div>
                    <div className="space-y-1 text-xs">
                      <div>N = 10: Fast but rough (~5% error)</div>
                      <div>N = 100: Good balance (~0.5% error)</div>
                      <div>N = 1000: Very accurate (~0.05% error)</div>
                      <div>N → ∞: Exactly Black-Scholes</div>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-3 rounded text-xs">
                    <div className="font-semibold text-slate-700 mb-1">
                      Convergence Pattern:
                    </div>
                    <div className="text-slate-600">
                      Binomial results oscillate around the true value, with
                      even N often more accurate than odd N
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-teal-200">
                <h5 className="font-bold text-teal-700 mb-4 text-center">
                  ⚡ When to Use Each
                </h5>
                <div className="space-y-3 text-sm">
                  <div className="bg-emerald-50 p-3 rounded">
                    <div className="font-semibold text-emerald-700 mb-1">
                      Use Binomial for:
                    </div>
                    <ul className="text-emerald-600 text-xs space-y-1">
                      <li>• American options</li>
                      <li>• Discrete dividends</li>
                      <li>• Learning/teaching</li>
                      <li>• Custom features</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-3 rounded">
                    <div className="font-semibold text-blue-700 mb-1">
                      Use Black-Scholes for:
                    </div>
                    <ul className="text-blue-600 text-xs space-y-1">
                      <li>• European options</li>
                      <li>• Real-time pricing</li>
                      <li>• Portfolio analysis</li>
                      <li>• High-frequency trading</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Implementation Tips - Consistent orange theme */}
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-2 border-orange-200 p-6 rounded-xl">
            <h4 className="font-bold text-orange-800 text-xl mb-6">
              💡 Implementation Best Practices
            </h4>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg border border-orange-200">
                <h5 className="font-semibold text-orange-700 mb-3 text-center">
                  ⚡ Performance
                </h5>
                <ul className="text-orange-600 text-sm space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Use N = 100-500 for most applications</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Implement rolling arrays to save memory</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Vectorize calculations with NumPy</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg border border-orange-200">
                <h5 className="font-semibold text-orange-700 mb-3 text-center">
                  🔍 Validation
                </h5>
                <ul className="text-orange-600 text-sm space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Verify ud = 1 (recombining tree)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>
                      Check 0 {"<"} p {"<"} 1 (valid probability)
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Compare European result with Black-Scholes</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg border border-orange-200">
                <h5 className="font-semibold text-orange-700 mb-3 text-center">
                  🎯 Accuracy
                </h5>
                <ul className="text-orange-600 text-sm space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Test convergence with increasing N</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Use Richardson extrapolation for speed</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Handle dividends with discrete adjustments</span>
                  </li>
                </ul>
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
              The Binomial Model combines intuitive visualization with
              mathematical rigor, making it incredibly versatile for both
              education and practical trading. While it excels in certain areas
              where other models struggle, it also faces unique computational
              and accuracy trade-offs that traders must understand and manage.
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
                  <h4 className="font-bold mb-2">The Educational Powerhouse</h4>
                  <p>
                    Binomial trees excel at bridging the gap between intuition
                    and mathematics. Students can see every possible outcome and
                    understand exactly why options have value, making complex
                    concepts accessible. Yet this same transparency comes with
                    computational costs that other models avoid entirely.
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
                        American Options Excellence
                      </h5>
                      <p className="text-green-600 text-sm mb-2">
                        Natural handling of early exercise decisions by
                        comparing intrinsic vs continuation value at each node
                      </p>
                      <div className="bg-green-50 p-2 rounded text-xs">
                        <strong>Advantage:</strong> Black-Scholes can't handle
                        American options directly
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
                        Intuitive Visualization
                      </h5>
                      <p className="text-green-600 text-sm mb-2">
                        Tree structure makes all possible price paths visible,
                        building deep understanding of option behavior
                      </p>
                      <div className="bg-green-50 p-2 rounded text-xs">
                        <strong>Educational:</strong> Best model for learning
                        options pricing concepts
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
                        Flexible Framework
                      </h5>
                      <p className="text-green-600 text-sm mb-2">
                        Easily modified for time-varying parameters, discrete
                        dividends, and complex payoff structures
                      </p>
                      <div className="bg-green-50 p-2 rounded text-xs">
                        <strong>Adaptability:</strong> Can incorporate
                        path-dependent features naturally
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
                        Convergence Guarantee
                      </h5>
                      <p className="text-green-600 text-sm mb-2">
                        Mathematically proven to converge to Black-Scholes as
                        number of steps increases
                      </p>
                      <div className="bg-green-50 p-2 rounded text-xs">
                        <strong>Reliability:</strong> Can achieve any desired
                        accuracy level
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
                        Programming Simplicity
                      </h5>
                      <p className="text-green-600 text-sm mb-2">
                        Straightforward implementation with loops and arrays,
                        easy to debug and modify
                      </p>
                      <div className="bg-green-50 p-2 rounded text-xs">
                        <strong>Implementation:</strong> No complex mathematical
                        libraries required
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
                        Computational Intensity
                      </h5>
                      <p className="text-red-600 text-sm mb-2">
                        Memory usage grows as O(N²) and computation time as
                        O(N²), becoming prohibitive for large portfolios
                      </p>
                      <div className="bg-red-50 p-2 rounded text-xs">
                        <strong>Reality:</strong> 1000-step tree needs 500,000
                        calculations vs instant Black-Scholes
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
                        Oscillatory Convergence
                      </h5>
                      <p className="text-red-600 text-sm mb-2">
                        Results oscillate around true value as N increases,
                        making convergence assessment difficult
                      </p>
                      <div className="bg-red-50 p-2 rounded text-xs">
                        <strong>Effect:</strong> Even N often more accurate than
                        odd N for same computation cost
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
                        Slow Accuracy Improvement
                      </h5>
                      <p className="text-red-600 text-sm mb-2">
                        Error decreases only as O(1/N), requiring 100x more
                        steps for 10x better accuracy
                      </p>
                      <div className="bg-red-50 p-2 rounded text-xs">
                        <strong>Example:</strong> Going from N=100 to N=1000
                        gives only 3x better accuracy
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
                        Parameter Sensitivity
                      </h5>
                      <p className="text-red-600 text-sm mb-2">
                        Small changes in volatility or time steps can
                        significantly affect results, requiring careful
                        calibration
                      </p>
                      <div className="bg-red-50 p-2 rounded text-xs">
                        <strong>Risk:</strong> Numerical instability with
                        extreme parameters
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
                        Poor Real-Time Performance
                      </h5>
                      <p className="text-red-600 text-sm mb-2">
                        Too slow for high-frequency trading, market making, or
                        large portfolio analysis requiring instant updates
                      </p>
                      <div className="bg-red-50 p-2 rounded text-xs">
                        <strong>Limitation:</strong> Millisecond calculations vs
                        microsecond needs
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
                        Limited Volatility Modeling
                      </h5>
                      <p className="text-red-600 text-sm mb-2">
                        Assumes constant volatility within each period; can't
                        naturally handle volatility smiles or term structure
                      </p>
                      <div className="bg-red-50 p-2 rounded text-xs">
                        <strong>Workaround:</strong> Requires manual adjustments
                        for market-observed vol patterns
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
              When to Use Binomial vs When to Look for Alternatives
            </h4>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg border border-blue-200">
                <h5 className="font-bold text-green-700 mb-4 text-center">
                  ✅ Use Binomial When:
                </h5>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">1</span>
                    </div>
                    <div>
                      <div className="font-semibold text-green-700 text-sm">
                        American Exercise Features
                      </div>
                      <p className="text-green-600 text-xs">
                        Any option that can be exercised early, especially with
                        dividend considerations
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">2</span>
                    </div>
                    <div>
                      <div className="font-semibold text-green-700 text-sm">
                        Educational Purposes
                      </div>
                      <p className="text-green-600 text-xs">
                        Learning options pricing, demonstrating risk-neutral
                        valuation, or building intuition
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">3</span>
                    </div>
                    <div>
                      <div className="font-semibold text-green-700 text-sm">
                        Discrete Events
                      </div>
                      <p className="text-green-600 text-xs">
                        Known dividend dates, earnings announcements, or other
                        scheduled events
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">4</span>
                    </div>
                    <div>
                      <div className="font-semibold text-green-700 text-sm">
                        Custom Modifications
                      </div>
                      <p className="text-green-600 text-xs">
                        Need to adjust parameters over time or incorporate
                        special features
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">5</span>
                    </div>
                    <div>
                      <div className="font-semibold text-green-700 text-sm">
                        Model Validation
                      </div>
                      <p className="text-green-600 text-xs">
                        Cross-checking Black-Scholes results or testing
                        convergence
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
                        High-Frequency Trading
                      </div>
                      <p className="text-red-600 text-xs">
                        Need microsecond pricing updates for algorithmic trading
                        or market making
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">2</span>
                    </div>
                    <div>
                      <div className="font-semibold text-red-700 text-sm">
                        Large Portfolio Analysis
                      </div>
                      <p className="text-red-600 text-xs">
                        Pricing hundreds or thousands of options simultaneously
                        for risk management
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">3</span>
                    </div>
                    <div>
                      <div className="font-semibold text-red-700 text-sm">
                        Simple European Options
                      </div>
                      <p className="text-red-600 text-xs">
                        Standard calls/puts where Black-Scholes provides instant
                        accurate results
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">4</span>
                    </div>
                    <div>
                      <div className="font-semibold text-red-700 text-sm">
                        Extreme Accuracy Requirements
                      </div>
                      <p className="text-red-600 text-xs">
                        When need 6+ decimal place precision and willing to use
                        Monte Carlo methods
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">5</span>
                    </div>
                    <div>
                      <div className="font-semibold text-red-700 text-sm">
                        Volatility Surface Modeling
                      </div>
                      <p className="text-red-600 text-xs">
                        Complex volatility patterns requiring local volatility
                        or stochastic volatility models
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Model Enhancement Opportunities */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200 p-6 rounded-xl">
            <h4 className="font-bold text-indigo-800 text-xl mb-6">
              Enhancement Opportunities & Advanced Techniques
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-indigo-200">
                  <h5 className="font-semibold text-indigo-700 mb-3">
                    🚀 Performance Optimizations
                  </h5>
                  <div className="space-y-2 text-sm">
                    <div className="bg-indigo-50 p-2 rounded">
                      <strong className="text-indigo-700">
                        Vectorization:
                      </strong>
                      <span className="text-indigo-600 text-xs ml-1">
                        Use NumPy arrays instead of Python loops for 10-100x
                        speedup
                      </span>
                    </div>
                    <div className="bg-indigo-50 p-2 rounded">
                      <strong className="text-indigo-700">
                        Memory Efficiency:
                      </strong>
                      <span className="text-indigo-600 text-xs ml-1">
                        Rolling arrays reduce memory from O(N²) to O(N)
                      </span>
                    </div>
                    <div className="bg-indigo-50 p-2 rounded">
                      <strong className="text-indigo-700">
                        Richardson Extrapolation:
                      </strong>
                      <span className="text-indigo-600 text-xs ml-1">
                        Combine N and 2N results for higher-order accuracy
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-indigo-200">
                  <h5 className="font-semibold text-indigo-700 mb-3">
                    🎛️ Advanced Features
                  </h5>
                  <div className="space-y-2 text-sm">
                    <div className="bg-indigo-50 p-2 rounded">
                      <strong className="text-indigo-700">
                        Trinomial Trees:
                      </strong>
                      <span className="text-indigo-600 text-xs ml-1">
                        Add middle branch for better convergence properties
                      </span>
                    </div>
                    <div className="bg-indigo-50 p-2 rounded">
                      <strong className="text-indigo-700">
                        Time-Varying Parameters:
                      </strong>
                      <span className="text-indigo-600 text-xs ml-1">
                        Different σ and r at each time step
                      </span>
                    </div>
                    <div className="bg-indigo-50 p-2 rounded">
                      <strong className="text-indigo-700">
                        Barrier Options:
                      </strong>
                      <span className="text-indigo-600 text-xs ml-1">
                        Check knockout/knockin conditions at each node
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-indigo-200">
                  <h5 className="font-semibold text-indigo-700 mb-3">
                    🛠️ Practical Adjustments
                  </h5>
                  <div className="space-y-2 text-sm">
                    <div className="bg-indigo-50 p-2 rounded">
                      <strong className="text-indigo-700">
                        Implied Volatility:
                      </strong>
                      <span className="text-indigo-600 text-xs ml-1">
                        Use market-derived vol instead of historical estimates
                      </span>
                    </div>
                    <div className="bg-indigo-50 p-2 rounded">
                      <strong className="text-indigo-700">
                        Discrete Dividends:
                      </strong>
                      <span className="text-indigo-600 text-xs ml-1">
                        Adjust stock price tree at known dividend dates
                      </span>
                    </div>
                    <div className="bg-indigo-50 p-2 rounded">
                      <strong className="text-indigo-700">
                        Transaction Costs:
                      </strong>
                      <span className="text-indigo-600 text-xs ml-1">
                        Widen bid-ask spreads or adjust volatility upward
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-indigo-200">
                  <h5 className="font-semibold text-indigo-700 mb-3">
                    📊 Validation Techniques
                  </h5>
                  <div className="space-y-2 text-sm">
                    <div className="bg-indigo-50 p-2 rounded">
                      <strong className="text-indigo-700">
                        European Cross-Check:
                      </strong>
                      <span className="text-indigo-600 text-xs ml-1">
                        Compare with Black-Scholes for European options
                      </span>
                    </div>
                    <div className="bg-indigo-50 p-2 rounded">
                      <strong className="text-indigo-700">
                        Convergence Testing:
                      </strong>
                      <span className="text-indigo-600 text-xs ml-1">
                        Plot price vs N to verify stabilization
                      </span>
                    </div>
                    <div className="bg-indigo-50 p-2 rounded">
                      <strong className="text-indigo-700">
                        Greeks Stability:
                      </strong>
                      <span className="text-indigo-600 text-xs ml-1">
                        Ensure delta and gamma don't oscillate wildly
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Final Practical Advice */}
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-200 p-6 rounded-xl">
            <h4 className="font-bold text-emerald-800 text-xl mb-4">
              Bottom Line: When and How to Use Binomial Trees Effectively
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg border border-emerald-200">
                <h5 className="font-semibold text-emerald-700 mb-3">
                  ✅ Binomial's Sweet Spot
                </h5>
                <ul className="text-emerald-600 text-sm space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>
                      <strong>American Options:</strong> The only practical
                      choice for most equity options with early exercise
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>
                      <strong>Educational Tool:</strong> Unmatched for building
                      intuition about option behavior
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>
                      <strong>Custom Features:</strong> Easy to modify for
                      special payoffs or market conditions
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>
                      <strong>Model Development:</strong> Perfect for
                      prototyping new pricing approaches
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg border border-emerald-200">
                <h5 className="font-semibold text-emerald-700 mb-3">
                  ⚡ Optimization Guidelines
                </h5>
                <ul className="text-emerald-600 text-sm space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>
                      <strong>Start Small:</strong> Begin with N=50-100 to test
                      logic, then increase for production
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>
                      <strong>Test Convergence:</strong> Check if N=200 vs N=400
                      gives acceptable differences before going higher
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>
                      <strong>Memory Management:</strong> Use rolling arrays for
                      production systems to avoid memory issues
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>
                      <strong>Validate Results:</strong> Always cross-check
                      European options against Black-Scholes
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-emerald-50 p-4 rounded-lg border border-emerald-200">
              <h5 className="font-semibold text-emerald-700 mb-2">
                The Strategic Decision Framework
              </h5>
              <p className="text-emerald-600 text-sm mb-3">
                Choose binomial trees when you need the flexibility they provide
                and can afford the computational cost. They're not the fastest
                or most accurate method in all cases, but they're often the most
                practical choice for American options and complex scenarios. The
                key is understanding the trade-offs and optimizing appropriately
                for your specific use case.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-xs">
                <div className="bg-white p-3 rounded border">
                  <div className="font-semibold text-emerald-700 mb-1">
                    For Trading:
                  </div>
                  <div className="text-emerald-600">
                    N=100-300 provides good balance of speed and accuracy for
                    real-time pricing
                  </div>
                </div>
                <div className="bg-white p-3 rounded border">
                  <div className="font-semibold text-emerald-700 mb-1">
                    For Research:
                  </div>
                  <div className="text-emerald-600">
                    N=500-2000 gives high precision for model validation and
                    academic work
                  </div>
                </div>
                <div className="bg-white p-3 rounded border">
                  <div className="font-semibold text-emerald-700 mb-1">
                    For Learning:
                  </div>
                  <div className="text-emerald-600">
                    N=5-20 shows clear tree structure and builds intuitive
                    understanding
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    applications: {
      title: "Practical Applications",
      content: (
        <div className="space-y-8">
          <div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Binomial trees transform from academic concept to practical
              trading tool through their unique ability to handle American
              exercise and complex market features. Understanding how to
              implement the model effectively—and when to choose it over
              alternatives—separates successful options traders from those who
              rely on purely theoretical calculations.
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
                    From Educational Tool to Trading Floor
                  </h4>
                  <p>
                    Professional traders don't use binomial trees in isolation.
                    They combine them with market intuition, real-time parameter
                    adjustments, and sophisticated risk management to create
                    profitable strategies. The model provides essential American
                    option capability while maintaining computational
                    practicality.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Software & Tools */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 p-6 rounded-xl">
            <h4 className="font-bold text-blue-800 text-xl mb-6 text-center">
              Software & Tools That Use Binomial Trees
            </h4>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-lg border border-blue-200">
                <h5 className="font-bold text-blue-700 mb-4 text-center">
                  🏛️ Professional Platforms
                </h5>
                <div className="space-y-3">
                  <div className="bg-blue-50 p-3 rounded">
                    <div className="font-semibold text-blue-700 text-sm mb-1">
                      Bloomberg Terminal (OVDV)
                    </div>
                    <p className="text-blue-600 text-xs">
                      American option pricing with customizable tree parameters
                      and dividend handling
                    </p>
                  </div>

                  <div className="bg-blue-50 p-3 rounded">
                    <div className="font-semibold text-blue-700 text-sm mb-1">
                      FactSet Options Analytics
                    </div>
                    <p className="text-blue-600 text-xs">
                      Multi-model comparison including binomial trees for
                      portfolio analysis
                    </p>
                  </div>

                  <div className="bg-blue-50 p-3 rounded">
                    <div className="font-semibold text-blue-700 text-sm mb-1">
                      Murex Risk Management
                    </div>
                    <p className="text-blue-600 text-xs">
                      Enterprise-grade binomial implementation for derivatives
                      books
                    </p>
                  </div>

                  <div className="bg-gray-50 p-3 rounded text-xs">
                    <div className="font-semibold text-gray-700 mb-1">
                      Key Features:
                    </div>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Variable step sizing</li>
                      <li>• Dividend adjustment tools</li>
                      <li>• Early exercise analysis</li>
                      <li>• Convergence diagnostics</li>
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
                      Built-in binomial calculator for American option analysis
                    </p>
                  </div>

                  <div className="bg-green-50 p-3 rounded">
                    <div className="font-semibold text-green-700 text-sm mb-1">
                      TD Ameritrade thinkorswim
                    </div>
                    <p className="text-green-600 text-xs">
                      Educational binomial trees with visual step-through
                      capability
                    </p>
                  </div>

                  <div className="bg-green-50 p-3 rounded">
                    <div className="font-semibold text-green-700 text-sm mb-1">
                      Charles Schwab StreetSmart
                    </div>
                    <p className="text-green-600 text-xs">
                      Simplified binomial pricing for retail options strategies
                    </p>
                  </div>

                  <div className="bg-gray-50 p-3 rounded text-xs">
                    <div className="font-semibold text-gray-700 mb-1">
                      Typical Features:
                    </div>
                    <ul className="text-gray-600 space-y-1">
                      <li>• American vs European comparison</li>
                      <li>• Early exercise boundaries</li>
                      <li>• Sensitivity analysis</li>
                      <li>• Educational tree visualization</li>
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
                      Professional binomial tree implementation with American
                      exercise
                    </p>
                  </div>

                  <div className="bg-purple-50 p-3 rounded">
                    <div className="font-semibold text-purple-700 text-sm mb-1">
                      R: RQuantLib & fOptions
                    </div>
                    <p className="text-purple-600 text-xs">
                      Statistical analysis with customizable tree parameters
                    </p>
                  </div>

                  <div className="bg-purple-50 p-3 rounded">
                    <div className="font-semibold text-purple-700 text-sm mb-1">
                      MATLAB Financial Toolbox
                    </div>
                    <p className="text-purple-600 text-xs">
                      Built-in binprice() function for American options
                    </p>
                  </div>

                  <div className="bg-gray-50 p-3 rounded text-xs">
                    <div className="font-semibold text-gray-700 mb-1">
                      Use Cases:
                    </div>
                    <ul className="text-gray-600 space-y-1">
                      <li>• American option backtesting</li>
                      <li>• Model comparison studies</li>
                      <li>• Custom payoff structures</li>
                      <li>• Academic research</li>
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
                  🚀 Getting Started: Your First Binomial Implementation
                </h5>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-green-50 p-3 rounded">
                      <div className="font-semibold text-green-700 text-sm mb-2">
                        Step 1: Parameter Setup
                      </div>
                      <ul className="text-green-600 text-xs space-y-1">
                        <li>
                          • Choose number of steps: N = 100 for production
                        </li>
                        <li>• Calculate Δt = T/N (time per step in years)</li>
                        <li>• Compute up factor: u = e^(σ√Δt)</li>
                        <li>• Compute down factor: d = 1/u</li>
                        <li>
                          • Calculate risk-neutral probability: p = (e^(rΔt) -
                          d)/(u - d)
                        </li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-3 rounded">
                      <div className="font-semibold text-green-700 text-sm mb-2">
                        Step 2: Build Stock Price Tree
                      </div>
                      <div className="text-green-600 text-xs space-y-1">
                        <div>• Start with S₀ at period 0</div>
                        <div>
                          • For each period i, node j: S[i][j] = S₀ × u^(i-j) ×
                          d^j
                        </div>
                        <div>
                          • Verify recombining property: up then down equals
                          down then up
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-green-50 p-3 rounded">
                      <div className="font-semibold text-green-700 text-sm mb-2">
                        Step 3: Calculate Option Values
                      </div>
                      <ul className="text-green-600 text-xs space-y-1">
                        <li>
                          • At expiration (period N): intrinsic value only
                        </li>
                        <li>
                          • Work backward through tree using: V = e^(-rΔt) × [p
                          × V_up + (1-p) × V_down]
                        </li>
                        <li>
                          • For American options: max(intrinsic, continuation)
                          at each node
                        </li>
                        <li>• Result at S₀ node is option's fair value</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-3 rounded">
                      <div className="font-semibold text-green-700 text-sm mb-2">
                        Step 4: Validation & Greeks
                      </div>
                      <ul className="text-green-600 text-xs space-y-1">
                        <li>
                          • Cross-check European options with Black-Scholes
                        </li>
                        <li>
                          • Calculate delta: (V_up - V_down) / (S_up - S_down)
                        </li>
                        <li>• Test convergence by doubling N</li>
                        <li>• Document early exercise boundaries</li>
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
              Binomial vs Other Pricing Methods: Practical Comparison
            </h4>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
                <thead className="bg-gradient-to-r from-purple-100 to-violet-100">
                  <tr>
                    <th className="border border-gray-300 p-4 text-left font-bold text-gray-800">
                      Method
                    </th>
                    <th className="border border-gray-300 p-4 text-center font-bold text-blue-600">
                      American Options
                    </th>
                    <th className="border border-gray-300 p-4 text-center font-bold text-green-600">
                      Implementation
                    </th>
                    <th className="border border-gray-300 p-4 text-center font-bold text-orange-600">
                      Speed
                    </th>
                    <th className="border border-gray-300 p-4 text-center font-bold text-purple-600">
                      Best Use Case
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50 bg-purple-25">
                    <td className="border border-gray-300 p-4 font-semibold">
                      Binomial Tree
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-semibold">
                        Native
                      </span>
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-semibold">
                        Simple
                      </span>
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm font-semibold">
                        Medium
                      </span>
                    </td>
                    <td className="border border-gray-300 p-4 text-center text-sm">
                      American equity options
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-4 font-semibold">
                      Black-Scholes
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-semibold">
                        None
                      </span>
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-semibold">
                        Trivial
                      </span>
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-semibold">
                        Instant
                      </span>
                    </td>
                    <td className="border border-gray-300 p-4 text-center text-sm">
                      European index options
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-gray-25">
                    <td className="border border-gray-300 p-4 font-semibold">
                      Monte Carlo
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm font-semibold">
                        Complex
                      </span>
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-semibold">
                        Advanced
                      </span>
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-semibold">
                        Slow
                      </span>
                    </td>
                    <td className="border border-gray-300 p-4 text-center text-sm">
                      Exotic/path-dependent
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-4 font-semibold">
                      Finite Difference
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-semibold">
                        Good
                      </span>
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-semibold">
                        Complex
                      </span>
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm font-semibold">
                        Medium
                      </span>
                    </td>
                    <td className="border border-gray-300 p-4 text-center text-sm">
                      Multi-factor models
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h5 className="font-semibold text-purple-700 mb-2">
                Binomial's Unique Position
              </h5>
              <p className="text-purple-600 text-sm">
                Binomial trees occupy the crucial middle ground in options
                pricing: sophisticated enough to handle American exercise
                features that Black-Scholes cannot address, yet simple enough to
                implement and understand without the complexity of Monte Carlo
                or finite difference methods. This makes them the practical
                choice for most equity options work.
              </p>
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
                    📈 American Option Analysis
                  </h5>
                  <div className="space-y-3 text-sm">
                    <div className="bg-amber-50 p-3 rounded">
                      <div className="font-semibold text-amber-700 mb-2">
                        Scenario: Dividend-Paying Stock
                      </div>
                      <ul className="text-amber-600 text-xs space-y-1">
                        <li>
                          • Stock: $50, Strike: $45, 60 days to expiration
                        </li>
                        <li>• Ex-dividend date in 30 days: $2.00 dividend</li>
                        <li>• American put shows early exercise value</li>
                        <li>
                          • Binomial tree identifies optimal exercise timing
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-3 rounded">
                      <div className="font-semibold text-gray-700 mb-1">
                        Key Insight:
                      </div>
                      <p className="text-gray-600 text-xs">
                        Binomial model reveals that American put should be
                        exercised early if stock price drops below $42 before
                        ex-dividend date, capturing time value before dividend
                        impact
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-lg border border-amber-200">
                  <h5 className="font-bold text-amber-700 mb-3">
                    🎯 Earnings Strategy Optimization
                  </h5>
                  <div className="space-y-3 text-sm">
                    <div className="bg-amber-50 p-3 rounded">
                      <div className="font-semibold text-amber-700 mb-2">
                        Application:
                      </div>
                      <ul className="text-amber-600 text-xs space-y-1">
                        <li>• Compare American vs European option values</li>
                        <li>• Model early exercise around earnings dates</li>
                        <li>
                          • Optimize strike selection for max early exercise
                          premium
                        </li>
                        <li>• Time entry/exit around key corporate events</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-3 rounded">
                      <div className="font-semibold text-gray-700 mb-1">
                        Implementation:
                      </div>
                      <p className="text-gray-600 text-xs">
                        Use binomial trees to identify ITM calls that should be
                        exercised before ex-dividend dates and puts that benefit
                        from early exercise in declining markets
                      </p>
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
                        Scenario: Equity Portfolio Protection
                      </div>
                      <ul className="text-amber-600 text-xs space-y-1">
                        <li>• $5M portfolio needs downside protection</li>
                        <li>• Consider American vs European puts</li>
                        <li>
                          • Model optimal hedge ratios using binomial delta
                        </li>
                        <li>• Factor in early exercise flexibility value</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-3 rounded">
                      <div className="font-semibold text-gray-700 mb-1">
                        Value Analysis:
                      </div>
                      <p className="text-gray-600 text-xs">
                        American puts worth 5-15% more than European equivalents
                        for same strikes, providing better protection per dollar
                        spent on premium
                      </p>
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
                        <li>• Calculate American option Greeks using trees</li>
                        <li>• Monitor early exercise boundaries</li>
                        <li>
                          • Stress test with different volatility scenarios
                        </li>
                        <li>
                          • Update hedge ratios based on tree calculations
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-3 rounded">
                      <div className="font-semibold text-gray-700 mb-1">
                        Key Metrics:
                      </div>
                      <ul className="text-gray-600 text-xs space-y-1">
                        <li>• Delta exposure from American features</li>
                        <li>• Early exercise probability curves</li>
                        <li>• Dividend-adjusted sensitivities</li>
                        <li>• Model validation against market prices</li>
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
                      <strong>Step Count:</strong> Use N=100-300 for production
                      systems, test convergence
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      <strong>Volatility Input:</strong> Use implied volatility
                      from liquid ATM options
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      <strong>Dividend Modeling:</strong> Incorporate exact
                      ex-dividend dates and amounts
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      <strong>Validation:</strong> Cross-check European options
                      with Black-Scholes
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg border border-cyan-200">
                <h5 className="font-semibold text-cyan-700 mb-3 text-center">
                  ⚡ Performance Optimization
                </h5>
                <ul className="text-cyan-600 text-sm space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      <strong>Memory Management:</strong> Use rolling arrays for
                      large step counts
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      <strong>Vectorization:</strong> Implement with NumPy for
                      10x+ speed improvement
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      <strong>Caching:</strong> Store tree calculations for
                      Greek computation
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      <strong>Parallel Processing:</strong> Calculate multiple
                      options simultaneously
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg border border-cyan-200">
                <h5 className="font-semibold text-cyan-700 mb-3 text-center">
                  🔧 Quality Control
                </h5>
                <ul className="text-cyan-600 text-sm space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      <strong>Parameter Bounds:</strong> Ensure 0 {"<"} p {"<"}{" "}
                      1 and reasonable u, d values
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      <strong>Convergence Testing:</strong> Plot option value vs
                      N to verify stabilization
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      <strong>Greeks Validation:</strong> Check that delta is
                      between 0-1 for calls
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      <strong>Market Comparison:</strong> Monitor differences
                      from observed market prices
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      <strong>Documentation:</strong> Record all parameter
                      choices and assumptions
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
                        AI algorithms optimize step counts and parameter
                        selection automatically based on market conditions and
                        accuracy requirements
                      </p>
                    </div>

                    <div className="bg-indigo-50 p-3 rounded">
                      <div className="font-semibold text-indigo-700 mb-1">
                        GPU Acceleration
                      </div>
                      <p className="text-indigo-600 text-xs">
                        Parallel processing enables real-time calculation of
                        thousands of American options simultaneously for
                        portfolio analysis
                      </p>
                    </div>

                    <div className="bg-indigo-50 p-3 rounded">
                      <div className="font-semibold text-indigo-700 mb-1">
                        Cloud Computing
                      </div>
                      <p className="text-indigo-600 text-xs">
                        Distributed binomial calculations across cloud
                        infrastructure for enterprise-scale risk management
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-indigo-200">
                  <h5 className="font-semibold text-indigo-700 mb-3">
                    🌐 New Applications
                  </h5>
                  <div className="space-y-2 text-sm">
                    <div className="bg-indigo-50 p-3 rounded">
                      <div className="font-semibold text-indigo-700 mb-1">
                        Cryptocurrency Options
                      </div>
                      <p className="text-indigo-600 text-xs">
                        24/7 trading environments where American exercise
                        features become more valuable due to continuous
                        opportunity
                      </p>
                    </div>

                    <div className="bg-indigo-50 p-3 rounded">
                      <div className="font-semibold text-indigo-700 mb-1">
                        ESG Derivatives
                      </div>
                      <p className="text-indigo-600 text-xs">
                        Environmental credit options and sustainability-linked
                        derivatives requiring custom payoff structures
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-indigo-200">
                  <h5 className="font-semibold text-indigo-700 mb-3">
                    📈 Educational Evolution
                  </h5>
                  <div className="space-y-2 text-sm">
                    <div className="bg-indigo-50 p-3 rounded">
                      <div className="font-semibold text-indigo-700 mb-1">
                        Interactive Visualization
                      </div>
                      <p className="text-indigo-600 text-xs">
                        3D tree visualizations and virtual reality environments
                        make complex option behavior more intuitive for students
                      </p>
                    </div>

                    <div className="bg-indigo-50 p-3 rounded">
                      <div className="font-semibold text-indigo-700 mb-1">
                        Gamification
                      </div>
                      <p className="text-indigo-600 text-xs">
                        Trading simulations using binomial models help retail
                        investors understand American option behavior
                      </p>
                    </div>

                    <div className="bg-indigo-50 p-3 rounded">
                      <div className="font-semibold text-indigo-700 mb-1">
                        Regulatory Applications
                      </div>
                      <p className="text-indigo-600 text-xs">
                        Stress testing frameworks mandated by regulators
                        increasingly rely on binomial methods for American
                        option portfolios
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
                        Quantum Enhancement
                      </div>
                      <p className="text-indigo-600 text-xs">
                        Quantum computing may enable massive binomial trees with
                        millions of steps for unprecedented accuracy
                      </p>
                    </div>

                    <div className="bg-indigo-50 p-3 rounded">
                      <div className="font-semibold text-indigo-700 mb-1">
                        Real-Time Adaptation
                      </div>
                      <p className="text-indigo-600 text-xs">
                        Dynamic step adjustment based on market volatility and
                        time decay for optimal accuracy-speed balance
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
                  ✅ When Binomial Trees Excel
                </h5>
                <ul className="text-emerald-600 text-sm space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>
                      <strong>American Options:</strong> The only practical
                      method for most equity options trading
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>
                      <strong>Dividend Situations:</strong> Superior handling of
                      discrete dividend payments and ex-dates
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>
                      <strong>Custom Payoffs:</strong> Easy modification for
                      non-standard option structures
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>
                      <strong>Educational Use:</strong> Unmatched for building
                      deep understanding of option mechanics
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg border border-emerald-200">
                <h5 className="font-semibold text-emerald-700 mb-3">
                  ⚡ Implementation Success Factors
                </h5>
                <ul className="text-emerald-600 text-sm space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>
                      <strong>Right-Size Steps:</strong> N=100-300 balances
                      accuracy with computational speed
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>
                      <strong>Validate Results:</strong> Always cross-check
                      European options with Black-Scholes
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>
                      <strong>Monitor Convergence:</strong> Test different step
                      counts to ensure stable results
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>
                      <strong>Document Assumptions:</strong> Track parameter
                      choices for consistency and debugging
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
                Binomial trees remain indispensable for American options
                analysis despite being slower than Black-Scholes. Their
                intuitive structure and natural handling of early exercise make
                them the practical choice for equity options trading, portfolio
                hedging, and risk management. Modern implementations with
                optimized algorithms and parallel processing have largely
                addressed speed concerns, making binomial trees faster and more
                accessible than ever before.
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
              <span className="text-gray-700">Binomial Model</span>
            </nav>

            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  Binomial Model
                </h1>
                <p className="text-xl text-gray-600">
                  Intuitive tree-based approach to option pricing with American
                  exercise
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
                <span>40 min read</span>
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
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white p-6 rounded-xl mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2 pr-4">
                  Explore Binomial Trees with OptiPrice
                </h3>
                <p className="text-emerald-100">
                  Build interactive binomial trees step-by-step and see how
                  American options differ from European.
                </p>
                <p className="text-emerald-100 pr-4">
                  Visualize convergence to Black-Scholes as you increase time
                  steps.
                </p>
              </div>
              <button
                onClick={() => navigate("/toolbox/optiprice")}
                className="!bg-white !text-emerald-600 px-6 py-3 !rounded-lg !font-semibold !hover:bg-emerald-50 !transition-colors flex-shrink-0"
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
              onClick={() => navigate("/learning/options/black-scholes")}
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
              <span>Back: Black-Scholes Model</span>
            </button>

            <button
              onClick={() => navigate("/learning/options/monte-carlo")}
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <span>Next: Monte Carlo Model</span>
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

export default BinomialOptions;
