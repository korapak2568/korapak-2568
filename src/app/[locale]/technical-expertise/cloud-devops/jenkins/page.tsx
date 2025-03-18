import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import CloudExperience from "@/components/Common/CloudExperience";
import ServicesDetailsJenkins from "@/components/Services/cloud-devops/jenkins/ServicesDetailsJenkins";
import {Info} from "@/data/info/Info";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {ChornMetadata} from "@/data/metadata/ChornMetadata";

export const metadata: Metadata = ChornMetadata.devops.jenkins

const Page = () => {

    return (
        <>
            <Navbar/>

            <PageBanner pageTitle={Info.DevOps.jenkins.features[0].title}/>

            <ServicesDetailsJenkins/>

            <CloudExperience/>

            <Footer/>

            <SchemaMarkupServicePage
                name="Jenkins DevOps Services | CHORN"
                description="CHORN offers Jenkins-based DevOps services for automating builds, testing, and deployment in your development pipeline."
                url="https://chorn.in.th/technical-expertise/cloud-devops/jenkins/"
            />
        </>
    );
};

export default Page;
