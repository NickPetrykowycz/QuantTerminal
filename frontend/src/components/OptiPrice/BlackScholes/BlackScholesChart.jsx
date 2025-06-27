import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { erf } from 'mathjs';

function normcdf(x) {
  return 0.5 * (1 + erf(x / Math.sqrt(2)));
}

function generatePriceCurve({ S0, K, r, sigma, q, includeDividend, option_type, T }) {
  const adjQ = includeDividend ? q : 0;
  const data = [];

  const steps = 100; // High resolution for smooth curve
  const stepSize = T / steps;

  for (let i = 0; i <= steps; i++) {
    const t = parseFloat((i * stepSize).toFixed(4));
    const d1 = (Math.log(S0 / K) + (r - adjQ + 0.5 * sigma ** 2) * t) / (sigma * Math.sqrt(t));
    const d2 = d1 - sigma * Math.sqrt(t);

    let price;
    if (option_type === 'call') {
      price = S0 * Math.exp(-adjQ * t) * normcdf(d1) - K * Math.exp(-r * t) * normcdf(d2);
    } else {
      price = K * Math.exp(-r * t) * normcdf(-d2) - S0 * Math.exp(-adjQ * t) * normcdf(-d1);
    }

    data.push({ t, price: parseFloat(price.toFixed(4)) });
  }

  return data;
}

function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black border border-green-500 p-2 rounded text-green-300 text-sm font-mono">
        <div>Time: {label} Years</div>
        <div>Price: ${payload[0].value}</div>
      </div>
    );
  }

  return null;
}

function BlackScholesChart({ form }) {
  const data = generatePriceCurve(form);

  return (
    <div className="mt-12">
      <h3 className="text-center text-green-400 text-lg mb-4">
        Price vs Time to Expiry (T)
      </h3>

      <ResponsiveContainer width="100%" height={272}>
        <LineChart data={data} margin={{ top: 10, right: 20, bottom: 30, left: 10 }}>
        <XAxis
        dataKey="t"
        label={{
            value: "Time to Expiry (Years)",
            position: "insideBottom",
            offset: -20,
            fill: "#22c55e"
        }}
        stroke="#22c55e"
        tick={{ fill: "#22c55e" }}
        minTickGap={50}
        domain={['auto', 'auto']}
        />
          <YAxis
            label={{ value: "Price", angle: -90, position: "insideLeft", offset: -5, fill: "#22c55e" }}
            stroke="#22c55e"
            tick={{ fill: "#22c55e" }}
            domain={['auto', 'auto']}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#22c55e"
            strokeWidth={2}
            dot={false}
            name={`${form.option_type === 'call' ? 'Call' : 'Put'} Price`}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

function generateTicks(max, count) {
  const step = max / (count - 1);
  const ticks = [];
  for (let i = 0; i < count; i++) {
    const value = +(i * step).toFixed(4);
  }
  return ticks;
}

export default BlackScholesChart;
