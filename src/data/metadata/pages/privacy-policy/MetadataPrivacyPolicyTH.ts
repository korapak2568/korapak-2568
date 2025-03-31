import {Metadata} from "next";
import {MetadataLinkPrivacyPolicy} from "@/data/metadata/pages/privacy-policy/common/MetadataLinkPrivacyPolicy";

export const MetadataPrivacyPolicyTH: Metadata = {
    title: "นโยบายความเป็นส่วนตัว | CHORN",
    description: "CHORN เคารพความเป็นส่วนตัวของคุณและมุ่งมั่นที่จะปกป้องข้อมูลส่วนบุคคลของคุณ นโยบายความเป็นส่วนตัวนี้อธิบายถึงวิธีการจัดการข้อมูลใดๆ เมื่อใช้เว็บไซต์ และเกี่ยวกับการใช้คุกกี้เพื่อวัตถุประสงค์ในการวิเคราะห์",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: MetadataLinkPrivacyPolicy.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "นโยบายความเป็นส่วนตัว | CHORN",
        description: "CHORN เคารพความเป็นส่วนตัวของคุณและมุ่งมั่นที่จะปกป้องข้อมูลส่วนบุคคลของคุณ นโยบายความเป็นส่วนตัวนี้อธิบายถึงวิธีการจัดการข้อมูลใดๆ เมื่อใช้เว็บไซต์ และเกี่ยวกับการใช้คุกกี้เพื่อวัตถุประสงค์ในการวิเคราะห์",
        images: MetadataLinkPrivacyPolicy.openGraph.images,
        url: MetadataLinkPrivacyPolicy.openGraph.url,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "นโยบายความเป็นส่วนตัว | CHORN",
        description: "CHORN เคารพความเป็นส่วนตัวของคุณและมุ่งมั่นที่จะปกป้องข้อมูลส่วนบุคคลของคุณ นโยบายความเป็นส่วนตัวนี้อธิบายถึงวิธีการจัดการข้อมูลใดๆ เมื่อใช้เว็บไซต์ และเกี่ยวกับการใช้คุกกี้เพื่อวัตถุประสงค์ในการวิเคราะห์",
        images: MetadataLinkPrivacyPolicy.twitter.images,
    },
}