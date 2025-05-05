import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataCss3NL: Metadata = {
    title: "CSS3 Ontwikkelingsdiensten | CHORN",
    description: "Verbeter uw webapplicaties met CSS3-ontwikkeling, technische expertise voor moderne en visueel aantrekkelijke ontwerpen.",
    alternates: metadataLink(LanguageCode.nl, MetaLinks.frontend.css3).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "CSS3 Ontwikkeling | CHORN",
        description: "CSS3-ontwikkeling met technische expertise om stijlvolle en responsieve webontwerpen te maken.",
        images: metadataLink(LanguageCode.nl, MetaLinks.frontend.css3).openGraph.images,
        url: metadataLink(LanguageCode.nl, MetaLinks.frontend.css3).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "CSS3 Ontwikkelingsdiensten | CHORN",
        description: "Maak visueel verbluffende webontwerpen met CSS3 door technische expertise in CSS3-ontwikkeling.",
        images: metadataLink(LanguageCode.nl, MetaLinks.frontend.css3).twitter.images,
    },
    keywords: [
        "CSS3-ontwikkeling", "CSS3 technische expertise", "CSS3-ontwikkelaar", "maatwerk CSS3-ontwikkeling", "responsief CSS3-ontwerp",
        "CSS3-webapplicaties", "CSS3-mobiele ontwikkeling", "maatwerk webapplicaties", "cross-platform apps CSS3",
        "maatwerk softwareontwikkeling",
        "webontwikkeling", "hoogwaardige webdesign", "dynamische gebruikersinterfaces",
        "CSS3-ontwikkelaar Thailand", "CSS3-ontwikkelaar Bangkok", "CSS3-ontwikkelaar Chiang Mai", "frontend ontwikkelaar Thailand",
        "webontwikkelaar Bangkok", "software engineer", "softwareontwikkelaar Thailand",
        "CHORN", "digitale innovatie", "bedrijfssoftware"
    ]
}
