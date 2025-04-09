import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import Footer from "@/components/Layouts/Footer";
import CloudExperience from "@/components/Common/CloudExperience";
import ServicesDetailsAppium from "@/components/Services/cloud-devops/appium/ServicesDetailsAppium";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataAppium} from "@/metadata/pages/devops/appium/common/MetadataAppium";

export async function generateMetadata(): Promise<Metadata> {
    const lang = headers().get('x-locale') || 'en';
    return MetadataAppium[lang]
}

const Page = () => {
    const lang = headers().get('x-locale') || 'en';

    return (
        <>
            <Navbar/>
            <ServicesDetailsAppium lang={lang}/>
            <CloudExperience lang={lang}/>
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
