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

function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/90 backdrop-blur-sm border border-gray-200 p-3 rounded-lg shadow-lg">
        <div className="text-sm text-gray-600">Time to Expiry</div>
        <div className="font-medium text-gray-900">{label} years</div>
        <div className="text-sm text-gray-600 mt-1">Option Price</div>
        <div className="font-semibold text-green-600">${payload[0].value}</div>
      </div>
    );
  }
  return null;
}

// Generate smart ticks for time axis (nice rounded numbers)
function getSmartTimeTicks(data) {
  if (!data || !data.length) return [];
  
  const minT = data[0].t;
  const maxT = data[data.length - 1].t;
  const range = maxT - minT;
  
  // For small ranges, show more precision
  if (range <= 0.1) {
    // Show every 0.01 or 0.02
    const step = range <= 0.05 ? 0.01 : 0.02;
    const ticks = [];
    for (let t = Math.ceil(minT / step) * step; t <= maxT; t += step) {
      ticks.push(parseFloat(t.toFixed(2)));
    }
    return ticks;
  } else if (range <= 1) {
    // Show every 0.1 or 0.25
    const step = range <= 0.5 ? 0.1 : 0.25;
    const ticks = [];
    for (let t = Math.ceil(minT / step) * step; t <= maxT; t += step) {
      ticks.push(parseFloat(t.toFixed(1)));
    }
    return ticks;
  } else {
    // Show every 0.5 or 1.0
    const step = range <= 3 ? 0.5 : 1.0;
    const ticks = [];
    for (let t = Math.ceil(minT / step) * step; t <= maxT; t += step) {
      ticks.push(parseFloat(t.toFixed(1)));
    }
    return ticks;
  }
}

function BinomialTimeChart({ data, form }) {
  const isCall = form?.option_type === "call";
  const isAmerican = form?.style === "american" || form?.american === true;
  const styleText = isAmerican ? "American" : "European";

  if (!data || data.length === 0) {
    return (
      <div className="space-y-4">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            {styleText} {isCall ? "Call" : "Put"} Option Price vs Time to Expiry
          </h3>
          <p className="text-sm text-gray-600">
            Binomial model price evolution as expiration approaches
          </p>
        </div>
        <div className="h-80 bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-center">
          <p className="text-gray-500">
            Click "Generate Convergence Analysis" to see the time chart
          </p>
        </div>
      </div>
    );
  }

  const maxT = data[data.length - 1]?.t;
  const ticks = getSmartTimeTicks(data);

  return (
    <div className="space-y-4">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          {styleText} {isCall ? "Call" : "Put"} Option Price vs Time to Expiry
        </h3>
        <p className="text-sm text-gray-600">
          Binomial model price evolution as expiration approaches
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
              dataKey="t"
              label={{
                value: "Time to Expiry (Years)",
                position: "insideBottom",
                offset: -40,
                style: { textAnchor: "middle", fill: "#6b7280" },
              }}
              stroke="#6b7280"
              tick={{ fill: "#6b7280", fontSize: 12 }}
              tickLine={{ stroke: "#6b7280" }}
              type="number"
              domain={[data[0].t, data[data.length - 1].t]}
              ticks={ticks}
              tickFormatter={(value) => parseFloat(value).toFixed(value < 1 ? 2 : 1)}
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
              domain={["auto", "auto"]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="price"
              stroke={isCall ? "#10b981" : "#ef4444"}
              strokeWidth={3}
              dot={false}
              name={`${isCall ? "Call" : "Put"} Price`}
              strokeLinecap="round"
            />
            {/* Highlight the final T as a gold dot */}
            <Line
              type="monotone"
              dataKey="price"
              stroke="#facc15"
              strokeWidth={0}
              dot={({ cx, cy, payload }) =>
                payload.t === maxT ? (
                  <circle key={payload.t} cx={cx} cy={cy} r={5} fill="#facc15" />
                ) : null
              }
              legendType="none"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="text-center">
        <p className="text-xs text-gray-500">
          Chart shows binomial model option prices over time to expiry - gold dot indicates final price at maturity
        </p>
      </div>
    </div>
  );
}

export default BinomialTimeChart;