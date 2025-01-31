import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import WeWorkForIndustries from "../../../components/Common/WeWorkForIndustries";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import CloudExperience from "@/components/Common/CloudExperience";
import ServicesCardCloudInfrastructureSystemsArchitecture
    from "@/components/Services/cloud-infrastructure-systems-architecture/ServicesCardCloudInfrastructureSystemsArchitecture";
import {Version} from "@/data/Version";

export const metadata: Metadata = {
    title: "Cloud Solution Architecture & Systems Analysis | CHORN | AWS, Azure, GCP, DigitalOcean",
    description: "CHORN delivers expert cloud solution architecture and system analysis services. We optimize cloud infrastructures across AWS, Azure, GCP, and DigitalOcean, ensuring performance, scalability, and cost-efficiency.",
    alternates: {
        canonical: "https://chorn.in.th/services/cloud-solution-architecture-systems-analysis/",
    },
    openGraph: {
        title: "Cloud Solution Architecture & Systems Analysis | CHORN",
        description: "Explore CHORN’s cloud solution architecture and systems analysis services. We design resilient, scalable, and optimized cloud solutions across AWS, Azure, GCP, and DigitalOcean.",
        images: [
            {
                url: "https://chorn.in.th/chorn-images/metadata/banner-logo.png" + Version.ogImage,
                width: 1200,
                height: 630,
                alt: "Cloud Solution Architecture and Systems Analysis Banner",
            },
        ],
        url: "https://chorn.in.th/services/cloud-solution-architecture-systems-analysis/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Cloud Solution Architecture & Systems Analysis | CHORN",
        description: "Optimize your cloud infrastructure with CHORN’s cloud solution architecture and systems analysis services, covering AWS, Azure, GCP, and DigitalOcean.",
        images: [
            "https://chorn.in.th/chorn-images/metadata/banner-logo.png" + Version.ogImage,
        ],
    },
    keywords: [
        // Core Cloud Architecture Keywords
        "cloud solution architecture", "system analysis", "AWS architecture", "Azure cloud solutions",
        "GCP architecture", "DigitalOcean infrastructure", "cloud optimization", "multi-cloud strategies",
        "cloud scalability", "cloud infrastructure design", "cloud security analysis",

        // service-Specific Keywords
        "AWS cloud consulting", "Azure system integration", "GCP cost optimization", "DigitalOcean solutions",
        "cloud migration services", "cloud performance tuning", "multi-cloud integration", "cloud-native applications",

        // Developer & Location-Specific Keywords
        "cloud architect Thailand", "AWS architect Thailand", "Azure architect Thailand", "GCP architect Thailand",
        "DigitalOcean developer Thailand", "system analyst Thailand", "cloud infrastructure expert Thailand",

        // Brand & Innovation Keywords
        "CHORN", "cloud solutions", "digital innovation", "cloud infrastructure design", "scalable cloud systems"
    ]
};

const Page = () => {
    return (
        <>
            <Navbar/>

            <PageBanner pageTitle="Cloud Solutions" />

            <ServicesCardCloudInfrastructureSystemsArchitecture/>

            <CloudExperience/>

            <WeWorkForIndustries/>

            <Footer/>

            <SchemaMarkupServicePage
                name="Cloud Solution Architecture & Systems Analysis | CHORN | AWS, Azure, GCP, DigitalOcean"
                description="CHORN delivers expert cloud solution architecture and system analysis services. We optimize cloud infrastructures across AWS, Azure, GCP, and DigitalOcean, ensuring performance, scalability, and cost-efficiency."
                url="https://chorn.in.th/services/cloud-solution-architecture-systems-analysis/"
            />
        </>
    );
};

export default Page;
