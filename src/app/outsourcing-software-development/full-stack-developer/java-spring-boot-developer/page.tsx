import React from "react";
import Navbar from "../../../../components/Layouts/Navbar";
import PageBanner from "../../../../components/Common/PageBanner";
import Footer from "../../../../components/Layouts/Footer";
import ServicesDetailsJava from "@/components/Services/fullstack-development/java/ServicesDetailsJava";
import CloudExperience from "@/components/Common/CloudExperience";
import {INFO} from "@/data/INFO";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {GoogleSchemaProductSnippet} from "@/components/GoogleSchemaMarkup/ProductSnippet/GoogleSchemaProductSnippet";

export const metadata: Metadata = {
    title: "Java Spring Boot Full Stack Development | CHORN",
    description: "CHORN offers Java Spring Boot full stack development services to build robust and scalable enterprise applications.",
    alternates: {
        canonical: "https://chorn.in.th/outsourcing-software-development/full-stack-developer/java-spring-boot-developer/",
    },
    openGraph: {
        title: "Java Spring Boot Development | CHORN",
        description: "Leverage CHORN’s Java Spring Boot full stack development services to build scalable, secure, and high-performance applications.",
        images: [
            {
                url: "https://chorn.in.th/chorn-images/metadata/services/fullstack-development/java-spring-boot-development-service.png",
                width: 1200,
                height: 630,
                alt: "Java Spring Boot Development Banner"
            }
        ],
        url: "https://chorn.in.th/outsourcing-software-development/full-stack-developer/java-spring-boot-developer/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Java Spring Boot Full Stack Development | CHORN",
        description: "Expert Java Spring Boot full stack development services from CHORN to build secure and scalable applications.",
        images: ["https://chorn.in.th/chorn-images/metadata/services/fullstack-development/java-spring-boot-development-service.png",],
    },
    keywords: [
        // Core Java Spring Boot & Service Keywords
        "Spring Boot development", "Java Spring Boot services", "Spring Boot developer", "custom Java development",
        "Java Spring Boot applications", "enterprise Java development", "Spring Boot microservices",
        "custom software development",

        // Web & Application Development Keywords
        "scalable web applications", "backend development", "enterprise software solutions",
        "high-performance applications", "Java web applications", "microservices development", "API development",

        // Developer & Location-Specific Keywords
        "Spring Boot developer Thailand", "Java developer Thailand", "Java developer Bangkok",
        "Java developer Chiangmai", "backend developer Thailand", "software engineer", "software developer Thailand",

        // Brand & Innovation Keywords
        "CHORN", "digital innovation", "enterprise software"
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

            <SchemaMarkupServicePage
                name="Java Spring Boot Full Stack Development | CHORN"
                description="CHORN offers Java Spring Boot full stack development services to build robust and scalable enterprise applications."
                url="https://chorn.in.th/outsourcing-software-development/full-stack-developer/java-spring-boot-developer/"
            />
        </>
    );
};

export default Page;
