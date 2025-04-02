import {Metadata} from "next";
import {MetadataLinkSelenium} from "@/metadata/pages/devops/selenium/common/MetadataLinkSelenium";

export const MetadataSeleniumTH: Metadata = {
    title: "บริการทดสอบ Selenium | CHORN",
    description: "ความเชี่ยวชาญในการทดสอบ Selenium ครอบคลุมเพื่อรับประกันคุณภาพและประสิทธิภาพของแอปพลิเคชันของคุณผ่านการทดสอบอัตโนมัติ",
    alternates: MetadataLinkSelenium.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "การทดสอบ Selenium | CHORN",
        description: "ทำให้การทดสอบแอปพลิเคชันของคุณเป็นอัตโนมัติด้วยความเชี่ยวชาญในการทดสอบ Selenium เพื่อผลลัพธ์ที่แข็งแกร่งและเชื่อถือได้",
        images: MetadataLinkSelenium.openGraph.images,
        url: MetadataLinkSelenium.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "บริการทดสอบ Selenium | CHORN",
        description: "เพิ่มคุณภาพของแอปพลิเคชันของคุณด้วยความเชี่ยวชาญในการทดสอบ Selenium เพื่อการทดสอบอัตโนมัติที่มีประสิทธิภาพ",
        images: MetadataLinkSelenium.twitter.images,
    },
    keywords: [
        "การทดสอบ Selenium", "การทดสอบอัตโนมัติ", "CHORN", "Cloud DevOps",
        "การรับประกันคุณภาพแอปพลิเคชัน", "การทดสอบอัตโนมัติ", "การทดสอบซอฟต์แวร์",
        "ความเชี่ยวชาญทางเทคนิคในการรับประกันคุณภาพ", "ความเชี่ยวชาญทางเทคนิคในการทดสอบ", "สคริปต์ทดสอบ",
        "การทดสอบซอฟต์แวร์ประเทศไทย", "ความเชี่ยวชาญทางเทคนิค Selenium", "การทดสอบแอปพลิเคชันเว็บ"
    ]
}