import React from "react";
import AboutLeft from "@/components/About/AboutLeft";
import AboutRight from "@/components/About/AboutRight";
import {DefaultShape} from "@/components/Shape/DefaultShape";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

export default function AboutContent({lang}: { lang: string }) {
    return (
        <>
            <div className="about-area pb-70">
                <div className="container">
                    <div className="row">
                        <h1>{InfoTranslation[lang].About.title}</h1>
                        <AboutLeft lang={lang}/>
                        <AboutRight lang={lang}/>
                    </div>
                </div>
            </div>

            <DefaultShape/>
        </>
    );
}
