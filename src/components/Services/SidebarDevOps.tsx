"use client";

import React from "react";
import Link from "next/link";
import {useEffect, useState} from 'react';
import {IDevOpsStack} from "@/data/devops/model/IDevOpsStack";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import Image from "next/image";

export default function SidebarDevOps({lang}: { lang: string }) {
    const [currentUrl, setCurrentUrl] = useState('');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setCurrentUrl(window.location.href);
        }
    }, [currentUrl]);

    return (
        <>
            <div className="services-details-information ml-10 border-top">
                <ul className="framework-list">
                    {InfoTranslation[lang].DevOps.stacks.map((item: IDevOpsStack, index: number) => {
                        if (currentUrl.includes(item.link)) {
                            return (
                                <li key={index}>
                                    <Link href={'/' + lang + item.link} className="active">
                                        <Image src={item.image} alt={item.alt} width="40" height="40"/>
                                        <span className="px-3">{item.features[0].title}</span>
                                    </Link>
                                </li>
                            )
                        }

                        return (
                            <li key={index}>
                                <Link href={'/' + lang + item.link}>
                                    <Image src={item.image} alt={item.alt} width="40" height="40"/>
                                    <span className="px-3">{item.features[0].title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}
