// src/components/ConsentModal.tsx
"use client"

import {useState, useEffect} from 'react';
import Link from "next/link";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";

const ConsentModal = () => {
    const service = useSelector((state: RootState) => state.service.value);
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
                    style={{display: 'block', backgroundColor: 'rgba(0,0,0,0.5)'}}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className="add-cookie-left">
                                    {service.CONSENT_INFO.description}
                                    <Link
                                        className="a-privacy"
                                        href={service.CONSENT_INFO.policyLink}>{service.CONSENT_INFO.policyLabel}
                                    </Link>
                                </div>
                                <div className="add-cookie-right">
                                    <button className="btn btn-success add-button" onClick={handleAccept}>Accept
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ConsentModal;
