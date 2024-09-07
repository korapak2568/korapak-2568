// src/app/layout.tsx
import "../../styles/bootstrap.min.css";
import "../../styles/animate.css";
import "../../styles/boxicons.min.css";
import "../../styles/flaticon.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";

// Global Styles
import "../../styles/style.css";
import "../../styles/responsive.css";
import "../../styles/addition.scss";

import type {Metadata} from "next";
import {DM_Sans} from "next/font/google";
import AosAnimation from "@/components/Layouts/AosAnimation";
import GoTop from "@/components/Layouts/GoTop";
import React from "react";
import ProviderWrapper from "../components/ProviderWrapper/ProviderWrapper";
import Head from "next/head";
import ConsentModal from "@/components/Consent/ConsentModal";

const dm_sans = DM_Sans({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "CHORN",
    description: "Custom Software Development Services",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <Head>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <body className={dm_sans.className}>
        <ProviderWrapper>
            <ConsentModal/>
            {children}
        </ProviderWrapper>
        <AosAnimation/>
        <GoTop/>
        </body>
        </html>
    );
}
