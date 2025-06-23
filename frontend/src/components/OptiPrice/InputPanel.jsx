import React from 'react';
import { useNavigate } from 'react-router-dom';

function InputPanel({ model, setModel, form, setForm, setResult }) {
  const navigate = useNavigate();

  const models = ['black-scholes', 'binomial', 'monte-carlo'];
  const optionTypes = ['call', 'put'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const activeBtn = 'bg-green-400 text-black font-bold px-4 py-2 rounded-lg shadow-md';
  const inactiveBtn = 'bg-transparent border border-green-400 text-green-300 px-4 py-2 rounded-lg hover:bg-green-800';

  return (
    <div className="space-y-8">
      {/* Step 1 */}
      <div>
        <p className="text-xl font-bold text-green-300 mb-2">🟩 Step 1 — Pick Your Weapon:</p>
        <div className="flex gap-4">
          {models.map((m) => (
            <button
              key={m}
              onClick={() => setModel(m)}
              className={model === m ? activeBtn : inactiveBtn}
            >
              {m.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </button>
          ))}
        </div>
      </div>

      {/* Step 2 */}
      <div>
        <p className="text-xl font-bold text-green-300 mb-2">🟩 Step 2 — What’s Your Move?</p>
        <div className="flex gap-4">
          {optionTypes.map((type) => (
            <button
              key={type}
              onClick={() => setForm({ ...form, option_type: type })}
              className={form.option_type === type ? activeBtn : inactiveBtn}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Step 3 */}
      <div>
        <p className="text-xl font-bold text-green-300 mb-2">🟩 Step 3 — Load Your Ammo:</p>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: 'Initial Stock Price', name: 'S0' },
            { label: 'Strike Price', name: 'K' },
            { label: 'Time to Expiry (T)', name: 'T' },
            { label: 'Risk-Free Rate (r)', name: 'r' },
            { label: 'Volatility (σ)', name: 'sigma' },
          ].map(({ label, name }) => (
            <div key={name}>
              <label className="block text-sm mb-1">{label}</label>
              <input
                type="number"
                step="any"
                name={name}
                value={form[name] || ''}
                onChange={handleChange}
                placeholder={label}
                className="w-full px-3 py-2 bg-black border border-green-400 rounded text-green-300 placeholder-green-600"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Step 4 */}
      <div>
        <p className="text-xl font-bold text-green-300 mb-2">🟩 Step 4 — Are You Feeling Dividendy?</p>
        <div className="flex items-center gap-4">
          <input
            type="checkbox"
            checked={form.includeDividend}
            onChange={(e) => setForm({ ...form, includeDividend: e.target.checked })}
          />
          <label>Include Dividend Yield</label>
          <input
            type="number"
            step="any"
            name="q"
            value={form.q || ''}
            onChange={handleChange}
            placeholder="Dividend Yield (q)"
            disabled={!form.includeDividend}
            className={`w-40 px-3 py-2 rounded text-green-300 border ${form.includeDividend ? 'bg-black border-green-400' : 'bg-gray-700 border-gray-500'}`}
          />
        </div>
      </div>

      {/* Learn More */}
      <div className="text-center">
        <button
          className="text-green-400 underline hover:text-green-200"
          onClick={() => navigate(`/learn/${model}`)}
        >
          📘 Learn More
        </button>
      </div>
    </div>
  );
}

export default InputPanel;
