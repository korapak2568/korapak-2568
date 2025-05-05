import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataAiCompanionTH: Metadata = {
    title: "การแชทด้วยไลน์เชื่อมต่อแบบจำลองภาษาขนาดใหญ่กับเอไอ",
    description: "ทดสอบการแชทด้วยไลน์ เชื่อมต่อกับแบบจำลองภาษาขนาดใหญ่และเอไอ รองรับหลายภาษา",
    alternates: metadataLink(LanguageCode.th, MetaLinks.aiCompanion).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "การแชทด้วยไลน์เชื่อมต่อแบบจำลองภาษาขนาดใหญ่กับเอไอ",
        description: "ทดสอบการแชทด้วยไลน์ เชื่อมต่อกับแบบจำลองภาษาขนาดใหญ่และเอไอ รองรับหลายภาษา",
        images: metadataLink(LanguageCode.th, MetaLinks.aiCompanion).openGraph.images,
        url: metadataLink(LanguageCode.th, MetaLinks.aiCompanion).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "การแชทผ่านด้วยเชื่อมต่อแบบจำลองภาษาขนาดใหญ่กับเอไอ",
        description: "ทดสอบการแชทด้วยไลน์ เชื่อมต่อกับแบบจำลองภาษาขนาดใหญ่และเอไอ รองรับหลายภาษา",
        images: metadataLink(LanguageCode.th, MetaLinks.aiCompanion).twitter.images,
    },
}