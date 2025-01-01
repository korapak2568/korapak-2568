// src/components/Page/MainBannerAI/page.tsx

"use client";

import React from "react";
import Left from "@/components/Index/MainBannerAI/left";
import Right from "@/components/Index/MainBannerAI/right";

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