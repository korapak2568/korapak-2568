"use client";
  
import React from "react";
import Link from "next/link";

const AboutContent: React.FC = () => {
  return (
    <>
      <div className="about-area pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="about-image-warp"
                style={{ backgroundImage: `url(/obsolete-images/about/about-3.jpg)` }}
              ></div>
            </div>

            <div className="col-lg-6">
              <div className="about-content warp mx-100">
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

                <div className="about-btn">
                  <Link href="/about-us" className="default-btn">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
