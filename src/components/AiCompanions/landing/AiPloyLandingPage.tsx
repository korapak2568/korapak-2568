// src/components/AiCompanionTH/landing/AiFahLandingPage.tsx

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {useLocale} from "@/components/ProviderWrapper/LocaleContext";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {DefaultShape} from "@/components/Shape/DefaultShape";

const AiPloyLandingPage: React.FC = () => {
    const lang = useLocale().value

    return (
        <>
            <div className="portfolio-details-area pt-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <h1>{InfoTranslation[lang].AiCompanions.ploy.title}</h1>
                            <div className="portfolio-details-image">
                                <Image
                                    src={InfoTranslation[lang].AiCompanions.ploy.pages.landing.image.path}
                                    alt="portfolio"
                                    width={1000}
                                    height={600}
                                />
                            </div>

                            {InfoTranslation[lang].AiCompanions.ploy.features.map((feature, index: number) => (
                                <div key={index} className={`portfolio-details-desc portfolio-details-desc-custom`}>
                                    <div className={'unique-features-container'}>
                                        <h3>{feature.title}</h3>

                                        {index == 0 &&
                                            <a href={InfoTranslation[lang].AiCompanions.ploy.line.link}
                                               target={'_blank'}>
                                                <Image
                                                    src={InfoTranslation[lang].AiCompanions.ploy.line.button}
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
                                    {InfoTranslation[lang].AiCompanions.ploy.sidebars.map((sidebar, index: number) => (
                                        <li key={index} className={'li-sidebar-custom'}>
                                            <div className="icon">
                                                <i className={sidebar.icon}></i>
                                            </div>
                                            <span>{sidebar.caption}</span>
                                            {sidebar.text}
                                        </li>
                                    ))}

                                    {InfoTranslation[lang].AiCompanions.ploy.relevants.map((ai, index) => (
                                        <Link key={index} href={'/' + lang + ai.pages.landing.link}>
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

export default AiPloyLandingPage;
