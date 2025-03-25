import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import CloudExperience from "@/components/Common/CloudExperience";
import ServicesDetailsSoapUI from "@/components/Services/cloud-devops/soapui/ServicesDetailsSoapUI";
import {Info} from "@/data/info/Info";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {MetadataChorn} from "@/data/metadata/MetadataChorn";

export const metadata: Metadata = MetadataChorn.devops.soapui

const Page = () => {

    return (
        <>
            <Navbar/>

            <PageBanner pageTitle={Info.DevOps.soapui.features[0].title}/>

            <ServicesDetailsSoapUI/>

            <CloudExperience/>

            <Footer/>

            <SchemaMarkupServicePage
                name="SoapUI Testing Services | CHORN"
                description="CHORN provides expert SoapUI testing services to ensure your web services and APIs are thoroughly tested and reliable."
                url="https://chorn.in.th/technical-expertise/cloud-devops/soapui/"
            />
        </>
    );
};

export default Page;
