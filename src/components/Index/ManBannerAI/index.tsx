// src/components/Index/MainBanner2.tsx

"use client";

import React from "react";
import Left from "@/components/Index/ManBannerAI/left";
import Right from "@/components/Index/ManBannerAI/right";

export default function Index() {

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