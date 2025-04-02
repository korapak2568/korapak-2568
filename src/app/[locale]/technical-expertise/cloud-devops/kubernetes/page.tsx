import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import CloudExperience from "@/components/Common/CloudExperience";
import ServicesDetailsKubernetes from "@/components/Services/cloud-devops/kubernetes/ServicesDetailsKubernetes";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataKube} from "@/metadata/pages/devops/kube/common/MetadataKube";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

export async function generateMetadata(): Promise<Metadata> {
    const lang = headers().get('x-locale') || 'en';
    return MetadataKube[lang]
}

const Page = () => {
    const lang = headers().get('x-locale') || 'en';

    return (
        <>
            <Navbar/>

            <PageBanner pageTitle={InfoTranslation[lang].DevOps.kubernetes.features[0].title}/>

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
