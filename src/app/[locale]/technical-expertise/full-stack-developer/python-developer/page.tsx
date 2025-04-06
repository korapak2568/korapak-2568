import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import Footer from "@/components/Layouts/Footer";
import ServicesDetailsPython from "@/components/Services/fullstack-development/python/ServicesDetailsPython";
import CloudExperience from "@/components/Common/CloudExperience";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataPython} from "@/metadata/pages/backend/python/common/MetadataPython";

export async function generateMetadata(): Promise<Metadata> {
    const lang = headers().get('x-locale') || 'en';
    return MetadataPython[lang]
}

const Page = () => {
    const lang = headers().get('x-locale') || 'en';

    return (
        <>
            <Navbar/>
            <ServicesDetailsPython lang={lang}/>
            <CloudExperience/>
            <Footer/>
            <SchemaMarkupServicePage
                name="Python Full Stack Development | CHORN"
                description="CHORN offers Python full stack development services to build dynamic and scalable web applications."
                url="https://chorn.in.th/technical-expertise/full-stack-developer/python-developer/"
            />
        </>
    );
};

export default Page;
