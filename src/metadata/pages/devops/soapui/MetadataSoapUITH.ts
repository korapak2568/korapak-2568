import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataSoapUITH: Metadata = {
    title: "บริการทดสอบ SoapUI | CHORN",
    description: "ความเชี่ยวชาญด้านการทดสอบ SoapUI เพื่อให้แน่ใจว่า API และความเชี่ยวชาญทางเทคนิคเว็บของคุณได้รับการทดสอบอย่างทั่วถึงและเชื่อถือได้",
    alternates: metadataLink(LanguageCode.th, MetaLinks.devops.soapui).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "การทดสอบ SoapUI | CHORN",
        description: "มั่นใจในความน่าเชื่อถือของ API และความเชี่ยวชาญทางเทคนิคเว็บของคุณด้วยความเชี่ยวชาญด้านการทดสอบ",
        images: metadataLink(LanguageCode.th, MetaLinks.devops.soapui).openGraph.images,
        url: metadataLink(LanguageCode.th, MetaLinks.devops.soapui).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "บริการทดสอบ SoapUI | CHORN",
        description: "เพิ่มประสิทธิภาพการทดสอบ API ของคุณด้วยความเชี่ยวชาญด้าน SoapUI เพื่อการทดสอบบริการเว็บที่ครอบคลุมและเชื่อถือได้",
        images: metadataLink(LanguageCode.th, MetaLinks.devops.soapui).twitter.images,
    },
    keywords: [
        "การทดสอบ SoapUI", "การทดสอบ API", "CHORN", "Cloud DevOps",
        "การทดสอบบริการเว็บ", "การทดสอบที่เชื่อถือได้", "ระบบอัตโนมัติในการทดสอบ",
        "การประกันคุณภาพ", "การทดสอบซอฟต์แวร์", "ความน่าเชื่อถือของ API",
        "ความเชี่ยวชาญด้านการทดสอบในประเทศไทย", "ความเชี่ยวชาญด้าน SoapUI", "การทดสอบเว็บแอปพลิเคชัน"
    ]
}