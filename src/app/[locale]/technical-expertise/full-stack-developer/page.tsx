import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import WeWorkForIndustries from "@/components/Common/WeWorkForIndustries";
import ServicesCardFullStack from "@/components/Services/fullstack-development/ServicesCardFullStack";
import CloudExperience from "@/components/Common/CloudExperience";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {MetadataChorn} from "@/data/metadata/MetadataChorn";

export const metadata: Metadata = MetadataChorn.backend.main

const Page = () => {

    return (
        <>
            <Navbar/>

            <PageBanner pageTitle="Back-End & API Development"/>

            <ServicesCardFullStack/>

            <CloudExperience/>

            <WeWorkForIndustries/>

            <Footer/>

            <SchemaMarkupServicePage
                name="Back-End & API Development Services | CHORN"
                description="CHORN offers expert Back-End & API Development services utilizing modern technologies like Node.js, Java Spring Boot, .NET Core, Go, Python, and PHP. Build scalable and robust web applications with our custom software solutions."
                url="https://chorn.in.th/technical-expertise/full-stack-developer/"
            />
        </>
    );
};

export default Page;
