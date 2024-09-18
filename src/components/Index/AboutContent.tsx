"use client";

import React, {useState} from "react";
import Link from "next/link";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {IContentImage} from "@/data/model/common/IContentImage";

const AboutContent: React.FC = () => {
    const service = useSelector((state: RootState) => state.service.value);

    return (
        <>
            <div className="about-area pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div
                                className="about-image-warp "
                                style={{backgroundImage: `url(/chorn-images/page-banner/page-banner-3.webp)`}}
                            >
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-content warp contrast-content">
                                <span>
                                  {service.ABOUT_CONTENT_INFO.title}
                                </span>

                                <h3>
                                    {service.ABOUT_CONTENT_INFO.span}
                                </h3>

                                <div className="bar"></div>

                                <p>
                                    {service.ABOUT_CONTENT_INFO.description[0].description}
                                </p>

                                {service.ABOUT_CONTENT_INFO.additions.map((item: IContentImage, index: any) => (
                                    <div key={index} className="about-inner-content">
                                        <div className="icon">
                                            <i className="flaticon-check"></i>
                                        </div>
                                        <h4>{item.title}</h4>
                                        <p>
                                            {item.description}
                                        </p>
                                    </div>
                                ))}

                                <div className="about-btn">
                                    <Link href="/contact-chorn" className="default-btn">
                                        Contact more detail
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutContent;
