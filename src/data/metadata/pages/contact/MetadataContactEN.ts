import {Metadata} from "next";
import {MetadataLinkContact} from "@/data/metadata/pages/contact/common/MetadataLinkContact";

export const MetadataContactEN: Metadata = {
    title: "Contact | CHORN - Get in Touch for Custom Software Solutions",
    description: "Reach out to CHORN for tailored software solutions. Our experts are here to help you with any inquiries or support you need.",
    alternates: MetadataLinkContact.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Contact CHORN - Custom Software Development Experts",
        description: "Get in touch with CHORN for expert custom software development solutions. We're here to answer your questions and provide support.",
        images: MetadataLinkContact.openGraph.images,
        url: MetadataLinkContact.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact CHORN - Let's Build Something Great Together",
        description: "Reach out to CHORN for custom software solutions tailored to your business needs. Contact us for inquiries or support.",
        images: MetadataLinkContact.twitter.images,
    },
}