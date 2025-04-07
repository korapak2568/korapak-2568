"use client"

import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, FreeMode, Navigation} from "swiper/modules";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {MainShape} from "@/components/Shape/MainShape";

const HomeWorkspace: React.FC<{ lang: string }> = ({lang}) => {
    return (
        <>
            <div className="home-wrapper-area">
                <Swiper
                    speed={3000}
                    spaceBetween={30}
                    centeredSlides={true}
                    grabCursor={true} // Shows a grab cursor
                    freeMode={true} // Enables smooth drag
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false, // So it continues autoplay even after interaction
                        pauseOnMouseEnter: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Navigation, FreeMode]}
                    className="home-slides"
                >
                    {InfoTranslation[lang].Gallery.slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="main-slider-item">
                                <div className="d-table">
                                    <div className="d-table-cell">
                                        <div className="container-fluid">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="main-slider-content main-slider-content-custom">
                                                        <p>{slide.description}</p>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6">
                                                    <div
                                                        className="main-slider-image"
                                                        style={{
                                                            backgroundImage: `url(${slide.image.image1200})`,
                                                        }}
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <MainShape/>
            </div>
        </>
    );
};

export default HomeWorkspace;
