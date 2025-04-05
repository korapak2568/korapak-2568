import React from "react";
import AboutLeft from "@/components/About/AboutLeft";
import AboutRight from "@/components/About/AboutRight";
import {DefaultShape} from "@/components/Shape/DefaultShape";

const AboutContent: React.FC = () => {
    return (
        <>
            <div className="about-area pt-4 pb-70">
                <div className="container">
                    <div className="row">
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
