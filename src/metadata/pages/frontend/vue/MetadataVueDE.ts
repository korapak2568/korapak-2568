import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataVueDE: Metadata = {
    title: "Vue.js Entwicklungsdienste | CHORN",
    description: "Spezialisiert auf Vue.js-Entwicklung zur Erstellung interaktiver und skalierbarer Webanwendungen.",
    alternates: metadataLink(LanguageCode.de, MetaLinks.frontend.vue).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Vue.js Entwicklung | CHORN",
        description: "Expertise in Vue.js-Entwicklung, technische Expertise zur Erstellung moderner Webanwendungen.",
        images: metadataLink(LanguageCode.de, MetaLinks.frontend.vue).openGraph.images,
        url: metadataLink(LanguageCode.de, MetaLinks.frontend.vue).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Vue.js Entwicklungsdienste | CHORN",
        description: "Verbessern Sie Ihre Webanwendungen mit Vue.js-Entwicklungsexpertise.",
        images: metadataLink(LanguageCode.de, MetaLinks.frontend.vue).twitter.images,
    },
    keywords: [
        "Vue.js Entwicklung", "Vue.js technische Expertise", "Vue.js Entwickler", "maßgeschneiderte Vue.js Entwicklung", "Vue.js Anwendungen",
        "Vue.js Full-Stack-Entwicklung", "Vue.js Single-AiBannerFahMain-Anwendungen", "Vue.js Benutzeroberflächen", "maßgeschneiderte Webanwendungen",
        "maßgeschneiderte Softwareentwicklung",
        "skalierbare Webanwendungen", "Frontend-Entwicklung", "leistungsstarke Webanwendungen",
        "dynamische Benutzeroberflächen", "Single-AiBannerFahMain-Anwendungen", "Vue.js Entwickler",
        "Vue.js Entwickler Thailand", "Vue.js Entwickler Bangkok", "Vue.js Entwickler Chiang Mai", "Frontend-Entwickler Thailand",
        "Web-Entwickler Bangkok", "Software-Ingenieur", "Software-Entwickler Thailand",
        "CHORN", "digitale Innovation", "Unternehmenssoftware"
    ]
}
