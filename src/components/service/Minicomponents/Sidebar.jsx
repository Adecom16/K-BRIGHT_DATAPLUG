import React from 'react'

const  Sidebar = () =>{
  return (
    <div>
      <style>
        {`
            .navhover a:hover {
              background-color: #4471f6; /* Change the background color on hover */
              color: #fff; /* Change the text color on hover */
            }
          `}
      </style>
      {/* Sidebar */}
      <ul
        style={{ postion: "fixed" }}
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* Sidebar - Brand */}
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="/dashboard"
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
          <a className="nav-link" href="/dashboard">
            <i className="fa-solid fa-gauge"></i>
            <span
              style={{
                color: "white",

                fontSize: "15px",
                marginLeft: "10px",
                marginRight: "10px",
              }}
            >
              Dashboard
            </span>
          </a>
        </li>
        <li className="nav-item navhover">
          <a className="nav-link" href="/performance">
            <i className="fa-solid fa-chart-column"></i>
            <span
              style={{
                color: "white",

                fontSize: "15px",
                marginLeft: "10px",
                marginRight: "10px",
              }}
            >
              {" "}
              Transaction
            </span>
          </a>
        </li>

        <li className="nav-item navhover">
          <a className="nav-link collapsed" href="#">
            <i className="fa-solid fa-wallet"></i>
            <span
              style={{
                color: "white",

                fontSize: "15px",
                marginLeft: "10px",
                marginRight: "10px",
              }}
            >
              Wallet Transfer
            </span>
          </a>
        </li>
        <li className="nav-item navhover">
          <a className="nav-link collapsed" href="/airtime">
            <i className="fas fa-fw fa-phone" />
            <span
              style={{
                color: "white",

                fontSize: "15px",
                marginLeft: "10px",
                marginRight: "10px",
              }}
            >
              Airtime
            </span>
          </a>
        </li>
        <li className="nav-item navhover">
          <a className="nav-link collapsed" href="data">
            <i className="fas fa-fw fa-wifi" />
            <span
              style={{
                color: "white",

                fontSize: "15px",
                marginLeft: "10px",
                marginRight: "10px",
              }}
            >
              Data
            </span>
          </a>
        </li>

        <li className="nav-item navhover">
          <a className="nav-link collapsed" href="/electricity">
            <i className="fa-solid fa-bolt"></i>
            <span
              style={{
                color: "white",

                fontSize: "15px",
                marginLeft: "10px",
                marginRight: "10px",
              }}
            >
              Electricity
            </span>
          </a>
        </li>

        <li className="nav-item navhover">
          <a className="nav-link collapsed" href="/cabletv">
            <i className="fa-solid fa-tv"></i>
            <span
              style={{
                color: "white",

                fontSize: "15px",
                marginLeft: "10px",
                marginRight: "10px",
              }}
            >
              Cable Tv
            </span>
          </a>
        </li>

        <br />
        <br />
        <li className="nav-item navhover">
          <a className="nav-link collapsed" href="#">
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
            <span
              style={{
                color: "white",

                fontSize: "15px",
                marginLeft: "10px",
                marginRight: "10px",
              }}
            >
              Logout
            </span>
          </a>
        </li>

        {/* Divider */}
        <hr className="sidebar-divider d-none d-md-block" />
        {/* Sidebar Toggler (Sidebar) */}
      </ul>
    </div>
  );
}

export default Sidebar
