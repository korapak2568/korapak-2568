import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import Footer from "@/components/Layouts/Footer";
import ServicesDetailsCss3 from "@/components/Services/frontend-development/css3/ServicesDetailsCss3";
import CloudExperience from "@/components/Common/CloudExperience";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataCss3} from "@/metadata/pages/frontend/css3/common/MetadataCss3";

export async function generateMetadata(): Promise<Metadata> {
    const lang = headers().get('x-locale') || 'en';
    return MetadataCss3[lang]
}

const Page = () => {
    const lang = headers().get('x-locale') || 'en';

    return (
        <>
            <Navbar/>
            <ServicesDetailsCss3 lang={lang}/>
            <CloudExperience/>
            <Footer/>
            <SchemaMarkupServicePage
                name="CSS3 Development Services | CHORN"
                description="Enhance your web applications with CHORN’s CSS3 development services for modern and visually appealing designs."
                url="https://chorn.in.th/technical-expertise/front-end-developer/css3-developer/"
            />
        </>
    );
};

export default Page;
