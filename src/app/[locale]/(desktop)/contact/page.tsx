import type {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataAbout} from "@/metadata/main/MetadataAbout";
import ContactContent from "@/components/Contact/ContactContent";
import HomeFeatureMain from "@/components/Features/HomeFeatureMain";
import CloudExperience from "@/components/Common/CloudExperience";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataAbout[lang]
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';

    return (
        <>
            <ContactContent lang={lang}/>
            <CloudExperience lang={lang}/>
            <HomeFeatureMain lang={lang}/>
            <SchemaMarkupServicePage
                name="About Us | CHORN - Custom Software Development Experts"
                description="Discover CHORN's innovative custom software development solutions and how we empower industries with cutting-edge technology."
                url="https://chorn.in.th/about-chorn/"
            />
        </>
    );
}
