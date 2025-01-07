// src/components/AiCompanions/landing/AiFahLandingPage.tsx

"use client";

import React from "react";
import Image from "next/image";
import {Info} from "@/data/info/Info";
import Link from "next/link";

const AiFahLandingPage: React.FC = () => {
    return (
        <>
            <div className="portfolio-details-area pt-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="portfolio-details-image">
                                <Image
                                    src={Info.AiCompanions.landing.fah.image.src}
                                    alt="portfolio"
                                    width={1000}
                                    height={600}
                                />
                            </div>

                            {Info.AiCompanions.landing.fah.features.map((feature, index: number) => (
                                <div key={index} className={`portfolio-details-desc portfolio-details-desc-custom`}>
                                    <div className={'unique-features-container'}>
                                        <h3>{feature.title}</h3>

                                        {index == 0 &&
                                            <a href={Info.AiCompanions.fah.english.line.link}>
                                                <Image
                                                    src={Info.AiCompanions.fah.english.line.button}
                                                    alt="เพิ่มเพื่อน"
                                                    width={120}
                                                    height={36}
                                                />
                                            </a>
                                        }
                                    </div>

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
                                <ul className={'ul-custom'}>
                                    {Info.AiCompanions.landing.fah.sidebars.map((sidebar, index: number) => (
                                        <li key={index} className={'li-sidebar-custom'}>
                                            <div className="icon">
                                                <i className={sidebar.icon}></i>
                                            </div>
                                            <span>{sidebar.caption}</span>
                                            {sidebar.text}
                                        </li>
                                    ))}

                                    {Info.AiCompanions.landing.fah.relevants.map((ai, index) => (
                                        <Link key={index} href={ai.pages.landing.link}>
                                            <li className="li-sidebar-relevant">
                                                <Image
                                                    src={ai.thumbnail}
                                                    alt="image"
                                                    width={650}
                                                    height={500}
                                                />
                                            </li>
                                        </Link>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AiFahLandingPage;
