import React from "react";
import Stat from "./Stat";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import WebhookComponent from "./Webhook";

function Performance() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div
        style={{
          // flex: "0 0 250px",
          backgroundColor: "blue",
          // padding: "20px",
        }}
      >
        <Sidebar />
      </div>
      <div style={{ flex: "1", padding: "20px" }}>
        <div style={{ marginBottom: "20px" }}>
          <Navbar />
        </div>
        <div>
          <Stat />
        </div>

        {/* <WebhookComponent/> */}
      </div>
    </div>
  );
}

export default Performance;
