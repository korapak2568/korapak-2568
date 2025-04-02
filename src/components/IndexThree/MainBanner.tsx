"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const MainBanner: React.FC = () => {
  return (
    <>
      <div className="main-banner">
        <div 
          className="main-banner-item item-two"
          style={{
            backgroundImage: `url(/obsolete-images/main-banner-bg-2.jpg)`,
          }}
        >
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container-fluid">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="main-banner-content">
                      <h1
                        data-aos="fade-right"
                        data-aos-duration="800"
                        data-aos-delay="100"
                        data-aos-once="true"
                      >
                        We Provide Digital Marketing Solutions
                      </h1>

                      <p
                        data-aos="fade-right"
                        data-aos-duration="800"
                        data-aos-delay="200"
                        data-aos-once="true"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        Risus commodo viverra maecenas accumsan lacus vel
                        facilisis.
                      </p>

                      <div
                        className="banner-btn"
                        data-aos="fade-right"
                        data-aos-duration="800"
                        data-aos-delay="300"
                        data-aos-once="true"
                      >
                        <Link href="/contact-us" className="default-btn">
                          Get Started
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-lg-6">
                    <div className="main-banner-image">
                      <Image
                        src="/obsolete-images/banner/banner-image-2.png"
                        alt="image"
                        width={985}
                        height={1040}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main-banner-shape">
          <div className="shape-4">
            <Image
              src="/obsolete-images/banner/banner-shape-2.png"
              alt="image"
              width={92}
              height={95}
            />
          </div>
          <div className="shape-5">
            <Image
              src="/obsolete-images/banner/banner-shape-2.png"
              alt="image"
              width={92}
              height={95}
            />
          </div>
          <div className="shape-6">
            <Image
              src="/obsolete-images/banner/banner-shape-3.png"
              alt="image"
              width={65}
              height={70}
            />
          </div>
          <div className="shape-7">
            <Image
              src="/obsolete-images/banner/banner-shape-4.png"
              alt="image"
              width={55}
              height={55}
            />
          </div>
          <div className="shape-8">
            <Image
              src="/obsolete-images/banner/banner-shape-5.png"
              alt="image"
              width={56}
              height={56}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
