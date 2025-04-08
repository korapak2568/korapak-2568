import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import React from "react";

export default function HomeFrontEndTop({lang}: { lang: string }) {
    return (
        <div className="section-title contrast-section-title">
            <span>{InfoTranslation[lang].FrontEnd.span}</span>
            <h2>{InfoTranslation[lang].FrontEnd.title}</h2>
            <div className="bar"></div>
        </div>
    )
}