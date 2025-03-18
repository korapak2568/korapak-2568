import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import CloudExperience from "@/components/Common/CloudExperience";
import ServicesDetailsKubernetes from "@/components/Services/cloud-devops/kubernetes/ServicesDetailsKubernetes";
import {Info} from "@/data/info/Info";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {ChornMetadata} from "@/data/metadata/ChornMetadata";

export const metadata: Metadata = ChornMetadata.devops.kube

const Page = () => {

    return (
        <>
            <Navbar/>

            <PageBanner pageTitle={Info.DevOps.kubernetes.features[0].title}/>

            <ServicesDetailsKubernetes/>

            <CloudExperience/>

            <Footer/>

            <SchemaMarkupServicePage
                name="Kubernetes DevOps Services | CHORN"
                description="CHORN provides Kubernetes-based DevOps services for automating deployment, scaling, and management of containerized applications."
                url="https://chorn.in.th/technical-expertise/cloud-devops/kubernetes/"
            />
        </>
    );
};

export default Page;
