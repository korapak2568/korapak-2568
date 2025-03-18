"use client";

import React from "react";
import ServiceFaqReact from "./ServiceFaqReact";
import Image from "next/image";
import ServiceSidebarFrontEnd from "@/components/Services/ServiceSidebarFrontEnd";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

const ServicesDetailsReact: React.FC = () => {
    const currentTranslate = useSelector((state: RootState) => state.service.translate);

    return (
        <>
            <div className="services-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="services-details-desc">
                                <h3>{InfoTranslation[currentTranslate.value].FrontEnd.react.features[0].title}</h3>
                                <p>{InfoTranslation[currentTranslate.value].FrontEnd.react.features[0].description}</p>

                                <h3>{InfoTranslation[currentTranslate.value].FrontEnd.react.features[1].title}</h3>
                                <p>{InfoTranslation[currentTranslate.value].FrontEnd.react.features[1].description}</p>

                                <div className="services-details-features">
                                    <div className="row align-items-center">
                                        <Image
                                            src={InfoTranslation[currentTranslate.value].Images.serviceDetails.react.path}
                                            alt="image"
                                            width={500}
                                            height={500}
                                        />

                                        <div className="col-lg-6">
                                            <ul className="features-list">
                                                {InfoTranslation[currentTranslate.value].FrontEnd.react.features[1].list.map((item: string, index: number) => (
                                                    <li key={index}>
                                                        <i className="flaticon-check"></i> {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-result">
                                    <h3>{InfoTranslation[currentTranslate.value].FrontEnd.react.features[2].title}</h3>
                                    <p>{InfoTranslation[currentTranslate.value].FrontEnd.react.features[2].description}</p>
                                </div>

                                <ServiceFaqReact/>
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

export default ServicesDetailsReact;
