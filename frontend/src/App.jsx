import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>

        {/*Pages*/}
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />

        {/* Catch-all for unknown URLs → redirect to /home */}
        <Route path="*" element={<Navigate to="/home" replace />} />
        
      </Routes>
    </Router>
  );
}

export default App;