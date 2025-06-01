import React from 'react';
import '../styles/BorderAnimations.css';

const BorderContainer = ({ children, onAnimationEnd }) => {
  return (
    <div className="relative flex justify-center items-center w-[80vw] max-w-[700px] h-[50vh] max-h-[400px]">
      {/* Outer Border with fixed offset */}
      <div className="box-border absolute z-0" style={{ top: '-0.75rem', left: '-0.75rem', width: 'calc(100% + 1.5rem)', height: 'calc(100% + 1.5rem)' }}>
        <span className="outer-border-top" onAnimationEnd={onAnimationEnd} />
        <span className="outer-border-right" />
        <span className="outer-border-bottom" />
        <span className="outer-border-left" />
      </div>

      {/* Inner Border and Content */}
      <div className="box-border relative w-full h-full z-10" onAnimationEnd={onAnimationEnd}>
        <span className="inner-border-top" />
        <span className="inner-border-right" />
        <span className="inner-border-bottom" />
        <span className="inner-border-left" />
        <div className="absolute inset-0 p-3 z-20 h-full w-full flex flex-col justify-center items-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default BorderContainer;
