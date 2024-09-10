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
import ConsentModal from "@/components/Consent/ConsentModal";

const dm_sans = DM_Sans({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "CHORN | Digital Innovation & Custom Software Solutions",
    description: "Transform your business with CHORN’s digital innovation expertise. We provide state-of-the-art software solutions, scalable websites, and cutting-edge technologies like Blockchain, Web3, and more.",
    icons: {
        icon: '/favicon.ico',
    },
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
        "CHORN", "custom software development", "custom software development companies", "software engineer",
        "full stack developer", "frontend developer", "backend developer", "mobile developer", "web developer",
        "react developer", "angular developer", "java developer", "node.js developer", ".net core developer",
        "php developer", "API developer", "blockchain development", "web3", "digital innovation",
        "enterprise software", "scalable websites", "software developer thailand", "software developer chiangmai",
        "software developer bangkok", "software developer remote jobs", "software engineer thailand",
        "head of engineering", "director of engineering", "IT project manager", "software development manager",
        "head of technology", "system analyst", "full stack development", "spring boot", "next.js",
        "react.js", "front end framework", "full stack web developer", "front end back end development",
        "software development chiangmai", "front end developer thailand", "full stack developer thailand",
        "director of engineering thailand", "head of engineering department thailand",
        "front end architecture", "full stack engineer", "web developer jobs in thailand", "head of software development",
        "head of software development thailand", "head of software engineering", "head of software engineering thailand"
    ],
};

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
        </body>
        </html>
    );
}
