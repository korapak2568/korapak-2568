import Image from "next/image";
import React from "react";
import {Info} from "@/data/info/Info";

export default function Right() {

    return (
        <div className="col-lg-6">
            <Image
                src={Info.Images.home.mainBanner.path}
                alt="image"
                width={1200}
                height={630}
            />
        </div>
    )
}