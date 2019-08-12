import React from "react";
import "./ThoughtWorksLogo.css";

function ThoughtWorksLogo() {
  return (
    <div className="logo-container">
      <img
        src="ThoughtWorks-logo.jpg"
        alt="ThoughtWorks logo"
        className="logo-img"
        data-testid="logoImg"
      />
    </div>
  );
}

export default ThoughtWorksLogo;
