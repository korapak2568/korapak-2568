import React from "react";
import Navbar from "../../../../components/Layouts/Navbar";
import PageBanner from "../../../../components/Common/PageBanner";
import Footer from "../../../../components/Layouts/Footer";
import ServicesDetailsGoLang from "@/components/Services/fullstack-development/go-lang/ServicesDetailsGoLang";
import CloudExperience from "@/components/Common/CloudExperience";
import {INFO} from "@/data/INFO";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";

export const metadata: Metadata = {
    title: "Go Full Stack Development | CHORN",
    description: "CHORN offers Go full stack development services for building efficient and scalable web applications.",
    alternates: {
        canonical: "https://chorn.in.th/outsourcing-software-development/full-stack-developer/go-developer/",
    },
    openGraph: {
        title: "Go Development | CHORN",
        description: "Build efficient and scalable web applications with CHORN’s Go full stack development services.",
        images: [
            {
                url: "https://chorn.in.th/chorn-images/metadata/services/fullstack-development/go-development-service.webp",
                width: 1200,
                height: 630,
                alt: "Go Development Banner"
            }
        ],
        url: "https://chorn.in.th/outsourcing-software-development/full-stack-developer/go-developer/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Go Full Stack Development | CHORN",
        description: "Expert Go full stack development services from CHORN for efficient and scalable web applications.",
        images: [
            "https://chorn.in.th/chorn-images/metadata/services/fullstack-development/go-development-service.webp",
        ],
    },
    keywords: [
        // Core Go-lang & Service Keywords
        "Go-lang development", "Go services", "Go developer", "custom Go-lang development", "Go web applications",
        "Go backend development", "Go microservices", "custom software development",

        // Web & Application Development Keywords
        "scalable web applications", "backend development", "high-performance applications",
        "microservices development", "cloud-native development", "API development", "enterprise software",

        // Developer & Location-Specific Keywords
        "Go developer Thailand", "Go developer Bangkok", "Go developer Chiangmai", "backend developer Thailand",
        "software engineer", "software developer Thailand",

        // Brand & Innovation Keywords
        "CHORN", "digital innovation", "enterprise software"
    ]

};

const Page = () => {
    return (
        <>
            <Navbar/>

            <PageBanner
                pageTitle={INFO.FULL_STACK_FRAMEWORK_INFO.additions[4].details[0].title}
                homePageUrl="/"
                homePageText="Home"
                activePageText={INFO.FULL_STACK_FRAMEWORK_INFO.title}
                BGImage={INFO.IMAGES.pageBanner.cover1.path}
            />

            <ServicesDetailsGoLang/>

            <CloudExperience/>

            <Footer/>

            <SchemaMarkupServicePage
                name="Go Full Stack Development | CHORN"
                description="CHORN offers Go full stack development services for building efficient and scalable web applications."
                url="https://chorn.in.th/outsourcing-software-development/full-stack-developer/go-developer/"
            />
        </>
    );
};

export default Page;
