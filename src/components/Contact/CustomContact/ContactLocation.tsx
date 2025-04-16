"use client"

import React from "react";
import {useLanguage} from "@/provider/hooks/AppStateHook";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

export function ContactLocation() {
    const language = useLanguage()

    return (
        <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="contact-info-box contact-info-box-custom">
                <div className="icon hover-rotate">
                    <i className={InfoTranslation[language].Contact.location.icon}></i>
                </div>
                <h3>{InfoTranslation[language].Contact.location.label}</h3>
                <p>
                    {
                        InfoTranslation[language].Contact.location.isLink ?
                            <a href={InfoTranslation[language].Contact.location.link}
                               target="_blank">{InfoTranslation[language].Contact.location.linkText}</a> :
                            <span>{InfoTranslation[language].Contact.location.linkText}</span>
                    }
                </p>
            </div>
        </div>
    )
}