// src/app/layout.tsx
import "../../styles/bootstrap.min.css";
import "../../styles/animate.css";
import "../../styles/boxicons.min.css";
import "../../styles/flaticon.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";
import {SpeedInsights} from "@vercel/speed-insights/next"

// Global Styles
import "../../styles/style.css";
import "../../styles/responsive.css";
import "../../styles/addition.scss";

import {DM_Sans} from "next/font/google";
import AosAnimation from "@/components/Layouts/AosAnimation";
import GoTop from "@/components/Layouts/GoTop";
import React from "react";
import ProviderWrapper from "../components/ProviderWrapper/ProviderWrapper";
import ConsentModal from "@/components/Consent/ConsentModal";

const dm_sans = DM_Sans({subsets: ["latin"]});

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body className={dm_sans.className}>
        <ProviderWrapper>
            <ConsentModal/>
            {children}
        </ProviderWrapper>
        <AosAnimation/>
        <GoTop/>
        <SpeedInsights/>
        </body>
        </html>
    );
}
