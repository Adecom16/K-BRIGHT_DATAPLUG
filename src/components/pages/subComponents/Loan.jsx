import React from "react";

function Loan() {
  return (
    <div className="container-fluid">
      <div className="row" style={{ backgroundColor: "rgb(79, 79, 245)" }}>
        <div className="col-md-6 d-flex align-items-center justify-content-center flex-column text-center">
          <h1
            className="pt-5"
            style={{ fontSize: "30px", fontWeight: "bold", color: "white" }}
          >
            Need a Personalized Solution?
          </h1>
          <p className="mb-4" style={{ fontSize: "20px", color: "white" }}>
            Get in touch with us, and we will help you to create the right one
            for your business or personal needs.
          </p>
          <button className="btn btn-light loan-btn-cta">
            Apply for a loan
          </button>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <img
            className="img-fluid"
            src="/personalized.png"
            alt="Personalized Solution"
          />
        </div>
      </div>
    </div>
  );
}

export default Loan;
