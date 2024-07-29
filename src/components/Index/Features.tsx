"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Features: React.FC = () => {
  return (
    <>
      <div className="features-area pt-100 pb-70">
        <div className="container">
          <div className="section-title text-width">
            <span>Care Features</span>
            <h2>Create Awesome Service With Our Tools</h2>
            <div className="bar"></div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="features-image-warp">
                <Image
                  src="/images/features/features-2.png"
                  alt="image"
                  width={720}
                  height={620}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="pl-30">
                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <div className="single-features-box">
                      <div className="icon">
                        <i className="bx bxl-facebook"></i>
                      </div>
                      <h3>
                        <Link href="/services/details">Marketing Analysis</Link>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="single-features-box">
                      <div className="icon">
                        <i className="flaticon-speed"></i>
                      </div>
                      <h3>
                        <Link href="/services/details">
                          Website Optimization
                        </Link>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="single-features-box">
                      <div className="icon">
                        <i className="flaticon-email"></i>
                      </div>
                      <h3>
                        <Link href="/services/details">Email Marketing</Link>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="single-features-box">
                      <div className="icon">
                        <i className="flaticon-network"></i>
                      </div>
                      <h3>
                        <Link href="/services/details">
                          Social Media Marketing
                        </Link>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor
                      </p>
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

export default Features;
