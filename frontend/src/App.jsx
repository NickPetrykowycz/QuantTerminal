// frontend/src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import OptiPrice from './pages/OptiPrice';
import LearningCenter from './pages/LearningCenter';
import OptionsHub from './pages/OptionsHub';
import OptionsOverview from './pages/OptionsOverview';
import AmericanOptions from './pages/AmericanOptions';
import EuropeanOptions from './pages/EuropeanOptions';
import AsianOptions from './pages/AsianOptions';
import BlackScholes from './pages/BlackScholes';
import BinomialOptions from './pages/BinomialOptions';
import MonteCarloOptions from './pages/MonteCarloOptions';
import OptionsGreeks from './pages/OptionsGreeks';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/toolbox/optiprice" element={<OptiPrice />} />
          <Route path="/learning" element={<LearningCenter />} />
          <Route path="/learning/options" element={<OptionsHub />} />
          <Route path="/learning/options/overview" element={<OptionsOverview />} />
          <Route path="/learning/options/american" element={<AmericanOptions />} />
          <Route path="/learning/options/european" element={<EuropeanOptions />} />
          <Route path="/learning/options/asian" element={<AsianOptions />} />
          <Route path="/learning/options/black-scholes" element={<BlackScholes />} />
          <Route path="/learning/options/binomial" element={<BinomialOptions />} />
          <Route path="/learning/options/monte-carlo" element={<MonteCarloOptions />} />
          <Route path="/learning/options/greeks" element={<OptionsGreeks />} />
          {/* Redirect root path to login */}
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;