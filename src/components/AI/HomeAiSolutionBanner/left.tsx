"use client"

import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

export default function Left() {
    const currentTranslate = useSelector((state: RootState) => state.service.translate);

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
                        {__html: InfoTranslation[currentTranslate.value].Service.description} as { __html: string }
                    }
                />

                <div className={"add-web-content"}>
                    <ul>
                        {InfoTranslation[currentTranslate.value].Service.services.map((service, index) => (
                            <li key={index}>
                                <strong>{service.title}</strong> {service.description}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
