"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const PortfolioTwoColumn: React.FC = () => {
  return (
    <>
      <div className="portfolio-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="single-portfolio">
                <div className="portfolio-image">
                  <Image
                    src="/images/portfolio/portfolio-9.jpg"
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

            <div className="col-lg-6 col-md-6">
              <div className="single-portfolio">
                <div className="portfolio-image">
                  <Image
                    src="/images/portfolio/portfolio-2.jpg"
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

            <div className="col-lg-6 col-md-6">
              <div className="single-portfolio">
                <div className="portfolio-image">
                  <Image
                    src="/images/portfolio/portfolio-3.jpg"
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

            <div className="col-lg-6 col-md-6">
              <div className="single-portfolio">
                <div className="portfolio-image">
                  <Image
                    src="/images/portfolio/portfolio-4.jpg"
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

            <div className="col-lg-6 col-md-6">
              <div className="single-portfolio">
                <div className="portfolio-image">
                  <Image
                    src="/images/portfolio/portfolio-5.jpg"
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

            <div className="col-lg-6 col-md-6">
              <div className="single-portfolio">
                <div className="portfolio-image">
                  <Image
                    src="/images/portfolio/portfolio-6.jpg"
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

            <div className="col-lg-6 col-md-6">
              <div className="single-portfolio">
                <div className="portfolio-image">
                  <Image
                    src="/images/portfolio/portfolio-7.jpg"
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

            <div className="col-lg-6 col-md-6">
              <div className="single-portfolio">
                <div className="portfolio-image">
                  <Image
                    src="/images/portfolio/portfolio-8.jpg"
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

export default PortfolioTwoColumn;
