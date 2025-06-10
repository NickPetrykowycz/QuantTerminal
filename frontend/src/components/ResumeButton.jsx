import React from 'react';
import { useNavigate } from 'react-router-dom';

const ResumeButton = () => {
  const navigate = useNavigate();
  return (
    <button
      className="bg-green-500 text-black font-bold py-2 px-6 rounded mt-4 shadow-lg hover:bg-green-600 transition"
      onClick={() => navigate('/resume')}
    >
      View Resume
    </button>
  );
};
export default ResumeButton;
