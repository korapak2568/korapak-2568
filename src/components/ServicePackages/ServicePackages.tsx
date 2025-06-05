import "@/styles/service-package.scss"

import React from "react";
import {DefaultShape} from "@/components/Shape/DefaultShape";
import ServicePlatinumPackages from "@/components/ServicePackages/ServicePlatinumPackages";
import ServiceGoldPackages from "@/components/ServicePackages/ServiceGoldPackages";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

export default async function ServicePackages({lang}: { lang: string }) {

    return (
        <>
            <div className="about-area pb-70">
                <div className="container">
                    <h1>{InfoTranslation[lang].ServicePackages.name}</h1>
                    <ServicePlatinumPackages lang={lang}/>
                    <ServiceGoldPackages lang={lang}/>
                </div>
            </div>

            <DefaultShape/>
        </>
    );
}