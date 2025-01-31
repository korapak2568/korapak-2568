import React from "react";
import Navbar from "../../../../components/Layouts/Navbar";
import PageBanner from "../../../../components/Common/PageBanner";
import Footer from "../../../../components/Layouts/Footer";
import CloudExperience from "@/components/Common/CloudExperience";
import ServicesDetailsKubernetes from "@/components/Services/devops-testing/kubernetes/ServicesDetailsKubernetes";
import {Info} from "@/data/info/Info";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {Version} from "@/data/Version";

export const metadata: Metadata = {
    title: "Kubernetes DevOps Services | CHORN",
    description: "CHORN provides Kubernetes-based DevOps services for automating deployment, scaling, and management of containerized applications.",
    alternates: {
        canonical: "https://chorn.in.th/services/devops-testing/kubernetes/",
    },
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Kubernetes DevOps Services | CHORN",
        description: "Optimize your infrastructure with CHORN’s Kubernetes DevOps services for automated scaling and management of applications.",
        images: [
            {
                url: "https://chorn.in.th/chorn-images/metadata/services/devops-testing/kubernetes.png" + Version.ogImage,
                width: 1200,
                height: 630,
                alt: "Kubernetes DevOps Banner"
            }
        ],
        url: "https://chorn.in.th/services/devops-testing/kubernetes/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Kubernetes DevOps Services | CHORN",
        description: "Leverage Kubernetes DevOps expertise by CHORN for automating and managing scalable containerized applications.",
        images: [
            "https://chorn.in.th/chorn-images/metadata/services/devops-testing/kubernetes.png" + Version.ogImage,
        ],
    },
    keywords: [
        "Kubernetes DevOps", "Kubernetes services", "container orchestration", "CHORN", "DevOps",
        "scalable application management", "automated scaling", "DevOps thailand", "cloud-native applications"
    ]
};

const Page = () => {

    return (
        <>
            <Navbar/>

            <PageBanner pageTitle={Info.DevOps.kubernetes.features[0].title}/>

            <ServicesDetailsKubernetes/>

            <CloudExperience/>

            <Footer/>

            <SchemaMarkupServicePage
                name="Kubernetes DevOps Services | CHORN"
                description="CHORN provides Kubernetes-based DevOps services for automating deployment, scaling, and management of containerized applications."
                url="https://chorn.in.th/services/devops-testing/kubernetes/"
            />
        </>
    );
};

export default Page;
