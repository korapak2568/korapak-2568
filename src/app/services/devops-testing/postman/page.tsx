import React from "react";
import Navbar from "../../../../components/Layouts/Navbar";
import PageBanner from "../../../../components/Common/PageBanner";
import Footer from "../../../../components/Layouts/Footer";
import CloudExperience from "@/components/Common/CloudExperience";
import ServicesDetailsPostman from "@/components/Services/devops-testing/postman/ServicesDetailsPostman";
import {INFO} from "@/data/INFO";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Postman API Testing Services | CHORN",
    description: "CHORN provides API testing services using Postman to ensure the reliability and performance of your web services.",
    openGraph: {
        title: "Postman API Testing Services | CHORN",
        description: "Ensure your APIs function as expected with CHORN’s Postman-based API testing services.",
        images: [
            {
                url: "https://chorn.in.th/chorn-images/services-details/devops-testing/service-detail-postman.png",
                width: 500,
                height: 500,
                alt: "Postman API Testing Banner"
            }
        ],
        url: "https://chorn.in.th/services/devops-testing/postman/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Postman API Testing Services | CHORN",
        description: "CHORN offers Postman-based API testing services to validate your web services’ reliability and performance.",
        images: ["https://chorn.in.th/chorn-images/services-details/devops-testing/service-detail-postman.png",],
    },
    keywords: [
        "Postman API testing", "Postman services", "API testing", "DevOps", "automated API testing", "CHORN",
        "web services testing", "API performance", "custom software development", "DevOps thailand"
    ]
};

const Page = () => {

    return (
        <>
            <Navbar/>

            <PageBanner
                pageTitle={INFO.DEVOPS_TESTING_INFO.additions[5].details[0].title}
                homePageUrl="/"
                homePageText="Home"
                activePageText={INFO.DEVOPS_TESTING_INFO.additions[5].details[0].title}
                BGImage={INFO.IMAGES.pageBanner.cover1.path}
            />

            <ServicesDetailsPostman/>

            <CloudExperience/>

            <Footer/>
        </>
    );
};

export default Page;
