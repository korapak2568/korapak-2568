"use client";
  
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const Partners: React.FC = () => {
  return (
    <>
      <div className="partner-area pb-100">
        <div className="container">
          <Swiper
            spaceBetween={30}
            autoplay={{
              delay: 6000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
              1200: {
                slidesPerView: 5,
              },
            }}
            modules={[Autoplay]}
            className="partner-slider"
          >
            <SwiperSlide>
              <div className="partner-item">
                <Image
                  src="/images/partner/partner-1.png"
                  alt="image"
                  width={200}
                  height={210}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <Image
                  src="/images/partner/partner-2.png"
                  alt="image"
                  width={200}
                  height={210}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <Image
                  src="/images/partner/partner-3.png"
                  alt="image"
                  width={200}
                  height={210}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <Image
                  src="/images/partner/partner-4.png"
                  alt="image"
                  width={200}
                  height={210}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <Image
                  src="/images/partner/partner-5.png"
                  alt="image"
                  width={200}
                  height={210}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <Image
                  src="/images/partner/partner-6.png"
                  alt="image"
                  width={200}
                  height={210}
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Partners;
