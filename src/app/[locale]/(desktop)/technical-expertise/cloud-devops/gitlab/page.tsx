import React from "react";
import CloudExperience from "@/components/Common/CloudExperience";
import ServicesDetailsGitLab from "@/components/Services/cloud-devops/gitlab/ServicesDetailsGitLab";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataGitLab} from "@/metadata/main/devops/MetadataGitLab";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataGitLab[lang]
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';

    return (
        <>
            <ServicesDetailsGitLab lang={lang}/>
            <CloudExperience lang={lang}/>
            <SchemaMarkupServicePage
                name="GitLab DevOps Services | CHORN"
                description="CHORN provides GitLab-based DevOps services for continuous integration, automation, and version control solutions."
                url="https://chorn.in.th/technical-expertise/cloud-devops/gitlab/"
            />
        </>
    );
}