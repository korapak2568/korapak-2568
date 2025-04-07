// src/components/AiCompanionTH/Main/AiFahLandingPage.tsx
import React from "react";
import Image from "next/image";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {DefaultShape} from "@/components/Shape/DefaultShape";
import FahSideRight from "../SideRight/FahSideRight";
import FahBottomFeature from "@/components/AiCompanions/BottomFeature/FahBottomFeature";

const AiFahLandingPage: React.FC<{ lang: string }> = ({lang}) => {
    return (
        <>
            <div className="portfolio-details-area pt-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <h1>{InfoTranslation[lang].AiCompanions.fah.title}</h1>
                            <div className="portfolio-details-image">
                                <Image
                                    src={InfoTranslation[lang].AiCompanions.fah.pages.landing.image.path}
                                    alt="portfolio"
                                    width={1000}
                                    height={600}
                                />
                            </div>
                            <FahBottomFeature lang={lang}/>
                        </div>
                        <FahSideRight lang={lang}/>
                    </div>
                </div>
            </div>
            <DefaultShape/>
        </>
    );
};

export default AiFahLandingPage;
