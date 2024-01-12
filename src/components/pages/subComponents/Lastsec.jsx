import React from 'react'

function Lastsec() {
  return (
    <div className="container-fluild">
      <div className="row lastsection flex-wrap-reverse">
        <div className="col-md-6">
          <img src="/get-start.png" />
        </div>
        <div className="col-md-6">
          <h3 className="last-sect-title-1">Ready to get started?</h3>
          <p className="last-sect-title-2">
            It only takes a few minutes to register your account.
          </p>
          <button className="last-btn-cta">
            <a href="http://">Open an Account</a>
          </button>
        </div>
      </div>
      <hr />
      {/* <br/> */}
    </div>
  );
}

export default Lastsec
