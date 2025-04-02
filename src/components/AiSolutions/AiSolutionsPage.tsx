"use client";

import React from "react";
import Image from "next/image";
import HomeAiSolutionBanner from "@/components/AI/HomeAiSolutionBanner/HomeAiSolutionBanner";
import {ImageUrl} from "@/data/image/ImageUrl";

const AiSolutionsPage: React.FC = () => {
    return (
        <>
            <div className="portfolio-area pt-4">
                <div className="container">
                    <HomeAiSolutionBanner/>
                </div>

                <div className="default-shape">
                    <div className="shape1">
                        <Image
                            src={ImageUrl.ai.defaultShape1.path}
                            alt={ImageUrl.ai.defaultShape1.title}
                            width={52}
                            height={52}
                        />
                    </div>
                    <div className="shape2">
                        <Image
                            src={ImageUrl.ai.defaultShape2.path}
                            alt={ImageUrl.ai.defaultShape2.title}
                            width={14}
                            height={16}
                        />
                    </div>
                    <div className="shape3">
                        <Image
                            src={ImageUrl.ai.defaultShape3.path}
                            alt={ImageUrl.ai.defaultShape3.title}
                            width={18}
                            height={18}
                        />
                    </div>
                    <div className="shape4">
                        <Image
                            src={ImageUrl.ai.defaultShape4.path}
                            alt={ImageUrl.ai.defaultShape4.title}
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
