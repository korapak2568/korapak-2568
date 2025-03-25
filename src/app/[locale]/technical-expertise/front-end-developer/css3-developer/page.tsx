import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import ServicesDetailsCss3 from "@/components/Services/frontend-development/css3/ServicesDetailsCss3";
import CloudExperience from "@/components/Common/CloudExperience";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {Info} from "@/data/info/Info";
import {MetadataChorn} from "@/data/metadata/MetadataChorn";

export const metadata: Metadata = MetadataChorn.frontend.css3

const Page = () => {

    return (
        <>
            <Navbar/>

            <PageBanner pageTitle={Info.FrontEnd.css3.features[0].title}/>

            <ServicesDetailsCss3/>

            <CloudExperience/>

            <Footer/>

            <SchemaMarkupServicePage
                name="CSS3 Development Services | CHORN"
                description="Enhance your web applications with CHORN’s CSS3 development services for modern and visually appealing designs."
                url="https://chorn.in.th/technical-expertise/front-end-developer/css3-developer/"
            />
        </>
    );
};

export default Page;
