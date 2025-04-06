"use client"

import React from "react";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

export default function Left({lang}: { lang: string }) {
    return (
        <div className="col-lg-6">
            <div className="main-banner-content pr-15 main-banner-content-custom">
                <p
                    className={"mb-4"}
                    dangerouslySetInnerHTML={
                        {__html: InfoTranslation[lang].Service.description} as { __html: string }
                    }
                />

                <div className={"add-web-content"}>
                    <ul className="feature-list">
                        {InfoTranslation[lang].Service.services.map((service, index) => (
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
