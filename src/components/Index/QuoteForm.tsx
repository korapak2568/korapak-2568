"use client";

import React from "react";
import Image from "next/image";

const QuoteForm: React.FC = () => {
  return (
    <>
      <div className="quote-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="quote-form">
                <div className="content">
                  <h3>Get A free Quote Now</h3>
                </div>

                <form>
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      name="email"
                      placeholder="Your email address"
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      name="number"
                      placeholder="Your phone number"
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Your Subject"
                      className="form-control"
                      required
                    />
                  </div>

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

                  <div className="quote-btn">
                    <button type="submit" className="default-btn">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="quote-image">
                <Image
                  src="https://cdn.chorn.in.th/obsolete/quote/quote-1.png"
                  alt="image"
                  width={585}
                  height={555}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuoteForm;
