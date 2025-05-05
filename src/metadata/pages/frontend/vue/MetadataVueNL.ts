import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataVueNL: Metadata = {
    title: "Vue.js Ontwikkelingsdiensten | CHORN",
    description: "Gespecialiseerd in Vue.js-ontwikkeling om interactieve en schaalbare webapplicaties te creëren.",
    alternates: metadataLink(LanguageCode.nl, MetaLinks.frontend.vue).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Vue.js Ontwikkeling | CHORN",
        description: "Expertise in Vue.js-ontwikkeling, technische expertise voor het bouwen van moderne webapplicaties.",
        images: metadataLink(LanguageCode.nl, MetaLinks.frontend.vue).openGraph.images,
        url: metadataLink(LanguageCode.nl, MetaLinks.frontend.vue).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Vue.js Ontwikkelingsdiensten | CHORN",
        description: "Verhoog uw webapplicaties met Vue.js-ontwikkelingsexpertise.",
        images: metadataLink(LanguageCode.nl, MetaLinks.frontend.vue).twitter.images,
    },
    keywords: [
        "Vue.js ontwikkeling", "Vue.js technische expertise", "Vue.js ontwikkelaar", "maatwerk Vue.js ontwikkeling", "Vue.js applicaties",
        "Vue.js full-stack ontwikkeling", "Vue.js single-page applicaties", "Vue.js gebruikersinterfaces", "maatwerk webapplicaties",
        "maatwerk softwareontwikkeling",
        "schaalbare webapplicaties", "frontend ontwikkeling", "high-performance webapplicaties",
        "dynamische gebruikersinterfaces", "single-page applicaties", "Vue.js ontwikkelaar",
        "Vue.js ontwikkelaar Thailand", "Vue.js ontwikkelaar Bangkok", "Vue.js ontwikkelaar Chiang Mai", "frontend ontwikkelaar Thailand",
        "webontwikkelaar Bangkok", "software engineer", "softwareontwikkelaar Thailand",
        "CHORN", "digitale innovatie", "enterprise software"
    ]
}
