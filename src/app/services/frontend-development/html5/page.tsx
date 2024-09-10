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
        canonical: "https://chorn.in.th/services/frontend-development/html5/",
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
        url: "https://chorn.in.th/services/frontend-development/html5/",
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
        "HTML5 development", "HTML5 services", "CHORN", "frontend development",
        "custom software development", "scalable web applications", "web developer", "software engineer",
        "enterprise software", "single-page applications", "dynamic user interfaces", "high-performance applications",
        "custom web applications", "software developer thailand", "digital innovation", "full stack developer"
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
                url="https://chorn.in.th/services/frontend-development/html5/"
            />
        </>
    );
};

export default Page;
