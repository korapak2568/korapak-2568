import "@/styles/about.scss"
import React from "react";
import BottomImageLeft from "@/components/About/BottomImage/BottomImageLeft";
import BottomImageRight from "@/components/About/BottomImage/BottomImageRight";

export default function ContactLeft({lang}: { lang: string }) {
    return (
        <div className="col-lg-4">
            <div className="about-image-warp contact-image"/>
            <div className="x-bar-animation"/>

            <div className="single-footer-widget about-bottom-image">
                <BottomImageLeft/>
                <BottomImageRight/>
            </div>
        </div>
    )
}