import React from "react";
import ServicesDetailsTypeScript
    from "@/components/Services/frontend-development/typescript/ServicesDetailsTypeScript";
import CloudExperience from "@/components/Common/CloudExperience";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataReact} from "@/metadata/main/frontend/MetadataReact";

export async function generateMetadata(): Promise<Metadata> {
    const lang = headers().get('x-locale') || 'en';
    return MetadataReact[lang]
}

export default function Page() {
    const lang = headers().get('x-locale') || 'en';

    return (
        <>
            <ServicesDetailsTypeScript lang={lang}/>
            <CloudExperience lang={lang}/>
            <SchemaMarkupServicePage
                name="TypeScript | CHORN - Custom Software Development Experts"
                description="Learn how CHORN leverages TypeScript to build scalable, robust, and efficient custom software solutions for businesses across industries."
                url="https://chorn.in.th/technical-expertise/full-stack-developer/typescript-javascript-developer/"
            />
        </>
    );
}