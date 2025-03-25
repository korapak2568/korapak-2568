import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import WeWorkForIndustries from "@/components/Common/WeWorkForIndustries";
import ServicesCardFrontEnd from "@/components/Services/frontend-development/ServicesCardFrontEnd";
import CloudExperience from "@/components/Common/CloudExperience";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {MetadataChorn} from "@/data/metadata/MetadataChorn";

export const metadata: Metadata = MetadataChorn.frontend.main

const Page = () => {

    return (
        <>
            <Navbar/>

            <PageBanner pageTitle="Frontend Development"/>

            <ServicesCardFrontEnd/>

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
