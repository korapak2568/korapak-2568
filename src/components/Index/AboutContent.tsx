"use client";

import React, {useState} from "react";
import Link from "next/link";
import {Info} from "@/data/info/Info";
import {IAboutContent} from "@/data/about/model/IAboutContent";

const AboutContent: React.FC = () => {

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
                                  {Info.About.title}
                                </span>

                                <h3>
                                    {Info.About.span}
                                </h3>

                                <div className="bar"></div>

                                <p>
                                    {Info.About.description[0].description}
                                </p>

                                {Info.About.stacks.map((item: IAboutContent, index: any) => (
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
