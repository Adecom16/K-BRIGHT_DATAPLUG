import React from "react";

function Loan() {
  return (
    <div>
      <div className="loan-section">
        <div className="Loan-FirstSide">
          <h1 className="loan-heading-2">Need a Personalized Solution?</h1>
          <p className="loan-heading-3">
            Get in touch with us, and we will help you to create the right one
            for your business or personal needs.
          </p>
          <br/>
        <button className="loan-btn-cta">Apply for a loan</button>
        </div>
        <div className="loan-SecondSide">
          <img src="/personalized.png" />
        </div>
      </div>
    </div>
  );
}

export default Loan;
