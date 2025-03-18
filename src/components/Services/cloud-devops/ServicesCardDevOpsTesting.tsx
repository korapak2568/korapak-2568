"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

const ServicesCardDevOpsTesting: React.FC = () => {
    const currentTranslate = useSelector((state: RootState) => state.service.translate);

    return (
        <>
            <div className="services-area pt-4 pb-70">
                <div className="container">
                    <div className="row justify-content-md-center">

                        <div className={'add-web-content'}>
                            <h2>{InfoTranslation[currentTranslate.value].DevOps.services.title}</h2>
                            {InfoTranslation[currentTranslate.value].DevOps.services.descriptions.map((item, index) => (
                                <p key={index}>{item}</p>
                            ))}

                            <ul>
                                {InfoTranslation[currentTranslate.value].DevOps.services.items.map((item, index) => (
                                    <li key={index}>
                                        <strong>{item.title}</strong>
                                        {item.description}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {InfoTranslation[currentTranslate.value].DevOps.stacks.map((item: IFrontEndStack, index: number) => (
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
                                        <Link href={'/' + currentTranslate.value + item.link}>{item.title}</Link>
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

export default ServicesCardDevOpsTesting;
