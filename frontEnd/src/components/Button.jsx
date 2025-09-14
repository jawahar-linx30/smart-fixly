import React from "react";
import "../styles/components/Button.css";
import { useNavigate } from "react-router-dom";

export default function Button({ label, to, className }) {
  const navigate = useNavigate();

  return (
    <button
      className={`custom-button ${className ? className : ""}`} // append extra classes
      onClick={() => navigate(to)}
    >
      {label}
    </button>
  );
}
