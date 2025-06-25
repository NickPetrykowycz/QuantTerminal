import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function InputPanel({ model, setModel, form, setForm }) {
  const navigate = useNavigate();
  const models = ['black-scholes', 'binomial', 'monte-carlo'];
  const optionTypes = ['call', 'put'];
  const styles = ['european', 'american'];

  // Default style to European on initial mount
  useEffect(() => {
    if (!form.style) {
      setForm(prev => ({ ...prev, style: 'european' }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const displayModel = model
  .replace('-', ' ')
  .replace(/\b\w/g, l => l.toUpperCase());

  return (
    <div className="flex flex-col space-y-6 h-full mb-8">

      {/* Step 1 — Choose Model */}
      <div>
        <p className="text-lg font-semibold text-green-300 mb-1">Step 1 — Choose Model</p>
        <div className="flex gap-2">
          {models.map(m => (
            <button
              key={m}
              onClick={() => setModel(m)}
              className={`btn-option flex-1 h-8 px-2 text-sm flex items-center justify-center ${model === m ? 'active' : ''}`}
            >
              {m.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </button>
          ))}
        </div>
      </div>

      {/* Step 2 — Exercise Style */}
      <div>
        <p className="text-lg font-semibold text-green-300 mb-1">Step 2 — Exercise Style</p>
        <div className="flex gap-2">
          {styles.map(s => {
            const disabled = model === 'black-scholes' && s === 'american';
            return (
              <button
                key={s}
                onClick={() => !disabled && setForm({ ...form, style: s })}
                disabled={disabled}
                className={`btn-option dividend-option flex-1 h-8 px-2 text-sm flex items-center justify-center ${form.style === s ? 'active' : ''} ${disabled ? 'disabled' : ''}`}
              >
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </button>
            );
          })}
        </div>
      </div>

      {/* Step 3 — Option Type */}
      <div>
        <p className="text-lg font-semibold text-green-300 mb-1">Step 3 — Option Type</p>
        <div className="flex gap-2">
          {optionTypes.map(type => (
            <button
              key={type}
              onClick={() => setForm({ ...form, option_type: type })}
              className={`btn-option flex-1 h-8 px-2 text-sm flex items-center justify-center ${form.option_type === type ? 'active' : ''}`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Step 4 — Inputs */}
      <div>
        <p className="text-lg font-semibold text-green-300 mb-1">Step 4 — Inputs</p>
        <div className="grid grid-cols-2 gap-2 mb-2">
          <div>
            <label className="block text-xs mb-1">Current Price ($)</label>
            <input
              type="number"
              step="any"
              name="S0"
              value={form.S0 || ''}
              onChange={handleChange}
              placeholder="S₀"
              className="w-full h-8 px-2 text-sm bg-black border border-green-400 rounded text-green-300"
            />
          </div>
          <div>
            <label className="block text-xs mb-1">Strike Price ($)</label>
            <input
              type="number"
              step="any"
              name="K"
              value={form.K || ''}
              onChange={handleChange}
              placeholder="K"
              className="w-full h-8 px-2 text-sm bg-black border border-green-400 rounded text-green-300"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div>
            <label className="block text-xs mb-1">Time to Expiry (Years)</label>
            <input
              type="number"
              step="any"
              name="T"
              value={form.T || ''}
              onChange={handleChange}
              placeholder="T"
              className="w-full h-8 px-2 text-sm bg-black border border-green-400 rounded text-green-300"
            />
          </div>
          <div>
            <label className="block text-xs mb-1">Risk-Free Rate (Decimal)</label>
            <input
              type="number"
              step="any"
              name="r"
              value={form.r || ''}
              onChange={handleChange}
              placeholder="r"
              className="w-full h-8 px-2 text-sm bg-black border border-green-400 rounded text-green-300"
            />
          </div>
          <div>
            <label className="block text-xs mb-1">Volatility (Decimal)</label>
            <input
              type="number"
              step="any"
              name="sigma"
              value={form.sigma || ''}
              onChange={handleChange}
              placeholder="σ"
              className="w-full h-8 px-2 text-sm bg-black border border-green-400 rounded text-green-300"
            />
          </div>
        </div>
        {model === 'monte-carlo' && (
          <div className="grid grid-cols-2 gap-2 mt-2">
            <div>
              <label className="block text-xs mb-1">Simulations</label>
              <input
                type="number"
                name="simulations"
                value={form.simulations || ''}
                onChange={handleChange}
                placeholder="10000"
                className="w-full h-8 px-2 text-sm bg-black border border-green-400 rounded text-green-300"
              />
            </div>
            <div>
              <label className="block text-xs mb-1">Time Steps</label>
              <input
                type="number"
                name="mcTimeSteps"
                value={form.mcTimeSteps || ''}
                onChange={handleChange}
                placeholder="100"
                className="w-full h-8 px-2 text-sm bg-black	border border-green-400 rounded text-green-300"
              />
            </div>
          </div>
        )}
      </div>

      {/* Step 5 — Dividend Section */}
      {(model === 'black-scholes' || model === 'binomial') && (
        <div>
          <div className="flex justify-between items-center mb-1">
            <p className="text-lg font-semibold text-green-300">Step 5 — Add Dividend?</p>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="includeDividend"
                checked={form.includeDividend || false}
                onChange={handleChange}
                className="form-checkbox h-4 w-4 text-green-500"
              />
              <label className="text-green-300 text-sm">Include</label>
            </div>
          </div>
          {model === 'black-scholes' && (
            <>
              <label className="block text-xs mb-1 text-green-300">Dividend Yield (Decimal)</label>
              <input
                type="number"
                step="any"
                name="q"
                value={form.q || ''}
                onChange={handleChange}
                placeholder="q"
                disabled={!form.includeDividend}
                className={`w-full h-8 px-2 text-sm rounded text-green-300 border ${
                  form.includeDividend ? 'bg-black border-green-400' : 'bg-gray-700 border-gray-500'
                }`}
              />
            </>
          )}
          {model === 'binomial' && (
            <>
              <div className="flex gap-2 mb-2">
                {['yield','discrete'].map(m => {
                  const dis = !form.includeDividend;
                  const cls = ['btn-option','flex-1','h-8','px-2','text-sm','flex','items-center','justify-center','dividend-option'];
                  if (dis) cls.push('disabled');
                  else if (form.dividend_mode === m) cls.push('active');
                  return (
                    <button
                      key={m}
                      onClick={() => !dis && setForm({ ...form, dividend_mode: m })}
                      disabled={dis}
                      className={cls.join(' ')}
                    >
                      {m.charAt(0).toUpperCase() + m.slice(1)}
                    </button>
                  );
                })}
              </div>
              {form.dividend_mode === 'yield' && (
                <>
                  <label className="block text-xs mb-1 text-green-400">Dividend Yield (Decimal)</label>
                  <input
                    type="number"
                    step="any"
                    name="q"
                    value={form.q || ''}
                    onChange={handleChange}
                    placeholder="q"
                    disabled={!form.includeDividend}
                    className={`w-full h-8 px-2 text-sm rounded text-green-400 border ${
                      form.includeDividend ? 'bg-black border-green-400' : 'bg-gray-700 border-gray-500'
                    }`}
                  />
                </>
              )}
              {form.dividend_mode === 'discrete' && (
                <>
                  <div className="grid grid-cols-3 gap-2">
                    {[{ label: 'Frequency (Days)', name: 'dividend_freq', placeholder: 'Days' },{ label: 'Amount per Payment ($)', name: 'dividend_amt', placeholder: 'Dollar Amount' },{ label: 'First Payment Day (Days)', name: 'dividend_first_day', placeholder: 'Days from T=0' }].map(({ label, name, placeholder }) => {
                      const enabled = form.includeDividend;
                      return (
                        <div key={name}>
                          <label className="block text-xs mb-1 text-green-400">{label}</label>
                          <input
                            type="number"
                            step={name === 'dividend_amt' ? 'any' : undefined}
                            name={name}
                            value={form[name] || ''}
                            onChange={handleChange}
                            placeholder={placeholder}
                            disabled={!enabled}
                            className={`w-full h-8 px-2 text-sm rounded text-green-400 border ${
                              enabled ? 'bg-black border-green-400' : 'bg-gray-700 border-gray-500'
                            }`}
                          />
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      )}

      <div className="mt-4">
        <button
          className="btn-option flex-1 h-8 px-2 text-sm flex items-center justify-center w-full"
          onClick={() => navigate(`/${model}-info`)}
        >
          {`Learn more about the ${displayModel} model`}
        </button>
      </div>

    </div>
  );
}

export default InputPanel;
