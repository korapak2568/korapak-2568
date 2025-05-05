import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const Metadata404TH: Metadata = {
    title: "404 - ไม่พบหน้า",
    description: "อุ๊ปส์! เราไม่พบหน้าที่คุณกำลังค้นหา โปรดตรวจสอบ URL หรือกลับไปที่หน้าแรกของเราเพื่อสำรวจ CHORN ต่อไป",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: metadataLink(LanguageCode.th, MetaLinks._404).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "404 - ไม่พบหน้า",
        description: "อุ๊ปส์! เราไม่พบหน้าที่คุณกำลังค้นหา โปรดตรวจสอบ URL หรือกลับไปที่หน้าแรกของเราเพื่อสำรวจ CHORN ต่อไป",
        images: metadataLink(LanguageCode.th, MetaLinks._404).openGraph.images,
        url: metadataLink(LanguageCode.th, MetaLinks._404).alternates.canonical,
        type: "website",
    },
    twitter: {
        title: "404 - ไม่พบหน้า",
        description: "อุ๊ปส์! เราไม่พบหน้าที่คุณกำลังค้นหา โปรดตรวจสอบ URL หรือกลับไปที่หน้าแรกของเราเพื่อสำรวจ CHORN ต่อไป",
        images: metadataLink(LanguageCode.th, MetaLinks._404).twitter.images,
    },
}