import { Link } from "react-router-dom";
import { useState } from "react";
import {
  FaTachometerAlt,
  FaChartBar,
  FaPhone,
  FaWifi,
  FaBolt,
  FaTv,
  FaArrowRight,
  FaBars,
} from "react-icons/fa";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
     


      {/* Sidebar */}
      <ul
        id="accordionSidebar"
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      >
        {/* Sidebar - Brand */}
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          to="/dashboard"
        >
          <div className="sidebar-brand-icon rotate-n-15"></div>
          <div className="sidebar-brand-text mx-3">
            <img src="/logo.png" alt="logo" width="50" />
          </div>
        </a>
        {/* Divider */}
        <hr className="sidebar-divider my-0" />
        {/* Nav Item - Dashboard */}
        <br />
        <div className="sidebar-heading">Quick view</div>
        <br />

        <li className="nav-item navhover">
          <Link className="nav-link" to="/dashboard">
            <FaTachometerAlt />
            <span style={styles.navText}>Dashboard</span>
          </Link>
        </li>
        <li className="nav-item navhover">
          <Link className="nav-link" to="performance">
            <FaChartBar />
            <span style={styles.navText}>Transaction</span>
          </Link>
        </li>

        <li className="nav-item navhover">
          <Link className="nav-link collapsed" to="airtime">
            <FaPhone />
            <span style={styles.navText}>Airtime</span>
          </Link>
        </li>
        <li className="nav-item navhover">
          <Link className="nav-link collapsed" to="data">
            <FaWifi />
            <span style={styles.navText}>Data</span>
          </Link>
        </li>

        <li className="nav-item navhover">
          <Link className="nav-link collapsed" to="electricity">
            <FaBolt />
            <span style={styles.navText}>Electricity</span>
          </Link>
        </li>

        <li className="nav-item navhover">
          <Link className="nav-link collapsed" to="cabletv">
            <FaTv />
            <span style={styles.navText}>Cable Tv</span>
          </Link>
        </li>

        <br />
        <br />
        <li className="nav-item navhover">
          <Link className="nav-link collapsed" to="#">
           <FaArrowRight />
            <span style={styles.navText}>Logout</span>
          </Link>
        </li>

        {/* Divider */}
        <hr className="sidebar-divider d-none d-md-block" />
        {/* Sidebar Toggler (Sidebar) */}
      </ul>
    </div>
  );
};

const styles = {
  navText: {
    color: "white",
    fontSize: "15px",
    marginLeft: "10px",
    marginRight: "10px",
  },
};

export default Sidebar;
