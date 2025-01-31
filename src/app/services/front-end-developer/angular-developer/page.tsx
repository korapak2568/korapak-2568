import React from "react";
import Navbar from "../../../../components/Layouts/Navbar";
import PageBanner from "../../../../components/Common/PageBanner";
import Footer from "../../../../components/Layouts/Footer";
import ServicesDetailsAngular from "@/components/Services/frontend-development/angular/ServicesDetailsAngular";
import CloudExperience from "@/components/Common/CloudExperience";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {Info} from "@/data/info/Info";
import {Version} from "@/data/Version";

export const metadata: Metadata = {
    title: "Angular Development Services | CHORN",
    description: "Expert Angular development services by CHORN. Build dynamic, scalable, and high-performance web applications using Angular.",
    alternates: {
        canonical: "https://chorn.in.th/services/front-end-developer/angular-developer/",
    },
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Angular Development | CHORN",
        description: "CHORN offers expert Angular development services to create fast, scalable, and dynamic web applications.",
        images: [
            {
                url: "https://chorn.in.th/chorn-images/metadata/services/frontend-development/angular-development-service.png" + Version.ogImage,
                width: 1200,
                height: 630,
                alt: "Angular Development Banner"
            }
        ],
        url: "https://chorn.in.th/services/front-end-developer/angular-developer/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Angular Development Services | CHORN",
        description: "Elevate your web applications with expert Angular development services from CHORN.",
        images: [
            "https://chorn.in.th/chorn-images/metadata/services/frontend-development/angular-development-service.png" + Version.ogImage,
        ],
    },
    keywords: [
        // Core Angular & service Keywords
        "Angular development", "Angular services", "Angular developer", "Angular development Thailand",
        "Angular development Bangkok", "Angular development Chiangmai", "Angular development company",
        "custom Angular development", "custom software development", "enterprise Angular applications",

        // Web & Application Development Keywords
        "frontend development", "single-page applications", "dynamic user interfaces",
        "high-performance applications", "scalable web applications", "custom web applications",

        // Developer & Location-Specific Keywords
        "web developer", "full stack developer", "software engineer", "software developer Thailand",
        "Angular developer Thailand", "frontend developer Thailand", "web developer Bangkok", "Angular developer Chiangmai",
        "Angular developer Bangkok", "Angular development company",

        // Brand & Innovation Keywords
        "CHORN", "digital innovation", "enterprise software",

        // Google
        "responsive web design in angular", "responsive web design angular", "angular responsive web design"
    ]

};

const Page = () => {

    return (
        <>
            <Navbar/>

            <PageBanner pageTitle={Info.FrontEnd.angular.features[0].title}/>

            <ServicesDetailsAngular/>

            <CloudExperience/>

            <Footer/>

            <SchemaMarkupServicePage
                name="Angular Development Services | CHORN"
                description="Expert Angular development services by CHORN. Build dynamic, scalable, and high-performance web applications using Angular."
                url="https://chorn.in.th/services/front-end-developer/angular-developer/"
            />
        </>
    );
};

export default Page;
