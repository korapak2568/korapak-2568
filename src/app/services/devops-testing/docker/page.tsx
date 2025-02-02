import React from "react";
import Navbar from "../../../../components/Layouts/Navbar";
import PageBanner from "../../../../components/Common/PageBanner";
import Footer from "../../../../components/Layouts/Footer";
import CloudExperience from "@/components/Common/CloudExperience";
import ServicesDetailsDocker from "@/components/Services/devops-testing/docker/ServicesDetailsDocker";
import {Info} from "@/data/info/Info";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {ChornMetadata} from "@/data/metadata/ChornMetadata";

export const metadata: Metadata = {
    title: "Docker DevOps Services | CHORN",
    description: "CHORN offers Docker-based DevOps services for efficient containerization and scalable application deployment.",
    alternates: {
        canonical: "https://chorn.in.th/services/devops-testing/docker/",
    },
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Docker DevOps Services | CHORN",
        description: "Leverage Docker for containerization and scalable software deployment with CHORN’s expert DevOps services.",
        images: [
            {
                url: "https://chorn.in.th/chorn-images/metadata/services/devops-testing/docker.png" + ChornMetadata.ogImage,
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
            "https://chorn.in.th/chorn-images/metadata/services/devops-testing/docker.png" + ChornMetadata.ogImage,
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

            <PageBanner pageTitle={Info.DevOps.docker.features[0].title} />

            <ServicesDetailsDocker/>

            <CloudExperience/>

            <Footer/>

            <SchemaMarkupServicePage
                name="Docker DevOps Services | CHORN"
                description="CHORN offers Docker-based DevOps services for efficient containerization and scalable application deployment."
                url="https://chorn.in.th/services/devops-testing/docker/"
            />
        </>
    );
};

export default Page;
