"use client"

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {IFooterDetail} from "@/data/footer/model/IFooterDetail";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

export const LogoSocial: React.FC = () => {
    const currentTranslate = useSelector((state: RootState) => state.service.translate);

    return (
        <div className="col-lg-3 col-sm-6">
            <div className="single-footer-widget">
                <div className="logo logo-bg-custom">
                    <Link href={'/' + currentTranslate.value}>
                        <Image
                            src={InfoTranslation[currentTranslate.value].Images.logo.md.path}
                            alt={InfoTranslation[currentTranslate.value].Images.logo.md.title}
                            width={100}
                            height={100}
                        />
                    </Link>
                </div>

                <p>{InfoTranslation[currentTranslate.value].Footer.description}</p>

                <ul className="social">
                    {InfoTranslation[currentTranslate.value].Footer.socialLinks.map((item: IFooterDetail, index: number) => (
                        <li key={index}>
                            <a
                                href={'/' + currentTranslate.value + item.link}
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