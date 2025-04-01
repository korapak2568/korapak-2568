"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {useLocale} from "@/components/ProviderWrapper/LocaleContext";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {IFeatureStack} from "@/data/feature/model/IFeatureStack";
import {truncateText} from "@/lib/truncateText";
import {ImageUrl} from "@/data/image/ImageUrl";

const Features: React.FC = () => {
    const locale = useLocale()

    return (
        <>
            <div className="features-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title contrast-section-title add-text-width">
                        <span>{InfoTranslation[locale.value].Feature.span}</span>
                        <h2>{InfoTranslation[locale.value].Feature.title}</h2>
                        <div className="bar"></div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="features-image-warp">
                                <Image
                                    src={ImageUrl.feature.path}
                                    alt="image"
                                    width={720}
                                    height={620}
                                />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="pl-30">
                                <div className="row">
                                    {InfoTranslation[locale.value].Feature.stacks.map((stack: IFeatureStack, index: number) => (
                                        <div key={index} className="col-lg-6 col-sm-6">
                                            <div className="custom-single-features-box">
                                                <div className="icon">
                                                    <i className={stack.icon + "  hover-rotate"}></i>
                                                </div>

                                                <Link href={'/' + locale.value + stack.link}>
                                                    <h3>{stack.title}</h3>
                                                    <p>{truncateText(stack.description, 50)}</p>
                                                </Link>

                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Features;
