import React from "react";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {DefaultShape} from "@/components/Shape/DefaultShape";

const GalleryPageMain: React.FC<{ lang: string }> = ({lang}) => {
    return (
        <>
            <div className="about-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-image-warp gallery-main"/>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-content warp mx-100">
                                <span></span>
                                <h3>{InfoTranslation[lang].Gallery.global.title}</h3>
                                <div className="bar"></div>
                                <p>{InfoTranslation[lang].Gallery.global.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <DefaultShape/>
        </>
    );
};

export default GalleryPageMain;
