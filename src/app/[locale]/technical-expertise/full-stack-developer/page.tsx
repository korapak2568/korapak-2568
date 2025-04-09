import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import Footer from "@/components/Layouts/Footer";
import WeWorkForIndustries from "@/components/Common/WeWorkForIndustries";
import FullStackPageMain from "@/components/Services/fullstack-development/FullStackPageMain";
import CloudExperience from "@/components/Common/CloudExperience";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataBackEndMain} from "@/metadata/pages/backend/main/common/MetadataBackEndMain";

export async function generateMetadata(): Promise<Metadata> {
    const lang = headers().get('x-locale') || 'en';
    return MetadataBackEndMain[lang]
}

const Page = () => {
    const lang = headers().get('x-locale') || 'en';

    return (
        <>
            <Navbar/>
            <FullStackPageMain lang={lang}/>
            <CloudExperience lang={lang}/>
            <WeWorkForIndustries lang={lang}/>
            <Footer/>
            <SchemaMarkupServicePage
                name="Back-End & API Development Services | CHORN"
                description="CHORN offers expert Back-End & API Development services utilizing modern technologies like Node.js, Java Spring Boot, .NET Core, Go, Python, and PHP. Build scalable and robust web applications with our custom software solutions."
                url="https://chorn.in.th/technical-expertise/full-stack-developer/"
            />
        </>
    );
};

export default Page;
