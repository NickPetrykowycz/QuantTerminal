import React from 'react';
import axios from 'axios';

function InputPanel({ model, form, setForm, setResult }) {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    let newValue;
    if (type === 'checkbox') {
      newValue = checked;
    } else if (name === 'option_type') {
      newValue = value;
    } else {
      newValue = value === '' ? '' : parseFloat(value);
    }

    setForm((prev) => ({ ...prev, [name]: newValue }));
  };

  const getPlaceholder = (field) => {
    const symbolMap = {
      S0: 'S₀',
      K: 'K',
      T: 'T',
      r: 'r',
      sigma: 'σ',
    };
    return symbolMap[field] || '';
  };

  const getLabel = (field) => {
    const labelMap = {
      S0: 'Initial Stock Price',
      K: 'Strike Price',
      T: 'Time to Expiry (years)',
      r: 'Risk-Free Rate',
      sigma: 'Volatility',
    };
    return labelMap[field] || field;
  };

  const handleSubmit = async () => {
    if (model === 'black-scholes') return;

    try {
      const endpoint =
        model === 'binomial'
          ? 'http://localhost:8000/api/binomial'
          : null;

      if (!endpoint) {
        alert('Monte Carlo not implemented yet');
        return;
      }

      const payload = {
        S0: form.S0,
        K: form.K,
        T: form.T,
        r: form.r,
        sigma: form.sigma,
        N: form.N,
        option_type: form.option_type,
        american: form.american,
        q: form.includeDividend ? form.q : 0,
      };

      const res = await axios.post(endpoint, payload);
      setResult(res.data.price);
    } catch (error) {
      console.error('Pricing error:', error);
      setResult('Error');
    }
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-4 mb-4 w-full">
        {['S0', 'K', 'T', 'r', 'sigma'].map((field) => (
          <div key={field} className="flex flex-col">
            <label className="text-sm mb-1">{getLabel(field)}</label>
            <input
              className="bg-black border border-green-500 px-2 py-1 rounded text-green-300"
              type="number"
              step="any"
              name={field}
              placeholder={getPlaceholder(field)}
              value={form[field]}
              onChange={handleChange}
            />
          </div>
        ))}

        {/* Dividend yield as part of the grid */}
        <div className="flex flex-col">
          <label className="text-sm mb-1 flex items-center gap-2">
            <input
              type="checkbox"
              name="includeDividend"
              checked={form.includeDividend}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  includeDividend: e.target.checked,
                }))
              }
              className="w-4 h-4"
            />
            Dividend Yield
          </label>
          <input
            className="bg-black border border-green-500 px-2 py-1 rounded text-green-300 disabled:opacity-40 disabled:cursor-not-allowed"
            type="number"
            step="any"
            name="q"
            placeholder="q"
            value={form.q}
            onChange={handleChange}
            disabled={!form.includeDividend}
          />
        </div>

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

      {model !== 'black-scholes' && (
        <button
          className="bg-green-500 text-black px-4 py-2 rounded hover:bg-green-400 transition"
          onClick={handleSubmit}
        >
          Calculate Price
        </button>
      )}
    </>
  );
}

export default InputPanel;
