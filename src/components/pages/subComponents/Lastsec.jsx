import React from 'react'

function Lastsec() {
  return (
    <div>
      <div style={{ margin: "6% 5%" }} className="lastsection">
        <div className="first-sec-last-do">
          <img src="/get-start.png" />
        </div>
        <div>
          <h3 className="last-sect-title-1">Ready to get started?</h3>
          <p className="last-sect-title-2">
            It only takes a few minutes to register your account.
          </p>
          <button className="last-btn-cta">
            {" "}
            <a href="http://">Open an Account</a>
          </button>
        </div>
      </div>
      <hr/>
      {/* <br/> */}
    </div>
  );
}

export default Lastsec
