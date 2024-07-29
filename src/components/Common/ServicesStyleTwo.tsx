"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const ServicesStyleTwo: React.FC = () => {
  return (
    <>
      <div className="services-area bg-fafafa pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span>Services we provided</span>
            <h2>Our Digital Marketing Services</h2>
            <div className="bar"></div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-services-item">
                <div className="image">
                  <Link href="/services/details">
                    <Image
                      src="/images/services/services-7.jpg"
                      alt="image"
                      width={650}
                      height={500}
                    />
                  </Link>
                </div>
                <div className="content">
                  <h3>
                    <Link href="/services/details">Creative Web Design</Link>
                  </h3>
                  <span>Web Design</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services-item">
                <div className="image">
                  <Link href="/services/details">
                    <Image
                      src="/images/services/services-8.jpg"
                      alt="image"
                      width={650}
                      height={500}
                    />
                  </Link>
                </div>
                <div className="content">
                  <h3>
                    <Link href="/services/details">Digital Agency</Link>
                  </h3>
                  <span>Agency</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services-item">
                <div className="image">
                  <Link href="/services/details">
                    <Image
                      src="/images/services/services-9.jpg"
                      alt="image"
                      width={650}
                      height={500}
                    />
                  </Link>
                </div>
                <div className="content">
                  <h3>
                    <Link href="/services/details">Complex Dashboard</Link>
                  </h3>
                  <span>Solutions</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services-item">
                <div className="image">
                  <Link href="/services/details">
                    <Image
                      src="/images/services/services-10.jpg"
                      alt="image"
                      width={650}
                      height={500}
                    />
                  </Link>
                </div>
                <div className="content">
                  <h3>
                    <Link href="/services/details">Software Engineers</Link>
                  </h3>
                  <span>Analysis</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services-item">
                <div className="image">
                  <Link href="/services/details">
                    <Image
                      src="/images/services/services-11.jpg"
                      alt="image"
                      width={650}
                      height={500}
                    />
                  </Link>
                </div>
                <div className="content">
                  <h3>
                    <Link href="/services/details">Marketing Agency</Link>
                  </h3>
                  <span>Marketing</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services-item">
                <div className="image">
                  <Link href="/services/details">
                    <Image
                      src="/images/services/services-12.jpg"
                      alt="image"
                      width={650}
                      height={500}
                    />
                  </Link>
                </div>
                <div className="content">
                  <h3>
                    <Link href="/services/details">Data Analysis</Link>
                  </h3>
                  <span>Explanation</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="default-shape">
          <div className="shape1">
            <Image
              src="/images/default-shape/default-shape1.png"
              alt="image"
              width={52}
              height={52}
            />
          </div>
          <div className="shape2">
            <Image
              src="/images/default-shape/default-shape2.png"
              alt="image"
              width={14}
              height={16}
            />
          </div>
          <div className="shape3">
            <Image
              src="/images/default-shape/default-shape3.png"
              alt="image"
              width={18}
              height={18}
            />
          </div>
          <div className="shape4">
            <Image
              src="/images/default-shape/default-shape4.png"
              alt="image"
              width={52}
              height={52}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesStyleTwo;
