import Image from "next/image";
import React from "react";
import {Info} from "@/data/info/Info";
import Link from "next/link";

export default function Right() {
    return (
        <div className="col-lg-6">
            <div className="main-banner-image">
                <Link href={Info.AiCompanions.fah.english.pages.landing.link}>
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