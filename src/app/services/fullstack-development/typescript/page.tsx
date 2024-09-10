import React from "react";
import Navbar from "../../../../components/Layouts/Navbar";
import PageBanner from "../../../../components/Common/PageBanner";
import Footer from "../../../../components/Layouts/Footer";
import ServicesDetailsTypeScript
    from "@/components/Services/fullstack-development/typescript/ServicesDetailsTypeScript";
import CloudExperience from "@/components/Common/CloudExperience";
import {INFO} from "@/data/INFO";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "TypeScript | CHORN - Custom Software Development Experts",
    description: "Learn how CHORN leverages TypeScript to build scalable, robust, and efficient custom software solutions for businesses across industries.",
    alternates: {
        canonical: "https://chorn.in.th/services/fullstack-development/typescript/",
    },
    openGraph: {
        title: "CHORN - TypeScript Custom Software Development",
        description: "Explore CHORN's expertise in TypeScript, a powerful tool for building scalable and high-performance applications. Learn why we choose TypeScript for custom software solutions.",
        images: [
            {
                url: "https://chorn.in.th/chorn-images/metadata/services/fullstack-development/typescript-development-service.png",
                width: 1200,
                height: 630,
                alt: "CHORN TypeScript Development Banner",
            },
        ],
        url: "https://chorn.in.th/services/fullstack-development/typescript/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "CHORN - TypeScript Development for Custom Software Solutions",
        description: "Discover why CHORN uses TypeScript to deliver scalable and high-quality software solutions tailored to businesses' needs.",
        images: [
            "https://chorn.in.th/chorn-images/metadata/services/fullstack-development/typescript-development-service.png",
        ],
    },
    keywords: [
        "TypeScript development", "custom software development", "TypeScript software solutions", "CHORN TypeScript",
        "TypeScript developers", "TypeScript software engineers", "TypeScript scalable applications", "CHORN software development",
        "enterprise software", "TypeScript web development", "CHORN technologies", "CHORN innovation", "TypeScript experts",
        "TypeScript frameworks", "full stack TypeScript development", "frontend TypeScript development",
        "backend TypeScript development", "CHORN TypeScript solutions"
    ],
};

const Page = () => {

    return (
        <>
            <Navbar/>

            <PageBanner
                pageTitle="Type Script"
                homePageUrl="/"
                homePageText="Home"
                activePageText={INFO.FULL_STACK_FRAMEWORK_INFO.title}
                BGImage={INFO.IMAGES.pageBanner.cover1.path}
            />

            <ServicesDetailsTypeScript/>

            <CloudExperience/>

            <Footer/>
        </>
    );
};

export default Page;
