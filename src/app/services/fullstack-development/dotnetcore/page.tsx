import React from "react";
import Navbar from "../../../../components/Layouts/Navbar";
import PageBanner from "../../../../components/Common/PageBanner";
import Footer from "../../../../components/Layouts/Footer";
import CloudExperience from "@/components/Common/CloudExperience";
import ServicesDetailsDotNetCore
    from "@/components/Services/fullstack-development/dotnetcore/ServicesDetailsDotNetCore";
import {INFO} from "@/data/INFO";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/SchemaMarkup/SchemaMarkupServicePage";

export const metadata: Metadata = {
    title: ".NET Core Full Stack Development | CHORN",
    description: "CHORN offers .NET Core full stack development services to build modern, scalable, and secure web applications.",
    alternates: {
        canonical: "https://chorn.in.th/services/fullstack-development/dotnetcore/",
    },
    openGraph: {
        title: ".NET Core Development | CHORN",
        description: "Build secure, scalable, and modern web applications with CHORN’s .NET Core full stack development services.",
        images: [
            {
                url: "https://chorn.in.th/chorn-images/metadata/services/fullstack-development/dotnet-core-development-service.png",
                width: 1200,
                height: 630,
                alt: ".NET Core Development Banner"
            }
        ],
        url: "https://chorn.in.th/services/fullstack-development/dotnetcore/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: ".NET Core Full Stack Development | CHORN",
        description: "Expert .NET Core full stack development services from CHORN for modern and scalable web applications.",
        images: [
            "https://chorn.in.th/chorn-images/services-details/fullstack-development/service-detail-dotnetcore.png"
        ],
    },
    keywords: [
        // Core .NET Core & Service Keywords
        ".NET Core development", ".NET Core services", ".NET Core developer", "custom .NET Core development",
        "enterprise .NET Core applications", "ASP.NET Core development", ".NET Core web applications",
        "custom software development",

        // Web & Application Development Keywords
        "scalable web applications", "backend development", "enterprise software solutions", "full stack development",
        "high-performance applications", "custom web applications", "API development",

        // Developer & Location-Specific Keywords
        ".NET Core developer Thailand", ".NET Core developer Bangkok", ".NET Core developer Chiangmai",
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
                pageTitle={INFO.FULL_STACK_FRAMEWORK_INFO.additions[1].details[0].title}
                homePageUrl="/"
                homePageText="Home"
                activePageText={INFO.FULL_STACK_FRAMEWORK_INFO.title}
                BGImage={INFO.IMAGES.pageBanner.cover1.path}
            />

            <ServicesDetailsDotNetCore/>

            <CloudExperience/>

            <Footer/>

            <SchemaMarkupServicePage
                name=".NET Core Full Stack Development | CHORN"
                description="CHORN offers .NET Core full stack development services to build modern, scalable, and secure web applications."
                url="https://chorn.in.th/services/fullstack-development/dotnetcore/"
            />
        </>
    );
};

export default Page;
