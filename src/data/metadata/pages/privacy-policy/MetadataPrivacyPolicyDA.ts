import {Metadata} from "next";
import {MetadataLinkPrivacyPolicy} from "@/data/metadata/pages/privacy-policy/common/MetadataLinkPrivacyPolicy";

export const MetadataPrivacyPolicyDA: Metadata = {
    title: "Fortrolighedspolitik | CHORN",
    description: "CHORN respekterer dit privatliv og er forpligtet til at beskytte dine personlige data. Denne fortrolighedspolitik forklarer, hvordan data håndteres, når du bruger hjemmesiden, og brugen af cookies til analyseformål.",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: MetadataLinkPrivacyPolicy.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Fortrolighedspolitik | CHORN",
        description: "CHORN respekterer dit privatliv og er forpligtet til at beskytte dine personlige data. Denne fortrolighedspolitik forklarer, hvordan data håndteres, når du bruger hjemmesiden, og brugen af cookies til analyseformål.",
        images: MetadataLinkPrivacyPolicy.openGraph.images,
        url: MetadataLinkPrivacyPolicy.openGraph.url,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Fortrolighedspolitik | CHORN",
        description: "CHORN respekterer dit privatliv og er forpligtet til at beskytte dine personlige data. Denne fortrolighedspolitik forklarer, hvordan data håndteres, når du bruger hjemmesiden, og brugen af cookies til analyseformål.",
        images: MetadataLinkPrivacyPolicy.twitter.images,
    },
}
