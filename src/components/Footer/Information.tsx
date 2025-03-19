"use client"

import React from "react";
import {IFooterDetail} from "@/data/footer/model/IFooterDetail";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {useLocale} from "@/components/ProviderWrapper/LocaleContext";

export const Information: React.FC = () => {
    const locale = useLocale()

    return (
        <div className="col-lg-3 col-sm-6">
            <div className="single-footer-widget pl-5">
                <h3>{InfoTranslation[locale.value].Footer.infoTitle}</h3>

                <ul className="footer-contact-info">
                    {InfoTranslation[locale.value].Footer.infoLinks.map((item: IFooterDetail, index: number) => (
                        <li key={index}>
                            <i className={item.icon}></i>
                            <span>{item.label}</span>
                            {item.linkText}
                        </li>
                    ))}
                </ul>

                {/* <div className={'footer-line-information'}>
                    <a href={Info.Contact.chorn.link} target={'_blank'}>
                        <Image
                            src={Info.Contact.chorn.iconImageLink}
                            alt="เพิ่มเพื่อน"
                            width={120}
                            height={36}
                        />
                    </a>
                </div> */}
            </div>
        </div>
    );
};
