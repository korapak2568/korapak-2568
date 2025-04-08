import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import React from "react";

export default function HomeFeatureTop({lang}: { lang: string }) {
    return (
        <div className="section-title contrast-section-title home-feature-top">
            <span>{InfoTranslation[lang].Feature.span}</span>
            <h2>{InfoTranslation[lang].Feature.title}</h2>
            <div className="bar"></div>
        </div>
    )
}