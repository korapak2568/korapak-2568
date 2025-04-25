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

// Custom scss, css
import "@/styles/style.scss";
import "@/styles/responsive.scss";
import "@/styles/addition.scss";
import "@/styles/x-color-style.scss";

import {DM_Sans} from "next/font/google";
import AosAnimation from "@/components/Layouts/AosAnimation";
import GoTop from "@/components/Layouts/GoTop";
import React from "react";
import ProviderWrapper from "../../provider/ProviderWrapper";
import ConsentModal from "@/components/Consent/ConsentModal";
import {headers} from "next/headers";
import SubscribeForm from "@/components/Common/SubscribeForm";
import WeWorkForIndustries from "@/components/Common/WeWorkForIndustries";
import FooterMain from "@/components/Footer/FooterMain";
import NavbarContainer from "@/components/Navbar/NavbarContainer";

const dm_sans = DM_Sans({subsets: ["latin"]});

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    const lang = headers().get('x-locale') || 'en';

    return (
        <html lang={lang}>
        <body className={`${dm_sans.className} main}`}>
        <div className="main-container">
            <ProviderWrapper language={lang}>
                <ConsentModal/>
                <NavbarContainer lang={lang}/>
                {children}
                <div>
                    <SubscribeForm lang={lang}/>
                    <WeWorkForIndustries lang={lang}/>
                    <FooterMain lang={lang}/>
                </div>
            </ProviderWrapper>
            <AosAnimation/>
            <GoTop/>
            <SpeedInsights/>
        </div>
        </body>
        </html>
    );
}