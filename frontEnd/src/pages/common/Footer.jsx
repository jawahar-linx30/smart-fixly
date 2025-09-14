import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../../styles/common/Footer.css";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClick = (id, path = "/") => {
    if (location.pathname !== path) {
      navigate(path, { replace: true });
      setTimeout(() => scrollToSection(id), 100);
    } else {
      scrollToSection(id);
    }
  };

  return (
    <footer className="footer">
      <hr />
      <div className="footer-content">
        {/* Logo and description */}
        <div className="footer-logo">
          <img
            src="/logo.svg"
            alt="SmartFixly Logo"
            className="footer-logo-img"
          />
          <span>SmartFixly</span>
        </div>

        {/* Quick links */}
        <div className="footer-links">
          <ul>
            <li>
              <button onClick={() => handleClick("home")}>Home</button>
            </li>
            <li>
              <button onClick={() => handleClick("features-section")}>
                Features
              </button>
            </li>
            <li>
              <button onClick={() => handleClick("about-section")}>About</button>
            </li>
            <li>
              <button onClick={() => navigate("/login")}>Login</button>
            </li>
            <li>
              <button onClick={() => navigate("/register")}>Register</button>
            </li>
          </ul>
        </div>

        {/* Contact info */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Email: support@smartfixly.com</p>
          <p>Phone: +91 12345 67890</p>
          <p>Address: 123 Smart City, India</p>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} SmartFixly. All rights reserved.</p>
      </div>
    </footer>
  );
}
