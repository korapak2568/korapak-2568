"use client";

import React from "react";
import Left from "@/components/AI/MainBannerAiFah/left";
import Right from "@/components/AI/MainBannerAiFah/right";
import {ImageUrl} from "@/image/ImageUrl";

export default function Page() {
    return (
        <>
            <div className="main-banner">
                <div
                    className="main-banner-item main-banner-fah"
                    style={{
                        backgroundImage: `url(${ImageUrl.banner.mainBannerBg1.path})`,
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