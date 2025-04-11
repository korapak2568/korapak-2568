import React from "react";
import {IFooterDetail} from "@/data/footer/model/IFooterDetail";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

export default function FooterInformation({lang}: { lang: string }) {
    return (
        <div className="footer-right-column">
            <div className="single-footer-widget pl-5">
                <h3>{InfoTranslation[lang].Footer.infoTitle}</h3>

                <ul className="footer-contact-info">
                    {InfoTranslation[lang].Footer.infoLinks.map((item: IFooterDetail, index: number) => (
                        <li key={index}>
                            <i className={item.icon}></i>
                            <span>{item.label}</span>
                            {item.linkText}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
