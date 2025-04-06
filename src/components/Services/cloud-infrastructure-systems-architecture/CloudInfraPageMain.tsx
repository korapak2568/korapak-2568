import React from "react";
import {DefaultShape} from "@/components/Shape/DefaultShape";
import CloudInfraModuleLeft from "@/components/Services/cloud-infrastructure-systems-architecture/CloudInfraModuleLeft";
import CloudInfraModuleRight
    from "@/components/Services/cloud-infrastructure-systems-architecture/CloudInfraModuleRight";

const CloudInfraPageMain: React.FC<{ lang: string }> = ({lang}) => {
    return (
        <>
            <div className="services-area pt-4 pb-70">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="row align-items-center align-items-center-custom">
                            {/*<Web3ModuleLeft lang={lang}/>*/}
                            <CloudInfraModuleLeft lang={lang}/>
                            <CloudInfraModuleRight lang={lang}/>
                        </div>
                    </div>
                </div>
            </div>

            <DefaultShape/>
        </>
    );
};

export default CloudInfraPageMain;
