// src/app/page.tsx

import Navbar from "../components/Layouts/Navbar";
import Features from "../components/Index/Features";
import AboutContent from "../components/AboutUs/AboutContent";
import FrontEndExperience from "../components/Common/FrontEndExperience";
import FullStackExperience from "../components/Common/FullStackExperience";
import CloudExperience from "../components/Common/CloudExperience";
import SubscribeForm from "../components/Common/SubscribeForm";
import Footer from "../components/Layouts/Footer";
import React from "react";
import {SchemaMarkupHomePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupHomePage";
import type {Metadata} from "next";
import MainBannerAi from "@/components/AI/MainBannerAi/page";
import MainBannerAiFah from "@/components/AI/MainBannerAiFah/page";

export const metadata: Metadata = {
    title: "CHORN | AI & Software Development",
    description: "Transform your business with CHORN’s digital innovation expertise. We provide state-of-the-art software solutions, scalable websites, and cutting-edge technologies like Blockchain, Web3, and more.",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: {
        canonical: 'https://chorn.in.th', // Add canonical URL here
    },
    openGraph: {
        title: "CHORN - AI & Software Development",
        description: "CHORN is your partner for delivering premier technology solutions, from full-stack development to blockchain expertise. Elevate your digital presence with our scalable and future-ready solutions.",
        images: [
            {
                url: "https://chorn.in.th/images-ai/01-fah/nong-fah-0003.jpg",
                width: 1200,
                height: 630,
                alt: "Fah AI Banner CHORN",
            },
        ],
        url: "https://chorn.in.th",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "CHORN | AI & Software Development",
        description: "CHORN offers cutting-edge software development, scalable websites, and technology expertise in Blockchain, Web3, and more. Partner with us for future-ready solutions.",
        images: [
            "https://chorn.in.th/images-ai/01-fah/nong-fah-0003.jpg",
        ],
    },
    keywords: [
        // Brand Keywords
        "CHORN", "CHORN custom software development", "CHORN software outsourcing", "What is chorn",
        "CHORN software development thailand", "CHORN software developer chiangmai", "CHORN software developer bangkok",

        // Core Service Keywords
        "custom software development", "custom software development companies", "software outsourcing",
        "software outsourcing services", "software development outsourcing", "software development outsourcing companies",
        "top software outsourcing companies", "web development outsourcing companies", "IT development companies",
        "outsourcing development company", "outsourcing thailand", "outsourcing company in thailand",
        "software development chiangmai", "software outsourcing chiangmai", "software outsourcing bangkok",

        // Developer & Technical Roles
        "software engineer", "software developer", "frontend developer", "backend developer", "full stack developer",
        "web developer", "mobile developer", "react-developer developer", "angular-developer developer", "java developer",
        "node.js developer", ".net core developer", "php-developer developer", "API developer", "blockchain developer",
        "web3 developer", "microservices developer", "digital innovation", "enterprise software", "scalable websites",

        // Developer Locations
        "software developer thailand", "software developer chiangmai", "software developer bangkok",
        "software engineer thailand", "frontend developer thailand", "backend developer thailand",
        "full stack developer thailand", "web developer jobs in thailand", "mobile developer thailand",
        "full stack developer chiangmai", "software developer remote jobs", "outsourcing programmers thailand",

        // Senior Leadership & Engineering Roles
        "head of engineering", "head of engineering department thailand", "director of engineering",
        "director of engineering thailand", "head of software development", "head of software development thailand",
        "head of software engineering", "head of software engineering thailand", "IT project manager",
        "software development manager", "head of technology", "system analyst",

        // Technologies & Frameworks
        "nextjs-developer", "react-developer.js", "spring boot", "front end framework", "front end architecture",
        "full stack web developer", "front end back end development", "microservices",

        // Outsourcing-Related Keywords
        "outsourcing development", "outsourcing company in thailand", "outsourcing programming",
        "outsourcing programming tasks", "outsourcing program jobs", "outsourcing program task",
        "outsourcing program online"
    ],
};

export default function Home() {

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "CHORN | AI & Software Development",
        "logo": "https://chorn.in.th/chorn-images/logo/chorn-logo-circle-md.webp",
        "@id": "https://chorn.in.th",
        "url": "https://chorn.in.th",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+66 (0)52 000 548",
            "contactType": "Customer Support",
            "email": "contact@chorn.in.th",
        },
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "405/112, Moo 3, Sannameng Sub-district",
            "addressLocality": "Sansai District",
            "addressRegion": "Chiang Mai",
            "postalCode": "50210",
            "addressCountry": "TH"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 18.846558456865996,
            "longitude": 99.05946162698686
        },
        "openingHours": "Mo-Fr 08:30-17:30",
        "sameAs": [
            "https://www.facebook.com/chorn.digital",
            "https://x.com/chorndigital",
            "https://www.linkedin.com/company/chorn"
        ]
    };

    return (
        <>
            <Navbar/>
            <MainBannerAiFah/>
            <MainBannerAi/>
            <Features/>
            <AboutContent/>
            <FrontEndExperience/>
            <FullStackExperience/>
            <CloudExperience/>
            <SubscribeForm/>
            <Footer/>
            <SchemaMarkupHomePage/>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(localBusinessSchema)}}
            />
        </>
    );
}
