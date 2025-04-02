import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import ServicesDetailsNodejs from "@/components/Services/fullstack-development/nodejs/ServicesDetailsNodejs";
import CloudExperience from "@/components/Common/CloudExperience";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataNodejs} from "@/metadata/pages/backend/nodejs/common/MetadataNodejs";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

export async function generateMetadata(): Promise<Metadata> {
    const lang = headers().get('x-locale') || 'en';
    return MetadataNodejs[lang]
}

const Page = () => {
    const lang = headers().get('x-locale') || 'en';

    return (
        <>
            <Navbar/>

            <PageBanner pageTitle={InfoTranslation[lang].FullStack.nodejs.features[0].title}/>

            <ServicesDetailsNodejs/>

            <CloudExperience/>

            <Footer/>

            <SchemaMarkupServicePage
                name="Node.js Full Stack Development | CHORN"
                description="CHORN offers Node.js full stack development services for building scalable and efficient applications."
                url="https://chorn.in.th/technical-expertise/full-stack-developer/nodejs-developer/"
            />
        </>
    );
};

export default Page;
