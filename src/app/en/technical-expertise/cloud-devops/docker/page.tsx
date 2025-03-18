import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import CloudExperience from "@/components/Common/CloudExperience";
import ServicesDetailsDocker from "@/components/Services/cloud-devops/docker/ServicesDetailsDocker";
import {Info} from "@/data/info/Info";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {ChornMetadata} from "@/data/metadata/ChornMetadata";

export const metadata: Metadata = ChornMetadata.devops.docker

const Page = () => {

    return (
        <>
            <Navbar/>

            <PageBanner pageTitle={Info.DevOps.docker.features[0].title}/>

            <ServicesDetailsDocker/>

            <CloudExperience/>

            <Footer/>

            <SchemaMarkupServicePage
                name="Docker DevOps Services | CHORN"
                description="CHORN offers Docker-based DevOps services for efficient containerization and scalable application deployment."
                url="https://chorn.in.th/technical-expertise/cloud-devops/docker/"
            />
        </>
    );
};

export default Page;
