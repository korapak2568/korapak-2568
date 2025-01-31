import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import SubscribeForm from "../../components/Common/SubscribeForm";
import ContactInfo from "../../components/Contact/ContactInfo";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {Version} from "@/data/Version";

// Define metadata for the Contact page
export const metadata: Metadata = {
    title: "Contact | CHORN - Get in Touch for Custom Software Solutions",
    description: "Reach out to CHORN for tailored software solutions. Our experts are here to help you with any inquiries or support you need.",
    alternates: {
        canonical: "https://chorn.in.th/contact-chorn/",
    },
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Contact CHORN - Custom Software Development Experts",
        description: "Get in touch with CHORN for expert custom software development solutions. We're here to answer your questions and provide support.",
        images: [
            {
                url: "https://chorn.in.th/chorn-images/metadata/contact-chorn.png" + Version.ogImage,
                width: 1200,
                height: 630,
                alt: "Contact CHORN Banner Image",
            },
        ],
        url: "https://chorn.in.th/contact-chorn/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact CHORN - Let's Build Something Great Together",
        description: "Reach out to CHORN for custom software solutions tailored to your business needs. Contact us for inquiries or support.",
        images: [
            "https://chorn.in.th/chorn-images/metadata/contact-chorn.png" + Version.ogImage,
        ],
    },
};

export default function Page() {
    return (
        <>
            <Navbar/>
            <PageBanner pageTitle="Contact CHORN"/>
            <ContactInfo/>
            <SubscribeForm/>
            <Footer/>

            <SchemaMarkupServicePage
                name="Contact Us | CHORN - Get in Touch for Custom Software Solutions"
                description="Reach out to CHORN for tailored software solutions. Our experts are here to help you with any inquiries or support you need."
                url="https://chorn.in.th/contact-chorn/"
            />

            <script src="https://platform.linkedin.com/badges/js/profile.js"
                    async defer
                    type="text/javascript">
            </script>
        </>
    );
}
