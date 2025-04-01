"use client"

import Image from "next/image";
import React from "react";
import {useLocale} from "@/components/ProviderWrapper/LocaleContext";
import {ImageUrl} from "@/data/image/ImageUrl";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

export default function LineContact() {
    const locale = useLocale()

    return (
        <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="contact-info-box contact-info-box-custom">
                <div className="icon icon-line-oa">
                    <Image
                        src={ImageUrl.logo.line.sm.path}
                        alt="เพิ่มเพื่อน"
                        width={120}
                        height={120}
                    />
                </div>
                <h3>
                    {InfoTranslation[locale.value].Contact.lineoa.label}
                </h3>
                <p>
                    {InfoTranslation[locale.value].Contact.lineoa.linkText}
                </p>
            </div>
        </div>
    )
}