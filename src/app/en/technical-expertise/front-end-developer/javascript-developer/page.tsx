import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import ServicesDetailsJavaScript
    from "@/components/Services/frontend-development/javascript/ServicesDetailsJavaScript";
import CloudExperience from "@/components/Common/CloudExperience";
import {Info} from "@/data/info/Info";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {ChornMetadata} from "@/data/metadata/ChornMetadata";

export const metadata: Metadata = ChornMetadata.frontend.javascript

const Page = () => {

    return (
        <>
            <Navbar/>

            <PageBanner pageTitle={Info.FrontEnd.javascript.features[0].title}/>

            <ServicesDetailsJavaScript/>

            <CloudExperience/>

            <Footer/>

            <SchemaMarkupServicePage
                name="JavaScript | CHORN - Custom Software Development Experts"
                description="Learn how CHORN leverages JavaScript to build scalable, robust, and efficient custom software solutions for businesses across industries."
                url="https://chorn.in.th/technical-expertise/full-stack-developer/javascript-javascript-developer/"
            />
        </>
    );
};

export default Page;
