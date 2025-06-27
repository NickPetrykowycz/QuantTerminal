// frontend/src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import OptiPrice from './pages/OptiPrice';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/toolbox/optiprice" element={<OptiPrice />} />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;