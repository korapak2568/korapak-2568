"use client";

import React from "react";
import ServiceFaqGitHub from "./ServiceFaqGitHub";
import Image from "next/image";
import ServiceSidebarDevOpsTesting from "@/components/Services/ServiceSidebarDevOpsTesting";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {useLocale} from "@/components/ProviderWrapper/LocaleContext";
import {ImageUrl} from "@/data/image/ImageUrl";

const ServicesDetailsGitHub: React.FC = () => {
    const locale = useLocale()

    return (
        <>
            <div className="services-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="services-details-desc">
                                <h3>{InfoTranslation[locale.value].DevOps.github.features[0].title}</h3>
                                <p>{InfoTranslation[locale.value].DevOps.github.features[0].description}</p>

                                <h3>{InfoTranslation[locale.value].DevOps.github.features[1].title}</h3>
                                <p>{InfoTranslation[locale.value].DevOps.github.features[1].description}</p>

                                <div className="services-details-features">
                                    <div className="row align-items-center">
                                        <Image
                                            src={ImageUrl.devopsTesting.github.path}
                                            alt="image"
                                            width={500}
                                            height={500}
                                        />

                                        <div className="col-lg-6">
                                            <ul className="features-list">
                                                {InfoTranslation[locale.value].DevOps.github.features[1].list.map((item: string, index: number) => (
                                                    <li key={index}>
                                                        <i className="flaticon-check"></i> {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-result">
                                    <h3>{InfoTranslation[locale.value].DevOps.github.features[2].title}</h3>
                                    <p>{InfoTranslation[locale.value].DevOps.github.features[2].description}</p>
                                </div>

                                <ServiceFaqGitHub/>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <ServiceSidebarDevOpsTesting/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesDetailsGitHub;
