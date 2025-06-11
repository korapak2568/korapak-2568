// src/app/[locale]/AiBannerFahMain.tsx

import HomeFeatureMain from "../../../components/Features/HomeFeatureMain";
import AboutContent from "@/components/About/AboutContent";
import HomeFrontEndContainer from "@/components/Common/HomeFrontEnd/HomeFrontEndContainer";
import HomeBackEndContainer from "../../../components/Common/HomeBackEnd/HomeBackEndContainer";
import CloudExperience from "../../../components/Common/CloudExperience";
import React from "react";
import {SchemaMarkupHomePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupHomePage";
import type {Metadata} from "next";
import HomeWorkspace from "@/components/Home/HomeWorkspace";
import {MetadataHome} from "@/metadata/main/MetadataHome";
import {headers} from "next/headers";
import AiPloyLandingPage from "@/components/AiCompanions/Main/AiPloyLandingPage";
import AiSolutionsMain from "@/components/AiSolutions/AiSolutionsMain";

export async function generateMetadata(): Promise<Metadata> {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    return MetadataHome[lang]
}

export default async function Home() {
    const headers15 = await headers();
    const lang = headers15.get('x-locale') || 'en';
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "CHORN | AI & Software Solutions",
        "logo": "https://chorn.in.th/images/logo-2025/chorn-logo-2025-circle-md.png",
        "@id": "https://chorn.in.th",
        "url": "https://chorn.in.th",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+66 (0)52 000 548",
            "contactType": "Customer Support",
            "email": "contact@chorn.in.th",
        },
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "405/112, Moo 3, Sannameng Sub-district",
            "addressLocality": "Sansai District",
            "addressRegion": "Chiang Mai",
            "postalCode": "50210",
            "addressCountry": "tonnam"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 18.846558456865996,
            "longitude": 99.05946162698686
        },
        "openingHours": "Mo-Fr 08:30-17:30",
        "sameAs": [
            "https://www.facebook.com/chorn.digital",
            "https://x.com/chorndigital",
            "https://www.linkedin.com/company/chorn"
        ]
    };

    return (
        <>
            <HomeWorkspace lang={lang}/>
            <HomeFeatureMain lang={lang} isTopSpace={true}/>
            <AiPloyLandingPage lang={lang}/>
            <HomeFrontEndContainer lang={lang}/>
            <HomeBackEndContainer lang={lang}/>
            <CloudExperience lang={lang} isHome={true}/>
            <SchemaMarkupHomePage/>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(localBusinessSchema)}}
            />
        </>
    );
}