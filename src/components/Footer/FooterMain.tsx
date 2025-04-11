import React from "react";
import FooterLogoSocial from "./Left/FooterLogoSocial";
import FooterImportantLinks from "@/components/Footer/Right/FooterImportantLinks";
import FooterFeatureServices from "./Right/FooterFeatureServices";
import CopyRight from "./FooterCopyRight";
import FooterFrontEnd from "@/components/Footer/Right/FooterFrontEnd";
import FooterBackEnd from "@/components/Footer/Right/FooterBackEnd";
import FooterDevOps from "./Right/FooterDevOps";

export default function FooterMain({lang}: { lang: string }) {
    return (
        <>
            <div className="footer-area footer-container">
                <div className="footer-left">
                    <FooterLogoSocial lang={lang}/>
                </div>
                <div className="footer-right">
                    <FooterImportantLinks lang={lang}/>
                    <FooterFeatureServices lang={lang}/>
                    <FooterFrontEnd lang={lang}/>
                    <FooterBackEnd lang={lang}/>
                    <FooterDevOps lang={lang}/>
                </div>
            </div>
            <CopyRight lang={lang}/>
        </>
    )
}