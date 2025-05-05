import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataAppiumTH: Metadata = {
    title: "บริการทดสอบ Appium | CHORN",
    description: "ความเชี่ยวชาญด้านการทดสอบ Appium สำหรับการทดสอบแอปมือถือแบบอัตโนมัติข้ามแพลตฟอร์ม เพื่อให้มั่นใจถึงประสิทธิภาพคุณภาพสูง",
    alternates: metadataLink(LanguageCode.th, MetaLinks.devops.appium).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "การทดสอบ Appium | CHORN",
        description: "ทำให้การทดสอบแอปมือถือของคุณเป็นอัตโนมัติด้วยความเชี่ยวชาญด้าน Appium เพื่อการทดสอบข้ามแพลตฟอร์มที่ครอบคลุม",
        images: metadataLink(LanguageCode.th, MetaLinks.devops.appium).openGraph.images,
        url: metadataLink(LanguageCode.th, MetaLinks.devops.appium).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "บริการทดสอบ Appium | CHORN",
        description: "รับรองว่าแอปมือถือของคุณทำงานได้อย่างไร้ที่ติ ด้วยความเชี่ยวชาญด้านการทดสอบ Appium เพื่อการทดสอบข้ามแพลตฟอร์มแบบอัตโนมัติที่ครอบคลุม",
        images: metadataLink(LanguageCode.th, MetaLinks.devops.appium).twitter.images,
    },
    keywords: [
        "การทดสอบ Appium", "การทดสอบแอปมือถือ", "CHORN", "Cloud DevOps",
        "การทดสอบข้ามแพลตฟอร์ม", "ระบบทดสอบอัตโนมัติ", "การประกันคุณภาพ",
        "ความเชี่ยวชาญด้านการทดสอบมือถือ", "การทดสอบซอฟต์แวร์", "ประสิทธิภาพของแอป",
        "ความเชี่ยวชาญด้านการทดสอบในประเทศไทย", "ความเชี่ยวชาญด้าน Appium", "การทดสอบแอปพลิเคชันมือถือ"
    ]
};
