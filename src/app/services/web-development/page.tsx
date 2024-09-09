import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import WeWorkForIndustries from "../../../components/Common/WeWorkForIndustries";
import ServicesCardFrontEnd from "../../../components/Services/frontend-development/ServicesCardFrontEnd";
import CloudExperience from "@/components/Common/CloudExperience";
import ServicesCardFullStack from "@/components/Services/fullstack-development/ServicesCardFullStack";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Web Development Services | CHORN | Custom Software & Technology Solutions",
    description: "Explore CHORN's web development services, including expertise in Next.js, React, Angular, Vue, and more. We offer tailored solutions for businesses across various domains such as Digital Marketing, Blockchain, E-Commerce, and more.",
    openGraph: {
        title: "Top Web Development Services | CHORN",
        description: "CHORN provides cutting-edge web development services with expertise in popular frameworks like Next.js, React, Angular, and more. We cater to diverse business needs including Digital Marketing, E-Commerce, Blockchain, and more.",
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
        description: "Discover CHORN’s expert web development services. From Next.js to Angular and beyond, we offer solutions for all business needs including Digital Marketing, Blockchain, E-Commerce, and more.",
        images: ["https://chorn.in.th/chorn-images/metadata/frontend-development-services.png"],
    },
    keywords: [
        "CHORN", "web development services", "Next.js", "React", "Angular", "Vue", "HTML5", "CSS3", "Node.js",
        ".NET Core API", "C#", "Java", "Spring Boot", "Python", "Flask", "Django", "Go-lang", "PHP", "Symfony",
        "Laravel", "AWS", "Azure", "GCP", "Digital Ocean", "Digital Marketing", "Blockchain", "DeFi",
        "Education Services", "E-Commerce", "Entrepreneur", "Restaurant", "Health Services", "Social Network"
    ],
};

const Page = () => {
    return (
        <>
            <Navbar/>

            <PageBanner
                pageTitle="Web Development Service"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Web Development"
                BGImage="/images/page-banner/page-banner-1.jpg"
            />

            <ServicesCardFrontEnd/>

            <ServicesCardFullStack/>

            <CloudExperience/>

            <WeWorkForIndustries/>

            <Footer/>
        </>
    );
};

export default Page;
