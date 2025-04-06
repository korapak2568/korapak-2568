import React from "react";
import AboutLeft from "@/components/About/AboutLeft";
import AboutRight from "@/components/About/AboutRight";
import {DefaultShape} from "@/components/Shape/DefaultShape";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {headers} from "next/headers";

const AboutContent: React.FC = () => {
    const lang = headers().get('x-locale') || 'en';

    return (
        <>
            <div className="about-area ptb-50">
                <div className="container">
                    <div className="row">
                        <h1>{InfoTranslation[lang].About.title}</h1>
                        <AboutLeft/>
                        <AboutRight/>
                    </div>
                </div>
            </div>

            <DefaultShape/>
        </>
    );
};

export default AboutContent;
