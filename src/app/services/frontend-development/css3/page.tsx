import React from "react";
import Navbar from "../../../../components/Layouts/Navbar";
import PageBanner from "../../../../components/Common/PageBanner";
import Footer from "../../../../components/Layouts/Footer";
import ServicesDetailsCss3 from "@/components/Services/frontend-development/css3/ServicesDetailsCss3";
import CloudExperience from "@/components/Common/CloudExperience";
import {INFO} from "@/data/INFO";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/SchemaMarkup/SchemaMarkupServicePage";

export const metadata: Metadata = {
    title: "CSS3 Development Services | CHORN",
    description: "Enhance your web applications with CHORN’s CSS3 development services for modern and visually appealing designs.",
    alternates: {
        canonical: "https://chorn.in.th/services/frontend-development/css3/",
    },
    openGraph: {
        title: "CSS3 Development | CHORN",
        description: "CHORN offers CSS3 development services to create stylish and responsive web designs.",
        images: [
            {
                url: "https://chorn.in.th/chorn-images/metadata/services/frontend-development/css3-development-service.png",
                width: 1200,
                height: 630,
                alt: "CSS3 Development Banner"
            }
        ],
        url: "https://chorn.in.th/services/frontend-development/css3/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "CSS3 Development Services | CHORN",
        description: "Create visually stunning web designs with CSS3. CHORN provides expert CSS3 development services.",
        images: [
            "https://chorn.in.th/chorn-images/metadata/services/frontend-development/css3-development-service.png",
        ],
    },
    keywords: ["CSS3 development", "CSS3 services", "CHORN", "frontend development"]
};

const Page = () => {

    return (
        <>
            <Navbar/>

            <PageBanner
                pageTitle={INFO.FRONT_END_EXPERIENCE_INFO.additions[5].details[0].title}
                homePageUrl="/"
                homePageText="Home"
                activePageText={INFO.FRONT_END_EXPERIENCE_INFO.title}
                BGImage={INFO.IMAGES.pageBanner.cover1.path}
            />

            <ServicesDetailsCss3/>

            <CloudExperience/>

            <Footer/>

            <SchemaMarkupServicePage
                name="CSS3 Development Services | CHORN"
                description="Enhance your web applications with CHORN’s CSS3 development services for modern and visually appealing designs."
                url="https://chorn.in.th/services/frontend-development/css3/"
            />
        </>
    );
};

export default Page;
