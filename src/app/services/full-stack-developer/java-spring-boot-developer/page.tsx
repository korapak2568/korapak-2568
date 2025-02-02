import React from "react";
import Navbar from "../../../../components/Layouts/Navbar";
import PageBanner from "../../../../components/Common/PageBanner";
import Footer from "../../../../components/Layouts/Footer";
import ServicesDetailsJava from "@/components/Services/fullstack-development/java/ServicesDetailsJava";
import CloudExperience from "@/components/Common/CloudExperience";
import {Info} from "@/data/info/Info";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {ChornMetadata} from "@/data/metadata/ChornMetadata";

export const metadata: Metadata = ChornMetadata.backend.java

const Page = () => {

    return (
        <>
            <Navbar/>

            <PageBanner pageTitle={Info.FullStack.java.features[0].title}/>

            <ServicesDetailsJava/>

            <CloudExperience/>

            <Footer/>

            <SchemaMarkupServicePage
                name="Java Spring Boot Full Stack Development | CHORN"
                description="CHORN offers Java Spring Boot full stack development services to build robust and scalable enterprise applications."
                url="https://chorn.in.th/services/full-stack-developer/java-spring-boot-developer/"
            />
        </>
    );
};

export default Page;
