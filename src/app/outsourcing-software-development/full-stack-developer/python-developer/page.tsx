import React from "react";
import Navbar from "../../../../components/Layouts/Navbar";
import PageBanner from "../../../../components/Common/PageBanner";
import Footer from "../../../../components/Layouts/Footer";
import ServicesDetailsPython from "@/components/Services/fullstack-development/python/ServicesDetailsPython";
import CloudExperience from "@/components/Common/CloudExperience";
import {INFO} from "@/data/INFO";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {GoogleSchemaProductSnippet} from "@/components/GoogleSchemaMarkup/ProductSnippet/GoogleSchemaProductSnippet";

export const metadata: Metadata = {
    title: "Python Full Stack Development | CHORN",
    description: "CHORN offers Python full stack development services to build dynamic and scalable web applications.",
    alternates: {
        canonical: "https://chorn.in.th/outsourcing-software-development/full-stack-developer/python-developer/",
    },
    openGraph: {
        title: "Python Development | CHORN",
        description: "Build dynamic and scalable web applications with CHORN’s Python full stack development services.",
        images: [
            {
                url: "https://chorn.in.th/chorn-images/metadata/services/fullstack-development/python-development-service.png",
                width: 1200,
                height: 630,
                alt: "Python Development Banner"
            }
        ],
        url: "https://chorn.in.th/outsourcing-software-development/full-stack-developer/python-developer/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Python Full Stack Development | CHORN",
        description: "Expert Python full stack development services from CHORN for dynamic and scalable web applications.",
        images: [
            "https://chorn.in.th/chorn-images/metadata/services/fullstack-development/python-development-service.png",
        ],
    },
    keywords: [
        // Core Python & Service Keywords
        "Python development", "Python services", "Python developer", "custom Python development",
        "Python web applications", "Python backend development", "Python full stack development",
        "custom software development",

        // Web & Application Development Keywords
        "scalable web applications", "backend development", "enterprise Python applications",
        "high-performance applications", "custom web applications", "API development", "machine learning development",

        // Developer & Location-Specific Keywords
        "Python developer Thailand", "Python developer Bangkok", "Python developer Chiangmai",
        "backend developer Thailand", "software engineer", "software developer Thailand",

        // Brand & Innovation Keywords
        "CHORN", "digital innovation", "enterprise software"
    ]

};

const Page = () => {

    return (
        <>
            <Navbar/>

            <PageBanner
                pageTitle={INFO.FULL_STACK_FRAMEWORK_INFO.additions[3].details[0].title}
                homePageUrl="/"
                homePageText="Home"
                activePageText={INFO.FULL_STACK_FRAMEWORK_INFO.title}
                BGImage={INFO.IMAGES.pageBanner.cover1.path}
            />

            <ServicesDetailsPython/>

            <CloudExperience/>

            <Footer/>

            <SchemaMarkupServicePage
                name="Python Full Stack Development | CHORN"
                description="CHORN offers Python full stack development services to build dynamic and scalable web applications."
                url="https://chorn.in.th/outsourcing-software-development/full-stack-developer/python-developer/"
            />
        </>
    );
};

export default Page;
