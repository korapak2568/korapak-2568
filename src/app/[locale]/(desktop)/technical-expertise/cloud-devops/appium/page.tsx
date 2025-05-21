import React from "react";
import CloudExperience from "@/components/Common/CloudExperience";
import ServicesDetailsAppium from "@/components/Services/cloud-devops/appium/ServicesDetailsAppium";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataAppium} from "@/metadata/main/devops/MetadataAppium";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataAppium[lang]
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';

    return (
        <>
            <ServicesDetailsAppium lang={lang}/>
            <CloudExperience lang={lang}/>
            <SchemaMarkupServicePage
                name="Appium Testing Services | CHORN"
                description="CHORN offers Appium testing services for automated mobile app testing across multiple platforms to ensure high-quality performance."
                url="https://chorn.in.th/technical-expertise/cloud-devops/appium/"
            />
        </>
    );
}