import React from 'react';
import BinomialChart from './BinomialChart';

function BinomialVisual({
  convergence = [],
  precision = 'advanced',
  onPrecisionChange,
  onGenerate,
  price,
  form,
  loading
}) {
  const precisionOptions = [
    { label: 'Low (Log steps)', value: 'simple' },
    { label: 'Medium (Linear+Log steps)', value: 'advanced' },
    { label: 'High (All steps)', value: 'precise' },
  ];
  const isCall = form?.option_type === 'call';
  const optionTypeText = isCall ? 'Call Option' : 'Put Option';

  const isAmerican = form?.style === 'american' || form?.american === true;
  const styleText = isAmerican ? 'American' : 'European';

  return (
    <div className="bg-black rounded-lg shadow-lg p-6 h-full flex flex-col">
      <h1 className="text-4xl font-bold text-green-400 text-center mb-2">
        Binomial Model
      </h1>

      {/* Always show Option Price ≈ */}
      <div className="flex justify-center mb-6">
        <div className=" bg-opacity-60 rounded px-4 py-2 text-green-300 text-2xl font-mono">
        {styleText}  {optionTypeText}  Price ≈ {typeof price === 'number' ? price.toFixed(4) : '—'}
        </div>
      </div>
      <div className="text-xs text-green-500 block mb-2 text-center">
        All modes calculate the price at N = <b>512</b>. Precision only changes the number of convergence points shown.
      </div>
      {/* Picker row */}
      <div className="flex gap-2 mb-3">
        {precisionOptions.map(opt => (
          <button
            key={opt.value}
            onClick={() => onPrecisionChange(opt.value)}
            className={`btn-option flex-1 h-10 px-2 text-sm flex items-center justify-center ${precision === opt.value ? 'active' : ''}`}
            title={opt.label}
            disabled={loading}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {/* Big generate button */}
      <button
        className="btn-option w-full h-12 mb-6 mt-1 text-base flex items-center justify-center"
        onClick={onGenerate}
        disabled={loading}
      >
        {loading ? 'Generating...' : 'Generate'}
      </button>

      {/* Chart */}
      <div className="flex-1 min-h-[260px]">
        <BinomialChart data={convergence} />
      </div>
    </div>
  );
}

export default BinomialVisual;
