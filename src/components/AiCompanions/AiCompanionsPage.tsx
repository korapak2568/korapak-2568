"use client";

import React from "react";
import Image from "next/image";
import MainBannerAiFah from "@/components/AI/MainBannerAiFah/page";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

const AiCompanionsPage: React.FC = () => {
    const currentTranslate = useSelector((state: RootState) => state.service.translate);

    return (
        <>
            <div className="portfolio-area pt-4">
                <div className="container">
                    <div className="row">
                        <div className={"add-web-content"}>
                            <h2>{InfoTranslation[currentTranslate.value].Service.demo.title}</h2>
                            <p>{InfoTranslation[currentTranslate.value].Service.demo.description}</p>

                            <div>
                                <strong>{InfoTranslation[currentTranslate.value].Service.demo.procedure.title}</strong>
                                <ul>
                                    {InfoTranslation[currentTranslate.value].Service.demo.procedure.steps.map((service, index) => (
                                        <li key={index}>
                                            <strong>{service.title}</strong> {service.description}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <MainBannerAiFah/>
                    </div>
                </div>

                <div className="default-shape">
                    <div className="shape1">
                        <Image
                            src="/images-ai/default-shape/default-shape1.png"
                            alt="image"
                            width={52}
                            height={52}
                        />
                    </div>
                    <div className="shape2">
                        <Image
                            src="/images-ai/default-shape/default-shape2.png"
                            alt="image"
                            width={14}
                            height={16}
                        />
                    </div>
                    <div className="shape3">
                        <Image
                            src="/images-ai/default-shape/default-shape3.png"
                            alt="image"
                            width={18}
                            height={18}
                        />
                    </div>
                    <div className="shape4">
                        <Image
                            src="/images-ai/default-shape/default-shape4.png"
                            alt="image"
                            width={52}
                            height={52}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AiCompanionsPage;
