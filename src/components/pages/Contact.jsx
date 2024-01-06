import React from "react";
import Navbar from "../layouts/Navbar";
function Contact() {
  return (
    <div>
    <Navbar/>
      <div className="main-contact">
        <div className="Contact-Sec">
          <div>
            <h1 className="text-heading-contact">Contact Us</h1>
          </div>
          <div className="contact-section-img">
            <img src="/contact-banner.png" />
          </div>
        </div>
        <br />
        <br />

        <div className="text-contactus">
          <h1>Get in Touch</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            voluptates rerum corporis molestias dolores.
          </p>
        </div>

        <div
          className="form-group"
          // style={{
          //   height: "100vh",
          //   margin: "7% 13%",
          //   background: "white",
          //   boxShadow: "0px -12px 24px rgba(47, 65, 129, 0.1)",
          //   borderRadius: "20px",
          //   alignItems: "center",
          // }}
        >
          <div className="form-sec">
            <form>
              <div className="first-cont">
                <div className="name-sec">
                  <label for="name">Name</label>
                  <br />
                  <input type="text" size={55} placeholder="Your Name .." />
                </div>
                <div className="name-sec">
                  <label for="name">Email Address</label>
                  <br />
                  <input
                    type="text"
                    size={50}
                    placeholder="Your Email Address .."
                  />
                </div>
              </div>
              <br />
              <br />

              <div className="name-sec">
                <label for="name">Title</label>
                <br />
                <input type="text" size={122} placeholder="Message Title" />
              </div>
              <br />
              <br />
              <div className="name-sec">
                <label for="name">Message</label>
                <br />
                <br />

                {/* <input type="text" size={120} placeholder="Message Title" /> */}
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="20"
                  w
                ></textarea>
              </div>

              <input
                className="Btn-cta-contact"
                type="submit"
                name=""
                value="Submit"
              ></input>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
