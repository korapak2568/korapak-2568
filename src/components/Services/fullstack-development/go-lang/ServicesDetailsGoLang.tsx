"use client";

import React from "react";
import ServiceFaqGoLang from "./ServiceFaqGoLang";
import Image from "next/image";
import ServiceSidebarFullStack from "@/components/Services/ServiceSidebarFullStack";
import {Info} from "@/data/info/Info";

const ServicesDetailsGoLang: React.FC = () => {

    return (
        <>
            <div className="services-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="services-details-desc">
                                <h3>{Info.FullStack.additions[4].details[0].title}</h3>
                                <p>{Info.FullStack.additions[4].details[0].description}</p>

                                <h3>{Info.FullStack.additions[4].details[1].title}</h3>
                                <p>{Info.FullStack.additions[4].details[1].description}</p>

                                <div className="services-details-features">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="features-image">
                                                <Image
                                                    src={Info.Images.serviceDetails.go.path}
                                                    alt="image"
                                                    width={500}
                                                    height={500}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <ul className="features-list">
                                                {Info.FullStack.additions[4].details[1].list.map((item: string, index: number) => (
                                                    <li key={index}>
                                                        <i className="flaticon-check"></i> {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <h3>{Info.FullStack.additions[4].details[2].title}</h3>
                                <p>{Info.FullStack.additions[4].details[2].description}</p>

                                <h3>{Info.FullStack.additions[4].details[3].title}</h3>
                                <p>{Info.FullStack.additions[4].details[3].description}</p>

                                <ServiceFaqGoLang/>
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

export default ServicesDetailsGoLang;
