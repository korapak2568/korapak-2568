import React from "react";
import ServicesDetailsPhp from "@/components/Services/fullstack-development/php/ServicesDetailsPhp";
import CloudExperience from "@/components/Common/CloudExperience";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataPhp} from "@/metadata/pages/backend/php/common/MetadataPhp";

export async function generateMetadata(): Promise<Metadata> {
    const lang = headers().get('x-locale') || 'en';
    return MetadataPhp[lang]
}

export default function Page() {
    const lang = headers().get('x-locale') || 'en';

    return (
        <>
            <ServicesDetailsPhp lang={lang}/>
            <CloudExperience lang={lang}/>
            <SchemaMarkupServicePage
                name="PHP Full Stack Development | CHORN"
                description="CHORN offers PHP full stack development services for building dynamic and scalable web applications."
                url="https://chorn.in.th/technical-expertise/full-stack-developer/php-developer/"
            />
        </>
    );
}