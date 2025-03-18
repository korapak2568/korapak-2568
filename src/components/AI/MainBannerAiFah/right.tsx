"use client"

import Image from "next/image";
import React from "react";
import {Info} from "@/data/info/Info";
import Link from "next/link";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";

export default function Right() {
    const currentTranslate = useSelector((state: RootState) => state.service.translate);

    return (
        <div className="col-lg-6">
            <div className="main-banner-image">
                <Link href={'/' + currentTranslate.value + Info.AiCompanions.fah.english.pages.landing.link}>
                    <Image
                        src={Info.AiCompanions.fah.english.pages.home.image.path}
                        alt="image"
                        width={1240}
                        height={935}
                    />
                </Link>
            </div>
        </div>
    )
}