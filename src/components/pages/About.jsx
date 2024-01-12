import React from "react";
// import Lastsec from "./subComponents/Lastsec";
import Navbar from '../layouts/Navbar'
function About() {
  return (
    <div>
      <Navbar />
      <div className="container-fluid About-page">
        <div className=" row" style={{ paddingTop: "140px" }}>
          <div className="first-about-sec col-md-6">
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

            <div className="row" style={{}}>
              <div className="first-box col-md-4">
                <h1>
                  98<span style={{ color: "blue" }}>%</span>
                </h1>
                <p>
                  Customer <br />
                  satisfaction
                </p>
              </div>
              <div className="first-box col-md-4">
                <h1>
                  250<span style={{ color: "blue" }}>M</span>
                </h1>
                <p>
                  Monthly <br />
                  active users
                </p>
              </div>
              <div className="first-box col-md-4">
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
          <div
            className="second-about-sec col-md-6"
            style={{ marginTop: "700px" }}
          >
            <img className="about-img-1" src="/about-img-1.png" />
            <img className="about-img-2" src="/about-img-2.png" />
            <img className="about-img-3" src="/about-img-3.png" />
          </div>
        </div>
      </div>
      <div style={{ paddingTop: "100px" }}>
        <div className="lastsection2">
          <div className="first-sec-last-img">
            <img src="/get-start.png" />
          </div>
          <div>
            <h3 className="last-sect-title-1-2">Ready to get started?</h3>
            <p className="last-sect-title-2">
              It only takes a few minutes to register your account.
            </p>
            <button className="last-btn-cta">
              {" "}
              <a href="http://">Open an Account</a>
            </button>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default About;
