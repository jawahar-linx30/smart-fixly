import React from "react";
import "../../styles/common/Landing.css";
import Button from "../../components/Button";

export default function Landing() {
  return (
    <div className="hero-container">
     
      <div className="hero-content">
        <h2>
          Welcome to Smart Fixly
        </h2>
        <p >
          Together, we build cleaner, safer, and smarter cities.
        </p>
      </div>
      <Button label="Get Started" />
    </div>
  );
}
