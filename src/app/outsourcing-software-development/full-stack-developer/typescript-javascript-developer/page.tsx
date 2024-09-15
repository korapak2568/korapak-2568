import React from "react";
import Navbar from "../../../../components/Layouts/Navbar";
import PageBanner from "../../../../components/Common/PageBanner";
import Footer from "../../../../components/Layouts/Footer";
import ServicesDetailsTypeScript
    from "@/components/Services/fullstack-development/typescript/ServicesDetailsTypeScript";
import CloudExperience from "@/components/Common/CloudExperience";
import {INFO} from "@/data/INFO";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {GoogleSchemaProductSnippet} from "@/components/GoogleSchemaMarkup/ProductSnippet/GoogleSchemaProductSnippet";

export const metadata: Metadata = {
    title: "TypeScript | CHORN - Custom Software Development Experts",
    description: "Learn how CHORN leverages TypeScript to build scalable, robust, and efficient custom software solutions for businesses across industries.",
    alternates: {
        canonical: "https://chorn.in.th/outsourcing-software-development/full-stack-developer/typescript-javascript-developer/",
    },
    openGraph: {
        title: "CHORN - TypeScript Custom Software Development",
        description: "Explore CHORN's expertise in TypeScript, a powerful tool for building scalable and high-performance applications. Learn why we choose TypeScript for custom software solutions.",
        images: [
            {
                url: "https://chorn.in.th/chorn-images/metadata/services/fullstack-development/typescript-development-service.png",
                width: 1200,
                height: 630,
                alt: "CHORN TypeScript Development Banner",
            },
        ],
        url: "https://chorn.in.th/outsourcing-software-development/full-stack-developer/typescript-javascript-developer/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "CHORN - TypeScript Development for Custom Software Solutions",
        description: "Discover why CHORN uses TypeScript to deliver scalable and high-quality software solutions tailored to businesses' needs.",
        images: [
            "https://chorn.in.th/chorn-images/metadata/services/fullstack-development/typescript-development-service.png",
        ],
    },
    keywords: [
        // Core TypeScript & Service Keywords
        "TypeScript development", "TypeScript services", "TypeScript developer", "custom TypeScript development",
        "TypeScript web applications", "TypeScript full stack development", "TypeScript frontend development",
        "custom software development",

        // Web & Application Development Keywords
        "scalable web applications", "frontend development", "backend development",
        "high-performance applications", "enterprise software solutions", "custom web applications", "API development",

        // Developer & Location-Specific Keywords
        "TypeScript developer Thailand", "TypeScript developer Bangkok", "TypeScript developer Chiangmai",
        "frontend developer Thailand", "backend developer Thailand", "full stack developer Thailand",
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
                pageTitle="TypeScript JavaScript Development"
                homePageUrl="/"
                homePageText="Home"
                activePageText={INFO.FULL_STACK_FRAMEWORK_INFO.title}
                BGImage={INFO.IMAGES.pageBanner.cover1.path}
            />

            <ServicesDetailsTypeScript/>

            <CloudExperience/>

            <Footer/>

            <SchemaMarkupServicePage
                name="TypeScript | CHORN - Custom Software Development Experts"
                description="Learn how CHORN leverages TypeScript to build scalable, robust, and efficient custom software solutions for businesses across industries."
                url="https://chorn.in.th/outsourcing-software-development/full-stack-developer/typescript-javascript-developer/"
            />

            <GoogleSchemaProductSnippet
                url="https://chorn.in.th/outsourcing-software-development/full-stack-developer/typescript-javascript-developer/"
            />
        </>
    );
};

export default Page;
