import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import ServicesDetailsHtml5 from "@/components/Services/frontend-development/html5/ServicesDetailsHtml5";
import CloudExperience from "@/components/Common/CloudExperience";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataHtml5} from "@/data/metadata/pages/frontend/html5/common/MetadataHtml5";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

export async function generateMetadata(): Promise<Metadata> {
    const lang = headers().get('x-locale') || 'en';
    return MetadataHtml5[lang]
}

const Page = () => {
    const lang = headers().get('x-locale') || 'en';

    return (
        <>
            <Navbar/>

            <PageBanner pageTitle={InfoTranslation[lang].FrontEnd.html5.features[0].title}/>

            <ServicesDetailsHtml5/>

            <CloudExperience/>

            <Footer/>

            <SchemaMarkupServicePage
                name="HTML5 Development Services | CHORN"
                description="CHORN offers expert HTML5 development services to create responsive and engaging web applications."
                url="https://chorn.in.th/technical-expertise/front-end-developer/html5-developer/"
            />
        </>
    );
};

export default Page;
