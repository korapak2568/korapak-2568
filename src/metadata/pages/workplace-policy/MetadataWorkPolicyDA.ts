import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataWorkPolicyDA: Metadata = {
    title: "Arbejdsstrategi | CHORN",
    description: "CHORN tilpasser sig forskellige arbejdsmodeller, herunder fjernarbejde, kontorarbejde og hybridmodeller, skræddersyet til de specifikke behov i hvert projekt. Denne tilgang sikrer problemfri kommunikation og effektivitet.",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: metadataLink(LanguageCode.da, MetaLinks.workplacePolicy).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Arbejdsstrategi | CHORN",
        description: "CHORN tilpasser sig forskellige arbejdsmodeller, herunder fjernarbejde, kontorarbejde og hybridmodeller, skræddersyet til de specifikke behov i hvert projekt. Denne tilgang sikrer problemfri kommunikation og effektivitet.",
        images: metadataLink(LanguageCode.da, MetaLinks.workplacePolicy).openGraph.images,
        url: metadataLink(LanguageCode.da, MetaLinks.workplacePolicy).alternates.canonical,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Arbejdsstrategi | CHORN",
        description: "CHORN tilpasser sig forskellige arbejdsmodeller, herunder fjernarbejde, kontorarbejde og hybridmodeller, skræddersyet til de specifikke behov i hvert projekt. Denne tilgang sikrer problemfri kommunikation og effektivitet.",
        images: metadataLink(LanguageCode.da, MetaLinks.workplacePolicy).twitter.images,
    },
}