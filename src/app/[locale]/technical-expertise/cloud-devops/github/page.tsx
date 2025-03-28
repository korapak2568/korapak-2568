import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import CloudExperience from "@/components/Common/CloudExperience";
import ServicesDetailsGitHub from "@/components/Services/cloud-devops/github/ServicesDetailsGitHub";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataGitHub} from "@/data/metadata/pages/devops/github/common/MetadataGitHub";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

export async function generateMetadata(): Promise<Metadata> {
    const locale = headers().get('x-locale') || 'en';
    return MetadataGitHub[locale]
}

const Page = () => {
    const locale = headers().get('x-locale') || 'en';

    return (
        <>
            <Navbar/>

            <PageBanner pageTitle={InfoTranslation[locale].DevOps.github.features[0].title}/>

            <ServicesDetailsGitHub/>

            <CloudExperience/>

            <Footer/>

            <SchemaMarkupServicePage
                name="GitHub DevOps Services | CHORN"
                description="CHORN offers DevOps services integrating GitHub for version control, continuous integration, and automated workflows."
                url="https://chorn.in.th/technical-expertise/cloud-devops/github/"
            />
        </>
    );
};

export default Page;
