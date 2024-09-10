import React from "react";
import Navbar from "../../../../components/Layouts/Navbar";
import PageBanner from "../../../../components/Common/PageBanner";
import Footer from "../../../../components/Layouts/Footer";
import ServicesDetailsAngular from "@/components/Services/frontend-development/angular/ServicesDetailsAngular";
import CloudExperience from "@/components/Common/CloudExperience";
import {INFO} from "@/data/INFO";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Angular Development Services | CHORN",
    description: "Expert Angular development services by CHORN. Build dynamic, scalable, and high-performance web applications using Angular.",
    alternates: {
        canonical: "https://chorn.in.th/services/frontend-development/angular/",
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
        url: "https://chorn.in.th/services/frontend-development/angular/",
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
        "Angular development", "Angular services", "CHORN", "frontend development", "Angular developer",
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
                pageTitle={INFO.FRONT_END_EXPERIENCE_INFO.additions[2].details[0].title}
                homePageUrl="/"
                homePageText="Home"
                activePageText={INFO.FRONT_END_EXPERIENCE_INFO.title}
                BGImage={INFO.IMAGES.pageBanner.cover1.path}
            />

            <ServicesDetailsAngular/>

            <CloudExperience/>

            <Footer/>
        </>
    );
};

export default Page;
