import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataGitLabTH: Metadata = {
    title: "บริการ GitLab DevOps | CHORN",
    description: "ความเชี่ยวชาญทางเทคนิค DevOps การรวม GitLab สำหรับการควบคุมเวอร์ชัน การรวมต่อเนื่อง และการทำงานอัตโนมัติ.",
    alternates: metadataLink(LanguageCode.th, MetaLinks.devops.gitlab).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "บริการ GitLab DevOps | CHORN",
        description: "ปรับปรุงกระบวนการพัฒนาด้วยความเชี่ยวชาญ DevOps ที่ใช้ GitLab สำหรับ CI/CD และการควบคุมเวอร์ชัน.",
        images: metadataLink(LanguageCode.th, MetaLinks.devops.gitlab).openGraph.images,
        url: metadataLink(LanguageCode.th, MetaLinks.devops.gitlab).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "บริการ GitLab DevOps | CHORN",
        description: "ทำให้การพัฒนาของคุณราบรื่นด้วยความเชี่ยวชาญ DevOps จาก GitLab สำหรับการควบคุมเวอร์ชันและ CI/CD workflows.",
        images: metadataLink(LanguageCode.th, MetaLinks.devops.gitlab).twitter.images,
    },
    keywords: [
        "GitLab DevOps", "ความเชี่ยวชาญ GitLab", "CI/CD", "การควบคุมเวอร์ชัน", "DevOps", "การทำงานอัตโนมัติ", "DevOps pipeline",
        "DevOps ประเทศไทย", "GitLab การทำงานอัตโนมัติ", "การรวมต่อเนื่อง"
    ]
};
