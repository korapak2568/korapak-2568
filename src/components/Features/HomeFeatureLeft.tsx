import Image from "next/image";
import {ImageUrl} from "@/image/ImageUrl";
import React from "react";

export default function HomeFeatureLeft({lang}: { lang: string }) {
    return (
        <div className="col-lg-6">
            <div className="features-image-warp">
                <Image
                    src={ImageUrl.feature.morningSky.path}
                    alt="image"
                    width={720}
                    height={620}
                />
                <div className="x-bar-animation" />
            </div>
        </div>
    )
}