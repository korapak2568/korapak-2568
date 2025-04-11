import React from "react";
import CloudExperience from "@/components/Common/CloudExperience";
import ServicesDetailsKubernetes from "@/components/Services/cloud-devops/kubernetes/ServicesDetailsKubernetes";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataKube} from "@/metadata/pages/devops/kube/common/MetadataKube";

export async function generateMetadata(): Promise<Metadata> {
    const lang = headers().get('x-locale') || 'en';
    return MetadataKube[lang]
}

export default function Page() {
    const lang = headers().get('x-locale') || 'en';

    return (
        <>
            <ServicesDetailsKubernetes lang={lang}/>
            <CloudExperience lang={lang}/>
            <SchemaMarkupServicePage
                name="Kubernetes DevOps Services | CHORN"
                description="CHORN provides Kubernetes-based DevOps services for automating deployment, scaling, and management of containerized applications."
                url="https://chorn.in.th/technical-expertise/cloud-devops/kubernetes/"
            />
        </>
    )
}