import React from "react";

function Billing() {
  return (
    <div style={{ backgroundColor: "white", paddingTop: "100px" }}>
      <div className="container-fluid">
        <div className="row align-items-center flex-row-reverse">
          <div className="col-md-6">
            <div className="head-icon text-center mb-4">
              <img src="/sheled.png" alt="Icon" />
            </div>
            <div className="text-area-sec">
              <span className="heading-1">VTU at Your Fingertips</span>
              <h1 className="realtime-heading-2">Pay Bills Payment At Ease</h1>
              <p className="realtime-heading-3">
                Become a boss, earn while sleeping with our mini-bank (VTU)
                website/app.
              </p>

              <div className="realtime-check-activity">
                <span className="">
                  {/* <img src="/check.png" alt="Check" /> */}✅
                </span>
                <span className="check-text">
                  Bill Payments, Funds Transfer
                </span>
              </div>
              <br />

              <div className="realtime-check-activity">
                <span className="">✅</span>
                <span className="check-text">
                  Credit card payments and Order food
                </span>
              </div>

              <div className="app-download mt-4">
                <img src="/google-play.png" alt="Google Play" />
                <img src="/app-store.png" alt="App Store" />
              </div>
            </div>
          </div>
          <div className="SecondSide-realtime col-md-6">
            <img className="img-fluid" src="/apps.png" alt="App Screenshot" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Billing;
