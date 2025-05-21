import React from "react";
import ServicesDetailsNodejs from "@/components/Services/fullstack-development/nodejs/ServicesDetailsNodejs";
import CloudExperience from "@/components/Common/CloudExperience";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataNodejs} from "@/metadata/main/backend/MetadataNodejs";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataNodejs[lang]
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';

    return (
        <>
            <ServicesDetailsNodejs lang={lang}/>
            <CloudExperience lang={lang}/>
            <SchemaMarkupServicePage
                name="Node.js Full Stack Development | CHORN"
                description="CHORN offers Node.js full stack development services for building scalable and efficient applications."
                url="https://chorn.in.th/technical-expertise/full-stack-developer/nodejs-developer/"
            />
        </>
    );
}