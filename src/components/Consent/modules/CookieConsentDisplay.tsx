// src/components/CookieConsentDisplay.tsx
"use client"

import Link from "next/link";
import Image from "next/image";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {ImageUrl} from "@/image/ImageUrl";
import ConsentCookieButton from "@/components/Consent/modules/ConsentCookieButton";
import {useCookieConsent} from "@/provider/hooks/AppStateHook";

export default function CookieConsentDisplay({lang}: { lang: string }) {
    const isCookieConsent = useCookieConsent()

    if (isCookieConsent) {
        return null;
    }

    return (
        <div
            className="modal fade show d-block"
            style={{display: 'block', backgroundColor: 'rgba(0,0,0,0)'}}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="add-cookie-left">
                            <Image
                                className="logo"
                                src={ImageUrl.logo.sm.path}
                                alt={ImageUrl.logo.sm.title}
                                width={50}
                                height={50}
                            />
                            <div className="text">
                                {InfoTranslation[lang].Consent.description}
                                <Link
                                    className="a-privacy"
                                    href={'/' + lang + InfoTranslation[lang].Consent.policyLink}
                                >
                                    {InfoTranslation[lang].Consent.policyLabel}
                                </Link>
                            </div>
                        </div>

                        <div className="add-cookie-right">
                            <ConsentCookieButton lang={lang}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}