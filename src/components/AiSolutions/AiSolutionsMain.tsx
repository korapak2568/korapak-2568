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
                        <h1>{InfoTranslation[lang].Service.title}</h1>
                        <div className="row align-items-center align-items-center-custom">
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