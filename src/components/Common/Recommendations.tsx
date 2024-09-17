"use client";

import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {IRecommendation} from "@/data/model/common/IRecommendation";

const Recommendations: React.FC = () => {
    const service = useSelector((state: RootState) => state.service.value);

    return (
        <>
            <div className="testimonial-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-6">
                            <div className="testimonial-content">
                                <span>{service.RECOMMENDATION_INFO.span}</span>
                                <h2>{service.RECOMMENDATION_INFO.title}</h2>
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
                        {service.RECOMMENDATION_INFO.list.map((item: IRecommendation, index: number) => (
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
