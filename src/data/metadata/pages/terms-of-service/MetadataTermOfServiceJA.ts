import {Metadata} from "next";
import {MetadataLinkTermOfService} from "@/data/metadata/pages/terms-of-service/common/MetadataLinkTermOfService";

export const MetadataTermOfServiceJA: Metadata = {
    title: "利用規約 | CHORN",
    description: "CHORNは、本ウェブサイトの利用を規定する利用規約を提供します。本ウェブサイトにアクセスまたは使用することにより、これらの規約に従うことに同意したものとみなされます。",
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
        title: "利用規約 | CHORN",
        description: "CHORNは、本ウェブサイトの利用を規定する利用規約を提供します。本ウェブサイトにアクセスまたは使用することにより、これらの規約に従うことに同意したものとみなされます。",
        images: MetadataLinkTermOfService.openGraph.images,
        url: MetadataLinkTermOfService.openGraph.url,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "利用規約 | CHORN",
        description: "CHORNは、本ウェブサイトの利用を規定する利用規約を提供します。本ウェブサイトにアクセスまたは使用することにより、これらの規約に従うことに同意したものとみなされます。",
        images: MetadataLinkTermOfService.twitter.images,
    },
}