import React from "react";
import Navbar from "../../../../components/Layouts/Navbar";
import PageBanner from "../../../../components/Common/PageBanner";
import Footer from "../../../../components/Layouts/Footer";
import ServicesDetailsVue from "@/components/Services/frontend-development/vue/ServicesDetailsVue";
import CloudExperience from "@/components/Common/CloudExperience";
import {INFO} from "@/data/INFO";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/SchemaMarkup/SchemaMarkupServicePage";

export const metadata: Metadata = {
    title: "Vue.js Development Services | CHORN",
    description: "CHORN specializes in Vue.js development to create interactive and scalable web applications.",
    alternates: {
        canonical: "https://chorn.in.th/services/frontend-development/vue/",
    },
    openGraph: {
        title: "Vue.js Development | CHORN",
        description: "Expert Vue.js development services by CHORN for building modern web applications.",
        images: [
            {
                url: "https://chorn.in.th/chorn-images/metadata/services/frontend-development/vue-development-service.png",
                width: 1200,
                height: 630,
                alt: "Vue.js Development Banner"
            }
        ],
        url: "https://chorn.in.th/services/frontend-development/vue/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Vue.js Development Services | CHORN",
        description: "Enhance your web applications with Vue.js. CHORN offers expert Vue.js development services.",
        images: [
            "https://chorn.in.th/chorn-images/metadata/services/frontend-development/vue-development-service.png",
        ],
    },
    keywords: [
        // Core Vue.js & Service Keywords
        "Vue.js development", "Vue.js services", "Vue.js developer", "custom Vue.js development", "Vue.js applications",
        "Vue.js full stack development", "Vue.js single-page applications", "Vue.js user interfaces", "custom web applications",
        "custom software development",

        // Web & Application Development Keywords
        "scalable web applications", "frontend development", "high-performance web applications",
        "dynamic user interfaces", "single-page applications", "Vue.js developer",

        // Developer & Location-Specific Keywords
        "Vue.js developer Thailand", "Vue.js developer Bangkok", "Vue.js developer Chiangmai", "frontend developer Thailand",
        "web developer Bangkok", "software engineer", "software developer Thailand",

        // Brand & Innovation Keywords
        "CHORN", "digital innovation", "enterprise software"
    ]

};

const Page = () => {
    return (
        <>
            <Navbar/>

            <PageBanner
                pageTitle={INFO.FRONT_END_EXPERIENCE_INFO.additions[3].details[0].title}
                homePageUrl="/"
                homePageText="Home"
                activePageText={INFO.FRONT_END_EXPERIENCE_INFO.title}
                BGImage={INFO.IMAGES.pageBanner.cover1.path}
            />

            <ServicesDetailsVue/>

            <CloudExperience/>

            <Footer/>

            <SchemaMarkupServicePage
                name="Vue.js Development Services | CHORN"
                description="CHORN specializes in Vue.js development to create interactive and scalable web applications."
                url="https://chorn.in.th/services/frontend-development/vue/"
            />
        </>
    );
};

export default Page;
