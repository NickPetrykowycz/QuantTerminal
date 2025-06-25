import React, { useState } from 'react';
import BorderContainerStatic from '../components/BorderContainer';
import InputPanel from '../components/OptiPrice/InputPanel';
import BlackScholesVisual from '../components/OptiPrice/BlackScholes/BlackScholesVisual';
import BinomialVisual from '../components/OptiPrice/Binomial/BinomialVisual';
import MonteCarloVisual from '../components/OptiPrice/MonteCarlo/MonteCarloVisual';
import { MathJaxContext } from 'better-react-mathjax';

function OptiPrice() {
  const [model, setModel] = useState('black-scholes');
  const [result, setResult] = useState(null);

  const [form, setForm] = useState({
    includeDividend: false,
    S0: '',
    K: '',
    T: '',
    r: '',
    sigma: '',
    q: '',
    option_type: 'call',
    N: 100,
    american: false,
  });

  const [binomial, setBinomial] = useState({
    convergence: [],
    price: null,
    precision: 'simple',
  });
  const [loading, setLoading] = useState(false);

  async function fetchBinomialPrice(form, precision = 'simple') {
    const payload = {
      S0: Number(form.S0),
      K: Number(form.K),
      T: Number(form.T),
      r: Number(form.r),
      sigma: Number(form.sigma),
      N:512,
      option_type: form.option_type,
      style: form.style ? form.style : (form.american ? 'american' : 'european'),
      dividend_mode: form.dividend_mode ? form.dividend_mode : (form.includeDividend ? (form.q ? 'yield' : 'discrete') : 'none'),
      precision,
      q: form.includeDividend && form.dividend_mode === 'yield' ? Number(form.q) : null,
      dividend_freq: form.includeDividend && form.dividend_mode === 'discrete' ? Number(form.dividend_freq) : null,
      dividend_amt: form.includeDividend && form.dividend_mode === 'discrete' ? Number(form.dividend_amt) : null,
      dividend_first_day: form.includeDividend && form.dividend_mode === 'discrete' ? Number(form.dividend_first_day) : null,
    };
    const res = await fetch('http://localhost:8000/api/binomial', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error('API error');
    return await res.json();
  }

const handleBinomialPrecisionChange = (precision) => {
  setBinomial(s => ({ ...s, precision }));
};

const handleBinomialGenerate = async () => {
  setLoading(true);
  try {
    const result = await fetchBinomialPrice(form, binomial.precision);
    setBinomial(s => ({
      ...s,
      convergence: result.convergence,
      price: result.price,
    }));
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="bg-black text-green-400 font-mono min-h-screen flex items-center justify-center">
      <BorderContainerStatic className="w-11/12 h-[85vh] shadow-[0_0_60px_8px_#22c55e99] border-4 border-green-400 rounded-3xl transition-all duration-300">
        <MathJaxContext>
          <div className="flex w-full h-full">
            {/* Left Panel */}
            <div className="w-1/2 h-full p-6 border-r border-green-600 overflow-y-disabled">
              <h1 className="text-4xl font-bold mb-4">OptiPrice</h1>
              <p className="text-lg mb-6">Options made simple. Pricing made powerful.</p>
              <div className="h-[calc(100%-6rem)] flex flex-col justify-between">
                <InputPanel
                  model={model}
                  setModel={setModel}
                  form={form}
                  setForm={setForm}
                  setResult={setResult}
                />
              </div>
            </div>

            {/* Right Panel */}
            <div className="w-[60%] h-full p-6 overflow-y-auto bg-black/95 border-l border-green-700">
              {model === 'black-scholes' && <BlackScholesVisual form={form} />}
              {model === 'binomial' && (
                <BinomialVisual
                  form={form}
                  convergence={binomial.convergence}
                  precision={binomial.precision}
                  onPrecisionChange={handleBinomialPrecisionChange}
                  onGenerate={handleBinomialGenerate}
                  price={binomial.price}
                  loading={loading}
                />
              )}
              {model === 'monte-carlo' && <MonteCarloVisual form={form} />}
              {result !== null && (
                <div className="mt-6 text-xl">
                  Result: <span className="text-green-300">${result}</span>
                </div>
              )}
            </div>
          </div>
        </MathJaxContext>
      </BorderContainerStatic>
    </div>
  );
}

export default OptiPrice;
