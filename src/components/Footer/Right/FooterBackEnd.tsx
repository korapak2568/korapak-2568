import React from "react";
import {IFooterDetail} from "@/data/footer/model/IFooterDetail";
import Link from "next/link";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

export default function FooterBackEnd({lang}: { lang: string }) {
    return (
        <div className="footer-right-column">
            <div className="single-footer-widget pl-5">
                <h3>{InfoTranslation[lang].Footer.backend.title}</h3>
                <div className="footer-bar"/>
                <ul className="footer-list">
                    {InfoTranslation[lang].Footer.backend.items.map((item: IFooterDetail, index: number) => (
                        <Link key={index} href={item.link}>
                            <li key={index} className="feature-item">
                                <div className="feature-icon-container">
                                    <div className="feature-icon">
                                        <i className="flaticon-check"></i>
                                    </div>
                                    <div className="feature-title">
                                        {item.label}
                                    </div>
                                </div>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    )
}