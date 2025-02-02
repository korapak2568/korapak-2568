import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import WeWorkForIndustries from "../../../components/Common/WeWorkForIndustries";
import CloudExperience from "@/components/Common/CloudExperience";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import ServiceCardWebDevelopment from "@/components/Services/WebDevelopment/ServicesCardWebDevelopment";
import {ChornMetadata} from "@/data/metadata/ChornMetadata";

export const metadata: Metadata = ChornMetadata.webDevelopment

const Page = () => {
    return (
        <>
            <Navbar/>

            <PageBanner pageTitle="Web and API Development Services"/>

            <ServiceCardWebDevelopment/>

            <CloudExperience/>

            <WeWorkForIndustries/>

            <Footer/>

            <SchemaMarkupServicePage
                name="Web Development Services | CHORN | Custom Software & Technology Solutions"
                description="Explore CHORN's web development services, including expertise in Next.js, React, Angular, Vue, and more. CHORN offers tailored solutions for businesses across various domains such as Digital Marketing, Blockchain, E-Commerce, and more."
                url="https://chorn.in.th/services/web-development/"
            />
        </>
    );
};

export default Page;
