import React from "react";
import {DefaultShape} from "@/components/Shape/DefaultShape";
import FrontEndModuleBottom from "./FrontEndModuleBottom";
import FrontEndModuleLeft from "@/components/Services/frontend-development/FrontEndModuleLeft";
import FrontEndRightImages from "@/components/Services/frontend-development/FrontEndModuleRight";

const FrontEndPageMain: React.FC<{ lang: string }> = ({lang}) => {
    return (
        <>
            <div className="services-area pt-5 pb-70">
                <div className="container">
                    <div className="row justify-content-md-center">
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