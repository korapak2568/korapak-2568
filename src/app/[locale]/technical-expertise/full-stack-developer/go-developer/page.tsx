import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import ServicesDetailsGoLang from "@/components/Services/fullstack-development/go-lang/ServicesDetailsGoLang";
import CloudExperience from "@/components/Common/CloudExperience";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataGo} from "@/data/metadata/pages/backend/go/common/MetadataGo";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

export async function generateMetadata(): Promise<Metadata> {
    const lang = headers().get('x-locale') || 'en';
    return MetadataGo[lang]
}

const Page = () => {
    const lang = headers().get('x-locale') || 'en';

    return (
        <>
            <Navbar/>

            <PageBanner pageTitle={InfoTranslation[lang].FullStack.go.features[0].title}/>

            <ServicesDetailsGoLang/>

            <CloudExperience/>

            <Footer/>

            <SchemaMarkupServicePage
                name="Go Full Stack Development | CHORN"
                description="CHORN offers Go full stack development services for building efficient and scalable web applications."
                url="https://chorn.in.th/technical-expertise/full-stack-developer/go-developer/"
            />
        </>
    );
};

export default Page;
