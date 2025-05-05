import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataVueTH: Metadata = {
    title: "บริการพัฒนา Vue.js | CHORN",
    description: "เชี่ยวชาญในการพัฒนา Vue.js เพื่อสร้างแอปพลิเคชันเว็บที่มีความอินเทอร์แอคทีฟและสามารถขยายได้",
    alternates: metadataLink(LanguageCode.th, MetaLinks.frontend.vue).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "พัฒนา Vue.js | CHORN",
        description: "พัฒนา Vue.js โดยผู้เชี่ยวชาญ ใช้ความรู้ทางเทคนิคในการสร้างแอปพลิเคชันเว็บที่ทันสมัย",
        images: metadataLink(LanguageCode.th, MetaLinks.frontend.vue).openGraph.images,
        url: metadataLink(LanguageCode.th, MetaLinks.frontend.vue).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "บริการพัฒนา Vue.js | CHORN",
        description: "ยกระดับแอปพลิเคชันเว็บของคุณด้วยการพัฒนา Vue.js โดยผู้เชี่ยวชาญ",
        images: metadataLink(LanguageCode.th, MetaLinks.frontend.vue).twitter.images,
    },
    keywords: [
        "Vue.js development", "Vue.js technical-expertise", "Vue.js developer", "custom Vue.js development", "Vue.js applications",
        "Vue.js full stack development", "Vue.js single-page applications", "Vue.js user interfaces", "custom web applications",
        "custom software development",
        "scalable web applications", "frontend development", "high-performance web applications",
        "dynamic user interfaces", "single-page applications", "Vue.js developer",
        "Vue.js developer Thailand", "Vue.js developer Bangkok", "Vue.js developer Chiang Mai", "frontend developer Thailand",
        "web developer Bangkok", "software engineer", "software developer Thailand",
        "CHORN", "digital innovation", "enterprise software"
    ]
}