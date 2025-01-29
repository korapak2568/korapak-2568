// src/components/LogoSocial/HomeAiSolutionBanner/HomeAiSolutionBanner.tsx

"use client";

import React from "react";
import Left from "@/components/AI/HomeAiSolutionBanner/left";
import Right from "@/components/AI/HomeAiSolutionBanner/right";

export default function HomeAiSolutionBanner() {

    return (
        <>
            <div className="main-banner">
                <div className="main-banner-item main-banner-ai-solutions">
                    <div className="d-table d-table-ai-solutions">
                        <div className="d-table-cell">
                            <div className="container-fluid">
                                <div className="row align-items-center">
                                    <Left/>
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