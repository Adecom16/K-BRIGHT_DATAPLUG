import "../../App.css";
import { NavLink } from "react-router-dom";
 function Navbar() {
  return (
    <>
      <div className="Navbar-section">
        <div className="Navbar-logo">
          <a href="/">
            Tech<span className="x-logo-design">X</span>plorer
          </a>
        </div>

        <div className="Navbar-pages">
          <ul className="mt-3">
            <li>
              <a className="text-cta" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="text-cta" href="/about">
                <NavLink to="/about" className="text-cta" end>
                  About Us
                </NavLink>
              </a>
            </li>
            <li>
              <a className="text-cta" href="">
                <NavLink to="/contact" className="text-cta" end>
                  Contact Us
                </NavLink>
              </a>
            </li>
            <NavLink to="/login" className="text-cta" end>
              <li className="Nav-button-cta">
                <a href="">Login</a>
              </li>
            </NavLink>
            <NavLink to="/register" className="text-cta" end>
              <li className="Nav-button-cta-2">
                <a href="">Register</a>
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar