import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataPrivacyPolicyEN: Metadata = {
    title: "Privacy Policy | CHORN",
    description: "CHORN respects your privacy and is committed to protecting your personal data. This privacy policy explains how any data is handled when using the website and the use of cookies for analytical purposes.",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: metadataLink(LanguageCode.en, MetaLinks.privacyPolicy).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Privacy Policy | CHORN",
        description: "CHORN respects your privacy and is committed to protecting your personal data. This privacy policy explains how any data is handled when using the website and the use of cookies for analytical purposes.",
        images: metadataLink(LanguageCode.en, MetaLinks.privacyPolicy).openGraph.images,
        url: metadataLink(LanguageCode.en, MetaLinks.privacyPolicy).openGraph.url,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Privacy Policy | CHORN",
        description: "CHORN respects your privacy and is committed to protecting your personal data. This privacy policy explains how any data is handled when using the website and the use of cookies for analytical purposes.",
        images: metadataLink(LanguageCode.en, MetaLinks.privacyPolicy).twitter.images,
    },
}