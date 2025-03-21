"use client"

import Image from "next/image";
import React from "react";
import {Info} from "@/data/info/Info";
import Link from "next/link";
import {useLocale} from "@/components/ProviderWrapper/LocaleContext";

export default function Right() {
    const locale = useLocale()

    return (
        <div className="col-lg-6">
            <div className="main-banner-image">
                <Link href={'/' + locale.value + Info.AiCompanions.fah.pages.landing.link}>
                    <Image
                        src={Info.AiCompanions.fah.pages.landing.image.path}
                        alt="image"
                        width={1240}
                        height={935}
                    />
                </Link>
            </div>
        </div>
    )
}