import React, { useEffect, useState } from "react";
import {
  FaBars,
  FaSearch,
  FaBell,
  FaEnvelope,
  FaUser,
  FaCog,
  FaList,
  FaSignOutAlt,
} from "react-icons/fa";

const Navbar = () => {
  const { user, loading } = useState({});

  useEffect(() => {
    const dropdownToggle = document.getElementById("dropdownToggle");
    const dropdownContent = document.getElementById("dropdownContent");

    if (dropdownToggle && dropdownContent) {
      dropdownToggle.addEventListener("click", () => {
        dropdownContent.classList.toggle("show");
      });

      // Close dropdown when clicking outside
      document.addEventListener("click", (event) => {
        if (!event.target.matches("#dropdownToggle")) {
          if (dropdownContent.classList.contains("show")) {
            dropdownContent.classList.remove("show");
          }
        }
      });
    }

    return () => {
      if (dropdownToggle) {
        dropdownToggle.removeEventListener("click", () => {
          dropdownContent.classList.toggle("show");
        });
      }
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Topbar */}
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        {/* Sidebar Toggle (Topbar) */}
        <button
          id="sidebarToggleTop"
          className="btn btn-link d-md-none rounded-circle mr-3"
        >
          <FaBars />
        </button>
        {/* Topbar Search */}
        <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
          <div className="input-group">
            <input
              type="text"
              className="form-control bg-light border-0 small"
              placeholder="Search for..."
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <button className="btn btn-primary" type="button">
                <FaSearch />
              </button>
            </div>
          </div>
        </form>
        {/* Topbar Navbar */}
        <ul className="navbar-nav ml-auto">
          {/* ... (your existing code) */}
          {/* Nav Item - User Information */}
          <li className="nav-item dropdown no-arrow">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="dropdownToggle"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                {/* User Name */}
              </span>
              <img
                className="img-profile rounded-circle"
                src="/dp.jpeg"
                alt="Profile"
              />
            </a>
            {/* Dropdown - User Information */}
            <div
              id="dropdownContent"
              className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="dropdownToggle"
            >
              <a className="dropdown-item" href="#">
                <FaUser className="fa-sm fa-fw mr-2 text-gray-400" />
                Profile
              </a>
              <a className="dropdown-item" href="#">
                <FaCog className="fa-sm fa-fw mr-2 text-gray-400" />
                Settings
              </a>
              <a className="dropdown-item" href="#">
                <FaList className="fa-sm fa-fw mr-2 text-gray-400" />
                Activity Log
              </a>
              <div className="dropdown-divider" />
              <a
                className="dropdown-item"
                href="#"
                data-toggle="modal"
                data-target="#logoutModal"
              >
                <FaSignOutAlt className="fa-sm fa-fw mr-2 text-gray-400" />
                Logout
              </a>
            </div>
          </li>
        </ul>
      </nav>
      {/* End of Topbar */}
    </div>
  );
};

export default Navbar;
