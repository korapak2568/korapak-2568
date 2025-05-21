import React from "react";
import ServicesDetailsHtml5 from "@/components/Services/frontend-development/html5/ServicesDetailsHtml5";
import CloudExperience from "@/components/Common/CloudExperience";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataHtml5} from "@/metadata/main/frontend/MetadataHtml5";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataHtml5[lang]
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';

    return (
        <>
            <ServicesDetailsHtml5 lang={lang}/>
            <CloudExperience lang={lang}/>
            <SchemaMarkupServicePage
                name="HTML5 Development Services | CHORN"
                description="CHORN offers expert HTML5 development services to create responsive and engaging web applications."
                url="https://chorn.in.th/technical-expertise/front-end-developer/html5-developer/"
            />
        </>
    );
}