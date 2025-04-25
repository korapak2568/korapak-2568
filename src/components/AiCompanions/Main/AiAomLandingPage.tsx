// src/components/AiCompanionTH/Main/AiFahLandingPage.tsx
import React from "react";
import Image from "next/image";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {DefaultShape} from "@/components/Shape/DefaultShape";
import AomSideRight from "@/components/AiCompanions/SideRight/AomSideRight";
import AomBottomFeature from "@/components/AiCompanions/BottomFeature/AomBottomFeature";

const AiAomLandingPage: React.FC<{ lang: string }> = ({lang}) => {
    return (
        <>
            <div className="portfolio-details-area">
                <div className="container">
                    <h1>{InfoTranslation[lang].AiCompanions.aom.title}</h1>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="portfolio-details-image">
                                <Image
                                    src={InfoTranslation[lang].AiCompanions.aom.pages.landing.image.path}
                                    alt="portfolio"
                                    width={1000}
                                    height={600}
                                />
                            </div>
                            <AomBottomFeature lang={lang}/>
                        </div>
                        <AomSideRight lang={lang}/>
                    </div>
                </div>
            </div>
            <DefaultShape/>
        </>
    );
};

export default AiAomLandingPage;
