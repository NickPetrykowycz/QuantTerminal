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
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;