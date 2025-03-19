"use client";

import React from "react";
import Link from "next/link";
import {useEffect, useState} from 'react';
import {IFullStackStack} from "@/data/fullstack/model/IFullStackStack";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {useLocale} from "@/components/ProviderWrapper/LocaleContext";

const ServiceSidebarFullStack: React.FC = () => {
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
                    {InfoTranslation[locale.value].FullStack.stacks.map((item: IFullStackStack, index: number) => {
                        if (currentUrl.includes(item.link)) {
                            return (
                                <li key={index}>
                                    <Link href={'/' + locale.value + item.link} className="active">
                                        <i className="bx bx-layer"></i>{item.features[0].title}
                                    </Link>
                                </li>
                            )
                        }

                        return (
                            <li key={index}>
                                <Link href={'/' + locale.value + item.link}>
                                    <i className="bx bx-git-branch"></i>{item.features[0].title}
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

export default ServiceSidebarFullStack;
