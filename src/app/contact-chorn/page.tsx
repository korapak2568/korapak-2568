import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import SubscribeForm from "../../components/Common/SubscribeForm";
import ContactInfo from "../../components/Contact/ContactInfo";
import ContactForm from "../../components/Contact/ContactForm";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";

// Define metadata for the Contact2025 page
export const metadata: Metadata = {
    title: "Contact2025 Us | CHORN - Get in Touch for Custom Software Solutions",
    description: "Reach out to CHORN for tailored software solutions. Our experts are here to help you with any inquiries or support you need.",
    alternates: {
        canonical: "https://chorn.in.th/contact-chorn/",
    },
    openGraph: {
        title: "Contact2025 CHORN - Custom Software Development Experts",
        description: "Get in touch with CHORN for expert custom software development solutions. We're here to answer your questions and provide support.",
        images: [
            {
                url: "https://chorn.in.th/chorn-images/metadata/contact-chorn.png",
                width: 1200,
                height: 630,
                alt: "Contact2025 CHORN Banner Image",
            },
        ],
        url: "https://chorn.in.th/contact-chorn/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact2025 CHORN - Let's Build Something Great Together",
        description: "Reach out to CHORN for custom software solutions tailored to your business needs. Contact2025 us for inquiries or support.",
        images: [
            "https://chorn.in.th/chorn-images/metadata/contact-chorn.png",
        ],
    },
};

export default function Page() {
    return (
        <>
            <Navbar/>

            <PageBanner
                pageTitle="Contact2025 CHORN"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Contact2025 CHORN"
                BGImage="/images/page-banner/page-banner-3.jpg"
            />

            <ContactInfo/>

            <ContactForm/>

            <SubscribeForm/>

            <Footer/>

            <SchemaMarkupServicePage
                name="Contact Us | CHORN - Get in Touch for Custom Software Solutions"
                description="Reach out to CHORN for tailored software solutions. Our experts are here to help you with any inquiries or support you need."
                url="https://chorn.in.th/contact-chorn/"
            />
        </>
    );
}
