// src/app/page.tsx
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/Index/MainBanner";
import Features from "../components/Index/Features";
import AboutContent from "../components/Index/AboutContent";
import FrontEndExperience from "../components/Common/FrontEndExperience";
import FullStackExperience from "../components/Common/FullStackExperience";
import CloudExperience from "../components/Common/CloudExperience";
import Recommendations from "../components/Common/Recommendations";
import SubscribeForm from "../components/Common/SubscribeForm";
import Footer from "../components/Layouts/Footer";
import React from "react";
import {SchemaMarkupHomePage} from "@/components/SchemaMarkup/SchemaMarkupHomePage";

export default function Home() {

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "CHORN | Digital Innovation & Custom Software Solutions",
        "logo": "https://chorn.in.th/chorn-images/logo/chorn-business-logo.png",
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

            <MainBanner/>

            <Features/>

            <AboutContent/>

            <FrontEndExperience/>

            <FullStackExperience/>

            <CloudExperience/>

            <Recommendations/>

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
