import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import CloudExperience from "@/components/Common/CloudExperience";
import ServicesDetailsDocker from "@/components/Services/cloud-devops/docker/ServicesDetailsDocker";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataDocker} from "@/metadata/pages/devops/docker/common/MetadataDocker";

export async function generateMetadata(): Promise<Metadata> {
    const lang = headers().get('x-locale') || 'en';
    return MetadataDocker[lang]
}

const Page = () => {
    const lang = headers().get('x-locale') || 'en';

    return (
        <>
            <Navbar/>
            <ServicesDetailsDocker lang={lang}/>
            <CloudExperience lang={lang}/>
            <SchemaMarkupServicePage
                name="Docker DevOps Services | CHORN"
                description="CHORN offers Docker-based DevOps services for efficient containerization and scalable application deployment."
                url="https://chorn.in.th/technical-expertise/cloud-devops/docker/"
            />
        </>
    );
};

export default Page;
