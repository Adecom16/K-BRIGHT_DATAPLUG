import React from "react";

const NotFoundPage = () => {
  return (
    <div style={notFoundContainer}>
      <div style={notFoundContent}>
        <h1 style={notFoundHeading}>404 - Not Found</h1>
        <p style={notFoundText}>
          The page you are looking for might not exist or is temporarily
          unavailable.
        </p>
      </div>
    </div>
  );
};

const notFoundContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  backgroundColor: "#f8f9fa", // Light gray background color
};

const notFoundContent = {
  textAlign: "center",
};

const notFoundHeading = {
  fontSize: "3rem",
  marginBottom: "1rem",
  color: "#dc3545", // Bootstrap's danger color
};

const notFoundText = {
  fontSize: "1.2rem",
  color: "#495057", // Bootstrap's secondary text color
};

export default NotFoundPage;
