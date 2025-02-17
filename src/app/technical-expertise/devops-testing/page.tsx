import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import WeWorkForIndustries from "../../../components/Common/WeWorkForIndustries";
import CloudExperience from "@/components/Common/CloudExperience";
import ServicesCardDevOpsTesting from "@/components/Services/devops-testing/ServicesCardDevOpsTesting";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {ChornMetadata} from "@/data/metadata/ChornMetadata";

export const metadata: Metadata = ChornMetadata.devops.main

const Page = () => {
    return (
        <>
            <Navbar/>

            <PageBanner pageTitle="DevOps and Testing" />

            <ServicesCardDevOpsTesting/>

            <CloudExperience/>

            <WeWorkForIndustries/>

            <Footer/>

            <SchemaMarkupServicePage
                name="DevOps & Testing Services | CHORN"
                description="CHORN offers expert DevOps and testing services to streamline your software development process. Ensure high performance and quality with our continuous integration, automated testing, and cloud-based solutions."
                url="https://chorn.in.th/technical-expertise/devops-testing/"
            />
        </>
    );
};

export default Page;
