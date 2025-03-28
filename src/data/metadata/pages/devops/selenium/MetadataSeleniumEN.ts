import {Metadata} from "next";
import {MetadataLinkSelenium} from "@/data/metadata/pages/devops/selenium/common/MetadataLinkSelenium";

export const MetadataSeleniumEN: Metadata = {
    title: "Selenium Testing Services | CHORN",
    description: "Comprehensive Selenium testing technical expertise to ensure the quality and performance of your applications through automated testing.",
    alternates: MetadataLinkSelenium.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Selenium Testing | CHORN",
        description: "Automate your application testing with Selenium technical expertise for robust and reliable results.",
        images: MetadataLinkSelenium.openGraph.images,
        url: MetadataLinkSelenium.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Selenium Testing Services | CHORN",
        description: "Enhance your application’s quality with Selenium testing technical expertise for automated and effective testing.",
        images: MetadataLinkSelenium.twitter.images,
    },
    keywords: [
        "Selenium testing", "automated testing", "CHORN", "Cloud DevOps",
        "application quality assurance", "test automation", "software testing",
        "quality assurance technical expertise", "testing technical expertise", "test scripts",
        "software testing Thailand", "selenium technical expertise", "web application testing"
    ]
}