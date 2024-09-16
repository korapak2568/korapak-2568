import React from "react";
import Navbar from "../../../../components/Layouts/Navbar";
import PageBanner from "../../../../components/Common/PageBanner";
import Footer from "../../../../components/Layouts/Footer";
import CloudExperience from "@/components/Common/CloudExperience";
import ServicesDetailsGitLab from "@/components/Services/devops-testing/gitlab/ServicesDetailsGitLab";
import {INFO} from "@/data/INFO";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";

export const metadata: Metadata = {
    title: "GitLab DevOps Services | CHORN",
    description: "CHORN provides GitLab-based DevOps services for continuous integration, automation, and version control solutions.",
    alternates: {
        canonical: "https://chorn.in.th/services/devops-testing/gitlab/",
    },
    openGraph: {
        title: "GitLab DevOps Services | CHORN",
        description: "Boost your DevOps pipeline with CHORN’s GitLab services for CI/CD, version control, and automation.",
        images: [
            {
                url: "https://chorn.in.th/chorn-images/metadata/services/devops-testing/gitlab.png",
                width: 1200,
                height: 630,
                alt: "GitLab DevOps Banner"
            }
        ],
        url: "https://chorn.in.th/services/devops-testing/gitlab/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "GitLab DevOps Services | CHORN",
        description: "Leverage GitLab DevOps services from CHORN for continuous integration, version control, and workflow automation.",
        images: [
            "https://chorn.in.th/chorn-images/metadata/services/devops-testing/gitlab.png",
        ],
    },
    keywords: [
        "GitLab DevOps", "GitLab services", "CI/CD", "version control", "DevOps", "automation", "DevOps pipeline",
        "DevOps thailand", "GitLab automation", "continuous integration"
    ]
};

const Page = () => {

    return (
        <>
            <Navbar/>

            <PageBanner
                pageTitle={INFO.DEVOPS_TESTING_INFO.additions[3].details[0].title}
                homePageUrl="/"
                homePageText="Home"
                activePageText={INFO.DEVOPS_TESTING_INFO.title}
                BGImage={INFO.IMAGES.pageBanner.cover1.path}
            />

            <ServicesDetailsGitLab/>

            <CloudExperience/>

            <Footer/>

            <SchemaMarkupServicePage
                name="GitLab DevOps Services | CHORN"
                description="CHORN provides GitLab-based DevOps services for continuous integration, automation, and version control solutions."
                url="https://chorn.in.th/services/devops-testing/gitlab/"
            />
        </>
    );
};

export default Page;
