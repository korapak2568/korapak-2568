import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import WeWorkForIndustries from "../../../components/Common/WeWorkForIndustries";
import ServicesCardFullStack from "@/components/Services/fullstack-development/ServicesCardFullStack";
import CloudExperience from "@/components/Common/CloudExperience";
import {INFO} from "@/data/INFO";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Full-Stack Development Services | CHORN",
    description: "CHORN offers expert full-stack development services utilizing modern technologies like Node.js, Java Spring Boot, .NET Core, Go, Python, and PHP. Build scalable and robust web applications with our custom software solutions.",
    alternates: {
        canonical: "https://chorn.in.th/services/fullstack-development/",
    },
    openGraph: {
        title: "Full-Stack Development Services | CHORN",
        description: "CHORN provides full-stack development services with expertise in Node.js, Java Spring Boot, .NET Core, Go, Python, and PHP. Build powerful and scalable applications for your business.",
        images: [
            {
                url: "https://chorn.in.th/chorn-images/metadata/fullstack-development-services.png",
                width: 1360,
                height: 810,
                alt: "Full-Stack Development Banner"
            }
        ],
        url: "https://chorn.in.th/services/fullstack-development/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Full-Stack Development Services | CHORN",
        description: "Leverage full-stack development services by CHORN to build scalable web applications using Node.js, Java Spring Boot, .NET Core, Go, Python, and PHP.",
        images: [ "https://chorn.in.th/chorn-images/metadata/fullstack-development-services.png"],
    },
    keywords: [
        "full-stack development", "Node.js development", "Java Spring Boot development", ".NET Core development",
        "Go development", "Python development", "PHP development", "custom software development",
        "web application development", "full stack developer", "backend developer", "frontend developer",
        "full stack developer thailand", "software engineer", "software developer", "scalable web applications",
        "enterprise software development", "API development", "cloud-based applications", "web development",
        "custom web development", "software development chiangmai", "software development bangkok",
        "software developer remote jobs", "IT project manager", "system analyst", "full stack web developer",
        "software development services"
    ],
};

const Page = () => {

    return (
        <>
            <Navbar/>

            <PageBanner
                pageTitle="Full Stack Development"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Full Stack Development"
                BGImage={INFO.IMAGES.pageBanner.cover1.path}
            />

            <ServicesCardFullStack/>

            <CloudExperience/>

            <WeWorkForIndustries/>
            <Footer/>
        </>
    );
};

export default Page;
