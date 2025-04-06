// src/components/LogoSocial/HomeAiSolutionBanner/HomeAiSolutionBanner.tsx

import React from "react";
import Left from "@/components/AI/HomeAiSolutionBanner/left";
import Right from "@/components/AI/HomeAiSolutionBanner/right";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

export default function HomeAiSolutionBanner({lang}: { lang: string }) {
    return (
        <>
            <div className="main-banner">
                <div className="main-banner-item main-banner-ai-solutions">
                    <div className="d-table d-table-ai-solutions">
                        <div className="d-table-cell">
                            <div className="container-fluid">
                                <h1>{InfoTranslation[lang].Service.title}</h1>
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