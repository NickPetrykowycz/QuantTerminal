// frontend/src/pages/OptionsHub.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { useAuth } from '../contexts/AuthContext';

const OptionsHub = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const optionsConcepts = [
    {
      title: "Options Overview",
      description: "Introduction to options contracts, terminology, and basic strategies",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      gradient: "from-blue-500 to-cyan-500",
      route: "/learning/options/overview",
      difficulty: "Beginner",
      duration: "15 min",
      completed: false
    },
    {
      title: "European Options",
      description: "Exercise restrictions, analytical solutions, and theoretical foundations",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
        </svg>
      ),
      gradient: "from-blue-600 to-indigo-600",
      route: "/learning/options/european",
      difficulty: "Intermediate",
      duration: "25 min",
      completed: false
    },
    {
      title: "American Options",
      description: "Early exercise features, optimal exercise strategies, and pricing considerations",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
        </svg>
      ),
      gradient: "from-red-500 to-rose-500",
      route: "/learning/options/american",
      difficulty: "Intermediate",
      duration: "35 min",
      completed: false
    },
    {
      title: "Asian Options",
      description: "Path-dependent payoffs, average price/strike options, and exotic derivatives",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064" />
        </svg>
      ),
      gradient: "from-amber-500 to-orange-500",
      route: "/learning/options/asian",
      difficulty: "Advanced",
      duration: "35 min",
      completed: false
    },
    {
      title: "Black-Scholes Model",
      description: "Analytical pricing formula, assumptions, Greeks, and practical applications",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      gradient: "from-purple-500 to-indigo-500",
      route: "/learning/options/black-scholes",
      difficulty: "Intermediate",
      duration: "45 min",
      completed: false
    },
    {
      title: "Binomial Model",
      description: "Tree-based pricing, American exercise, convergence analysis, and flexibility",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      gradient: "from-green-500 to-emerald-500",
      route: "/learning/options/binomial",
      difficulty: "Intermediate",
      duration: "45 min",
      completed: false
    },
    {
      title: "Monte Carlo Methods",
      description: "Simulation-based pricing, variance reduction, path-dependent options",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
      gradient: "from-teal-500 to-cyan-500",
      route: "/learning/options/monte-carlo",
      difficulty: "Advanced",
      duration: "40 min",
      completed: false
    }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-600 bg-green-100';
      case 'Intermediate': return 'text-blue-600 bg-blue-100';
      case 'Advanced': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const handleConceptClick = (concept) => {
    navigate(concept.route);
  };

  const handleTryCalculator = () => {
    navigate('/toolbox/optiprice');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-indigo-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-tr from-purple-400/10 to-pink-600/10 rounded-full blur-3xl"></div>
      </div>

      <Navigation user={user} currentPage="learning" />

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <nav className="text-sm mb-4">
              <button 
                onClick={() => navigate('/learning')}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Learning Center
              </button>
              <span className="mx-2 text-gray-500">/</span>
              <span className="text-gray-700">Options Trading</span>
            </nav>
            
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  Options Trading Mastery
                </h1>
                <p className="text-xl text-gray-600">
                  From basic concepts to advanced pricing models
                </p>
              </div>
              <button
                onClick={handleTryCalculator}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Try OptiPrice Calculator →
              </button>
            </div>
          </div>

          {/* Progress Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200/50 p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">7</div>
              <div className="text-gray-600">Total Lessons</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200/50 p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">0</div>
              <div className="text-gray-600">Lessons Completed</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200/50 p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
              <div className="text-gray-600">Topics Explored</div>
            </div>
          </div>

          {/* Learning Path */}
          <div className="space-y-6">
            {optionsConcepts.map((concept, index) => (
              <div
                key={index}
                onClick={() => handleConceptClick(concept)}
                className="group bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200/50 p-6 shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center space-x-6">
                  {/* Icon */}
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${concept.gradient} text-white flex-shrink-0`}>
                    {concept.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {concept.title}
                      </h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(concept.difficulty)}`}>
                        {concept.difficulty}
                      </span>
                      <span className="text-sm text-gray-500">
                        {concept.duration}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {concept.description}
                    </p>
                  </div>

                  {/* Status and Arrow */}
                  <div className="flex items-center space-x-4">
                    {concept.completed ? (
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    ) : (
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                        <span className="text-sm font-semibold text-gray-600">{index + 1}</span>
                      </div>
                    )}
                    
                    <div className="text-gray-400 group-hover:text-blue-600 transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-12 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-200/50 p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Learning?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Begin your options trading journey with our comprehensive overview. 
              Each lesson builds on the previous one, guiding you from basic concepts to advanced pricing models.
            </p>
            <button
              onClick={() => navigate('/learning/options/overview')}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Start with Options Overview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionsHub;