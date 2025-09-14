import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/components/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Function to scroll smoothly to a section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClick = (id) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: true });
      setTimeout(() => scrollToSection(id), 100);
    } else {
      scrollToSection(id);
    }
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <h1>
        <button
          className="logo-link"
          onClick={() => handleClick("/")}
          style={{ cursor: "pointer" }}
        >
          <img src="logo.svg" alt="SmartFixly Logo" className="logo-svg" />
          <span>SmartFixly</span>
        </button>
      </h1>

      {/* Hamburger / Close Button */}
      <button
        className="hamburger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Nav Links */}
      <ul className={`navLinks ${isOpen ? "show" : ""}`}>
        <li>
          <button
            className= "nav-link"
            onClick={() => handleClick("home")}
          >
            Home
          </button>
        </li>
        <li>
          <button
            className="nav-link"
            onClick={() => handleClick("features-section")}
          >
            Features
          </button>
        </li>
        <li>
          <button
            className="nav-link"
            onClick={() => handleClick("about-section")}
          >
            About
          </button>
        </li>
        <li>
          <button
            className={`login-btn ${location.pathname === "/login" ? "active" : ""}`}
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </li>
        <li>
          <button
            className={`register-btn ${location.pathname === "/register" ? "active" : ""}`}
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
