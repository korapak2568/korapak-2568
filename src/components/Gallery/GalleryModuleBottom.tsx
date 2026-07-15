"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { IImageResponsiveUnit } from "@/image/model/IImageResponsiveUnit";
import { CDN } from "@/lib/cdn";


function getGalleryImageSrc(src: string): string {
  return src.startsWith("/images/gallery/")
    ? `${CDN}${src.replace("/images", "")}`
    : src;
}
const GalleryModuleBottom: React.FC<{ slides: IImageResponsiveUnit[] }> = ({
  slides,
}) => {
  return (
    <>
      <div className="portfolio-area pb-100">
        <div className="container-fluid">
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3000,
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
            {slides.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="single-portfolio-item">
                  <div className="portfolio-image">
                    <Image
                      src={getGalleryImageSrc(image.image1200)}
                      alt={image.title}
                      width={1200}
                      height={677}
                      sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw), 400px)"
                      quality={80}
                      priority={false}
                      loading={"eager"}
                      className="gallery-bottom-unit"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default GalleryModuleBottom;
