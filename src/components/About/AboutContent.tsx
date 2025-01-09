"use client";

import React from "react";
import AboutLeft from "@/components/About/AboutLeft";
import AboutRight from "@/components/About/AboutRight";

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
        </>
    );
};

export default AboutContent;
