import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import CloudExperience from "@/components/Common/CloudExperience";
import ServicesDetailsGitHub from "@/components/Services/cloud-devops/github/ServicesDetailsGitHub";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataGitHub} from "@/metadata/pages/devops/github/common/MetadataGitHub";

export async function generateMetadata(): Promise<Metadata> {
    const lang = headers().get('x-locale') || 'en';
    return MetadataGitHub[lang]
}

const Page = () => {
    const lang = headers().get('x-locale') || 'en';

    return (
        <>
            <Navbar/>
            <ServicesDetailsGitHub lang={lang}/>
            <CloudExperience lang={lang}/>
            <SchemaMarkupServicePage
                name="GitHub DevOps Services | CHORN"
                description="CHORN offers DevOps services integrating GitHub for version control, continuous integration, and automated workflows."
                url="https://chorn.in.th/technical-expertise/cloud-devops/github/"
            />
        </>
    );
};

export default Page;
