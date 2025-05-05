import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataAboutTH: Metadata = {
    title: "เกี่ยวกับ CHORN | การวิเคราะห์ระบบและวิศวกรรมพัฒนาซอฟต์แวร์ครบวงจร",
    description: "ค้นพบความเชี่ยวชาญของ CHORN ในการวิเคราะห์ระบบ การพัฒนาซอฟต์แวร์ครบวงจร และโซลูชันซอฟต์แวร์สมัยใหม่ที่ขับเคลื่อนความสำเร็จทางธุรกิจ",
    alternates: metadataLink(LanguageCode.th, MetaLinks.about).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "CHORN - ผู้เชี่ยวชาญด้านการวิเคราะห์ระบบและวิศวกรรมพัฒนาซอฟต์แวร์ครบวงจร",
        description: "สำรวจความมุ่งมั่นของ CHORN ในการส่งมอบการปรับปรุงระบบล้ำสมัย การพัฒนาซอฟต์แวร์ครบวงจร และการสนับสนุนทางเทคนิคสำหรับธุรกิจ",
        images: metadataLink(LanguageCode.th, MetaLinks.about).openGraph.images,
        url: metadataLink(LanguageCode.th, MetaLinks.about).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "CHORN - ผู้นำด้านการวิเคราะห์ระบบและวิศวกรรมพัฒนาซอฟต์แวร์ครบวงจร",
        description: "ปลดล็อกศักยภาพทางธุรกิจด้วยการวิเคราะห์ระบบขั้นสูง การพัฒนาซอฟต์แวร์ครบวงจร และโซลูชันซอฟต์แวร์สมัยใหม่",
        images: metadataLink(LanguageCode.th, MetaLinks.about).twitter.images,
    },
}