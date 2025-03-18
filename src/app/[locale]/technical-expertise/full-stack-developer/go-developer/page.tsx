import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import ServicesDetailsGoLang from "@/components/Services/fullstack-development/go-lang/ServicesDetailsGoLang";
import CloudExperience from "@/components/Common/CloudExperience";
import {Info} from "@/data/info/Info";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {ChornMetadata} from "@/data/metadata/ChornMetadata";

export const metadata: Metadata = ChornMetadata.backend.go

const Page = () => {
    return (
        <>
            <Navbar/>

            <PageBanner pageTitle={Info.FullStack.go.features[0].title}/>

            <ServicesDetailsGoLang/>

            <CloudExperience/>

            <Footer/>

            <SchemaMarkupServicePage
                name="Go Full Stack Development | CHORN"
                description="CHORN offers Go full stack development services for building efficient and scalable web applications."
                url="https://chorn.in.th/technical-expertise/full-stack-developer/go-developer/"
            />
        </>
    );
};

export default Page;
