import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import CloudExperience from "@/components/Common/CloudExperience";
import ServicesDetailsJenkins from "@/components/Services/cloud-devops/jenkins/ServicesDetailsJenkins";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataJenkins} from "@/metadata/pages/devops/jenkins/common/MetadataJenkins";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

export async function generateMetadata(): Promise<Metadata> {
    const lang = headers().get('x-locale') || 'en';
    return MetadataJenkins[lang]
}

const Page = () => {
    const lang = headers().get('x-locale') || 'en';

    return (
        <>
            <Navbar/>

            <PageBanner pageTitle={InfoTranslation[lang].DevOps.jenkins.features[0].title}/>

            <ServicesDetailsJenkins/>

            <CloudExperience/>

            <Footer/>

            <SchemaMarkupServicePage
                name="Jenkins DevOps Services | CHORN"
                description="CHORN offers Jenkins-based DevOps services for automating builds, testing, and deployment in your development pipeline."
                url="https://chorn.in.th/technical-expertise/cloud-devops/jenkins/"
            />
        </>
    );
};

export default Page;
