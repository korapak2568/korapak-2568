import Image from "next/image";
import React from "react";
import {Info} from "@/data/info/Info";

export default function Right() {

    return (
        <div className="col-lg-6">
            <div className="main-banner-image main-banner-image-custom">
                <Image
                    src={Info.Images.banner.banner1.path}
                    className={'image-opacity'}
                    alt="image"
                    width={1200}
                    height={630}
                />
            </div>
        </div>
    )
}