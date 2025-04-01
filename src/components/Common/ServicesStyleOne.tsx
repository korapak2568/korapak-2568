"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const ServicesStyleOne: React.FC = () => {
  return (
    <>
      <div className="services-area bg-fff5ee pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span>Services we provided</span>
            <h2>Our Digital Marketing Services</h2>
            <div className="bar"></div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-services">
                <div className="image">
                  <Link href="/technical-expertise/details">
                    <Image
                      src="https://cdn.chorn.in.th/obsolete/services/services-1.png"
                      alt="image"
                      width={125}
                      height={135}
                    />
                  </Link>
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
              <div className="single-services">
                <div className="image">
                  <Link href="/technical-expertise/details">
                    <Image
                      src="https://cdn.chorn.in.th/obsolete/services/services-2.png"
                      alt="image"
                      width={170}
                      height={135}
                    />
                  </Link>
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
              <div className="single-services">
                <div className="image">
                  <Link href="/technical-expertise/details">
                    <Image
                      src="https://cdn.chorn.in.th/obsolete/services/services-3.png"
                      alt="image"
                      width={125}
                      height={135}
                    />
                  </Link>
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
              <div className="single-services">
                <div className="image">
                  <Link href="/technical-expertise/details">
                    <Image
                      src="https://cdn.chorn.in.th/obsolete/services/services-4.png"
                      alt="image"
                      width={180}
                      height={135}
                    />
                  </Link>
                </div>
                <h3>
                  <Link href="/technical-expertise/details">
                    Content Marketing Services
                  </Link>
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
              <div className="single-services">
                <div className="image">
                  <Link href="/technical-expertise/details">
                    <Image
                      src="https://cdn.chorn.in.th/obsolete/services/services-5.png"
                      alt="image"
                      width={160}
                      height={135}
                    />
                  </Link>
                </div>
                <h3>
                  <Link href="/technical-expertise/details">Competitor Research</Link>
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
              <div className="single-services">
                <div className="image">
                  <Link href="/technical-expertise/details">
                    <Image
                      src="https://cdn.chorn.in.th/obsolete/services/services-6.png"
                      alt="image"
                      width={150}
                      height={135}
                    />
                  </Link>
                </div>
                <h3>
                  <Link href="/technical-expertise/details">Software Development</Link>
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
              src="https://cdn.chorn.in.th/obsolete/default-shape/default-shape1.png"
              alt="image"
              width={52}
              height={52}
            />
          </div>
          <div className="shape2">
            <Image
              src="https://cdn.chorn.in.th/obsolete/default-shape/default-shape2.png"
              alt="image"
              width={14}
              height={16}
            />
          </div>
          <div className="shape3">
            <Image
              src="https://cdn.chorn.in.th/obsolete/default-shape/default-shape3.png"
              alt="image"
              width={18}
              height={18}
            />
          </div>
          <div className="shape4">
            <Image
              src="https://cdn.chorn.in.th/obsolete/default-shape/default-shape4.png"
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

export default ServicesStyleOne;
