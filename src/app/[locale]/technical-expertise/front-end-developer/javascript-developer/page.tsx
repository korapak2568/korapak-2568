import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import Footer from "@/components/Layouts/Footer";
import ServicesDetailsJavaScript
    from "@/components/Services/frontend-development/javascript/ServicesDetailsJavaScript";
import CloudExperience from "@/components/Common/CloudExperience";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataJavaScript} from "@/metadata/pages/frontend/javascript/common/MetadataJavaScript";

export async function generateMetadata(): Promise<Metadata> {
    const lang = headers().get('x-locale') || 'en';
    return MetadataJavaScript[lang]
}

const Page = () => {
    const lang = headers().get('x-locale') || 'en';

    return (
        <>
            <Navbar/>
            <ServicesDetailsJavaScript lang={lang}/>
            <CloudExperience/>
            <Footer/>
            <SchemaMarkupServicePage
                name="JavaScript | CHORN - Custom Software Development Experts"
                description="Learn how CHORN leverages JavaScript to build scalable, robust, and efficient custom software solutions for businesses across industries."
                url="https://chorn.in.th/technical-expertise/full-stack-developer/javascript-javascript-developer/"
            />
        </>
    );
};

export default Page;
