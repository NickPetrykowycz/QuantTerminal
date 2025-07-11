// frontend/src/pages/LearningCenter.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { useAuth } from '../contexts/AuthContext';

const LearningCenter = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const learningTopics = [
    {
      title: "Options Trading",
      description: "Master options pricing models, strategies, and risk management fundamentals",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      route: "/learning/options",
      topics: ["Options Overview", "American vs European", "Asian Options", "Black-Scholes Model", "Binomial Trees", "Monte Carlo Methods"],
      comingSoon: false
    },
    {
      title: "Fixed Income",
      description: "Bond pricing, yield curves, duration, convexity, and credit risk analysis",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      route: "/learning/fixed-income",
      topics: ["Bond Fundamentals", "Yield Calculations", "Duration & Convexity", "Term Structure Models"],
      comingSoon: true
    },
    {
      title: "Portfolio Theory",
      description: "Modern portfolio theory, risk-return optimization, and asset allocation strategies",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
        </svg>
      ),
      gradient: "from-purple-500 to-indigo-500",
      bgGradient: "from-purple-50 to-indigo-50",
      route: "/learning/portfolio",
      topics: ["Markowitz Optimization", "CAPM", "Factor Models", "Risk Metrics"],
      comingSoon: true
    },
    {
      title: "Risk Management",
      description: "Value at Risk, stress testing, scenario analysis, and regulatory frameworks",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      gradient: "from-red-500 to-pink-500",
      bgGradient: "from-red-50 to-pink-50",
      route: "/learning/risk",
      topics: ["VaR Models", "Stress Testing", "Monte Carlo Simulation", "Basel Framework"],
      comingSoon: true
    }
  ];

  const handleTopicClick = (topic) => {
    if (topic.comingSoon) {
      return; // Don't navigate if coming soon
    }
    navigate(topic.route);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-indigo-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-tr from-purple-400/10 to-pink-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/5 to-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      <Navigation user={user} currentPage="learning" />

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Learning Center
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master quantitative finance through interactive tutorials, comprehensive guides, 
              and practical examples. From beginner concepts to advanced modeling techniques.
            </p>
          </div>

          {/* Learning Progress */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200/50 p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">7</div>
              <div className="text-gray-600">Total Lessons</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200/50 p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">0</div>
              <div className="text-gray-600">Lessons Completed</div>
            </div>
          </div>

          {/* Learning Topics Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {learningTopics.map((topic, index) => (
              <div
                key={index}
                onClick={() => handleTopicClick(topic)}
                className={`group relative bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200/50 p-8 shadow-lg transition-all duration-300 ${
                  topic.comingSoon 
                    ? 'opacity-75 cursor-default' 
                    : 'hover:shadow-xl hover:scale-[1.02] cursor-pointer'
                }`}
              >
                {/* Coming Soon Badge */}
                {topic.comingSoon && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Coming Soon
                  </div>
                )}

                {/* Header */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${topic.gradient} text-white flex-shrink-0`}>
                    {topic.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {topic.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {topic.description}
                    </p>
                  </div>
                </div>

                {/* Topics List */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                    What You'll Learn
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {topic.topics.map((subtopic, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${topic.gradient} flex-shrink-0`}></div>
                        <span>{subtopic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arrow indicator for available topics */}
                {!topic.comingSoon && (
                  <div className="absolute bottom-6 right-6 text-gray-400 group-hover:text-blue-600 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Additional Features */}
          <div className="mt-16 text-center">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200/50 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Interactive Learning Experience
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Our learning platform integrates directly with QuantTerminal's pricing tools, 
                allowing you to practice concepts in real-time with live calculations and visualizations.
              </p>
              <div className="flex justify-center space-x-8 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Interactive Examples</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Real-time Calculations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Visual Learning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningCenter;