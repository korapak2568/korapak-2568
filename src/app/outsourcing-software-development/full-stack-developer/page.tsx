import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import WeWorkForIndustries from "../../../components/Common/WeWorkForIndustries";
import ServicesCardFullStack from "@/components/Services/fullstack-development/ServicesCardFullStack";
import CloudExperience from "@/components/Common/CloudExperience";
import {Info} from "@/data/info/Info";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";

export const metadata: Metadata = {
    title: "Full-Stack Development Services | CHORN",
    description: "CHORN offers expert full-stack development services utilizing modern technologies like Node.js, Java Spring Boot, .NET Core, Go, Python, and PHP. Build scalable and robust web applications with our custom software solutions.",
    alternates: {
        canonical: "https://chorn.in.th/outsourcing-software-development/full-stack-developer/",
    },
    openGraph: {
        title: "Full-Stack Development Services | CHORN",
        description: "CHORN provides full-stack development services with expertise in Node.js, Java Spring Boot, .NET Core, Go, Python, and PHP. Build powerful and scalable applications for your business.",
        images: [
            {
                url: "https://chorn.in.th/chorn-images/metadata/fullstack-development-services.webp",
                width: 1360,
                height: 810,
                alt: "Full-Stack Development Banner"
            }
        ],
        url: "https://chorn.in.th/outsourcing-software-development/full-stack-developer/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Full-Stack Development Services | CHORN",
        description: "Leverage full-stack development services by CHORN to build scalable web applications using Node.js, Java Spring Boot, .NET Core, Go, Python, and PHP.",
        images: ["https://chorn.in.th/chorn-images/metadata/fullstack-development-services.webp"],
    },
    keywords: [
        // Core Full Stack Development Keywords
        "full stack development", "full stack services", "full stack developer", "custom full stack development",
        "front end and backend development", "full stack web applications", "enterprise full stack applications",

        // Senior/Principal Developer Keywords (Combined Frameworks)
        "Senior .NET Angular developer", "Principal .NET Angular developer", "Senior React Node.js developer",
        "Principal React Node.js developer", "Senior Java Spring Boot developer", "Senior full stack developer",
        "Principal full stack developer", "Senior Python Vue.js developer", "Senior PHP Laravel full stack developer",

        // Framework-Specific Full Stack Keywords
        ".NET Core Angular development", "React Java Spring developer", "React Node.js developer",
        ".NET Angular development", "Java Spring Boot full stack development", "Python Django full stack development",
        "PHP Laravel full stack development", "Node.js full stack developer", "custom software development",

        // Developer & Location-Specific Keywords
        "full stack developer Thailand", "full stack developer Bangkok", "full stack developer Chiangmai",
        "Senior full stack developer Thailand", "Principal full stack developer Thailand",
        "backend developer Thailand", "frontend developer Thailand", "software engineer", "software developer Thailand",

        // Brand & Innovation Keywords
        "CHORN", "digital innovation", "enterprise software", "scalable web applications"
    ]
};

const Page = () => {

    return (
        <>
            <Navbar/>

            <PageBanner pageTitle="Full Stack Development Services"/>

            <ServicesCardFullStack/>

            <CloudExperience/>

            <WeWorkForIndustries/>

            <Footer/>

            <SchemaMarkupServicePage
                name="Full-Stack Development Services | CHORN"
                description="CHORN offers expert full-stack development services utilizing modern technologies like Node.js, Java Spring Boot, .NET Core, Go, Python, and PHP. Build scalable and robust web applications with our custom software solutions."
                url="https://chorn.in.th/outsourcing-software-development/full-stack-developer/"
            />
        </>
    );
};

export default Page;
