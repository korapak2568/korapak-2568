import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import WeWorkForIndustries from "@/components/Common/WeWorkForIndustries";
import FrontEndPageMain from "@/components/Services/frontend-development/FrontEndPageMain";
import CloudExperience from "@/components/Common/CloudExperience";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataFrontEndMain} from "@/metadata/pages/frontend/main/common/MetadataFrontEndMain";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

export async function generateMetadata(): Promise<Metadata> {
    const lang = headers().get('x-locale') || 'en';
    return MetadataFrontEndMain[lang]
}

const Page = () => {
    const lang = headers().get('x-locale') || 'en';

    return (
        <>
            <Navbar/>

            <PageBanner pageTitle={InfoTranslation[lang].FrontEnd.title}/>

            <FrontEndPageMain lang={lang}/>

            <CloudExperience/>

            <WeWorkForIndustries/>

            <Footer/>

            <SchemaMarkupServicePage
                name="Frontend Development Services | CHORN"
                description="CHORN provides expert frontend development services, specializing in modern frameworks like Next.js, React, Angular, Vue, HTML5, and CSS3. Build responsive and scalable websites with cutting-edge technologies."
                url="https://chorn.in.th/technical-expertise/front-end-developer/"
            />
        </>
    );
};

export default Page;
