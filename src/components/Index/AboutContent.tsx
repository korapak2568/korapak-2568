"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";

const AboutContent: React.FC = () => {
  // To open the lightbox change the value of the "toggler" prop.
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={[
          "https://www.youtube.com/embed/bk7McNUjWgw?si=KT8SGAF-WzmtADRk",
        ]}
      />

      <div className="about-area pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="about-image-warp "
                style={{ backgroundImage: `url(/images/about/about-5.jpg)` }}
              >
                <div
                  onClick={() => setToggler(!toggler)}
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

                <div className="about-btn">
                  <Link href="/about-us/2" className="default-btn">
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
