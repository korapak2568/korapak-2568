import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataHtml5NL: Metadata = {
    title: "HTML5 Ontwikkelingsdiensten | CHORN",
    description: "HTML5 ontwikkelingsdeskundigheid voor het maken van responsieve en interactieve webapplicaties.",
    alternates: metadataLink(LanguageCode.nl, MetaLinks.frontend.html5).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "HTML5 Ontwikkeling | CHORN",
        description: "Bouw moderne en interactieve webapplicaties met technische expertise.",
        images: metadataLink(LanguageCode.nl, MetaLinks.frontend.html5).openGraph.images,
        url: metadataLink(LanguageCode.nl, MetaLinks.frontend.html5).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "HTML5 Ontwikkelingsdiensten | CHORN",
        description: "Maak interactieve webapplicaties met HTML5-technische expertise.",
        images: metadataLink(LanguageCode.nl, MetaLinks.frontend.html5).twitter.images,
    },
    keywords: [
        "HTML5 ontwikkeling", "HTML5 technische expertise", "HTML5 ontwikkelaar", "maatwerk HTML5 ontwikkeling", "HTML5 responsief ontwerp",
        "HTML5 webapplicaties", "HTML5 mobiele ontwikkeling", "maatwerk webapplicaties", "HTML5 cross-platform apps",
        "maatwerk softwareontwikkeling",
        "single-page applicaties", "frontend ontwikkeling", "webontwikkelaar", "schaalbare webapplicaties",
        "high-performance webdesign", "responsief webdesign", "dynamische gebruikersinterfaces",
        "HTML5 ontwikkelaar Thailand", "HTML5 ontwikkelaar Bangkok", "HTML5 ontwikkelaar Chiang Mai", "frontend ontwikkelaar Thailand",
        "webontwikkelaar Bangkok", "software engineer", "software ontwikkelaar Thailand",
        "CHORN", "digitale innovatie", "enterprise software"
    ]
}
