import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import ServicesDetailsVue from "@/components/Services/frontend-development/vue/ServicesDetailsVue";
import CloudExperience from "@/components/Common/CloudExperience";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {Info} from "@/data/info/Info";
import {ChornMetadata} from "@/data/metadata/ChornMetadata";

export const metadata: Metadata = ChornMetadata.frontend.vue

const Page = () => {
    return (
        <>
            <Navbar/>

            <PageBanner pageTitle={Info.FrontEnd.vue.features[0].title}/>

            <ServicesDetailsVue/>

            <CloudExperience/>

            <Footer/>

            <SchemaMarkupServicePage
                name="Vue.js Development Services | CHORN"
                description="CHORN specializes in Vue.js development to create interactive and scalable web applications."
                url="https://chorn.in.th/technical-expertise/front-end-developer/vue-developer/"
            />
        </>
    );
};

export default Page;
