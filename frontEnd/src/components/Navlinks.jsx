import { NavLink } from "react-router-dom";

const linkElements = [
  { name: "Home", path: "/", class: "active" },
  { name: "Features", path: "/features", class: "" },
  { name: "About", path: "/about", class: "" },
  { name: "Login", path: "/login", class: "" },
  { name: "Register", path: "/register", class: "" },
];

export default function Navlink() {
  return (
    <ul className="navLinks">
      {linkElements.map((link, index) => (
        <li>
          <NavLink
            to={link.path}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {link.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
