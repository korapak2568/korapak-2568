import React from "react";
import Navbar from "../../../../components/Layouts/Navbar";
import PageBanner from "../../../../components/Common/PageBanner";
import Footer from "../../../../components/Layouts/Footer";
import ServicesDetailsGoLang from "@/components/Services/fullstack-development/go-lang/ServicesDetailsGoLang";
import CloudExperience from "@/components/Common/CloudExperience";
import {INFO} from "@/data/INFO";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Go Full Stack Development | CHORN",
    description: "CHORN offers Go full stack development services for building efficient and scalable web applications.",
    openGraph: {
        title: "Go Development | CHORN",
        description: "Build efficient and scalable web applications with CHORN’s Go full stack development services.",
        images: [
            {
                url: "https://chorn.in.th/chorn-images/services-details/fullstack-development/service-detail-go.png",
                width: 500,
                height: 500,
                alt: "Go Development Banner"
            }
        ],
        url: "https://chorn.in.th/services/fullstack-development/go-lang/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Go Full Stack Development | CHORN",
        description: "Expert Go full stack development services from CHORN for efficient and scalable web applications.",
        images: ["https://chorn.in.th/chorn-images/services-details/fullstack-development/service-detail-go.png"],
    },
    keywords: [
        "Go development", "Go services", "CHORN", "full stack development", "custom software development",
        "scalable web applications", "Go developer", "Golang developer", "backend developer", "web developer",
        "enterprise software", "digital innovation", "high-performance applications", "custom web applications",
        "software engineer", "software developer thailand", "secure web applications"
    ]
};

const Page = () => {
    return (
        <>
            <Navbar/>

            <PageBanner
                pageTitle={INFO.FULL_STACK_FRAMEWORK_INFO.additions[4].details[0].title}
                homePageUrl="/"
                homePageText="Home"
                activePageText={INFO.FULL_STACK_FRAMEWORK_INFO.title}
                BGImage={INFO.IMAGES.pageBanner.cover1.path}
            />

            <ServicesDetailsGoLang/>

            <CloudExperience/>

            <Footer/>
        </>
    );
};

export default Page;
