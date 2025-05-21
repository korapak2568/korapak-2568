import React from "react";
import ServicesDetailsAngular from "@/components/Services/frontend-development/angular/ServicesDetailsAngular";
import CloudExperience from "@/components/Common/CloudExperience";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataAngular} from "@/metadata/main/frontend/MetadataAngular";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataAngular[lang]
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';

    return (
        <>
            <ServicesDetailsAngular lang={lang}/>
            <CloudExperience lang={lang}/>
            <SchemaMarkupServicePage
                name="Angular Development Services | CHORN"
                description="Expert Angular development services by CHORN. Build dynamic, scalable, and high-performance web applications using Angular."
                url="https://chorn.in.th/technical-expertise/front-end-developer/angular-developer/"
            />
        </>
    );
}