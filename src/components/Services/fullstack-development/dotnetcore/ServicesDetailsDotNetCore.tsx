"use client";

import React from "react";
import ServiceFaqDotNetCore from "./ServiceFaqDotNetCore";
import Image from "next/image";
import ServiceSidebarFullStack from "@/components/Services/ServiceSidebarFullStack";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {useLocale} from "@/components/ProviderWrapper/LocaleContext";
import {ImageUrl} from "@/data/image/ImageUrl";
import {DefaultShape} from "@/components/Shape/DefaultShape";

const ServicesDetailsDotNetCore: React.FC = () => {
    const locale = useLocale()

    return (
        <>
            <div className="services-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="services-details-desc">
                                <h3>{InfoTranslation[locale.value].FullStack.dotnetcore.features[0].title}</h3>
                                <p>{InfoTranslation[locale.value].FullStack.dotnetcore.features[0].description}</p>

                                <h3>{InfoTranslation[locale.value].FullStack.dotnetcore.features[1].title}</h3>
                                <p>{InfoTranslation[locale.value].FullStack.dotnetcore.features[1].description}</p>

                                <div className="services-details-features">
                                    <div className="row align-items-center">
                                        <Image
                                            src={ImageUrl.serviceDetails.dotnetcore.path}
                                            alt="image"
                                            width={500}
                                            height={500}
                                        />

                                        <div className="col-lg-6">
                                            <ul className="features-list">
                                                {InfoTranslation[locale.value].FullStack.dotnetcore.features[1].list.map((item: string, index: number) => (
                                                    <li key={index}>
                                                        <i className="flaticon-check"></i> {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <h3>{InfoTranslation[locale.value].FullStack.dotnetcore.features[2].title}</h3>
                                <p>{InfoTranslation[locale.value].FullStack.dotnetcore.features[2].description}</p>

                                <h3>{InfoTranslation[locale.value].FullStack.dotnetcore.features[3].title}</h3>
                                <p>{InfoTranslation[locale.value].FullStack.dotnetcore.features[3].description}</p>

                                <ServiceFaqDotNetCore/>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <ServiceSidebarFullStack/>
                        </div>
                    </div>
                </div>
            </div>
            <DefaultShape/>
        </>
    );
};

export default ServicesDetailsDotNetCore;
