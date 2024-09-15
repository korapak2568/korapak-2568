import React from "react";
import Navbar from "../../../../components/Layouts/Navbar";
import PageBanner from "../../../../components/Common/PageBanner";
import Footer from "../../../../components/Layouts/Footer";
import CloudExperience from "@/components/Common/CloudExperience";
import ServicesDetailsSelenium from "@/components/Services/devops-testing/selenium/ServicesDetailsSelenium";
import {INFO} from "@/data/INFO";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {GoogleSchemaProductSnippet} from "@/components/GoogleSchemaMarkup/ProductSnippet/GoogleSchemaProductSnippet";

export const metadata: Metadata = {
    title: "Selenium Testing Services | CHORN",
    description: "CHORN offers comprehensive Selenium testing services to ensure the quality and performance of your applications through automated testing.",
    alternates: {
        canonical: "https://chorn.in.th/services/devops-testing/selenium/",
    },
    openGraph: {
        title: "Selenium Testing | CHORN",
        description: "Automate your application testing with CHORN’s Selenium services for robust and reliable results.",
        images: [
            {
                url: "https://chorn.in.th/chorn-images/metadata/services/devops-testing/selenium.png",
                width: 1200,
                height: 630,
                alt: "Selenium Testing Banner"
            }
        ],
        url: "https://chorn.in.th/services/devops-testing/selenium/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Selenium Testing Services | CHORN",
        description: "Enhance your application’s quality with CHORN’s Selenium testing services for automated and effective testing.",
        images: [
            "https://chorn.in.th/chorn-images/metadata/services/devops-testing/selenium.png",
        ],
    },
    keywords: [
        "Selenium testing", "automated testing", "CHORN", "DevOps testing",
        "application quality assurance", "test automation", "software testing",
        "quality assurance services", "testing services", "test scripts",
        "software testing Thailand", "selenium services", "web application testing"
    ]
};

const Page = () => {

    return (
        <>
            <Navbar/>

            <PageBanner
                pageTitle={INFO.DEVOPS_TESTING_INFO.additions[6].details[0].title}
                homePageUrl="/"
                homePageText="Home"
                activePageText={INFO.DEVOPS_TESTING_INFO.title}
                BGImage={INFO.IMAGES.pageBanner.cover1.path}
            />

            <ServicesDetailsSelenium/>

            <CloudExperience/>

            <Footer/>

            <SchemaMarkupServicePage
                name="Selenium Testing Services | CHORN"
                description="CHORN offers comprehensive Selenium testing services to ensure the quality and performance of your applications through automated testing."
                url="https://chorn.in.th/services/devops-testing/selenium/"
            />

            <GoogleSchemaProductSnippet
                url="https://chorn.in.th/services/devops-testing/selenium/"
            />
        </>
    );
};

export default Page;
