import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import ServicesDetailsPhp from "@/components/Services/fullstack-development/php/ServicesDetailsPhp";
import CloudExperience from "@/components/Common/CloudExperience";
import {Info} from "@/data/info/Info";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {MetadataChorn} from "@/data/metadata/MetadataChorn";

export const metadata: Metadata = MetadataChorn.backend.php

const Page = () => {
    return (
        <>
            <Navbar/>

            <PageBanner pageTitle={Info.FullStack.php.features[0].title}/>

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
