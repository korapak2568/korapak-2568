"use client";

import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";
import {IRecommendDetail} from "@/data/recommend/model/IRecommendDetail";
import {Info} from "@/data/info/Info";

const Recommendations: React.FC = () => {

    return (
        <>
            <div className="testimonial-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-6">
                            <div className="testimonial-content">
                                <span>{Info.Recommend.span}</span>
                                <h2>{Info.Recommend.title}</h2>
                                <div className="bar"></div>
                            </div>
                        </div>
                    </div>

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
                        className="testimonial-slider"
                    >
                        {Info.Recommend.list.map((item: IRecommendDetail, index: number) => (
                            <SwiperSlide key={index}>
                                <div className="testimonial-item">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div
                                                className="testimonial-image hover-rotate"
                                                style={{
                                                    backgroundImage: `url(${item.image})`,
                                                }}
                                            ></div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="testimonial-inner-content">
                                                <div className="icon">
                                                    <i className="flaticon-left-quotes-sign hover-rotate"></i>
                                                </div>
                                                <p>{item.description}</p>
                                                <div className="info-text">
                                                    <div className={"font-white"}>{item.name}</div>
                                                    <span>{item.role}</span>
                                                </div>
                                            </div>
                                        </div>
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

export default Recommendations;
