import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import CloudExperience from "@/components/Common/CloudExperience";
import ServicesDetailsDotNetCore
    from "@/components/Services/fullstack-development/dotnetcore/ServicesDetailsDotNetCore";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataDotnetCore} from "@/data/metadata/pages/backend/dotnetcore/common/MetadataDotnetCore";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

export async function generateMetadata(): Promise<Metadata> {
    const locale = headers().get('x-locale') || 'en';
    return MetadataDotnetCore[locale]
}

const Page = () => {
    const locale = headers().get('x-locale') || 'en';

    return (
        <>
            <Navbar/>

            <PageBanner pageTitle={InfoTranslation[locale].FullStack.dotnetcore.features[0].title}/>

            <ServicesDetailsDotNetCore/>

            <CloudExperience/>

            <Footer/>

            <SchemaMarkupServicePage
                name=".NET Core C# Full Stack Development | CHORN"
                description="CHORN offers .NET Core C# full stack development services to build modern, scalable, and secure web applications."
                url="https://chorn.in.th/technical-expertise/full-stack-developer/dotnetcore-developer/"
            />
        </>
    );
};

export default Page;
