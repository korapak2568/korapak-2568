import {Metadata} from "next";
import {MetadataLinkAppium} from "@/metadata/pages/devops/appium/common/MetadataLinkAppium";

export const MetadataAppiumNL: Metadata = {
    title: "Appium Testdiensten | CHORN",
    description: "Appium testtechnische expertise voor geautomatiseerde mobiele applicatietests op meerdere platforms om hoogwaardige prestaties te garanderen.",
    alternates: MetadataLinkAppium.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Appium Testen | CHORN",
        description: "Automatiseer uw mobiele app-tests met Appium expertise voor uitgebreide cross-platform testen.",
        images: MetadataLinkAppium.openGraph.images,
        url: MetadataLinkAppium.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Appium Testdiensten | CHORN",
        description: "Zorg ervoor dat uw mobiele apps perfect presteren met Appium testtechnische expertise voor grondige en geautomatiseerde cross-platform testen.",
        images: MetadataLinkAppium.twitter.images,
    },
    keywords: [
        "Appium testen", "Mobiele applicatietesten", "CHORN", "Cloud DevOps",
        "Cross-platform testen", "Testautomatisering", "Kwaliteitsborging",
        "Mobiele testtechnische expertise", "Software testen", "Applicatieprestaties",
        "Testexpertise in Nederland", "Appium testexpertise", "Mobiele applicatietesten"
    ]
};
