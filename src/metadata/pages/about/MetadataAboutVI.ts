import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataAboutVI: Metadata = {
    title: "Giới thiệu về CHORN | Phân tích hệ thống & Kỹ thuật phát triển phần mềm Full-Stack",
    description: "Khám phá chuyên môn của CHORN trong phân tích hệ thống, phát triển full-stack, và các giải pháp phần mềm hiện đại thúc đẩy thành công kinh doanh.",
    alternates: metadataLink(LanguageCode.vi, MetaLinks.about).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "CHORN - Chuyên gia trong Phân tích hệ thống & Kỹ thuật phát triển phần mềm Full-Stack",
        description: "Khám phá cam kết của CHORN trong việc cung cấp hiện đại hóa hệ thống tiên tiến, phát triển full-stack và hỗ trợ kỹ thuật cho doanh nghiệp.",
        images: metadataLink(LanguageCode.vi, MetaLinks.about).openGraph.images,
        url: metadataLink(LanguageCode.vi, MetaLinks.about).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "CHORN - Dẫn đầu trong Phân tích hệ thống & Kỹ thuật phát triển phần mềm Full-Stack",
        description: "Khai phá tiềm năng kinh doanh với phân tích hệ thống nâng cao, phát triển full-stack và các giải pháp phần mềm hiện đại của CHORN.",
        images: metadataLink(LanguageCode.vi, MetaLinks.about).twitter.images,
    },
}