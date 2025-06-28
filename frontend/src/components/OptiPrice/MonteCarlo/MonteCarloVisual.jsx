import React from 'react';

function MonteCarloVisual({ form }) {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Monte Carlo Simulation
        </h2>
        <p className="text-gray-600">
          Simulation-based option pricing (Coming Soon)
        </p>
      </div>

      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-amber-800 mb-2">
            Monte Carlo Implementation
          </h3>
          <p className="text-amber-700 mb-6">
            Advanced simulation-based pricing engine is currently under development. 
            This will include path-dependent options, exotic derivatives, and variance reduction techniques.
          </p>
          
          <div className="bg-white/60 rounded-xl p-4 border border-amber-300/50">
            <h4 className="font-medium text-amber-800 mb-2">Planned Features</h4>
            <ul className="text-sm text-amber-700 space-y-1 text-left max-w-md mx-auto">
              <li>• Geometric Brownian Motion simulation</li>
              <li>• Antithetic variates for variance reduction</li>
              <li>• Control variates optimization</li>
              <li>• Path-dependent option support</li>
              <li>• Real-time convergence visualization</li>
              <li>• Multiple random number generators</li>
            </ul>
          </div>
          
          <div className="mt-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
              Expected Release: Q2 2025
            </span>
          </div>
        </div>
      </div>

      {/* Preview Parameters */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Preview: Monte Carlo Parameters
        </h3>
        <div className="grid grid-cols-2 gap-4 opacity-50">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Number of Simulations
            </label>
            <input
              type="number"
              value={form.simulations || '100000'}
              disabled
              className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 text-gray-500 cursor-not-allowed"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Time Steps
            </label>
            <input
              type="number"
              value={form.timeSteps || '252'}
              disabled
              className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 text-gray-500 cursor-not-allowed"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Random Seed
            </label>
            <input
              type="number"
              placeholder="42"
              disabled
              className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 text-gray-500 cursor-not-allowed"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Variance Reduction
            </label>
            <select
              disabled
              className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 text-gray-500 cursor-not-allowed"
            >
              <option>Antithetic Variates</option>
              <option>Control Variates</option>
              <option>Importance Sampling</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MonteCarloVisual;