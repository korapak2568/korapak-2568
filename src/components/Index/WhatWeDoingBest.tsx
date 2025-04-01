"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const WhatWeDoingBest: React.FC = () => {
  return (
    <>
      <div className="overview-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="overview-content">
                <span>What We Doing Best</span>
                <h3>Marketing Goals Achieved with Develop</h3>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <p>
                  ed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>

                <div className="overview-btn">
                  <Link href="/about-us" className="default-btn">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="overview-image">
                <Image
                  src="https://cdn.chorn.in.th/obsolete/overview.jpg"
                  alt="image"
                  width={750}
                  height={650}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeDoingBest;
