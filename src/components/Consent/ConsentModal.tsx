// src/components/ConsentModal.tsx
"use client"

import {useState, useEffect} from 'react';
import Link from "next/link";
import Image from "next/image";
import {useLocale} from "@/components/ProviderWrapper/LocaleContext";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {ImageUrl} from "@/data/image/ImageUrl";

const ConsentModal = () => {
        const locale = useLocale();
        const [isVisible, setIsVisible] = useState(false);

        useEffect(() => {
            const consent = localStorage.getItem('cookieConsent');
            if (!consent) {
                setIsVisible(true);
            }
        }, []);

        const handleAccept = () => {
            localStorage.setItem('cookieConsent', 'true');
            setIsVisible(false);

            // Inject Google Tag Manager script
            const script = document.createElement('script');
            script.src = 'https://www.googletagmanager.com/gtag/js?id=G-TMXYYN8TMK';
            script.async = true;
            document.body.appendChild(script);

            window.dataLayer = window.dataLayer || [];

            function gtag(p0: string, p1: any) {
                window.dataLayer.push(arguments);
            }

            gtag('js', new Date());
            gtag('config', 'G-TMXYYN8TMK');
        };

        const handleDecline = () => {
            localStorage.setItem('cookieConsent', 'false');
            setIsVisible(false);
        };

        return (
            <>
                {isVisible && (
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
                                            {InfoTranslation[locale.value].Consent.description}
                                            <Link
                                                className="a-privacy"
                                                href={'/' + locale.value + InfoTranslation[locale.value].Consent.policyLink}
                                            >
                                                {InfoTranslation[locale.value].Consent.policyLabel}
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="add-cookie-right">
                                        <button
                                            className="btn btn-success add-button"
                                            onClick={handleAccept}>
                                            {InfoTranslation[locale.value].Consent.buttonText}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </>
        )
            ;
    }
;

export default ConsentModal;
