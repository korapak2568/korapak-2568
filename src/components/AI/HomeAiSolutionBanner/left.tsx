"use client"

import React from "react";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {useLocale} from "@/components/ProviderWrapper/LocaleContext";

export default function Left() {
    const locale = useLocale()

    return (
        <div className="col-lg-6">
            <div className="main-banner-content pr-15 main-banner-content-custom">
                <p
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="200"
                    data-aos-once="true"
                    className={"mb-4"}
                    dangerouslySetInnerHTML={
                        {__html: InfoTranslation[locale.value].Service.description} as { __html: string }
                    }
                />

                <div className={"add-web-content"}>
                    <ul className="feature-list">
                        {InfoTranslation[locale.value].Service.services.map((service, index) => (
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
        </div>
    );
}
