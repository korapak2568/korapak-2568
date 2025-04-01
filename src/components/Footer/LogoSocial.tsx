"use client"

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {IFooterDetail} from "@/data/footer/model/IFooterDetail";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {useLocale} from "@/components/ProviderWrapper/LocaleContext";
import {ImageUrl} from "@/data/image/ImageUrl";

export const LogoSocial: React.FC = () => {
    const locale = useLocale()

    return (
        <div className="col-lg-3 col-sm-6">
            <div className="single-footer-widget">
                <div className="logo logo-bg-custom">
                    <Link href={'/' + locale.value}>
                        <Image
                            src={ImageUrl.logo.md.path}
                            alt={ImageUrl.logo.md.title}
                            width={100}
                            height={100}
                        />
                    </Link>
                </div>

                <p>{InfoTranslation[locale.value].Footer.description}</p>

                <ul className="social">
                    {InfoTranslation[locale.value].Footer.socialLinks.map((item: IFooterDetail, index: number) => (
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