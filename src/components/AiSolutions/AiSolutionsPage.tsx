import React from "react";
import HomeAiSolutionBanner from "@/components/AI/HomeAiSolutionBanner/HomeAiSolutionBanner";
import {DefaultShape} from "@/components/Shape/DefaultShape";

export default function AiSolutionsPage({lang}: { lang: string }) {
    return (
        <>
            <div className="services-area pt-5">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <HomeAiSolutionBanner lang={lang}/>
                    </div>
                </div>
            </div>
            <DefaultShape/>
        </>
    );
};