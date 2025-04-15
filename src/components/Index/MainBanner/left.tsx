import Link from "next/link";
import React from "react";
import {useLanguage} from "@/provider/hooks/LanguageHook";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

export default function Left() {
    const locale = useLanguage()

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
                    {InfoTranslation[locale.value].Service.title}
                </h1>

                <p
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="200"
                    data-aos-once="true"
                >
                    {InfoTranslation[locale.value].Service.description}
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