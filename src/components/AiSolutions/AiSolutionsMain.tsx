import React from "react";
import {DefaultShape} from "@/components/Shape/DefaultShape";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import AiSolutionLeft from "@/components/AiSolutions/AiSolutionLeft";
import AiSolutionRight from "@/components/AiSolutions/AiSolutionRight";

export default function AiSolutionsMain({lang}: { lang: string }) {
    return (
        <>
            <div className="services-area">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <h1 className="">{InfoTranslation[lang].Service.title}</h1>
                        <div className="row align-items-center llm-integration-vertical">
                            <AiSolutionLeft lang={lang}/>
                            <AiSolutionRight/>
                        </div>
                    </div>
                </div>
            </div>
            <DefaultShape/>
        </>
    );
};