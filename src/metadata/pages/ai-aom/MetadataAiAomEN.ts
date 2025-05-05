import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataAiAomEN: Metadata = {
    title: "AI Chat Companion | CHORN AI Integration",
    description: "Aom can be accessed through the LINE Application. You can press the Add Friend button or scan the LINE QR Code to add her as a friend. At 21, she's a friendly, vibrant AI companion passionate about healthy living and wellness who provides nutritional tips, exercise routines, and mindfulness practices. With her ability to chat in multiple languages, Aom helps you maintain a balanced lifestyle while keeping things fun.",
    alternates: metadataLink(LanguageCode.en, MetaLinks.aiAom).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Meet Aom - Your Wellness Guide on LINE",
        description: "Connect with Aom, a 21-year-old wellness-focused AI companion on LINE who provides nutritional advice, exercise routines, and mindfulness practices in multiple languages to help you live your healthiest life.",
        images: metadataLink(LanguageCode.en, MetaLinks.aiAom).openGraph.images,
        url: metadataLink(LanguageCode.en, MetaLinks.aiAom).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Aom - Your Healthy Living Coach on LINE",
        description: "Add Aom, your vibrant 21-year-old wellness AI companion on LINE who motivates you with nutritional tips, exercise routines, and mindfulness practices in multiple languages.",
        images: metadataLink(LanguageCode.en, MetaLinks.aiAom).twitter.images,
    },
}