"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {Info} from "@/data/info/Info";
import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";

const FrontEndExperience: React.FC = () => {

    return (
        <>
            <div className="services-area bg-fafafa pt-100 pb-70">
                <div className="container">
                    <div className="section-title contrast-section-title">
                        <span>{Info.FrontEnd.span}</span>
                        <h2>{Info.FrontEnd.title}</h2>
                        <div className="bar"></div>
                    </div>

                    <div className="services-area bg-fafafa pt-100 pb-70 addition-ptb-0">
                        <div className="container">
                            <div className="row">
                                {Info.FrontEnd.stacks.slice(2, -3).map((item: IFrontEndStack, index: number) => (
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
                    </div>
                </div>
            </div>
        </>
    );
};

export default FrontEndExperience;