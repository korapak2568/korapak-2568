"use client";

import React from "react";

const ContactForm: React.FC = () => {
  return (
    <div className="contact-area pb-100">
      <div className="container">
        <div className="section-title">
          <span>Get in Touch</span>
          <h2>Ready to Get Started?</h2>
          <div className="bar"></div>
        </div>

        <div className="contact-form">
          <form id="contactForm">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="form-control"
                    required
                  />
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="email"
                    placeholder="Your email address"
                    className="form-control"
                    required
                  />
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="number"
                    placeholder="Your phone number"
                    className="form-control"
                    required
                  />
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Your Subject"
                    className="form-control"
                    required
                  />
                </div>
              </div>

              <div className="col-lg-12 col-md-12">
                <div className="form-group">
                  <textarea
                    name="text"
                    cols={30}
                    rows={5}
                    placeholder="Write your message..."
                    className="form-control"
                    required
                  />
                </div>
              </div>

              <div className="col-lg-12 col-sm-12 text-center">
                <button type="submit" className="default-btn">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
