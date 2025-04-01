"use client"

import Image from "next/image";
import React from "react";
import {useLocale} from "@/components/ProviderWrapper/LocaleContext";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {ImageUrl} from "@/data/image/ImageUrl";

export default function ContactWhatsApp() {
    const locale = useLocale()

    return (
        <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="contact-info-box contact-info-box-custom">
                <div className="icon icon-chorn whatsapp">
                    <a href={InfoTranslation[locale.value].Contact.chorn.link} target={'_blank'}>
                        <Image
                            src={ImageUrl.whatsapp.md.path}
                            alt="WhatsApp"
                            width={150}
                            height={150}
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}