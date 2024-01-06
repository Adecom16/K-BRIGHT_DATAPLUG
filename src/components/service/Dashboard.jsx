import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import Sidebar from "./Minicomponents/Sidebar";
import "./dash.css";
import Navbar from "./Minicomponents/Navbar";
import ApexChart from "./Minicomponents/Apexchart";
// import Performance from "./Minicomponents/Performance";
import Stat from "./Minicomponents/Stat";
import DataBuyForm from "../Utils/Data";

export default function Dashboard() {
  const { user, loading } = useAuth();

  const handleFormSubmit = (e) => {
    e.preventDefault();
   
  };

  useEffect(() => {
    if (!user && !loading) {
      window.location.replace("/login");
    }
  }, [user, loading]);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div>
        {/* Page Wrapper */}
        <div id="wrapper">
          {/* //sidebar */}
          <Sidebar />

          {/* Content Wrapper */}
          <div id="content-wrapper" className="d-flex flex-column">
            {/* Main Content */}
            <div id="content">
              <Navbar />
              {/* Begin Page Content */}
              <div className="container">
                <div className="row">
                  <div
                    className="col-md-6 first-col-md"
                    style={{ marginTop: "15px" }}
                  >
                    <h6 style={{ textTransform: "uppercase", color: "gray" }}>
                      {user?.username}
                    </h6>
                    <br />
                    <h2
                      style={{
                        textTransform: "uppercase",
                        width: "200px",
                        lineHeight: "50px",
                      }}
                    >
                      {user?.name} 👋
                    </h2>
                    {/* <br /> */}
                    <p>
                      Everything seems ok and up-to-date with your account since
                      your last visit. Would you like to fund it?
                    </p>

                    <a href="https://">
                      <button className="btn-cta-3">Fund Account</button>
                    </a>
                  </div>
                  <div
                    className="col-md-6 second-col-md ms-5"
                    style={{ marginTop: "15px" }}
                  >
                    <p style={{ color: "gray" }}>
                      ACCOUNT BALANCE FROM 9183106080
                    </p>
                    <h3>
                      <span>₦</span>3,400.00
                    </h3>
                    <p>
                      <span
                        className="fa fa-arrow-up"
                        style={{ color: "green" }}
                      ></span>{" "}
                      ₦0.00 Dec 30, 2023, 2:38:56 PM{" "}
                      <span
                        className="fa fa-arrow-down"
                        style={{ color: "red" }}
                      ></span>{" "}
                      ₦0.00
                    </p>

                    <ApexChart />
                  </div>
                </div>

                {/* Content Row */}
                <div className="row" style={{ marginTop: "30px" }}>
                  <div className="col-md-6 third-col-md">
                    <p style={{ color: "gray" }}>MONEY OUT LAST 30 DAYS</p>
                    {/* <br /> */}
                    <h2>
                      <span style={{ fontSize: "20px" }}>₦</span>494.00
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
                    {/* <br /> */}
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
                  <div className="col-md-6 third-col-md">
                    <p style={{ color: "gray" }}>MONEY OUT LAST 30 DAYS</p>
                    {/* <br /> */}
                    <h2>
                      <span style={{ fontSize: "20px" }}>₦</span>0.00
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
                    {/* <br /> */}
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
                        <div className="" >
                            <Stat />
                            {/* <DataBuyForm/> */}
                        </div>
                </div>

                {/* Content Row */}
              </div>
            </div>
            {/* End of Main Content */}
          </div>
          {/* End of Content Wrapper */}
        </div>
        {/* End of Page Wrapper */}
        {/* Scroll to Top Button*/}
        <a className="scroll-to-top rounded" href="#page-top">
          <i className="fas fa-angle-up" />
        </a>
        {/* Logout Modal*/}
      </div>
    </div>
  );
}
