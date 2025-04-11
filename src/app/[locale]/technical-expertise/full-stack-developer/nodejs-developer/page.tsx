import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import ServicesDetailsNodejs from "@/components/Services/fullstack-development/nodejs/ServicesDetailsNodejs";
import CloudExperience from "@/components/Common/CloudExperience";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataNodejs} from "@/metadata/pages/backend/nodejs/common/MetadataNodejs";

export async function generateMetadata(): Promise<Metadata> {
    const lang = headers().get('x-locale') || 'en';
    return MetadataNodejs[lang]
}

const Page = () => {
    const lang = headers().get('x-locale') || 'en';

    return (
        <>
            <Navbar/>
            <ServicesDetailsNodejs lang={lang}/>
            <CloudExperience lang={lang}/>
            <SchemaMarkupServicePage
                name="Node.js Full Stack Development | CHORN"
                description="CHORN offers Node.js full stack development services for building scalable and efficient applications."
                url="https://chorn.in.th/technical-expertise/full-stack-developer/nodejs-developer/"
            />
        </>
    );
};

export default Page;
