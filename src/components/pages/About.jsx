import React from "react";
import Navbar from "../layouts/Navbar";

function About() {
  return (
    <div>
      <Navbar />
      <div className="container-fluid About-page">
        <div className="row" style={{ paddingTop: "140px" }}>
          <div className="col-md-6">
            <h1 className="heading-1-1">About Us</h1>
            <br />
            <h1 className="heading-2-2">
              To give everyone the power to better manage &amp; grow their
              finances.
            </h1>
            <p className="heading-3-3">
              We understand that with global ambition, comes global challenges,
              and we are here to bridge the gap by offering seamless
              cross-border financial services. Consider us your friendly digital
              guide to all things finance, helping you make the most of your
              money.
            </p>

            <div className="row">
              <div className="col-md-4">
                <div className="first-box">
                  <h1>
                    98<span style={{ color: "blue" }}>%</span>
                  </h1>
                  <p>
                    Customer <br />
                    satisfaction
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="first-box">
                  <h1>
                    250<span style={{ color: "blue" }}>M</span>
                  </h1>
                  <p>
                    Monthly <br />
                    active users
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="first-box">
                  <h1>
                    100<span style={{ color: "blue" }}>K</span>
                  </h1>
                  <p>
                    New users
                    <br />
                    per week
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-md-5 text-center">
            <img
              className="img-fluid about-img"
              src="/about-img-1.png"
              alt="About Image 1"
            />
            <img
              className="img-fluid about-img"
              src="/about-img-2.png"
              alt="About Image 2"
            />
            <img
              className="img-fluid about-img"
              src="/about-img-3.png"
              alt="About Image 3"
            />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="lastsection2 text-center">
          <div className="first-sec-last-img">
            <img
              src="/get-start.png"
              alt="Get Started Image"
              className="img-fluid"
            />
          </div>
          <div>
            <h3 className="last-sect-title-1-2">Ready to get started?</h3>
            <p className="last-sect-title-2">
              It only takes a few minutes to register your account.
            </p>
            <button className="last-btn-cta btn btn-primary">
              <a href="http://" className="text-white">
                Open an Account
              </a>
            </button>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default About;
