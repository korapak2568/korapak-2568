import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import ServicesDetailsPython from "@/components/Services/fullstack-development/python/ServicesDetailsPython";
import CloudExperience from "@/components/Common/CloudExperience";
import {Info} from "@/data/info/Info";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {ChornMetadata} from "@/data/metadata/ChornMetadata";

export const metadata: Metadata = ChornMetadata.backend.python

const Page = () => {

    return (
        <>
            <Navbar/>

            <PageBanner pageTitle={Info.FullStack.python.features[0].title}/>

            <ServicesDetailsPython/>

            <CloudExperience/>

            <Footer/>

            <SchemaMarkupServicePage
                name="Python Full Stack Development | CHORN"
                description="CHORN offers Python full stack development services to build dynamic and scalable web applications."
                url="https://chorn.in.th/technical-expertise/full-stack-developer/python-developer/"
            />
        </>
    );
};

export default Page;
