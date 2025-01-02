// src/components/Page/MainBannerAi/page.tsx

"use client";

import React from "react";
import Left from "@/components/AI/MainBannerAi/left";
import Right from "@/components/AI/MainBannerAi/right";

export default function Page() {

    return (
        <>
            <div className="main-banner">
                <div className="main-banner-item item-four">
                    <div className="d-table">
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