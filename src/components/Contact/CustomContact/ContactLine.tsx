"use client"

import Image from "next/image";
import React from "react";
import {useLocale} from "@/components/ProviderWrapper/LocaleContext";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {ImageUrl} from "@/data/image/ImageUrl";

export default function ContactLine() {
    const locale = useLocale()

    return (
        <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="contact-info-box contact-info-box-custom">
                <div className="icon icon-chorn">
                    <a href={InfoTranslation[locale.value].Contact.chorn.link} target={'_blank'}>
                        <Image
                            src={ImageUrl.profile.md.path}
                            alt="เพิ่มเพื่อน"
                            width={120}
                            height={120}
                        />
                    </a>
                </div>
                <p>
                    <a href={InfoTranslation[locale.value].Contact.chorn.link} target={'_blank'}>
                        <Image
                            src={InfoTranslation[locale.value].Contact.chorn.iconImageLink}
                            alt="เพิ่มเพื่อน"
                            width={120}
                            height={36}
                        />
                    </a>
                </p>
            </div>
        </div>
    )
}