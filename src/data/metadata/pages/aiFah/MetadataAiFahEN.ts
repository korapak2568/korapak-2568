import {Metadata} from "next";
import {MetadataLinkAiFah} from "@/data/metadata/pages/aiFah/common/MetadataLinkAiFah";

export const MetadataAiFahEN: Metadata = {
    title: "AI Chat Companion | CHORN AI Integration",
    description: "Fah is your AI chat friend on the LINE Application. She's a 20-year-old Thai-inspired companion who's cheerful and approachable. Add her with one click or scan her QR Code to discover Thailand's top destinations, dishes, and cultural gems. Chat in multiple languages while she guides you through Thai culture with youthful energy.",
    alternates: MetadataLinkAiFah.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Fah - Your Thai AI Chat Friend on LINE",
        description: "Meet Fah, your 20-year-old Thai AI friend on LINE who recommends Thailand's best destinations, dishes, and cultural experiences in multiple languages. Add her today!",
        images: MetadataLinkAiFah.openGraph.images,
        url: MetadataLinkAiFah.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Fah - Your Thai Culture Guide on LINE",
        description: "Add Fah, your cheerful 20-year-old Thai AI companion on LINE who helps you explore Thailand's destinations, cuisine, and culture in multiple languages.",
        images: MetadataLinkAiFah.twitter.images,
    },
}