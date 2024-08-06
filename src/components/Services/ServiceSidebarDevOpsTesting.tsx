"use client";

import React from "react";
import Link from "next/link";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {IContentImage} from "@/data/model/IContentImage";
import {useEffect, useState} from 'react';
import Image from "next/image";

const ServiceSidebarDevOpsTesting: React.FC = () => {
    const service = useSelector((state: RootState) => state.service.value);
    const [currentUrl, setCurrentUrl] = useState('');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setCurrentUrl(window.location.href);
        }
    }, [currentUrl]);

    return (
        <>
            <div className="services-details-information ml-10">
                <ul className="services-list">
                    {service.DEVOPS_TESTING_INFO.additions.map((item: IContentImage, index: number) => {
                        if (currentUrl.includes(item.link)) {
                            return (
                                <li key={index}>
                                    <Link href={item.link} className="active">
                                        <i className="bx bx-code-alt"></i> {item.details[0].title}
                                    </Link>
                                </li>
                            )
                        }

                        return (
                            <li key={index}>
                                <Link href={item.link}>
                                    <i className="bx bx-code-alt"></i> {item.details[0].title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>

                <div className="services-contact-info">
                    <h3>Contact Info</h3>

                    <ul>
                        <li>
                            <div className="icon">
                                <i className="bx bx-map"></i>
                            </div>
                            <span>Location:</span>
                            Chiang Mai, Thailand
                        </li>
                        <li>
                            <div className="icon">
                                <i className="bx bx-envelope"></i>
                            </div>
                            <span>Email:</span>
                            <a href="mailto:contact@chorn.in.th">contact@chorn.in.th</a>
                        </li>
                        <li>
                            <div className="icon">
                                <Image
                                    src={service.IMAGES.line.icon.path}
                                    alt={service.IMAGES.line.icon.title}
                                    width={25}
                                    height={25}
                                />
                            </div>
                            <span>LINE:</span>
                            <a target={'_blank'} href="https://lin.ee/HzWJ2bJ">https://lin.ee/HzWJ2bJ</a>
                            <Image
                                src={service.IMAGES.line.qrcode.path}
                                alt={service.IMAGES.line.qrcode.title}
                                width={150}
                                height={150}
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default ServiceSidebarDevOpsTesting;
