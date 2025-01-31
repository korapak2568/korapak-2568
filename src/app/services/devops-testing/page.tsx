import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import WeWorkForIndustries from "../../../components/Common/WeWorkForIndustries";
import CloudExperience from "@/components/Common/CloudExperience";
import ServicesCardDevOpsTesting from "@/components/Services/devops-testing/ServicesCardDevOpsTesting";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {Version} from "@/data/Version";

export const metadata: Metadata = {
    title: "DevOps & Testing Services | CHORN",
    description: "CHORN offers expert DevOps and testing services to streamline your software development process. Ensure high performance and quality with our continuous integration, automated testing, and cloud-based solutions.",
    alternates: {
        canonical: "https://chorn.in.th/services/devops-testing/",
    },
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "DevOps & Testing Services | CHORN",
        description: "Leverage CHORN’s DevOps and testing services to enhance your software delivery with automation, continuous integration, and reliable testing solutions.",
        images: [
            {
                url: "https://chorn.in.th/chorn-images/metadata/devops-testing-services.png" + Version.ogImage,
                width: 1360,
                height: 810,
                alt: "DevOps & Testing Services Banner"
            }
        ],
        url: "https://chorn.in.th/services/devops-testing/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "DevOps & Testing Services | CHORN",
        description: "Optimize your software development lifecycle with CHORN’s DevOps and testing services, including automation, CI/CD, and quality assurance testing.",
        images: [
            "https://chorn.in.th/chorn-images/metadata/devops-testing-services.png" + Version.ogImage
        ],
    },
    keywords: [
        "DevOps services", "software testing", "continuous integration", "CI/CD pipeline", "automated testing",
        "cloud-based solutions", "custom software development", "DevOps consulting", "software quality assurance",
        "performance testing", "load testing", "security testing", "QA automation", "DevOps thailand",
        "DevOps engineer", "testing services thailand", "IT infrastructure management", "software development lifecycle",
        "software developer thailand", "DevOps tools", "scalable applications", "software testing solutions",
        "full stack developer", "cloud infrastructure"
    ],
};

const Page = () => {
    return (
        <>
            <Navbar/>

            <PageBanner pageTitle="DevOps and Testing" />

            <ServicesCardDevOpsTesting/>

            <CloudExperience/>

            <WeWorkForIndustries/>

            <Footer/>

            <SchemaMarkupServicePage
                name="DevOps & Testing Services | CHORN"
                description="CHORN offers expert DevOps and testing services to streamline your software development process. Ensure high performance and quality with our continuous integration, automated testing, and cloud-based solutions."
                url="https://chorn.in.th/services/devops-testing/"
            />
        </>
    );
};

export default Page;
