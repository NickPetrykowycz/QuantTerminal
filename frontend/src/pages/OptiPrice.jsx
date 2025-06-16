import React, { useState } from 'react';
import axios from 'axios';
import BorderContainerStatic from '../components/BorderContainer';

function OptiPrice() {
  const [form, setForm] = useState({
    S0: 100,
    K: 100,
    T: 1,
    r: 0.05,
    sigma: 0.2,
    q: 0.0,
    option_type: 'call',
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === 'option_type' ? value : parseFloat(value),
    }));
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post('http://localhost:8000/api/blackscholes', form);
      setResult(res.data.price);
    } catch (error) {
      console.error('Pricing error:', error);
      setResult('Error');
    }
  };

  return (
    <div className="bg-black text-green-400 font-mono min-h-screen flex flex-col items-center justify-center">
      <BorderContainerStatic className="shadow-[0_0_60px_8px_#22c55e99] border-4 border-green-400 rounded-3xl transition-all duration-300">
        <div className="flex flex-col items-center w-full h-full p-8">
          <h1 className="text-4xl font-bold mb-6">OptiPrice</h1>
          <p className="text-lg mb-6">Options made simple. Pricing made powerful.</p>

          <div className="grid grid-cols-2 gap-4 mb-4">
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
            <div className="flex flex-col col-span-2">
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
          </div>

          <button
            className="bg-green-500 text-black px-4 py-2 rounded hover:bg-green-400 transition"
            onClick={handleSubmit}
          >
            Calculate Price
          </button>

          {result !== null && (
            <div className="mt-6 text-xl">
              Result: <span className="text-green-300">${result}</span>
            </div>
          )}
        </div>
      </BorderContainerStatic>
    </div>
  );
}

export default OptiPrice;
