import React from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-black text-green-400 font-mono h-full min-h-screen w-full flex flex-col items-center justify-center">
      <h1 className="text-6xl mb-6">QuantTerminal</h1>
      <button
        onClick={() => navigate('/home')}
        className="border border-green-400 px-6 py-2 text-lg hover:bg-green-400 hover:text-black transition"
      >
        Launch Terminal
      </button>
    </div>
  );
}

export default LandingPage;