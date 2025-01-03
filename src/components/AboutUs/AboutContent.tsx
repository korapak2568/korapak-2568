"use client";

import React from "react";
import AboutLeft from "@/components/AboutUs/AboutLeft";
import AboutRight from "@/components/AboutUs/AboutRight";

const AboutContent: React.FC = () => {

    return (
        <>
            <div className="about-area ptb-100">
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
