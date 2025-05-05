import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataAiPloyEN: Metadata = {
    title: "AI Chat Companion | CHORN AI Integration",
    description: "Ploy is an AI chat friend using LINE Application. Add her with the Add Friend button or QR code scan. As a creative 17-year-old Thai high school student, she's passionate about drawing, music, photography, and learning. Speaking seven languages, Ploy helps with various subjects and inspires creative expression. She's your friendly guide whether exploring art or doing homework.",
    alternates: metadataLink(LanguageCode.en, MetaLinks.aiPloy).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Meet Ploy - Your Creative Teen AI Friend on LINE",
        description: "Connect with Ploy, a creative 17-year-old Thai student AI who speaks seven languages and shares your passion for art, music, photography, and learning. Add her on LINE today!",
        images: metadataLink(LanguageCode.en, MetaLinks.aiPloy).openGraph.images,
        url: metadataLink(LanguageCode.en, MetaLinks.aiPloy).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Ploy - Your Creative Teen Guide on LINE",
        description: "Add Ploy, your cheerful 17-year-old Thai AI companion on LINE who helps with homework and inspires creativity through art, music, and photography in seven languages.",
        images: metadataLink(LanguageCode.en, MetaLinks.aiPloy).twitter.images,
    },
}