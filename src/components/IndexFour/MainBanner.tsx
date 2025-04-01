"use client";
  
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

const MainBanner: React.FC = () => {
  return (
    <>
      <div className="home-wrapper-area">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 6000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="home-slides"
        >
          <SwiperSlide>
            <div className="main-slider-item">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="main-slider-content">
                          <h1>We Move The Digital Industrial Forward</h1>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Quis ipsum suspendisse ultrices
                            gravida. Risus commodo viverra maecenas accumsan
                            lacus vel facilisis.
                          </p>

                          <div className="slider-btn">
                            <Link href="/contact-us" className="default-btn">
                              Get Services
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div
                          className="main-slider-image"
                          style={{
                            backgroundImage: `url(https://cdn.chorn.in.th/public/main-slider/main-slider-1.jpg)`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="main-slider-item">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="main-slider-content">
                          <h1>We Provide Digital Marketing Solutions</h1>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Quis ipsum suspendisse ultrices
                            gravida. Risus commodo viverra maecenas accumsan
                            lacus vel facilisis.
                          </p>

                          <div className="slider-btn">
                            <Link href="/contact-us" className="default-btn">
                              Get Services
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div
                          className="main-slider-image"
                          style={{
                            backgroundImage: `url(https://cdn.chorn.in.th/public/main-slider/main-slider-2.jpg)`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="main-slider-item">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="main-slider-content">
                          <h1>Digital Agency with Excellence Service</h1>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Quis ipsum suspendisse ultrices
                            gravida. Risus commodo viverra maecenas accumsan
                            lacus vel facilisis.
                          </p>

                          <div className="slider-btn">
                            <Link href="/contact-us" className="default-btn">
                              Get Services
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div
                          className="main-slider-image"
                          style={{
                            backgroundImage: `url(https://cdn.chorn.in.th/public/main-slider/main-slider-3.jpg)`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="main-slider-shape">
          <div className="shape-1">
            <Image
              src="https://cdn.chorn.in.th/public/main-slider/slider-shape-1.png"
              alt="image"
              width={399}
              height={438}
            />
          </div>
          <div className="shape-2">
            <Image
              src="https://cdn.chorn.in.th/public/main-slider/slider-shape-2.png"
              alt="image"
              width={66}
              height={62}
            />
          </div>
          <div className="shape-3">
            <Image
              src="https://cdn.chorn.in.th/public/main-slider/slider-shape-3.png"
              alt="image"
              width={117}
              height={119}
            />
          </div>
          <div className="shape-4">
            <Image
              src="https://cdn.chorn.in.th/public/main-slider/slider-shape-4.png"
              alt="image"
              width={164}
              height={164}
            />
          </div>
          <div className="shape-5">
            <Image
              src="https://cdn.chorn.in.th/public/main-slider/slider-shape-5.png"
              alt="image"
              width={438}
              height={399}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
