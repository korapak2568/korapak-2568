"use client";

import React from "react";
import Link from "next/link";
import {useEffect, useState} from 'react';
import {IFullStackStack} from "@/data/fullstack/model/IFullStackStack";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";

const ServiceSidebarFullStack: React.FC = () => {
    const currentTranslate = useSelector((state: RootState) => state.service.translate);
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
                    {InfoTranslation[currentTranslate.value].FullStack.stacks.map((item: IFullStackStack, index: number) => {
                        if (currentUrl.includes(item.link)) {
                            return (
                                <li key={index}>
                                    <Link href={'/' + currentTranslate.value + item.link} className="active">
                                        <i className="bx bx-layer"></i>{item.features[0].title}
                                    </Link>
                                </li>
                            )
                        }

                        return (
                            <li key={index}>
                                <Link href={'/' + currentTranslate.value + item.link}>
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
