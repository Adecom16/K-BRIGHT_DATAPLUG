import React from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

import RealTimeNotication from "./subComponents/RealTimeNotication";
import Billing from "./subComponents/Billing";
import Loan from "./subComponents/Loan";
import Testimonial from "./subComponents/Testimonal";
import Carousel from "./subComponents/Carosel";
import Lastsec from "./subComponents/Lastsec";

export default function HomePage() {
  return (
    <div className="homepage" style={{ backgroundColor: "whitesmoke" }}>
      <Navbar />
      <div className="container-fluid">
        <div className="hero-section row">
          <div className="col-md-6 d-flex align-items-center">
            <div style={{ paddingTop: "150px" }}>
              <span className="heading-1">Simple. Transparent. Secure</span>
              <br />
              <br />
              <span className="heading-2">
                The Best Platform For Automated VTU Services
              </span>
              <br />
              <p className="heading-3">
                Finally, the solution to all your data problems is here... We
                have the best prices and with convenient payment options. Click
                on your preferred network below to get your cheap data
              </p>
              <br />
              <div className="hero-button-section">
                <a href="/login" className="btn-cta-1 ">
                  Open Account
                </a>
                {/* <a href="" className="btn-cta-2">
                  Get In touch
                </a> */}
              </div>
            </div>
          </div>
          <div className="SecondSide-Section col-md-6">
            <img
              className="img-fluid"
              width={780}
              src="/banner-bg.png"
              alt="Banner"
            />
          </div>
        </div>
      </div>
      <RealTimeNotication />
      <Billing />
      <Loan />
      <Testimonial />
      <Carousel />
      <br />
      <Lastsec />
      <br/>
      <hr/>
      <Footer />
    </div>
  );
}
