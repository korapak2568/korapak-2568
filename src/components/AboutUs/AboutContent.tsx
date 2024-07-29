"use client";
  
import React from "react";

const AboutContent: React.FC = () => {
  return (
    <>
      <div className="about-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="about-image-warp"
                style={{ backgroundImage: `url(/images/about/about-2.jpg)` }}
              ></div>
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
                <p>
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demoralized by the charms
                  of pleasure of the moment, so blinded by desire, that they
                  cannot foresee the pain and trouble that are bound to ensue;
                  and equal blame belongs to those who fail in their duty
                  through weakness of will, which is the same as saying through
                  shrinking from toil and pain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
