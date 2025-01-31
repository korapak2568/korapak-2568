import React from "react";
import Navbar from "../../../../components/Layouts/Navbar";
import PageBanner from "../../../../components/Common/PageBanner";
import Footer from "../../../../components/Layouts/Footer";
import ServicesDetailsCss3 from "@/components/Services/frontend-development/css3/ServicesDetailsCss3";
import CloudExperience from "@/components/Common/CloudExperience";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {Info} from "@/data/info/Info";
import {Version} from "@/data/Version";

export const metadata: Metadata = {
    title: "CSS3 Development Services | CHORN",
    description: "Enhance your web applications with CHORN’s CSS3 development services for modern and visually appealing designs.",
    alternates: {
        canonical: "https://chorn.in.th/services/front-end-developer/css3-developer/",
    },
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "CSS3 Development | CHORN",
        description: "CHORN offers CSS3 development services to create stylish and responsive web designs.",
        images: [
            {
                url: "https://chorn.in.th/chorn-images/metadata/services/frontend-development/css3-development-service.png" + Version.ogImage,
                width: 1200,
                height: 630,
                alt: "CSS3 Development Banner"
            }
        ],
        url: "https://chorn.in.th/services/front-end-developer/css3-developer/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "CSS3 Development Services | CHORN",
        description: "Create visually stunning web designs with CSS3. CHORN provides expert CSS3 development services.",
        images: [
            "https://chorn.in.th/chorn-images/metadata/services/frontend-development/css3-development-service.png" + Version.ogImage,
        ],
    },
    keywords: [
        // Core CSS3 Keywords
        "CSS3 development", "CSS3 services", "CSS3 developer", "custom CSS3 development",
        "responsive web design", "dynamic user interfaces", "high-performance CSS3 applications",
        "custom web design", "modern CSS3 techniques", "custom software development",

        // Framework-Specific Keywords
        "Tailwind CSS development", "Bootstrap development", "Bulma development", "Material Design CSS",
        "Tailwind CSS services", "Bootstrap web design", "Bulma UI development", "Material Design implementation",
        "custom Tailwind CSS design", "custom Bootstrap development", "custom Bulma styling", "custom Material Design themes",

        // Combination Keywords
        "CSS3 Tailwind development", "CSS3 Bootstrap development", "CSS3 Bulma development",
        "CSS3 Material Design development", "responsive Tailwind CSS", "Bootstrap responsive design",
        "Bulma responsive web design", "Material Design CSS3 components",

        // Developer & Location-Specific Keywords
        "CSS3 developer Thailand", "CSS3 developer Bangkok", "CSS3 developer Chiangmai",
        "Tailwind CSS developer Thailand", "Bootstrap developer Thailand", "Bulma developer Thailand",
        "Material Design developer Thailand", "senior CSS3 developer Thailand", "Principal CSS3 developer Thailand",
        "web developer Thailand", "software engineer Thailand",

        // Brand & Innovation Keywords
        "CHORN", "digital innovation", "enterprise software", "scalable web applications",

        // Google
        "css3 development services", "responsive web design", "dynamic user interfaces",
    ]
};

const Page = () => {

    return (
        <>
            <Navbar/>

            <PageBanner pageTitle={Info.FrontEnd.css3.features[0].title}/>

            <ServicesDetailsCss3/>

            <CloudExperience/>

            <Footer/>

            <SchemaMarkupServicePage
                name="CSS3 Development Services | CHORN"
                description="Enhance your web applications with CHORN’s CSS3 development services for modern and visually appealing designs."
                url="https://chorn.in.th/services/front-end-developer/css3-developer/"
            />
        </>
    );
};

export default Page;
