"use client"

import React from "react";
import {IFooterDetail} from "@/data/footer/model/IFooterDetail";
import Link from "next/link";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

export const FeatureServices: React.FC = () => {
    const currentTranslate = useSelector((state: RootState) => state.service.translate);

    return (
        <div className="col-lg-3 col-sm-6">
            <div className="single-footer-widget pl-5">
                <h3>{InfoTranslation[currentTranslate.value].Footer.featureTitle}</h3>
                <ul className="quick-links">
                    {InfoTranslation[currentTranslate.value].Footer.featuredLinks
                        .filter((item: IFooterDetail) => item.link !== undefined)
                        .map((item: IFooterDetail, index: number) => (
                            <li key={index}>
                                <Link href={'/' + currentTranslate.value + item.link}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    )
}