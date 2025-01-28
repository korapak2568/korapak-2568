"use client";

import React from "react";
import Link from "next/link";
import {Info} from "@/data/info/Info";

const AboutContent: React.FC = () => {
    return (
        <>
            <div className="about-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div
                                className="about-image-warp gallery-global-image"
                                style={{backgroundImage: `url(${Info.Gallery.global.image})`}}
                            ></div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-content warp mx-100">
                                <span></span>
                                <h3>{Info.Gallery.global.title}</h3>
                                <div className="bar"></div>
                                <p>{Info.Gallery.global.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutContent;
