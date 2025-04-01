"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const RelatedServices: React.FC = () => {
  return (
    <>
      <div className="services-area pb-70">
        <div className="container">
          <div className="section-title">
            <span>Services we provided</span>
            <h2>Related Services</h2>
            <div className="bar"></div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-services-item">
                <div className="image">
                  <Link href="/technical-expertise/details">
                    <Image
                      src="https://cdn.chorn.in.th/obsolete/services/services-7.jpg"
                      alt="image"
                      width={650}
                      height={500}
                    />
                  </Link>
                </div>
                <div className="content">
                  <h3>
                    <Link href="/technical-expertise/details">Creative Web Design</Link>
                  </h3>
                  <span>Web Design</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services-item">
                <div className="image">
                  <Link href="/technical-expertise/details">
                    <Image
                      src="https://cdn.chorn.in.th/obsolete/services/services-8.jpg"
                      alt="image"
                      width={650}
                      height={500}
                    />
                  </Link>
                </div>
                <div className="content">
                  <h3>
                    <Link href="/technical-expertise/details">Digital Agency</Link>
                  </h3>
                  <span>Agency</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services-item">
                <div className="image">
                  <Link href="/technical-expertise/details">
                    <Image
                      src="https://cdn.chorn.in.th/obsolete/services/services-9.jpg"
                      alt="image"
                      width={650}
                      height={500}
                    />
                  </Link>
                </div>
                <div className="content">
                  <h3>
                    <Link href="/technical-expertise/details">Complex Dashboard</Link>
                  </h3>
                  <span>Solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RelatedServices;
