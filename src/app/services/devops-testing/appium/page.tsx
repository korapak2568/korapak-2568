import React from "react";
import Navbar from "../../../../components/Layouts/Navbar";
import PageBanner from "../../../../components/Common/PageBanner";
import Footer from "../../../../components/Layouts/Footer";
import CloudExperience from "@/components/Common/CloudExperience";
import ServicesDetailsAppium from "@/components/Services/devops-testing/appium/ServicesDetailsAppium";
import {Info} from "@/data/info/Info";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {ChornMetadata} from "@/data/metadata/ChornMetadata";

export const metadata: Metadata = {
    title: "Appium Testing Services | CHORN",
    description: "CHORN offers Appium testing services for automated mobile app testing across multiple platforms to ensure high-quality performance.",
    alternates: {
        canonical: "https://chorn.in.th/services/devops-testing/appium/",
    },
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Appium Testing | CHORN",
        description: "Automate your mobile app testing with CHORN’s Appium services for comprehensive cross-platform testing.",
        images: [
            {
                url: "https://chorn.in.th/chorn-images/metadata/services/devops-testing/appium.png" + ChornMetadata.ogImage,
                width: 1200,
                height: 630,
                alt: "Appium Testing Banner"
            }
        ],
        url: "https://chorn.in.th/services/devops-testing/appium/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Appium Testing Services | CHORN",
        description: "Ensure your mobile apps perform flawlessly with CHORN’s Appium testing services for thorough and automated cross-platform testing.",
        images: [
            "https://chorn.in.th/chorn-images/metadata/services/devops-testing/appium.png" + ChornMetadata.ogImage,
        ],
    },
    keywords: [
        "Appium testing", "mobile app testing", "CHORN", "DevOps testing",
        "cross-platform testing", "test automation", "quality assurance",
        "mobile testing services", "software testing", "app performance",
        "testing services Thailand", "Appium services", "mobile application testing"
    ]
};

const Page = () => {

    return (
        <>
            <Navbar/>

            <PageBanner pageTitle={Info.DevOps.appium.features[0].title} />

            <ServicesDetailsAppium/>

            <CloudExperience/>

            <Footer/>

            <SchemaMarkupServicePage
                name="Appium Testing Services | CHORN"
                description="CHORN offers Appium testing services for automated mobile app testing across multiple platforms to ensure high-quality performance."
                url="https://chorn.in.th/services/devops-testing/appium/"
            />
        </>
    );
};

export default Page;
