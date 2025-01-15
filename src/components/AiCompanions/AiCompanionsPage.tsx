"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {Info} from "@/data/info/Info";

const AiCompanionsPage: React.FC = () => {
    return (
        <>
            <div className="portfolio-area pt-4 pb-100">
                <div className="container">
                    <div className="row">

                        <div className={'add-web-content'}>
                            <p dangerouslySetInnerHTML={{__html: Info.Service.description} as { __html: string }}/>

                            <div>
                                <h2>{Info.Service.title}</h2>
                                <ul>
                                    {Info.Service.services.map((service, index) => (
                                        <li key={index}>
                                            <strong>{service.title}</strong> {service.description}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {Info.AiCompanions.english.map((ai, index) => (
                            <div key={index} className="col-lg-4 col-md-6">
                                <div className="single-portfolio-item">
                                    <div className="portfolio-image">
                                        <Link href={ai.pages.landing.link}>
                                            <Image
                                                src={ai.thumbnail}
                                                alt="image"
                                                width={650}
                                                height={500}
                                            />
                                        </Link>
                                    </div>

                                    <div className="portfolio-content">
                                        <h3>
                                            <Link href={ai.pages.landing.link}>{ai.name}</Link>
                                        </h3>
                                        <span>{ai.category}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="default-shape">
                    <div className="shape1">
                        <Image
                            src="/images-ai/default-shape/default-shape1.png"
                            alt="image"
                            width={52}
                            height={52}
                        />
                    </div>
                    <div className="shape2">
                        <Image
                            src="/images-ai/default-shape/default-shape2.png"
                            alt="image"
                            width={14}
                            height={16}
                        />
                    </div>
                    <div className="shape3">
                        <Image
                            src="/images-ai/default-shape/default-shape3.png"
                            alt="image"
                            width={18}
                            height={18}
                        />
                    </div>
                    <div className="shape4">
                        <Image
                            src="/images-ai/default-shape/default-shape4.png"
                            alt="image"
                            width={52}
                            height={52}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AiCompanionsPage;
