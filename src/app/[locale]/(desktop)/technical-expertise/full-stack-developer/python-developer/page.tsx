import React from "react";
import ServicesDetailsPython from "@/components/Services/fullstack-development/python/ServicesDetailsPython";
import CloudExperience from "@/components/Common/CloudExperience";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataPython} from "@/metadata/main/backend/MetadataPython";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataPython[lang]
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';

    return (
        <>
            <ServicesDetailsPython lang={lang}/>
            <CloudExperience lang={lang}/>
            <SchemaMarkupServicePage
                name="Python Full Stack Development | CHORN"
                description="CHORN offers Python full stack development services to build dynamic and scalable web applications."
                url="https://chorn.in.th/technical-expertise/full-stack-developer/python-developer/"
            />
        </>
    );
}