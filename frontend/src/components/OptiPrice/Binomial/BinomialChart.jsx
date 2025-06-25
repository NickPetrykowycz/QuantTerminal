import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black border border-green-500 p-2 rounded text-green-300 text-sm font-mono">
        <div>Steps (N): {payload[0].payload.N}</div>
        <div>Price: ${payload[0].payload.price}</div>
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
  if (data.length <= 20) return data.map(d => d.N);
  const ticks = [minN];
  let pow = 1;
  while (pow < maxN) {
    if (pow > minN) ticks.push(pow);
    pow *= 2;
  }
  if (!ticks.includes(maxN)) ticks.push(maxN);
  return Array.from(new Set(ticks)).sort((a, b) => a - b);
}

function BinomialChart({ data }) {
  if (!data || data.length === 0) {
    return (
      <div className="text-center text-green-500 p-12">No chart data. Click Generate.</div>
    );
  }
  const lastN = data[data.length - 1]?.N;
  const ticks = getSmartTicks(data);

  return (
    <ResponsiveContainer width="100%" height={272}>
      <LineChart data={data} margin={{ top: 10, right: 20, bottom: 30, left: 10 }}>
        <XAxis
          dataKey="N"
          label={{
            value: 'Steps (N)',
            position: 'insideBottom',
            offset: -20,
            fill: '#22c55e',
          }}
          stroke="#22c55e"
          tick={{ fill: '#22c55e' }}
          type="number"
          domain={[
            data[0].N,
            data[data.length - 1].N
          ]}
          ticks={ticks}
          allowDecimals={false}
        />
        <YAxis
          label={{
            value: 'Option Price',
            angle: -90,
            position: 'insideLeft',
            offset: -5,
            fill: '#22c55e',
          }}
          stroke="#22c55e"
          tick={{ fill: '#22c55e' }}
          type="number"
          domain={['auto', 'auto']}
        />
        <Tooltip content={<CustomTooltip />} />
        <Line
          type="monotone"
          dataKey="price"
          stroke="#22c55e"
          strokeWidth={2}
          dot={false}
          name="Option Price"
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
  );
}

export default BinomialChart;
