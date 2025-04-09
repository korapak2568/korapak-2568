import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import Footer from "@/components/Layouts/Footer";
import CloudExperience from "@/components/Common/CloudExperience";
import ServicesDetailsPostman from "@/components/Services/cloud-devops/postman/ServicesDetailsPostman";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataPostman} from "@/metadata/pages/devops/postman/common/MetadataPostman";

export async function generateMetadata(): Promise<Metadata> {
    const lang = headers().get('x-locale') || 'en';
    return MetadataPostman[lang]
}

const Page = () => {
    const lang = headers().get('x-locale') || 'en';

    return (
        <>
            <Navbar/>
            <ServicesDetailsPostman lang={lang}/>
            <CloudExperience lang={lang}/>
            <Footer/>
            <SchemaMarkupServicePage
                name="Postman API Testing Services | CHORN"
                description="CHORN provides API testing services using Postman to ensure the reliability and performance of your web services."
                url="https://chorn.in.th/technical-expertise/cloud-devops/postman/"
            />
        </>
    );
};

export default Page;
