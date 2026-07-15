import React from "react";
import {IGalleryItem} from "@/lib/model/IGallery";

const GalleryPageMain: React.FC<{ global: IGalleryItem }> = ({global}) => {
    return (
        <>
            <div className="about-area pb-70 pt-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-image-warp gallery-main"/>
                            <div className="x-bar-animation"/>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-content warp mx-100">
                                <span></span>
                                <h3>{global.title}</h3>
                                <div className="bar"></div>
                                <p>{global.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GalleryPageMain;
