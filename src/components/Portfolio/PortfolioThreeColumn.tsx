"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const PortfolioThreeColumn: React.FC = () => {
  return (
    <>
      <div className="portfolio-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-portfolio-item">
                <div className="portfolio-image">
                  <Link href="/portfolio/details">
                    <Image
                      src="/obsolete-images/portfolio/portfolio-1.jpg"
                      alt="image"
                      width={650}
                      height={500}
                    />
                  </Link>
                </div>

                <div className="portfolio-content">
                  <h3>
                    <Link href="/portfolio/details">Creative Work</Link>
                  </h3>
                  <span>Web Design</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-portfolio-item">
                <div className="portfolio-image">
                  <Link href="/portfolio/details">
                    <Image
                      src="/obsolete-images/portfolio/portfolio-2.jpg"
                      alt="image"
                      width={650}
                      height={500}
                    />
                  </Link>
                </div>

                <div className="portfolio-content">
                  <h3>
                    <Link href="/portfolio/details">Ecommerce Work</Link>
                  </h3>
                  <span>Creative Agency</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-portfolio-item">
                <div className="portfolio-image">
                  <Link href="/portfolio/details">
                    <Image
                      src="/obsolete-images/portfolio/portfolio-3.jpg"
                      alt="image"
                      width={650}
                      height={500}
                    />
                  </Link>
                </div>

                <div className="portfolio-content">
                  <h3>
                    <Link href="/portfolio/details">App Development</Link>
                  </h3>
                  <span>IOS Android</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-portfolio-item">
                <div className="portfolio-image">
                  <Link href="/portfolio/details">
                    <Image
                      src="/obsolete-images/portfolio/portfolio-4.jpg"
                      alt="image"
                      width={650}
                      height={500}
                    />
                  </Link>
                </div>

                <div className="portfolio-content">
                  <h3>
                    <Link href="/portfolio/details">Dashboard App</Link>
                  </h3>
                  <span>Web Development</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-portfolio-item">
                <div className="portfolio-image">
                  <Link href="/portfolio/details">
                    <Image
                      src="/obsolete-images/portfolio/portfolio-5.jpg"
                      alt="image"
                      width={650}
                      height={500}
                    />
                  </Link>
                </div>

                <div className="portfolio-content">
                  <h3>
                    <Link href="/portfolio/details">Web Application</Link>
                  </h3>
                  <span>Marketing</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-portfolio-item">
                <div className="portfolio-image">
                  <Link href="/portfolio/details">
                    <Image
                      src="/obsolete-images/portfolio/portfolio-6.jpg"
                      alt="image"
                      width={650}
                      height={500}
                    />
                  </Link>
                </div>

                <div className="portfolio-content">
                  <h3>
                    <Link href="/portfolio/details">Logo & Branding</Link>
                  </h3>
                  <span>Agency</span>
                </div>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="pagination-area">
                <a href="#" className="prev page-numbers">
                  <i className="flaticon-left-arrow"></i>
                </a>
                <a href="#" className="page-numbers">
                  1
                </a>
                <span className="page-numbers current" aria-current="page">
                  2
                </span>
                <a href="#" className="page-numbers">
                  3
                </a>
                <a href="#" className="page-numbers">
                  4
                </a>
                <a href="#" className="next page-numbers">
                  <i className="flaticon-next"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="default-shape">
          <div className="shape1">
            <Image
              src="/obsolete-images/default-shape/default-shape1.png"
              alt="image"
              width={52}
              height={52}
            />
          </div>
          <div className="shape2">
            <Image
              src="/obsolete-images/default-shape/default-shape2.png"
              alt="image"
              width={14}
              height={16}
            />
          </div>
          <div className="shape3">
            <Image
              src="/obsolete-images/default-shape/default-shape3.png"
              alt="image"
              width={18}
              height={18}
            />
          </div>
          <div className="shape4">
            <Image
              src="/obsolete-images/default-shape/default-shape4.png"
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

export default PortfolioThreeColumn;
