import React from "react";

function Loan() {
  return (
    <div className="container-fluid">
      <div className="row" style={{ backgroundColor: "rgb(79, 79, 245)" }}>
        <div className="col-md-6">
          <h1
            className="pt-5"
            style={{ fontSize: "50px", fontWeight: "bold", color: "white" }}
          >
            Need a Personalized Solution?
          </h1>
          <p className="" style={{ fontSize: "20px", color: "white" }}>
            Get in touch with us, and we will help you to create the right one
            for your business or personal needs.
          </p>
          <br />
          <button className="loan-btn-cta">Apply for a loan</button>
        </div>
        <div className="col-md-6">
          <img width={350} src="/personalized.png" />
        </div>
      </div>
    </div>
  );
}

export default Loan;
