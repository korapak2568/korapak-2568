import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataNextjsNL: Metadata = {
    title: "Next.js Ontwikkelingsdiensten | CHORN",
    description: "Next.js ontwikkelingsdiensten, verbeter je webapplicaties met schaalbare en high-performance oplossingen met behulp van Next.js.",
    alternates: metadataLink(LanguageCode.nl, MetaLinks.frontend.nextjs).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Next.js Ontwikkeling | CHORN",
        description: "Gespecialiseerde Next.js ontwikkeling, technische expertise om snelle en schaalbare webapplicaties te creëren.",
        images: metadataLink(LanguageCode.nl, MetaLinks.frontend.nextjs).openGraph.images,
        url: metadataLink(LanguageCode.nl, MetaLinks.frontend.nextjs).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Next.js Ontwikkelingsdiensten | CHORN",
        description: "Verhoog je webapplicaties met Next.js ontwikkelingstechnische expertise.",
        images: metadataLink(LanguageCode.nl, MetaLinks.frontend.nextjs).twitter.images,
    },
    keywords: [
        "Next.js ontwikkeling", "Next.js technische expertise", "Next.js ontwikkelaar", "op maat gemaakte Next.js ontwikkeling", "server-side rendering",
        "Next.js full stack ontwikkeling", "Next.js SEO optimalisatie", "Next.js applicaties", "op maat gemaakte webapplicaties",
        "schaalbare webapplicaties", "frontend ontwikkeling", "high-performance webapplicaties",
        "single-page applicaties", "dynamische gebruikersinterfaces", "full stack ontwikkelaar", "op maat gemaakte softwareontwikkeling",
        "Next.js ontwikkelaar Nederland", "Next.js ontwikkelaar Amsterdam", "Next.js ontwikkelaar Rotterdam", "frontend ontwikkelaar Nederland",
        "webontwikkelaar Amsterdam", "software ingenieur", "software ontwikkelaar Nederland",
        "CHORN", "digitale innovatie", "enterprise software"
    ]
}
