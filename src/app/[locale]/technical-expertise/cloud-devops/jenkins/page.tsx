import React from "react";
import FooterMain from "@/components/Footer/FooterMain";
import CloudExperience from "@/components/Common/CloudExperience";
import ServicesDetailsJenkins from "@/components/Services/cloud-devops/jenkins/ServicesDetailsJenkins";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataJenkins} from "@/metadata/pages/devops/jenkins/common/MetadataJenkins";

export async function generateMetadata(): Promise<Metadata> {
    const lang = headers().get('x-locale') || 'en';
    return MetadataJenkins[lang]
}

export default function Page() {
    const lang = headers().get('x-locale') || 'en';

    return (
        <>
            <ServicesDetailsJenkins lang={lang}/>
            <CloudExperience lang={lang}/>
            <FooterMain lang={lang}/>
            <SchemaMarkupServicePage
                name="Jenkins DevOps Services | CHORN"
                description="CHORN offers Jenkins-based DevOps services for automating builds, testing, and deployment in your development pipeline."
                url="https://chorn.in.th/technical-expertise/cloud-devops/jenkins/"
            />
        </>
    )
}