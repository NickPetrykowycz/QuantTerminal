import React from 'react';
import axios from 'axios';

function InputPanel({ model, form, setForm, setResult }) {
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

  return (
    <>
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

      {form.result !== null && (
        <div className="mt-6 text-xl">
          Result: <span className="text-green-300">${form.result}</span>
        </div>
      )}
    </>
  );
}

export default InputPanel;
