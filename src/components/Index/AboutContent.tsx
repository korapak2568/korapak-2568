"use client";

import React, {useState} from "react";
import Link from "next/link";
import {IAboutContent} from "@/data/about/model/IAboutContent";
import {useLanguage} from "@/provider/hooks/hookStateApp";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

const AboutContent: React.FC = () => {
    const language = useLanguage()

    return (
        <>
            <div className="about-area pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div
                                className="about-image-warp "
                                style={{backgroundImage: `url(/images/page-banner/cover-1.webp)`}}
                            >
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-content warp contrast-content">
                                <span>
                                  {InfoTranslation[language].About.title}
                                </span>

                                <h3>
                                    {InfoTranslation[language].About.span}
                                </h3>

                                <div className="bar"></div>

                                <p>
                                    {InfoTranslation[language].About.description[0].description}
                                </p>

                                {InfoTranslation[language].About.stacks.map((item: IAboutContent, index: any) => (
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
