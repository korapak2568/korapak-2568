import React from "react";
import {DefaultShape} from "@/components/Shape/DefaultShape";
import ServicePlatinumPackages from "@/components/ServicePackages/ServicePlatinumPackages";
import ServiceGoldPackages from "@/components/ServicePackages/ServiceGoldPackages";
import ServicePremiumPackages from "@/components/ServicePackages/ServicePremiumPackages";
import "@/styles/service-package.scss"

export default async function ServicePackages({lang}: { lang: string }) {

    return (
        <>
            <div className="about-area pb-70">
                <div className="container">
                    <h1>Service Packages</h1>
                    <ServicePlatinumPackages lang={lang}/>
                    <ServiceGoldPackages lang={lang}/>
                    <ServicePremiumPackages lang={lang}/>
                </div>
            </div>

            <DefaultShape/>
        </>
    );
}