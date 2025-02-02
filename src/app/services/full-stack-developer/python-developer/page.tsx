import React from "react";
import Navbar from "../../../../components/Layouts/Navbar";
import PageBanner from "../../../../components/Common/PageBanner";
import Footer from "../../../../components/Layouts/Footer";
import ServicesDetailsPython from "@/components/Services/fullstack-development/python/ServicesDetailsPython";
import CloudExperience from "@/components/Common/CloudExperience";
import {Info} from "@/data/info/Info";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {ChornMetadata} from "@/data/metadata/ChornMetadata";

export const metadata: Metadata = {
    title: "Python Full Stack Development | CHORN",
    description: "CHORN offers Python full stack development services to build dynamic and scalable web applications.",
    alternates: {
        canonical: "https://chorn.in.th/services/full-stack-developer/python-developer/",
    },
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Python Development | CHORN",
        description: "Build dynamic and scalable web applications with CHORN’s Python full stack development services.",
        images: [
            {
                url: "https://chorn.in.th/chorn-images/metadata/services/fullstack-development/python-development-service.png" + ChornMetadata.ogImage,
                width: 1200,
                height: 630,
                alt: "Python Development Banner"
            }
        ],
        url: "https://chorn.in.th/services/full-stack-developer/python-developer/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Python Full Stack Development | CHORN",
        description: "Expert Python full stack development services from CHORN for dynamic and scalable web applications.",
        images: [
            "https://chorn.in.th/chorn-images/metadata/services/fullstack-development/python-development-service.png" + ChornMetadata.ogImage,
        ],
    },
    keywords: [
        // Core Python & service Keywords
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

            <PageBanner pageTitle={Info.FullStack.python.features[0].title}/>

            <ServicesDetailsPython/>

            <CloudExperience/>

            <Footer/>

            <SchemaMarkupServicePage
                name="Python Full Stack Development | CHORN"
                description="CHORN offers Python full stack development services to build dynamic and scalable web applications."
                url="https://chorn.in.th/services/full-stack-developer/python-developer/"
            />
        </>
    );
};

export default Page;
