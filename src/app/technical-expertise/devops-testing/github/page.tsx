import React from "react";
import Navbar from "../../../../components/Layouts/Navbar";
import PageBanner from "../../../../components/Common/PageBanner";
import Footer from "../../../../components/Layouts/Footer";
import CloudExperience from "@/components/Common/CloudExperience";
import ServicesDetailsGitHub from "@/components/Services/devops-testing/github/ServicesDetailsGitHub";
import {Info} from "@/data/info/Info";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {ChornMetadata} from "@/data/metadata/ChornMetadata";

export const metadata: Metadata = ChornMetadata.devops.github

const Page = () => {

    return (
        <>
            <Navbar/>

            <PageBanner pageTitle={Info.DevOps.github.features[0].title}/>

            <ServicesDetailsGitHub/>

            <CloudExperience/>

            <Footer/>

            <SchemaMarkupServicePage
                name="GitHub DevOps Services | CHORN"
                description="CHORN offers DevOps services integrating GitHub for version control, continuous integration, and automated workflows."
                url="https://chorn.in.th/technical-expertise/devops-testing/github/"
            />
        </>
    );
};

export default Page;
