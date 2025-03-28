import {Metadata} from "next";
import {MetadataLinkBackEndMain} from "@/data/metadata/pages/backend/main/common/MetadataLinkBackEndMain";

export const MetadataBackEndMainTH: Metadata = {
    title: "การพัฒนาฝั่งหลังบ้านเอพีไอ | CHORN",
    description: "บริการพัฒนาฝั่งหลังบ้านเอพีไอ ด้วยความเชี่ยวชาญทางเทคนิคโดยใช้เทคโนโลยีสมัยใหม่ เช่น Node.js, Java Spring Boot, .NET Core, Go, Python และ PHP เพื่อสร้างแอปพลิเคชันที่ดีและขยายขนาดตามความต้องการธุรกิจ",
    alternates: MetadataLinkBackEndMain.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "ิการพัฒนาฝั่งหลังบ้านเอพีไอ| CHORN",
        description: "การพัฒนาฝั่งหลังบ้านเอพีไอ ด้วยความเชี่ยวชาญทางเทคนิคโดยใช้ Node.js, Java Spring Boot, .NET Core, Go, Python และ PHP เพื่อสร้างแอปพลิเคชันที่ดีและขยายขนาดตามความต้องการธุรกิจ",
        images: MetadataLinkBackEndMain.openGraph.images,
        url: MetadataLinkBackEndMain.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "การพัฒนาฝั่งหลังบ้านเอพีไอ | CHORN",
        description: "การพัฒนาฝั่งหลังบ้านเอพีไอ เพื่อสร้างแอปพลิเคชันเว็บที่ขยายขนาดได้โดยใช้ Node.js, Java Spring Boot, .NET Core, Go, Python และ PHP",
        images: MetadataLinkBackEndMain.twitter.images,
    },
}
