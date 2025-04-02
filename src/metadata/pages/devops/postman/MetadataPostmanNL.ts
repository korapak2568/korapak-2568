import {Metadata} from "next";
import {MetadataLinkPostman} from "@/metadata/pages/devops/postman/common/MetadataLinkPostman";

export const MetadataPostmanNL: Metadata = {
    title: "Postman API Testdiensten | CHORN",
    description: "Bied technische expertise voor API-testen met Postman om de betrouwbaarheid en prestaties van uw webtechnologie te waarborgen.",
    alternates: MetadataLinkPostman.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Postman API Testdiensten | CHORN",
        description: "Zorg ervoor dat uw API's naar verwachting werken met technische expertise in API-testen op basis van Postman.",
        images: MetadataLinkPostman.openGraph.images,
        url: MetadataLinkPostman.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Postman API Testdiensten | CHORN",
        description: "Postman-gebaseerde API-testtechnische expertise om de betrouwbaarheid en prestaties van uw webtechnologie te valideren.",
        images: MetadataLinkPostman.twitter.images,
    },
    keywords: [
        "Postman API-test", "Postman technische expertise", "API-test", "DevOps", "Geautomatiseerde API-testen", "CHORN",
        "Webtechnologie testen", "API-prestaties", "Maatwerk softwareontwikkeling", "DevOps Nederland"
    ]
}
