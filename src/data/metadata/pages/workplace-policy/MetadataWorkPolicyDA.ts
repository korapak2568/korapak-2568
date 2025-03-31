import {Metadata} from "next";
import {MetadataLinkWorkPolicy} from "@/data/metadata/pages/workplace-policy/common/MetadataLinkWorkPolicy";

export const MetadataWorkPolicyDA: Metadata = {
    title: "Arbejdsstrategi | CHORN",
    description: "CHORN tilpasser sig forskellige arbejdsmodeller, herunder fjernarbejde, kontorarbejde og hybridmodeller, skræddersyet til de specifikke behov i hvert projekt. Denne tilgang sikrer problemfri kommunikation og effektivitet.",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: MetadataLinkWorkPolicy.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Arbejdsstrategi | CHORN",
        description: "CHORN tilpasser sig forskellige arbejdsmodeller, herunder fjernarbejde, kontorarbejde og hybridmodeller, skræddersyet til de specifikke behov i hvert projekt. Denne tilgang sikrer problemfri kommunikation og effektivitet.",
        images: MetadataLinkWorkPolicy.openGraph.images,
        url: MetadataLinkWorkPolicy.openGraph.url,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Arbejdsstrategi | CHORN",
        description: "CHORN tilpasser sig forskellige arbejdsmodeller, herunder fjernarbejde, kontorarbejde og hybridmodeller, skræddersyet til de specifikke behov i hvert projekt. Denne tilgang sikrer problemfri kommunikation og effektivitet.",
        images: MetadataLinkWorkPolicy.twitter.images,
    },
}