"use client";

import React from "react";
import Image from "next/image";

const MainBanner: React.FC = () => {
  return (
    <>
      <div className="main-banner">
        <div
          className="main-banner-item item-four"
          style={{
            backgroundImage: `url(/images/main-banner-bg-4.jpg)`,
          }}
        >
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container-fluid">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="main-banner-content pr-15">
                      <h1
                        data-aos="fade-up"
                        data-aos-duration="800"
                        data-aos-delay="100"
                        data-aos-once="true"
                      >
                        Digital Marketing Best Solution
                      </h1>

                      <p
                        data-aos="fade-up"
                        data-aos-duration="800"
                        data-aos-delay="200"
                        data-aos-once="true"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>

                      <form
                        className="banner-form"
                        data-aos="fade-up"
                        data-aos-duration="800"
                        data-aos-delay="300"
                        data-aos-once="true"
                      >
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter your Email"
                        />
                        <button type="submit">Get Your Report</button>
                      </form>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div
                      className="main-banner-image pl-15"
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="400"
                      data-aos-once="true"
                    >
                      <Image
                        src="/images/banner/banner-image-4.jpg"
                        alt="image"
                        width={750}
                        height={650}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
