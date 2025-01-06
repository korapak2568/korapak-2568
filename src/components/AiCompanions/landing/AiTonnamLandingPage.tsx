// src/components/AiCompanions/landing/AiFahLandingPage.tsx

"use client";

import React from "react";
import Image from "next/image";
import {Info} from "@/data/info/Info";
import AiCompanionsPage from "@/components/AiCompanions/AiCompanionsPage";

const AiTonnamLandingPage: React.FC = () => {
    return (
        <>
            <div className="portfolio-details-area pt-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="portfolio-details-image">
                                <Image
                                    src={Info.AiCompanions.landing.tonnam.image.src}
                                    alt="portfolio"
                                    width={1000}
                                    height={600}
                                />
                            </div>

                            {Info.AiCompanions.landing.tonnam.features.map((feature, index: number) => (
                                <div key={index} className={`portfolio-details-desc portfolio-details-desc-custom`}>
                                    <h3>{feature.title}</h3>
                                    <p>{feature.description}</p>

                                    {feature.items.length > 1 && feature.items.map((item, index: number) => (
                                        <div key={index} className={`features-text features-text-custom`}>
                                            <h4>
                                                <i className="flaticon-check"></i> {item.title}</h4>
                                            <p>
                                                {item.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <div className="portfolio-details-information ml-10">
                                <a href={Info.AiCompanions.tonnam.english.line.link}>
                                    <Image
                                        src={Info.AiCompanions.tonnam.english.line.button}
                                        alt="เพิ่มเพื่อน"
                                        width={120}
                                        height={36}
                                    />
                                </a>
                                <ul>
                                    <li className={'li-sidebar-custom'}/>
                                    {Info.AiCompanions.landing.tonnam.sidebars.map((sidebar, index: number) => (
                                        <li key={index} className={'li-sidebar-custom'}>
                                            <div className="icon">
                                                <i className={sidebar.icon}></i>
                                            </div>
                                            <span>{sidebar.caption}</span>
                                            {sidebar.text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <AiCompanionsPage/>
        </>
    );
};

export default AiTonnamLandingPage;
