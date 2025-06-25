// src/components/BinomialVisual.jsx
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

function BinomialVisual({ form, result, setResult }) {
  const [loading, setLoading] = useState(false);
  const { convergence = [] } = result || {};

  const onGenerate = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/binomial', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-full">
      {/* Left: Convergence chart */}
      <div className="w-2/3 p-4">
        {convergence.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-green-300 mb-2">Convergence</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={convergence}>
                <XAxis dataKey="N" stroke="#22c55e" />
                <YAxis stroke="#22c55e" />
                <Tooltip />
                <CartesianGrid strokeDasharray="3 3" />
                <Line type="monotone" dataKey="price" stroke="#22c55e" dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>

      {/* Right: Generate & precision info */}
      <div className="w-1/3 p-4 bg-gray-900 rounded flex flex-col justify-between">
        <button
          onClick={onGenerate}
          disabled={loading}
          className="w-full px-6 py-3 bg-green-500 text-black font-bold rounded hover:bg-green-600 disabled:opacity-50"
        >
          {loading ? 'Generating…' : 'Generate'}
        </button>

        {/* (we'll add precision controls here later) */}
      </div>
    </div>
  );
}

export default BinomialVisual;
