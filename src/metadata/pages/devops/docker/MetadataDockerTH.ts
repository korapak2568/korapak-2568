import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataDockerTH: Metadata = {
    title: "บริการ Docker DevOps | CHORN",
    description: "ความเชี่ยวชาญด้าน DevOps บน Docker สำหรับการทำคอนเทนเนอร์และการปรับใช้แอปพลิเคชันที่สามารถขยายขนาดได้อย่างมีประสิทธิภาพ",
    alternates: metadataLink(LanguageCode.th, MetaLinks.devops.docker).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "บริการ Docker DevOps | CHORN",
        description: "ใช้ประโยชน์จาก Docker สำหรับการทำคอนเทนเนอร์และการปรับใช้ซอฟต์แวร์ที่ขยายขนาดได้ด้วยความเชี่ยวชาญด้าน DevOps",
        images: metadataLink(LanguageCode.th, MetaLinks.devops.docker).openGraph.images,
        url: metadataLink(LanguageCode.th, MetaLinks.devops.docker).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "บริการ Docker DevOps | CHORN",
        description: "ความเชี่ยวชาญด้าน DevOps บน Docker สำหรับการทำคอนเทนเนอร์และการปรับใช้แอปพลิเคชันที่สามารถขยายขนาดได้",
        images: metadataLink(LanguageCode.th, MetaLinks.devops.docker).twitter.images,
    },
    keywords: [
        "Docker DevOps", "ความเชี่ยวชาญด้าน Docker", "การทำคอนเทนเนอร์", "CHORN", "DevOps", "การปรับใช้ที่ขยายขนาดได้",
        "การพัฒนาซอฟต์แวร์เฉพาะทาง", "แอปพลิเคชันบนคลาวด์", "DevOps ไทย", "Docker คอนเทนเนอร์"
    ]
};
