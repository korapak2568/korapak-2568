"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const MainBanner: React.FC = () => {
  return (
    <>
      <div className="main-banner">
        <div 
          className="main-banner-item item-three"
          style={{
            backgroundImage: `url(/images/main-banner-bg-3.jpg)`,
          }}
        >
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="main-banner-content">
                      <h1
                        data-aos="fade-up"
                        data-aos-duration="800"
                        data-aos-delay="100"
                        data-aos-once="true"
                      >
                        Digital Agency with Excellence Service
                      </h1>

                      <p
                        data-aos="fade-up"
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
                        data-aos="fade-up"
                        data-aos-duration="800"
                        data-aos-delay="300"
                        data-aos-once="true"
                      >
                        <Link href="/contact-us" className="default-btn">
                          Get Services
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div 
                      className="main-banner-image"
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="40"
                      data-aos-once="true"
                    >
                      <Image
                        src="/images/banner/banner-image-3.jpg"
                        alt="image"
                        width={590}
                        height={665}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main-banner-shape">
          <div className="shape-9">
            <Image
              src="/images/banner/banner-shape-6.png"
              alt="image"
              width={399}
              height={438}
            />
          </div>
          <div className="shape-10">
            <Image
              src="/images/banner/banner-shape-7.png"
              alt="image"
              width={66}
              height={62}
            />
          </div>
          <div className="shape-11">
            <Image
              src="/images/banner/banner-shape-8.png"
              alt="image"
              width={117}
              height={119}
            />
          </div>
          <div className="shape-12">
            <Image
              src="/images/banner/banner-shape-9.png"
              alt="image"
              width={164}
              height={164}
            />
          </div>
          <div className="shape-13">
            <Image
              src="/images/banner/banner-shape-10.png"
              alt="image"
              width={438}
              height={399}
            />
          </div>
          <div className="shape-14">
            <Image
              src="/images/banner/banner-shape-11.png"
              alt="image"
              width={125}
              height={125}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
