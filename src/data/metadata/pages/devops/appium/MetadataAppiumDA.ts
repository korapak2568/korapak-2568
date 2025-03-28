import {Metadata} from "next";
import {MetadataLinkAppium} from "@/data/metadata/pages/devops/appium/common/MetadataLinkAppium";

export const MetadataAppiumDA: Metadata = {
    title: "Appium Testtjenester | CHORN",
    description: "Ekspertise inden for Appium-test til automatiseret test af mobilapplikationer på tværs af flere platforme for at sikre høj ydeevne og kvalitet.",
    alternates: MetadataLinkAppium.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Appium Test | CHORN",
        description: "Automatisér dine mobilapplikationstests med Appium-ekspertise til omfattende test på tværs af platforme.",
        images: MetadataLinkAppium.openGraph.images,
        url: MetadataLinkAppium.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Appium Testtjenester | CHORN",
        description: "Sørg for, at dine mobilapps fungerer fejlfrit med Appium-testekspertise til grundige og automatiserede test på tværs af platforme.",
        images: MetadataLinkAppium.twitter.images,
    },
    keywords: [
        "Appium-test", "Test af mobilapplikationer", "CHORN", "Cloud DevOps",
        "Test på tværs af platforme", "Testautomatisering", "Kvalitetssikring",
        "Ekspertise i mobiltest", "Softwaretest", "Applikationsydelse",
        "Testekspertise i Danmark", "Appium-ekspertise", "Test af mobilapplikationer"
    ]
};
