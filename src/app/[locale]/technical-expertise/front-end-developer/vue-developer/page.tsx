import React from "react";
import ServicesDetailsVue from "@/components/Services/frontend-development/vue/ServicesDetailsVue";
import CloudExperience from "@/components/Common/CloudExperience";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataVue} from "@/metadata/main/frontend/MetadataVue";

export async function generateMetadata(): Promise<Metadata> {
    const lang = headers().get('x-locale') || 'en';
    return MetadataVue[lang]
}

export default function Page() {
    const lang = headers().get('x-locale') || 'en';

    return (
        <>
            <ServicesDetailsVue lang={lang}/>
            <CloudExperience lang={lang}/>
            <SchemaMarkupServicePage
                name="Vue.js Development Services | CHORN"
                description="CHORN specializes in Vue.js development to create interactive and scalable web applications."
                url="https://chorn.in.th/technical-expertise/front-end-developer/vue-developer/"
            />
        </>
    )
}