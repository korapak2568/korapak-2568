import Image from "next/image";
import {ImageAll} from "@/data/ImageAll";
import React from "react";
export default function Right() {

    return (
        <div className="col-lg-6">
            <div
                className="main-banner-image pl-15"
                data-aos="fade-up"
                data-aos-duration="0"
                data-aos-delay="0"
                data-aos-once="true"
            >
                <Image
                    src={ImageAll.home.mainBanner.path}
                    alt="image"
                    width={650}
                    height={500}
                    sizes="(max-width: 600px) 100vw, (max-width: 768px) 50vw, 650px"
                    priority={true}
                />
            </div>
        </div>
    )
}