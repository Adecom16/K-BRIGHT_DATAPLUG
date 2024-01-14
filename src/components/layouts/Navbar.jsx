import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../App.css";

function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink to="/" className="navbar-brand">
        {/* Tech<span className="x-logo-design">X</span>plorer */}
        <img src="/logo.png" alt="Logo" width={60} />
      </NavLink>

      <button className="navbar-toggler" type="button" onClick={toggleDropdown}>
        <span className="navbar-toggler-icon" />
      </button>

      <div
        className={`collapse navbar-collapse ${isDropdownOpen ? "show" : ""}`}
      >
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink to="/" className="nav-link" activeClassName="active" exact>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link" activeClassName="active">
              About Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contact"
              className="nav-link"
              activeClassName="active"
            >
              Contact Us
            </NavLink>
          </li>
          <li className="nav-item ">
            <NavLink to="/login" className="nav-link" activeClassName="active">
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/register"
              className="nav-link"
              activeClassName="active"
            >
              Register
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
