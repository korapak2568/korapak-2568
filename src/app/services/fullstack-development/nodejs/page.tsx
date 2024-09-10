import React from "react";
import Navbar from "../../../../components/Layouts/Navbar";
import PageBanner from "../../../../components/Common/PageBanner";
import Footer from "../../../../components/Layouts/Footer";
import ServicesDetailsNodejs from "@/components/Services/fullstack-development/nodejs/ServicesDetailsNodejs";
import CloudExperience from "@/components/Common/CloudExperience";
import {INFO} from "@/data/INFO";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Node.js Full Stack Development | CHORN",
    description: "CHORN offers Node.js full stack development services for building scalable and efficient applications.",
    openGraph: {
        title: "Node.js Development | CHORN",
        description: "Build scalable and high-performance applications with CHORN’s Node.js full stack development services.",
        images: [
            {
                url: "https://chorn.in.th/chorn-images/services-details/fullstack-development/service-detail-nodejs.png",
                width: 500,
                height: 500,
                alt: "Node.js Development Banner"
            }
        ],
        url: "https://chorn.in.th/services/fullstack-development/nodejs/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Node.js Full Stack Development | CHORN",
        description: "Expert Node.js full stack development services from CHORN for efficient and scalable applications.",
        images: ["https://chorn.in.th/chorn-images/services-details/fullstack-development/service-detail-nodejs.png",],
    },
    keywords: [
        "Node.js development", "Node.js services", "CHORN", "full stack development",
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
                pageTitle={INFO.FULL_STACK_FRAMEWORK_INFO.additions[0].details[0].title}
                homePageUrl="/"
                homePageText="Home"
                activePageText={INFO.FULL_STACK_FRAMEWORK_INFO.title}
                BGImage={INFO.IMAGES.pageBanner.cover1.path}
            />

            <ServicesDetailsNodejs/>

            <CloudExperience/>

            <Footer/>
        </>
    );
};

export default Page;
