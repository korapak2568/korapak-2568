"use client"

import React from "react";
import {IFooterDetail} from "@/data/footer/model/IFooterDetail";
import Link from "next/link";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {useLocale} from "@/components/ProviderWrapper/LocaleContext";

export const FeatureServices: React.FC = () => {
    const locale = useLocale()

    return (
        <div className="col-lg-3 col-sm-6">
            <div className="single-footer-widget pl-5">
                <h3>{InfoTranslation[locale.value].Footer.featureTitle}</h3>
                <ul className="quick-links">
                    {InfoTranslation[locale.value].Footer.featuredLinks
                        .filter((item: IFooterDetail) => item.link !== undefined)
                        .map((item: IFooterDetail, index: number) => (
                            <li key={index}>
                                <Link href={'/' + locale.value + item.link}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    )
}