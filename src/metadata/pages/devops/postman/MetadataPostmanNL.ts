import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataPostmanNL: Metadata = {
    title: "Postman API Testdiensten | CHORN",
    description: "Bied technische expertise voor API-testen met Postman om de betrouwbaarheid en prestaties van uw webtechnologie te waarborgen.",
    alternates: metadataLink(LanguageCode.nl, MetaLinks.devops.postman).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Postman API Testdiensten | CHORN",
        description: "Zorg ervoor dat uw API's naar verwachting werken met technische expertise in API-testen op basis van Postman.",
        images: metadataLink(LanguageCode.nl, MetaLinks.devops.postman).openGraph.images,
        url: metadataLink(LanguageCode.nl, MetaLinks.devops.postman).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Postman API Testdiensten | CHORN",
        description: "Postman-gebaseerde API-testtechnische expertise om de betrouwbaarheid en prestaties van uw webtechnologie te valideren.",
        images: metadataLink(LanguageCode.nl, MetaLinks.devops.postman).twitter.images,
    },
    keywords: [
        "Postman API-test", "Postman technische expertise", "API-test", "DevOps", "Geautomatiseerde API-testen", "CHORN",
        "Webtechnologie testen", "API-prestaties", "Maatwerk softwareontwikkeling", "DevOps Nederland"
    ]
}
