import React from "react";

function RealTimeNotication() {
  return (
    <div
      className="mt-5"
      style={{ backgroundColor: "white", paddingTop: "100px" }}
    >
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="head-icon text-center mb-4">
              <img src="/notification.png" alt="Notification Icon" />
            </div>
            <div className="text-area-sec">
              <span className="heading-1">Why Choose Us?</span>
              <h1 className="realtime-heading-2">Real Time Notification</h1>
              <p className="realtime-heading-3">
                We offer instant recharge of Airtime, Databundle, CableTV (DStv,
                GOtv & Startimes), Electricity Bill Payment and more....
              </p>

              <div className="realtime-check-activity">
                <span className="">
                  {/* <img src="/check.png" alt="Checkmark" /> */}✅
                </span>
                <span className="check-text">
                  Cards that work all across the world.
                </span>
              </div>
              <br />
              <div className="realtime-check-activity">
                <span className="">
                  {/* <img src="/check.png" alt="Checkmark" /> */}✅
                </span>
                <span className="check-text">
                  No ATM fees. No minimum balance.
                </span>
              </div>
            </div>
          </div>
          <div className="SecondSide-realtime col-md-6">
            <img
              className="img-fluid"
              src="/feature-item-1.png"
              alt="Feature Item"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RealTimeNotication;
