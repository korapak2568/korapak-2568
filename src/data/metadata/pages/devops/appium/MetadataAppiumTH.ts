import {Metadata} from "next";
import {MetadataLinkAppium} from "@/data/metadata/pages/devops/appium/common/MetadataLinkAppium";

export const MetadataAppiumTH: Metadata = {
    title: "บริการทดสอบ Appium | CHORN",
    description: "ความเชี่ยวชาญด้านการทดสอบ Appium สำหรับการทดสอบแอปมือถือแบบอัตโนมัติข้ามแพลตฟอร์ม เพื่อให้มั่นใจถึงประสิทธิภาพคุณภาพสูง",
    alternates: MetadataLinkAppium.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "การทดสอบ Appium | CHORN",
        description: "ทำให้การทดสอบแอปมือถือของคุณเป็นอัตโนมัติด้วยความเชี่ยวชาญด้าน Appium เพื่อการทดสอบข้ามแพลตฟอร์มที่ครอบคลุม",
        images: MetadataLinkAppium.openGraph.images,
        url: MetadataLinkAppium.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "บริการทดสอบ Appium | CHORN",
        description: "รับรองว่าแอปมือถือของคุณทำงานได้อย่างไร้ที่ติ ด้วยความเชี่ยวชาญด้านการทดสอบ Appium เพื่อการทดสอบข้ามแพลตฟอร์มแบบอัตโนมัติที่ครอบคลุม",
        images: MetadataLinkAppium.twitter.images,
    },
    keywords: [
        "การทดสอบ Appium", "การทดสอบแอปมือถือ", "CHORN", "Cloud DevOps",
        "การทดสอบข้ามแพลตฟอร์ม", "ระบบทดสอบอัตโนมัติ", "การประกันคุณภาพ",
        "ความเชี่ยวชาญด้านการทดสอบมือถือ", "การทดสอบซอฟต์แวร์", "ประสิทธิภาพของแอป",
        "ความเชี่ยวชาญด้านการทดสอบในประเทศไทย", "ความเชี่ยวชาญด้าน Appium", "การทดสอบแอปพลิเคชันมือถือ"
    ]
};
