import React from "react";
import {DefaultShape} from "@/components/Shape/DefaultShape";
import WebDevelopmentFrontEndStack from "@/components/Services/WebDevelopment/WebDevelopmentFrontEndStack";
import WebDevelopmentBackEndStack from "@/components/Services/WebDevelopment/WebDevelopmentBackEndStack";
import WebDevelopmentModuleLeft from "@/components/Services/WebDevelopment/WebDevelopmentModuleLeft";
import WebDevelopmentModuleRight from "@/components/Services/WebDevelopment/WebDevelopmentModuleRight";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

const WebDevelopmentPageMain: React.FC<{ lang: string }> = ({lang}) => {
    return (
        <>
            <div className="services-area pt-5 pb-70">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="row align-items-center align-items-center-custom">
                            <h1>{InfoTranslation[lang].Feature.stacks[2].title}</h1>
                            <WebDevelopmentModuleLeft lang={lang}/>
                            <WebDevelopmentModuleRight lang={lang}/>
                        </div>
                        <WebDevelopmentFrontEndStack/>
                        <WebDevelopmentBackEndStack/>
                    </div>
                </div>
            </div>
            <DefaultShape/>
        </>
    );
};

export default WebDevelopmentPageMain;
