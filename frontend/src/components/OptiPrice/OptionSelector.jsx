import React from 'react';

function OptionSelector({ model, setModel }) {
  const modelOptions = ['black-scholes', 'binomial', 'monte-carlo'];

  return (
    <div className="flex gap-4 mb-6">
      {modelOptions.map((m) => (
        <button
          key={m}
          onClick={() => setModel(m)}
          className={`px-4 py-2 rounded font-bold border ${
            model === m
              ? 'bg-green-500 text-black border-green-500'
              : 'border-green-400 text-green-300 hover:bg-green-700'
          }`}
        >
          {m.replace('-', ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
        </button>
      ))}
    </div>
  );
}

export default OptionSelector;
