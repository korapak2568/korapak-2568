import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import ServicesDetailsJava from "@/components/Services/fullstack-development/java/ServicesDetailsJava";
import CloudExperience from "@/components/Common/CloudExperience";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataJava} from "@/metadata/pages/backend/java/common/MetadataJava";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

export async function generateMetadata(): Promise<Metadata> {
    const lang = headers().get('x-locale') || 'en';
    return MetadataJava[lang]
}

const Page = () => {
    const lang = headers().get('x-locale') || 'en';

    return (
        <>
            <Navbar/>

            <PageBanner pageTitle={InfoTranslation[lang].FullStack.java.features[0].title}/>

            <ServicesDetailsJava/>

            <CloudExperience/>

            <Footer/>

            <SchemaMarkupServicePage
                name="Java Spring Boot Full Stack Development | CHORN"
                description="CHORN offers Java Spring Boot full stack development services to build robust and scalable enterprise applications."
                url="https://chorn.in.th/technical-expertise/full-stack-developer/java-spring-boot-developer/"
            />
        </>
    );
};

export default Page;
