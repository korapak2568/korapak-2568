import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import ServicesDetailsAngular from "@/components/Services/frontend-development/angular/ServicesDetailsAngular";
import CloudExperience from "@/components/Common/CloudExperience";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataAngular} from "@/metadata/pages/frontend/angular/common/MetadataAngular";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

export async function generateMetadata(): Promise<Metadata> {
    const lang = headers().get('x-locale') || 'en';
    return MetadataAngular[lang]
}

const Page = () => {
    const lang = headers().get('x-locale') || 'en';

    return (
        <>
            <Navbar/>

            <PageBanner pageTitle={InfoTranslation[lang].FrontEnd.angular.features[0].title}/>

            <ServicesDetailsAngular/>

            <CloudExperience/>

            <Footer/>

            <SchemaMarkupServicePage
                name="Angular Development Services | CHORN"
                description="Expert Angular development services by CHORN. Build dynamic, scalable, and high-performance web applications using Angular."
                url="https://chorn.in.th/technical-expertise/front-end-developer/angular-developer/"
            />
        </>
    );
};

export default Page;
