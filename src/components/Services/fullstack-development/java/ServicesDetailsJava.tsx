"use client";

import React from "react";
import ServiceFaqJava from "./ServiceFaqJava";
import Image from "next/image";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import ServiceSidebarFullStack from "@/components/Services/ServiceSidebarFullStack";

const ServicesDetailsJava: React.FC = () => {
    const service = useSelector((state: RootState) => state.service.value);

    return (
        <>
            <div className="services-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="services-details-desc">
                                <h3>{service.FULL_STACK_FRAMEWORK_INFO.additions[2].details[0].title}</h3>
                                <p>{service.FULL_STACK_FRAMEWORK_INFO.additions[2].details[0].description}</p>

                                <h3>{service.FULL_STACK_FRAMEWORK_INFO.additions[2].details[1].title}</h3>
                                <p>{service.FULL_STACK_FRAMEWORK_INFO.additions[2].details[1].description}</p>

                                <div className="services-details-features">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="features-image">
                                                <Image
                                                    src={service.IMAGES.serviceDetails.java.path}
                                                    alt="image"
                                                    width={500}
                                                    height={500}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <ul className="features-list">
                                                {service.FULL_STACK_FRAMEWORK_INFO.additions[2].details[1].list.map((item: string, index: number) => (
                                                    <li key={index}>
                                                        <i className="flaticon-check"></i> {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <h3>{service.FULL_STACK_FRAMEWORK_INFO.additions[2].details[2].title}</h3>
                                <p>{service.FULL_STACK_FRAMEWORK_INFO.additions[2].details[2].description}</p>

                                <h3>{service.FULL_STACK_FRAMEWORK_INFO.additions[2].details[3].title}</h3>
                                <p>{service.FULL_STACK_FRAMEWORK_INFO.additions[2].details[3].description}</p>

                                <ServiceFaqJava/>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <ServiceSidebarFullStack/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesDetailsJava;
