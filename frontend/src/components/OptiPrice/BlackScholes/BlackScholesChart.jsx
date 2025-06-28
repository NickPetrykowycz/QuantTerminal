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
import { erf } from "mathjs";

function normcdf(x) {
  return 0.5 * (1 + erf(x / Math.sqrt(2)));
}

function generatePriceCurve({
  S0,
  K,
  r,
  sigma,
  q,
  includeDividend,
  option_type,
  T,
}) {
  if (!S0 || !K || !r || !sigma || !T) return [];

  const adjQ = includeDividend ? q || 0 : 0;
  const data = [];

  const steps = 100;
  const stepSize = T / steps;

  for (let i = 1; i <= steps; i++) {
    const t = parseFloat((i * stepSize).toFixed(4));
    const d1 =
      (Math.log(S0 / K) + (r - adjQ + 0.5 * sigma ** 2) * t) /
      (sigma * Math.sqrt(t));
    const d2 = d1 - sigma * Math.sqrt(t);

    let price;
    if (option_type === "call") {
      price =
        S0 * Math.exp(-adjQ * t) * normcdf(d1) -
        K * Math.exp(-r * t) * normcdf(d2);
    } else {
      price =
        K * Math.exp(-r * t) * normcdf(-d2) -
        S0 * Math.exp(-adjQ * t) * normcdf(-d1);
    }

    data.push({
      t: parseFloat(t.toFixed(4)),
      price: parseFloat(Math.max(0, price).toFixed(4)),
    });
  }

  return data;
}

function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/90 backdrop-blur-sm border border-gray-200 p-3 rounded-lg shadow-lg">
        <div className="text-sm text-gray-600">Time to Expiry</div>
        <div className="font-medium text-gray-900">{label} years</div>
        <div className="text-sm text-gray-600 mt-1">Option Price</div>
        <div className="font-semibold text-blue-600">${payload[0].value}</div>
      </div>
    );
  }
  return null;
}

function BlackScholesChart({ form }) {
  const data = generatePriceCurve(form);
  const isCall = form.option_type === "call";

  if (data.length === 0) {
    return (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">
          Price Evolution Chart
        </h3>
        <div className="h-64 bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-center">
          <p className="text-gray-500">
            Enter all parameters to see the price chart
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          {isCall ? "Call" : "Put"} Option Price vs Time to Expiry
        </h3>
        <p className="text-sm text-gray-600">
          How option value changes as expiration approaches
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
              stroke={isCall ? "#3b82f6" : "#ef4444"}
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
          Chart shows theoretical option prices using Black-Scholes model
        </p>
      </div>
    </div>
  );
}

export default BlackScholesChart;
