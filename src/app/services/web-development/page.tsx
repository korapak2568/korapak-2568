import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import WeWorkForIndustries from "../../../components/Common/WeWorkForIndustries";
import ServicesCardFrontEnd from "../../../components/Services/frontend-development/ServicesCardFrontEnd";
import CloudExperience from "@/components/Common/CloudExperience";
import ServicesCardFullStack from "@/components/Services/fullstack-development/ServicesCardFullStack";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import ServiceCardWebDevelopment from "@/components/Services/WebDevelopment/ServicesCardWebDevelopment";

export const metadata: Metadata = {
    title: "Web Development Services | CHORN | Custom Software & Technology Solutions",
    description: "Explore CHORN's web development services, including expertise in Next.js, React, Angular, Vue, and more. CHORN offers tailored solutions for businesses across various domains such as Digital Marketing, Blockchain, E-Commerce, and more.",
    alternates: {
        canonical: "https://chorn.in.th/services/web-development/",
    },
    openGraph: {
        title: "Top Web Development Services | CHORN",
        description: "CHORN provides cutting-edge web development services with expertise in popular frameworks like Next.js, React, Angular, and more. CHORN caters to diverse business needs including Digital Marketing, E-Commerce, Blockchain, and more.",
        images: [
            {
                url: "https://chorn.in.th/chorn-images/metadata/frontend-development-services.png",
                width: 1200,
                height: 630,
                alt: "Web Development Services Banner",
            },
        ],
        url: "https://chorn.in.th/services/web-development/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Web Development Services | CHORN",
        description: "Discover CHORN’s expert web development services. From Next.js to Angular and beyond, CHORN offers solutions for all business needs including Digital Marketing, Blockchain, E-Commerce, and more.",
        images: [
            "https://chorn.in.th/chorn-images/metadata/frontend-development-services.png"
        ],
    },
    keywords: [
        // Core Web Development Keywords
        "web development", "web development services", "web developer", "custom web development",
        "responsive web development", "dynamic websites", "enterprise web development",
        "scalable web applications", "custom web applications", "custom software development",

        // Senior/Principal Developer Keywords (Combined Frameworks)
        "Senior full stack web developer", "Principal web developer", "Senior .NET Core Angular web developer",
        "Senior React Node.js web developer", "Principal React Java developer",
        "Senior Angular Spring Boot developer", "Principal PHP Laravel web developer", "Senior web developer",

        // Framework-Specific Web Development Keywords
        ".NET Core web development", "React web development", "Angular web development",
        "Vue.js web development", "Node.js web development", "Java Spring Boot web development",
        "PHP Laravel web development", "custom React web development", "enterprise Angular web development",

        // Developer & Location-Specific Keywords
        "web developer Thailand", "web developer Bangkok", "web developer Chiangmai",
        "Senior web developer Thailand", "Principal web developer Thailand",
        "backend developer Thailand", "frontend developer Thailand", "software engineer Thailand",

        // Brand & Innovation Keywords
        "CHORN", "digital innovation", "enterprise software", "scalable web applications"
    ]
};

const Page = () => {
    return (
        <>
            <Navbar/>

            <PageBanner pageTitle="Web and API Development Services"/>

            <ServiceCardWebDevelopment/>

            <CloudExperience/>

            <WeWorkForIndustries/>

            <Footer/>

            <SchemaMarkupServicePage
                name="Web Development Services | CHORN | Custom Software & Technology Solutions"
                description="Explore CHORN's web development services, including expertise in Next.js, React, Angular, Vue, and more. CHORN offers tailored solutions for businesses across various domains such as Digital Marketing, Blockchain, E-Commerce, and more."
                url="https://chorn.in.th/services/web-development/"
            />
        </>
    );
};

export default Page;
