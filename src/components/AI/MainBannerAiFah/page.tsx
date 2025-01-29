"use client";

import React from "react";
import Image from "next/image";
import Left from "@/components/AI/MainBannerAiFah/left";
import Right from "@/components/AI/MainBannerAiFah/right";

export default function Page() {
    return (
        <>
            <div className="main-banner">
                <div
                    className="main-banner-item main-banner-fah"
                    style={{
                        backgroundImage: `url(/images/main-banner-bg-1.jpg)`,
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

                <div className="main-banner-shape">
                    <div className="shape-1">
                        <Image
                            src="/images/banner/banner-shape-1.png"
                            alt="image"
                            width={70}
                            height={85}
                        />
                    </div>
                    <div className="shape-2">
                        <Image
                            src="/images/banner/banner-shape-2.png"
                            alt="image"
                            width={92}
                            height={95}
                        />
                    </div>
                    <div className="shape-3">
                        <Image
                            src="/images/banner/banner-shape-3.png"
                            alt="image"
                            width={65}
                            height={70}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};