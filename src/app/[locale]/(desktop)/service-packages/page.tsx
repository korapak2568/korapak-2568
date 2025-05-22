import {headers} from "next/headers";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import ServicePackages from "@/components/ServicePackages/ServicePackages";

export default async function Page() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';

    return (
        <>
            <ServicePackages lang={lang}/>
            {/*<SchemaMarkupServicePage*/}
            {/*    name="About Us | CHORN - Custom Software Development Experts"*/}
            {/*    description="Discover CHORN's innovative custom software development solutions and how we empower industries with cutting-edge technology."*/}
            {/*    url="https://chorn.in.th/about-chorn/"*/}
            {/*/>*/}
        </>
    );
}