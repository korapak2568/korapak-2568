"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {useLocale} from "@/components/ProviderWrapper/LocaleContext";

const ServicesCardFrontEnd: React.FC = () => {
    const locale = useLocale()

    return (
        <>
            <div className="services-area pt-4 pb-70">
                <div className="container">
                    <div className="row justify-content-md-center">

                        <div className={'add-web-content'}>
                            <h2>{InfoTranslation[locale.value].FrontEnd.services.title}</h2>
                            {InfoTranslation[locale.value].FrontEnd.services.descriptions.map((item, index) => (
                                <p key={index}>{item}</p>
                            ))}

                            <ul>
                                {InfoTranslation[locale.value].FrontEnd.services.items.map((item, index) => (
                                    <li key={index}>
                                        <strong>{item.title}</strong>
                                        {item.description}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {InfoTranslation[locale.value].FrontEnd.stacks.slice(0, -2).map((item: IFrontEndStack, index: number) => (
                            <div key={index} className="col-lg-4 col-md-6">
                                <div className="single-services-box">
                                    <div className="icon">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            width={120}
                                            height={120}
                                        />
                                    </div>

                                    <h3>
                                        <Link href={'/' + locale.value + item.link}>
                                            {item.title}
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesCardFrontEnd;
