"use client";

import React from "react";
import ServiceSidebar from "../../ServiceSidebar";
import ServiceFaqNextJS from "./ServiceFaqNextJS";
import Image from "next/image";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";

const ServicesDetailsNextJS: React.FC = () => {
    const service = useSelector((state: RootState) => state.service.value);

    return (
        <>
            <div className="services-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="services-details-desc">
                                <h3>{service.FRONT_END_EXPERIENCE_INFO.additions[0].details[0].title}</h3>
                                <p>{service.FRONT_END_EXPERIENCE_INFO.additions[0].details[0].description}</p>

                                <h3>{service.FRONT_END_EXPERIENCE_INFO.additions[0].details[1].title}</h3>
                                <p>{service.FRONT_END_EXPERIENCE_INFO.additions[0].details[1].description}</p>

                                <div className="services-details-features">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="features-image">
                                                <Image
                                                    src={service.IMAGES.serviceDetails.nextjs.path}
                                                    alt="image"
                                                    width={500}
                                                    height={500}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <ul className="features-list">
                                                {service.FRONT_END_EXPERIENCE_INFO.additions[0].details[1].list.map((item: string, index: number) => (
                                                    <li key={index}>
                                                        <i className="flaticon-check"></i> {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-result">
                                    <h3>{service.FRONT_END_EXPERIENCE_INFO.additions[0].details[2].title}</h3>
                                    <p>{service.FRONT_END_EXPERIENCE_INFO.additions[0].details[2].description}</p>
                                </div>

                                <ServiceFaqNextJS/>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <ServiceSidebar/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesDetailsNextJS;
