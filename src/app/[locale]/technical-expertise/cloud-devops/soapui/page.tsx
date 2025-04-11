import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import FooterMain from "@/components/Footer/FooterMain";
import CloudExperience from "@/components/Common/CloudExperience";
import ServicesDetailsSoapUI from "@/components/Services/cloud-devops/soapui/ServicesDetailsSoapUI";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataSoapUI} from "@/metadata/pages/devops/soapui/common/MetadataSoapui";

export async function generateMetadata(): Promise<Metadata> {
    const lang = headers().get('x-locale') || 'en';
    return MetadataSoapUI[lang]
}

const Page = () => {
    const lang = headers().get('x-locale') || 'en';

    return (
        <>
            <Navbar/>
            <ServicesDetailsSoapUI lang={lang}/>
            <CloudExperience lang={lang}/>
            <FooterMain lang={lang}/>
            <SchemaMarkupServicePage
                name="SoapUI Testing Services | CHORN"
                description="CHORN provides expert SoapUI testing services to ensure your web services and APIs are thoroughly tested and reliable."
                url="https://chorn.in.th/technical-expertise/cloud-devops/soapui/"
            />
        </>
    );
};

export default Page;
