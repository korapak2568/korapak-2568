"use client";

import React, { useState } from "react";

const ContactContentTwo: React.FC = () => {
  // To open the lightbox change the value of the "toggle" prop.
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="about-area pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="about-image-warp"
                style={{ backgroundImage: `url(/obsolete-images/about/about-5.jpg)` }}
              >
                <div
                  onClick={() => setToggle(!toggle)}
                  className="video-btn popup-youtube"
                >
                  <i className="bx bx-play"></i>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content warp">
                <span>About Us</span>
                <h3>
                  We Help Companies to Generate Leads and Increase in Sales
                </h3>
                <div className="bar"></div>
                <strong>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt labore dolore magna aliqua.
                </strong>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>

                <div className="about-inner-content">
                  <div className="icon">
                    <i className="flaticon-check"></i>
                  </div>
                  <h4>Online Presence</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>

                <div className="about-inner-content">
                  <div className="icon">
                    <i className="flaticon-check"></i>
                  </div>
                  <h4>Marketing Strategy</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>

                <div className="about-inner-content">
                  <div className="icon">
                    <i className="flaticon-check"></i>
                  </div>
                  <h4>Promote local Sale</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactContentTwo;
