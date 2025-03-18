import React from "react";
import {LogoSocial} from "@/components/Footer/LogoSocial";
import {ImportantLinks} from "@/components/Footer/ImportantLinks";
import {FeatureServices} from "@/components/Footer/FeatureServices";
import {Information} from "@/components/Footer/Information";
import {CopyRight} from "@/components/Footer/CopyRight";

const Footer: React.FC = () => {

    return (
        <>
            <div className="footer-area pt-100 pb-70 addition-pb-0">
                <div className="container">
                    <div className="row">
                        <LogoSocial/>
                        <ImportantLinks/>
                        <FeatureServices/>
                        <Information/>
                    </div>
                </div>
            </div>

            <CopyRight/>
        </>
    );
};

export default Footer;
