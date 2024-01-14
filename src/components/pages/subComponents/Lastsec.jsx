import React from "react";

function Lastsec() {
  return (
    <div className="container-fluid">
      <div className="row lastsection align-items-center">
        <div className="col-md-6">
          <img className="img-fluid" src="/get-start.png" alt="Get Started" />
        </div>
        <div className="col-md-6">
          <div className="text-center text-md-left">
            <h3 className="last-sect-title-1">Ready to get started?</h3>
            <p className="last-sect-title-2">
              It only takes a few minutes to register your account.
            </p>
            <button className="last-btn-cta">
              <a href="http://">Open an Account</a>
            </button>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Lastsec;
