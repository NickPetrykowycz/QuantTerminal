import React, { useState } from 'react';
import BorderContainerStatic from '../components/BorderContainer';
import OptionSelector from '../components/OptiPrice/OptionSelector';
import InputPanel from '../components/OptiPrice/InputPanel';
import BlackScholesVisual from '../components/OptiPrice/BlackScholesVisual';
import BinomialVisual from '../components/OptiPrice/BinomialVisual';
import MonteCarloVisual from '../components/OptiPrice/MonteCarloVisual';

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

  return (
    <div className="bg-black text-green-400 font-mono min-h-screen flex items-center justify-center">
      <BorderContainerStatic className="w-11/12 h-[85vh] shadow-[0_0_60px_8px_#22c55e99] border-4 border-green-400 rounded-3xl transition-all duration-300">
        <div className="flex w-full h-full">
          {/* Left Panel: Inputs */}
          <div className="w-1/2 p-6 border-r border-green-600 overflow-y-auto">
            <h1 className="text-4xl font-bold mb-4">OptiPrice</h1>
            <p className="text-lg mb-6">Options made simple. Pricing made powerful.</p>
            <OptionSelector model={model} setModel={setModel} />
            <InputPanel model={model} form={form} setForm={setForm} setResult={setResult} />
          </div>

          {/* Right Panel: Visuals */}
          <div className="w-1/2 p-6 overflow-y-auto">
            {model === 'black-scholes' && <BlackScholesVisual form={form} />}
            {model === 'binomial' && <BinomialVisual form={form} />}
            {model === 'monte-carlo' && <MonteCarloVisual form={form} />}
          </div>
        </div>
      </BorderContainerStatic>
    </div>
  );
}

export default OptiPrice;