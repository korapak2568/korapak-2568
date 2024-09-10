import React from "react";
import Navbar from "../../../../components/Layouts/Navbar";
import PageBanner from "../../../../components/Common/PageBanner";
import Footer from "../../../../components/Layouts/Footer";
import CloudExperience from "@/components/Common/CloudExperience";
import ServicesDetailsDotNetCore
    from "@/components/Services/fullstack-development/dotnetcore/ServicesDetailsDotNetCore";
import {INFO} from "@/data/INFO";
import {Metadata} from "next";

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
        ".NET Core development", ".NET Core services", "CHORN", "full stack development", "custom software development",
        "enterprise software", "scalable web applications", ".NET developer", "C# developer", "full stack .NET developer",
        "backend developer", "web developer", "software engineer", "high-performance applications", "digital innovation",
        "custom web applications", "software developer thailand", "secure web applications"
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
        </>
    );
};

export default Page;
