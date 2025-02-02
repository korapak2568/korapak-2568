import React from "react";
import Navbar from "../../../../components/Layouts/Navbar";
import PageBanner from "../../../../components/Common/PageBanner";
import Footer from "../../../../components/Layouts/Footer";
import ServicesDetailsTypeScript
    from "@/components/Services/frontend-development/typescript/ServicesDetailsTypeScript";
import CloudExperience from "@/components/Common/CloudExperience";
import {Info} from "@/data/info/Info";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {ChornMetadata} from "@/data/metadata/ChornMetadata";

export const metadata: Metadata = ChornMetadata.frontend.typescript

const Page = () => {

    return (
        <>
            <Navbar/>

            <PageBanner pageTitle={Info.FrontEnd.typescript.features[0].title}/>

            <ServicesDetailsTypeScript/>

            <CloudExperience/>

            <Footer/>

            <SchemaMarkupServicePage
                name="TypeScript | CHORN - Custom Software Development Experts"
                description="Learn how CHORN leverages TypeScript to build scalable, robust, and efficient custom software solutions for businesses across industries."
                url="https://chorn.in.th/services/full-stack-developer/typescript-javascript-developer/"
            />
        </>
    );
};

export default Page;
