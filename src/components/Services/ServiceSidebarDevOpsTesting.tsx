"use client";

import React from "react";
import Link from "next/link";
import {useEffect, useState} from 'react';
import {Info} from "@/data/info/Info";
import {IDevOpsStack} from "@/data/devops/model/IDevOpsStack";

const ServiceSidebarDevOpsTesting: React.FC = () => {
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
                    {Info.DevOps.stacks.map((item: IDevOpsStack, index: number) => {
                        if (currentUrl.includes(item.link)) {
                            return (
                                <li key={index}>
                                    <Link href={item.link} className="active">
                                        <i className="bx bx-code-alt"></i> {item.features[0].title}
                                    </Link>
                                </li>
                            )
                        }

                        return (
                            <li key={index}>
                                <Link href={item.link}>
                                    <i className="bx bx-code-alt"></i> {item.features[0].title}
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
                            <a
                                href="https://www.google.com/maps/place/CHORN/@18.84633,99.059526,17z/data=!4m6!3m5!1s0x42b952d661374a4f:0x924779e8f9fe3248!8m2!3d18.8463263!4d99.0594875!16s%2Fg%2F11kp_0g9hq?hl=th-TH&entry=ttu"
                                target="_blank"
                            >
                                Chiang Mai, Thailand
                            </a>
                        </li>
                        <li>
                            <div className="icon">
                                <i className="bx bx-envelope"></i>
                            </div>
                            <span>Email:</span>
                            <a href="mailto:contact@chorn.in.th">contact@chorn.in.th</a>
                        </li>
                    </ul>

                </div>
            </div>
        </>
    );
};

export default ServiceSidebarDevOpsTesting;
