"use client"

import React from "react";
import {useLanguage} from "@/provider/hooks/LanguageHook";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

export function ContactLocation() {
    const locale = useLanguage()

    return (
        <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="contact-info-box contact-info-box-custom">
                <div className="icon hover-rotate">
                    <i className={InfoTranslation[locale.value].Contact.location.icon}></i>
                </div>
                <h3>{InfoTranslation[locale.value].Contact.location.label}</h3>
                <p>
                    {
                        InfoTranslation[locale.value].Contact.location.isLink ?
                            <a href={InfoTranslation[locale.value].Contact.location.link}
                               target="_blank">{InfoTranslation[locale.value].Contact.location.linkText}</a> :
                            <span>{InfoTranslation[locale.value].Contact.location.linkText}</span>
                    }
                </p>
            </div>
        </div>
    )
}