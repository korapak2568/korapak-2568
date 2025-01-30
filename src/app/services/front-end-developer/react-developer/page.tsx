import React from "react";
import Navbar from "../../../../components/Layouts/Navbar";
import PageBanner from "../../../../components/Common/PageBanner";
import Footer from "../../../../components/Layouts/Footer";
import ServicesDetailsReact from "@/components/Services/frontend-development/react/ServicesDetailsReact";
import CloudExperience from "@/components/Common/CloudExperience";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {Info} from "@/data/info/Info";

export const metadata: Metadata = {
    title: "React Development Services | CHORN",
    description: "CHORN provides top-tier React development services. Build dynamic and responsive user interfaces with React.",
    alternates: {
        canonical: "https://chorn.in.th/services/front-end-developer/react-developer/",
    },
    openGraph: {
        title: "React Development | CHORN",
        description: "Enhance your web apps with React. CHORN offers expert React development services for high-performance applications.",
        images: [
            {
                url: "https://chorn.in.th/chorn-images/metadata/services/frontend-development/react-development-service.png",
                width: 1200,
                height: 630,
                alt: "React Development Banner"
            }
        ],
        url: "https://chorn.in.th/services/front-end-developer/react-developer",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "React Development Services | CHORN",
        description: "Expert React development services by CHORN. Create engaging user interfaces with React.",
        images: [
            "https://chorn.in.th/chorn-images/metadata/services/frontend-development/react-development-service.png",
        ],
    },
    keywords: [
        // Core React & service Keywords
        "React development", "React services", "React developer", "custom React development", "React.js applications",
        "React full stack development", "React single-page applications", "React user interfaces", "custom web applications",
        "custom software development",

        // Web & Application Development Keywords
        "scalable web applications", "frontend development", "high-performance web applications",
        "dynamic user interfaces", "single-page applications", "React.js developer",

        // Developer & Location-Specific Keywords
        "React developer Thailand", "React developer Bangkok", "React developer Chiangmai", "frontend developer Thailand",
        "web developer Bangkok", "software engineer", "software developer Thailand",

        // Brand & Innovation Keywords
        "CHORN", "digital innovation", "enterprise software"
    ]

};

const Page = () => {
    return (
        <>
            <Navbar/>

            <PageBanner pageTitle={Info.FrontEnd.react.features[0].title}/>

            <ServicesDetailsReact/>

            <CloudExperience/>

            <Footer/>

            <SchemaMarkupServicePage
                name="React Development Services | CHORN"
                description="CHORN provides top-tier React development services. Build dynamic and responsive user interfaces with React."
                url="https://chorn.in.th/services/front-end-developer/react-developer/"
            />
        </>
    );
};

export default Page;
