"use client"

import Link from "next/link";
import React from "react";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {useLanguage} from "@/provider/hooks/AppStateHook";

export default function Left() {
    const language = useLanguage()

    return (
        <div className="col-lg-6">
            <div className="main-banner-content pr-15">
                <h1
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="100"
                    data-aos-once="true"
                    className="mobile-optimized-heading"
                >
                    {InfoTranslation[language].Service.title}
                </h1>

                <p
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="200"
                    data-aos-once="true"
                >
                    {InfoTranslation[language].Service.description}
                </p>

                <div className="option-item addition-pt-20">
                    <Link href="/contact-chorn" className="default-btn">
                        Contact CHORN
                    </Link>
                </div>
            </div>
        </div>
    )
}