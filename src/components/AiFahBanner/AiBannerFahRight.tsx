import Image from "next/image";
import React from "react";
import Link from "next/link";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

export default function AiBannerFahRight({lang}: { lang: string }) {
    return (
        <div className="col-lg-6">
            <div className="main-banner-image">
                <Link href={'/' + lang + InfoTranslation[lang].AiCompanions.fah.pages.landing.link}>
                    <Image
                        src={InfoTranslation[lang].AiCompanions.fah.pages.landing.image.path}
                        alt="image"
                        width={1240}
                        height={935}
                    />
                </Link>
            </div>
        </div>
    )
}