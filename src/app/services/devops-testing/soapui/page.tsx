import React from "react";
import Navbar from "../../../../components/Layouts/Navbar";
import PageBanner from "../../../../components/Common/PageBanner";
import Footer from "../../../../components/Layouts/Footer";
import CloudExperience from "@/components/Common/CloudExperience";
import ServicesDetailsSoapUI from "@/components/Services/devops-testing/soapui/ServicesDetailsSoapUI";
import {INFO} from "@/data/INFO";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";

export const metadata: Metadata = {
    title: "SoapUI Testing Services | CHORN",
    description: "CHORN provides expert SoapUI testing services to ensure your web services and APIs are thoroughly tested and reliable.",
    alternates: {
        canonical: "https://chorn.in.th/services/devops-testing/soapui/",
    },
    openGraph: {
        title: "SoapUI Testing | CHORN",
        description: "Ensure the reliability of your APIs and web services with CHORN’s SoapUI testing services.",
        images: [
            {
                url: "https://chorn.in.th/chorn-images/metadata/services/devops-testing/soapui.png",
                width: 1200,
                height: 630,
                alt: "SoapUI Testing Banner"
            }
        ],
        url: "https://chorn.in.th/services/devops-testing/soapui/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "SoapUI Testing Services | CHORN",
        description: "Optimize your API testing with CHORN’s SoapUI services for comprehensive and reliable web service testing.",
        images: [
            "https://chorn.in.th/chorn-images/metadata/services/devops-testing/soapui.png",
        ],
    },
    keywords: [
        "SoapUI testing", "API testing", "CHORN", "DevOps testing",
        "web service testing", "reliable testing", "test automation",
        "quality assurance", "software testing", "API reliability",
        "testing services Thailand", "SoapUI services", "web application testing"
    ]
};

const Page = () => {

    return (
        <>
            <Navbar/>

            <PageBanner
                pageTitle={INFO.DEVOPS_TESTING_INFO.additions[7].details[0].title}
                homePageUrl="/"
                homePageText="Home"
                activePageText={INFO.DEVOPS_TESTING_INFO.title}
                BGImage={INFO.IMAGES.pageBanner.cover1.path}
            />

            <ServicesDetailsSoapUI/>

            <CloudExperience/>

            <Footer/>

            <SchemaMarkupServicePage
                name="SoapUI Testing Services | CHORN"
                description="CHORN provides expert SoapUI testing services to ensure your web services and APIs are thoroughly tested and reliable."
                url="https://chorn.in.th/services/devops-testing/soapui/"
            />
        </>
    );
};

export default Page;
