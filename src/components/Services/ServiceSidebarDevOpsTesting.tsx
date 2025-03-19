"use client";

import React from "react";
import Link from "next/link";
import {useEffect, useState} from 'react';
import {IDevOpsStack} from "@/data/devops/model/IDevOpsStack";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {useLocale} from "@/components/ProviderWrapper/LocaleContext";

const ServiceSidebarDevOpsTesting: React.FC = () => {
    const locale = useLocale()
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
                    {InfoTranslation[locale.value].DevOps.stacks.map((item: IDevOpsStack, index: number) => {
                        if (currentUrl.includes(item.link)) {
                            return (
                                <li key={index}>
                                    <Link href={'/' + locale.value + item.link} className="active">
                                        <i className="bx bx-cog"></i> {item.features[0].title}
                                    </Link>
                                </li>
                            )
                        }

                        return (
                            <li key={index}>
                                <Link href={'/' + locale.value + item.link}>
                                    <i className="bx bx-git-branch"></i> {item.features[0].title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>

                {/*<ContactSidebar/>*/}
            </div>
        </>
    );
};

export default ServiceSidebarDevOpsTesting;
