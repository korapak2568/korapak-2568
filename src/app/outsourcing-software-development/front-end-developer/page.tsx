import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import WeWorkForIndustries from "../../../components/Common/WeWorkForIndustries";
import ServicesCardFrontEnd from "../../../components/Services/frontend-development/ServicesCardFrontEnd";
import CloudExperience from "@/components/Common/CloudExperience";
import {INFO} from "@/data/INFO";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/SchemaMarkup/SchemaMarkupServicePage";

export const metadata: Metadata = {
    title: "Frontend Development Services | CHORN",
    description: "CHORN provides expert frontend development services, specializing in modern frameworks like Next.js, React, Angular, Vue, HTML5, and CSS3. Build responsive and scalable websites with cutting-edge technologies.",
    alternates: {
        canonical: "https://chorn.in.th/outsourcing-software-development/front-end-developer/",
    },
    openGraph: {
        title: "Frontend Development Services | CHORN",
        description: "CHORN offers frontend development services using modern technologies like Next.js, React, Angular, Vue, HTML5, and CSS3 to build fast, responsive, and scalable websites.",
        images: [
            {
                url: "https://chorn.in.th/chorn-images/metadata/frontend-development-services.png",
                width: 1360,
                height: 810,
                alt: "Frontend Development Banner"
            }
        ],
        url: "https://chorn.in.th/outsourcing-software-development/front-end-developer/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Frontend Development Services | CHORN",
        description: "Expert frontend development services by CHORN, utilizing technologies like Next.js, React, Angular, Vue, HTML5, and CSS3 for responsive, scalable websites.",
        images: ["https://chorn.in.th/chorn-images/metadata/frontend-development-services.png"],
    },
    keywords: [
        // Core Frontend Development Keywords
        "frontend development", "frontend services", "frontend developer", "custom frontend development",
        "dynamic user interfaces", "single-page applications", "responsive web design",
        "high-performance front-end applications", "custom software development",

        // Senior/Principal Developer Keywords (Combined Frameworks)
        "Senior React developer", "Principal Angular developer", "Senior Vue.js developer",
        "Senior Angular Node.js developer", "Senior React Spring Boot developer",
        "Principal .NET Angular frontend developer", "Senior React frontend developer",

        // Framework-Specific Frontend Keywords
        "React development", "Angular development", "Vue.js development", "Next.js frontend development",
        "React.js development", "custom Angular frontend development", "React.js frontend applications",
        "Vue.js frontend services", "custom Vue.js development",

        // Developer & Location-Specific Keywords
        "frontend developer Thailand", "frontend developer Bangkok", "frontend developer Chiangmai",
        "Senior frontend developer Thailand", "Principal frontend developer Thailand",
        "web developer Thailand", "web developer Bangkok", "software engineer Thailand",

        // Brand & Innovation Keywords
        "CHORN", "digital innovation", "enterprise software", "scalable web applications"
    ]
};

const Page = () => {
    return (
        <>
            <Navbar/>

            <PageBanner
                pageTitle="Front End Development"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Front End Development"
                BGImage={INFO.IMAGES.pageBanner.cover1.path}
            />

            <ServicesCardFrontEnd/>

            <CloudExperience/>

            <WeWorkForIndustries/>

            <Footer/>

            <SchemaMarkupServicePage
                name="Frontend Development Services | CHORN"
                description="CHORN provides expert frontend development services, specializing in modern frameworks like Next.js, React, Angular, Vue, HTML5, and CSS3. Build responsive and scalable websites with cutting-edge technologies."
                url="https://chorn.in.th/outsourcing-software-development/front-end-developer/"
            />
        </>
    );
};

export default Page;
