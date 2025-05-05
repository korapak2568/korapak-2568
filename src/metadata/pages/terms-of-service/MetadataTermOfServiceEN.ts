import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataTermOfServiceEN: Metadata = {
    title: "Term of Service | CHORN",
    description: "CHORN provide the Terms of Service govern the use of this website. By accessing or using the Website, you agree to comply with these Terms.",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: metadataLink(LanguageCode.en, MetaLinks.termOfServices).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Term of Service | CHORN",
        description: "CHORN provide the Terms of Service govern the use of this website. By accessing or using the Website, you agree to comply with these Terms.",
        images: metadataLink(LanguageCode.en, MetaLinks.termOfServices).openGraph.images,
        url: metadataLink(LanguageCode.en, MetaLinks.termOfServices).alternates.canonical,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Term of Service | CHORN",
        description: "CHORN provide the Terms of Service govern the use of this website. By accessing or using the Website, you agree to comply with these Terms.",
        images: metadataLink(LanguageCode.en, MetaLinks.termOfServices).twitter.images,
    },
}