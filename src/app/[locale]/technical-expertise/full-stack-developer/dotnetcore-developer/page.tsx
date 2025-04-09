import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import Footer from "@/components/Layouts/Footer";
import CloudExperience from "@/components/Common/CloudExperience";
import ServicesDetailsDotNetCore
    from "@/components/Services/fullstack-development/dotnetcore/ServicesDetailsDotNetCore";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataDotnetCore} from "@/metadata/pages/backend/dotnet/common/MetadataDotnetCore";

export async function generateMetadata(): Promise<Metadata> {
    const lang = headers().get('x-locale') || 'en';
    return MetadataDotnetCore[lang]
}

const Page = () => {
    const lang = headers().get('x-locale') || 'en';

    return (
        <>
            <Navbar/>
            <ServicesDetailsDotNetCore lang={lang}/>
            <CloudExperience lang={lang}/>
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
