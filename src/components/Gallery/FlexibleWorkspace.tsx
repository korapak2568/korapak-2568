"use client";

import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";
import Image from "next/image";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {useLocale} from "@/components/ProviderWrapper/LocaleContext";

const FlexibleWorkspace: React.FC = () => {
    const locale = useLocale()

    return (
        <>
            <div className="home-wrapper-area">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: true,
                        pauseOnMouseEnter: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                    className="home-slides"
                >
                    {InfoTranslation[locale.value].Gallery.slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="main-slider-item">
                                <div className="d-table">
                                    <div className="d-table-cell">
                                        <div className="container-fluid">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="main-slider-content main-slider-content-custom">
                                                        <p><strong>{slide.title}, </strong> {slide.description}</p>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6">
                                                    <div
                                                        className="main-slider-image"
                                                        style={{
                                                            backgroundImage: `url(${slide.image})`,
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

                <div className="main-slider-shape">
                    <div className="shape-1">
                        <Image
                            src="/images/main-slider/slider-shape-1.png"
                            alt="image"
                            width={399}
                            height={438}
                        />
                    </div>
                    <div className="shape-2">
                        <Image
                            src="/images/main-slider/slider-shape-2.png"
                            alt="image"
                            width={66}
                            height={62}
                        />
                    </div>
                    <div className="shape-3">
                        <Image
                            src="/images/main-slider/slider-shape-3.png"
                            alt="image"
                            width={117}
                            height={119}
                        />
                    </div>
                    <div className="shape-4">
                        <Image
                            src="/images/main-slider/slider-shape-4.png"
                            alt="image"
                            width={164}
                            height={164}
                        />
                    </div>
                    <div className="shape-5">
                        <Image
                            src="/images/main-slider/slider-shape-5.png"
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

export default FlexibleWorkspace;
