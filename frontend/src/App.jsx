import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import ToolBoxPage from './pages/ToolboxPage';
import OptiPrice from './pages/OptiPrice';
import React from 'react';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/toolbox" element={<ToolBoxPage/>} />
        <Route path="/toolbox/optiprice" element={<OptiPrice />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;