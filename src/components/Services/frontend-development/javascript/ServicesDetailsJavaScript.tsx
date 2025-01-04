"use client";

import React from "react";
import ServiceFaqJavaScript from "./ServiceFaqJavaScript";
import Image from "next/image";
import {Info} from "@/data/info/Info";
import ServiceSidebarFrontEnd from "@/components/Services/ServiceSidebarFrontEnd";

const ServicesDetailsJavaScript: React.FC = () => {

    return (
        <>
            <div className="services-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="services-details-desc">
                                <h3>{Info.FrontEnd.javascript.features[0].title}</h3>
                                <p>{Info.FrontEnd.javascript.features[0].description}</p>

                                <h3>{Info.FrontEnd.javascript.features[1].title}</h3>
                                <p>{Info.FrontEnd.javascript.features[1].description}</p>

                                <div className="services-details-features">
                                    <div className="row align-items-center">
                                        <Image
                                            src={Info.Images.serviceDetails.javascript.path}
                                            alt="image"
                                            width={500}
                                            height={500}
                                        />

                                        <div className="col-lg-6">
                                            <ul className="features-list">
                                                {Info.FrontEnd.javascript.features[1].list.map((item: string, index: number) => (
                                                    <li key={index}>
                                                        <i className="flaticon-check"></i> {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <h3>{Info.FrontEnd.javascript.features[2].title}</h3>
                                <p>{Info.FrontEnd.javascript.features[2].description}</p>

                                <h3>{Info.FrontEnd.javascript.features[3].title}</h3>
                                <p>{Info.FrontEnd.javascript.features[3].description}</p>

                                <ServiceFaqJavaScript/>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <ServiceSidebarFrontEnd/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesDetailsJavaScript;
