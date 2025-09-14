import React from 'react'
import Button from "../../components/Button";
import "../../styles/auth/Register.css";

export default function Register() {
  return (
    <div className="register-page">
      <div className="register-container">
      <div className="logo-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5" // ✅ camelCase
          stroke="currentColor"
        >
          <path
            strokeLinecap="round" // ✅ camelCase
            strokeLinejoin="round" // ✅ camelCase
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>

      <h2>Create Your Account</h2>
      <p>Join SmartFixly to help improve your city.</p>

      <form action="#" method="POST">
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Create Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter a secure password"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            placeholder="Re-enter your password"
            required
          />
        </div>

        {/* ✅ Reusable button */}
        <Button label="Register" to="/otp" className="btn primary-btn" />
      </form>

      <div className="login-link">
        <p>
          Already have an account? <a href="/login">Login here</a>
        </p>
      </div>
    </div>
    </div>
  )
}
