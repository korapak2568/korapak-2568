import {Metadata} from "next";
import {MetadataLinkPostman} from "@/data/metadata/pages/devops/postman/common/MetadataLinkPostman";

export const MetadataPostmanDA: Metadata = {
    title: "Postman API-testtjenester | CHORN",
    description: "Tilbyd teknisk ekspertise til API-test med Postman for at sikre pålideligheden og ydeevnen af din webteknologi.",
    alternates: MetadataLinkPostman.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Postman API-testtjenester | CHORN",
        description: "Sørg for, at dine API'er fungerer som forventet med Postman-baseret API-testteknisk ekspertise.",
        images: MetadataLinkPostman.openGraph.images,
        url: MetadataLinkPostman.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Postman API-testtjenester | CHORN",
        description: "Postman-baseret API-testteknisk ekspertise til at validere pålideligheden og ydeevnen af din webteknologi.",
        images: MetadataLinkPostman.twitter.images,
    },
    keywords: [
        "Postman API-test", "Postman teknisk ekspertise", "API-test", "DevOps", "Automatiserede API-test", "CHORN",
        "Webteknologi test", "API-ydeevne", "Brugerdefineret softwareudvikling", "DevOps Danmark"
    ]
}
