import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/IconsGlow.css";

const FlexibleIconButton = ({
  icon,
  label,
  to = "/",            // route to navigate to
  iconSize = "6rem",
  className = "",
  labelClassName = "",
  ...rest
}) => {
  const navigate = useNavigate();

  // Keyboard accessibility: Enter/Space triggers navigation
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      navigate(to);
    }
  };

  return (
    <div
      className={`flex flex-col items-center flexible-icon-btn cursor-pointer select-none p-0 m-2 ${className}`}
      style={{ background: "none" }}
      role="button"
      tabIndex={0}
      onClick={() => navigate(to)}
      onKeyDown={handleKeyDown}
      {...rest}
    >
      <div
        className="glow-green-icon"
        style={{ fontSize: iconSize, marginBottom: "0.3rem", display: "block" }}
      >
        {icon}
      </div>
      <div
        className={`font-mono glow-green text-sm block text-center ${labelClassName}`}
        style={{ marginTop: "-0.6rem"  }}
      >
        {label}
      </div>
    </div>
  );
};

export default FlexibleIconButton;
