import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import WeWorkForIndustries from "@/components/Common/WeWorkForIndustries";
import CloudExperience from "@/components/Common/CloudExperience";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import WebDevelopmentPageMain from "@/components/Services/WebDevelopment/WebDevelopmentPageMain";
import {headers} from "next/headers";
import {MetadataWebDevelopment} from "@/metadata/pages/web-development/common/MetadataWebDevelopment";

export async function generateMetadata(): Promise<Metadata> {
    const lang = headers().get('x-locale') || 'en';
    return MetadataWebDevelopment[lang]
}

const Page = () => {
    const lang = headers().get('x-locale') || 'en';

    return (
        <>
            <Navbar/>

            {/*<PageBanner pageTitle={InfoTranslation[lang].Feature.stacks[2].title}/>*/}

            <WebDevelopmentPageMain lang={lang}/>

            <CloudExperience/>

            <WeWorkForIndustries/>

            <Footer/>

            <SchemaMarkupServicePage
                name="Web Development Services | CHORN | Custom Software & Technology Solutions"
                description="Explore CHORN's web development services, including expertise in Next.js, React, Angular, Vue, and more. CHORN offers tailored solutions for businesses across various domains such as Digital Marketing, Blockchain, E-Commerce, and more."
                url="https://chorn.in.th/technical-expertise/web-development/"
            />
        </>
    );
};

export default Page;
