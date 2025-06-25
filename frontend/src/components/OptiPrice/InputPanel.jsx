import React from 'react';
import { useNavigate } from 'react-router-dom';

function InputPanel({ model, setModel, form, setForm }) {
  const navigate = useNavigate();
  const models = ['black-scholes', 'binomial', 'monte-carlo'];
  const optionTypes = ['call', 'put'];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
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
              {m.replace('-', ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
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
            { label: 'Strike Price',        name: 'K', placeholder: 'K'  },
            { label: 'Time to Expiry',      name: 'T', placeholder: 'T'  },
            { label: 'Risk-Free Rate',      name: 'r', placeholder: 'r'  },
            { label: 'Volatility',          name: 'sigma', placeholder: 'σ' },
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
          {model === 'monte-carlo' && (
            <>
              <div>
                <label className="block text-sm mb-1">Simulations</label>
                <input
                  type="number"
                  name="simulations"
                  value={form.simulations || ''}
                  onChange={handleChange}
                  placeholder="e.g. 10000"
                  className="w-full px-3 py-2 bg-black border border-green-400 rounded text-green-300"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Time Steps</label>
                <input
                  type="number"
                  name="mcTimeSteps"
                  value={form.mcTimeSteps || ''}
                  onChange={handleChange}
                  placeholder="e.g. 100"
                  className="w-full px-3 py-2 bg-black border border-green-400 rounded text-green-300"
                />
              </div>
            </>
          )}
        </div>
      </div>

      {/* Step 4 — Dividend Section */}
      {(model === 'black-scholes' || model === 'binomial') && (
        <div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-xl font-bold text-green-300">Step 4 — Add Dividend?</p>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="includeDividend"
                checked={form.includeDividend || false}
                onChange={handleChange}
                className="form-checkbox h-4 w-4 text-green-500"
              />
              <label className="text-green-300">Include</label>
            </div>
          </div>

          {/* Black-Scholes Dividend Input */}
          {model === 'black-scholes' && (
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
          )}

          {/* Binomial Dividend Mode Buttons */}
          {model === 'binomial' && (
            <>
              <div className="flex gap-4 mb-4">
                {['yield', 'discrete'].map((mode) => {
                  const disabled = !form.includeDividend;
                  const classes = ['btn-option', 'flex-1', 'dividend-option'];
                  if (disabled) classes.push('disabled');
                  else if (form.dividend_mode === mode) classes.push('active');
                  return (
                    <button
                      key={mode}
                      onClick={() => !disabled && setForm({ ...form, dividend_mode: mode })}
                      disabled={disabled}
                      className={classes.join(' ')}
                    >
                      {mode.charAt(0).toUpperCase() + mode.slice(1)}
                    </button>
                  );
                })}
              </div>

              {/* Only the selected input set */}
              {form.dividend_mode === 'yield' && (
                <input
                  type="number"
                  step="any"
                  name="q"
                  value={form.q || ''}
                  onChange={handleChange}
                  placeholder="e.g. 0.02"
                  disabled={!form.includeDividend}
                  className={`w-full px-3 py-2 rounded text-green-300 border ${
                    form.includeDividend ? 'bg-black border-green-400' : 'bg-gray-700 border-gray-500'
                  }`}
                />
              )}

              {form.dividend_mode === 'discrete' && (
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: 'Frequency (days)', name: 'dividend_freq', placeholder: 'e.g. 90' },
                    { label: 'Amount per Payment', name: 'dividend_amt', placeholder: 'e.g. 1.00' },
                    { label: 'First Payment Day', name: 'dividend_first_day', placeholder: 'Days from t=0' },
                  ].map(({ label, name, placeholder }) => {
                    return (
                      <input
                        key={name}
                        type="number"
                        step={name === 'dividend_amt' ? 'any' : undefined}
                        name={name}
                        value={form[name] || ''}
                        onChange={handleChange}
                        placeholder={placeholder}
                        disabled={!form.includeDividend}
                        className={`w-full px-3 py-2 rounded text-green-300 border ${
                          form.includeDividend ? 'bg-black border-green-400' : 'bg-gray-700 border-gray-500'
                        }`}
                      />
                    );
                  })}
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default InputPanel;
