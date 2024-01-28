import React, { useEffect, useState } from "react";
import "./../dash.css";
import ApexChart from "./../Minicomponents/Apexchart";
import Stat from "./../Minicomponents/Stat";
import DataBuyForm from "./../../Utils/Data";
import AuthenticationUtility from "../../Utils/AuthenticationUtility";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import { Link } from "react-router-dom";
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
const Dashboard = () => {
  const { http, profile } = AuthenticationUtility();
  const auth = useAuthUser();

  console.log(auth);

  return (

    <div className="container">

      <div className="row">
        <div className="col-md-6">
          <h6
            style={{
              textTransform: "uppercase",
              color: "gray",
            }}
          >
            {auth?.username}
          </h6>
          <br />
          <h2
            style={{
              textTransform: "uppercase",
              width: "200px",
              lineHeight: "50px",
            }}
          >
            {auth?.name} 👋
          </h2>
          <p>
            Everything seems ok and up-to-date with your account since your last
            visit. Would you like to fund it?
          </p>
          <a href="https://">
            <button className="btn-cta-3">Fund Account</button>
          </a>
        </div>
        <div className="col-md-6 ">
          <p style={{ color: "gray" }}>ACCOUNT BALANCE FROM 9183106080</p>
          <h3>
            <span>₦</span>3,400.00
          </h3>
          <p>
            <span
              className="fa fa-arrow-up"
              style={{
                color: "green",
              }}
            ></span>{" "}
            ₦0.00 Dec 30, 2023, 2:38:56 PM{" "}
            <span
              className="fa fa-arrow-down"
              style={{
                color: "red",
              }}
            ></span>{" "}
            ₦0.00
          </p>
          <ApexChart />
        </div>
      </div>
      {/* 
      <div className="row">
        <div className="col-md-6">
          <p style={{ color: "gray" }}>MONEY OUT LAST 30 DAYS</p>
          <h2>
            <span
              style={{
                fontSize: "20px",
              }}
            >
              ₦
            </span>
            494.00
          </h2>
          <br />
          <span>No outgoing transactions yet</span>
          <hr
            style={{
              marginTop: "20px",
              color: "gray",
              width: "100%",
              height: "3px",
              border: "none",
              backgroundColor: "gray",
              opacity: "0.5",
              padding: "0",
              boxSizing: "border-box",
            }}
          />
          <a href="">
            <span
              style={{
                color: "blue",
                fontWeight: "bold",
                fontSize: "15px",
                cursor: "pointer",
                textDecoration: "underline",
                marginTop: "10px",
                display: "inline-block",
              }}
            >
              view more <span className="fa fa-arrow-right"></span>
            </span>
          </a>
        </div>
        <div className="col-md-6 ">
          <p style={{ color: "gray" }}>MONEY OUT LAST 30 DAYS</p>
          <h2>
            <span
              style={{
                fontSize: "20px",
              }}
            >
              ₦
            </span>
            0.00
          </h2>
          <br />
          <span>No incoming transactions yet</span>
          <hr
            style={{
              marginTop: "20px",
              color: "gray",
              width: "100%",
              height: "3px",
              border: "none",
              backgroundColor: "gray",
              opacity: "0.5",
              padding: "0",
              boxSizing: "border-box",
            }}
          />
          <a href="">
            <span
              style={{
                color: "blue",
                fontWeight: "bold",
                fontSize: "15px",
                cursor: "pointer",
                textDecoration: "underline",
                marginTop: "10px",
                display: "inline-block",
              }}
            >
              view more <span className="fa fa-arrow-right"></span>
            </span>
          </a>
        </div>
      </div>

      <div className="container mt-5">
        <div className="">
          <Stat />
        </div>
      </div> */}

      <div className="mt-5">
        <div className="dashboard-menu">
          <ul className="nav">
            <li className="nav-item navhover">
              <Link className="nav-link" to="/dashboard">
                <FaTachometerAlt size={36} />{" "}
                {/* Adjust the size of the icon */}
                <span className="nav-text">Dashboard</span>
              </Link>
            </li>
            <li className="nav-item navhover">
              <Link className="nav-link" to="performance">
                <FaChartBar size={36} />
                <span className="nav-text">Transaction</span>
              </Link>
            </li>
            <li className="nav-item navhover">
              <Link className="nav-link collapsed" to="airtime">
                <FaPhone size={36} />
                <span className="nav-text">Airtime</span>
              </Link>
            </li>
            <li className="nav-item navhover">
              <Link className="nav-link collapsed" to="data">
                <FaWifi size={36} />
                <span className="nav-text">Data</span>
              </Link>
            </li>
            <li className="nav-item navhover">
              <Link className="nav-link collapsed" to="electricity">
                <FaBolt size={36} />
                <span className="nav-text">Electricity</span>
              </Link>
            </li>
            <li className="nav-item navhover">
              <Link className="nav-link collapsed" to="cabletv">
                <FaTv size={36} />
                <span className="nav-text">Cable Tv</span>
              </Link>
            </li>
            <li className="nav-item navhover">
              <Link className="nav-link collapsed" to="#">
                <FaArrowRight size={36} />
                <span className="nav-text">Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
