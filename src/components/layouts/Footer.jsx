import React from "react";

function Footer() {
  return (
    <footer className="bg-primary text-white py-3">
      <div className="container">
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
