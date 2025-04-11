import React from "react";
import ServicesDetailsReact from "@/components/Services/frontend-development/react/ServicesDetailsReact";
import CloudExperience from "@/components/Common/CloudExperience";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataReact} from "@/metadata/pages/frontend/react/common/MetadataReact";

export async function generateMetadata(): Promise<Metadata> {
    const lang = headers().get('x-locale') || 'en';
    return MetadataReact[lang]
}

export default function Page() {
    const lang = headers().get('x-locale') || 'en';

    return (
        <>
            <ServicesDetailsReact lang={lang}/>
            <CloudExperience lang={lang}/>
            <SchemaMarkupServicePage
                name="React Development Services | CHORN"
                description="CHORN provides top-tier React development services. Build dynamic and responsive user interfaces with React."
                url="https://chorn.in.th/technical-expertise/front-end-developer/react-developer/"
            />
        </>
    );
}