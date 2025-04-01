"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const OurProjects: React.FC = () => {
  return (
    <>
      <div className="portfolio-area bg-fff5ee pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span>Portfolio Showcase</span>
            <h2>Our Impressive Portfolio</h2>
            <div className="bar"></div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-portfolio">
                <div className="portfolio-image">
                  <Image
                    src="https://cdn.chorn.in.th/obsolete/portfolio/portfolio-1.jpg"
                    alt="image"
                    width={650}
                    height={500}
                  />
                </div>

                <div className="portfolio-content">
                  <Link href="/portfolio/details">
                    <i className="bx bx-plus"></i>
                  </Link>
                  <h3>
                    <Link href="/portfolio/details">Creative Web Design</Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-portfolio">
                <div className="portfolio-image">
                  <Image
                    src="https://cdn.chorn.in.th/obsolete/portfolio/portfolio-2.jpg"
                    alt="image"
                    width={650}
                    height={500}
                  />
                </div>

                <div className="portfolio-content">
                  <Link href="/portfolio/details">
                    <i className="bx bx-plus"></i>
                  </Link>
                  <h3>
                    <Link href="/portfolio/details">Web Development</Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-portfolio">
                <div className="portfolio-image">
                  <Image
                    src="https://cdn.chorn.in.th/obsolete/portfolio/portfolio-3.jpg"
                    alt="image"
                    width={650}
                    height={500}
                  />
                </div>

                <div className="portfolio-content">
                  <Link href="/portfolio/details">
                    <i className="bx bx-plus"></i>
                  </Link>
                  <h3>
                    <Link href="/portfolio/details">Web Application</Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-portfolio">
                <div className="portfolio-image">
                  <Image
                    src="https://cdn.chorn.in.th/obsolete/portfolio/portfolio-4.jpg"
                    alt="image"
                    width={650}
                    height={500}
                  />
                </div>

                <div className="portfolio-content">
                  <Link href="/portfolio/details">
                    <i className="bx bx-plus"></i>
                  </Link>
                  <h3>
                    <Link href="/portfolio/details">Dashboard App</Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-portfolio">
                <div className="portfolio-image">
                  <Image
                    src="https://cdn.chorn.in.th/obsolete/portfolio/portfolio-5.jpg"
                    alt="image"
                    width={650}
                    height={500}
                  />
                </div>

                <div className="portfolio-content">
                  <Link href="/portfolio/details">
                    <i className="bx bx-plus"></i>
                  </Link>
                  <h3>
                    <Link href="/portfolio/details">App Development</Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-portfolio">
                <div className="portfolio-image">
                  <Image
                    src="https://cdn.chorn.in.th/obsolete/portfolio/portfolio-6.jpg"
                    alt="image"
                    width={650}
                    height={500}
                  />
                </div>

                <div className="portfolio-content">
                  <Link href="/portfolio/details">
                    <i className="bx bx-plus"></i>
                  </Link>
                  <h3>
                    <Link href="/portfolio/details">Digital Agency</Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-portfolio">
                <div className="portfolio-image">
                  <Image
                    src="https://cdn.chorn.in.th/obsolete/portfolio/portfolio-7.jpg"
                    alt="image"
                    width={650}
                    height={500}
                  />
                </div>

                <div className="portfolio-content">
                  <Link href="/portfolio/details">
                    <i className="bx bx-plus"></i>
                  </Link>
                  <h3>
                    <Link href="/portfolio/details">Website Development</Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-portfolio">
                <div className="portfolio-image">
                  <Image
                    src="https://cdn.chorn.in.th/obsolete/portfolio/portfolio-8.jpg"
                    alt="image"
                    width={650}
                    height={500}
                  />
                </div>

                <div className="portfolio-content">
                  <Link href="/portfolio/details">
                    <i className="bx bx-plus"></i>
                  </Link>
                  <h3>
                    <Link href="/portfolio/details">Logo & Branding</Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-portfolio">
                <div className="portfolio-image">
                  <Image
                    src="https://cdn.chorn.in.th/obsolete/portfolio/portfolio-9.jpg"
                    alt="image"
                    width={650}
                    height={500}
                  />
                </div>

                <div className="portfolio-content">
                  <Link href="/portfolio/details">
                    <i className="bx bx-plus"></i>
                  </Link>
                  <h3>
                    <Link href="/portfolio/details">
                      Mobile App Development
                    </Link>
                  </h3>
                </div>
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

export default OurProjects;
