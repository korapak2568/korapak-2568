"use client";

import React from "react";
import Left from "@/components/AI/MainBannerAiFah/left";
import Right from "@/components/AI/MainBannerAiFah/right";

export default function Page() {
    return (
        <>
            <div className="main-banner">
                <div
                    className="main-banner-item main-banner-fah"
                    style={{
                        backgroundImage: `url(/obsolete-images/main-banner-bg-1.jpg)`,
                    }}
                >
                    <div className="d-table d-table-fah">
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