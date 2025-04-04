"use client";

import React from "react";
import MainBannerAiFah from "@/components/AI/MainBannerAiFah/page";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {useLocale} from "@/components/ProviderWrapper/LocaleContext";
import {DefaultShape} from "@/components/Shape/DefaultShape";

const AiCompanionsPage: React.FC = () => {
    const locale = useLocale()

    return (
        <>
            <div className="portfolio-area pt-4">
                <div className="container">
                    <div className="row">
                        <div className={"add-web-content"}>
                            <h2>{InfoTranslation[locale.value].Service.demo.title}</h2>
                            <p>{InfoTranslation[locale.value].Service.demo.description}</p>

                            <div>
                                <ul className="feature-list">
                                    {InfoTranslation[locale.value].Service.demo.procedure.steps.map((service, index) => (
                                        <li key={index} className="feature-item">
                                            <div className="icon">
                                                <i className="flaticon-check"></i>
                                            </div>
                                            <div className="content">
                                                <strong>{service.title}</strong>
                                                <p>{service.description}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <MainBannerAiFah/>
                    </div>
                </div>

                <DefaultShape/>
            </div>
        </>
    );
};

export default AiCompanionsPage;
