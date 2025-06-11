import React from "react";
import HomeFeatureTop from "@/components/Features/HomeFeatureTop";
import HomeFeatureLeft from "@/components/Features/HomeFeatureLeft";
import HomeFeatureRight from "@/components/Features/HomeFeatureRight";

export default function HomeFeatureMain(
    {lang, isTopSpace = false, isHideTopTitle = false}:
    { lang: string, isTopSpace?: boolean, isHideTopTitle?: boolean }) {

    const classes = isTopSpace ? "features-area pt-100 pb-70" : "features-area pb-70"

    return (
        <>
            <div className={`${classes}`}>
                <div className="container">
                    {!isHideTopTitle && <HomeFeatureTop lang={lang}/>}
                    <div className="row align-items-center">
                        <HomeFeatureLeft lang={lang}/>
                        <HomeFeatureRight lang={lang}/>
                    </div>
                </div>
            </div>
        </>
    );
}