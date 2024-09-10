import React from "react";
import Navbar from "../../../../components/Layouts/Navbar";
import PageBanner from "../../../../components/Common/PageBanner";
import Footer from "../../../../components/Layouts/Footer";
import CloudExperience from "@/components/Common/CloudExperience";
import ServicesDetailsKubernetes from "@/components/Services/devops-testing/kubernetes/ServicesDetailsKubernetes";
import {INFO} from "@/data/INFO";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Kubernetes DevOps Services | CHORN",
    description: "CHORN provides Kubernetes-based DevOps services for automating deployment, scaling, and management of containerized applications.",
    openGraph: {
        title: "Kubernetes DevOps Services | CHORN",
        description: "Optimize your infrastructure with CHORN’s Kubernetes DevOps services for automated scaling and management of applications.",
        images: [
            {
                url: "https://chorn.in.th/chorn-images/services-details/devops-testing/service-detail-kubernetes.png",
                width: 500,
                height: 500,
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
        images: ["https://chorn.in.th/chorn-images/services-details/devops-testing/service-detail-kubernetes.png",],
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

            <PageBanner
                pageTitle={INFO.DEVOPS_TESTING_INFO.additions[1].details[0].title}
                homePageUrl="/"
                homePageText="Home"
                activePageText={INFO.DEVOPS_TESTING_INFO.title}
                BGImage={INFO.IMAGES.pageBanner.cover1.path}
            />

            <ServicesDetailsKubernetes/>

            <CloudExperience/>

            <Footer/>
        </>
    );
};

export default Page;
