"use client";

import React from "react";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {useLocale} from "@/components/ProviderWrapper/LocaleContext";
import {DefaultShape} from "@/components/Shape/DefaultShape";
import {ImageUrl} from "@/data/image/ImageUrl";

const GalleryContent: React.FC = () => {
    const locale = useLocale()

    return (
        <>
            <div className="about-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div
                                className="about-image-warp gallery-global-image"
                                style={{backgroundImage: `url(${ImageUrl.gallery.main.path})`}}
                            ></div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-content warp mx-100">
                                <span></span>
                                <h3>{InfoTranslation[locale.value].Gallery.global.title}</h3>
                                <div className="bar"></div>
                                <p>{InfoTranslation[locale.value].Gallery.global.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <DefaultShape/>
        </>
    );
};

export default GalleryContent;
