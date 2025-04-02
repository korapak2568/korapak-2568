import {Metadata} from "next";
import {MetadataLinkPrivacyPolicy} from "@/metadata/pages/privacy-policy/common/MetadataLinkPrivacyPolicy";

export const MetadataPrivacyPolicyFI: Metadata = {
    title: "Tietosuojakäytäntö | CHORN",
    description: "CHORN kunnioittaa yksityisyyttäsi ja on sitoutunut suojaamaan henkilötietojasi. Tämä tietosuojakäytäntö selittää, kuinka tietoja käsitellään verkkosivuston käytön aikana ja evästeiden käyttö analytiikkatarkoituksiin.",
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
        title: "Tietosuojakäytäntö | CHORN",
        description: "CHORN kunnioittaa yksityisyyttäsi ja on sitoutunut suojaamaan henkilötietojasi. Tämä tietosuojakäytäntö selittää, kuinka tietoja käsitellään verkkosivuston käytön aikana ja evästeiden käyttö analytiikkatarkoituksiin.",
        images: MetadataLinkPrivacyPolicy.openGraph.images,
        url: MetadataLinkPrivacyPolicy.openGraph.url,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Tietosuojakäytäntö | CHORN",
        description: "CHORN kunnioittaa yksityisyyttäsi ja on sitoutunut suojaamaan henkilötietojasi. Tämä tietosuojakäytäntö selittää, kuinka tietoja käsitellään verkkosivuston käytön aikana ja evästeiden käyttö analytiikkatarkoituksiin.",
        images: MetadataLinkPrivacyPolicy.twitter.images,
    },
}