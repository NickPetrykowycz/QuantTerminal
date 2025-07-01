import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function BinomialChart({ data = [], isCall = true }) {
  if (!data || data.length === 0) {
    return (
      <div className="h-96 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 00-2-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H9z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Binomial Convergence Analysis
          </h3>
          <p className="text-gray-600 mb-4">
            Run an analysis to see how the option price converges as the number
            of binomial steps increases.
          </p>
          <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
            <p className="text-sm text-purple-700">
              The convergence chart will show the running average of the option
              price as more binomial steps are added, demonstrating the
              numerical stability of the lattice approach.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Original generated chart styling
  const formatTooltip = (value, name) => {
    if (name === "price") {
      return [`${value.toFixed(4)}`, "Option Price"];
    }
    return [value, name];
  };

  const formatXAxisTick = (value) => {
    if (value >= 1000) {
      return `${(value / 1000).toFixed(1)}K`;
    }
    return value.toString();
  };

  return (
    <div className="space-y-4">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          {isCall ? "Call" : "Put"} Option Convergence
        </h3>
        <p className="text-sm text-gray-600">
          How option price converges as tree steps increase
        </p>
      </div>

      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#e5e7eb"
              opacity={0.5}
            />
            <XAxis
              dataKey="N"
              stroke="#6b7280"
              tick={{ fill: "#6b7280", fontSize: 12 }}
              tickLine={{ stroke: "#6b7280" }}
              tickFormatter={formatXAxisTick}
              label={{
                value: "Binomial Steps (N)",
                position: "insideBottom",
                offset: -40,
                style: { textAnchor: "middle", fill: "#6b7280" },
              }}
            />
            <YAxis
              stroke="#6b7280"
              tick={{ fill: "#6b7280", fontSize: 12 }}
              tickLine={{ stroke: "#6b7280" }}
              domain={["auto", "auto"]}
              label={{
                value: "Option Price ($)",
                angle: -90,
                position: "insideLeft",
                style: { textAnchor: "middle", fill: "#6b7280" },
              }}
            />
            <Tooltip
              formatter={formatTooltip}
              labelFormatter={(value) => `Steps: ${value}`}
              contentStyle={{
                backgroundColor: "#ffffff",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              }}
            />
            <Line
              type="monotone"
              dataKey="price"
              stroke={isCall ? "#10b981" : "#ef4444"}
              strokeWidth={3}
              dot={false}
              name={`${isCall ? "Call" : "Put"} Price`}
              strokeLinecap="round"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="text-center">
        <p className="text-xs text-gray-500">
          Chart shows binomial model convergence - final price calculated at N =
          512
        </p>
      </div>
    </div>
  );
}

export default BinomialChart;
