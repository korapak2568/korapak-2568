// src/components/AiCompanionTH/landing/AiFahLandingPage.tsx

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {useLocale} from "@/components/ProviderWrapper/LocaleContext";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {DefaultShape} from "@/components/Shape/DefaultShape";

const AiAomLandingPage: React.FC = () => {
    const locale = useLocale()

    return (
        <>
            <div className="portfolio-details-area pt-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="portfolio-details-image">
                                <Image
                                    src={InfoTranslation[locale.value].AiCompanions.aom.image.src}
                                    alt="portfolio"
                                    width={1000}
                                    height={600}
                                />
                            </div>

                            {InfoTranslation[locale.value].AiCompanions.aom.features.map((feature, index: number) => (
                                <div key={index} className={`portfolio-details-desc portfolio-details-desc-custom`}>
                                    <div className={'unique-features-container'}>
                                        <h3>{feature.title}</h3>

                                        {index == 0 &&
                                            <a href={InfoTranslation[locale.value].AiCompanions.aom.line.link}
                                               target={'_blank'}>
                                                <Image
                                                    src={InfoTranslation[locale.value].AiCompanions.aom.line.button}
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
                                <ul>
                                    {InfoTranslation[locale.value].AiCompanions.aom.sidebars.map((sidebar, index: number) => (
                                        <li key={index} className={'li-sidebar-custom'}>
                                            <div className="icon">
                                                <i className={sidebar.icon}></i>
                                            </div>
                                            <span>{sidebar.caption}</span>
                                            {sidebar.text}
                                        </li>
                                    ))}

                                    {InfoTranslation[locale.value].AiCompanions.aom.relevants.map((ai, index) => (
                                        <Link key={index} href={'/' + locale.value + ai.pages.landing.link}>
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
            <DefaultShape/>
        </>
    );
};

export default AiAomLandingPage;
