import React from "react";
import Navbar from "../layouts/Navbar";

function Contact() {
  return (
    <div>
      <Navbar />
      <div className="main-contact">
        <div className="Contact-Sec row">
          <div className="contact-section-text col-md-6">
            <h1 className="text-heading-contact">Contact Us</h1>
          </div>
          <div className="contact-section-img col-md-6">
            <img
              className="img-fluid"
              src="/contact-banner.png"
              alt="Contact Banner"
            />
          </div>
        </div>
        <br />

        <div className="mt-5 text-contactus">
          <h1>Get in Touch</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            voluptates rerum corporis molestias dolores.
          </p>
        </div>

        <div className="form-sec mt-5">
          <form>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name.."
                    style={{ borderColor: "#3498db" }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email Address.."
                    style={{ borderColor: "#3498db" }}
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                placeholder="Message Title"
                style={{ borderColor: "#3498db" }}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                name="message"
                placeholder="Your Message"
                rows="4"
                style={{ borderColor: "#3498db" }}
              ></textarea>
            </div>

            <button
              type="submit"
              className="Btn-cta-contact btn btn-primary"
              style={{ backgroundColor: "#3498db", borderColor: "#3498db" }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
