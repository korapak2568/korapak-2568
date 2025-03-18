"use client";

import React, {useState} from "react";
import Link from "next/link";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

export const CopyRight: React.FC = () => {
    const currentTranslate = useSelector((state: RootState) => state.service.translate);
    const [year] = useState(new Date().getFullYear());

    return (
        <div className="copyright-area">
            <div className="container">
                <div className="copyright-area-content">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <p>
                                Copyright &copy; {year}. All Rights Reserved by{" "}
                                <a href={'/' + currentTranslate.value + InfoTranslation[currentTranslate.value].Footer.link}
                                   target="_blank">
                                    {InfoTranslation[currentTranslate.value].Footer.title}
                                </a>
                            </p>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <ul>
                                <li>
                                    <Link href={'/' + currentTranslate.value + InfoTranslation[currentTranslate.value].Footer.termOfService.link}>
                                        {InfoTranslation[currentTranslate.value].Footer.termOfService.label}
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/' + currentTranslate.value + InfoTranslation[currentTranslate.value].Footer.privacyPolicy.link}>
                                        {InfoTranslation[currentTranslate.value].Footer.privacyPolicy.label}
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'/' + currentTranslate.value + InfoTranslation[currentTranslate.value].Footer.workplacePolicy.link}>
                                        {InfoTranslation[currentTranslate.value].Footer.workplacePolicy.label}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}