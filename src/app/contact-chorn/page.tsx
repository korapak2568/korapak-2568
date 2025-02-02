import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import SubscribeForm from "../../components/Common/SubscribeForm";
import ContactInfo from "../../components/Contact/ContactInfo";
import {Metadata} from "next";
import {SchemaMarkupServicePage} from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {ChornMetadata} from "@/data/metadata/ChornMetadata";

// Define metadata for the Contact page
export const metadata: Metadata = ChornMetadata.contact

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
