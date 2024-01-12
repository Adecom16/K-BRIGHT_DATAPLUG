import React from "react";
import Stat from "./Stat";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import WebhookComponent from "./Webhook";

const Performance =()=> {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
     <div>
          <Stat />
        </div>
    </div>
  );
}

export default Performance;
