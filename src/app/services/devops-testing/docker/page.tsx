import React from "react";
import Navbar from "../../../../components/Layouts/Navbar";
import PageBanner from "../../../../components/Common/PageBanner";
import Footer from "../../../../components/Layouts/Footer";
import CloudExperience from "@/components/Common/CloudExperience";
import ServicesDetailsDocker from "@/components/Services/devops-testing/docker/ServicesDetailsDocker";
import {INFO} from "@/data/INFO";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Docker DevOps Services | CHORN",
    description: "CHORN offers Docker-based DevOps services for efficient containerization and scalable application deployment.",
    alternates: {
        canonical: "https://chorn.in.th/services/devops-testing/docker/",
    },
    openGraph: {
        title: "Docker DevOps Services | CHORN",
        description: "Leverage Docker for containerization and scalable software deployment with CHORN’s expert DevOps services.",
        images: [
            {
                url: "https://chorn.in.th/chorn-images/metadata/services/devops-testing/docker.png",
                width: 1200,
                height: 630,
                alt: "Docker DevOps Banner"
            }
        ],
        url: "https://chorn.in.th/services/devops-testing/docker/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Docker DevOps Services | CHORN",
        description: "Expert Docker DevOps services from CHORN for containerization and scalable application deployment.",
        images: [
            "https://chorn.in.th/chorn-images/metadata/services/devops-testing/docker.png",
        ],
    },
    keywords: [
        "Docker DevOps", "Docker services", "containerization", "CHORN", "DevOps", "scalable deployment",
        "custom software development", "cloud-based applications", "DevOps thailand", "docker containers"
    ]
};

const Page = () => {

    return (
        <>
            <Navbar/>

            <PageBanner
                pageTitle={INFO.DEVOPS_TESTING_INFO.additions[0].details[0].title}
                homePageUrl="/"
                homePageText="Home"
                activePageText={INFO.DEVOPS_TESTING_INFO.title}
                BGImage={INFO.IMAGES.pageBanner.cover1.path}
            />

            <ServicesDetailsDocker/>

            <CloudExperience/>

            <Footer/>
        </>
    );
};

export default Page;
