import React from "react";
import Navbar from "../../../../components/Layouts/Navbar";
import PageBanner from "../../../../components/Common/PageBanner";
import Footer from "../../../../components/Layouts/Footer";
import ServicesDetailsJavaScript
    from "@/components/Services/frontend-development/javascript/ServicesDetailsJavaScript";
import CloudExperience from "@/components/Common/CloudExperience";
import {Info} from "@/data/info/Info";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";

export const metadata: Metadata = {
    title: "JavaScript | CHORN - Custom Software Development Experts",
    description: "Learn how CHORN leverages JavaScript to build scalable, robust, and efficient custom software solutions for businesses across industries.",
    alternates: {
        canonical: "https://chorn.in.th/services/full-stack-developer/javascript-javascript-developer/",
    },
    openGraph: {
        title: "CHORN - JavaScript Custom Software Development",
        description: "Explore CHORN's expertise in JavaScript, a powerful tool for building scalable and high-performance applications. Learn why we choose JavaScript for custom software solutions.",
        images: [
            {
                url: "https://chorn.in.th/chorn-images/metadata/services/fullstack-development/javascript-development-service.png",
                width: 1200,
                height: 630,
                alt: "CHORN JavaScript Development Banner",
            },
        ],
        url: "https://chorn.in.th/services/full-stack-developer/javascript-javascript-developer/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "CHORN - JavaScript Development for Custom Software Solutions",
        description: "Discover why CHORN uses JavaScript to deliver scalable and high-quality software solutions tailored to businesses' needs.",
        images: [
            "https://chorn.in.th/chorn-images/metadata/services/fullstack-development/javascript-development-service.png",
        ],
    },
    keywords: [
        // Core JavaScript & service Keywords
        "JavaScript development", "JavaScript services", "JavaScript developer", "custom JavaScript development",
        "JavaScript web applications", "JavaScript full stack development", "JavaScript frontend development",
        "custom software development",

        // Web & Application Development Keywords
        "scalable web applications", "frontend development", "backend development",
        "high-performance applications", "enterprise software solutions", "custom web applications", "API development",

        // Developer & Location-Specific Keywords
        "JavaScript developer Thailand", "JavaScript developer Bangkok", "JavaScript developer Chiangmai",
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

            <PageBanner pageTitle={Info.FrontEnd.javascript.features[0].title} />

            <ServicesDetailsJavaScript/>

            <CloudExperience/>

            <Footer/>

            <SchemaMarkupServicePage
                name="JavaScript | CHORN - Custom Software Development Experts"
                description="Learn how CHORN leverages JavaScript to build scalable, robust, and efficient custom software solutions for businesses across industries."
                url="https://chorn.in.th/services/full-stack-developer/javascript-javascript-developer/"
            />
        </>
    );
};

export default Page;
