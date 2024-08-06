"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {IContentImage} from "@/data/model/IContentImage";
import {truncateText} from "@/utils/truncateText";

const ServicesCardDevOpsTesting: React.FC = () => {
    const service = useSelector((state: RootState) => state.service.value);

    return (
        <>
            <div className="services-area pt-100 pb-70">
                <div className="container">
                    <div className="row justify-content-md-center">
                        {service.DEVOPS_TESTING_INFO.additions.map((addition: IContentImage, index: number) => (
                            <div key={index} className="col-lg-4 col-md-6">
                                <div className="single-services">
                                    <div className="image">
                                        <Link href={addition.link}>
                                            <Image
                                                src={addition.image}
                                                alt="image"
                                                width={130}
                                                height={130}
                                            />
                                        </Link>
                                    </div>
                                    <h3>
                                        <Link href={addition.link}>{addition.title}</Link>
                                    </h3>
                                    <p>{truncateText(addition.description)}</p>

                                    <Link href={addition.link} className="services-btn">
                                        {addition.readMore} <i className="bx bx-chevrons-right"></i>
                                    </Link>
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

export default ServicesCardDevOpsTesting;
