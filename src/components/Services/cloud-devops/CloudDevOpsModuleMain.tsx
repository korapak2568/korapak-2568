import React from "react";
import CloudDevOpsModuleLeft from "@/components/Services/cloud-devops/CloudDevOpsModuleLeft";
import CloudDevOpsModuleRight from "@/components/Services/cloud-devops/CloudDevOpsModuleRight";
import CloudDevOpsModuleBottom from "@/components/Services/cloud-devops/CloudDevOpsModuleBottom";

export default function CloudDevOpsModuleMain({lang}: { lang: string }) {
    return (
        <>
            <div className="services-area pt-5 pb-70">
                <div className="container">
                    <div className="row justify-content-md-center">
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