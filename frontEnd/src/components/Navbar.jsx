import "../styles/common/Navbar.css";

import Navlinks from "./Navlinks";


function Navbar() {
  return (
    <nav className="navbar">
      <h1>
        <a href="#home" className="logo-link">
          <img src="/logo.svg" alt="SmartFixly Logo" className="logo-svg" />
          <span>SmartFixly</span>
        </a>
      </h1>
      <Navlinks />
    </nav>
  );
}

export default Navbar;
