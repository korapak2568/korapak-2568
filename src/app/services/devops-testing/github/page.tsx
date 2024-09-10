import React from "react";
import Navbar from "../../../../components/Layouts/Navbar";
import PageBanner from "../../../../components/Common/PageBanner";
import Footer from "../../../../components/Layouts/Footer";
import CloudExperience from "@/components/Common/CloudExperience";
import ServicesDetailsGitHub from "@/components/Services/devops-testing/github/ServicesDetailsGitHub";
import {INFO} from "@/data/INFO";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "GitHub DevOps Services | CHORN",
    description: "CHORN offers DevOps services integrating GitHub for version control, continuous integration, and automated workflows.",
    openGraph: {
        title: "GitHub DevOps Services | CHORN",
        description: "Enhance your development workflow with CHORN’s GitHub-based DevOps services for CI/CD and version control.",
        images: [
            {
                url: "https://chorn.in.th/chorn-images/metadata/services/devops-testing/github.png",
                width: 1200,
                height: 630,
                alt: "GitHub DevOps Banner"
            }
        ],
        url: "https://chorn.in.th/services/devops-testing/github/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "GitHub DevOps Services | CHORN",
        description: "Streamline your development with CHORN’s GitHub DevOps services for version control and CI/CD workflows.",
        images: [
            "https://chorn.in.th/chorn-images/metadata/services/devops-testing/github.png",
        ],
    },
    keywords: [
        "GitHub DevOps", "GitHub services", "version control", "CI/CD", "DevOps", "custom software development",
        "continuous integration", "DevOps thailand", "GitHub automation", "software development workflow"
    ]
};

const Page = () => {

    return (
        <>
            <Navbar/>

            <PageBanner
                pageTitle={INFO.DEVOPS_TESTING_INFO.additions[2].details[0].title}
                homePageUrl="/"
                homePageText="Home"
                activePageText={INFO.DEVOPS_TESTING_INFO.title}
                BGImage={INFO.IMAGES.pageBanner.cover1.path}
            />

            <ServicesDetailsGitHub/>

            <CloudExperience/>

            <Footer/>
        </>
    );
};

export default Page;
