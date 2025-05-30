import React from 'react';

function HomePage() {
  return (
    <div className="bg-black text-green-400 font-mono min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-4xl">Welcome to the Terminal</h2>
      <p className="text-green-300 mt-4">Choose a tool to get started.</p>
    </div>
  );
}

export default HomePage;