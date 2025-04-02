"use client";

import React from "react";
import {useLocale} from "@/components/ProviderWrapper/LocaleContext";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

const SubscribeForm: React.FC = () => {
    const locale = useLocale()

    return (
        <>
            <div
                className="subscribe-area ptb-100"
                style={{
                    backgroundImage: `url(/obsolete-images/subscribe-bg.jpg)`,
                }}
            >
                <div className="container">
                    <div className="subscribe-content">
                        <span>{InfoTranslation[locale.value].TransformBusiness.span}</span>
                        <h2>{InfoTranslation[locale.value].TransformBusiness.title}</h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SubscribeForm;
