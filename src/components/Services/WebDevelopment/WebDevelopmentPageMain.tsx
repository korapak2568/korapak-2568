import React from "react";
import {DefaultShape} from "@/components/Shape/DefaultShape";
import WebDevelopmentLeft from "@/components/Services/WebDevelopment/WebDevelopmentLeft";
import WebDevelopmentRight from "@/components/Services/WebDevelopment/WebDevelopmentRight";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import WebDevelopmentBackEndBottom from "@/components/Services/WebDevelopment/WebDevelopmentBackEndBottom";
import WevDevelopmentFrontEndBottom from "@/components/Services/WebDevelopment/WevDevelopmentFrontEndBottom";

export default function WebDevelopmentPageMain({lang}: { lang: string }) {
    return (
        <>
            <div className="services-area pb-70">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="row align-items-center align-items-center-custom">
                            <h1>{InfoTranslation[lang].Feature.stacks[2].title}</h1>
                            <WebDevelopmentLeft lang={lang}/>
                            <WebDevelopmentRight lang={lang}/>
                        </div>
                        <WevDevelopmentFrontEndBottom lang={lang}/>
                        <WebDevelopmentBackEndBottom lang={lang}/>
                    </div>
                </div>
            </div>
            <DefaultShape/>
        </>
    )
}