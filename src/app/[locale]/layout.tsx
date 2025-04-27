// src/app/[locale]/layout.tsx

import "@/styles/globals.scss"

// Fundamental css
import "@/styles/bootstrap.min.css";
import "@/styles/animate.css";
import "@/styles/boxicons.min.css";
import "@/styles/flaticon.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";
import {SpeedInsights} from "@vercel/speed-insights/next"

// Custom scss, CSS
import "@/styles/style.scss";
import "@/styles/responsive.scss";
import "@/styles/addition.scss";
import "@/styles/x-navbar.scss";
import "@/styles/x-color-style.scss";
import "@/styles/x-icon.scss";

import {DM_Sans} from "next/font/google";
import GoTop from "@/components/Layouts/GoTop";
import React from "react";
import ProviderWrapper from "../../provider/ProviderWrapper";
import {headers} from "next/headers";
import SubscribeForm from "@/components/Common/SubscribeForm";
import WeWorkForIndustries from "@/components/Common/WeWorkForIndustries";
import FooterMain from "@/components/Footer/FooterMain";
import NavbarContainer from "@/components/Navbar/NavbarContainer";
import CookieConsentChecking from "@/components/Consent/CookieConsentChecking";

const dm_sans = DM_Sans({subsets: ["latin"]});

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    const lang: string = headers().get('x-locale') || 'en';
    const isCookieConsent: boolean = headers().get('x-cookie-consent') != 'false';

    return (
        <html lang={lang}>
        <body className={`${dm_sans.className} main}`}>
        <div className="main-container">
            <ProviderWrapper language={lang}>
                <CookieConsentChecking lang={lang} isCookieConsent={isCookieConsent}/>
                <NavbarContainer lang={lang}/>
                {children}
                <div>
                    <SubscribeForm lang={lang}/>
                    <WeWorkForIndustries lang={lang}/>
                    <FooterMain lang={lang}/>
                </div>
            </ProviderWrapper>
            <GoTop/>
            <SpeedInsights/>
        </div>
        </body>
        </html>
    );
}