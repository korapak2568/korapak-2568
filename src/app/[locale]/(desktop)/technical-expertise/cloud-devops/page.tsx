import React from "react";
import CloudExperience from "@/components/Common/CloudExperience";
import CloudDevOpsModuleMain from "@/components/Services/cloud-devops/CloudDevOpsModuleMain";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataBackEndMain} from "@/metadata/main/backend/MetadataBackEndMain";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataBackEndMain[lang]
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';

    return (
        <>
            <CloudDevOpsModuleMain lang={lang}/>
            <CloudExperience lang={lang}/>
            <SchemaMarkupServicePage
                name="DevOps & Testing Services | CHORN"
                description="CHORN offers expert DevOps and testing services to streamline your software development process. Ensure high performance and quality with our continuous integration, automated testing, and cloud-based solutions."
                url="https://chorn.in.th/technical-expertise/cloud-devops/"
            />
        </>
    )
}