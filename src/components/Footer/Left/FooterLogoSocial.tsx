import React from "react";
import Link from "next/link";
import Image from "next/image";
import {IFooterDetail} from "@/data/footer/model/IFooterDetail";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {ImageUrl} from "@/image/ImageUrl";

export default function FooterLogoSocial({lang}: { lang: string }) {
    return (
        <div className="footer-logo-social-container">
            <div className="single-footer-widget logo-social">
                <Link href={'/public' + lang}>
                    <Image
                        src={ImageUrl.logo.md.path}
                        alt={ImageUrl.logo.md.title}
                        width={100}
                        height={100}
                    />
                </Link>

                <p className="footer-description">
                    {InfoTranslation[lang].Footer.description}
                </p>

                <ul className="social">
                    {InfoTranslation[lang].Footer.socialLinks.map((item: IFooterDetail, index: number) => (
                        <li key={index}>
                            <a
                                href={item.link}
                                className={item.iconClass}
                                target="_blank"
                                aria-label={item.ariaLabel}
                            >
                                <i className={item.icon}></i>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}