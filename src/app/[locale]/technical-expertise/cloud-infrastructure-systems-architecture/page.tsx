import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import CloudExperience from "@/components/Common/CloudExperience";
import CloudInfraPageMain
    from "@/components/Services/cloud-infrastructure-systems-architecture/CloudInfraPageMain";
import {headers} from "next/headers";
import {MetadataCloudSolution} from "@/metadata/pages/cloud-solution/common/MetadataCloudSolution";

export async function generateMetadata(): Promise<Metadata> {
    const lang = headers().get('x-locale') || 'en';
    return MetadataCloudSolution[lang]
}

const Page = () => {
    const lang = headers().get('x-locale') || 'en';

    return (
        <>
            <Navbar/>
            <CloudInfraPageMain lang={lang}/>
            <CloudExperience lang={lang}/>
            <SchemaMarkupServicePage
                name="Cloud Solution Architecture & Systems Analysis | CHORN | AWS, Azure, GCP, DigitalOcean"
                description="CHORN delivers expert cloud solution architecture and system analysis services. We optimize cloud infrastructures across AWS, Azure, GCP, and DigitalOcean, ensuring performance, scalability, and cost-efficiency."
                url="https://chorn.in.th/technical-expertise/cloud-solution-architecture-systems-analysis/"
            />
        </>
    );
};

export default Page;
