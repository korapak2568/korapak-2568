import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataReactNL: Metadata = {
    title: "React Ontwikkelingsdiensten | CHORN",
    description: "Top React-ontwikkeling met technische expertise, bouw dynamische en responsieve gebruikersinterfaces met React.",
    alternates: metadataLink(LanguageCode.nl, MetaLinks.frontend.react).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "React Ontwikkeling | CHORN",
        description: "Verbeter je webapplicaties met expert React-ontwikkeling, technische expertise voor krachtige toepassingen.",
        images: metadataLink(LanguageCode.nl, MetaLinks.frontend.react).openGraph.images,
        url: metadataLink(LanguageCode.nl, MetaLinks.frontend.react).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "React Ontwikkelingsdiensten | CHORN",
        description: "Expert React-ontwikkeling, technische expertise voor het creëren van aantrekkelijke gebruikersinterfaces met React.",
        images: metadataLink(LanguageCode.nl, MetaLinks.frontend.react).twitter.images,
    },
    keywords: [
        "React ontwikkeling", "React technische expertise", "React ontwikkelaar", "Aangepaste React ontwikkeling", "React.js toepassingen",
        "Full-stack React ontwikkeling", "React single-page toepassingen", "React gebruikersinterfaces", "Aangepaste webapplicaties",
        "Aangepaste softwareontwikkeling",
        "Schaalbare webapplicaties", "Frontend ontwikkeling", "Hoge prestaties webapplicaties",
        "Dynamische gebruikersinterfaces", "Single-page toepassingen", "React.js ontwikkelaar",
        "React ontwikkelaar Nederland", "React ontwikkelaar Amsterdam", "React ontwikkelaar Rotterdam", "Frontend ontwikkelaar Nederland",
        "Webontwikkelaar Amsterdam", "Software-ingenieur", "Softwareontwikkelaar Nederland",
        "CHORN", "Digitale innovatie", "Enterprise software"
    ]
}
