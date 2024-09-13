import React from "react";
import Navbar from "../../../../components/Layouts/Navbar";
import PageBanner from "../../../../components/Common/PageBanner";
import Footer from "../../../../components/Layouts/Footer";
import ServicesDetailsAngular from "@/components/Services/frontend-development/angular/ServicesDetailsAngular";
import CloudExperience from "@/components/Common/CloudExperience";
import {INFO} from "@/data/INFO";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/SchemaMarkup/SchemaMarkupServicePage";

export const metadata: Metadata = {
    title: "Angular Development Services | CHORN",
    description: "Expert Angular development services by CHORN. Build dynamic, scalable, and high-performance web applications using Angular.",
    alternates: {
        canonical: "https://chorn.in.th/outsourcing-software-development/front-end-developer/angular/",
    },
    openGraph: {
        title: "Angular Development | CHORN",
        description: "CHORN offers expert Angular development services to create fast, scalable, and dynamic web applications.",
        images: [
            {
                url: "https://chorn.in.th/chorn-images/metadata/services/frontend-development/angular-development-service.png",
                width: 1200,
                height: 630,
                alt: "Angular Development Banner"
            }
        ],
        url: "https://chorn.in.th/outsourcing-software-development/front-end-developer/angular/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Angular Development Services | CHORN",
        description: "Elevate your web applications with expert Angular development services from CHORN.",
        images: [
            "https://chorn.in.th/chorn-images/metadata/services/frontend-development/angular-development-service.png",
        ],
    },
    keywords: [
        // Core Angular & Service Keywords
        "Angular development", "Angular services", "Angular developer", "Angular development Thailand",
        "Angular development Bangkok", "Angular development Chiangmai", "Angular development company",
        "custom Angular development", "custom software development", "enterprise Angular applications",

        // Web & Application Development Keywords
        "frontend development", "single-page applications", "dynamic user interfaces",
        "high-performance applications", "scalable web applications", "custom web applications",

        // Developer & Location-Specific Keywords
        "web developer", "full stack developer", "software engineer", "software developer Thailand",
        "Angular developer Thailand", "frontend developer Thailand", "web developer Bangkok",

        // Brand & Innovation Keywords
        "CHORN", "digital innovation", "enterprise software"
    ]

};

const Page = () => {

    return (
        <>
            <Navbar/>

            <PageBanner
                pageTitle={INFO.FRONT_END_EXPERIENCE_INFO.additions[2].details[0].title}
                homePageUrl="/"
                homePageText="Home"
                activePageText={INFO.FRONT_END_EXPERIENCE_INFO.title}
                BGImage={INFO.IMAGES.pageBanner.cover1.path}
            />

            <ServicesDetailsAngular/>

            <CloudExperience/>

            <Footer/>

            <SchemaMarkupServicePage
                name="Angular Development Services | CHORN"
                description="Expert Angular development services by CHORN. Build dynamic, scalable, and high-performance web applications using Angular."
                url="https://chorn.in.th/outsourcing-software-development/front-end-developer/angular/"
            />
        </>
    );
};

export default Page;
