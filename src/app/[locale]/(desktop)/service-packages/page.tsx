import {headers} from "next/headers";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import ServicePackages from "@/components/ServicePackages/ServicePackages";
import type {Metadata} from "next";
import {MetadataServicePackages} from "@/metadata/main/MetadataServicePackages";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataServicePackages[lang]
}

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';

    return (
        <>
            <ServicePackages lang={lang}/>
            <SchemaMarkupServicePage
                name="Service Packages | Full-Time, Web3, NFT & Urgent Software Support"
                description="Explore flexible service packages including full-time, shared-time, Web3, NFT development, and urgent bug fixing — tailored to your business goals."
                url="https://chorn.in.th/service-packages/"
            />
        </>
    );
}