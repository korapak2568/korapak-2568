"use client";
  
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const ImpressivePortfolio: React.FC = () => {
  return (
    <>
      <div className="portfolio-area pb-100">
        <div className="container-fluid">
          <div className="section-title">
            <span>Portfolio Showcase</span>
            <h2>Our Impressive Portfolio</h2>
            <div className="bar"></div>
          </div>

          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 6000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="portfolio-slider"
          >
            <SwiperSlide>
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
            </SwiperSlide>

            <SwiperSlide>
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
            </SwiperSlide>

            <SwiperSlide>
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
            </SwiperSlide>

            <SwiperSlide>
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
            </SwiperSlide>

            <SwiperSlide>
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
            </SwiperSlide>

            <SwiperSlide>
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
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ImpressivePortfolio;
