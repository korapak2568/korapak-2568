// src/components/LogoSocial/HomeWorkspace/HomeAiSolutionBanner.tsx

import React from "react";
import Left from "@/components/AI/HomeAiSolutionBanner/left";
import Right from "@/components/AI/HomeAiSolutionBanner/right";

export default function Page({lang}: { lang: string }) {

    return (
        <>
            <div className="main-banner">
                <div className="main-banner-item item-four">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container-fluid">
                                <div className="row align-items-center">
                                    <Left lang={lang}/>
                                    <Right/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
