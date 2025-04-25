import React from "react";
import CloudDevOpsModuleLeft from "@/components/Services/cloud-devops/CloudDevOpsModuleLeft";
import CloudDevOpsModuleRight from "@/components/Services/cloud-devops/CloudDevOpsModuleRight";
import CloudDevOpsModuleBottom from "@/components/Services/cloud-devops/CloudDevOpsModuleBottom";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

export default function CloudDevOpsModuleMain({lang}: { lang: string }) {
    return (
        <>
            <div className="services-area pb-70">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <h1>{InfoTranslation[lang].DevOps.services.title}</h1>
                        <div className="row align-items-center align-items-center-custom">
                            <CloudDevOpsModuleLeft lang={lang}/>
                            <CloudDevOpsModuleRight lang={lang}/>
                        </div>
                        <CloudDevOpsModuleBottom lang={lang}/>
                    </div>
                </div>
            </div>
        </>
    )
}