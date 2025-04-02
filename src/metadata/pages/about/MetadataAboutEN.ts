import {Metadata} from "next";
import {MetadataLinkAbout} from "@/metadata/pages/about/common/MetadataLinkAbout";

export const MetadataAboutEN: Metadata = {
    title: "About CHORN | System Analysis & Full-Stack Software Development Engineering",
    description: "Discover CHORN's expertise in system analysis, full-stack development, and modern software solutions that drive business success.",
    alternates: MetadataLinkAbout.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "CHORN - Experts in System Analysis & Full-Stack Software Development Engineering",
        description: "Explore CHORN's commitment to delivering cutting-edge system modernization, full-stack development, and technical support for businesses.",
        images: MetadataLinkAbout.openGraph.images,
        url: MetadataLinkAbout.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "CHORN - Leading System Analysis & Full-Stack Software Development Engineering",
        description: "Unlock business potential with CHORN's advanced system analysis, full-stack development, and modern software solutions.",
        images: MetadataLinkAbout.twitter.images,
    },
}