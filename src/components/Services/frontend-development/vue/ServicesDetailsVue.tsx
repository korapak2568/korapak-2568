import React from "react";
import ServiceFaqVue from "./ServiceFaqVue";
import Image from "next/image";
import ServiceSidebarFrontEnd from "@/components/Services/ServiceSidebarFrontEnd";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {ImageUrl} from "@/data/image/ImageUrl";
import {DefaultShape} from "@/components/Shape/DefaultShape";
import {headers} from "next/headers";

const ServicesDetailsVue: React.FC = () => {
    const lang = headers().get('x-locale') || 'en';

    return (
        <>
            <div className="services-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="services-details-desc">
                                <h3>{InfoTranslation[lang].FrontEnd.vue.features[0].title}</h3>
                                <p>{InfoTranslation[lang].FrontEnd.vue.features[0].description}</p>

                                <h3>{InfoTranslation[lang].FrontEnd.vue.features[1].title}</h3>
                                <p>{InfoTranslation[lang].FrontEnd.vue.features[1].description}</p>

                                <div className="services-details-features">
                                    <div className="row align-items-center">
                                        <Image
                                            src={ImageUrl.serviceDetails.vue.path}
                                            alt="image"
                                            width={500}
                                            height={500}
                                        />

                                        <div className="col-lg-6">
                                            <ul className="features-list">
                                                {InfoTranslation[lang].FrontEnd.vue.features[1].list.map((item: string, index: number) => (
                                                    <li key={index}>
                                                        <i className="flaticon-check"></i> {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-result">
                                    <h3>{InfoTranslation[lang].FrontEnd.vue.features[2].title}</h3>
                                    <p>{InfoTranslation[lang].FrontEnd.vue.features[2].description}</p>
                                </div>

                                <ServiceFaqVue/>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <ServiceSidebarFrontEnd/>
                        </div>
                    </div>
                </div>
            </div>
            <DefaultShape/>
        </>
    );
};

export default ServicesDetailsVue;
