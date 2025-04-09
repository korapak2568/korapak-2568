import React from "react";
import {DefaultShape} from "@/components/Shape/DefaultShape";
import Web3ModuleLeft from "@/components/Services/web3-blockchain-development/Web3ModuleLeft";
import Web3ModuleRight from "@/components/Services/web3-blockchain-development/Web3ModuleRight";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

const Web3PageMain: React.FC<{ lang: string }> = ({lang}) => {
    return (
        <>
            <div className="services-area pt-5 pb-70">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <h1>{InfoTranslation[lang].Web3.services.title}</h1>
                        <div className="row align-items-center align-items-center-custom">
                            <Web3ModuleLeft lang={lang}/>
                            <Web3ModuleRight lang={lang}/>
                        </div>
                    </div>
                </div>
            </div>
            <DefaultShape/>
        </>
    );
};

export default Web3PageMain;
