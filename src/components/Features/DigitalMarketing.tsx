"use client";
  
import React from "react";
import Image from "next/image";

const DigitalMarketing: React.FC = () => {
  return (
    <>
      <div className="features-area pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="features-inner-content">
                <span>Features</span>
                <h3>Digital Marketing</h3>
                <div className="bar"></div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo
                  viverra.
                </p>

                <ul className="features-list">
                  <li>
                    <span>
                      <i className="flaticon-checked"></i> SEO Marketing
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="flaticon-checked"></i> Social Marketing
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="flaticon-checked"></i> Email Marketing
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="flaticon-checked"></i> Facebook Marketing
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="flaticon-checked"></i> Youtube Marketing
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="flaticon-checked"></i> Page Ranking
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="features-image">
                <Image
                  src="https://cdn.chorn.in.th/obsolete/features/features-1.png"
                  alt="image"
                  width={865}
                  height={615}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DigitalMarketing;
