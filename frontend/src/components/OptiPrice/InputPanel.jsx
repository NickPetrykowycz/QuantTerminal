import React from 'react';
import { useNavigate } from 'react-router-dom';;

function InputPanel({ model, setModel, form, setForm, setResult }) {
  const navigate = useNavigate();

  const models = ['black-scholes', 'binomial', 'monte-carlo'];
  const optionTypes = ['call', 'put'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="flex flex-col justify-between h-full mb-10">
      {/* Step 1 */}
      <div>
        <p className="text-xl font-bold text-green-300 mb-2">Step 1 — Choose a Model</p>
        <div className="flex gap-4 flex-wrap">
          {models.map((m) => (
            <button
              key={m}
              onClick={() => setModel(m)}
              className={`btn-option flex-1 ${model === m ? 'active' : ''}`}
            >
              {m.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </button>
          ))}
        </div>
      </div>

      {/* Step 2 */}
      <div>
        <p className="text-xl font-bold text-green-300 mb-2">Step 2 — Select Option Type</p>
        <div className="flex gap-4">
          {optionTypes.map((type) => (
            <button
              key={type}
              onClick={() => setForm({ ...form, option_type: type })}
              className={`btn-option flex-1 ${form.option_type === type ? 'active' : ''}`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Step 3 */}
      <div>
        <p className="text-xl font-bold text-green-300 mb-2">Step 3 — Enter Input Values</p>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: 'Initial Stock Price', name: 'S0', placeholder: 'S₀' },
            { label: 'Strike Price', name: 'K', placeholder: 'K' },
            { label: 'Time to Expiry', name: 'T', placeholder: 'T' },
            { label: 'Risk-Free Rate', name: 'r', placeholder: 'r' },
            { label: 'Volatility', name: 'sigma', placeholder: 'σ' },
          ].map(({ label, name, placeholder }) => (
            <div key={name}>
              <label className="block text-sm mb-1">{label}</label>
              <input
                type="number"
                step="any"
                name={name}
                value={form[name] || ''}
                onChange={handleChange}
                placeholder={placeholder}
                className="w-full px-3 py-2 bg-black border border-green-400 rounded text-green-300 placeholder-green-600"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Step 4 */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <p className="text-xl font-bold text-green-300">Step 4 — Add Dividend Yield?</p>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={form.includeDividend}
              onChange={(e) => setForm({ ...form, includeDividend: e.target.checked })}
            />
            <label className="text-green-300">Include</label>
          </div>
        </div>

        <input
          type="number"
          step="any"
          name="q"
          value={form.q || ''}
          onChange={handleChange}
          placeholder="Dividend Yield (q)"
          disabled={!form.includeDividend}
          className={`w-full px-3 py-2 rounded text-green-300 border ${
            form.includeDividend ? 'bg-black border-green-400' : 'bg-gray-700 border-gray-500'
          }`}
        />
      </div>
      </div>
  );
}

export default InputPanel;
