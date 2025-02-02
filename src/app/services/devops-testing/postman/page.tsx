import React from "react";
import Navbar from "../../../../components/Layouts/Navbar";
import PageBanner from "../../../../components/Common/PageBanner";
import Footer from "../../../../components/Layouts/Footer";
import CloudExperience from "@/components/Common/CloudExperience";
import ServicesDetailsPostman from "@/components/Services/devops-testing/postman/ServicesDetailsPostman";
import {Info} from "@/data/info/Info";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {ChornMetadata} from "@/data/metadata/ChornMetadata";

export const metadata: Metadata = {
    title: "Postman API Testing Services | CHORN",
    description: "CHORN provides API testing services using Postman to ensure the reliability and performance of your web services.",
    alternates: {
        canonical: "https://chorn.in.th/services/devops-testing/postman/",
    },
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Postman API Testing Services | CHORN",
        description: "Ensure your APIs function as expected with CHORN’s Postman-based API testing services.",
        images: [
            {
                url: "https://chorn.in.th/chorn-images/metadata/services/devops-testing/postman.png" + ChornMetadata.ogImage,
                width: 1200,
                height: 630,
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
        images: [
            "https://chorn.in.th/chorn-images/metadata/services/devops-testing/postman.png" + ChornMetadata.ogImage,
        ],
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

            <PageBanner pageTitle={Info.DevOps.postman.features[0].title}/>

            <ServicesDetailsPostman/>

            <CloudExperience/>

            <Footer/>

            <SchemaMarkupServicePage
                name="Postman API Testing Services | CHORN"
                description="CHORN provides API testing services using Postman to ensure the reliability and performance of your web services."
                url="https://chorn.in.th/services/devops-testing/postman/"
            />
        </>
    );
};

export default Page;
