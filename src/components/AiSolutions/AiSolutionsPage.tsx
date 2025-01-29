"use client";

import React from "react";
import Image from "next/image";
import {Info} from "@/data/info/Info"
import HomeAiSolutionBanner from "@/components/AI/HomeAiSolutionBanner/HomeAiSolutionBanner";

const AiSolutionsPage: React.FC = () => {
    return (
        <>
            <div className="portfolio-area pt-4 pb-100">
                <HomeAiSolutionBanner/>

                <div className="container">
                    <div className="row">
                        <div className={'add-web-content'}>
                            <div>
                                <h2>{Info.Service.title}</h2>
                                <ul>
                                    {Info.Service.services.map((service, index) => (
                                        <li key={index}>
                                            <strong>{service.title}</strong> {service.description}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
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

export default AiSolutionsPage;
