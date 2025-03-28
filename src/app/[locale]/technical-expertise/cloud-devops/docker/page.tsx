import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import CloudExperience from "@/components/Common/CloudExperience";
import ServicesDetailsDocker from "@/components/Services/cloud-devops/docker/ServicesDetailsDocker";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataDocker} from "@/data/metadata/pages/devops/docker/common/MetadataDocker";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

export async function generateMetadata(): Promise<Metadata> {
    const locale = headers().get('x-locale') || 'en';
    return MetadataDocker[locale]
}

const Page = () => {
    const locale = headers().get('x-locale') || 'en';

    return (
        <>
            <Navbar/>

            <PageBanner pageTitle={InfoTranslation[locale].DevOps.docker.features[0].title}/>

            <ServicesDetailsDocker/>

            <CloudExperience/>

            <Footer/>

            <SchemaMarkupServicePage
                name="Docker DevOps Services | CHORN"
                description="CHORN offers Docker-based DevOps services for efficient containerization and scalable application deployment."
                url="https://chorn.in.th/technical-expertise/cloud-devops/docker/"
            />
        </>
    );
};

export default Page;
