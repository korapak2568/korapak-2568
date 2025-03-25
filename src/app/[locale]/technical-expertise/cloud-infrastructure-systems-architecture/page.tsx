import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import WeWorkForIndustries from "@/components/Common/WeWorkForIndustries";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import CloudExperience from "@/components/Common/CloudExperience";
import ServicesCardCloudInfrastructureSystemsArchitecture
    from "@/components/Services/cloud-infrastructure-systems-architecture/ServicesCardCloudInfrastructureSystemsArchitecture";
import {MetadataChorn} from "@/data/metadata/MetadataChorn";

export const metadata: Metadata = MetadataChorn.cloudSolutions

const Page = () => {
    return (
        <>
            <Navbar/>

            <PageBanner pageTitle="Cloud Solutions" />

            <ServicesCardCloudInfrastructureSystemsArchitecture/>

            <CloudExperience/>

            <WeWorkForIndustries/>

            <Footer/>

            <SchemaMarkupServicePage
                name="Cloud Solution Architecture & Systems Analysis | CHORN | AWS, Azure, GCP, DigitalOcean"
                description="CHORN delivers expert cloud solution architecture and system analysis services. We optimize cloud infrastructures across AWS, Azure, GCP, and DigitalOcean, ensuring performance, scalability, and cost-efficiency."
                url="https://chorn.in.th/technical-expertise/cloud-solution-architecture-systems-analysis/"
            />
        </>
    );
};

export default Page;
