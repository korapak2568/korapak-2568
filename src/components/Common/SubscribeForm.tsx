import React from "react";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

export default function SubscribeForm({lang}: { lang: string }) {
    return (
        <>
            <div className="subscribe-area ptb-100"
                 style={{
                     backgroundImage: `url(/images/main-banner-bg-1.webp)`,
                 }}
            >
                <div className="container">
                    <div className="subscribe-content">
                        <span>{InfoTranslation[lang].TransformBusiness.span}</span>
                        <h2>{InfoTranslation[lang].TransformBusiness.title}</h2>
                    </div>
                </div>
            </div>
        </>
    )
}