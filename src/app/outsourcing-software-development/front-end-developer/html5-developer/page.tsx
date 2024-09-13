import React from "react";
import Navbar from "../../../../components/Layouts/Navbar";
import PageBanner from "../../../../components/Common/PageBanner";
import Footer from "../../../../components/Layouts/Footer";
import ServicesDetailsHtml5 from "@/components/Services/frontend-development/html5/ServicesDetailsHtml5";
import CloudExperience from "@/components/Common/CloudExperience";
import {INFO} from "@/data/INFO";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/SchemaMarkup/SchemaMarkupServicePage";

export const metadata: Metadata = {
    title: "HTML5 Development Services | CHORN",
    description: "CHORN offers expert HTML5 development services to create responsive and engaging web applications.",
    alternates: {
        canonical: "https://chorn.in.th/outsourcing-software-development/front-end-developer/html5/",
    },
    openGraph: {
        title: "HTML5 Development | CHORN",
        description: "Build modern and interactive web applications with CHORN’s HTML5 development services.",
        images: [
            {
                url: "https://chorn.in.th/chorn-images/metadata/services/frontend-development/html5-development-service.png",
                width: 1200,
                height: 630,
                alt: "HTML5 Development Banner"
            }
        ],
        url: "https://chorn.in.th/outsourcing-software-development/front-end-developer/html5/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "HTML5 Development Services | CHORN",
        description: "Create interactive web apps with HTML5. CHORN provides expert HTML5 development services.",
        images: [
            "https://chorn.in.th/chorn-images/metadata/services/frontend-development/html5-development-service.png",
        ],
    },
    keywords: [
        // Core HTML5 & Service Keywords
        "HTML5 development", "HTML5 services", "HTML5 developer", "custom HTML5 development", "HTML5 responsive design",
        "HTML5 web applications", "HTML5 mobile development", "custom web applications", "HTML5 cross-platform apps",
        "custom software development",

        // Web & Application Development Keywords
        "single-page applications", "frontend development", "web developer", "scalable web applications",
        "high-performance web design", "responsive web design", "dynamic user interfaces",

        // Developer & Location-Specific Keywords
        "HTML5 developer Thailand", "HTML5 developer Bangkok", "HTML5 developer Chiangmai", "frontend developer Thailand",
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
                pageTitle={INFO.FRONT_END_EXPERIENCE_INFO.additions[4].details[0].title}
                homePageUrl="/"
                homePageText="Home"
                activePageText={INFO.FRONT_END_EXPERIENCE_INFO.title}
                BGImage={INFO.IMAGES.pageBanner.cover1.path}
            />

            <ServicesDetailsHtml5/>

            <CloudExperience/>

            <Footer/>

            <SchemaMarkupServicePage
                name="HTML5 Development Services | CHORN"
                description="CHORN offers expert HTML5 development services to create responsive and engaging web applications."
                url="https://chorn.in.th/outsourcing-software-development/front-end-developer/html5/"
            />
        </>
    );
};

export default Page;
