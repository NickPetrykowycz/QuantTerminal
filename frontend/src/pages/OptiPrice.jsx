import React, { useState } from 'react';
import axios from 'axios';
import BorderContainerStatic from '../components/BorderContainer';

function OptiPrice() {
  const [model, setModel] = useState('black-scholes');
  const [result, setResult] = useState(null);

  const [form, setForm] = useState({
    S0: 100,
    K: 100,
    T: 1,
    r: 0.05,
    sigma: 0.2,
    q: 0.0,
    option_type: 'call',
    N: 100,
    american: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox'
      ? checked
      : name === 'option_type'
        ? value
        : parseFloat(value);

    setForm((prev) => ({ ...prev, [name]: newValue }));
  };

  const handleSubmit = async () => {
    try {
      const endpoint =
        model === 'black-scholes'
          ? 'http://localhost:8000/api/blackscholes'
          : model === 'binomial'
          ? 'http://localhost:8000/api/binomial'
          : null;

      if (!endpoint) {
        alert('Monte Carlo not implemented yet');
        return;
      }

      const payload =
        model === 'black-scholes'
          ? {
              S0: form.S0,
              K: form.K,
              T: form.T,
              r: form.r,
              sigma: form.sigma,
              option_type: form.option_type,
              q: form.q,
            }
          : {
              S0: form.S0,
              K: form.K,
              T: form.T,
              r: form.r,
              sigma: form.sigma,
              N: form.N,
              option_type: form.option_type,
              american: form.american,
              q: form.q,
            };

      const res = await axios.post(endpoint, payload);
      setResult(res.data.price);
    } catch (error) {
      console.error('Pricing error:', error);
      setResult('Error');
    }
  };

  const modelOptions = ['black-scholes', 'binomial', 'monte-carlo'];

  return (
    <div className="bg-black text-green-400 font-mono min-h-screen flex flex-col items-center justify-center">
      <BorderContainerStatic className="shadow-[0_0_60px_8px_#22c55e99] border-4 border-green-400 rounded-3xl transition-all duration-300">
        <div className="flex flex-col items-center w-full h-full p-8">
          <h1 className="text-4xl font-bold mb-6">OptiPrice</h1>
          <p className="text-lg mb-6">Options made simple. Pricing made powerful.</p>

          {/* Model selection buttons */}
          <div className="flex gap-4 mb-6">
            {modelOptions.map((m) => (
              <button
                key={m}
                onClick={() => setModel(m)}
                className={`px-4 py-2 rounded font-bold border ${
                  model === m
                    ? 'bg-green-500 text-black border-green-500'
                    : 'border-green-400 text-green-300 hover:bg-green-700'
                }`}
              >
                {m.replace('-', ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
              </button>
            ))}
          </div>

          {/* Inputs */}
          <div className="grid grid-cols-2 gap-4 mb-4 w-full">
            {['S0', 'K', 'T', 'r', 'sigma', 'q'].map((field) => (
              <div key={field} className="flex flex-col">
                <label className="text-sm mb-1">{field}</label>
                <input
                  className="bg-black border border-green-500 px-2 py-1 rounded text-green-300"
                  type="number"
                  step="any"
                  name={field}
                  value={form[field]}
                  onChange={handleChange}
                />
              </div>
            ))}

            <div className="col-span-2 flex flex-col">
              <label className="text-sm mb-1">Option Type</label>
              <select
                name="option_type"
                className="bg-black border border-green-500 px-2 py-1 rounded text-green-300"
                value={form.option_type}
                onChange={handleChange}
              >
                <option value="call">Call</option>
                <option value="put">Put</option>
              </select>
            </div>

            {/* Binomial-only fields */}
            {model === 'binomial' && (
              <>
                <div className="flex flex-col col-span-1">
                  <label className="text-sm mb-1">Steps (N)</label>
                  <input
                    className="bg-black border border-green-500 px-2 py-1 rounded text-green-300"
                    type="number"
                    name="N"
                    value={form.N}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col col-span-1">
                  <label className="text-sm mb-1">Option Style</label>
                  <select
                    name="american"
                    className="bg-black border border-green-500 px-2 py-1 rounded text-green-300"
                    value={form.american ? 'american' : 'european'}
                    onChange={(e) =>
                      setForm((prev) => ({
                        ...prev,
                        american: e.target.value === 'american',
                      }))
                    }
                  >
                    <option value="european">European</option>
                    <option value="american">American</option>
                  </select>
                </div>
              </>
            )}
          </div>

          <button
            className="bg-green-500 text-black px-4 py-2 rounded hover:bg-green-400 transition"
            onClick={handleSubmit}
          >
            Calculate Price
          </button>

          {result !== null && (
            <div className="mt-6 text-xl">
              Result: <div className="text-green-300">${result}</div>
            </div>
          )}
        </div>
      </BorderContainerStatic>
    </div>
  );
}

export default OptiPrice;
