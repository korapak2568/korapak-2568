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
    title: "CHORN | Digital Innovation & Custom Software Solutions",
    description: "Transform your business with CHORN’s digital innovation expertise. We provide state-of-the-art software solutions, scalable websites, and cutting-edge technologies like Blockchain, Web3, and more.",
    openGraph: {
        title: "CHORN - Leading Digital Innovation & Custom Software Development",
        description: "CHORN is your partner for delivering premier technology solutions, from full-stack development to blockchain expertise. Elevate your digital presence with our scalable and future-ready solutions.",
        images: [
            {
                url: "https://chorn.in.th/chorn-images/services/services-11.jpg",
                width: 1200,
                height: 630,
                alt: "CHORN Homepage Banner",
            },
        ],
        url: "https://chorn.in.th",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "CHORN | Transform Your Business with Custom Software Solutions",
        description: "CHORN offers cutting-edge software development, scalable websites, and technology expertise in Blockchain, Web3, and more. Partner with us for future-ready solutions.",
        images: ["https://chorn.in.th/chorn-images/services/services-11.jpg"],
    },
    keywords: [
        "CHORN", "custom software development", "software engineer", "software developer", "web developer",
        "mobile developer", "frontend developer", "full stack developer", "react developer", "angular developer",
        "java developer", "java spring boot developer", ".net core developer", "node.js developer", "php developer",
        "API developer", "backend developer", "head of engineering", "director of engineering", "head of technology",
        "system analyst", "software development manager", "full-stack development", "blockchain", "web3", "react.js",
        "next.js", "spring boot", "digital innovation", "enterprise software", "scalable websites"
    ],
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
