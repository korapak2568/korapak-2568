import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataPrivacyPolicyTH: Metadata = {
    title: "นโยบายความเป็นส่วนตัว | CHORN",
    description: "CHORN เคารพความเป็นส่วนตัวของคุณและมุ่งมั่นที่จะปกป้องข้อมูลส่วนบุคคลของคุณ นโยบายความเป็นส่วนตัวนี้อธิบายถึงวิธีการจัดการข้อมูลใดๆ เมื่อใช้เว็บไซต์ และเกี่ยวกับการใช้คุกกี้เพื่อวัตถุประสงค์ในการวิเคราะห์",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: metadataLink(LanguageCode.th, MetaLinks.privacyPolicy).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "นโยบายความเป็นส่วนตัว | CHORN",
        description: "CHORN เคารพความเป็นส่วนตัวของคุณและมุ่งมั่นที่จะปกป้องข้อมูลส่วนบุคคลของคุณ นโยบายความเป็นส่วนตัวนี้อธิบายถึงวิธีการจัดการข้อมูลใดๆ เมื่อใช้เว็บไซต์ และเกี่ยวกับการใช้คุกกี้เพื่อวัตถุประสงค์ในการวิเคราะห์",
        images: metadataLink(LanguageCode.th, MetaLinks.privacyPolicy).openGraph.images,
        url: metadataLink(LanguageCode.th, MetaLinks.privacyPolicy).alternates.canonical,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "นโยบายความเป็นส่วนตัว | CHORN",
        description: "CHORN เคารพความเป็นส่วนตัวของคุณและมุ่งมั่นที่จะปกป้องข้อมูลส่วนบุคคลของคุณ นโยบายความเป็นส่วนตัวนี้อธิบายถึงวิธีการจัดการข้อมูลใดๆ เมื่อใช้เว็บไซต์ และเกี่ยวกับการใช้คุกกี้เพื่อวัตถุประสงค์ในการวิเคราะห์",
        images: metadataLink(LanguageCode.th, MetaLinks.privacyPolicy).twitter.images,
    },
}