import React from "react";
import Navbar from "../../../../components/Layouts/Navbar";
import PageBanner from "../../../../components/Common/PageBanner";
import Footer from "../../../../components/Layouts/Footer";
import CloudExperience from "@/components/Common/CloudExperience";
import ServicesDetailsGitLab from "@/components/Services/cloud-devops/gitlab/ServicesDetailsGitLab";
import {Info} from "@/data/info/Info";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {ChornMetadata} from "@/data/metadata/ChornMetadata";

export const metadata: Metadata = ChornMetadata.devops.gitlab

const Page = () => {

    return (
        <>
            <Navbar/>

            <PageBanner pageTitle={Info.DevOps.gitlab.features[0].title}/>

            <ServicesDetailsGitLab/>

            <CloudExperience/>

            <Footer/>

            <SchemaMarkupServicePage
                name="GitLab DevOps Services | CHORN"
                description="CHORN provides GitLab-based DevOps services for continuous integration, automation, and version control solutions."
                url="https://chorn.in.th/technical-expertise/cloud-devops/gitlab/"
            />
        </>
    );
};

export default Page;
