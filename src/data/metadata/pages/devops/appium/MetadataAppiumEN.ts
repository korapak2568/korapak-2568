import {Metadata} from "next";
import {MetadataLinkAppium} from "@/data/metadata/pages/devops/appium/common/MetadataLinkAppium";

export const MetadataAppiumEN: Metadata = {
    title: "Appium Testing Services | CHORN",
    description: "Appium testing technical expertise for automated mobile app testing across multiple platforms to ensure high-quality performance.",
    alternates: MetadataLinkAppium.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Appium Testing | CHORN",
        description: "Automate your mobile app testing with Appium technical expertise for comprehensive cross-platform testing.",
        images: MetadataLinkAppium.openGraph.images,
        url: MetadataLinkAppium.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Appium Testing Services | CHORN",
        description: "Ensure your mobile apps perform flawlessly with Appium testing technical expertise for thorough and automated cross-platform testing.",
        images: MetadataLinkAppium.twitter.images,
    },
    keywords: [
        "Appium testing", "mobile app testing", "CHORN", "Cloud DevOps",
        "cross-platform testing", "test automation", "quality assurance",
        "mobile testing technical expertise", "software testing", "app performance",
        "testing technical expertise Thailand", "Appium technical expertise", "mobile application testing"
    ]
}