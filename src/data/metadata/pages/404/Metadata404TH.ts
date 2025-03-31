import {Metadata} from "next";
import {MetadataLink404} from "@/data/metadata/pages/404/common/MetadataLink404";

export const Metadata404TH: Metadata = {
    title: "404 - ไม่พบหน้า",
    description: "อุ๊ปส์! เราไม่พบหน้าที่คุณกำลังค้นหา โปรดตรวจสอบ URL หรือกลับไปที่หน้าแรกของเราเพื่อสำรวจ CHORN ต่อไป",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: MetadataLink404.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "404 - ไม่พบหน้า",
        description: "อุ๊ปส์! เราไม่พบหน้าที่คุณกำลังค้นหา โปรดตรวจสอบ URL หรือกลับไปที่หน้าแรกของเราเพื่อสำรวจ CHORN ต่อไป",
        images: MetadataLink404.openGraph.images,
        url: MetadataLink404.openGraph.url,
        type: "website",
    },
    twitter: {
        title: "404 - ไม่พบหน้า",
        description: "อุ๊ปส์! เราไม่พบหน้าที่คุณกำลังค้นหา โปรดตรวจสอบ URL หรือกลับไปที่หน้าแรกของเราเพื่อสำรวจ CHORN ต่อไป",
        images: MetadataLink404.twitter.images,
    },
}