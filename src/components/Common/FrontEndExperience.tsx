"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {IContentImage} from "@/data/model/common/IContentImage";

const FrontEndExperience: React.FC = () => {
    const service = useSelector((state: RootState) => state.service.value);

    return (
        <>
            <div className="services-area bg-fafafa pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <span>{service.FRONT_END_EXPERIENCE_INFO.span}</span>
                        <h2>{service.FRONT_END_EXPERIENCE_INFO.title}</h2>
                        <div className="bar"></div>
                    </div>

                    <div className="services-area bg-fafafa pt-100 pb-70 addition-ptb-0">
                        <div className="container">
                            <div className="row">
                                {service.FRONT_END_EXPERIENCE_INFO.additions.map((item: IContentImage, index: number) => (
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
                                            <p>{item.description}</p>

                                            <Link href={item.link} className="services-btn">
                                                {item.readMore} <i className="bx bx-chevrons-right"></i>
                                            </Link>
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
