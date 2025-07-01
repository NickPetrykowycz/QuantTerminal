import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

function BinomialTimeChart({ data = [], form = {} }) {
  console.log("BinomialTimeChart received data:", data); // Debug log

  if (!data || data.length === 0) {
    return (
      <div className="h-96 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
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
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Time Series Analysis
          </h3>
          <p className="text-gray-600 mb-4">
            Run an analysis to see how the option value changes over time to
            expiration.
          </p>
          <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
            <p className="text-sm text-emerald-700">
              This chart will display the option's intrinsic and time value
              evolution as it approaches expiration, showing the time decay
              characteristic of options pricing.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const formatTooltip = (value, name) => {
    if (name === "price") {
      return [`${value.toFixed(4)}`, "Option Price"];
    }
    return [value, name];
  };

  const K = parseFloat(form.K) || 0;
  const S0 = parseFloat(form.S0) || 0;

  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Time Series Analysis
      </h3>
      <p className="text-sm text-gray-600 mb-6">
        This chart shows how the option price evolves over time, demonstrating
        time decay and the relationship between time to expiration and option
        value.
      </p>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis
            dataKey="t"
            stroke="#6b7280"
            fontSize={12}
            tickFormatter={(value) => `${value.toFixed(2)}y`}
            label={{
              value: "Time to Expiration (Years)",
              position: "insideBottom",
              offset: -10,
              style: { textAnchor: "middle" },
            }}
          />
          <YAxis
            stroke="#6b7280"
            fontSize={12}
            tickFormatter={(value) => `${value.toFixed(2)}`}
            label={{
              value: "Option Price",
              angle: -90,
              position: "insideLeft",
              style: { textAnchor: "middle" },
            }}
          />
          <Tooltip
            formatter={formatTooltip}
            labelFormatter={(value) => `Time: ${value.toFixed(3)} years`}
            contentStyle={{
              backgroundColor: "#ffffff",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            }}
          />
          {/* Strike price reference line */}
          {K > 0 && (
            <ReferenceLine
              y={K}
              stroke="#ef4444"
              strokeDasharray="5 5"
              label={{ value: `Strike: ${K}`, position: "topRight" }}
            />
          )}
          {/* Current stock price reference line */}
          {S0 > 0 && (
            <ReferenceLine
              y={S0}
              stroke="#22c55e"
              strokeDasharray="5 5"
              label={{ value: `Stock: ${S0}`, position: "topRight" }}
            />
          )}
          <Line
            type="monotone"
            dataKey="price"
            stroke="#10b981"
            strokeWidth={2}
            dot={{ fill: "#10b981", strokeWidth: 0, r: 3 }}
            activeDot={{ r: 5, fill: "#059669" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BinomialTimeChart;
