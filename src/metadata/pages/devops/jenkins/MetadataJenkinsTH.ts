import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataJenkinsTH: Metadata = {
    title: "บริการ DevOps Jenkins | CHORN",
    description: "ความเชี่ยวชาญด้านเทคนิค DevOps บน Jenkins สำหรับการทำงานอัตโนมัติในกระบวนการสร้าง, ทดสอบ และการปรับใช้ในสายการพัฒนาของคุณ",
    alternates: metadataLink(LanguageCode.th, MetaLinks.devops.jenkins).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "บริการ DevOps Jenkins | CHORN",
        description: "ทำให้งานพัฒนาของคุณเป็นอัตโนมัติด้วยความเชี่ยวชาญด้าน DevOps บน Jenkins สำหรับการผสานรวมและการปรับใช้ที่ต่อเนื่อง",
        images: metadataLink(LanguageCode.th, MetaLinks.devops.jenkins).openGraph.images,
        url: metadataLink(LanguageCode.th, MetaLinks.devops.jenkins).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "บริการ DevOps Jenkins | CHORN",
        description: "เพิ่มประสิทธิภาพวงจรการพัฒนาซอฟต์แวร์ของคุณด้วยความเชี่ยวชาญด้าน DevOps บน Jenkins จาก CHORN สำหรับการทำงานอัตโนมัติใน CI/CD",
        images: metadataLink(LanguageCode.th, MetaLinks.devops.jenkins).twitter.images,
    },
    keywords: [
        "Jenkins DevOps", "ความเชี่ยวชาญด้าน Jenkins", "การทำงานอัตโนมัติ CI/CD", "DevOps", "การผสานรวมอย่างต่อเนื่อง", "DevOps ไทย",
        "Jenkins pipeline", "การทดสอบอัตโนมัติ", "การทำงานอัตโนมัติในกระบวนการสร้าง", "การพัฒนาซอฟต์แวร์ตามสั่ง"
    ]
};
