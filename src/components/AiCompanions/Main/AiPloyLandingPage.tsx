// src/components/AiCompanionTH/Main/AiFahLandingPage.tsx
import React from "react";
import Image from "next/image";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {DefaultShape} from "@/components/Shape/DefaultShape";
import PloySideRight from "@/components/AiCompanions/SideRight/PloySideRight";
import PloyBottomFeature from "@/components/AiCompanions/BottomFeature/PloyBottomFeature";

const AiPloyLandingPage: React.FC<{ lang: string }> = ({lang}) => {
    return (
        <>
            <div className="portfolio-details-area pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <h1>{InfoTranslation[lang].AiCompanions.ploy.title}</h1>
                            <div className="portfolio-details-image">
                                <Image
                                    src={InfoTranslation[lang].AiCompanions.ploy.pages.landing.image.path}
                                    alt="portfolio"
                                    width={1000}
                                    height={600}
                                />
                            </div>
                            <PloyBottomFeature lang={lang}/>
                        </div>
                        <PloySideRight lang={lang}/>
                    </div>
                </div>
            </div>
            <DefaultShape/>
        </>
    );
};

export default AiPloyLandingPage;
