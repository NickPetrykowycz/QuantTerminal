import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import { useAuth } from "../contexts/AuthContext";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const MonteCarloOptions = () => {
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
              <strong>The Monte Carlo method</strong> revolutionized option
              pricing by using simulation to model thousands of possible stock
              price paths. Originally developed by mathematicians working on
              nuclear weapons in the 1940s, it was adapted for financial
              derivatives in the 1970s and now provides the most flexible
              framework for pricing complex options and exotic derivatives.
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
                  <h4 className="font-bold mb-2">The Simulation Insight</h4>
                  <p>
                    Monte Carlo works by generating thousands of random stock
                    price paths, calculating the option payoff for each path,
                    then averaging all payoffs and discounting back to present
                    value. This "brute force" approach can handle any payoff
                    structure or market complexity that can be programmed.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What It Does */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 p-6 rounded-xl">
            <h4 className="font-bold text-blue-800 text-xl mb-6 flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm">🎲</span>
              </div>
              What the Monte Carlo Method Does
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold text-blue-700">
                        Random Path Generation
                      </div>
                      <p className="text-blue-600 text-sm">
                        Simulates thousands of possible stock price paths using
                        random number generation and stochastic differential
                        equations
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold text-blue-700">
                        Complex Payoff Handling
                      </div>
                      <p className="text-blue-600 text-sm">
                        Calculates option values for any payoff structure, from
                        simple calls to exotic path-dependent derivatives like
                        Asian or barrier options
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
                        Statistical Convergence
                      </div>
                      <p className="text-blue-600 text-sm">
                        Achieves accuracy through the law of large numbers—more
                        simulations yield more precise option values
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold text-blue-700">
                        Market Reality Modeling
                      </div>
                      <p className="text-blue-600 text-sm">
                        Incorporates realistic market features like jumps,
                        stochastic volatility, and time-varying parameters
                        easily
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Approach: Simulation vs Analytical */}
          <div className="bg-gradient-to-r from-purple-50 to-violet-50 border-2 border-purple-200 p-6 rounded-xl">
            <h4 className="font-bold text-purple-800 text-xl mb-6 text-center">
              Modeling Approach: Simulation-Based Framework
            </h4>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-lg border border-purple-200">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white">🎯</span>
                  </div>
                  <h5 className="font-bold text-purple-700">Random Sampling</h5>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    <span className="text-purple-600">
                      Generate random numbers from distributions
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    <span className="text-purple-600">
                      Create thousands of price scenarios
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    <span className="text-purple-600">
                      Each path is equally probable
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
                      Black-Scholes: Closed-form solution
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                    <span className="text-amber-600">
                      Binomial: Discrete tree structure
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                    <span className="text-amber-600">
                      Monte Carlo: Statistical approximation
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
                      Unlimited flexibility
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span className="text-green-600">
                      Handles any complexity
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span className="text-green-600">
                      Scales to exotic derivatives
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-white p-5 rounded-lg border border-purple-200">
              <h5 className="font-bold text-purple-700 mb-3 text-center">
                The Core Simulation Logic
              </h5>
              <div className="grid md:grid-cols-4 gap-4 mb-4">
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">🎲</div>
                  <div className="font-semibold text-purple-700">
                    Generate Random Numbers
                  </div>
                  <div className="text-purple-600 text-sm">
                    Sample from normal distribution
                  </div>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">📈</div>
                  <div className="font-semibold text-purple-700">
                    Simulate Price Path
                  </div>
                  <div className="text-purple-600 text-sm">
                    Use stochastic process model
                  </div>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">💰</div>
                  <div className="font-semibold text-purple-700">
                    Calculate Payoff
                  </div>
                  <div className="text-purple-600 text-sm">
                    Apply option payoff function
                  </div>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">📊</div>
                  <div className="font-semibold text-purple-700">
                    Average Results
                  </div>
                  <div className="text-purple-600 text-sm">
                    Discount back to present value
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
                      The law of large numbers guarantees that as the number of
                      simulations increases, the average of the simulated
                      payoffs converges to the true expected value. This makes
                      Monte Carlo both mathematically rigorous and practically
                      flexible for any derivative structure you can program.
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
                      The Origins (1940s)
                    </h5>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-start space-x-2">
                        <span className="text-blue-500 mt-1">⚛️</span>
                        <span>
                          Developed for nuclear weapon design at Los Alamos
                        </span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-blue-500 mt-1">🎰</span>
                        <span>
                          Named after Monte Carlo casino (random sampling)
                        </span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-blue-500 mt-1">🖥️</span>
                        <span>
                          Required early computers for complex calculations
                        </span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-blue-500 mt-1">📊</span>
                        <span>
                          Solved problems too complex for analytical methods
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-bold text-gray-700 mb-3">
                      Financial Adaptation (1970s-1980s)
                    </h5>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-start space-x-2">
                        <span className="text-green-500 mt-1">✅</span>
                        <span>
                          Applied to option pricing for complex derivatives
                        </span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-green-500 mt-1">✅</span>
                        <span>Enabled pricing of path-dependent options</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-green-500 mt-1">✅</span>
                        <span>
                          Handled multi-dimensional problems naturally
                        </span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-green-500 mt-1">✅</span>
                        <span>
                          Became standard for exotic derivatives trading
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-4 rounded-lg border border-blue-200">
                  <div className="font-semibold text-blue-700 mb-2">
                    📅 1940s
                  </div>
                  <div className="text-blue-600 text-sm">
                    <strong>Manhattan Project</strong>
                    <br />
                    Stanislaw Ulam and John von Neumann develop the method
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-4 rounded-lg border border-purple-200">
                  <div className="font-semibold text-purple-700 mb-2">
                    🏦 1970s
                  </div>
                  <div className="text-purple-600 text-sm">
                    <strong>Finance Adoption</strong>
                    <br />
                    First applications to option pricing and risk management
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-100 to-green-50 p-4 rounded-lg border border-green-200">
                  <div className="font-semibold text-green-700 mb-2">
                    💻 1990s
                  </div>
                  <div className="text-purple-600 text-sm">
                    <strong>Computing Power</strong>
                    <br />
                    Personal computers make Monte Carlo practical for trading
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-100 to-orange-50 p-4 rounded-lg border border-orange-200">
                  <div className="font-semibold text-orange-700 mb-2">
                    🚀 Today
                  </div>
                  <div className="text-orange-600 text-sm">
                    <strong>GPU Acceleration</strong>
                    <br />
                    Parallel processing enables millions of simulations per
                    second
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why It Exists */}
          <div className="bg-gradient-to-r from-cyan-50 to-teal-50 border-2 border-cyan-200 p-6 rounded-xl">
            <h4 className="font-bold text-cyan-800 text-xl mb-6 text-center">
              Why the Monte Carlo Method Exists
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg border border-cyan-200">
                <h5 className="font-bold text-cyan-700 mb-4 flex items-center">
                  <span className="mr-2">🧩</span>
                  Complex Problem Solving
                </h5>
                <div className="space-y-3 text-sm">
                  <div className="bg-cyan-50 p-3 rounded">
                    <div className="font-semibold text-cyan-700 mb-1">
                      Path-Dependent Options
                    </div>
                    <div className="text-cyan-600">
                      Asian options, lookback options, and barrier options
                      require tracking the entire price path, not just the final
                      price
                    </div>
                  </div>
                  <div className="bg-cyan-50 p-3 rounded">
                    <div className="font-semibold text-cyan-700 mb-1">
                      Multi-Asset Derivatives
                    </div>
                    <div className="text-cyan-600">
                      Basket options, rainbow options, and correlation-dependent
                      products need high-dimensional modeling
                    </div>
                  </div>
                  <div className="bg-cyan-50 p-3 rounded">
                    <div className="font-semibold text-cyan-700 mb-1">
                      Non-Standard Features
                    </div>
                    <div className="text-cyan-600">
                      Jump processes, stochastic volatility, and
                      regime-switching models can't be solved analytically
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-cyan-200">
                <h5 className="font-bold text-cyan-700 mb-4 flex items-center">
                  <span className="mr-2">🔬</span>
                  Market Reality Modeling
                </h5>
                <div className="space-y-3 text-sm">
                  <div className="bg-cyan-50 p-3 rounded">
                    <div className="font-semibold text-cyan-700 mb-1">
                      Real Market Behavior
                    </div>
                    <div className="text-cyan-600">
                      Incorporate empirically observed features like volatility
                      clustering, fat tails, and market microstructure effects
                    </div>
                  </div>
                  <div className="bg-cyan-50 p-3 rounded">
                    <div className="font-semibold text-cyan-700 mb-1">
                      Regulatory Requirements
                    </div>
                    <div className="text-cyan-600">
                      Stress testing and scenario analysis for risk management
                      often require Monte Carlo simulation
                    </div>
                  </div>
                  <div className="bg-cyan-50 p-3 rounded">
                    <div className="font-semibold text-cyan-700 mb-1">
                      Model Validation
                    </div>
                    <div className="text-cyan-600">
                      Cross-check analytical models and provide confidence
                      intervals for pricing estimates
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-cyan-50 p-4 rounded-lg border border-cyan-200">
              <h6 className="font-semibold text-cyan-700 mb-2">
                The Universal Problem Solver
              </h6>
              <p className="text-cyan-600 text-sm">
                Monte Carlo exists because many financial problems simply cannot
                be solved analytically. When Black-Scholes fails due to complex
                payoffs, when binomial trees become computationally prohibitive,
                and when closed-form solutions don't exist, Monte Carlo provides
                the answer. It's the method of last resort that always
                works—given enough computational power and time. This
                universality has made it indispensable for modern quantitative
                finance, from exotic derivatives trading to regulatory stress
                testing.
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
              The Monte Carlo method operates under flexible assumptions that
              can be easily modified for different market conditions. Unlike
              analytical models with rigid mathematical constraints, Monte
              Carlo's simulation-based framework allows for realistic modeling
              of market complexities while maintaining theoretical rigor through
              statistical convergence.
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
                    Adaptive Assumption Framework
                  </h4>
                  <p>
                    Monte Carlo's greatest strength lies in its ability to
                    modify assumptions on-the-fly. Unlike closed-form solutions,
                    you can easily incorporate jumps, changing volatility,
                    complex dividends, and non-standard features by simply
                    adjusting the simulation code. This flexibility makes it
                    ideal for real-world applications where market assumptions
                    rarely hold perfectly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Assumptions */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200 p-6 rounded-xl">
            <h4 className="font-bold text-indigo-800 text-xl mb-6 text-center">
              Flexible Core Assumptions
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
                        Stochastic Process Model
                      </h5>
                      <p className="text-indigo-600 text-sm mb-2">
                        Stock prices follow a chosen stochastic process (usually
                        geometric Brownian motion as baseline)
                      </p>
                      <div className="bg-indigo-50 p-2 rounded text-xs">
                        <strong>Flexibility:</strong> Can easily switch to
                        jump-diffusion, stochastic volatility, or other
                        processes
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
                        Risk-Neutral Valuation
                      </h5>
                      <p className="text-indigo-600 text-sm mb-2">
                        Options are valued using risk-neutral probabilities and
                        discounted at the risk-free rate
                      </p>
                      <div className="bg-indigo-50 p-2 rounded text-xs">
                        <strong>Foundation:</strong> Same theoretical basis as
                        Black-Scholes and binomial models
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-lg border border-purple-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h5 className="font-bold text-purple-700 mb-2">
                        Sufficient Sample Size
                      </h5>
                      <p className="text-purple-600 text-sm mb-2">
                        Large number of simulations ensures convergence to true
                        expected value
                      </p>
                      <div className="bg-purple-50 p-2 rounded text-xs">
                        <strong>Trade-off:</strong> More samples = higher
                        accuracy but longer computation time
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-lg border border-purple-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h5 className="font-bold text-purple-700 mb-2">
                        Quality Random Number Generation
                      </h5>
                      <p className="text-purple-600 text-sm mb-2">
                        Pseudo-random numbers must be of sufficient quality to
                        avoid bias in results
                      </p>
                      <div className="bg-purple-50 p-2 rounded text-xs">
                        <strong>Implementation:</strong> Use proven generators
                        like Mersenne Twister or Sobol sequences
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-lg border border-purple-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">5</span>
                    </div>
                    <div>
                      <h5 className="font-bold text-purple-700 mb-2">
                        Market Frictionlessness (Optional)
                      </h5>
                      <p className="text-purple-600 text-sm mb-2">
                        Traditional assumption of no transaction costs or
                        liquidity constraints
                      </p>
                      <div className="bg-purple-50 p-2 rounded text-xs">
                        <strong>Reality:</strong> Can be relaxed by
                        incorporating bid-ask spreads in simulation
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <h5 className="font-bold text-gray-700 mb-2">
                    Key Advantage Over Other Models
                  </h5>
                  <p className="text-gray-600 text-sm">
                    Monte Carlo assumptions can be modified individually without
                    requiring new mathematical derivations. This modularity
                    makes it ideal for testing different market scenarios and
                    incorporating empirical observations.
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
                      Current Asset Price (S₀)
                    </div>
                    <p className="text-green-600 text-xs mb-1">
                      Starting point for all simulated price paths
                    </p>
                    <div className="text-gray-600 text-xs">
                      <strong>Source:</strong> Current market price or last
                      traded price
                    </div>
                  </div>

                  <div className="bg-green-50 p-3 rounded">
                    <div className="font-semibold text-green-700 text-sm mb-1">
                      Strike Price (K)
                    </div>
                    <p className="text-green-600 text-xs mb-1">
                      Exercise price for payoff calculation at each simulation
                      endpoint
                    </p>
                    <div className="text-gray-600 text-xs">
                      <strong>Use:</strong> Applied in payoff function for each
                      simulated path
                    </div>
                  </div>

                  <div className="bg-green-50 p-3 rounded">
                    <div className="font-semibold text-green-700 text-sm mb-1">
                      Time to Expiration (T)
                    </div>
                    <p className="text-green-600 text-xs mb-1">
                      Total simulation time horizon in years
                    </p>
                    <div className="text-gray-600 text-xs">
                      <strong>Division:</strong> Split into smaller time steps
                      (Δt) for path generation
                    </div>
                  </div>

                  <div className="bg-green-50 p-3 rounded">
                    <div className="font-semibold text-green-700 text-sm mb-1">
                      Risk-Free Rate (r)
                    </div>
                    <p className="text-green-600 text-xs mb-1">
                      Rate for discounting expected payoffs back to present
                      value
                    </p>
                    <div className="text-gray-600 text-xs">
                      <strong>Application:</strong> Final step after averaging
                      all simulated payoffs
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-green-200">
                <h5 className="font-bold text-green-700 mb-4 text-center">
                  📈 Process Parameters
                </h5>
                <div className="space-y-3">
                  <div className="bg-green-50 p-3 rounded">
                    <div className="font-semibold text-green-700 text-sm mb-1">
                      Volatility (σ)
                    </div>
                    <p className="text-green-600 text-xs mb-1">
                      Annualized volatility for the underlying stochastic
                      process
                    </p>
                    <div className="text-gray-600 text-xs">
                      <strong>Enhancement:</strong> Can be time-varying or
                      stochastic in advanced models
                    </div>
                  </div>

                  <div className="bg-green-50 p-3 rounded">
                    <div className="font-semibold text-green-700 text-sm mb-1">
                      Dividend Yield (q) - Optional
                    </div>
                    <p className="text-green-600 text-xs mb-1">
                      Continuous dividend yield or discrete dividend schedule
                    </p>
                    <div className="text-gray-600 text-xs">
                      <strong>Flexibility:</strong> Can model complex dividend
                      patterns easily
                    </div>
                  </div>

                  <div className="bg-green-50 p-3 rounded">
                    <div className="font-semibold text-green-700 text-sm mb-1">
                      Correlation Matrix (ρ) - Multi-Asset
                    </div>
                    <p className="text-green-600 text-xs mb-1">
                      Correlation structure between multiple underlying assets
                    </p>
                    <div className="text-gray-600 text-xs">
                      <strong>Use Case:</strong> Basket options, rainbow
                      options, spread options
                    </div>
                  </div>

                  <div className="bg-green-50 p-3 rounded">
                    <div className="font-semibold text-green-700 text-sm mb-1">
                      Additional Model Parameters
                    </div>
                    <p className="text-green-600 text-xs mb-1">
                      Jump intensity, mean reversion speed, volatility of
                      volatility
                    </p>
                    <div className="text-gray-600 text-xs">
                      <strong>Advanced:</strong> Depends on chosen stochastic
                      process model
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Simulation Parameters */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 p-6 rounded-xl">
            <h4 className="font-bold text-amber-800 text-xl mb-6">
              Critical Simulation Parameters
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg border border-amber-200">
                <h5 className="font-bold text-amber-700 mb-4">
                  📊 Number of Simulations (N)
                </h5>
                <div className="space-y-3">
                  <div className="bg-amber-50 p-3 rounded">
                    <div className="font-semibold text-amber-700 text-sm mb-2">
                      Accuracy vs Speed Trade-off:
                    </div>
                    <div className="space-y-2 text-xs">
                      <div>
                        <strong>N = 1,000:</strong> Quick estimates, ±5%
                        accuracy
                      </div>
                      <div>
                        <strong>N = 10,000:</strong> Good for most applications,
                        ±1.5% accuracy
                      </div>
                      <div>
                        <strong>N = 100,000:</strong> High precision, ±0.5%
                        accuracy
                      </div>
                      <div>
                        <strong>N = 1,000,000:</strong> Professional grade,
                        ±0.15% accuracy
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-3 rounded text-xs">
                    <div className="font-semibold text-gray-700 mb-1">
                      Convergence Rate:
                    </div>
                    <div className="text-gray-600">
                      Standard error decreases as 1/√N, so 100x more simulations
                      give only 10x better accuracy
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-amber-200">
                <h5 className="font-bold text-amber-700 mb-4">
                  ⏱️ Time Steps (M)
                </h5>
                <div className="space-y-3">
                  <div className="bg-amber-50 p-3 rounded">
                    <div className="font-semibold text-amber-700 text-sm mb-2">
                      Path Discretization:
                    </div>
                    <div className="space-y-2 text-xs">
                      <div>
                        <strong>Daily steps:</strong> M = T × 252 (good for most
                        options)
                      </div>
                      <div>
                        <strong>Weekly steps:</strong> M = T × 52 (faster, less
                        accuracy)
                      </div>
                      <div>
                        <strong>Hourly steps:</strong> Higher frequency for
                        path-dependent options
                      </div>
                      <div>
                        <strong>Adaptive:</strong> Finer steps near barriers or
                        important dates
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-3 rounded text-xs">
                    <div className="font-semibold text-gray-700 mb-1">
                      Choice Guidelines:
                    </div>
                    <div className="text-gray-600">
                      More steps needed for path-dependent options (Asian,
                      barrier) vs European vanilla options
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stochastic Process Models */}
          <div className="bg-gradient-to-r from-purple-50 to-violet-50 border-2 border-purple-200 p-6 rounded-xl">
            <h4 className="font-bold text-purple-800 text-xl mb-6 text-center">
              Common Stochastic Process Models
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h5 className="font-semibold text-purple-700 mb-3">
                    📈 Geometric Brownian Motion (GBM)
                  </h5>
                  <div className="space-y-2 text-sm">
                    <div className="text-center mb-3">
                      <InlineMath math="dS = rS dt + \sigma S dW" />
                    </div>
                    <div className="bg-purple-50 p-2 rounded text-xs">
                      <strong>Pros:</strong> Simple, matches Black-Scholes
                      assumptions, fast simulation
                    </div>
                    <div className="bg-red-50 p-2 rounded text-xs">
                      <strong>Cons:</strong> Constant volatility, no jumps,
                      log-normal distribution only
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h5 className="font-semibold text-purple-700 mb-3">
                    🦘 Jump-Diffusion (Merton)
                  </h5>
                  <div className="space-y-2 text-sm">
                    <div className="text-center mb-3">
                      <InlineMath math="dS = rS dt + \sigma S dW + S dJ" />
                    </div>
                    <div className="bg-green-50 p-2 rounded text-xs">
                      <strong>Pros:</strong> Captures market crashes, fat tails,
                      more realistic
                    </div>
                    <div className="bg-red-50 p-2 rounded text-xs">
                      <strong>Cons:</strong> More parameters to calibrate,
                      slower simulation
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h5 className="font-semibold text-purple-700 mb-3">
                    🌊 Stochastic Volatility (Heston)
                  </h5>
                  <div className="space-y-2 text-sm">
                    <div className="text-center mb-3 space-y-1">
                      <div>
                        <InlineMath math="dS = rS dt + \sqrt{v} S dW_1" />
                      </div>
                      <div>
                        <InlineMath math="dv = \kappa(\theta - v) dt + \xi\sqrt{v} dW_2" />
                      </div>
                    </div>
                    <div className="bg-green-50 p-2 rounded text-xs">
                      <strong>Pros:</strong> Volatility clustering, realistic
                      vol behavior, volatility smile
                    </div>
                    <div className="bg-red-50 p-2 rounded text-xs">
                      <strong>Cons:</strong> Complex calibration,
                      computationally intensive
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h5 className="font-semibold text-purple-700 mb-3">
                    🔄 Mean-Reverting Processes
                  </h5>
                  <div className="space-y-2 text-sm">
                    <div className="text-center mb-3">
                      <InlineMath math="dS = \kappa(\mu - \ln S) S dt + \sigma S dW" />
                    </div>
                    <div className="bg-green-50 p-2 rounded text-xs">
                      <strong>Use:</strong> Commodities, interest rates,
                      volatility indices
                    </div>
                    <div className="bg-blue-50 p-2 rounded text-xs">
                      <strong>Feature:</strong> Prices tend to revert to
                      long-term mean level
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Parameter Sensitivity & Calibration */}
          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border-2 border-teal-200 p-6 rounded-xl">
            <h4 className="font-bold text-teal-800 text-xl mb-6 text-center">
              Parameter Sensitivity & Calibration
            </h4>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg border border-teal-200">
                <h5 className="font-semibold text-teal-700 mb-3 text-center">
                  🎯 Critical Parameters
                </h5>
                <ul className="text-teal-600 text-sm space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-teal-500 mt-1">•</span>
                    <span>
                      <strong>Volatility:</strong> Most sensitive parameter -
                      small changes create large price differences
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-teal-500 mt-1">•</span>
                    <span>
                      <strong>Time Steps:</strong> Balance accuracy vs speed,
                      more critical for path-dependent options
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-teal-500 mt-1">•</span>
                    <span>
                      <strong>Random Seeds:</strong> Use different seeds to test
                      simulation stability
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg border border-teal-200">
                <h5 className="font-semibold text-teal-700 mb-3 text-center">
                  📊 Calibration Sources
                </h5>
                <ul className="text-teal-600 text-sm space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-teal-500 mt-1">•</span>
                    <span>
                      <strong>Market Data:</strong> Implied volatilities from
                      liquid options
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-teal-500 mt-1">•</span>
                    <span>
                      <strong>Historical Analysis:</strong> Realized volatility
                      and correlation estimates
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-teal-500 mt-1">•</span>
                    <span>
                      <strong>Cross-Validation:</strong> Compare with analytical
                      models where possible
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg border border-teal-200">
                <h5 className="font-semibold text-teal-700 mb-3 text-center">
                  🔧 Quality Control
                </h5>
                <ul className="text-teal-600 text-sm space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-teal-500 mt-1">•</span>
                    <span>
                      <strong>Convergence Testing:</strong> Monitor how results
                      change with more simulations
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-teal-500 mt-1">•</span>
                    <span>
                      <strong>Confidence Intervals:</strong> Calculate standard
                      errors for price estimates
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-teal-500 mt-1">•</span>
                    <span>
                      <strong>Antithetic Variates:</strong> Use variance
                      reduction techniques for efficiency
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Practical Guidelines */}
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border-2 border-cyan-200 p-6 rounded-xl">
            <h4 className="font-bold text-cyan-800 text-xl mb-6">
              Practical Implementation Guidelines
            </h4>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg border border-cyan-200">
                <h5 className="font-semibold text-cyan-700 mb-3 text-center">
                  🚀 For Speed
                </h5>
                <ul className="text-cyan-600 text-sm space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      <strong>Simulations:</strong> Start with N=10,000 for
                      development and testing
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      <strong>Process:</strong> Use GBM for initial
                      implementation and benchmarking
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      <strong>Steps:</strong> Weekly or bi-weekly time steps for
                      European options
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg border border-cyan-200">
                <h5 className="font-semibold text-cyan-700 mb-3 text-center">
                  🎯 For Accuracy
                </h5>
                <ul className="text-cyan-600 text-sm space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      <strong>Simulations:</strong> Use N≥100,000 for production
                      pricing
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      <strong>Volatility:</strong> Use implied vol from market
                      data when available
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      <strong>Validation:</strong> Cross-check simple options
                      with Black-Scholes
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg border border-cyan-200">
                <h5 className="font-semibold text-cyan-700 mb-3 text-center">
                  🛡️ For Robustness
                </h5>
                <ul className="text-cyan-600 text-sm space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      <strong>Multiple Runs:</strong> Use different random seeds
                      to verify stability
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      <strong>Stress Testing:</strong> Test with extreme
                      parameter values
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      <strong>Documentation:</strong> Record all assumptions and
                      parameter choices
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
              Monte Carlo simulation works by generating thousands of random
              stock price paths, calculating option payoffs for each path, and
              averaging the results. This brute-force approach can handle any
              option complexity while maintaining mathematical accuracy through
              the law of large numbers.
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
                  <h4 className="font-bold mb-2">The Three-Step Process</h4>
                  <p>
                    Generate random price paths using stochastic processes,
                    calculate payoffs at expiration for each simulated path,
                    then average and discount back to get today's option value.
                    More simulations mean higher accuracy but longer computation
                    time.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Simulation Formulas */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 p-6 rounded-xl">
            <h4 className="font-bold text-blue-800 text-xl mb-6 text-center">
              Core Simulation Formulas
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg border border-blue-200 shadow-sm">
                <h5 className="font-bold text-blue-700 mb-4 text-center">
                  🎲 Stock Price Path Generation
                </h5>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <div className="font-semibold text-blue-700 mb-3 text-center">
                      Geometric Brownian Motion:
                    </div>
                    <div className="text-center">
                      <BlockMath math="S_{t+\Delta t} = S_t \cdot e^{(r - \frac{\sigma^2}{2})\Delta t + \sigma\sqrt{\Delta t} \cdot Z}" />
                    </div>
                    <div className="text-blue-600 text-xs text-center mt-2">
                      Where Z ~ N(0,1) is a random normal variable
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <div className="font-semibold text-blue-700 mb-3 text-center">
                      Discrete Time Steps:
                    </div>
                    <div className="text-center">
                      <BlockMath math="\Delta t = \frac{T}{M}" />
                    </div>
                    <div className="text-blue-600 text-xs text-center mt-2">
                      T = time to expiration, M = number of time steps
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-blue-200 shadow-sm">
                <h5 className="font-bold text-blue-700 mb-4 text-center">
                  💰 Option Value Calculation
                </h5>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <div className="font-semibold text-blue-700 mb-3 text-center">
                      Monte Carlo Estimator:
                    </div>
                    <div className="text-center">
                      <BlockMath math="V_0 = e^{-rT} \cdot \frac{1}{N} \sum_{i=1}^{N} \text{Payoff}(S_T^{(i)})" />
                    </div>
                    <div className="text-blue-600 text-xs text-center mt-2">
                      Average discounted payoffs across N simulations
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <div className="font-semibold text-blue-700 mb-3 text-center">
                      Standard Error:
                    </div>
                    <div className="text-center">
                      <BlockMath math="SE = \frac{\sigma_{\text{payoff}}}{\sqrt{N}}" />
                    </div>
                    <div className="text-blue-600 text-xs text-center mt-2">
                      Decreases as 1/√N, so 4x simulations halve error
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step-by-Step Example */}
          <div className="bg-gradient-to-r from-emerald-50 to-green-50 border-2 border-emerald-200 p-6 rounded-xl">
            <h4 className="font-bold text-emerald-800 text-xl mb-6 text-center">
              📚 Step-by-Step Example: European Call Option
            </h4>

            <div className="bg-white p-6 rounded-lg border border-emerald-200 shadow-sm">
              <div className="text-center mb-6">
                <h5 className="font-bold text-emerald-700 text-lg mb-2">
                  Monte Carlo Simulation Walkthrough
                </h5>
                <p className="text-emerald-600 text-sm">
                  See how random paths converge to fair option value
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
                      <span className="font-mono font-bold">$100</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Strike Price (K):</span>
                      <span className="font-mono font-bold">$105</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Time to Expiration (T):</span>
                      <span className="font-mono font-bold">0.25 years</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Risk-free Rate (r):</span>
                      <span className="font-mono font-bold">5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Volatility (σ):</span>
                      <span className="font-mono font-bold">20%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Time Steps (M):</span>
                      <span className="font-mono font-bold">252</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Simulations (N):</span>
                      <span className="font-mono font-bold">10,000</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                  <div className="font-semibold text-slate-700 mb-4 text-center">
                    🔧 Calculation Setup
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="text-center">
                      <InlineMath math="\Delta t = \frac{0.25}{252} = 0.000992" />
                    </div>
                    <div className="text-center">
                      <InlineMath math="\sqrt{\Delta t} = 0.0315" />
                    </div>
                    <div className="text-center">
                      <InlineMath math="(r - \frac{\sigma^2}{2})\Delta t = 0.000040" />
                    </div>
                    <div className="text-center">
                      <InlineMath math="\sigma\sqrt{\Delta t} = 0.00630" />
                    </div>
                    <div className="bg-blue-50 p-3 rounded mt-3">
                      <div className="text-center font-bold text-blue-700">
                        <div>Discount Factor: e^(-0.05×0.25) = 0.9876</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step-by-Step Process */}
              <div className="mt-6 bg-white p-6 rounded-lg border border-emerald-200 shadow-sm">
                <h6 className="font-semibold text-emerald-700 mb-4 text-center">
                  📝 The Four-Step Simulation Process
                </h6>

                <div className="grid md:grid-cols-1 gap-6">
                  {/* Step 1 */}
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">1</span>
                      </div>
                      <div className="flex-1">
                        <h6 className="font-semibold text-blue-700 mb-2">
                          Generate Random Normal Variables
                        </h6>
                        <div className="text-blue-600 text-sm mb-3">
                          For each simulation i and time step j, generate
                          Z[i][j] ~ N(0,1)
                        </div>
                        <div className="bg-white p-3 rounded border text-xs">
                          <div className="font-mono">
                            <div>
                              Path 1: Z = [0.234, -1.567, 0.891, -0.345, ...]
                            </div>
                            <div>
                              Path 2: Z = [-0.789, 0.123, 1.234, -0.567, ...]
                            </div>
                            <div>
                              Path 3: Z = [1.456, -0.234, -0.789, 1.123, ...]
                            </div>
                            <div className="text-gray-500">
                              ... (10,000 paths total)
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">2</span>
                      </div>
                      <div className="flex-1">
                        <h6 className="font-semibold text-indigo-700 mb-2">
                          Simulate Stock Price Paths
                        </h6>
                        <div className="text-indigo-600 text-sm mb-3">
                          Use geometric Brownian motion to build complete price
                          paths from S₀ to S_T
                        </div>
                        <div className="bg-white p-3 rounded border text-xs">
                          <div className="grid grid-cols-3 gap-4 text-center">
                            <div>
                              <div className="font-bold">Path 1</div>
                              <div className="font-mono">S₀: $100.00</div>
                              <div className="font-mono">S₁: $100.15</div>
                              <div className="font-mono">S₂: $98.92</div>
                              <div className="font-mono">...</div>
                              <div className="font-mono text-green-600">
                                S_T: $108.45
                              </div>
                            </div>
                            <div>
                              <div className="font-bold">Path 2</div>
                              <div className="font-mono">S₀: $100.00</div>
                              <div className="font-mono">S₁: $99.51</div>
                              <div className="font-mono">S₂: $99.58</div>
                              <div className="font-mono">...</div>
                              <div className="font-mono text-red-600">
                                S_T: $96.78
                              </div>
                            </div>
                            <div>
                              <div className="font-bold">Path 3</div>
                              <div className="font-mono">S₀: $100.00</div>
                              <div className="font-mono">S₁: $101.91</div>
                              <div className="font-mono">S₂: $101.67</div>
                              <div className="font-mono">...</div>
                              <div className="font-mono text-green-600">
                                S_T: $112.33
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">3</span>
                      </div>
                      <div className="flex-1">
                        <h6 className="font-semibold text-emerald-700 mb-2">
                          Calculate Option Payoffs
                        </h6>
                        <div className="text-emerald-600 text-sm mb-3">
                          For each path's final stock price, compute the
                          option's payoff at expiration
                        </div>
                        <div className="bg-white p-3 rounded border text-xs space-y-2">
                          <div>
                            <div className="font-bold text-emerald-700">
                              Call option payoffs: max(S_T - K, 0)
                            </div>
                          </div>
                          <div className="grid grid-cols-3 gap-4 text-center">
                            <div>
                              <div>S_T = $108.45</div>
                              <div className="font-mono text-green-600">
                                Payoff = $3.45
                              </div>
                            </div>
                            <div>
                              <div>S_T = $96.78</div>
                              <div className="font-mono text-red-600">
                                Payoff = $0.00
                              </div>
                            </div>
                            <div>
                              <div>S_T = $112.33</div>
                              <div className="font-mono text-green-600">
                                Payoff = $7.33
                              </div>
                            </div>
                          </div>
                          <div className="text-gray-600 font-bold">
                            Average payoff across 10,000 simulations: $2.48
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">4</span>
                      </div>
                      <div className="flex-1">
                        <h6 className="font-semibold text-orange-700 mb-2">
                          Discount to Present Value
                        </h6>
                        <div className="text-orange-600 text-sm mb-3">
                          Apply risk-free discounting to get today's fair option
                          value
                        </div>
                        <div className="bg-white p-3 rounded border text-xs">
                          <div>
                            <div className="font-bold text-orange-700">
                              Final calculation:
                            </div>
                            <div>Average Payoff: $2.48</div>
                            <div>Discount Factor: e^(-0.05×0.25) = 0.9876</div>
                            <div className="text-orange-600 font-bold text-lg">
                              → Call Option Value = $2.48 × 0.9876 = $2.45
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Results */}
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-center">
                  <div className="text-2xl mb-2">🎯</div>
                  <div className="font-bold text-blue-700">
                    Monte Carlo Result
                  </div>
                  <div className="text-blue-600 text-sm mb-2">
                    Call Option Value
                  </div>
                  <div className="text-2xl font-bold text-blue-800">$2.45</div>
                </div>

                <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200 text-center">
                  <div className="text-2xl mb-2">📊</div>
                  <div className="font-bold text-emerald-700">
                    Standard Error
                  </div>
                  <div className="text-emerald-600 text-sm mb-2">
                    95% Confidence: ±
                  </div>
                  <div className="text-xl font-bold text-emerald-800">
                    $0.02
                  </div>
                </div>

                <div className="bg-violet-50 p-4 rounded-lg border border-violet-200 text-center">
                  <div className="text-2xl mb-2">⚡</div>
                  <div className="font-bold text-violet-700">Black-Scholes</div>
                  <div className="text-violet-600 text-sm mb-2">
                    Exact Value
                  </div>
                  <div className="text-xl font-bold text-violet-800">$2.46</div>
                </div>
              </div>
            </div>
          </div>

          {/* Random Number Generation */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 p-6 rounded-xl">
            <h4 className="font-bold text-amber-800 text-xl mb-6">
              🎲 Random Number Generation: The Engine of Monte Carlo
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg border border-amber-200">
                <h5 className="font-bold text-amber-700 mb-4">
                  🔧 Quality Requirements
                </h5>
                <div className="space-y-3">
                  <div className="bg-amber-50 p-3 rounded">
                    <div className="font-semibold text-amber-700 text-sm mb-2">
                      High-Quality Generators:
                    </div>
                    <div className="space-y-2 text-xs">
                      <div>
                        <strong>Mersenne Twister:</strong> Period of 2^19937-1,
                        excellent for finance
                      </div>
                      <div>
                        <strong>Sobol Sequences:</strong> Low-discrepancy,
                        better convergence
                      </div>
                      <div>
                        <strong>Linear Congruential:</strong> Fast but avoid for
                        serious work
                      </div>
                      <div>
                        <strong>Cryptographic:</strong> Highest quality but
                        slower
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-3 rounded text-xs">
                    <div className="font-semibold text-gray-700 mb-1">
                      Key Properties Needed:
                    </div>
                    <div className="text-gray-600">
                      • Long period ({">"} 10^12 before repeat)
                      <br />• Good dimensional distribution
                      <br />• Pass statistical randomness tests
                      <br />• Reproducible with seed values
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-amber-200">
                <h5 className="font-bold text-amber-700 mb-4">
                  📈 Normal Distribution Generation
                </h5>
                <div className="space-y-3">
                  <div className="bg-amber-50 p-3 rounded">
                    <div className="font-semibold text-amber-700 text-sm mb-2">
                      Box-Muller Transform:
                    </div>
                    <div className="text-center space-y-2 text-xs">
                      <div>Generate U₁, U₂ ~ Uniform(0,1)</div>
                      <div>
                        <InlineMath math="Z_1 = \sqrt{-2\ln(U_1)} \cos(2\pi U_2)" />
                      </div>
                      <div>
                        <InlineMath math="Z_2 = \sqrt{-2\ln(U_1)} \sin(2\pi U_2)" />
                      </div>
                      <div>Both Z₁, Z₂ ~ N(0,1)</div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-3 rounded text-xs">
                    <div className="font-semibold text-gray-700 mb-1">
                      Alternative Methods:
                    </div>
                    <div className="text-gray-600">
                      • Inverse CDF: Precise but slower
                      <br />• Ziggurat: Very fast, complex setup
                      <br />• Acceptance-Rejection: Simple, inefficient
                      <br />• Central Limit: Poor tail behavior
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-white p-5 rounded-lg border border-amber-200">
              <h5 className="font-bold text-amber-700 mb-4 text-center">
                💡 Practical Implementation Tips
              </h5>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-amber-50 p-3 rounded text-center">
                  <div className="font-semibold text-amber-700 mb-2">
                    🎯 Antithetic Variates
                  </div>
                  <div className="text-amber-600 text-xs">
                    Use both Z and -Z to reduce variance by ~50% with same
                    computational cost
                  </div>
                </div>

                <div className="bg-amber-50 p-3 rounded text-center">
                  <div className="font-semibold text-amber-700 mb-2">
                    🔄 Control Variates
                  </div>
                  <div className="text-amber-600 text-xs">
                    Use known analytical result (like Black-Scholes) to reduce
                    simulation variance
                  </div>
                </div>

                <div className="bg-amber-50 p-3 rounded text-center">
                  <div className="font-semibold text-amber-700 mb-2">
                    📊 Importance Sampling
                  </div>
                  <div className="text-amber-600 text-xs">
                    Sample more frequently near strike price where option
                    sensitivity is highest
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Convergence and Accuracy */}
          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border-2 border-teal-200 p-6 rounded-xl">
            <h4 className="font-bold text-teal-800 text-xl mb-6 text-center">
              📈 Convergence and Accuracy Analysis
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg border border-teal-200">
                <h5 className="font-bold text-teal-700 mb-4 text-center">
                  📊 Convergence Rate
                </h5>
                <div className="space-y-3 text-sm">
                  <div className="bg-teal-50 p-3 rounded">
                    <div className="font-semibold text-teal-700 mb-2">
                      Law of Large Numbers:
                    </div>
                    <div className="text-center mb-2">
                      <InlineMath math="\bar{X}_N \xrightarrow{N \to \infty} E[X]" />
                    </div>
                    <div className="text-teal-600 text-xs">
                      Sample average converges to true expected value as N
                      increases
                    </div>
                  </div>

                  <div className="bg-teal-50 p-3 rounded">
                    <div className="font-semibold text-teal-700 mb-2">
                      Central Limit Theorem:
                    </div>
                    <div className="text-center mb-2">
                      <InlineMath math="\sqrt{N}(\bar{X}_N - \mu) \xrightarrow{d} N(0, \sigma^2)" />
                    </div>
                    <div className="text-teal-600 text-xs">
                      Error decreases as 1/√N - need 100x simulations for 10x
                      accuracy
                    </div>
                  </div>

                  <div className="bg-gray-50 p-3 rounded text-xs">
                    <div className="font-semibold text-gray-700 mb-1">
                      Practical Convergence:
                    </div>
                    <div className="text-gray-600">
                      • N = 1,000: ±3% accuracy (95% confidence)
                      <br />• N = 10,000: ±1% accuracy
                      <br />• N = 100,000: ±0.3% accuracy
                      <br />• N = 1,000,000: ±0.1% accuracy
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-teal-200">
                <h5 className="font-bold text-teal-700 mb-4 text-center">
                  ⚡ Variance Reduction Techniques
                </h5>
                <div className="space-y-3 text-sm">
                  <div className="bg-teal-50 p-3 rounded">
                    <div className="font-semibold text-teal-700 mb-2">
                      Antithetic Variates:
                    </div>
                    <div className="text-teal-600 text-xs mb-2">
                      Use both Z and -Z random numbers to reduce variance
                    </div>
                    <div className="text-center">
                      <InlineMath math="V = \frac{1}{2}[\text{Payoff}(Z) + \text{Payoff}(-Z)]" />
                    </div>
                  </div>

                  <div className="bg-teal-50 p-3 rounded">
                    <div className="font-semibold text-teal-700 mb-2">
                      Control Variates:
                    </div>
                    <div className="text-teal-600 text-xs mb-2">
                      Use Black-Scholes as control to reduce simulation variance
                    </div>
                    <div className="text-center">
                      <InlineMath math="V_{adj} = V_{MC} + \beta(V_{BS} - \bar{V}_{BS})" />
                    </div>
                  </div>

                  <div className="bg-gray-50 p-3 rounded text-xs">
                    <div className="font-semibold text-gray-700 mb-1">
                      Variance Reduction Impact:
                    </div>
                    <div className="text-gray-600">
                      • Antithetic: 20-50% variance reduction
                      <br />• Control variates: 50-90% reduction
                      <br />• Stratified sampling: 30-70% reduction
                      <br />• Combined methods: Up to 95% reduction
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-white p-5 rounded-lg border border-teal-200">
              <h5 className="font-bold text-teal-700 mb-4 text-center">
                🎯 Confidence Intervals and Error Estimation
              </h5>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3 text-sm">
                  <div className="bg-teal-50 p-3 rounded">
                    <div className="font-semibold text-teal-700 mb-2">
                      Standard Error Formula:
                    </div>
                    <div className="text-center space-y-2">
                      <div>
                        <InlineMath math="SE = \frac{s}{\sqrt{N}}" />
                      </div>
                      <div>
                        <InlineMath math="s = \sqrt{\frac{1}{N-1}\sum_{i=1}^{N}(X_i - \bar{X})^2}" />
                      </div>
                    </div>
                    <div className="text-teal-600 text-xs mt-2">
                      Where s is sample standard deviation of payoffs
                    </div>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="bg-teal-50 p-3 rounded">
                    <div className="font-semibold text-teal-700 mb-2">
                      95% Confidence Interval:
                    </div>
                    <div className="text-center space-y-2">
                      <div>
                        <InlineMath math="CI = \bar{X} \pm 1.96 \times SE" />
                      </div>
                      <div className="text-xs">For our example:</div>
                      <div>
                        <InlineMath math="CI = 2.45 \pm 1.96 \times 0.01 = [2.43, 2.47]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Path-Dependent Options */}
          <div className="bg-gradient-to-r from-purple-50 to-violet-50 border-2 border-purple-200 p-6 rounded-xl">
            <h4 className="font-bold text-purple-800 text-xl mb-6 text-center">
              🛤️ Path-Dependent Options: Where Monte Carlo Shines
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h5 className="font-semibold text-purple-700 mb-3">
                    📊 Asian Options Example
                  </h5>
                  <div className="space-y-2 text-sm">
                    <div className="bg-purple-50 p-3 rounded">
                      <div className="font-semibold text-purple-700 mb-2">
                        Arithmetic Average Call:
                      </div>
                      <div className="text-center mb-2">
                        <InlineMath math="\text{Payoff} = \max\left(\frac{1}{M}\sum_{i=1}^{M} S_i - K, 0\right)" />
                      </div>
                      <div className="text-purple-600 text-xs">
                        Average stock price over option life versus strike
                      </div>
                    </div>

                    <div className="bg-gray-50 p-3 rounded text-xs">
                      <div className="font-semibold text-gray-700 mb-1">
                        Implementation Steps:
                      </div>
                      <ul className="text-gray-600 space-y-1">
                        <li>
                          1. Generate full stock price path S₀, S₁, ..., S_M
                        </li>
                        <li>2. Calculate arithmetic average: Ā = (1/M)ΣS_i</li>
                        <li>3. Compute payoff: max(Ā - K, 0)</li>
                        <li>4. Repeat for N simulations and average</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h5 className="font-semibold text-purple-700 mb-3">
                    🚧 Barrier Options Example
                  </h5>
                  <div className="space-y-2 text-sm">
                    <div className="bg-purple-50 p-3 rounded">
                      <div className="font-semibold text-purple-700 mb-2">
                        Knock-Out Call:
                      </div>
                      <div className="text-center mb-2">
                        <InlineMath math="\text{Payoff} = \begin{cases} \max(S_T - K, 0) & \text{if } S_t \leq B \text{ for all } t \\ 0 & \text{otherwise} \end{cases}" />
                      </div>
                      <div className="text-purple-600 text-xs">
                        Option becomes worthless if stock hits barrier B
                      </div>
                    </div>

                    <div className="bg-gray-50 p-3 rounded text-xs">
                      <div className="font-semibold text-gray-700 mb-1">
                        Implementation Notes:
                      </div>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Check barrier condition at each time step</li>
                        <li>• Use fine time discretization near barriers</li>
                        <li>• Consider continuous monitoring adjustments</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h5 className="font-semibold text-purple-700 mb-3">
                    👁️ Lookback Options Example
                  </h5>
                  <div className="space-y-2 text-sm">
                    <div className="bg-purple-50 p-3 rounded">
                      <div className="font-semibold text-purple-700 mb-2">
                        Floating Strike Call:
                      </div>
                      <div className="text-center mb-2">
                        <InlineMath math="\text{Payoff} = S_T - \min_{0 \leq t \leq T} S_t" />
                      </div>
                      <div className="text-purple-600 text-xs">
                        Strike equals minimum stock price during option life
                      </div>
                    </div>

                    <div className="bg-gray-50 p-3 rounded text-xs">
                      <div className="font-semibold text-gray-700 mb-1">
                        Algorithm:
                      </div>
                      <ul className="text-gray-600 space-y-1">
                        <li>1. Track running minimum: min_so_far</li>
                        <li>
                          2. Update at each time step: min_so_far =
                          min(min_so_far, S_t)
                        </li>
                        <li>3. Final payoff: S_T - min_so_far</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h5 className="font-semibold text-purple-700 mb-3">
                    🌈 Multi-Asset Options
                  </h5>
                  <div className="space-y-2 text-sm">
                    <div className="bg-purple-50 p-3 rounded">
                      <div className="font-semibold text-purple-700 mb-2">
                        Basket Call Option:
                      </div>
                      <div className="text-center mb-2">
                        <InlineMath math="\text{Payoff} = \max\left(\sum_{i=1}^{n} w_i S_i(T) - K, 0\right)" />
                      </div>
                      <div className="text-purple-600 text-xs">
                        Weighted average of multiple stock prices
                      </div>
                    </div>

                    <div className="bg-gray-50 p-3 rounded text-xs">
                      <div className="font-semibold text-gray-700 mb-1">
                        Correlation Handling:
                      </div>
                      <div className="text-gray-600">
                        • Generate correlated random vectors
                        <br />• Use Cholesky decomposition of correlation matrix
                        <br />• Simulate all assets simultaneously
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Advanced Stochastic Processes */}
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border-2 border-indigo-200 p-6 rounded-xl">
            <h4 className="font-bold text-indigo-800 text-xl mb-6 text-center">
              🌊 Advanced Stochastic Processes
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-indigo-200">
                  <h5 className="font-semibold text-indigo-700 mb-3">
                    🦘 Jump-Diffusion Process (Merton)
                  </h5>
                  <div className="space-y-2 text-sm">
                    <div className="bg-indigo-50 p-3 rounded">
                      <div className="font-semibold text-indigo-700 mb-2">
                        Process Definition:
                      </div>
                      <div className="text-center space-y-1 text-xs">
                        <div>
                          <InlineMath math="dS = rS dt + \sigma S dW + S dJ" />
                        </div>
                        <div>where J is a compound Poisson process</div>
                      </div>
                    </div>

                    <div className="bg-indigo-50 p-3 rounded">
                      <div className="font-semibold text-indigo-700 mb-2">
                        Simulation Steps:
                      </div>
                      <ul className="text-indigo-600 text-xs space-y-1">
                        <li>1. Generate normal diffusion: σ√Δt × Z</li>
                        <li>2. Check for jumps: Poisson(λΔt)</li>
                        <li>3. If jump occurs, add log-normal jump size</li>
                        <li>
                          4. Update: {"S_{t+1}"} = S_t × exp(drift + diffusion +
                          jumps)
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-3 rounded text-xs">
                      <div className="font-semibold text-gray-700 mb-1">
                        Market Applications:
                      </div>
                      <div className="text-gray-600">
                        Better captures market crashes, earnings surprises, and
                        other discontinuous events
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-indigo-200">
                  <h5 className="font-semibold text-indigo-700 mb-3">
                    🌪️ Stochastic Volatility (Heston)
                  </h5>
                  <div className="space-y-2 text-sm">
                    <div className="bg-indigo-50 p-3 rounded">
                      <div className="font-semibold text-indigo-700 mb-2">
                        Coupled System:
                      </div>
                      <div className="text-center space-y-1 text-xs">
                        <div>
                          <InlineMath math="dS = rS dt + \sqrt{v} S dW_1" />
                        </div>
                        <div>
                          <InlineMath math="dv = \kappa(\theta - v) dt + \xi\sqrt{v} dW_2" />
                        </div>
                        <div>
                          <InlineMath math="dW_1 dW_2 = \rho dt" />
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-3 rounded text-xs">
                      <div className="font-semibold text-gray-700 mb-1">
                        Implementation Challenges:
                      </div>
                      <div className="text-gray-600">
                        • Ensure variance stays positive
                        <br />• Handle correlation between price and volatility
                        <br />• More complex but captures volatility clustering
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-indigo-200">
                  <h5 className="font-semibold text-indigo-700 mb-3">
                    🔄 Mean-Reverting Processes
                  </h5>
                  <div className="space-y-2 text-sm">
                    <div className="bg-indigo-50 p-3 rounded">
                      <div className="font-semibold text-indigo-700 mb-2">
                        Ornstein-Uhlenbeck Process:
                      </div>
                      <div className="text-center space-y-1 text-xs">
                        <div>
                          <InlineMath math="dx = \kappa(\mu - x) dt + \sigma dW" />
                        </div>
                        <div>Discrete form:</div>
                        <div>
                          <InlineMath math="x_{t+1} = x_t e^{-\kappa\Delta t} + \mu(1-e^{-\kappa\Delta t}) + \sigma\sqrt{\frac{1-e^{-2\kappa\Delta t}}{2\kappa}} Z" />
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-3 rounded text-xs">
                      <div className="font-semibold text-gray-700 mb-1">
                        Applications:
                      </div>
                      <div className="text-gray-600">
                        • Interest rate models (Vasicek)
                        <br />• Commodity prices (oil, gas)
                        <br />• Volatility modeling (log-volatility)
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-indigo-200">
                  <h5 className="font-semibold text-indigo-700 mb-3">
                    ⚡ Implementation Efficiency
                  </h5>
                  <div className="space-y-2 text-sm">
                    <div className="bg-indigo-50 p-3 rounded">
                      <div className="font-semibold text-indigo-700 mb-2">
                        Optimization Techniques:
                      </div>
                      <ul className="text-indigo-600 text-xs space-y-1">
                        <li>• Vectorize operations with NumPy/Pandas</li>
                        <li>• Use compiled code (Numba, Cython)</li>
                        <li>• GPU acceleration with CuPy/TensorFlow</li>
                        <li>• Parallel processing across CPU cores</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-3 rounded text-xs">
                      <div className="font-semibold text-gray-700 mb-1">
                        Performance Scaling:
                      </div>
                      <div className="text-gray-600">
                        • Single-threaded Python: ~1K simulations/sec
                        <br />• Vectorized NumPy: ~100K simulations/sec
                        <br />• GPU acceleration: ~10M simulations/sec
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Greeks Calculation */}
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-200 p-6 rounded-xl">
            <h4 className="font-bold text-emerald-800 text-xl mb-6">
              📊 Greeks Calculation via Monte Carlo
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg border border-emerald-200">
                <h5 className="font-bold text-emerald-700 mb-4">
                  🔢 Finite Difference Methods
                </h5>
                <div className="space-y-3">
                  <div className="bg-emerald-50 p-3 rounded">
                    <div className="font-semibold text-emerald-700 text-sm mb-2">
                      Delta (Price Sensitivity):
                    </div>
                    <div className="text-center space-y-1 text-xs">
                      <div>
                        <InlineMath math="\Delta = \frac{V(S_0 + h) - V(S_0 - h)}{2h}" />
                      </div>
                      <div>
                        Central difference with small h (e.g., 1% of S₀)
                      </div>
                    </div>
                  </div>

                  <div className="bg-emerald-50 p-3 rounded">
                    <div className="font-semibold text-emerald-700 text-sm mb-2">
                      Gamma (Delta Sensitivity):
                    </div>
                    <div className="text-center space-y-1 text-xs">
                      <div>
                        <InlineMath math="\Gamma = \frac{V(S_0 + h) - 2V(S_0) + V(S_0 - h)}{h^2}" />
                      </div>
                      <div>Second derivative approximation</div>
                    </div>
                  </div>

                  <div className="bg-emerald-50 p-3 rounded">
                    <div className="font-semibold text-emerald-700 text-sm mb-2">
                      Vega (Volatility Sensitivity):
                    </div>
                    <div className="text-center space-y-1 text-xs">
                      <div>
                        <InlineMath math="\nu = \frac{V(\sigma + h) - V(\sigma - h)}{2h}" />
                      </div>
                      <div>Typically use h = 1% absolute volatility change</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-emerald-200">
                <h5 className="font-bold text-emerald-700 mb-4">
                  📈 Pathwise Derivatives Method
                </h5>
                <div className="space-y-3">
                  <div className="bg-emerald-50 p-3 rounded">
                    <div className="font-semibold text-emerald-700 text-sm mb-2">
                      Concept:
                    </div>
                    <div className="text-emerald-600 text-xs mb-2">
                      Calculate sensitivity along each simulated path, then
                      average
                    </div>
                    <div className="text-center">
                      <InlineMath math="\Delta = e^{-rT} \cdot \frac{1}{N} \sum_{i=1}^{N} \frac{\partial}{\partial S_0} \text{Payoff}_i" />
                    </div>
                  </div>

                  <div className="bg-emerald-50 p-3 rounded">
                    <div className="font-semibold text-emerald-700 text-sm mb-2">
                      Advantages:
                    </div>
                    <ul className="text-emerald-600 text-xs space-y-1">
                      <li>• Same random numbers for option and Greek</li>
                      <li>• No additional simulations needed</li>
                      <li>• Lower variance than finite differences</li>
                      <li>• Automatic common random numbers</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-3 rounded text-xs">
                    <div className="font-semibold text-gray-700 mb-1">
                      Implementation Notes:
                    </div>
                    <div className="text-gray-600">
                      Works well for vanilla options but requires careful
                      handling for path-dependent and barrier options
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Implementation Best Practices */}
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-2 border-orange-200 p-6 rounded-xl">
            <h4 className="font-bold text-orange-800 text-xl mb-6">
              💡 Implementation Best Practices
            </h4>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg border border-orange-200">
                <h5 className="font-semibold text-orange-700 mb-3 text-center">
                  🎯 Accuracy Guidelines
                </h5>
                <ul className="text-orange-600 text-sm space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>
                      <strong>Sample Size:</strong> Start with N=10,000,
                      increase until stable
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>
                      <strong>Time Steps:</strong> Use M=252 (daily) for
                      standard options
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>
                      <strong>Convergence:</strong> Monitor running average,
                      stop when stable
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>
                      <strong>Validation:</strong> Compare simple cases with
                      Black-Scholes
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg border border-orange-200">
                <h5 className="font-semibold text-orange-700 mb-3 text-center">
                  ⚡ Performance Optimization
                </h5>
                <ul className="text-orange-600 text-sm space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>
                      <strong>Vectorization:</strong> Use NumPy arrays, avoid
                      Python loops
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>
                      <strong>Memory:</strong> Pre-allocate arrays, avoid
                      dynamic resizing
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>
                      <strong>Random Numbers:</strong> Generate in batches,
                      reuse when possible
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>
                      <strong>Parallelization:</strong> Split simulations across
                      CPU cores
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg border border-orange-200">
                <h5 className="font-semibold text-orange-700 mb-3 text-center">
                  🔍 Quality Control
                </h5>
                <ul className="text-orange-600 text-sm space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>
                      <strong>Random Seed:</strong> Use fixed seeds for
                      reproducible results
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>
                      <strong>Outlier Detection:</strong> Check for extreme
                      payoff values
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>
                      <strong>Statistical Tests:</strong> Verify normality of
                      price increments
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>
                      <strong>Confidence Intervals:</strong> Always report error
                      bounds
                    </span>
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
              Monte Carlo simulation offers unmatched flexibility for complex
              derivatives pricing, capable of handling virtually any payoff
              structure or market complexity. However, this power comes with
              significant computational costs and convergence challenges that
              traders must understand and manage.
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
                  <h4 className="font-bold mb-2">
                    The Flexibility vs Speed Trade-off
                  </h4>
                  <p>
                    Monte Carlo can price anything you can program, from simple
                    vanilla options to the most complex path-dependent exotics.
                    But this flexibility comes at the cost of computation time
                    and the need for sophisticated variance reduction techniques
                    to achieve acceptable accuracy.
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
                        Unlimited Flexibility
                      </h5>
                      <p className="text-green-600 text-sm mb-2">
                        Can handle any payoff structure, path dependency, or
                        market complexity that can be programmed
                      </p>
                      <div className="bg-green-50 p-2 rounded text-xs">
                        <strong>Capability:</strong> Asian options, barriers,
                        lookbacks, multi-asset derivatives, custom exotics
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
                        Realistic Market Modeling
                      </h5>
                      <p className="text-green-600 text-sm mb-2">
                        Easily incorporates jumps, stochastic volatility,
                        time-varying parameters, and empirical distributions
                      </p>
                      <div className="bg-green-50 p-2 rounded text-xs">
                        <strong>Reality:</strong> Market crashes, volatility
                        clustering, correlation changes all modeled naturally
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
                        Multi-Dimensional Capability
                      </h5>
                      <p className="text-green-600 text-sm mb-2">
                        Naturally handles multiple assets, currencies, and risk
                        factors without exponential complexity growth
                      </p>
                      <div className="bg-green-50 p-2 rounded text-xs">
                        <strong>Scale:</strong> 10 assets = same computational
                        complexity as 1 asset
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
                        Statistical Robustness
                      </h5>
                      <p className="text-green-600 text-sm mb-2">
                        Provides confidence intervals, convergence diagnostics,
                        and error estimates automatically
                      </p>
                      <div className="bg-green-50 p-2 rounded text-xs">
                        <strong>Quality:</strong> Know exactly how accurate your
                        results are
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
                        Model Validation Power
                      </h5>
                      <p className="text-green-600 text-sm mb-2">
                        Perfect for cross-checking analytical models and testing
                        exotic pricing against simpler benchmarks
                      </p>
                      <div className="bg-green-50 p-2 rounded text-xs">
                        <strong>Use:</strong> Gold standard for validating other
                        pricing methods
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
                        Slow Convergence Rate
                      </h5>
                      <p className="text-red-600 text-sm mb-2">
                        Error decreases only as 1/√N, requiring 100x more
                        simulations for 10x better accuracy
                      </p>
                      <div className="bg-red-50 p-2 rounded text-xs">
                        <strong>Reality:</strong> Going from 10K to 1M
                        simulations improves accuracy by only 10x
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
                        Computational Intensity
                      </h5>
                      <p className="text-red-600 text-sm mb-2">
                        Requires massive computational resources for high
                        accuracy, making real-time applications challenging
                      </p>
                      <div className="bg-red-50 p-2 rounded text-xs">
                        <strong>Scale:</strong> 1M simulations can take minutes
                        vs microseconds for Black-Scholes
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
                        Random Number Quality Dependence
                      </h5>
                      <p className="text-red-600 text-sm mb-2">
                        Results heavily dependent on random number generator
                        quality and can show bias with poor generators
                      </p>
                      <div className="bg-red-50 p-2 rounded text-xs">
                        <strong>Risk:</strong> Bad RNG can systematically bias
                        option prices
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
                        Poor Greeks Accuracy
                      </h5>
                      <p className="text-red-600 text-sm mb-2">
                        Risk sensitivities calculated via finite differences are
                        noisy and require massive sample sizes for precision
                      </p>
                      <div className="bg-red-50 p-2 rounded text-xs">
                        <strong>Problem:</strong> Greeks often have 10x larger
                        error than option prices
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
                        Memory and Storage Requirements
                      </h5>
                      <p className="text-red-600 text-sm mb-2">
                        Large simulations require substantial RAM and storage,
                        especially for path-dependent options with many time
                        steps
                      </p>
                      <div className="bg-red-50 p-2 rounded text-xs">
                        <strong>Scale:</strong> 1M paths × 252 steps × 8 bytes =
                        2GB per asset
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
                        Implementation Complexity
                      </h5>
                      <p className="text-red-600 text-sm mb-2">
                        Requires sophisticated programming, variance reduction
                        techniques, and statistical expertise for optimal
                        results
                      </p>
                      <div className="bg-red-50 p-2 rounded text-xs">
                        <strong>Barrier:</strong> Much harder to implement
                        correctly than Black-Scholes
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
              When to Use Monte Carlo vs When to Look for Alternatives
            </h4>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg border border-blue-200">
                <h5 className="font-bold text-green-700 mb-4 text-center">
                  ✅ Use Monte Carlo When:
                </h5>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">1</span>
                    </div>
                    <div>
                      <div className="font-semibold text-green-700 text-sm">
                        Path-Dependent Payoffs
                      </div>
                      <p className="text-green-600 text-xs">
                        Asian options, barriers, lookbacks, or any payoff
                        depending on the entire price path
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">2</span>
                    </div>
                    <div>
                      <div className="font-semibold text-green-700 text-sm">
                        Multi-Asset Derivatives
                      </div>
                      <p className="text-green-600 text-xs">
                        Basket options, rainbow options, or products with
                        complex correlation structures
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">3</span>
                    </div>
                    <div>
                      <div className="font-semibold text-green-700 text-sm">
                        Complex Market Models
                      </div>
                      <p className="text-green-600 text-xs">
                        Jump-diffusion, stochastic volatility, or
                        regime-switching models without closed-form solutions
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">4</span>
                    </div>
                    <div>
                      <div className="font-semibold text-green-700 text-sm">
                        Custom Exotic Structures
                      </div>
                      <p className="text-green-600 text-xs">
                        Bespoke derivatives with unique features that standard
                        models can't handle
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
                        Cross-checking analytical results or benchmarking new
                        pricing methods
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
                        Real-Time Pricing Needs
                      </div>
                      <p className="text-red-600 text-xs">
                        High-frequency trading, market making, or any
                        application requiring sub-second response times
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">2</span>
                    </div>
                    <div>
                      <div className="font-semibold text-red-700 text-sm">
                        Simple European Options
                      </div>
                      <p className="text-red-600 text-xs">
                        Vanilla calls and puts where Black-Scholes provides
                        instant, exact results
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">3</span>
                    </div>
                    <div>
                      <div className="font-semibold text-red-700 text-sm">
                        High-Precision Greeks
                      </div>
                      <p className="text-red-600 text-xs">
                        When accurate risk sensitivities are critical and
                        computational time is limited
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">4</span>
                    </div>
                    <div>
                      <div className="font-semibold text-red-700 text-sm">
                        Large Portfolio Analysis
                      </div>
                      <p className="text-red-600 text-xs">
                        Thousands of positions requiring simultaneous repricing
                        for risk management
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">5</span>
                    </div>
                    <div>
                      <div className="font-semibold text-red-700 text-sm">
                        Limited Computational Resources
                      </div>
                      <p className="text-red-600 text-xs">
                        Mobile applications, embedded systems, or environments
                        without access to parallel processing
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Variance Reduction Impact */}
          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border-2 border-teal-200 p-6 rounded-xl">
            <h4 className="font-bold text-teal-800 text-xl mb-6 text-center">
              Overcoming Monte Carlo Limitations: Variance Reduction Techniques
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-teal-200">
                  <h5 className="font-semibold text-teal-700 mb-3">
                    🎯 Antithetic Variates Impact
                  </h5>
                  <div className="space-y-2 text-sm">
                    <div className="bg-teal-50 p-3 rounded">
                      <div className="font-semibold text-teal-700 mb-2">
                        Variance Reduction:
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>Standard MC: σ² = 0.100</div>
                        <div>With Antithetic: σ² = 0.062</div>
                        <div>Reduction: 38%</div>
                        <div>Effective 2.6x speedup</div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-3 rounded text-xs">
                      <div className="font-semibold text-gray-700 mb-1">
                        Implementation Cost:
                      </div>
                      <div className="text-gray-600">
                        Zero additional computational cost - uses negated random
                        numbers
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-teal-200">
                  <h5 className="font-semibold text-teal-700 mb-3">
                    🎛️ Control Variates Power
                  </h5>
                  <div className="space-y-2 text-sm">
                    <div className="bg-teal-50 p-3 rounded">
                      <div className="font-semibold text-teal-700 mb-2">
                        Using Black-Scholes as Control:
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>Raw MC Error: ±0.05</div>
                        <div>With Control: ±0.01</div>
                        <div>Reduction: 80%</div>
                        <div>Effective 25x speedup</div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-3 rounded text-xs">
                      <div className="font-semibold text-gray-700 mb-1">
                        Best Applications:
                      </div>
                      <div className="text-gray-600">
                        Exotic options similar to vanilla structures (Asian
                        calls, barrier options)
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-teal-200">
                  <h5 className="font-semibold text-teal-700 mb-3">
                    📊 Importance Sampling
                  </h5>
                  <div className="space-y-2 text-sm">
                    <div className="bg-teal-50 p-3 rounded">
                      <div className="font-semibold text-teal-700 mb-2">
                        Deep OTM Options:
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>Standard MC: 90% paths = $0</div>
                        <div>Importance Sampling: 70% useful</div>
                        <div>Variance Reduction: 60%</div>
                        <div>Critical for rare events</div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-3 rounded text-xs">
                      <div className="font-semibold text-gray-700 mb-1">
                        Implementation:
                      </div>
                      <div className="text-gray-600">
                        Shift probability distribution toward regions where
                        payoff is non-zero
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-teal-200">
                  <h5 className="font-semibold text-teal-700 mb-3">
                    🎲 Quasi-Random Sequences
                  </h5>
                  <div className="space-y-2 text-sm">
                    <div className="bg-teal-50 p-3 rounded">
                      <div className="font-semibold text-teal-700 mb-2">
                        Sobol Sequences:
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>Convergence: O(log N / N)</div>
                        <div>vs Random: O(1 / √N)</div>
                        <div>Better space filling</div>
                        <div>5-10x faster convergence</div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-3 rounded text-xs">
                      <div className="font-semibold text-gray-700 mb-1">
                        Trade-off:
                      </div>
                      <div className="text-gray-600">
                        Better convergence but less suitable for certain types
                        of payoffs
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modern Acceleration Techniques */}
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border-2 border-indigo-200 p-6 rounded-xl">
            <h4 className="font-bold text-indigo-800 text-xl mb-6">
              Modern Acceleration: GPU Computing & Parallel Processing
            </h4>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg border border-indigo-200">
                <h5 className="font-semibold text-indigo-700 mb-3 text-center">
                  💻 CPU Optimization
                </h5>
                <div className="space-y-3 text-sm">
                  <div className="bg-indigo-50 p-3 rounded">
                    <div className="font-semibold text-indigo-700 mb-2">
                      Vectorization Benefits:
                    </div>
                    <ul className="text-indigo-600 text-xs space-y-1">
                      <li>• NumPy: 10-100x speedup over pure Python</li>
                      <li>
                        • SIMD instructions: Process 4-8 numbers simultaneously
                      </li>
                      <li>• Memory efficiency: Contiguous array access</li>
                      <li>• JIT compilation: Numba adds 10-50x more speed</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-3 rounded text-xs">
                    <div className="font-semibold text-gray-700 mb-1">
                      Performance Scale:
                    </div>
                    <div className="text-gray-600">
                      • Pure Python: 1K sims/sec
                      <br />• NumPy: 100K sims/sec
                      <br />• Numba: 1M sims/sec
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border border-indigo-200">
                <h5 className="font-semibold text-indigo-700 mb-3 text-center">
                  🚀 GPU Acceleration
                </h5>
                <div className="space-y-3 text-sm">
                  <div className="bg-indigo-50 p-3 rounded">
                    <div className="font-semibold text-indigo-700 mb-2">
                      Massive Parallelism:
                    </div>
                    <ul className="text-indigo-600 text-xs space-y-1">
                      <li>• 1000+ cores vs 4-16 CPU cores</li>
                      <li>• Perfect for embarrassingly parallel MC</li>
                      <li>• CuPy/CUDA: Drop-in NumPy replacement</li>
                      <li>• 100-1000x speedup for large simulations</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-3 rounded text-xs">
                    <div className="font-semibold text-gray-700 mb-1">
                      Performance Scale:
                    </div>
                    <div className="text-gray-600">
                      • High-end GPU: 10-100M sims/sec
                      <br />• Multiple GPUs: 1B+ sims/sec
                      <br />• Memory bandwidth critical
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border border-indigo-200">
                <h5 className="font-semibold text-indigo-700 mb-3 text-center">
                  ☁️ Cloud Computing
                </h5>
                <div className="space-y-3 text-sm">
                  <div className="bg-indigo-50 p-3 rounded">
                    <div className="font-semibold text-indigo-700 mb-2">
                      Elastic Scaling:
                    </div>
                    <ul className="text-indigo-600 text-xs space-y-1">
                      <li>• Auto-scale based on computation needs</li>
                      <li>• Spot instances: 70% cost reduction</li>
                      <li>• Distributed computing frameworks</li>
                      <li>• Container orchestration (Kubernetes)</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-3 rounded text-xs">
                    <div className="font-semibold text-gray-700 mb-1">
                      Cost Efficiency:
                    </div>
                    <div className="text-gray-600">
                      • Pay per simulation rather than fixed hardware
                      <br />• Scale to millions of cores for large jobs
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Final Assessment */}
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-200 p-6 rounded-xl">
            <h4 className="font-bold text-emerald-800 text-xl mb-4">
              Strategic Assessment: Monte Carlo's Role in Modern Finance
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg border border-emerald-200">
                <h5 className="font-semibold text-emerald-700 mb-3">
                  🎯 Where Monte Carlo Dominates
                </h5>
                <ul className="text-emerald-600 text-sm space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>
                      <strong>Complex Exotics:</strong> The only practical
                      method for many structured products and bespoke
                      derivatives
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>
                      <strong>Risk Management:</strong> Stress testing and
                      scenario analysis across thousands of risk factors
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>
                      <strong>Model Validation:</strong> Gold standard for
                      checking analytical models and providing confidence bounds
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>
                      <strong>Research & Development:</strong> Prototyping new
                      products and testing market scenarios
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg border border-emerald-200">
                <h5 className="font-semibold text-emerald-700 mb-3">
                  ⚡ Optimization Reality Check
                </h5>
                <ul className="text-emerald-600 text-sm space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>
                      <strong>Hardware Evolution:</strong> GPU acceleration and
                      cloud computing have largely solved speed concerns
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>
                      <strong>Variance Reduction:</strong> Modern techniques
                      achieve 10-100x efficiency improvements
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>
                      <strong>Hybrid Approaches:</strong> Combine MC with
                      analytical methods for best of both worlds
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>
                      <strong>Cost vs Benefit:</strong> Computational costs have
                      plummeted while model sophistication has soared
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-emerald-50 p-4 rounded-lg border border-emerald-200">
              <h5 className="font-semibold text-emerald-700 mb-2">
                Bottom Line for Traders and Risk Managers
              </h5>
              <p className="text-emerald-600 text-sm">
                Monte Carlo simulation has evolved from an academic curiosity to
                an indispensable tool for modern derivatives trading. While it
                will never match Black-Scholes for speed on simple options, its
                unmatched flexibility and improving computational efficiency
                make it the method of choice for complex derivatives, risk
                management, and model validation. The key is understanding when
                the additional complexity is justified and how to implement
                variance reduction techniques effectively. In today's markets,
                Monte Carlo isn't just an alternative—it's often the only viable
                solution for sophisticated financial products.
              </p>
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
              Monte Carlo simulation transforms from academic concept to
              practical trading tool through its unique ability to handle exotic
              options and complex market scenarios. Understanding how to
              implement the method effectively—and when to choose it over
              alternatives—separates sophisticated quantitative traders from
              those limited to standard models.
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
                    From Research Lab to Trading Floor
                  </h4>
                  <p>
                    Professional traders use Monte Carlo for complex derivatives
                    that can't be priced analytically. They combine simulation
                    with sophisticated variance reduction techniques and
                    parallel computing to achieve both accuracy and speed in
                    real-world applications where Black-Scholes and binomial
                    models fall short.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Software & Tools */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 p-6 rounded-xl">
            <h4 className="font-bold text-blue-800 text-xl mb-6 text-center">
              Software & Tools That Use Monte Carlo Methods
            </h4>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-lg border border-blue-200">
                <h5 className="font-bold text-blue-700 mb-4 text-center">
                  🏛️ Professional Platforms
                </h5>
                <div className="space-y-3">
                  <div className="bg-blue-50 p-3 rounded">
                    <div className="font-semibold text-blue-700 text-sm mb-1">
                      Bloomberg Terminal (MARS)
                    </div>
                    <p className="text-blue-600 text-xs">
                      Monte Carlo Analytics & Risk System for complex
                      derivatives pricing and portfolio risk
                    </p>
                  </div>

                  <div className="bg-blue-50 p-3 rounded">
                    <div className="font-semibold text-blue-700 text-sm mb-1">
                      Murex MX.3
                    </div>
                    <p className="text-blue-600 text-xs">
                      Enterprise trading platform with distributed Monte Carlo
                      engines for exotic derivatives
                    </p>
                  </div>

                  <div className="bg-blue-50 p-3 rounded">
                    <div className="font-semibold text-blue-700 text-sm mb-1">
                      Numerix CrossAsset
                    </div>
                    <p className="text-blue-600 text-xs">
                      Specialized in Monte Carlo pricing for structured products
                      and credit derivatives
                    </p>
                  </div>

                  <div className="bg-gray-50 p-3 rounded text-xs">
                    <div className="font-semibold text-gray-700 mb-1">
                      Enterprise Features:
                    </div>
                    <ul className="text-gray-600 space-y-1">
                      <li>• GPU acceleration clusters</li>
                      <li>• Real-time variance reduction</li>
                      <li>• Parallel processing management</li>
                      <li>• Risk scenario generation</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-blue-200">
                <h5 className="font-bold text-green-700 mb-4 text-center">
                  📱 Mid-Market Solutions
                </h5>
                <div className="space-y-3">
                  <div className="bg-green-50 p-3 rounded">
                    <div className="font-semibold text-green-700 text-sm mb-1">
                      FINCAD Analytics Suite
                    </div>
                    <p className="text-green-600 text-xs">
                      Monte Carlo capabilities for structured notes and
                      convertible bonds
                    </p>
                  </div>

                  <div className="bg-green-50 p-3 rounded">
                    <div className="font-semibold text-green-700 text-sm mb-1">
                      SuperDerivatives (ICE)
                    </div>
                    <p className="text-green-600 text-xs">
                      Cloud-based Monte Carlo pricing for FX and commodity
                      derivatives
                    </p>
                  </div>

                  <div className="bg-green-50 p-3 rounded">
                    <div className="font-semibold text-green-700 text-sm mb-1">
                      Quantifi Risk Platform
                    </div>
                    <p className="text-green-600 text-xs">
                      Integrated Monte Carlo for trading and risk management
                      workflows
                    </p>
                  </div>

                  <div className="bg-gray-50 p-3 rounded text-xs">
                    <div className="font-semibold text-gray-700 mb-1">
                      Typical Features:
                    </div>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Pre-built exotic option templates</li>
                      <li>• Scenario analysis tools</li>
                      <li>• Greeks via finite differences</li>
                      <li>• Custom payoff designers</li>
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
                      Python: QuantLib + NumPy
                    </div>
                    <p className="text-purple-600 text-xs">
                      Open-source Monte Carlo with GPU acceleration via CuPy
                    </p>
                  </div>

                  <div className="bg-purple-50 p-3 rounded">
                    <div className="font-semibold text-purple-700 text-sm mb-1">
                      MATLAB Financial Toolbox
                    </div>
                    <p className="text-purple-600 text-xs">
                      Built-in Monte Carlo functions with Parallel Computing
                      Toolbox
                    </p>
                  </div>

                  <div className="bg-purple-50 p-3 rounded">
                    <div className="font-semibold text-purple-700 text-sm mb-1">
                      R: RQuantLib + parallel
                    </div>
                    <p className="text-purple-600 text-xs">
                      Statistical analysis focus with distributed computing
                      capabilities
                    </p>
                  </div>

                  <div className="bg-gray-50 p-3 rounded text-xs">
                    <div className="font-semibold text-gray-700 mb-1">
                      Development Use Cases:
                    </div>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Custom exotic derivative pricing</li>
                      <li>• Research and model validation</li>
                      <li>• Backtesting trading strategies</li>
                      <li>• Regulatory stress testing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Implementation Guide */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 p-6 rounded-xl">
            <h4 className="font-bold text-green-800 text-xl mb-6 text-center">
              Step-by-Step Production Implementation Guide
            </h4>

            <div className="space-y-6">
              <div className="bg-white p-5 rounded-lg border border-green-200">
                <h5 className="font-bold text-green-700 mb-4">
                  🚀 Enterprise-Grade Monte Carlo Implementation
                </h5>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-green-50 p-3 rounded">
                      <div className="font-semibold text-green-700 text-sm mb-2">
                        Phase 1: Architecture Design
                      </div>
                      <ul className="text-green-600 text-xs space-y-1">
                        <li>
                          • Choose distributed computing framework (Ray, Dask,
                          Spark)
                        </li>
                        <li>• Design fault-tolerant simulation management</li>
                        <li>• Implement result caching and checkpointing</li>
                        <li>• Set up monitoring and logging infrastructure</li>
                        <li>
                          • Plan for horizontal scaling (cloud auto-scaling)
                        </li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-3 rounded">
                      <div className="font-semibold text-green-700 text-sm mb-2">
                        Phase 2: Core Engine Development
                      </div>
                      <div className="text-green-600 text-xs space-y-1">
                        <div>
                          • Implement high-quality RNG (Mersenne Twister, Sobol)
                        </div>
                        <div>• Build modular stochastic process library</div>
                        <div>• Create payoff function framework</div>
                        <div>• Implement variance reduction techniques</div>
                        <div>
                          • Add convergence monitoring and error estimation
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-green-50 p-3 rounded">
                      <div className="font-semibold text-green-700 text-sm mb-2">
                        Phase 3: Performance Optimization
                      </div>
                      <ul className="text-green-600 text-xs space-y-1">
                        <li>• Vectorize operations with NumPy/CuPy</li>
                        <li>• Implement JIT compilation (Numba)</li>
                        <li>
                          • Add GPU acceleration for embarrassingly parallel
                          tasks
                        </li>
                        <li>• Optimize memory usage and data locality</li>
                        <li>• Profile and eliminate bottlenecks</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-3 rounded">
                      <div className="font-semibold text-green-700 text-sm mb-2">
                        Phase 4: Production Integration
                      </div>
                      <ul className="text-green-600 text-xs space-y-1">
                        <li>• Build REST API for pricing requests</li>
                        <li>• Implement result validation and sanity checks</li>
                        <li>• Add circuit breakers and timeout handling</li>
                        <li>• Create comprehensive test suite</li>
                        <li>• Document parameter choices and assumptions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Method Comparison */}
          <div className="bg-gradient-to-r from-purple-50 to-violet-50 border-2 border-purple-200 p-6 rounded-xl">
            <h4 className="font-bold text-purple-800 text-xl mb-6 text-center">
              Monte Carlo vs Other Methods: Real-World Performance Comparison
            </h4>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
                <thead className="bg-gradient-to-r from-purple-100 to-violet-100">
                  <tr>
                    <th className="border border-gray-300 p-4 text-left font-bold text-gray-800">
                      Option Type
                    </th>
                    <th className="border border-gray-300 p-4 text-center font-bold text-blue-600">
                      Monte Carlo
                    </th>
                    <th className="border border-gray-300 p-4 text-center font-bold text-green-600">
                      Black-Scholes
                    </th>
                    <th className="border border-gray-300 p-4 text-center font-bold text-orange-600">
                      Binomial
                    </th>
                    <th className="border border-gray-300 p-4 text-center font-bold text-purple-600">
                      Best Choice
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-4 font-semibold">
                      European Call/Put
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">
                        Overkill
                      </span>
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                        Perfect
                      </span>
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">
                        Good
                      </span>
                    </td>
                    <td className="border border-gray-300 p-4 text-center text-sm">
                      Black-Scholes
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-gray-25">
                    <td className="border border-gray-300 p-4 font-semibold">
                      American Options
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">
                        Complex
                      </span>
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">
                        N/A
                      </span>
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                        Excellent
                      </span>
                    </td>
                    <td className="border border-gray-300 p-4 text-center text-sm">
                      Binomial
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-4 font-semibold">
                      Asian Options
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                        Ideal
                      </span>
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">
                        N/A
                      </span>
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">
                        Possible
                      </span>
                    </td>
                    <td className="border border-gray-300 p-4 text-center text-sm">
                      Monte Carlo
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-gray-25">
                    <td className="border border-gray-300 p-4 font-semibold">
                      Barrier Options
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                        Excellent
                      </span>
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">
                        Limited
                      </span>
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">
                        Good
                      </span>
                    </td>
                    <td className="border border-gray-300 p-4 text-center text-sm">
                      Monte Carlo
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-4 font-semibold">
                      Multi-Asset Basket
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                        Only Option
                      </span>
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">
                        N/A
                      </span>
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">
                        Impractical
                      </span>
                    </td>
                    <td className="border border-gray-300 p-4 text-center text-sm">
                      Monte Carlo
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-gray-25">
                    <td className="border border-gray-300 p-4 font-semibold">
                      Custom Exotics
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                        Universal
                      </span>
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">
                        Rare
                      </span>
                    </td>
                    <td className="border border-gray-300 p-4 text-center">
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">
                        Limited
                      </span>
                    </td>
                    <td className="border border-gray-300 p-4 text-center text-sm">
                      Monte Carlo
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h5 className="font-semibold text-purple-700 mb-2">
                Method Selection Strategy
              </h5>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="font-semibold text-purple-700 mb-1">
                    Start Simple:
                  </div>
                  <div className="text-purple-600">
                    Use Black-Scholes for vanilla options, upgrade only when
                    necessary for complex features
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-purple-700 mb-1">
                    American Features:
                  </div>
                  <div className="text-purple-600">
                    Binomial trees are optimal for early exercise, Monte Carlo
                    adds unnecessary complexity
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-purple-700 mb-1">
                    Path Dependence:
                  </div>
                  <div className="text-purple-600">
                    Monte Carlo becomes the only practical choice for complex
                    path-dependent payoffs
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Real Trading Applications */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 p-6 rounded-xl">
            <h4 className="font-bold text-amber-800 text-xl mb-6 text-center">
              Real-World Trading Applications
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white p-5 rounded-lg border border-amber-200">
                  <h5 className="font-bold text-amber-700 mb-3">
                    🏗️ Structured Products Trading
                  </h5>
                  <div className="space-y-3 text-sm">
                    <div className="bg-amber-50 p-3 rounded">
                      <div className="font-semibold text-amber-700 mb-2">
                        Auto-Callable Notes:
                      </div>
                      <ul className="text-amber-600 text-xs space-y-1">
                        <li>
                          • Path-dependent barrier monitoring for early
                          redemption
                        </li>
                        <li>
                          • Multi-asset baskets with complex correlation
                          structures
                        </li>
                        <li>• Monte Carlo essential for accurate pricing</li>
                        <li>
                          • Typical simulation: 1M+ paths, variance reduction
                          critical
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-3 rounded">
                      <div className="font-semibold text-gray-700 mb-1">
                        Implementation Challenge:
                      </div>
                      <p className="text-gray-600 text-xs">
                        Real-time pricing during client negotiations requires
                        sub-minute Monte Carlo results for complex payoffs
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-lg border border-amber-200">
                  <h5 className="font-bold text-amber-700 mb-3">
                    🌐 FX and Commodity Exotics
                  </h5>
                  <div className="space-y-3 text-sm">
                    <div className="bg-amber-50 p-3 rounded">
                      <div className="font-semibold text-amber-700 mb-2">
                        Application Examples:
                      </div>
                      <ul className="text-amber-600 text-xs space-y-1">
                        <li>
                          • Asian FX options for corporate hedging programs
                        </li>
                        <li>
                          • Commodity basket options for energy portfolios
                        </li>
                        <li>
                          • Weather derivatives for agricultural exposures
                        </li>
                        <li>• Multi-currency quanto structures</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-3 rounded">
                      <div className="font-semibold text-gray-700 mb-1">
                        Market Reality:
                      </div>
                      <p className="text-gray-600 text-xs">
                        Corporate clients often need custom hedging solutions
                        that don't fit standard option templates
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-lg border border-amber-200">
                  <h5 className="font-bold text-amber-700 mb-3">
                    📊 Risk Management & Stress Testing
                  </h5>
                  <div className="space-y-3 text-sm">
                    <div className="bg-amber-50 p-3 rounded">
                      <div className="font-semibold text-amber-700 mb-2">
                        Regulatory Requirements:
                      </div>
                      <ul className="text-amber-600 text-xs space-y-1">
                        <li>
                          • FRTB (Fundamental Review of Trading Book) stress
                          scenarios
                        </li>
                        <li>
                          • CCAR (Comprehensive Capital Analysis) for large
                          banks
                        </li>
                        <li>• Solvency II capital requirements for insurers</li>
                        <li>
                          • Monte Carlo essential for non-linear portfolios
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-3 rounded">
                      <div className="font-semibold text-gray-700 mb-1">
                        Implementation Scale:
                      </div>
                      <p className="text-gray-600 text-xs">
                        Major banks run millions of scenarios across thousands
                        of risk factors daily for regulatory reporting
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-lg border border-amber-200">
                  <h5 className="font-bold text-amber-700 mb-3">
                    🔬 Model Validation & Research
                  </h5>
                  <div className="space-y-3 text-sm">
                    <div className="bg-amber-50 p-3 rounded">
                      <div className="font-semibold text-amber-700 mb-2">
                        Validation Process:
                      </div>
                      <ul className="text-amber-600 text-xs space-y-1">
                        <li>
                          • Cross-check analytical models against Monte Carlo
                        </li>
                        <li>• Test new stochastic volatility models</li>
                        <li>• Validate exotic option pricing engines</li>
                        <li>
                          • Research alternative variance reduction techniques
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-3 rounded">
                      <div className="font-semibold text-gray-700 mb-1">
                        Quality Assurance:
                      </div>
                      <p className="text-gray-600 text-xs">
                        Monte Carlo serves as the "gold standard" for checking
                        other pricing methods and identifying model bugs
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Best Practices */}
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border-2 border-cyan-200 p-6 rounded-xl">
            <h4 className="font-bold text-cyan-800 text-xl mb-6">
              Production Best Practices for Professional Implementation
            </h4>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg border border-cyan-200">
                <h5 className="font-semibold text-cyan-700 mb-3 text-center">
                  🎯 Accuracy & Reliability
                </h5>
                <ul className="text-cyan-600 text-sm space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      <strong>Sample Size Strategy:</strong> Start with 10K
                      simulations, scale up until convergence stabilizes
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      <strong>Random Number Quality:</strong> Use Mersenne
                      Twister or better, avoid linear congruential generators
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      <strong>Variance Reduction:</strong> Implement antithetic
                      variates and control variates as standard
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      <strong>Confidence Intervals:</strong> Always report error
                      bounds, aim for ±0.1% for production pricing
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      <strong>Cross-Validation:</strong> Compare simple cases
                      with Black-Scholes to verify implementation
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg border border-cyan-200">
                <h5 className="font-semibold text-cyan-700 mb-3 text-center">
                  ⚡ Performance & Scalability
                </h5>
                <ul className="text-cyan-600 text-sm space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      <strong>GPU Acceleration:</strong> Use CuPy or similar for
                      100x+ speedup on large simulations
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      <strong>Distributed Computing:</strong> Implement with Ray
                      or Dask for horizontal scaling
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      <strong>Memory Management:</strong> Stream results to
                      avoid memory overflow on large jobs
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      <strong>Caching Strategy:</strong> Cache intermediate
                      results for similar parameter sets
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      <strong>Load Balancing:</strong> Distribute simulations
                      across available compute resources dynamically
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg border border-cyan-200">
                <h5 className="font-semibold text-cyan-700 mb-3 text-center">
                  🛡️ Production Operations
                </h5>
                <ul className="text-cyan-600 text-sm space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      <strong>Error Handling:</strong> Implement circuit
                      breakers and graceful degradation for failed simulations
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      <strong>Monitoring:</strong> Track simulation performance,
                      convergence rates, and resource utilization
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      <strong>Version Control:</strong> Track model parameters
                      and random seeds for reproducible results
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      <strong>Testing Framework:</strong> Automated testing for
                      regression detection and performance benchmarks
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>
                      <strong>Documentation:</strong> Maintain clear records of
                      assumptions, parameters, and validation results
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Modern Evolution */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200 p-6 rounded-xl">
            <h4 className="font-bold text-indigo-800 text-xl mb-6">
              Modern Evolution & Cutting-Edge Applications
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-indigo-200">
                  <h5 className="font-semibold text-indigo-700 mb-3">
                    🤖 AI & Machine Learning Integration
                  </h5>
                  <div className="space-y-2 text-sm">
                    <div className="bg-indigo-50 p-3 rounded">
                      <div className="font-semibold text-indigo-700 mb-1">
                        Neural Network Acceleration
                      </div>
                      <p className="text-indigo-600 text-xs">
                        Deep learning models learn to approximate Monte Carlo
                        results with 1000x speedup for repeated similar
                        calculations
                      </p>
                    </div>

                    <div className="bg-indigo-50 p-3 rounded">
                      <div className="font-semibold text-indigo-700 mb-1">
                        Adaptive Sampling
                      </div>
                      <p className="text-indigo-600 text-xs">
                        ML algorithms dynamically adjust simulation parameters
                        based on convergence patterns and importance sampling
                      </p>
                    </div>

                    <div className="bg-indigo-50 p-3 rounded">
                      <div className="font-semibold text-indigo-700 mb-1">
                        Automated Variance Reduction
                      </div>
                      <p className="text-indigo-600 text-xs">
                        AI selects optimal control variates and importance
                        sampling distributions automatically
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-indigo-200">
                  <h5 className="font-semibold text-indigo-700 mb-3">
                    ☁️ Cloud-Native Architecture
                  </h5>
                  <div className="space-y-2 text-sm">
                    <div className="bg-indigo-50 p-3 rounded">
                      <div className="font-semibold text-indigo-700 mb-1">
                        Serverless Computing
                      </div>
                      <p className="text-indigo-600 text-xs">
                        AWS Lambda, Google Cloud Functions enable
                        pay-per-simulation pricing with automatic scaling
                      </p>
                    </div>

                    <div className="bg-indigo-50 p-3 rounded">
                      <div className="font-semibold text-indigo-700 mb-1">
                        Container Orchestration
                      </div>
                      <p className="text-indigo-600 text-xs">
                        Kubernetes enables fault-tolerant distributed Monte
                        Carlo with automatic resource management
                      </p>
                    </div>

                    <div className="bg-indigo-50 p-3 rounded">
                      <div className="font-semibold text-indigo-700 mb-1">
                        Edge Computing
                      </div>
                      <p className="text-indigo-600 text-xs">
                        Regional compute nodes reduce latency for real-time
                        exotic option pricing in global markets
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-indigo-200">
                  <h5 className="font-semibold text-indigo-700 mb-3">
                    🌐 Emerging Asset Classes
                  </h5>
                  <div className="space-y-2 text-sm">
                    <div className="bg-indigo-50 p-3 rounded">
                      <div className="font-semibold text-indigo-700 mb-1">
                        Cryptocurrency Derivatives
                      </div>
                      <p className="text-indigo-600 text-xs">
                        24/7 markets with extreme volatility require
                        sophisticated Monte Carlo models with jump-diffusion
                        processes
                      </p>
                    </div>

                    <div className="bg-indigo-50 p-3 rounded">
                      <div className="font-semibold text-indigo-700 mb-1">
                        ESG and Carbon Derivatives
                      </div>
                      <p className="text-indigo-600 text-xs">
                        Environmental credit options and sustainability-linked
                        derivatives with complex regulatory dependencies
                      </p>
                    </div>

                    <div className="bg-indigo-50 p-3 rounded">
                      <div className="font-semibold text-indigo-700 mb-1">
                        Alternative Data Integration
                      </div>
                      <p className="text-indigo-600 text-xs">
                        Satellite imagery, social media sentiment, and IoT data
                        feeds incorporated into stochastic models
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-indigo-200">
                  <h5 className="font-semibold text-indigo-700 mb-3">
                    🔮 Future Technologies
                  </h5>
                  <div className="space-y-2 text-sm">
                    <div className="bg-indigo-50 p-3 rounded">
                      <div className="font-semibold text-indigo-700 mb-1">
                        Quantum Computing
                      </div>
                      <p className="text-indigo-600 text-xs">
                        Quantum advantage for certain types of Monte Carlo
                        simulations, particularly in optimization and sampling
                      </p>
                    </div>

                    <div className="bg-indigo-50 p-3 rounded">
                      <div className="font-semibold text-indigo-700 mb-1">
                        Neuromorphic Chips
                      </div>
                      <p className="text-indigo-600 text-xs">
                        Specialized hardware designed for stochastic computing
                        with ultra-low power consumption
                      </p>
                    </div>

                    <div className="bg-indigo-50 p-3 rounded">
                      <div className="font-semibold text-indigo-700 mb-1">
                        Real-Time Adaptive Models
                      </div>
                      <p className="text-indigo-600 text-xs">
                        Models that automatically adjust parameters based on
                        streaming market data and regime changes
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
              Key Takeaways for Professional Implementation
            </h4>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg border border-emerald-200">
                <h5 className="font-semibold text-emerald-700 mb-3">
                  ✅ Monte Carlo's Indispensable Role
                </h5>
                <ul className="text-emerald-600 text-sm space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>
                      <strong>Complex Derivatives:</strong> The only practical
                      method for many exotic options and structured products
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>
                      <strong>Risk Management:</strong> Essential for regulatory
                      stress testing and portfolio scenario analysis
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>
                      <strong>Model Validation:</strong> Gold standard for
                      cross-checking analytical models and measuring confidence
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>
                      <strong>Innovation:</strong> Enables pricing of previously
                      impossible derivative structures
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg border border-emerald-200">
                <h5 className="font-semibold text-emerald-700 mb-3">
                  🚀 Implementation Success Factors
                </h5>
                <ul className="text-emerald-600 text-sm space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>
                      <strong>Start with Quality:</strong> Invest in proper
                      random number generators and variance reduction from day
                      one
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>
                      <strong>Scale Strategically:</strong> Use GPU acceleration
                      and cloud computing to overcome speed limitations
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>
                      <strong>Validate Rigorously:</strong> Always cross-check
                      results with simpler models and market observations
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>
                      <strong>Document Everything:</strong> Track assumptions,
                      parameters, and convergence for reproducible results
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-emerald-50 p-4 rounded-lg border border-emerald-200">
              <h5 className="font-semibold text-emerald-700 mb-2">
                The Future of Monte Carlo in Finance
              </h5>
              <p className="text-emerald-600 text-sm">
                Monte Carlo simulation has evolved from a computationally
                expensive last resort to an efficient, scalable solution for
                complex derivatives pricing. Modern implementations with GPU
                acceleration, machine learning optimization, and cloud-native
                architecture have largely solved the traditional speed and cost
                concerns. As financial markets continue to innovate with
                increasingly complex products—from crypto derivatives to
                ESG-linked structures—Monte Carlo remains the most flexible and
                reliable pricing method available. The key to success is not
                avoiding Monte Carlo due to historical limitations, but
                embracing modern implementation techniques that unlock its full
                potential.
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
              <span className="text-gray-700">Monte Carlo Model</span>
            </nav>

            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  Monte Carlo Model
                </h1>
                <p className="text-xl text-gray-600">
                  Simulation-based approach for complex derivatives pricing
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
                <span>50 min read</span>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50 p-4 mb-8">
            <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
              <span>Lesson Progress</span>
              <span>7 of 7 lessons</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full"
                style={{ width: "100%" }}
              ></div>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="bg-gradient-to-r from-purple-600 to-violet-600 text-white p-6 rounded-xl mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2 pr-4">
                  Experience Monte Carlo with OptiPrice
                </h3>
                <p className="text-purple-100">
                  Run thousands of simulations and see convergence in action for
                  complex options.
                </p>
                <p className="text-purple-100 pr-4">
                  Compare simulation results with analytical Black-Scholes and
                  binomial models.
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
              onClick={() => navigate("/learning/options/binomial")}
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
              <span>Back: Binomial Model</span>
            </button>

            <div className="flex items-center space-x-2 text-gray-600">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-green-600 font-medium">
                Course Complete!
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonteCarloOptions;
