import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataPrivacyPolicyFI: Metadata = {
    title: "Tietosuojakäytäntö | CHORN",
    description: "CHORN kunnioittaa yksityisyyttäsi ja on sitoutunut suojaamaan henkilötietojasi. Tämä tietosuojakäytäntö selittää, kuinka tietoja käsitellään verkkosivuston käytön aikana ja evästeiden käyttö analytiikkatarkoituksiin.",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: metadataLink(LanguageCode.fi, MetaLinks.privacyPolicy).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Tietosuojakäytäntö | CHORN",
        description: "CHORN kunnioittaa yksityisyyttäsi ja on sitoutunut suojaamaan henkilötietojasi. Tämä tietosuojakäytäntö selittää, kuinka tietoja käsitellään verkkosivuston käytön aikana ja evästeiden käyttö analytiikkatarkoituksiin.",
        images: metadataLink(LanguageCode.fi, MetaLinks.privacyPolicy).openGraph.images,
        url: metadataLink(LanguageCode.fi, MetaLinks.privacyPolicy).alternates.canonical,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Tietosuojakäytäntö | CHORN",
        description: "CHORN kunnioittaa yksityisyyttäsi ja on sitoutunut suojaamaan henkilötietojasi. Tämä tietosuojakäytäntö selittää, kuinka tietoja käsitellään verkkosivuston käytön aikana ja evästeiden käyttö analytiikkatarkoituksiin.",
        images: metadataLink(LanguageCode.fi, MetaLinks.privacyPolicy).twitter.images,
    },
}