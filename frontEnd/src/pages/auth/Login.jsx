import React from "react";
import "../../styles/auth/Login.css";
import Button from "../../components/Button"; // ✅ import your reusable Button

export default function Login() {
  return (
    <div className="login-page">
    <div className="login-container">
      <div className="logo-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5} // ✅ use {} for numbers
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>

      <h2>Citizen Login</h2>
      <p>Please enter your mobile number to receive a verification code.</p>

      <form action="#" method="POST">
        <div className="input-group">
          <label htmlFor="mobile">Registered Mobile Number</label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            placeholder="Enter 10-digit mobile number"
            required
          />
        </div>

        {/* ✅ Reusable Button */}
        <Button label="Send OTP" to="/otp" className="btn primary-btn " />
      </form>

      <div className="divider">
        <span>or</span>
      </div>

      <a href="staff_login" className="municipal-login-link">
        Login for Municipal Staff
      </a>
    </div>
    </div>
  );
}
