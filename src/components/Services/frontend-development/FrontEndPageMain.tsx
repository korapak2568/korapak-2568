import React from "react";
import {DefaultShape} from "@/components/Shape/DefaultShape";
import FrontEndModuleBottom from "./FrontEndModuleBottom";
import FrontEndModuleLeft from "@/components/Services/frontend-development/FrontEndModuleLeft";
import FrontEndRightImages from "@/components/Services/frontend-development/FrontEndModuleRight";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

const FrontEndPageMain: React.FC<{ lang: string }> = ({lang}) => {
    return (
        <>
            <div className="services-area pb-70">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <h1>{InfoTranslation[lang].FrontEnd.services.title}</h1>
                        <div className="row align-items-center align-items-center-custom">
                            <FrontEndModuleLeft lang={lang}/>
                            <FrontEndRightImages lang={lang}/>
                        </div>
                        <FrontEndModuleBottom lang={lang}/>
                    </div>
                </div>
            </div>
            <DefaultShape/>
        </>
    );
};

export default FrontEndPageMain;