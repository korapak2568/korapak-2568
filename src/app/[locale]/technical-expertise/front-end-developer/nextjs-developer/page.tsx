import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import ServicesDetailsNextJS from "@/components/Services/frontend-development/nextjs/ServicesDetailsNextJS";
import CloudExperience from "@/components/Common/CloudExperience";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataNextjs} from "@/metadata/pages/frontend/nextjs/common/MetadataNextjs";

export async function generateMetadata(): Promise<Metadata> {
    const lang = headers().get('x-locale') || 'en';
    return MetadataNextjs[lang]
}

const Page = () => {
    const lang = headers().get('x-locale') || 'en';

    return (
        <>
            <Navbar/>
            <ServicesDetailsNextJS lang={lang}/>
            <CloudExperience lang={lang}/>
            <SchemaMarkupServicePage
                name="Next.js Development Services | CHORN"
                description="Expert Next.js development services by CHORN. Enhance your web applications with scalable and high-performance solutions using Next.js."
                url="https://chorn.in.th/technical-expertise/front-end-developer/nextjs-developer"
            />
        </>
    );
};

export default Page;
