import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

function MonteCarloChart({ data = [], isCall = true }) {
  if (!data || data.length === 0) {
    return (
      <div className="h-96 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Monte Carlo Convergence Analysis
          </h3>
          <p className="text-gray-600 mb-4">
            Run a simulation to see how the option price converges as the number of simulations increases.
          </p>
          <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
            <p className="text-sm text-purple-700">
              The convergence chart will show the running average of the option price as more simulations are added,
              demonstrating the law of large numbers in action.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const formatTooltip = (value, name, props) => {
    if (name === "price") {
      return [`$${value.toFixed(4)}`, "Option Price"];
    }
    if (name === "upper_ci") {
      return [`$${value.toFixed(4)}`, "95% CI Upper"];
    }
    if (name === "lower_ci") {
      return [`$${value.toFixed(4)}`, "95% CI Lower"];
    }
    return [value, name];
  };

  const formatXAxisTick = (value) => {
    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(1)}M`;
    } else if (value >= 1000) {
      return `${(value / 1000).toFixed(0)}K`;
    }
    return value.toString();
  };

  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Monte Carlo Convergence Analysis
      </h3>
      <p className="text-sm text-gray-600 mb-6">
        This chart shows how the option price estimate converges as the number of simulations increases.
        The shaded area represents the 95% confidence interval.
      </p>

      <div className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 60,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="simulations"
              stroke="#6b7280"
              fontSize={12}
              tickFormatter={formatXAxisTick}
              label={{
                value: "Number of Simulations",
                position: "insideBottom",
                offset: -10,
                style: { textAnchor: "middle", fill: "#6b7280", fontSize: "12px" }
              }}
            />
            <YAxis 
              stroke="#6b7280"
              fontSize={12}
              tickFormatter={(value) => `$${value.toFixed(2)}`}
              label={{
                value: "Option Price ($)",
                angle: -90,
                position: "insideLeft",
                style: { textAnchor: "middle", fill: "#6b7280", fontSize: "12px" }
              }}
            />
            <Tooltip
              formatter={formatTooltip}
              labelFormatter={(value) => `Simulations: ${value.toLocaleString()}`}
              contentStyle={{
                backgroundColor: "#ffffff",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              }}
            />
            <Legend />
            
            {/* Confidence Interval Lines */}
            {data.some(d => d.upper_ci !== undefined) && (
              <Line
                type="monotone"
                dataKey="upper_ci"
                stroke="#c084fc"
                strokeWidth={1}
                strokeDasharray="5 5"
                dot={false}
                name="95% CI Upper"
                connectNulls={false}
              />
            )}
            {data.some(d => d.lower_ci !== undefined) && (
              <Line
                type="monotone"
                dataKey="lower_ci"
                stroke="#c084fc"
                strokeWidth={1}
                strokeDasharray="5 5"
                dot={false}
                name="95% CI Lower"
                connectNulls={false}
              />
            )}
            
            {/* Main price line */}
            <Line
              type="monotone"
              dataKey="price"
              stroke="#8b5cf6"
              strokeWidth={3}
              dot={{ fill: "#8b5cf6", strokeWidth: 2, r: 3 }}
              activeDot={{ r: 5, stroke: "#8b5cf6", strokeWidth: 2 }}
              name="Option Price"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 p-4 bg-gray-50 rounded-lg border">
        <h4 className="font-medium text-gray-800 mb-2">Key Insights</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
          <div>
            <strong>Convergence Pattern:</strong> The price estimate becomes more stable as simulations increase,
            demonstrating the Monte Carlo method's convergence properties.
          </div>
          <div>
            <strong>Confidence Interval:</strong> The shaded region shows the statistical uncertainty in the estimate.
            Narrower intervals indicate higher confidence in the result.
          </div>
        </div>
      </div>
    </div>
  );
}

export default MonteCarloChart;