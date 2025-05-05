import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataBackEndMainTH: Metadata = {
    title: "การพัฒนาฝั่งหลังบ้านเอพีไอ | CHORN",
    description: "บริการพัฒนาฝั่งหลังบ้านเอพีไอ ด้วยความเชี่ยวชาญทางเทคนิคโดยใช้เทคโนโลยีสมัยใหม่ เช่น Node.js, Java Spring Boot, .NET Core, Go, Python และ PHP เพื่อสร้างแอปพลิเคชันที่ดีและขยายขนาดตามความต้องการธุรกิจ",
    alternates: metadataLink(LanguageCode.th, MetaLinks.backend.main).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "ิการพัฒนาฝั่งหลังบ้านเอพีไอ| CHORN",
        description: "การพัฒนาฝั่งหลังบ้านเอพีไอ ด้วยความเชี่ยวชาญทางเทคนิคโดยใช้ Node.js, Java Spring Boot, .NET Core, Go, Python และ PHP เพื่อสร้างแอปพลิเคชันที่ดีและขยายขนาดตามความต้องการธุรกิจ",
        images: metadataLink(LanguageCode.th, MetaLinks.backend.main).openGraph.images,
        url: metadataLink(LanguageCode.th, MetaLinks.backend.main).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "การพัฒนาฝั่งหลังบ้านเอพีไอ | CHORN",
        description: "การพัฒนาฝั่งหลังบ้านเอพีไอ เพื่อสร้างแอปพลิเคชันเว็บที่ขยายขนาดได้โดยใช้ Node.js, Java Spring Boot, .NET Core, Go, Python และ PHP",
        images: metadataLink(LanguageCode.th, MetaLinks.backend.main).twitter.images,
    },
}
