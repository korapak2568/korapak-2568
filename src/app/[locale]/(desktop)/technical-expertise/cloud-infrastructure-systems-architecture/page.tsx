import React from "react";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import CloudExperience from "@/components/Common/CloudExperience";
import CloudInfraPageMain
    from "@/components/Services/cloud-infrastructure-systems-architecture/CloudInfraPageMain";
import {headers} from "next/headers";
import {MetadataCloudSolution} from "@/metadata/main/MetadataCloudSolution";
import HomeFeatureMain from "@/components/Features/HomeFeatureMain";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataCloudSolution[lang]
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';

    return (
        <>
            <CloudInfraPageMain lang={lang}/>
            <CloudExperience lang={lang}/>
            <HomeFeatureMain lang={lang}/>
            <SchemaMarkupServicePage
                name="Cloud Solution Architecture & Systems Analysis | CHORN | AWS, Azure, GCP, DigitalOcean"
                description="CHORN delivers expert cloud solution architecture and system analysis services. We optimize cloud infrastructures across AWS, Azure, GCP, and DigitalOcean, ensuring performance, scalability, and cost-efficiency."
                url="https://chorn.in.th/technical-expertise/cloud-solution-architecture-systems-analysis/"
            />
        </>
    )
}