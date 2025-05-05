import React from "react";
import CloudExperience from "@/components/Common/CloudExperience";
import ServicesDetailsSelenium from "@/components/Services/cloud-devops/selenium/ServicesDetailsSelenium";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataSelenium} from "@/metadata/main/devops/MetadataSelenium";

export async function generateMetadata(): Promise<Metadata> {
    const lang = headers().get('x-locale') || 'en';
    return MetadataSelenium[lang]
}

export default function Page() {
    const lang = headers().get('x-locale') || 'en';

    return (
        <>
            <ServicesDetailsSelenium lang={lang}/>
            <CloudExperience lang={lang}/>
            <SchemaMarkupServicePage
                name="Selenium Testing Services | CHORN"
                description="CHORN offers comprehensive Selenium testing services to ensure the quality and performance of your applications through automated testing."
                url="https://chorn.in.th/technical-expertise/cloud-devops/selenium/"
            />
        </>
    )
}