import {Metadata} from "next";
import {MetadataLinkPrivacyPolicy} from "@/data/metadata/pages/privacy-policy/common/MetadataLinkPrivacyPolicy";

export const MetadataPrivacyPolicyNL: Metadata = {
    title: "Privacybeleid | CHORN",
    description: "CHORN respecteert uw privacy en zet zich in voor de bescherming van uw persoonlijke gegevens. Dit privacybeleid legt uit hoe gegevens worden verwerkt bij het gebruik van de website en het gebruik van cookies voor analytische doeleinden.",
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
        title: "Privacybeleid | CHORN",
        description: "CHORN respecteert uw privacy en zet zich in voor de bescherming van uw persoonlijke gegevens. Dit privacybeleid legt uit hoe gegevens worden verwerkt bij het gebruik van de website en het gebruik van cookies voor analytische doeleinden.",
        images: MetadataLinkPrivacyPolicy.openGraph.images,
        url: MetadataLinkPrivacyPolicy.openGraph.url,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Privacybeleid | CHORN",
        description: "CHORN respecteert uw privacy en zet zich in voor de bescherming van uw persoonlijke gegevens. Dit privacybeleid legt uit hoe gegevens worden verwerkt bij het gebruik van de website en het gebruik van cookies voor analytische doeleinden.",
        images: MetadataLinkPrivacyPolicy.twitter.images,
    },
}