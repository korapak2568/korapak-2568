import {Metadata} from "next";
import {MetadataLinkPrivacyPolicy} from "@/metadata/pages/privacy-policy/common/MetadataLinkPrivacyPolicy";

export const MetadataPrivacyPolicyEN: Metadata = {
    title: "Privacy Policy | CHORN",
    description: "CHORN respects your privacy and is committed to protecting your personal data. This privacy policy explains how any data is handled when using the website and the use of cookies for analytical purposes.",
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
        title: "Privacy Policy | CHORN",
        description: "CHORN respects your privacy and is committed to protecting your personal data. This privacy policy explains how any data is handled when using the website and the use of cookies for analytical purposes.",
        images: MetadataLinkPrivacyPolicy.openGraph.images,
        url: MetadataLinkPrivacyPolicy.openGraph.url,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Privacy Policy | CHORN",
        description: "CHORN respects your privacy and is committed to protecting your personal data. This privacy policy explains how any data is handled when using the website and the use of cookies for analytical purposes.",
        images: MetadataLinkPrivacyPolicy.twitter.images,
    },
}