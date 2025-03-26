import {Metadata} from "next";
import {MetadataLinkAiCompanion} from "@/data/metadata/pages/aiCompanion/common/MetadataLinkAiCompanion";

export const MetadataAiCompanionTH: Metadata = {
    title: "การแชทด้วยไลน์เชื่อมต่อแบบจำลองภาษาขนาดใหญ่กับเอไอ",
    description: "ทดสอบการแชทด้วยไลน์ เชื่อมต่อกับแบบจำลองภาษาขนาดใหญ่และเอไอ รองรับหลายภาษา",
    alternates: MetadataLinkAiCompanion.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "การแชทด้วยไลน์เชื่อมต่อแบบจำลองภาษาขนาดใหญ่กับเอไอ",
        description: "ทดสอบการแชทด้วยไลน์ เชื่อมต่อกับแบบจำลองภาษาขนาดใหญ่และเอไอ รองรับหลายภาษา",
        images: MetadataLinkAiCompanion.openGraph.images,
        url: MetadataLinkAiCompanion.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "การแชทผ่านด้วยเชื่อมต่อแบบจำลองภาษาขนาดใหญ่กับเอไอ",
        description: "ทดสอบการแชทด้วยไลน์ เชื่อมต่อกับแบบจำลองภาษาขนาดใหญ่และเอไอ รองรับหลายภาษา",
        images: MetadataLinkAiCompanion.twitter.images,
    },
}