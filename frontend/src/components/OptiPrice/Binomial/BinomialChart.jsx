import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/95 backdrop-blur-sm border border-gray-200 p-3 rounded-lg shadow-lg">
        <div className="text-sm text-gray-600">Steps (N)</div>
        <div className="font-medium text-gray-900">{payload[0].payload.N}</div>
        <div className="text-sm text-gray-600 mt-1">Option Price</div>
        <div className="font-semibold text-blue-600">
          ${payload[0].payload.price}
        </div>
      </div>
    );
  }
  return null;
}

// Simplified smart ticks (powers of 2 + min/max)
function getSmartTicks(data) {
  if (!data || !data.length) return [];
  const minN = data[0].N;
  const maxN = data[data.length - 1].N;
  if (data.length <= 20) return data.map((d) => d.N);
  const ticks = [minN];
  let pow = 1;
  while (pow < maxN) {
    if (pow > minN) ticks.push(pow);
    pow *= 2;
  }
  if (!ticks.includes(maxN)) ticks.push(maxN);
  return Array.from(new Set(ticks)).sort((a, b) => a - b);
}

function BinomialChart({ data, isCall }) {
  if (!data || data.length === 0) {
    return (
      <div className="space-y-4">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            Binomial Tree Convergence
          </h3>
          <p className="text-sm text-gray-600">
            How option price converges as tree steps increase
          </p>
        </div>
        <div className="h-80 bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-center">
          <p className="text-gray-500">
            Click "Generate Convergence Analysis" to see the chart
          </p>
        </div>
      </div>
    );
  }

  const lastN = data[data.length - 1]?.N;
  const ticks = getSmartTicks(data);

  return (
    <div className="space-y-4">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          {isCall ? "Call" : "Put"} Option Price Convergence
        </h3>
        <p className="text-sm text-gray-600">
          How option price converges as binomial tree steps increase
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
              label={{
                value: "Steps (N)",
                position: "insideBottom",
                offset: -40,
                style: { textAnchor: "middle", fill: "#6b7280" },
              }}
              stroke="#6b7280"
              tick={{ fill: "#6b7280", fontSize: 12 }}
              tickLine={{ stroke: "#6b7280" }}
              type="number"
              domain={[data[0].N, data[data.length - 1].N]}
              ticks={ticks}
              allowDecimals={false}
            />
            <YAxis
              label={{
                value: "Option Price ($)",
                angle: -90,
                position: "insideLeft",
                style: { textAnchor: "middle", fill: "#6b7280" },
              }}
              stroke="#6b7280"
              tick={{ fill: "#6b7280", fontSize: 12 }}
              tickLine={{ stroke: "#6b7280" }}
              type="number"
              domain={["auto", "auto"]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="price"
              stroke={isCall ? "#3b82f6" : "#ef4444"}
              strokeWidth={3}
              dot={false}
              name={`${isCall ? "Call" : "Put"} Price`}
              strokeLinecap="round"
            />
            {/* Highlight the final N as a gold dot */}
            <Line
              type="monotone"
              dataKey="price"
              stroke="#facc15"
              strokeWidth={0}
              dot={({ cx, cy, payload }) =>
                payload.N === lastN ? (
                  <circle key={payload.N} cx={cx} cy={cy} r={5} fill="#facc15" />
                ) : null
              }
              legendType="none"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="text-center">
        <p className="text-xs text-gray-500">
          Chart shows binomial tree convergence - gold dot indicates final price at N=512
        </p>
      </div>
    </div>
  );
}

export default BinomialChart;