import React from "react";
import "../../styles/common/Landing.css";

import { lazy, Suspense } from "react";


const Button = lazy(() => import("../../components/Button"));

export default function Landing() {
  return (
    <>
    <div className="hero-container" id="home">
     
      <div className="hero-content">
        <h2>
          Welcome to Smart Fixly
        </h2>
        <p >
          Together, we build cleaner, safer, and smarter cities.
        </p>
      </div>
      <Button label="Get Started" to="/login" className="btn primary-btn " />

    </div>
    <div className="features-section" id="features-section">
      <h2 className="section-title">A New Standard for Civic Engagement</h2>
      <p className="section-subtitle">
        SmartFixly is more than just an app; it's a complete ecosystem designed
        to rebuild trust and efficiency. We connect citizens and authorities
        through a transparent, verified, and intelligent platform.
      </p>
      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z"
              />
            </svg>
          </div>
          <h3>Verified Citizen Reporting</h3>
          <p>
            No more fake complaints. With Aadhaar verification via DigiLocker
            and precise GIS location tagging, municipalities receive only
            genuine, actionable reports from real citizens.
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.624l.21-1.032a3.375 3.375 0 00-2.456-2.456l-1.032-.21-.21 1.032a3.375 3.375 0 002.456 2.456l1.032.21z"
              />
            </svg>
          </div>
          <h3>AI-Powered Categorization</h3>
          <p>
            Our intelligent system analyzes user-submitted photos to
            automatically detect the problem—be it a pothole, garbage, or water
            leak—and routes it to the correct department instantly.
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <h3>Real-Time Transparent Tracking</h3>
          <p>
            Follow your complaint's journey from "Registered" to "In Progress"
            to "Resolved." Access final reports and provide feedback to help
            create accountability and improve city services.
          </p>
        </div>
      </div>
    </div>
    <div className="about-section" id="about-section">
      <div className="mission-container">
        <div className="mission-text">
          <span className="tag">Our Mission</span>
          <h2>Bridging the Gap Between Citizens & Governance</h2>
          <p>
            SmartFixly was born from a simple observation: a fundamental
            disconnect between citizens and the authorities meant to serve them.
            We saw daily civic issues go unheard and trust erode due to slow,
            opaque systems. Our mission is to rebuild that trust with a single,
            unified platform that fosters transparency, accountability, and
            collaboration.
          </p>
        </div>
        <div className="mission-illustration">
          <svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M 10 80 Q 50 20, 100 80 T 190 80"
              stroke="#0c66e4"
              stroke-width="4"
              fill="none"
              stroke-dasharray="8 4"
            />
            <g fill="#4a5568">
              <circle cx="20" cy="110" r="8" />
              <circle cx="45" cy="115" r="6" />
              <circle cx="30" cy="125" r="5" />
            </g>
            <g fill="#4a5568">
              <rect x="160" y="100" width="30" height="30" rx="4" />
              <polygon points="155,100 195,100 175,85" />
            </g>
            <text
              x="5"
              y="145"
              font-family="sans-serif"
              font-size="10"
              fill="#24292e"
            >
              Citizens
            </text>
            <text
              x="150"
              y="145"
              font-family="sans-serif"
              font-size="10"
              fill="#24292e"
            >
              Authorities
            </text>
          </svg>
        </div>
      </div>

      <div className="values-container">
        <h3>Our Core Values</h3>
        <div className="values-grid">
          <div className="value-item">
            <div className="value-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h4>Trust</h4>
            <p>
              We build trust through verified reporting and transparent
              processes, ensuring every voice is heard and valued.
            </p>
          </div>
          <div className="value-item">
            <div className="value-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>
            </div>
            <h4>Efficiency</h4>
            <p>
              Using AI and intelligent routing, we ensure that problems are
              addressed quickly and by the right people.
            </p>
          </div>
          <div className="value-item">
            <div className="value-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 10.5V6.75a4.5 4.5 0 00-9 0v3.75M3.75 10.5h16.5v11.25h-16.5V10.5z"
                />
              </svg>
            </div>
            <h4>Accountability</h4>
            <p>
              Our platform provides clear data and feedback loops, empowering
              citizens and helping authorities improve.
            </p>
          </div>
        </div>
      </div>
    </div>

    </>
  );
}
