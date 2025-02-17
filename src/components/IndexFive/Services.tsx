"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Services: React.FC = () => {
  return (
    <>
      <div className="services-area bg-0f051e pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span>Services we provided</span>
            <h2>Our Digital Marketing Services</h2>
            <div className="bar"></div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-code"></i>
                </div>

                <h3>
                  <Link href="/technical-expertise/details">Website Development</Link>
                </h3>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incutu labore et dolore magna aliqua.
                </p>

                <Link href="/technical-expertise/details" className="services-btn">
                  Read More <i className="bx bx-chevrons-right"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-vector"></i>
                </div>

                <h3>
                  <Link href="/technical-expertise/details">Web Design</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incutu labore et dolore magna aliqua.
                </p>

                <Link href="/technical-expertise/details" className="services-btn">
                  Read More <i className="bx bx-chevrons-right"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-network"></i>
                </div>

                <h3>
                  <Link href="/technical-expertise/details">Social Media Marketing</Link>
                </h3>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incutu labore et dolore magna aliqua.
                </p>

                <Link href="/technical-expertise/details" className="services-btn">
                  Read More <i className="bx bx-chevrons-right"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-search"></i>
                </div>

                <h3>
                  <Link href="/technical-expertise/details">Content Marketing</Link>
                </h3>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incutu labore et dolore magna aliqua.
                </p>

                <Link href="/technical-expertise/details" className="services-btn">
                  Read More <i className="bx bx-chevrons-right"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-digital-marketing-1"></i>
                </div>

                <h3>
                  <Link href="/technical-expertise/details">Digital Media & PPC</Link>
                </h3>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incutu labore et dolore magna aliqua.
                </p>

                <Link href="/technical-expertise/details" className="services-btn">
                  Read More <i className="bx bx-chevrons-right"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-cpu"></i>
                </div>

                <h3>
                  <Link href="/technical-expertise/details">Technology</Link>
                </h3>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incutu labore et dolore magna aliqua.
                </p>

                <Link href="/technical-expertise/details" className="services-btn">
                  Read More <i className="bx bx-chevrons-right"></i>
                </Link>
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

export default Services;
