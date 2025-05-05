import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataAngularNL: Metadata = {
    title: "Angular Ontwikkelingsdiensten | CHORN",
    description: "Angular ontwikkelingsservice, bouw dynamische, schaalbare en krachtige webapplicaties met Angular.",
    alternates: metadataLink(LanguageCode.nl, MetaLinks.frontend.angular).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Angular Ontwikkeling | CHORN",
        description: "Angular ontwikkeling met technische expertise om snelle, schaalbare en dynamische webapplicaties te creëren.",
        images: metadataLink(LanguageCode.nl, MetaLinks.frontend.angular).openGraph.images,
        url: metadataLink(LanguageCode.nl, MetaLinks.frontend.angular).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Angular Ontwikkelingsdiensten | CHORN",
        description: "Verbeter uw webapplicaties met professionele Angular ontwikkeling.",
        images: metadataLink(LanguageCode.nl, MetaLinks.frontend.angular).twitter.images,
    },
    keywords: [
        "Angular ontwikkeling", "Angular technische expertise", "Angular ontwikkelaar", "Angular ontwikkeling Thailand",
        "Angular ontwikkeling Bangkok", "Angular ontwikkeling Chiang Mai", "Angular ontwikkelingsbedrijf",
        "aangepaste Angular ontwikkeling", "aangepaste softwareontwikkeling", "enterprise Angular applicaties",
        "frontend ontwikkeling", "single-page applicaties", "dynamische gebruikersinterfaces",
        "high-performance applicaties", "schaalbare webapplicaties", "aangepaste webapplicaties",
        "webontwikkelaar", "full-stack ontwikkelaar", "software-engineer", "softwareontwikkelaar Thailand",
        "Angular ontwikkelaar Thailand", "frontend ontwikkelaar Thailand", "webontwikkelaar Bangkok",
        "Angular ontwikkelaar Chiang Mai", "Angular ontwikkelaar Bangkok", "Angular ontwikkelingsbedrijf",
        "CHORN", "digitale innovatie", "enterprise software",
        "responsive webdesign in Angular", "responsive webdesign Angular", "Angular responsive webdesign"
    ]
}