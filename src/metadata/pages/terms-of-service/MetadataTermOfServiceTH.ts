import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataTermOfServiceTH: Metadata = {
    title: "เงื่อนไขการให้บริการ | CHORN",
    description: "CHORN จัดทำเงื่อนไขการให้บริการเพื่อควบคุมการใช้งานเว็บไซต์ การเข้าถึงหรือการใช้งานเว็บไซต์นี้ถือว่าคุณยอมรับที่จะปฏิบัติตามเงื่อนไขเหล่านี้",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: metadataLink(LanguageCode.th, MetaLinks.termOfServices).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "เงื่อนไขการให้บริการ | CHORN",
        description: "CHORN จัดทำเงื่อนไขการให้บริการเพื่อควบคุมการใช้งานเว็บไซต์ การเข้าถึงหรือการใช้งานเว็บไซต์นี้ถือว่าคุณยอมรับที่จะปฏิบัติตามเงื่อนไขเหล่านี้",
        images: metadataLink(LanguageCode.th, MetaLinks.termOfServices).openGraph.images,
        url: metadataLink(LanguageCode.th, MetaLinks.termOfServices).openGraph.url,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "เงื่อนไขการให้บริการ | CHORN",
        description: "CHORN จัดทำเงื่อนไขการให้บริการเพื่อควบคุมการใช้งานเว็บไซต์ การเข้าถึงหรือการใช้งานเว็บไซต์นี้ถือว่าคุณยอมรับที่จะปฏิบัติตามเงื่อนไขเหล่านี้",
        images: metadataLink(LanguageCode.th, MetaLinks.termOfServices).twitter.images,
    },
}