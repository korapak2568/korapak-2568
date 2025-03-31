import {Metadata} from "next";
import {MetadataLinkTermOfService} from "@/data/metadata/pages/terms-of-service/common/MetadataLinkTermOfService";

export const MetadataTermOfServiceDA: Metadata = {
    title: "Servicevilkår | CHORN",
    description: "CHORN leverer servicevilkår, der regulerer brugen af denne hjemmeside. Ved at få adgang til eller bruge hjemmesiden accepterer du at overholde disse vilkår.",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: MetadataLinkTermOfService.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Servicevilkår | CHORN",
        description: "CHORN leverer servicevilkår, der regulerer brugen af denne hjemmeside. Ved at få adgang til eller bruge hjemmesiden accepterer du at overholde disse vilkår.",
        images: MetadataLinkTermOfService.openGraph.images,
        url: MetadataLinkTermOfService.openGraph.url,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Servicevilkår | CHORN",
        description: "CHORN leverer servicevilkår, der regulerer brugen af denne hjemmeside. Ved at få adgang til eller bruge hjemmesiden accepterer du at overholde disse vilkår.",
        images: MetadataLinkTermOfService.twitter.images,
    },
}