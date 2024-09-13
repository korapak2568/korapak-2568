import React from "react";
import Navbar from "../../../../components/Layouts/Navbar";
import PageBanner from "../../../../components/Common/PageBanner";
import Footer from "../../../../components/Layouts/Footer";
import ServicesDetailsPhp from "@/components/Services/fullstack-development/php/ServicesDetailsPhp";
import CloudExperience from "@/components/Common/CloudExperience";
import {INFO} from "@/data/INFO";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/SchemaMarkup/SchemaMarkupServicePage";

export const metadata: Metadata = {
    title: "PHP Full Stack Development | CHORN",
    description: "CHORN offers PHP full stack development services for building dynamic and scalable web applications.",
    alternates: {
        canonical: "https://chorn.in.th/services/fullstack-development/php/",
    },
    openGraph: {
        title: "PHP Development | CHORN",
        description: "Leverage CHORN’s PHP full stack development services to build scalable and dynamic web applications.",
        images: [
            {
                url: "https://chorn.in.th/chorn-images/metadata/services/fullstack-development/php-development-service.png",
                width: 1200,
                height: 630,
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
        images: [
            "https://chorn.in.th/chorn-images/metadata/services/fullstack-development/php-development-service.png",
        ],
    },
    keywords: [
        // Core PHP & Service Keywords
        "PHP development", "PHP services", "PHP developer", "custom PHP development", "PHP web applications",
        "PHP full stack development", "enterprise PHP applications", "custom software development",

        // PHP Frameworks
        "Symfony development", "Laravel development", "Yii Framework development", "Phalcon development",
        "custom Symfony development", "custom Laravel development", "custom Yii development", "custom Phalcon development",

        // Web & Application Development Keywords
        "scalable web applications", "backend development", "high-performance web applications",
        "custom web applications", "API development", "enterprise software", "PHP frameworks",

        // Developer & Location-Specific Keywords
        "PHP developer Thailand", "PHP developer Bangkok", "PHP developer Chiangmai",
        "backend developer Thailand", "full stack developer Thailand", "software engineer", "software developer Thailand",

        // Brand & Innovation Keywords
        "CHORN", "digital innovation", "enterprise software"
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

            <SchemaMarkupServicePage
                name="PHP Full Stack Development | CHORN"
                description="CHORN offers PHP full stack development services for building dynamic and scalable web applications."
                url="https://chorn.in.th/services/fullstack-development/php/"
            />
        </>
    );
};

export default Page;
