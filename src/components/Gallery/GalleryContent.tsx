"use client";

import React from "react";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";

const GalleryContent: React.FC = () => {
    const currentTranslate = useSelector((state: RootState) => state.service.translate);

    return (
        <>
            <div className="about-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div
                                className="about-image-warp gallery-global-image"
                                style={{backgroundImage: `url(${InfoTranslation[currentTranslate.value].Gallery.global.image})`}}
                            ></div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-content warp mx-100">
                                <span></span>
                                <h3>{InfoTranslation[currentTranslate.value].Gallery.global.title}</h3>
                                <div className="bar"></div>
                                <p>{InfoTranslation[currentTranslate.value].Gallery.global.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GalleryContent;
