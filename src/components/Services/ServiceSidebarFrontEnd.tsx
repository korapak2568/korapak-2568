"use client";

import React from "react";
import Link from "next/link";
import {useEffect, useState} from 'react';
import {Info} from "@/data/info/Info";
import {IFrontEndStack} from "@/data/frontend/model/IFrontEndStack";
import {ContactSidebar} from "@/components/Services/ContactSidebar";

const ServiceSidebarFrontEnd: React.FC = () => {
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
                    {Info.FrontEnd.stacks.map((item: IFrontEndStack, index: number) => {
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
                                    <i className="bx bx-git-branch"></i> {item.features[0].title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>

                <ContactSidebar/>
            </div>
        </>
    );
};

export default ServiceSidebarFrontEnd;
