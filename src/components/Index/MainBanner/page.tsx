// src/components/FooterLogoSocial/HomeWorkspace/AiSolutionMain.tsx

import React from "react";
import AiSolutionLeft from "@/components/AiSolutions/AiSolutionLeft";
import AiSolutionRight from "@/components/AiSolutions/AiSolutionRight";

export default function Page({lang}: { lang: string }) {

    return (
        <>
            <div className="main-banner">
                <div className="main-banner-item item-four">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container-fluid">
                                <div className="row align-items-center">
                                    <AiSolutionLeft lang={lang}/>
                                    <AiSolutionRight/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
