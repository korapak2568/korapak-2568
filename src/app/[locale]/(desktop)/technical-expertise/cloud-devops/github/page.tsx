import React from "react";
import CloudExperience from "@/components/Common/CloudExperience";
import ServicesDetailsGitHub from "@/components/Services/cloud-devops/github/ServicesDetailsGitHub";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataGitHub} from "@/metadata/main/devops/MetadataGitHub";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataGitHub[lang]
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';

    return (
        <>
            <ServicesDetailsGitHub lang={lang}/>
            <CloudExperience lang={lang}/>
            <SchemaMarkupServicePage
                name="GitHub DevOps Services | CHORN"
                description="CHORN offers DevOps services integrating GitHub for version control, continuous integration, and automated workflows."
                url="https://chorn.in.th/technical-expertise/cloud-devops/github/"
            />
        </>
    );
}