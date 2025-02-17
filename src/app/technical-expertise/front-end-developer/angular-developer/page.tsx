import React from "react";
import Navbar from "../../../../components/Layouts/Navbar";
import PageBanner from "../../../../components/Common/PageBanner";
import Footer from "../../../../components/Layouts/Footer";
import ServicesDetailsAngular from "@/components/Services/frontend-development/angular/ServicesDetailsAngular";
import CloudExperience from "@/components/Common/CloudExperience";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {Info} from "@/data/info/Info";
import {ChornMetadata} from "@/data/metadata/ChornMetadata";

export const metadata: Metadata = ChornMetadata.frontend.angular

const Page = () => {

    return (
        <>
            <Navbar/>

            <PageBanner pageTitle={Info.FrontEnd.angular.features[0].title}/>

            <ServicesDetailsAngular/>

            <CloudExperience/>

            <Footer/>

            <SchemaMarkupServicePage
                name="Angular Development Services | CHORN"
                description="Expert Angular development services by CHORN. Build dynamic, scalable, and high-performance web applications using Angular."
                url="https://chorn.in.th/technical-expertise/front-end-developer/angular-developer/"
            />
        </>
    );
};

export default Page;
