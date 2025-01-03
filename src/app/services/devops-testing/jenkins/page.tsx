import React from "react";
import Navbar from "../../../../components/Layouts/Navbar";
import PageBanner from "../../../../components/Common/PageBanner";
import Footer from "../../../../components/Layouts/Footer";
import CloudExperience from "@/components/Common/CloudExperience";
import ServicesDetailsJenkins from "@/components/Services/devops-testing/jenkins/ServicesDetailsJenkins";
import {Info} from "@/data/info/Info";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";

export const metadata: Metadata = {
    title: "Jenkins DevOps Services | CHORN",
    description: "CHORN offers Jenkins-based DevOps services for automating builds, testing, and deployment in your development pipeline.",
    alternates: {
        canonical: "https://chorn.in.th/services/devops-testing/jenkins/",
    },
    openGraph: {
        title: "Jenkins DevOps Services | CHORN",
        description: "Automate your development process with CHORN’s Jenkins DevOps services for continuous integration and deployment.",
        images: [
            {
                url: "https://chorn.in.th/chorn-images/metadata/services/devops-testing/jenkins.webp",
                width: 1200,
                height: 630,
                alt: "Jenkins DevOps Banner"
            }
        ],
        url: "https://chorn.in.th/services/devops-testing/jenkins/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Jenkins DevOps Services | CHORN",
        description: "Enhance your software development lifecycle with Jenkins-based DevOps services from CHORN for CI/CD automation.",
        images: [
            "https://chorn.in.th/chorn-images/metadata/services/devops-testing/jenkins.webp",
        ],
    },
    keywords: [
        "Jenkins DevOps", "Jenkins services", "CI/CD automation", "DevOps", "continuous integration", "DevOps thailand",
        "Jenkins pipeline", "automated testing", "build automation", "custom software development"
    ]
};

const Page = () => {

    return (
        <>
            <Navbar/>

            <PageBanner
                pageTitle={Info.DevOps.additions[4].details[0].title}
                homePageUrl="/"
                homePageText="Home"
                activePageText={Info.DevOps.title}
                BGImage={Info.Images.pageBanner.cover1.path}
            />

            <ServicesDetailsJenkins/>

            <CloudExperience/>

            <Footer/>

            <SchemaMarkupServicePage
                name="Jenkins DevOps Services | CHORN"
                description="CHORN offers Jenkins-based DevOps services for automating builds, testing, and deployment in your development pipeline."
                url="https://chorn.in.th/services/devops-testing/jenkins/"
            />
        </>
    );
};

export default Page;
