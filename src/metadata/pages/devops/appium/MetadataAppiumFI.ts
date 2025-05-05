import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataAppiumFI: Metadata = {
    title: "Appium-testauspalvelut | CHORN",
    description: "Appium-testauksen asiantuntemus automatisoituun mobiilisovellusten testaukseen eri alustoilla laadukkaan suorituskyvyn varmistamiseksi.",
    alternates: metadataLink(LanguageCode.fi, MetaLinks.devops.appium).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Appium-testaus | CHORN",
        description: "Automatisoi mobiilisovellustestauksesi Appium-asiantuntemuksella kattavaa monialustatestausta varten.",
        images: metadataLink(LanguageCode.fi, MetaLinks.devops.appium).openGraph.images,
        url: metadataLink(LanguageCode.fi, MetaLinks.devops.appium).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Appium-testauspalvelut | CHORN",
        description: "Varmista, että mobiilisovelluksesi toimivat moitteettomasti Appium-testauksen asiantuntemuksella kattavaan ja automatisoituun monialustatestaamiseen.",
        images: metadataLink(LanguageCode.fi, MetaLinks.devops.appium).twitter.images,
    },
    keywords: [
        "Appium-testaus", "Mobiilisovellusten testaus", "CHORN", "Cloud DevOps",
        "Monialustatestaus", "Testiautomaatiot", "Laadunvarmistus",
        "Mobiilitestausasiantuntemus", "Ohjelmistotestaus", "Sovelluksen suorituskyky",
        "Testausasiantuntemus Suomessa", "Appium-asiantuntemus", "Mobiilisovellustestaus"
    ]
};
