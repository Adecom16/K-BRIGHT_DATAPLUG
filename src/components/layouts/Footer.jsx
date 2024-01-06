import React from "react";

export  function Footer() {
  return (
    <footer style={footerStyle}>
      <div>
        <p>&copy; 2023 All Rights Reserved</p>
      </div>
    </footer>
  );
}

const footerStyle = {
  background: "transparent",
  color: "#222",
  textAlign: "center",
  padding: "1rem",
  // position: "fixed",
  bottom: "0",
  // width: "100%",
};
