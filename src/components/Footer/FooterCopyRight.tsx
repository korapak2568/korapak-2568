import React from "react";
import Link from "next/link";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

export default function Information({lang}: { lang: string }) {
    const year = new Date().getFullYear()

    return (
        <div className="copyright-area">
            <div className="container">
                <div className="copyright-area-content">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <p>
                                Copyright &copy; {year} by <a href={'/' + lang}>CHORN</a>
                            </p>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <ul>
                                <li>
                                    <Link
                                        href={'/' + lang + InfoTranslation[lang].Footer.termOfService.link}>
                                        {InfoTranslation[lang].Footer.termOfService.label}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={'/' + lang + InfoTranslation[lang].Footer.privacyPolicy.link}>
                                        {InfoTranslation[lang].Footer.privacyPolicy.label}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={'/' + lang + InfoTranslation[lang].Footer.workplacePolicy.link}>
                                        {InfoTranslation[lang].Footer.workplacePolicy.label}
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