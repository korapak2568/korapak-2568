import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import ServicesDetailsVue from "@/components/Services/frontend-development/vue/ServicesDetailsVue";
import CloudExperience from "@/components/Common/CloudExperience";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataVue} from "@/data/metadata/pages/frontend/vue/common/MetadataVue";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";

export async function generateMetadata(): Promise<Metadata> {
    const lang = headers().get('x-locale') || 'en';
    return MetadataVue[lang]
}

const Page = () => {
    const lang = headers().get('x-locale') || 'en';

    return (
        <>
            <Navbar/>

            <PageBanner pageTitle={InfoTranslation[lang].FrontEnd.vue.features[0].title}/>

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
