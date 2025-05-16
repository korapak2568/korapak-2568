import React from "react";
import ServicesDetailsJavaScript
    from "@/components/Services/frontend-development/javascript/ServicesDetailsJavaScript";
import CloudExperience from "@/components/Common/CloudExperience";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataJavaScript} from "@/metadata/main/frontend/MetadataJavaScript";

export async function generateMetadata(): Promise<Metadata> {
    const lang = headers().get('x-locale') || 'en';
    return MetadataJavaScript[lang]
}

export default function Page() {
    const lang = headers().get('x-locale') || 'en';

    return (
        <>
            <ServicesDetailsJavaScript lang={lang}/>
            <CloudExperience lang={lang}/>
            <SchemaMarkupServicePage
                name="JavaScript | CHORN - Custom Software Development Experts"
                description="Learn how CHORN leverages JavaScript to build scalable, robust, and efficient custom software solutions for businesses across industries."
                url="https://chorn.in.th/technical-expertise/full-stack-developer/javascript-javascript-developer/"
            />
        </>
    );
}