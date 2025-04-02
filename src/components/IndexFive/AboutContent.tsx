"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutContent: React.FC = () => {
  return (
    <>
      <div className="about-area pb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-image">
                <Image
                  src="/obsolete-images/about/about-4.png"
                  alt="image"
                  width={910}
                  height={545}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content p-0 style-width">
                <span>About Us</span>
                <h3>
                  We Help Companies to Generate Leads and Increase in Sales
                </h3>
                <div className="bar"></div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt labore dolore magna aliqua.
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
