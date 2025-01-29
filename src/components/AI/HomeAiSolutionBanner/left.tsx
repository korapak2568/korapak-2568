import React from "react";
import {Info} from "@/data/info/Info";
import Image from "next/image";

export default function Left() {

    return (
        <div className="col-lg-6">
            <div className="main-banner-content pr-15">

                <p
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="200"
                    data-aos-once="true"
                    className={'mb-4'}
                    dangerouslySetInnerHTML={{__html: Info.Service.description} as { __html: string }}
                />

            </div>
        </div>
    )
}