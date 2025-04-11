import React from "react";
import AiBannerFahLeft from "@/components/AiFahBanner/AiBannerFahLeft";
import AiBannerFahRight from "@/components/AiFahBanner/AiBannerFahRight";
import {ImageUrl} from "@/image/ImageUrl";

export default function AiBannerFahMain({lang}: { lang: string }) {
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
                                    <AiBannerFahLeft lang={lang}/>
                                    <AiBannerFahRight lang={lang}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};