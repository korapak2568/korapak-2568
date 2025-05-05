import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataAppiumEN: Metadata = {
    title: "Appium Testing Services | CHORN",
    description: "Appium testing technical expertise for automated mobile app testing across multiple platforms to ensure high-quality performance.",
    alternates: metadataLink(LanguageCode.en, MetaLinks.devops.appium).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Appium Testing | CHORN",
        description: "Automate your mobile app testing with Appium technical expertise for comprehensive cross-platform testing.",
        images: metadataLink(LanguageCode.en, MetaLinks.devops.appium).openGraph.images,
        url: metadataLink(LanguageCode.en, MetaLinks.devops.appium).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Appium Testing Services | CHORN",
        description: "Ensure your mobile apps perform flawlessly with Appium testing technical expertise for thorough and automated cross-platform testing.",
        images: metadataLink(LanguageCode.en, MetaLinks.devops.appium).twitter.images,
    },
    keywords: [
        "Appium testing", "mobile app testing", "CHORN", "Cloud DevOps",
        "cross-platform testing", "test automation", "quality assurance",
        "mobile testing technical expertise", "software testing", "app performance",
        "testing technical expertise Thailand", "Appium technical expertise", "mobile application testing"
    ]
}