import React from "react";
import HomeFeatureTop from "@/components/Features/HomeFeatureTop";
import HomeFeatureLeft from "@/components/Features/HomeFeatureLeft";
import HomeFeatureRight from "@/components/Features/HomeFeatureRight";

export default function HomeFeatureMain({lang}: { lang: string }) {
    return (
        <>
            <div className="features-area pt-100 pb-70">
                <div className="container">
                    <HomeFeatureTop lang={lang}/>
                    <div className="row align-items-center">
                        <HomeFeatureLeft lang={lang}/>
                        <HomeFeatureRight lang={lang}/>
                    </div>
                </div>
            </div>
        </>
    );
}