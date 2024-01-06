import React from "react";

function RealTimeNotication() {
  return (
    <div>
      <div className="realtime-section">
        <div className="firstSide-realtime">
          <div className="head-icon">
            <img src="/notification.png" />
          </div>
          <div className="text-area-sec">
            <span className="heading-1">Why Choose Us?</span>
            <h1 className="realtime-heading-2">Real Time Notification</h1>
            <p className="realtime-heading-3">
              We offer instant recharge of Airtime, Databundle, CableTV (DStv,
              GOtv & Startimes), Electricity Bill Payment and more....
            </p>
            <br />

            <div className="realtime-check-activity">
              <span className="check">
                <img src="/check.png" />
              </span>
              
              <span className="check-text">
                Cards that work all across the world.
              </span>
            </div>
            <br />

            <div className="realtime-check-activity">
              <span className="check">
                <img src="/check.png" />
              </span>
              <span className="check-text">
                No ATM fees. No minimum balance. 
                
              </span>
            </div>
          </div>
        </div>
        <div className="SecondSide-realtime">
          <img src="/feature-item-1.png"/>
        </div>
      </div>
    </div>
  );
}

export default RealTimeNotication;
