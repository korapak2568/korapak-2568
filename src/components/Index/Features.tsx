"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {truncateText} from "@/utils/truncateText";
import {Info} from "@/data/info/Info";
import {IFeatureStack} from "@/data/feature/model/IFeatureStack";

const Features: React.FC = () => {

    return (
        <>
            <div className="features-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title contrast-section-title add-text-width">
                        <span>{Info.Feature.span}</span>
                        <h2>{Info.Feature.title}</h2>
                        <div className="bar"></div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="features-image-warp">
                                <Image
                                    src="/chorn-images/features/features-2.webp"
                                    alt="image"
                                    width={720}
                                    height={620}
                                />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="pl-30">
                                <div className="row">
                                    {Info.Feature.stacks.map((addition: IFeatureStack, index: number) => (
                                        <div key={index} className="col-lg-6 col-sm-6">
                                            <div className="custom-single-features-box">
                                                <div className="icon">
                                                    <i className={addition.icon + "  hover-rotate"}></i>
                                                </div>
                                                <h3>
                                                    <Link href={addition.link}>
                                                        {addition.title}
                                                    </Link>
                                                </h3>
                                                <p>
                                                    {truncateText(addition.description, 80)}
                                                </p>
                                                <p className={"p-read-more"}>
                                                    <Link href={addition.link} className="contrast-read-more">
                                                        {addition.readMore} <i className="bx bx-chevrons-right"></i>
                                                    </Link>
                                                </p>
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
