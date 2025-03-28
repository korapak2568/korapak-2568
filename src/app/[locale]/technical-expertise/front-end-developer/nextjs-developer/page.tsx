import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import ServicesDetailsNextJS from "@/components/Services/frontend-development/nextjs/ServicesDetailsNextJS";
import CloudExperience from "@/components/Common/CloudExperience";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataNextjs} from "@/data/metadata/pages/frontend/nextjs/common/MetadataNextjs";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

export async function generateMetadata(): Promise<Metadata> {
    const locale = headers().get('x-locale') || 'en';
    return MetadataNextjs[locale]
}

const Page = () => {
    const locale = headers().get('x-locale') || 'en';

    return (
        <>
            <Navbar/>

            <PageBanner pageTitle={InfoTranslation[locale].FrontEnd.nextjs.features[0].title}/>

            <ServicesDetailsNextJS/>

            <CloudExperience/>

            <Footer/>

            <SchemaMarkupServicePage
                name="Next.js Development Services | CHORN"
                description="Expert Next.js development services by CHORN. Enhance your web applications with scalable and high-performance solutions using Next.js."
                url="https://chorn.in.th/technical-expertise/front-end-developer/nextjs-developer"
            />
        </>
    );
};

export default Page;
