import React from "react";
import Navbar from "../../../../components/Layouts/Navbar";
import PageBanner from "../../../../components/Common/PageBanner";
import Footer from "../../../../components/Layouts/Footer";
import ServicesDetailsNodejs from "@/components/Services/fullstack-development/nodejs/ServicesDetailsNodejs";
import CloudExperience from "@/components/Common/CloudExperience";
import {INFO} from "@/data/INFO";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";

export const metadata: Metadata = {
    title: "Node.js Full Stack Development | CHORN",
    description: "CHORN offers Node.js full stack development services for building scalable and efficient applications.",
    alternates: {
        canonical: "https://chorn.in.th/outsourcing-software-development/full-stack-developer/nodejs-developer/",
    },
    openGraph: {
        title: "Node.js Development | CHORN",
        description: "Build scalable and high-performance applications with CHORN’s Node.js full stack development services.",
        images: [
            {
                url: "https://chorn.in.th/chorn-images/metadata/services/fullstack-development/nodejs-development-service.png",
                width: 1200,
                height: 630,
                alt: "Node.js Development Banner"
            }
        ],
        url: "https://chorn.in.th/outsourcing-software-development/full-stack-developer/nodejs-developer/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Node.js Full Stack Development | CHORN",
        description: "Expert Node.js full stack development services from CHORN for efficient and scalable applications.",
        images: [
            "https://chorn.in.th/chorn-images/metadata/services/fullstack-development/nodejs-development-service.png",
        ],
    },
    keywords: [
        // Core Node.js & Service Keywords
        "Node.js development", "Node.js services", "Node.js developer", "custom Node.js development",
        "Node.js backend development", "Node.js full stack development", "Node.js microservices", "custom software development",

        // Web & Application Development Keywords
        "scalable web applications", "backend development", "high-performance applications",
        "enterprise Node.js applications", "API development", "microservices development", "full stack developer",

        // Developer & Location-Specific Keywords
        "Node.js developer Thailand", "Node.js developer Bangkok", "Node.js developer Chiangmai",
        "backend developer Thailand", "full stack developer Thailand", "software engineer", "software developer Thailand",

        // Brand & Innovation Keywords
        "CHORN", "digital innovation", "enterprise software"
    ]

};

const Page = () => {
    return (
        <>
            <Navbar/>

            <PageBanner
                pageTitle={INFO.FULL_STACK_FRAMEWORK_INFO.additions[0].details[0].title}
                homePageUrl="/"
                homePageText="Home"
                activePageText={INFO.FULL_STACK_FRAMEWORK_INFO.title}
                BGImage={INFO.IMAGES.pageBanner.cover1.path}
            />

            <ServicesDetailsNodejs/>

            <CloudExperience/>

            <Footer/>

            <SchemaMarkupServicePage
                name="Node.js Full Stack Development | CHORN"
                description="CHORN offers Node.js full stack development services for building scalable and efficient applications."
                url="https://chorn.in.th/outsourcing-software-development/full-stack-developer/nodejs-developer/"
            />
        </>
    );
};

export default Page;
