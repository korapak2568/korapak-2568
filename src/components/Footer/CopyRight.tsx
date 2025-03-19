"use client";

import React, {useState} from "react";
import Link from "next/link";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {useLocale} from "@/components/ProviderWrapper/LocaleContext";

export const CopyRight: React.FC = () => {
    const locale = useLocale()
    const [year] = useState(new Date().getFullYear());

    return (
        <div className="copyright-area">
            <div className="container">
                <div className="copyright-area-content">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <p>
                                Copyright &copy; {year} by <a href={'/' + locale.value}>CHORN</a>
                            </p>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <ul>
                                <li>
                                    <Link
                                        href={'/' + locale.value + InfoTranslation[locale.value].Footer.termOfService.link}>
                                        {InfoTranslation[locale.value].Footer.termOfService.label}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={'/' + locale.value + InfoTranslation[locale.value].Footer.privacyPolicy.link}>
                                        {InfoTranslation[locale.value].Footer.privacyPolicy.label}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={'/' + locale.value + InfoTranslation[locale.value].Footer.workplacePolicy.link}>
                                        {InfoTranslation[locale.value].Footer.workplacePolicy.label}
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