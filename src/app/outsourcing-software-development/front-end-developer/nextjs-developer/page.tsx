import React from "react";
import Navbar from "../../../../components/Layouts/Navbar";
import PageBanner from "../../../../components/Common/PageBanner";
import Footer from "../../../../components/Layouts/Footer";
import ServicesDetailsNextJS from "@/components/Services/frontend-development/next.js/ServicesDetailsNextJS";
import CloudExperience from "@/components/Common/CloudExperience";
import {INFO} from "@/data/INFO";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/SchemaMarkup/SchemaMarkupServicePage";

export const metadata: Metadata = {
    title: "Next.js Development Services | CHORN",
    description: "Expert Next.js development services by CHORN. Enhance your web applications with scalable and high-performance solutions using Next.js.",
    alternates: {
        canonical: "https://chorn.in.th/outsourcing-software-development/front-end-developer/next.js",
    },
    openGraph: {
        title: "Next.js Development | CHORN",
        description: "CHORN offers specialized Next.js development services to create fast and scalable web applications.",
        images: [
            {
                url: "https://chorn.in.th/chorn-images/metadata/services/frontend-development/nextjs-development-service.png",
                width: 1200,
                height: 630,
                alt: "Next.js Development Banner"
            }
        ],
        url: "https://chorn.in.th/outsourcing-software-development/front-end-developer/next.js",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Next.js Development Services | CHORN",
        description: "Elevate your web applications with expert Next.js development services from CHORN.",
        images: [
            "https://chorn.in.th/chorn-images/metadata/services/frontend-development/nextjs-development-service.png",
        ],
    },
    keywords: [
        // Core Next.js & Service Keywords
        "Next.js development", "Next.js services", "Next.js developer", "custom Next.js development", "server-side rendering",
        "Next.js full stack development", "Next.js SEO optimization", "Next.js applications", "custom web applications",

        // Web & Application Development Keywords
        "scalable web applications", "frontend development", "high-performance web applications",
        "single-page applications", "dynamic user interfaces", "full stack developer", "custom software development",

        // Developer & Location-Specific Keywords
        "Next.js developer Thailand", "Next.js developer Bangkok", "Next.js developer Chiangmai", "frontend developer Thailand",
        "web developer Bangkok", "software engineer", "software developer Thailand",

        // Brand & Innovation Keywords
        "CHORN", "digital innovation", "enterprise software"
    ]

};

const Page = () => {
    return (
        <>
            <Navbar/>

            <PageBanner
                pageTitle={INFO.FRONT_END_EXPERIENCE_INFO.additions[0].details[0].title}
                homePageUrl="/"
                homePageText="Home"
                activePageText={INFO.FRONT_END_EXPERIENCE_INFO.title}
                BGImage={INFO.IMAGES.pageBanner.cover1.path}
            />

            <ServicesDetailsNextJS/>

            <CloudExperience/>

            <Footer/>

            <SchemaMarkupServicePage
                name="Next.js Development Services | CHORN"
                description="Expert Next.js development services by CHORN. Enhance your web applications with scalable and high-performance solutions using Next.js."
                url="https://chorn.in.th/outsourcing-software-development/front-end-developer/next.js"
            />
        </>
    );
};

export default Page;
