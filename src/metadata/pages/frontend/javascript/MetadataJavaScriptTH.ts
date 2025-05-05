import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataJavaScriptTH: Metadata = {
    title: "JavaScript | CHORN - ผู้เชี่ยวชาญด้านการพัฒนาซอฟต์แวร์แบบกำหนดเอง",
    description: "พัฒนา JavaScript เพื่อสร้างโซลูชันซอฟต์แวร์แบบกำหนดเองที่สามารถปรับขนาดได้ แข็งแกร่ง และมีประสิทธิภาพสำหรับธุรกิจในหลายอุตสาหกรรม",
    alternates: metadataLink(LanguageCode.th, MetaLinks.frontend.javascript).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "CHORN - การพัฒนาซอฟต์แวร์แบบกำหนดเองด้วย JavaScript",
        description: "ความเชี่ยวชาญด้าน JavaScript เครื่องมือที่ทรงพลังในการสร้างแอปพลิเคชันที่สามารถปรับขนาดได้และมีประสิทธิภาพสูง เรียนรู้เหตุผลที่เราเลือก JavaScript สำหรับโซลูชันซอฟต์แวร์แบบกำหนดเอง",
        images: metadataLink(LanguageCode.th, MetaLinks.frontend.javascript).openGraph.images,
        url: metadataLink(LanguageCode.th, MetaLinks.frontend.javascript).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "CHORN - การพัฒนา JavaScript สำหรับโซลูชันซอฟต์แวร์แบบกำหนดเอง",
        description: "พัฒนา JavaScript เพื่อมอบโซลูชันซอฟต์แวร์ที่สามารถปรับขนาดได้และมีคุณภาพสูงที่ตอบสนองความต้องการของธุรกิจ",
        images: metadataLink(LanguageCode.th, MetaLinks.frontend.javascript).twitter.images,
    },
    keywords: [
        "การพัฒนา JavaScript", "ความเชี่ยวชาญด้าน JavaScript", "นักพัฒนา JavaScript", "การพัฒนา JavaScript แบบกำหนดเอง",
        "แอปพลิเคชันเว็บ JavaScript", "การพัฒนา JavaScript แบบฟูลสแตก", "การพัฒนา JavaScript ฝั่งหน้า",
        "การพัฒนาซอฟต์แวร์แบบกำหนดเอง",
        "แอปพลิเคชันเว็บที่สามารถปรับขนาดได้", "การพัฒนาฝั่งหน้า", "การพัฒนาฝั่งหลัง",
        "แอปพลิเคชันที่มีประสิทธิภาพสูง", "โซลูชันซอฟต์แวร์องค์กร", "แอปพลิเคชันเว็บแบบกำหนดเอง", "การพัฒนา API",
        "นักพัฒนา JavaScript ไทย", "นักพัฒนา JavaScript กรุงเทพ", "นักพัฒนา JavaScript เชียงใหม่",
        "นักพัฒนาฝั่งหน้า ไทย", "นักพัฒนาฝั่งหลัง ไทย", "นักพัฒนาแบบฟูลสแตก ไทย",
        "วิศวกรซอฟต์แวร์", "นักพัฒนาซอฟต์แวร์ ไทย",
        "CHORN", "นวัตกรรมดิจิทัล", "ซอฟต์แวร์องค์กร"
    ]
}
