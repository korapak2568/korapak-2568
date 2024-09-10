import React from "react";
import Navbar from "../../../../components/Layouts/Navbar";
import PageBanner from "../../../../components/Common/PageBanner";
import Footer from "../../../../components/Layouts/Footer";
import ServicesDetailsReact from "@/components/Services/frontend-development/react/ServicesDetailsReact";
import CloudExperience from "@/components/Common/CloudExperience";
import {INFO} from "@/data/INFO";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/SchemaMarkup/SchemaMarkupServicePage";

export const metadata: Metadata = {
    title: "React Development Services | CHORN",
    description: "CHORN provides top-tier React development services. Build dynamic and responsive user interfaces with React.",
    alternates: {
        canonical: "https://chorn.in.th/services/frontend-development/react",
    },
    openGraph: {
        title: "React Development | CHORN",
        description: "Enhance your web apps with React. CHORN offers expert React development services for high-performance applications.",
        images: [
            {
                url: "https://chorn.in.th/chorn-images/metadata/services/frontend-development/react-development-service.png",
                width: 1200,
                height: 630,
                alt: "React Development Banner"
            }
        ],
        url: "https://chorn.in.th/services/frontend-development/react",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "React Development Services | CHORN",
        description: "Expert React development services by CHORN. Create engaging user interfaces with React.",
        images: [
            "https://chorn.in.th/chorn-images/metadata/services/frontend-development/react-development-service.png",
        ],
    },
    keywords: [
        "React development", "React services", "CHORN", "frontend development",
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
                pageTitle={INFO.FRONT_END_EXPERIENCE_INFO.additions[1].details[0].title}
                homePageUrl="/"
                homePageText="Home"
                activePageText={INFO.FRONT_END_EXPERIENCE_INFO.title}
                BGImage={INFO.IMAGES.pageBanner.cover1.path}
            />

            <ServicesDetailsReact/>

            <CloudExperience/>

            <Footer/>

            <SchemaMarkupServicePage
                name="React Development Services | CHORN"
                description="CHORN provides top-tier React development services. Build dynamic and responsive user interfaces with React."
                url="https://chorn.in.th/services/frontend-development/react"
            />
        </>
    );
};

export default Page;
