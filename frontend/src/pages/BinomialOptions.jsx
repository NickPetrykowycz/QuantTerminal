// frontend/src/pages/BinomialOptions.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import { useAuth } from "../contexts/AuthContext";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const BinomialOptions = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("foundation");

  // Interactive Binomial Tree SVG Component
  const BinomialTreeChart = () => {
    const [animationPhase, setAnimationPhase] = useState(0);

    React.useEffect(() => {
      const timer = setInterval(() => {
        setAnimationPhase((prev) => (prev + 1) % 4);
      }, 2500);
      return () => clearInterval(timer);
    }, []);

    // Sample values for demonstration
    const S0 = 100;
    const u = 1.15;
    const d = 0.87;
    const K = 105;
    const steps = 3;

    // Calculate positions
    const nodeRadius = 16;
    const levelSpacing = 140;
    const nodeSpacing = 70;
    const startX = 80;
    const startY = 200;

    const getNodePosition = (step, upMoves) => ({
      x: startX + step * levelSpacing,
      y: startY + (step - 2 * upMoves) * nodeSpacing,
    });

    const getStockPrice = (step, upMoves) => {
      const downMoves = step - upMoves;
      return S0 * Math.pow(u, upMoves) * Math.pow(d, downMoves);
    };

    const getOptionValue = (stockPrice) => {
      return Math.max(stockPrice - K, 0);
    };

    return (
      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-200 p-6 rounded-xl">
        <h4 className="text-xl font-bold text-purple-800 mb-4 text-center">
          Interactive Binomial Tree Visualization
        </h4>
        <div className="flex justify-center mb-4">
          <svg width="600" height="400" viewBox="0 0 600 400">
            {/* Background */}
            <defs>
              <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#faf5ff" />
                <stop offset="100%" stopColor="#f3e8ff" />
              </linearGradient>
              <linearGradient id="nodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#6d28d9" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <rect width="600" height="400" fill="url(#bgGrad)" rx="10" />

            {/* Draw connections first */}
            {Array.from({ length: steps }, (_, step) =>
              Array.from({ length: step + 1 }, (_, upMoves) => {
                if (step < steps) {
                  const currentPos = getNodePosition(step, upMoves);
                  const upPos = getNodePosition(step + 1, upMoves + 1);
                  const downPos = getNodePosition(step + 1, upMoves);

                  const lineOpacity = animationPhase >= 1 ? 1 : 0.2;

                  return (
                    <g key={`lines-${step}-${upMoves}`}>
                      {/* Up move line */}
                      <line
                        x1={currentPos.x + nodeRadius}
                        y1={currentPos.y}
                        x2={upPos.x - nodeRadius}
                        y2={upPos.y}
                        stroke="#7c3aed"
                        strokeWidth="3"
                        opacity={lineOpacity}
                        strokeDasharray={animationPhase >= 1 ? "0" : "5,5"}
                      />
                      {/* Up move label */}
                      <text
                        x={(currentPos.x + upPos.x) / 2}
                        y={(currentPos.y + upPos.y) / 2 - 8}
                        textAnchor="middle"
                        className="text-xs font-semibold fill-purple-700"
                        opacity={animationPhase >= 2 ? 1 : 0}
                      >
                        u
                      </text>

                      {/* Down move line */}
                      <line
                        x1={currentPos.x + nodeRadius}
                        y1={currentPos.y}
                        x2={downPos.x - nodeRadius}
                        y2={downPos.y}
                        stroke="#7c3aed"
                        strokeWidth="3"
                        opacity={lineOpacity}
                        strokeDasharray={animationPhase >= 1 ? "0" : "5,5"}
                      />
                      {/* Down move label */}
                      <text
                        x={(currentPos.x + downPos.x) / 2}
                        y={(currentPos.y + downPos.y) / 2 + 15}
                        textAnchor="middle"
                        className="text-xs font-semibold fill-purple-700"
                        opacity={animationPhase >= 2 ? 1 : 0}
                      >
                        d
                      </text>
                    </g>
                  );
                }
                return null;
              }),
            )}

            {/* Draw nodes */}
            {Array.from({ length: steps + 1 }, (_, step) =>
              Array.from({ length: step + 1 }, (_, upMoves) => {
                const pos = getNodePosition(step, upMoves);
                const stockPrice = getStockPrice(step, upMoves);
                const optionValue =
                  step === steps ? getOptionValue(stockPrice) : null;

                const nodeOpacity =
                  animationPhase >= (step === 0 ? 0 : 1) ? 1 : 0.3;
                const isGlowing = animationPhase === 3 && step === steps;

                return (
                  <g key={`node-${step}-${upMoves}`}>
                    {/* Node circle */}
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r={nodeRadius}
                      fill="url(#nodeGrad)"
                      stroke="#5b21b6"
                      strokeWidth="2"
                      opacity={nodeOpacity}
                      filter={isGlowing ? "url(#glow)" : "none"}
                    />

                    {/* Stock price label */}
                    <text
                      x={pos.x}
                      y={pos.y - 28}
                      textAnchor="middle"
                      className="text-sm font-bold fill-purple-800"
                      opacity={nodeOpacity}
                    >
                      ${stockPrice.toFixed(1)}
                    </text>

                    {/* Option value for terminal nodes */}
                    {optionValue !== null && (
                      <text
                        x={pos.x}
                        y={pos.y + 40}
                        textAnchor="middle"
                        className="text-sm font-bold fill-green-600"
                        opacity={animationPhase >= 3 ? 1 : 0}
                      >
                        ${optionValue.toFixed(1)}
                      </text>
                    )}

                    {/* Question mark for intermediate nodes during calculation phase */}
                    {step < steps && animationPhase >= 2 && (
                      <text
                        x={pos.x}
                        y={pos.y + 5}
                        textAnchor="middle"
                        className="text-sm font-bold fill-white"
                      >
                        ?
                      </text>
                    )}
                  </g>
                );
              }),
            )}

            {/* Time labels */}
            <text
              x={startX}
              y="30"
              className="text-sm font-semibold fill-purple-800"
              textAnchor="middle"
            >
              t = 0
            </text>
            <text
              x={startX + levelSpacing}
              y="30"
              className="text-sm font-semibold fill-purple-800"
              textAnchor="middle"
            >
              t = 1
            </text>
            <text
              x={startX + 2 * levelSpacing}
              y="30"
              className="text-sm font-semibold fill-purple-800"
              textAnchor="middle"
            >
              t = 2
            </text>
            <text
              x={startX + 3 * levelSpacing}
              y="30"
              className="text-sm font-semibold fill-purple-800"
              textAnchor="middle"
            >
              t = T
            </text>

            {/* Arrow showing backward calculation */}
            {animationPhase === 3 && (
              <g>
                <path
                  d={`M ${startX + 3 * levelSpacing - 30} 350 L ${startX + 30} 350`}
                  stroke="#ef4444"
                  strokeWidth="3"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                />
                <defs>
                  <marker
                    id="arrowhead"
                    markerWidth="10"
                    markerHeight="7"
                    refX="9"
                    refY="3.5"
                    orient="auto"
                  >
                    <polygon points="0 0, 10 3.5, 0 7" fill="#ef4444" />
                  </marker>
                </defs>
                <text
                  x="300"
                  y="340"
                  textAnchor="middle"
                  className="text-sm font-bold fill-red-500"
                >
                  Backward Calculation
                </text>
              </g>
            )}

            {/* Legend */}
            <g transform="translate(450, 320)">
              <rect
                x="0"
                y="0"
                width="140"
                height="75"
                fill="white"
                stroke="#d1d5db"
                rx="5"
                opacity="0.9"
              />
              <text
                x="70"
                y="15"
                textAnchor="middle"
                className="text-xs font-bold fill-gray-700"
              >
                Animation Phases
              </text>
              <text x="5" y="30" className="text-xs fill-gray-600">
                1. Build tree structure
              </text>
              <text x="5" y="45" className="text-xs fill-gray-600">
                2. Show up/down moves
              </text>
              <text x="5" y="60" className="text-xs fill-gray-600">
                3. Calculate option values
              </text>
            </g>
          </svg>
        </div>
        <div className="text-center text-sm text-gray-600">
          <p className="mb-2">
            <strong>u = {u}</strong> (up factor), <strong>d = {d}</strong> (down
            factor), <strong>Strike = ${K}</strong>
          </p>
          <p>
            Watch how the tree builds forward in time, then option values are
            calculated backward from expiration.
          </p>
        </div>
      </div>
    );
  };

  const tabContent = {
    foundation: {
      title: "The Binomial Options Revolution",
      content: (
        <div className="space-y-8">
          <div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              The <strong>Binomial Options Pricing Model</strong>, developed by
              John C. Cox, Stephen A. Ross, and Mark Rubinstein in 1979,
              revolutionized derivatives pricing by providing an intuitive,
              discrete-time framework that converges to the Black-Scholes model.
              Unlike continuous-time models, the binomial approach uses simple
              binary price movements, making it both pedagogically powerful and
              practically flexible.
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
                  <h4 className="font-bold mb-2">Educational Foundation</h4>
                  <p>
                    The binomial model is the gold standard for teaching option
                    pricing because it demonstrates fundamental concepts through
                    simple arithmetic rather than advanced calculus. It clearly
                    shows risk-neutral valuation, dynamic hedging, and the law
                    of one price in action.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <BinomialTreeChart />

          <div className="bg-gradient-to-r from-emerald-50 to-green-50 border-2 border-emerald-200 p-6 rounded-xl">
            <h4 className="font-bold text-emerald-800 text-xl mb-4">
              Revolutionary Breakthrough: 1979
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-emerald-700 mb-3">
                  Conceptual Innovation
                </h5>
                <ul className="text-emerald-600 text-sm space-y-2">
                  <li>
                    • <strong>Discrete approximation:</strong> Simple up/down
                    price movements
                  </li>
                  <li>
                    • <strong>Risk-neutral world:</strong> Elegant probability
                    adjustment
                  </li>
                  <li>
                    • <strong>Backward induction:</strong> Recursive option
                    valuation
                  </li>
                  <li>
                    • <strong>Convergence proof:</strong> Approaches
                    Black-Scholes as n → ∞
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-emerald-700 mb-3">
                  Practical Advantages
                </h5>
                <ul className="text-emerald-600 text-sm space-y-2">
                  <li>
                    • <strong>American options:</strong> Handles early exercise
                    naturally
                  </li>
                  <li>
                    • <strong>Dividend flexibility:</strong> Incorporates
                    discrete payments
                  </li>
                  <li>
                    • <strong>Path dependence:</strong> Barrier and exotic
                    options
                  </li>
                  <li>
                    • <strong>Visual intuition:</strong> Tree structure shows
                    all possibilities
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 p-6 rounded-xl">
            <h4 className="font-bold text-amber-800 text-xl mb-4">
              Market Impact & Evolution
            </h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-amber-200 text-center">
                <div className="text-2xl font-bold text-amber-700 mb-2">
                  1979
                </div>
                <h5 className="font-semibold text-amber-700 mb-2">
                  Model Birth
                </h5>
                <p className="text-gray-600 text-sm">
                  Cox-Ross-Rubinstein publish the binomial framework
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-amber-200 text-center">
                <div className="text-2xl font-bold text-amber-700 mb-2">
                  1980s
                </div>
                <h5 className="font-semibold text-amber-700 mb-2">
                  Computing Era
                </h5>
                <p className="text-gray-600 text-sm">
                  Personal computers make multi-step trees practical
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-amber-200 text-center">
                <div className="text-2xl font-bold text-amber-700 mb-2">
                  Today
                </div>
                <h5 className="font-semibold text-amber-700 mb-2">
                  Global Standard
                </h5>
                <p className="text-gray-600 text-sm">
                  Primary teaching and pricing tool worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    formula: {
      title: "Binomial Pricing Formulas & Mathematical Framework",
      content: (
        <div className="space-y-8">
          <div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              The binomial model builds option values recursively using
              risk-neutral probabilities and backward induction. The mathematics
              is elegant yet simple, requiring only basic algebra while
              capturing sophisticated pricing dynamics.
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-violet-50 border-2 border-purple-200 p-8 rounded-xl">
            <h4 className="font-bold text-purple-800 text-xl mb-6 text-center">
              Core Binomial Formulas
            </h4>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-purple-200">
                <h5 className="font-semibold text-purple-700 mb-4 text-center">
                  Risk-Neutral Probability
                </h5>
                <div className="text-center bg-purple-50 p-4 rounded text-lg mb-4">
                  <BlockMath math="p = \frac{e^{r\Delta t} - d}{u - d}" />
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-purple-600 text-sm">
                  <div>
                    <p>
                      <strong>Where:</strong> u = up factor, d = down factor
                    </p>
                    <p>
                      <strong>Range:</strong> 0 &lt; p &lt; 1 (ensures no
                      arbitrage)
                    </p>
                  </div>
                  <div>
                    <p>
                      <strong>Intuition:</strong> Probability that makes
                      expected return = r
                    </p>
                    <p>
                      <strong>Note:</strong> Independent of actual stock return
                      expectations
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-purple-200">
                <h5 className="font-semibold text-purple-700 mb-4 text-center">
                  Backward Induction Formula
                </h5>
                <div className="text-center bg-purple-50 p-4 rounded text-lg mb-4">
                  <BlockMath math="C = e^{-r\Delta t}[p \cdot C_u + (1-p) \cdot C_d]" />
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-purple-600 text-sm">
                  <div>
                    <p>
                      <strong>C:</strong> Current option value
                    </p>
                    <p>
                      <strong>C_u:</strong> Option value if stock goes up
                    </p>
                  </div>
                  <div>
                    <p>
                      <strong>C_d:</strong> Option value if stock goes down
                    </p>
                    <p>
                      <strong>Process:</strong> Work backward from expiration
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-purple-200">
                <h5 className="font-semibold text-purple-700 mb-4 text-center">
                  Up and Down Factors
                </h5>
                <div className="grid md:grid-cols-2 gap-4 text-center">
                  <div className="bg-purple-50 p-3 rounded">
                    <BlockMath math="u = e^{\sigma\sqrt{\Delta t}}" />
                    <p className="text-xs text-purple-600 mt-2">
                      Up factor (multiplicative increase)
                    </p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded">
                    <BlockMath math="d = e^{-\sigma\sqrt{\Delta t}} = \frac{1}{u}" />
                    <p className="text-xs text-purple-600 mt-2">
                      Down factor (multiplicative decrease)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 p-6 rounded-xl">
            <h4 className="font-bold text-blue-800 text-xl mb-4">
              Multi-Period European Option
            </h4>
            <div className="bg-white p-6 rounded-lg border border-blue-200">
              <h5 className="font-semibold text-blue-700 mb-4 text-center">
                Closed-Form Solution
              </h5>
              <div className="text-center bg-blue-50 p-4 rounded text-lg mb-4">
                <BlockMath math="C = e^{-rT} \sum_{j=0}^{n} \binom{n}{j} p^j (1-p)^{n-j} \max(S_0 u^j d^{n-j} - K, 0)" />
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-blue-600 text-sm">
                <div>
                  <p>
                    <strong>Binomial coefficient:</strong>{" "}
                    <InlineMath math="\binom{n}{j}" /> = paths to j up moves
                  </p>
                  <p>
                    <strong>Stock price:</strong>{" "}
                    <InlineMath math="S_0 u^j d^{n-j}" /> after j ups, (n-j)
                    downs
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Probability weight:</strong>{" "}
                    <InlineMath math="p^j (1-p)^{n-j}" /> for specific path
                  </p>
                  <p>
                    <strong>Payoff:</strong> max(S_T - K, 0) for call options
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 p-6 rounded-xl">
            <h4 className="font-bold text-green-800 text-xl mb-4">
              Parameter Selection & Calibration
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg border border-green-200">
                <h5 className="font-semibold text-green-700 mb-3">
                  Standard Parameterization
                </h5>
                <div className="space-y-3">
                  <div className="bg-green-50 p-3 rounded">
                    <InlineMath math="\Delta t = \frac{T}{n}" />
                    <p className="text-xs text-green-600 mt-1">
                      Time step length
                    </p>
                  </div>
                  <div className="bg-green-50 p-3 rounded">
                    <InlineMath math="u \cdot d = 1" />
                    <p className="text-xs text-green-600 mt-1">
                      Symmetric moves condition
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg border border-green-200">
                <h5 className="font-semibold text-green-700 mb-3">
                  Convergence Properties
                </h5>
                <div className="space-y-3">
                  <div className="bg-green-50 p-3 rounded">
                    <InlineMath math="\lim_{n \to \infty} C_{binomial} = C_{BS}" />
                    <p className="text-xs text-green-600 mt-1">
                      Converges to Black-Scholes
                    </p>
                  </div>
                  <div className="bg-green-50 p-3 rounded">
                    <InlineMath math="Error \propto \frac{1}{\sqrt{n}}" />
                    <p className="text-xs text-green-600 mt-1">
                      Rate of convergence
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-yellow-200 p-6 rounded-xl">
            <h4 className="font-bold text-yellow-800 text-xl mb-4">
              Parameter Definitions
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center space-x-3">
                <InlineMath math="S_0" />
                <span className="text-yellow-700">Current stock price</span>
              </div>
              <div className="flex items-center space-x-3">
                <InlineMath math="K" />
                <span className="text-yellow-700">Strike price</span>
              </div>
              <div className="flex items-center space-x-3">
                <InlineMath math="T" />
                <span className="text-yellow-700">Time to expiration</span>
              </div>
              <div className="flex items-center space-x-3">
                <InlineMath math="r" />
                <span className="text-yellow-700">Risk-free rate</span>
              </div>
              <div className="flex items-center space-x-3">
                <InlineMath math="\sigma" />
                <span className="text-yellow-700">Volatility</span>
              </div>
              <div className="flex items-center space-x-3">
                <InlineMath math="n" />
                <span className="text-yellow-700">Number of steps</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    implementation: {
      title: "Python Implementation & Practical Coding",
      content: (
        <div className="space-y-8">
          <div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              The binomial model's discrete structure makes it ideal for
              programming. Below are clean, efficient Python implementations
              that demonstrate both basic and vectorized approaches.
            </p>
          </div>

          <div className="bg-gradient-to-r from-gray-50 to-slate-50 border-2 border-gray-200 p-6 rounded-xl">
            <h4 className="font-bold text-gray-800 text-xl mb-4">
              Basic Implementation
            </h4>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`import math

def binomial_option(S0, K, T, r, sigma, n, option_type='call'):
    """
    Price European option using binomial tree
    
    Parameters:
    S0: Current stock price
    K: Strike price  
    T: Time to expiration (years)
    r: Risk-free rate
    sigma: Volatility
    n: Number of time steps
    option_type: 'call' or 'put'
    """
    # Calculate parameters
    dt = T / n
    u = math.exp(sigma * math.sqrt(dt))
    d = 1 / u
    p = (math.exp(r * dt) - d) / (u - d)
    discount = math.exp(-r * dt)
    
    # Initialize option values at expiration
    option_values = []
    for j in range(n + 1):
        # Stock price at expiration
        S_T = S0 * (u ** (n - j)) * (d ** j)
        
        # Option payoff
        if option_type == 'call':
            payoff = max(S_T - K, 0)
        else:  # put
            payoff = max(K - S_T, 0)
            
        option_values.append(payoff)
    
    # Work backward through the tree
    for i in range(n - 1, -1, -1):
        new_values = []
        for j in range(i + 1):
            # Calculate option value using risk-neutral expectation
            value = discount * (p * option_values[j] + (1 - p) * option_values[j + 1])
            new_values.append(value)
        option_values = new_values
    
    return option_values[0]
`}</pre>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 p-6 rounded-xl">
            <h4 className="font-bold text-blue-800 text-xl mb-4">
              Vectorized Implementation
            </h4>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`import numpy as np

def binomial_vectorized(S0, K, T, r, sigma, n, option_type='call'):
    """
    Fast vectorized binomial option pricing using NumPy
    """
    # Calculate parameters
    dt = T / n
    u = np.exp(sigma * np.sqrt(dt))
    d = 1 / u
    p = (np.exp(r * dt) - d) / (u - d)
    discount = np.exp(-r * dt)
    
    # Stock prices at expiration (vectorized)
    j = np.arange(n + 1)
    S_T = S0 * (u ** (n - j)) * (d ** j)
    
    # Option payoffs at expiration
    if option_type == 'call':
        payoffs = np.maximum(S_T - K, 0)
    else:  # put
        payoffs = np.maximum(K - S_T, 0)
    
    # Backward induction (vectorized)
    for i in range(n):
        payoffs = discount * (p * payoffs[:-1] + (1 - p) * payoffs[1:])
    
    return payoffs[0]

# Performance comparison
import time

# Time basic implementation
start = time.time()
basic_result = binomial_option(100, 105, 1, 0.05, 0.2, 1000, 'call')
basic_time = time.time() - start

# Time vectorized implementation  
start = time.time()
vectorized_result = binomial_vectorized(100, 105, 1, 0.05, 0.2, 1000, 'call')
vectorized_time = time.time() - start
`}</pre>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 p-6 rounded-xl">
            <h4 className="font-bold text-green-800 text-xl mb-4">
              American Options Extension
            </h4>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`def binomial_american(S0, K, T, r, sigma, n, option_type='call'):
    """
    American option pricing with early exercise
    """
    dt = T / n
    u = np.exp(sigma * np.sqrt(dt))
    d = 1 / u
    p = (np.exp(r * dt) - d) / (u - d)
    discount = np.exp(-r * dt)
    
    # Build stock price tree
    stock_tree = np.zeros((n + 1, n + 1))
    for i in range(n + 1):
        for j in range(i + 1):
            stock_tree[i, j] = S0 * (u ** (i - j)) * (d ** j)
    
    # Option values at expiration
    if option_type == 'call':
        option_tree = np.maximum(stock_tree - K, 0)
    else:
        option_tree = np.maximum(K - stock_tree, 0)
    
    # Backward induction with early exercise check
    for i in range(n - 1, -1, -1):
        for j in range(i + 1):
            # Continuation value
            continuation = discount * (
                p * option_tree[i + 1, j] + (1 - p) * option_tree[i + 1, j + 1]
            )
            
            # Intrinsic value (immediate exercise)
            if option_type == 'call':
                intrinsic = max(stock_tree[i, j] - K, 0)
            else:
                intrinsic = max(K - stock_tree[i, j], 0)
            
            # American option value is max of continuation and intrinsic
            option_tree[i, j] = max(continuation, intrinsic)
    
    return option_tree[0, 0]

# Compare European vs American
european_put = binomial_option(100, 105, 1, 0.05, 0.2, 100, 'put')
american_put = binomial_american(100, 105, 1, 0.05, 0.2, 100, 'put')
`}</pre>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-violet-50 border-2 border-purple-200 p-6 rounded-xl">
            <h4 className="font-bold text-purple-800 text-xl mb-4">
              Implementation Tips & Best Practices
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-purple-700 mb-3">
                  Performance Optimization
                </h5>
                <ul className="text-purple-600 text-sm space-y-2">
                  <li>
                    • <strong>NumPy vectorization:</strong> 10-100x faster than
                    loops
                  </li>
                  <li>
                    • <strong>Memory efficiency:</strong> Only store current and
                    next periods
                  </li>
                  <li>
                    • <strong>Step selection:</strong> n=100-500 usually
                    sufficient
                  </li>
                  <li>
                    • <strong>Convergence:</strong> Check Richardson
                    extrapolation
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-purple-700 mb-3">
                  Numerical Stability
                </h5>
                <ul className="text-purple-600 text-sm space-y-2">
                  <li>
                    • <strong>Parameter bounds:</strong> Ensure 0 &lt; p &lt; 1
                  </li>
                  <li>
                    • <strong>Extreme volatility:</strong> Use more steps for
                    high σ
                  </li>
                  <li>
                    • <strong>Very short expiry:</strong> Avoid Δt too small
                  </li>
                  <li>
                    • <strong>Deep ITM/OTM:</strong> Consider numerical
                    precision
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    assumptions: {
      title: "Model Assumptions & Limitations",
      content: (
        <div className="space-y-8">
          <div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Like all financial models, the binomial approach relies on
              specific assumptions about market behavior. Understanding these
              assumptions is crucial for proper application and recognizing when
              the model may break down in practice.
            </p>
          </div>

          <div className="bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 p-6 rounded-xl">
            <h4 className="font-bold text-red-800 text-xl mb-4">
              Core Assumptions
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-red-700 mb-3">
                  Market Structure
                </h5>
                <ul className="text-red-600 text-sm space-y-2">
                  <li>
                    • <strong>Constant parameters:</strong> Risk-free rate and
                    volatility remain fixed
                  </li>
                  <li>
                    • <strong>No transaction costs:</strong> Frictionless
                    trading environment
                  </li>
                  <li>
                    • <strong>Perfect liquidity:</strong> Can trade any amount
                    instantly
                  </li>
                  <li>
                    • <strong>No bid-ask spreads:</strong> Single price for
                    buying and selling
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-red-700 mb-3">
                  Stock Price Behavior
                </h5>
                <ul className="text-red-600 text-sm space-y-2">
                  <li>
                    • <strong>Geometric Brownian motion:</strong> Log-normal
                    price distribution
                  </li>
                  <li>
                    • <strong>No jumps:</strong> Continuous price movements only
                  </li>
                  <li>
                    • <strong>Constant volatility:</strong> No volatility
                    clustering or regime changes
                  </li>
                  <li>
                    • <strong>Independent increments:</strong> No momentum or
                    mean reversion
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-yellow-200 p-6 rounded-xl">
            <h4 className="font-bold text-yellow-800 text-xl mb-4">
              Real-World Violations & Impact
            </h4>

            <div className="overflow-x-auto">
              <table className="w-full table-auto border-collapse">
                <thead>
                  <tr className="bg-yellow-100">
                    <th className="border border-yellow-300 p-4 text-left font-bold text-yellow-800">
                      Assumption
                    </th>
                    <th className="border border-yellow-300 p-4 text-left font-bold text-yellow-800">
                      Reality
                    </th>
                    <th className="border border-yellow-300 p-4 text-left font-bold text-yellow-800">
                      Impact on Pricing
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="hover:bg-yellow-50">
                    <td className="border border-yellow-300 p-4 font-semibold">
                      Constant Volatility
                    </td>
                    <td className="border border-yellow-300 p-4">
                      Volatility clusters and changes over time
                    </td>
                    <td className="border border-yellow-300 p-4">
                      Volatility smile/skew effects
                    </td>
                  </tr>
                  <tr className="hover:bg-yellow-50">
                    <td className="border border-yellow-300 p-4 font-semibold">
                      No Transaction Costs
                    </td>
                    <td className="border border-yellow-300 p-4">
                      Bid-ask spreads, commissions, market impact
                    </td>
                    <td className="border border-yellow-300 p-4">
                      Overestimates hedge efficiency
                    </td>
                  </tr>
                  <tr className="hover:bg-yellow-50">
                    <td className="border border-yellow-300 p-4 font-semibold">
                      Continuous Trading
                    </td>
                    <td className="border border-yellow-300 p-4">
                      Markets close, gaps occur
                    </td>
                    <td className="border border-yellow-300 p-4">
                      Jump risk not captured
                    </td>
                  </tr>
                  <tr className="hover:bg-yellow-50">
                    <td className="border border-yellow-300 p-4 font-semibold">
                      Perfect Liquidity
                    </td>
                    <td className="border border-yellow-300 p-4">
                      Liquidity varies, market impact exists
                    </td>
                    <td className="border border-yellow-300 p-4">
                      Underprices illiquid options
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 p-6 rounded-xl">
            <h4 className="font-bold text-blue-800 text-xl mb-4">
              Model Improvements & Extensions
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-blue-700 mb-3">
                  Advanced Binomial Models
                </h5>
                <ul className="text-blue-600 text-sm space-y-2">
                  <li>
                    • <strong>Trinomial trees:</strong> Add middle branch for
                    better convergence
                  </li>
                  <li>
                    • <strong>Time-varying parameters:</strong> Different σ and
                    r at each node
                  </li>
                  <li>
                    • <strong>Jump-diffusion:</strong> Incorporate rare large
                    price moves
                  </li>
                  <li>
                    • <strong>Regime switching:</strong> Multiple volatility
                    states
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-blue-700 mb-3">
                  Practical Adjustments
                </h5>
                <ul className="text-blue-600 text-sm space-y-2">
                  <li>
                    • <strong>Implied volatility:</strong> Use market-derived
                    volatility
                  </li>
                  <li>
                    • <strong>Transaction cost adjustments:</strong> Widen
                    bid-ask spreads
                  </li>
                  <li>
                    • <strong>Discrete dividends:</strong> Model actual dividend
                    schedule
                  </li>
                  <li>
                    • <strong>Early exercise boundaries:</strong> Optimal
                    stopping analysis
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 p-6 rounded-xl">
            <h4 className="font-bold text-green-800 text-xl mb-4">
              When to Use Binomial vs. Other Models
            </h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-green-200">
                <h5 className="font-semibold text-green-700 mb-2">
                  Best Use Cases
                </h5>
                <ul className="text-green-600 text-xs space-y-1">
                  <li>• American options</li>
                  <li>• Discrete dividends</li>
                  <li>• Path-dependent payoffs</li>
                  <li>• Educational purposes</li>
                  <li>• Time-varying parameters</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg border border-green-200">
                <h5 className="font-semibold text-green-700 mb-2">
                  Consider Alternatives
                </h5>
                <ul className="text-green-600 text-xs space-y-1">
                  <li>• Simple European options</li>
                  <li>• High-frequency trading</li>
                  <li>• Large portfolios</li>
                  <li>• Real-time pricing</li>
                  <li>• Exotic derivatives</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg border border-green-200">
                <h5 className="font-semibold text-green-700 mb-2">
                  Model Alternatives
                </h5>
                <ul className="text-green-600 text-xs space-y-1">
                  <li>• Black-Scholes (European)</li>
                  <li>• Monte Carlo (path-dependent)</li>
                  <li>• Finite difference (PDEs)</li>
                  <li>• Analytical approximations</li>
                  <li>• Market quotes (liquids)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    applications: {
      title: "Real-World Applications & Industry Usage",
      content: (
        <div className="space-y-8">
          <div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              The binomial model's flexibility and intuitive structure have made
              it a cornerstone of derivatives pricing across multiple
              industries. From Wall Street trading floors to corporate finance
              departments, the model serves both as a practical pricing tool and
              an educational foundation.
            </p>
          </div>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200 p-6 rounded-xl">
            <h4 className="font-bold text-indigo-800 text-xl mb-4">
              Industry Applications
            </h4>

            <div className="overflow-x-auto">
              <table className="w-full table-auto border-collapse">
                <thead>
                  <tr className="bg-indigo-100">
                    <th className="border border-indigo-300 p-4 text-left font-bold text-indigo-800">
                      Sector
                    </th>
                    <th className="border border-indigo-300 p-4 text-left font-bold text-indigo-800">
                      Primary Use
                    </th>
                    <th className="border border-indigo-300 p-4 text-left font-bold text-indigo-800">
                      Advantages
                    </th>
                    <th className="border border-indigo-300 p-4 text-left font-bold text-indigo-800">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="hover:bg-indigo-50">
                    <td className="border border-indigo-300 p-4 font-semibold">
                      Investment Banks
                    </td>
                    <td className="border border-indigo-300 p-4">
                      American option pricing and risk management
                    </td>
                    <td className="border border-indigo-300 p-4">
                      Handles early exercise naturally
                    </td>
                    <td className="border border-indigo-300 p-4">
                      Standard tool
                    </td>
                  </tr>
                  <tr className="hover:bg-indigo-50">
                    <td className="border border-indigo-300 p-4 font-semibold">
                      Corporate Finance
                    </td>
                    <td className="border border-indigo-300 p-4">
                      Employee stock option valuation
                    </td>
                    <td className="border border-indigo-300 p-4">
                      Accommodates vesting schedules
                    </td>
                    <td className="border border-indigo-300 p-4">
                      GAAP compliant
                    </td>
                  </tr>
                  <tr className="hover:bg-indigo-50">
                    <td className="border border-indigo-300 p-4 font-semibold">
                      Asset Management
                    </td>
                    <td className="border border-indigo-300 p-4">
                      Structured product design
                    </td>
                    <td className="border border-indigo-300 p-4">
                      Complex payoff structures
                    </td>
                    <td className="border border-indigo-300 p-4">
                      Core methodology
                    </td>
                  </tr>
                  <tr className="hover:bg-indigo-50">
                    <td className="border border-indigo-300 p-4 font-semibold">
                      Academic Institutions
                    </td>
                    <td className="border border-indigo-300 p-4">
                      Teaching derivatives pricing
                    </td>
                    <td className="border border-indigo-300 p-4">
                      Intuitive and visual
                    </td>
                    <td className="border border-indigo-300 p-4">
                      Universal standard
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-50 to-green-50 border-2 border-emerald-200 p-6 rounded-xl">
            <h4 className="font-bold text-emerald-800 text-xl mb-4">
              Specific Use Cases & Examples
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-emerald-700 mb-3">
                  Trading & Risk Management
                </h5>
                <ul className="text-emerald-600 text-sm space-y-2">
                  <li>
                    • <strong>American put pricing:</strong> Optimal exercise
                    boundaries for equity options
                  </li>
                  <li>
                    • <strong>Employee stock options:</strong> Valuation with
                    blackout periods and vesting
                  </li>
                  <li>
                    • <strong>Convertible bonds:</strong> Embedded option
                    analysis
                  </li>
                  <li>
                    • <strong>Warrants:</strong> Long-term option pricing with
                    dilution effects
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-emerald-700 mb-3">
                  Corporate Applications
                </h5>
                <ul className="text-emerald-600 text-sm space-y-2">
                  <li>
                    • <strong>Real options:</strong> Project valuation with
                    flexibility
                  </li>
                  <li>
                    • <strong>Capital budgeting:</strong> Investment timing
                    decisions
                  </li>
                  <li>
                    • <strong>M&A analysis:</strong> Deal option values and
                    timing
                  </li>
                  <li>
                    • <strong>Insurance products:</strong> Variable annuity
                    guarantees
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-200 p-6 rounded-xl">
            <h4 className="font-bold text-orange-800 text-xl mb-4">
              Technology & Implementation
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-orange-700 mb-3">
                  Software Integration
                </h5>
                <ul className="text-orange-600 text-sm space-y-2">
                  <li>
                    • <strong>Excel add-ins:</strong> Widespread use in
                    corporate finance
                  </li>
                  <li>
                    • <strong>Python libraries:</strong> QuantLib, NumPy
                    implementations
                  </li>
                  <li>
                    • <strong>R packages:</strong> RQuantLib, fOptions
                  </li>
                  <li>
                    • <strong>MATLAB toolboxes:</strong> Financial Instruments
                    Toolbox
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-orange-700 mb-3">
                  Production Systems
                </h5>
                <ul className="text-orange-600 text-sm space-y-2">
                  <li>
                    • <strong>Risk management:</strong> Daily VaR calculations
                  </li>
                  <li>
                    • <strong>Trade surveillance:</strong> Real-time position
                    monitoring
                  </li>
                  <li>
                    • <strong>Regulatory reporting:</strong> FRTB capital
                    calculations
                  </li>
                  <li>
                    • <strong>Client applications:</strong> Retail brokerage
                    platforms
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border-2 border-cyan-200 p-6 rounded-xl">
            <h4 className="font-bold text-cyan-800 text-xl mb-4">
              Future Evolution & Trends
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h5 className="font-semibold text-cyan-700">
                  Emerging Applications
                </h5>
                <ul className="text-cyan-600 text-sm space-y-2">
                  <li>
                    • <strong>Cryptocurrency options:</strong> Adapting for
                    digital asset volatility
                  </li>
                  <li>
                    • <strong>ESG derivatives:</strong> Carbon credit options
                    and sustainability swaps
                  </li>
                  <li>
                    • <strong>DeFi protocols:</strong> Automated option market
                    makers
                  </li>
                  <li>
                    • <strong>Real-time pricing:</strong> High-frequency option
                    trading systems
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h5 className="font-semibold text-cyan-700">
                  Model Enhancements
                </h5>
                <ul className="text-cyan-600 text-sm space-y-2">
                  <li>
                    • <strong>Machine learning:</strong> AI-enhanced parameter
                    estimation
                  </li>
                  <li>
                    • <strong>Quantum computing:</strong> Massive parallel tree
                    calculations
                  </li>
                  <li>
                    • <strong>Stochastic volatility:</strong> Time-varying
                    volatility models
                  </li>
                  <li>
                    • <strong>Jump integration:</strong> Hybrid jump-diffusion
                    approaches
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
    { id: "foundation", label: "Foundation", icon: "🌳" },
    { id: "formula", label: "Formula", icon: "🧮" },
    { id: "implementation", label: "Implementation", icon: "💻" },
    { id: "assumptions", label: "Assumptions", icon: "⚠️" },
    { id: "applications", label: "Applications", icon: "🚀" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-indigo-50/30">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-purple-400/10 to-indigo-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-tr from-violet-400/10 to-pink-600/10 rounded-full blur-3xl"></div>
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
                className="text-purple-600 hover:text-purple-700 font-medium"
              >
                Learning Center
              </button>
              <span className="mx-2 text-gray-500">/</span>
              <button
                onClick={() => navigate("/learning/options")}
                className="text-purple-600 hover:text-purple-700 font-medium"
              >
                Options Pricing
              </button>
              <span className="mx-2 text-gray-500">/</span>
              <span className="text-gray-700 font-medium">Binomial Model</span>
            </nav>

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Binomial Options Pricing Model
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              Master the intuitive, tree-based approach to options pricing that
              bridges discrete and continuous mathematics
            </p>

            {/* CTA Banner */}
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-6 mb-8">
              <div className="flex flex-col lg:flex-row items-center justify-between">
                <div className="mb-4 lg:mb-0">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Try Interactive Binomial Pricing
                  </h3>
                  <p className="text-purple-100 pr-4">
                    Build trees step-by-step and see how American options differ
                    from European pricing.
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
                      ? "!bg-purple-600 !text-white !shadow-sm"
                      : "!bg-gray-100 !border-gray-200 !text-gray-600 !hover:text-purple-600 !hover:bg-gray-50"
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
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium text-gray-700 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 appearance-none"
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
              <span>Back: Black-Scholes</span>
            </button>

            <button
              onClick={() => navigate("/learning/options/monte-carlo")}
              className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <span>Next: Monte Carlo</span>
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
