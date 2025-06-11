import React from "react";
import FrontEndPageMain from "@/components/Services/frontend-development/FrontEndPageMain";
import CloudExperience from "@/components/Common/CloudExperience";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {headers} from "next/headers";
import {MetadataFrontEndMain} from "@/metadata/main/frontend/MetadataFrontEndMain";
import HomeFeatureMain from "@/components/Features/HomeFeatureMain";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataFrontEndMain[lang]
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';

    return (
        <>
            <FrontEndPageMain lang={lang}/>
            <CloudExperience lang={lang}/>
            <HomeFeatureMain lang={lang}/>
            <SchemaMarkupServicePage
                name="Frontend Development Services | CHORN"
                description="CHORN provides expert frontend development services, specializing in modern frameworks like Next.js, React, Angular, Vue, HTML5, and CSS3. Build responsive and scalable websites with cutting-edge technologies."
                url="https://chorn.in.th/technical-expertise/front-end-developer/"
            />
        </>
    );
};