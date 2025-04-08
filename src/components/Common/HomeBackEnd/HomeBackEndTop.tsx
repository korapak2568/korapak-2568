import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import React from "react";

export default function HomeBackEndTop({lang}: { lang: string }) {
    return (
        <div className="section-title contrast-section-title">
            <span>{InfoTranslation[lang].FullStack.span}</span>
            <h2>{InfoTranslation[lang].FullStack.title}</h2>
            <div className="bar"></div>
        </div>
    )
}