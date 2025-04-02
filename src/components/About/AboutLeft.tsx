import React from "react";
import {ImageUrl} from "@/data/image/ImageUrl";

export default function AboutLeft() {
    return (
        <div className="col-lg-4">
            <div
                className="about-image-warp about-image-custom"
                style={{backgroundImage: `url(${ImageUrl.about.path})`}}
            />
        </div>
    )
}