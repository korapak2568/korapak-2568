import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import CloudExperience from "@/components/Common/CloudExperience";
import ServicesDetailsAppium from "@/components/Services/cloud-devops/appium/ServicesDetailsAppium";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataAppium} from "@/data/metadata/pages/devops/appium/common/MetadataAppium";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

export async function generateMetadata(): Promise<Metadata> {
    const locale = headers().get('x-locale') || 'en';
    return MetadataAppium[locale]
}

const Page = () => {
    const locale = headers().get('x-locale') || 'en';

    return (
        <>
            <Navbar/>

            <PageBanner pageTitle={InfoTranslation[locale].DevOps.appium.features[0].title}/>

            <ServicesDetailsAppium/>

            <CloudExperience/>

            <Footer/>

            <SchemaMarkupServicePage
                name="Appium Testing Services | CHORN"
                description="CHORN offers Appium testing services for automated mobile app testing across multiple platforms to ensure high-quality performance."
                url="https://chorn.in.th/technical-expertise/cloud-devops/appium/"
            />
        </>
    );
};

export default Page;
