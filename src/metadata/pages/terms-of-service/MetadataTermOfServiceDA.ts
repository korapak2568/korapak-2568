import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataTermOfServiceDA: Metadata = {
    title: "Servicevilkår | CHORN",
    description: "CHORN leverer servicevilkår, der regulerer brugen af denne hjemmeside. Ved at få adgang til eller bruge hjemmesiden accepterer du at overholde disse vilkår.",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: metadataLink(LanguageCode.da, MetaLinks.termOfServices).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Servicevilkår | CHORN",
        description: "CHORN leverer servicevilkår, der regulerer brugen af denne hjemmeside. Ved at få adgang til eller bruge hjemmesiden accepterer du at overholde disse vilkår.",
        images: metadataLink(LanguageCode.da, MetaLinks.termOfServices).openGraph.images,
        url: metadataLink(LanguageCode.da, MetaLinks.termOfServices).openGraph.url,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Servicevilkår | CHORN",
        description: "CHORN leverer servicevilkår, der regulerer brugen af denne hjemmeside. Ved at få adgang til eller bruge hjemmesiden accepterer du at overholde disse vilkår.",
        images: metadataLink(LanguageCode.da, MetaLinks.termOfServices).twitter.images,
    },
}