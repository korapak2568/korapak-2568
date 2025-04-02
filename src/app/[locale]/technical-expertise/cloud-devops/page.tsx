import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import WeWorkForIndustries from "@/components/Common/WeWorkForIndustries";
import CloudExperience from "@/components/Common/CloudExperience";
import ServicesCardDevOpsTesting from "@/components/Services/cloud-devops/ServicesCardDevOpsTesting";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataBackEndMain} from "@/metadata/pages/backend/main/common/MetadataBackEndMain";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

export async function generateMetadata(): Promise<Metadata> {
    const lang = headers().get('x-locale') || 'en';
    return MetadataBackEndMain[lang]
}

const Page = () => {
    const lang = headers().get('x-locale') || 'en';

    return (
        <>
            <Navbar/>

            <PageBanner pageTitle={InfoTranslation[lang].DevOps.title}/>

            <ServicesCardDevOpsTesting/>

            <CloudExperience/>

            <WeWorkForIndustries/>

            <Footer/>

            <SchemaMarkupServicePage
                name="DevOps & Testing Services | CHORN"
                description="CHORN offers expert DevOps and testing services to streamline your software development process. Ensure high performance and quality with our continuous integration, automated testing, and cloud-based solutions."
                url="https://chorn.in.th/technical-expertise/cloud-devops/"
            />
        </>
    );
};

export default Page;
