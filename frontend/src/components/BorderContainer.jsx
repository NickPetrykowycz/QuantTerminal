import React from "react";
import "../styles/BorderAnimations.css";

const BorderContainer= ({
  children,
  onAnimationEnd,
}) => (
  <div
    className="relative flex justify-center items-center"
    style={{
      width: "90vw",
      height: "90vh",
      maxWidth: "90vw",
      maxHeight: "90vh",
    }}
  >
    {/* Outer Borders */}
    <div
      className="box-border absolute z-0"
      style={{
        top: "-0.75rem",
        left: "-0.75rem",
        width: "calc(100% + 1.5rem)",
        height: "calc(100% + 1.5rem)",
      }}
    >
      <span className="terminal-border-line terminal-border-top" />
      <span className="terminal-border-line terminal-border-right" />
      <span className="terminal-border-line terminal-border-bottom" />
      <span className="terminal-border-line terminal-border-left" />
    </div>
    {/* Inner Borders */}
    <div className="box-border relative w-full h-full z-10" onAnimationEnd={onAnimationEnd}>
      <span className="terminal-border-line terminal-border-top" />
      <span className="terminal-border-line terminal-border-right" />
      <span className="terminal-border-line terminal-border-bottom" />
      <span className="terminal-border-line terminal-border-left" />
      <div className="absolute inset-0 p-3 z-20 h-full w-full flex flex-col justify-center items-center">
        {children}
      </div>
    </div>
  </div>
);

export default BorderContainer;
