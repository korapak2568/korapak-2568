import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataTermOfServiceJA: Metadata = {
    title: "利用規約 | CHORN",
    description: "CHORNは、本ウェブサイトの利用を規定する利用規約を提供します。本ウェブサイトにアクセスまたは使用することにより、これらの規約に従うことに同意したものとみなされます。",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: metadataLink(LanguageCode.ja, MetaLinks.termOfServices).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "利用規約 | CHORN",
        description: "CHORNは、本ウェブサイトの利用を規定する利用規約を提供します。本ウェブサイトにアクセスまたは使用することにより、これらの規約に従うことに同意したものとみなされます。",
        images: metadataLink(LanguageCode.ja, MetaLinks.termOfServices).openGraph.images,
        url: metadataLink(LanguageCode.ja, MetaLinks.termOfServices).alternates.canonical,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "利用規約 | CHORN",
        description: "CHORNは、本ウェブサイトの利用を規定する利用規約を提供します。本ウェブサイトにアクセスまたは使用することにより、これらの規約に従うことに同意したものとみなされます。",
        images: metadataLink(LanguageCode.ja, MetaLinks.termOfServices).twitter.images,
    },
}