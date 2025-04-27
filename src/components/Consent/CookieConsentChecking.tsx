import CookieConsentDisplay from "@/components/Consent/modules/CookieConsentDisplay";

export default function CookieConsentChecking({lang, isCookieConsent}: { lang: string, isCookieConsent: boolean }) {

    if (isCookieConsent) {
        return null;
    }

    return <CookieConsentDisplay lang={lang}/>;
}