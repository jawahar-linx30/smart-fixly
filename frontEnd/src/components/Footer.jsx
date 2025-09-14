import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/components/Footer.css";

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
            src="logo.svg"
            alt="SmartFixly Logo"
            className="footer-logo-img"
          />
          <span>SmartFixly</span>
        </div>

        {/* Contact info */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Email: likemindscommunity01@gmail.com</p>
          <p>Phone: +91 9585220223</p>
          <p>Address: Loyola Institute of Technology</p>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} SmartFixly. All rights reserved.</p>
      </div>
    </footer>
  );
}
