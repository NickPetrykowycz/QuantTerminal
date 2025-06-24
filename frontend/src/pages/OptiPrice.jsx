import React, { useState } from 'react';
import BorderContainerStatic from '../components/BorderContainer';
import OptionSelector from '../components/OptiPrice/OptionSelector';
import InputPanel from '../components/OptiPrice/InputPanel';
import BlackScholesVisual from '../components/OptiPrice/BlackScholesVisual';
import BinomialVisual from '../components/OptiPrice/BinomialVisual';
import MonteCarloVisual from '../components/OptiPrice/MonteCarloVisual';
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
              {model === 'binomial' && <BinomialVisual form={form} />}
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
