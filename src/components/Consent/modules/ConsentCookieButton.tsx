"use client"

import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {useDispatch} from "react-redux";
import {setCookieConsent} from "@/provider/redux/AppSlice";

export default function ConsentCookieButton(
    {lang}: { lang: string }) {
    const dispatch = useDispatch();

    const handleAccept = () => {
        const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

        // Inject Google Tag Manager script
        const script = document.createElement('script');
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
        script.async = true;
        document.body.appendChild(script);
        window.dataLayer = window.dataLayer || [];

        function gtag(p0: string, p1: any) {
            window.dataLayer.push(arguments);
        }

        gtag('js', new Date());
        gtag('config', GA_TRACKING_ID);

        // setCookieConsent('cookie_consent', true)
        const oneYearInSeconds = 365 * 24 * 60 * 60;
        document.cookie = `cookie_consent=true; path=/; expires=${new Date(Date.now() + oneYearInSeconds).toUTCString()}; samesite=strict;`;
        dispatch(setCookieConsent());
    };

    return (
        <button
            className="btn btn-success add-button"
            onClick={handleAccept}>
            {InfoTranslation[lang].Consent.buttonText}
        </button>
    )
}