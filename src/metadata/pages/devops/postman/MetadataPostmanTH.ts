import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataPostmanTH: Metadata = {
    title: "บริการทดสอบ API ด้วย Postman | CHORN",
    description: "ให้บริการทดสอบ API ด้วยความเชี่ยวชาญทางเทคนิคในการใช้ Postman เพื่อรับประกันความน่าเชื่อถือและประสิทธิภาพของเว็บไซต์ของคุณ.",
    alternates: metadataLink(LanguageCode.th, MetaLinks.devops.postman).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "บริการทดสอบ API ด้วย Postman | CHORN",
        description: "มั่นใจว่า API ของคุณทำงานตามที่คาดหวังด้วยความเชี่ยวชาญในการทดสอบ API ด้วย Postman.",
        images: metadataLink(LanguageCode.th, MetaLinks.devops.postman).openGraph.images,
        url: metadataLink(LanguageCode.th, MetaLinks.devops.postman).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "บริการทดสอบ API ด้วย Postman | CHORN",
        description: "ความเชี่ยวชาญในการทดสอบ API ด้วย Postman เพื่อยืนยันความน่าเชื่อถือและประสิทธิภาพของเว็บไซต์ของคุณ.",
        images: metadataLink(LanguageCode.th, MetaLinks.devops.postman).twitter.images,
    },
    keywords: [
        "การทดสอบ API ด้วย Postman", "ความเชี่ยวชาญทางเทคนิค Postman", "การทดสอบ API", "DevOps", "การทดสอบ API อัตโนมัติ", "CHORN",
        "การทดสอบความเชี่ยวชาญทางเทคนิคเว็บไซต์", "ประสิทธิภาพของ API", "การพัฒนาซอฟต์แวร์แบบกำหนดเอง", "DevOps ประเทศไทย"
    ]
}