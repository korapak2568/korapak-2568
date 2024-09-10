import React from "react";
import Navbar from "../../../../components/Layouts/Navbar";
import PageBanner from "../../../../components/Common/PageBanner";
import Footer from "../../../../components/Layouts/Footer";
import ServicesDetailsPython from "@/components/Services/fullstack-development/python/ServicesDetailsPython";
import CloudExperience from "@/components/Common/CloudExperience";
import {INFO} from "@/data/INFO";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Python Full Stack Development | CHORN",
    description: "CHORN offers Python full stack development services to build dynamic and scalable web applications.",
    openGraph: {
        title: "Python Development | CHORN",
        description: "Build dynamic and scalable web applications with CHORN’s Python full stack development services.",
        images: [
            {
                url: "https://chorn.in.th/chorn-images/metadata/services/fullstack-development/python-development-service.png",
                width: 1200,
                height: 630,
                alt: "Python Development Banner"
            }
        ],
        url: "https://chorn.in.th/services/fullstack-development/python/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Python Full Stack Development | CHORN",
        description: "Expert Python full stack development services from CHORN for dynamic and scalable web applications.",
        images: [
            "https://chorn.in.th/chorn-images/metadata/services/fullstack-development/python-development-service.png",
        ],
    },
    keywords: [
        "Python development", "Python services", "CHORN", "full stack development", "custom software development",
        "scalable web applications", "Python developer", "backend developer", "web developer", "dynamic web applications",
        "enterprise software", "custom web applications", "software engineer", "high-performance applications",
        "software developer thailand", "digital innovation", "secure web applications"
    ]
};

const Page = () => {

    return (
        <>
            <Navbar/>

            <PageBanner
                pageTitle={INFO.FULL_STACK_FRAMEWORK_INFO.additions[3].details[0].title}
                homePageUrl="/"
                homePageText="Home"
                activePageText={INFO.FULL_STACK_FRAMEWORK_INFO.title}
                BGImage={INFO.IMAGES.pageBanner.cover1.path}
            />

            <ServicesDetailsPython/>

            <CloudExperience/>

            <Footer/>
        </>
    );
};

export default Page;
