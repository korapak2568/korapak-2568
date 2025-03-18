"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

const FrontEndExperience: React.FC = () => {
    const currentTranslate = useSelector((state: RootState) => state.service.translate);

    return (
        <>
            <div className="services-area bg-fafafa pt-100 pb-70">
                <div className="container">
                    <div className="section-title contrast-section-title">
                        <span>{InfoTranslation[currentTranslate.value].FrontEnd.span}</span>
                        <h2>{InfoTranslation[currentTranslate.value].FrontEnd.title}</h2>
                        <div className="bar"></div>
                    </div>

                    <div className="services-area bg-fafafa pt-100 pb-70 addition-ptb-0">
                        <div className="container">
                            <div className="row">
                                {InfoTranslation[currentTranslate.value].FrontEnd.stacks.slice(2, -3).map((item: IFrontEndStack, index: number) => (
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
                                                <Link
                                                    href={'/' + currentTranslate.value + item.link}>{item.title}</Link>
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