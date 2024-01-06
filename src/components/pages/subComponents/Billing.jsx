import React from "react";

function Billing() {
  return (
    <div>
      <div className="Billing-section">
        <div className="firstSide-realtime">
          <div className="head-icon">
            <img src="/sheled.png" />
          </div>
          <div className="text-area-sec">
            <span className="heading-1">VTU at Your Fingertips</span>
            <h1 className="realtime-heading-2">Pay Bills Payment At Ease</h1>
            <p className="realtime-heading-3">
              Become a boss, earn while sleeping with our mini-bank (VTU)
              website/app.
            </p>
            <br />

            <div className="realtime-check-activity">
              <span className="check">
                <img src="/check.png" />
              </span>
              <span className="check-text">Bill Payments ,Funds Transfer</span>
              {/* //,QR payments */}
            </div>
            <br />

            <div className="realtime-check-activity">
              <span className="check">
                <img src="/check.png" />
              </span>
              <span className="check-text">
                Credit card payments and Order food
              </span>
            </div>
            {/* <br /> */}
            <div className="app-download">
              <img src="/google-play.png" />
              <img src="/app-store.png" />
            </div>
          </div>
        </div>
        <div className="SecondSide-realtime">
          <img className="fa-beat" src="/apps.png" />
        </div>
      </div>
    </div>
  );
}

export default Billing;
