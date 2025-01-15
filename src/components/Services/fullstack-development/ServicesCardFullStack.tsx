"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {Info} from "@/data/info/Info";
import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";

const ServicesCardFrontEnd: React.FC = () => {

    return (
        <>
            <div className="services-area pt-4 pb-70">
                <div className="container">
                    <div className="row justify-content-md-center">

                        <div className={'add-web-content'}>
                            <h2>{Info.FullStack.services.title}</h2>
                            {Info.FullStack.services.descriptions.map((item, index) => (
                                <p key={index}>{item}</p>
                            ))}

                            <ul>
                                {Info.FullStack.services.items.map((item, index) => (
                                    <li key={index}>
                                        <strong>{item.title}</strong>
                                        {item.description}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {Info.FullStack.stacks.map((item: IFrontEndStack, index: number) => (
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
                                        <Link href={item.link}>{item.title}</Link>
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="default-shape">
                    <div className="shape1">
                        <Image
                            src="/images/default-shape/default-shape1.png"
                            alt="image"
                            width={52}
                            height={52}
                        />
                    </div>
                    <div className="shape2">
                        <Image
                            src="/images/default-shape/default-shape2.png"
                            alt="image"
                            width={14}
                            height={16}
                        />
                    </div>
                    <div className="shape3">
                        <Image
                            src="/images/default-shape/default-shape3.png"
                            alt="image"
                            width={18}
                            height={18}
                        />
                    </div>
                    <div className="shape4">
                        <Image
                            src="/images/default-shape/default-shape4.png"
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

export default ServicesCardFrontEnd;
