import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataGitHubTH: Metadata = {
    title: "บริการ GitHub DevOps | CHORN",
    description: "ความเชี่ยวชาญด้าน DevOps ที่ใช้ GitHub สำหรับการควบคุมเวอร์ชัน การบูรณาการอย่างต่อเนื่อง และกระบวนการทำงานอัตโนมัติ.",
    alternates: metadataLink(LanguageCode.th, MetaLinks.devops.github).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "บริการ GitHub DevOps | CHORN",
        description: "เพิ่มประสิทธิภาพการทำงานของการพัฒนาด้วยความเชี่ยวชาญ DevOps ที่ใช้ GitHub สำหรับ CI/CD และการควบคุมเวอร์ชัน.",
        images: metadataLink(LanguageCode.th, MetaLinks.devops.github).openGraph.images,
        url: metadataLink(LanguageCode.th, MetaLinks.devops.github).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "บริการ GitHub DevOps | CHORN",
        description: "ปรับปรุงกระบวนการพัฒนาด้วยความเชี่ยวชาญ DevOps ของ GitHub สำหรับการควบคุมเวอร์ชันและการทำงานของ CI/CD.",
        images: metadataLink(LanguageCode.th, MetaLinks.devops.github).twitter.images,
    },
    keywords: [
        "GitHub DevOps", "ความเชี่ยวชาญ GitHub", "การควบคุมเวอร์ชัน", "CI/CD", "DevOps", "การพัฒนาซอฟต์แวร์ที่กำหนดเอง",
        "การบูรณาการอย่างต่อเนื่อง", "DevOps ประเทศไทย", "การทำงานอัตโนมัติ GitHub", "กระบวนการพัฒนาซอฟต์แวร์"
    ]
};
