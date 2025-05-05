import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataSeleniumTH: Metadata = {
    title: "บริการทดสอบ Selenium | CHORN",
    description: "ความเชี่ยวชาญในการทดสอบ Selenium ครอบคลุมเพื่อรับประกันคุณภาพและประสิทธิภาพของแอปพลิเคชันของคุณผ่านการทดสอบอัตโนมัติ",
    alternates: metadataLink(LanguageCode.th, MetaLinks.devops.selenium).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "การทดสอบ Selenium | CHORN",
        description: "ทำให้การทดสอบแอปพลิเคชันของคุณเป็นอัตโนมัติด้วยความเชี่ยวชาญในการทดสอบ Selenium เพื่อผลลัพธ์ที่แข็งแกร่งและเชื่อถือได้",
        images: metadataLink(LanguageCode.th, MetaLinks.devops.selenium).openGraph.images,
        url: metadataLink(LanguageCode.th, MetaLinks.devops.selenium).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "บริการทดสอบ Selenium | CHORN",
        description: "เพิ่มคุณภาพของแอปพลิเคชันของคุณด้วยความเชี่ยวชาญในการทดสอบ Selenium เพื่อการทดสอบอัตโนมัติที่มีประสิทธิภาพ",
        images: metadataLink(LanguageCode.th, MetaLinks.devops.selenium).twitter.images,
    },
    keywords: [
        "การทดสอบ Selenium", "การทดสอบอัตโนมัติ", "CHORN", "Cloud DevOps",
        "การรับประกันคุณภาพแอปพลิเคชัน", "การทดสอบอัตโนมัติ", "การทดสอบซอฟต์แวร์",
        "ความเชี่ยวชาญทางเทคนิคในการรับประกันคุณภาพ", "ความเชี่ยวชาญทางเทคนิคในการทดสอบ", "สคริปต์ทดสอบ",
        "การทดสอบซอฟต์แวร์ประเทศไทย", "ความเชี่ยวชาญทางเทคนิค Selenium", "การทดสอบแอปพลิเคชันเว็บ"
    ]
}