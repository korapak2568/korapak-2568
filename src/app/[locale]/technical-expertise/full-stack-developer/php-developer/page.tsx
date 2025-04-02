import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import ServicesDetailsPhp from "@/components/Services/fullstack-development/php/ServicesDetailsPhp";
import CloudExperience from "@/components/Common/CloudExperience";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataPhp} from "@/metadata/pages/backend/php/common/MetadataPhp";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

export async function generateMetadata(): Promise<Metadata> {
    const lang = headers().get('x-locale') || 'en';
    return MetadataPhp[lang]
}

const Page = () => {
    const lang = headers().get('x-locale') || 'en';

    return (
        <>
            <Navbar/>

            <PageBanner pageTitle={InfoTranslation[lang].FullStack.php.features[0].title}/>

            <ServicesDetailsPhp/>

            <CloudExperience/>

            <Footer/>

            <SchemaMarkupServicePage
                name="PHP Full Stack Development | CHORN"
                description="CHORN offers PHP full stack development services for building dynamic and scalable web applications."
                url="https://chorn.in.th/technical-expertise/full-stack-developer/php-developer/"
            />
        </>
    );
};

export default Page;
