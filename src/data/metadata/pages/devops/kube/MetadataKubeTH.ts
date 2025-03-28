import {Metadata} from "next";
import {MetadataLinkKube} from "@/data/metadata/pages/devops/kube/common/MetadataLinkKube";

export const MetadataKubeTH: Metadata = {
    title: "บริการ DevOps Kubernetes | CHORN",
    description: "ความเชี่ยวชาญทางเทคนิคด้าน DevOps โดยใช้ Kubernetes เพื่อการติดตั้ง, การขยาย และการจัดการแอปพลิเคชันที่ใช้คอนเทนเนอร์อัตโนมัติ",
    alternates: MetadataLinkKube.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "บริการ DevOps Kubernetes | CHORN",
        description: "เพิ่มประสิทธิภาพโครงสร้างพื้นฐานของคุณด้วยความเชี่ยวชาญทางเทคนิค DevOps โดยใช้ Kubernetes สำหรับการขยายและการจัดการแอปพลิเคชันแบบอัตโนมัติ",
        images: MetadataLinkKube.openGraph.images,
        url: MetadataLinkKube.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "บริการ DevOps Kubernetes | CHORN",
        description: "ใช้ความเชี่ยวชาญ DevOps ของ Kubernetes เพื่อการจัดการและการขยายแอปพลิเคชันที่ใช้คอนเทนเนอร์อัตโนมัติ",
        images: MetadataLinkKube.twitter.images,
    },
    keywords: [
        "Kubernetes DevOps", "ความเชี่ยวชาญทางเทคนิค Kubernetes", "การจัดการคอนเทนเนอร์", "CHORN", "DevOps",
        "การจัดการแอปพลิเคชันที่ขยายได้", "การขยายอัตโนมัติ", "DevOps ประเทศไทย", "แอปพลิเคชันคลาวด์เนทีฟ"
    ]
};
