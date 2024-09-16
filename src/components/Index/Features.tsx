"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {IContentImage} from "@/data/model/common/IContentImage";
import {truncateText} from "@/utils/truncateText";

const Features: React.FC = () => {
    const service = useSelector((state: RootState) => state.service.value);

    return (
        <>
            <div className="features-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title text-width">
                        <span>{service.FEATURE_SERVICE_INFO.span}</span>
                        <h2>{service.FEATURE_SERVICE_INFO.title}</h2>
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
                                    {service.FEATURE_SERVICE_INFO.additions.map((addition: IContentImage, index: number) => (
                                        <div key={index} className="col-lg-6 col-sm-6">
                                            <div className="single-features-box">
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
                                                    <Link href={addition.link} className="addition-read-more">
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
