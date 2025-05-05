import {Metadata} from "next";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataCloudSolutionVI: Metadata = {
    title: "Kiến trúc Giải pháp Đám mây & Phân tích Hệ thống | CHORN | AWS, Azure, GCP, DigitalOcean",
    description: "CHORN cung cấp chuyên môn kỹ thuật về kiến trúc giải pháp đám mây và phân tích hệ thống. Chúng tôi tối ưu hóa cơ sở hạ tầng đám mây trên AWS, Azure, GCP và DigitalOcean, đảm bảo hiệu suất, khả năng mở rộng và tiết kiệm chi phí.",
    alternates: metadataLink(LanguageCode.vi, MetaLinks.cloudSolutions).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Kiến trúc Giải pháp Đám mây & Phân tích Hệ thống | CHORN",
        description: "Khám phá chuyên môn kỹ thuật về kiến trúc giải pháp đám mây và phân tích hệ thống của CHORN. Chúng tôi thiết kế các giải pháp đám mây bền vững, có thể mở rộng và tối ưu hóa trên AWS, Azure, GCP và DigitalOcean.",
        images: metadataLink(LanguageCode.vi, MetaLinks.cloudSolutions).openGraph.images,
        url: metadataLink(LanguageCode.vi, MetaLinks.cloudSolutions).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Kiến trúc Giải pháp Đám mây & Phân tích Hệ thống | CHORN",
        description: "Tối ưu hóa cơ sở hạ tầng đám mây của bạn với chuyên môn kỹ thuật về kiến trúc giải pháp đám mây và phân tích hệ thống của CHORN, bao gồm AWS, Azure, GCP và DigitalOcean.",
        images: metadataLink(LanguageCode.vi, MetaLinks.cloudSolutions).twitter.images,
    },
    keywords: [
        "kiến trúc giải pháp đám mây", "phân tích hệ thống", "kiến trúc AWS", "giải pháp đám mây Azure",
        "kiến trúc GCP", "hạ tầng DigitalOcean", "tối ưu hóa đám mây", "chiến lược đa đám mây",
        "khả năng mở rộng đám mây", "thiết kế hạ tầng đám mây", "phân tích bảo mật đám mây",

        "tư vấn đám mây AWS", "tích hợp hệ thống Azure", "tối ưu hóa chi phí GCP", "giải pháp DigitalOcean",
        "chuyên môn di chuyển đám mây", "tối ưu hóa hiệu suất đám mây", "tích hợp đa đám mây", "ứng dụng gốc đám mây",

        "kiến trúc sư đám mây Việt Nam", "kiến trúc sư AWS Việt Nam", "kiến trúc sư Azure Việt Nam", "kiến trúc sư GCP Việt Nam",
        "nhà phát triển DigitalOcean Việt Nam", "chuyên gia phân tích hệ thống Việt Nam", "chuyên gia hạ tầng đám mây Việt Nam",

        "CHORN", "giải pháp đám mây", "đổi mới kỹ thuật số", "thiết kế hạ tầng đám mây", "hệ thống đám mây có thể mở rộng"
    ]
}