import {Metadata} from "next";
import {MetadataLinkAppium} from "@/metadata/pages/devops/appium/common/MetadataLinkAppium";

export const MetadataAppiumFI: Metadata = {
    title: "Appium-testauspalvelut | CHORN",
    description: "Appium-testauksen asiantuntemus automatisoituun mobiilisovellusten testaukseen eri alustoilla laadukkaan suorituskyvyn varmistamiseksi.",
    alternates: MetadataLinkAppium.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Appium-testaus | CHORN",
        description: "Automatisoi mobiilisovellustestauksesi Appium-asiantuntemuksella kattavaa monialustatestausta varten.",
        images: MetadataLinkAppium.openGraph.images,
        url: MetadataLinkAppium.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Appium-testauspalvelut | CHORN",
        description: "Varmista, että mobiilisovelluksesi toimivat moitteettomasti Appium-testauksen asiantuntemuksella kattavaan ja automatisoituun monialustatestaamiseen.",
        images: MetadataLinkAppium.twitter.images,
    },
    keywords: [
        "Appium-testaus", "Mobiilisovellusten testaus", "CHORN", "Cloud DevOps",
        "Monialustatestaus", "Testiautomaatiot", "Laadunvarmistus",
        "Mobiilitestausasiantuntemus", "Ohjelmistotestaus", "Sovelluksen suorituskyky",
        "Testausasiantuntemus Suomessa", "Appium-asiantuntemus", "Mobiilisovellustestaus"
    ]
};
