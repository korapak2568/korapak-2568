import React from "react";
import {DefaultShape} from "@/components/Shape/DefaultShape";
import WebDevelopmentLeft from "@/components/Services/WebDevelopment/WebDevelopmentLeft";
import WebDevelopmentRight from "@/components/Services/WebDevelopment/WebDevelopmentRight";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import WebDevelopmentBackEnd from "@/components/Services/WebDevelopment/WebDevelopmentBackEnd";
import WevDevelopmentFrontEnd from "@/components/Services/WebDevelopment/WevDevelopmentFrontEnd";
import WebDevelopmentDevOps from "@/components/Services/WebDevelopment/WebDevelopmentDevOps";
import AiSolutionsMain from "@/components/AiSolutions/AiSolutionsMain";
import AiFahLandingPage from "@/components/AiCompanions/Main/AiFahLandingPage";
import Web3PageMain from "@/components/Services/web3-blockchain-development/Web3PageMain";
import CloudInfraPageMain from "@/components/Services/cloud-infrastructure-systems-architecture/CloudInfraPageMain";

export default function WebDevelopmentPageMain({lang}: { lang: string }) {
    return (
        <>
            <div className="services-area pb-70">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="row align-items-center align-items-center-custom">
                            <h1>{InfoTranslation[lang].Feature.stacks[2].title}</h1>
                            <WebDevelopmentLeft lang={lang}/>
                            <WebDevelopmentRight lang={lang}/>
                        </div>
                        <WevDevelopmentFrontEnd lang={lang}/>
                        <WebDevelopmentBackEnd lang={lang}/>
                    </div>
                </div>

                <AiSolutionsMain lang={lang}/>
                <div className="container pt-3">
                    <WebDevelopmentDevOps lang={lang}/>
                </div>
                <Web3PageMain lang={lang}/>
                <CloudInfraPageMain lang={lang}/>
                <AiFahLandingPage lang={lang}/>
            </div>

            <DefaultShape/>
        </>
    )
}