import React from "react";
import Navbar from "../../../../components/Layouts/Navbar";
import PageBanner from "../../../../components/Common/PageBanner";
import Footer from "../../../../components/Layouts/Footer";
import ServicesDetailsPhp from "@/components/Services/fullstack-development/php/ServicesDetailsPhp";
import CloudExperience from "@/components/Common/CloudExperience";
import {INFO} from "@/data/INFO";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "PHP Full Stack Development | CHORN",
    description: "CHORN offers PHP full stack development services for building dynamic and scalable web applications.",
    openGraph: {
        title: "PHP Development | CHORN",
        description: "Leverage CHORN’s PHP full stack development services to build scalable and dynamic web applications.",
        images: [
            {
                url: "https://chorn.in.th/chorn-images/services-details/fullstack-development/service-detail-php.png",
                width: 500,
                height: 500,
                alt: "PHP Development Banner"
            }
        ],
        url: "https://chorn.in.th/services/fullstack-development/php/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "PHP Full Stack Development | CHORN",
        description: "Expert PHP full stack development services from CHORN for dynamic and scalable web applications.",
        images: ["https://chorn.in.th/chorn-images/services-details/fullstack-development/service-detail-php.png"],
    },
    keywords: [
        "PHP development", "PHP services", "CHORN", "full stack development", "custom software development",
        "scalable web applications", "PHP developer", "backend developer", "web developer", "dynamic web applications",
        "enterprise software", "high-performance applications", "custom web applications", "software engineer",
        "digital innovation", "software developer thailand", "secure web applications"
    ]
};

const Page = () => {
    return (
        <>
            <Navbar/>

            <PageBanner
                pageTitle={INFO.FULL_STACK_FRAMEWORK_INFO.additions[5].details[0].title}
                homePageUrl="/"
                homePageText="Home"
                activePageText={INFO.FULL_STACK_FRAMEWORK_INFO.title}
                BGImage={INFO.IMAGES.pageBanner.cover1.path}
            />

            <ServicesDetailsPhp/>

            <CloudExperience/>

            <Footer/>
        </>
    );
};

export default Page;
