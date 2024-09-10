import React from "react";
import Navbar from "../../../../components/Layouts/Navbar";
import PageBanner from "../../../../components/Common/PageBanner";
import Footer from "../../../../components/Layouts/Footer";
import ServicesDetailsJava from "@/components/Services/fullstack-development/java/ServicesDetailsJava";
import CloudExperience from "@/components/Common/CloudExperience";
import {INFO} from "@/data/INFO";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Java Spring Boot Full Stack Development | CHORN",
    description: "CHORN offers Java Spring Boot full stack development services to build robust and scalable enterprise applications.",
    openGraph: {
        title: "Java Spring Boot Development | CHORN",
        description: "Leverage CHORN’s Java Spring Boot full stack development services to build scalable, secure, and high-performance applications.",
        images: [
            {
                url: "https://chorn.in.th/chorn-images/services-details/fullstack-development/service-detail-java-spring-boot.png",
                width: 500,
                height: 500,
                alt: "Java Spring Boot Development Banner"
            }
        ],
        url: "https://chorn.in.th/services/fullstack-development/java-spring-boot/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Java Spring Boot Full Stack Development | CHORN",
        description: "Expert Java Spring Boot full stack development services from CHORN to build secure and scalable applications.",
        images: ["https://chorn.in.th/chorn-images/services-details/fullstack-development/service-detail-java-spring-boot.png"],
    },
    keywords: [
        "Java Spring Boot development", "Java Spring Boot services", "CHORN", "full stack development",
        "custom software development", "enterprise software", "scalable web applications", "Java developer",
        "Java full stack developer", "Java Spring developer", "backend developer", "software engineer",
        "digital innovation", "custom web applications", "software developer thailand", "high-performance applications"
    ]
};

const Page = () => {

    return (
        <>
            <Navbar/>

            <PageBanner
                pageTitle={INFO.FULL_STACK_FRAMEWORK_INFO.additions[2].details[0].title}
                homePageUrl="/"
                homePageText="Home"
                activePageText={INFO.FULL_STACK_FRAMEWORK_INFO.title}
                BGImage={INFO.IMAGES.pageBanner.cover1.path}
            />

            <ServicesDetailsJava/>

            <CloudExperience/>

            <Footer/>
        </>
    );
};

export default Page;
