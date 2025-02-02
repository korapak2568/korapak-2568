// src/app/HomeAiSolutionBanner.tsx

import Navbar from "../components/Layouts/Navbar";
import Features from "../components/Index/Features";
import AboutContent from "@/components/About/AboutContent";
import FrontEndExperience from "../components/Common/FrontEndExperience";
import FullStackExperience from "../components/Common/FullStackExperience";
import CloudExperience from "../components/Common/CloudExperience";
import SubscribeForm from "../components/Common/SubscribeForm";
import Footer from "../components/Layouts/Footer";
import React from "react";
import {SchemaMarkupHomePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupHomePage";
import type {Metadata} from "next";
import FlexibleWorkspace from "@/components/Gallery/FlexibleWorkspace";
import {ChornMetadata} from "@/data/metadata/ChornMetadata";

export const metadata: Metadata = ChornMetadata.home

export default function Home() {

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "CHORN | AI & Software Solutions",
        "logo": "https://chorn.in.th/chorn-images/logo/chorn-logo-circle-md.webp",
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
            "addressCountry": "TH"
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
            <Navbar/>
            <FlexibleWorkspace/>
            <Features/>
            <AboutContent/>
            <FrontEndExperience/>
            <FullStackExperience/>
            <CloudExperience/>
            <SubscribeForm/>
            <Footer/>
            <SchemaMarkupHomePage/>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(localBusinessSchema)}}
            />
        </>
    );
}
