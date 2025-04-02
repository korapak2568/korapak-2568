"use client";

import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, Autoplay} from "swiper/modules";
import Image from "next/image";
import {useLocale} from "@/components/ProviderWrapper/LocaleContext";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {ImageUrl} from "@/data/image/ImageUrl";

const ImpressivePortfolio: React.FC = () => {
    const locale = useLocale()

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
                        {ImageUrl.slide.globals.map((image, index) => (
                            <SwiperSlide key={index}>
                                <div className="single-portfolio-item">
                                    <div className="portfolio-image">
                                        <Image
                                            src={image.path}
                                            alt={image.title}
                                            width={650}
                                            height={500}
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

export default ImpressivePortfolio;
