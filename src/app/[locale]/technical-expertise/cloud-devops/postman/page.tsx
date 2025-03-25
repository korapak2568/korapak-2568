import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import CloudExperience from "@/components/Common/CloudExperience";
import ServicesDetailsPostman from "@/components/Services/cloud-devops/postman/ServicesDetailsPostman";
import {Info} from "@/data/info/Info";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {MetadataChorn} from "@/data/metadata/MetadataChorn";

export const metadata: Metadata = MetadataChorn.devops.postman

const Page = () => {

    return (
        <>
            <Navbar/>

            <PageBanner pageTitle={Info.DevOps.postman.features[0].title}/>

            <ServicesDetailsPostman/>

            <CloudExperience/>

            <Footer/>

            <SchemaMarkupServicePage
                name="Postman API Testing Services | CHORN"
                description="CHORN provides API testing services using Postman to ensure the reliability and performance of your web services."
                url="https://chorn.in.th/technical-expertise/cloud-devops/postman/"
            />
        </>
    );
};

export default Page;
