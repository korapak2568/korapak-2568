import React from "react";
import CloudDevOpsModuleStack from "@/components/Services/cloud-devops/CloudDevOpsModuleStack";
import CloudDevOpsModuleLeft from "@/components/Services/cloud-devops/CloudDevOpsModuleLeft";
import CloudDevOpsModuleRight from "@/components/Services/cloud-devops/CloudDevOpsModuleRight";

const CloudDevOpsModuleMain: React.FC<{ lang: string }> = ({lang}) => {
    return (
        <>
            <div className="services-area pt-5 pb-70">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="row align-items-center align-items-center-custom">
                            <CloudDevOpsModuleLeft lang={lang}/>
                            <CloudDevOpsModuleRight lang={lang}/>
                        </div>
                        <CloudDevOpsModuleStack/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CloudDevOpsModuleMain;
