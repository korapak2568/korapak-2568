import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import CloudExperience from "@/components/Common/CloudExperience";
import ServicesDetailsSelenium from "@/components/Services/cloud-devops/selenium/ServicesDetailsSelenium";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataSelenium} from "@/data/metadata/pages/devops/selenium/common/MetadataSelenium";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

export async function generateMetadata(): Promise<Metadata> {
    const lang = headers().get('x-locale') || 'en';
    return MetadataSelenium[lang]
}

const Page = () => {
    const lang = headers().get('x-locale') || 'en';

    return (
        <>
            <Navbar/>

            <PageBanner pageTitle={InfoTranslation[lang].DevOps.selenium.features[0].title}/>

            <ServicesDetailsSelenium/>

            <CloudExperience/>

            <Footer/>

            <SchemaMarkupServicePage
                name="Selenium Testing Services | CHORN"
                description="CHORN offers comprehensive Selenium testing services to ensure the quality and performance of your applications through automated testing."
                url="https://chorn.in.th/technical-expertise/cloud-devops/selenium/"
            />
        </>
    );
};

export default Page;
