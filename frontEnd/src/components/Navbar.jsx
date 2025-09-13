import React from "react";
import Navlinks from "./Navlinks"; 

function Navbar() {
  return (
    <nav className="navbar">
      <h1>
        <a href="#home" class="logo-link">
          <svg
            class="logo-svg"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-3zm-1.09 14.17L7.5 12.76l1.41-1.41 2 2 4.09-4.09L16.41 11 10.91 16.17z"
              fill="#24292e"
            />
          </svg>
          <span>SmartFixly</span>
        </a>
      </h1>
      <Navlinks />
    </nav>
  );
}

export default Navbar;
