import React from "react";
import {DefaultShape} from "@/components/Shape/DefaultShape";
import FullStackModuleBottom from "@/components/Services/fullstack-development/FullStackModuleBottom";
import FullStackModuleLeft from "@/components/Services/fullstack-development/FullStackModuleLeft";
import FullStackModuleRight from "@/components/Services/fullstack-development/FullStackModuleRight";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

const FullStackPageMain: React.FC<{ lang: string }> = ({lang}) => {
    return (
        <>
            <div className="services-area pt-5 pb-70">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <h1>{InfoTranslation[lang].FullStack.services.title}</h1>
                        <div className="row align-items-center align-items-center-custom">
                            <FullStackModuleLeft lang={lang}/>
                            <FullStackModuleRight lang={lang}/>
                        </div>
                        <FullStackModuleBottom lang={lang}/>
                    </div>
                </div>
                <DefaultShape/>
            </div>
        </>
    );
};

export default FullStackPageMain;
