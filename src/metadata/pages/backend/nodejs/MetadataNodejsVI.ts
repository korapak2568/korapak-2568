import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataNodejsVI: Metadata = {
    title: "Phát triển Full Stack Node.js | CHORN",
    description: "Phát triển Full Stack với Node.js, chuyên môn kỹ thuật để xây dựng ứng dụng web hiệu quả và có khả năng mở rộng.",
    alternates: metadataLink(LanguageCode.vi, MetaLinks.backend.nodejs).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Phát triển Node.js | CHORN",
        description: "Xây dựng ứng dụng web hiệu quả và mở rộng với chuyên môn phát triển Full Stack Node.js.",
        images: metadataLink(LanguageCode.vi, MetaLinks.backend.nodejs).openGraph.images,
        url: metadataLink(LanguageCode.vi, MetaLinks.backend.nodejs).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Phát triển Full Stack Node.js | CHORN",
        description: "Chuyên môn phát triển Full Stack Node.js để xây dựng ứng dụng web hiệu quả và mở rộng.",
        images: metadataLink(LanguageCode.vi, MetaLinks.backend.nodejs).twitter.images
    },
    keywords: [
        "phát triển Node.js", "chuyên môn kỹ thuật Node.js", "lập trình viên Node.js", "phát triển Node.js tùy chỉnh",
        "phát triển Node.js backend", "phát triển Node.js full-stack", "Node.js microservices", "phát triển phần mềm tùy chỉnh",
        "ứng dụng web có thể mở rộng", "phát triển backend", "ứng dụng hiệu suất cao",
        "ứng dụng Node.js cho doanh nghiệp", "phát triển API", "phát triển microservices", "lập trình viên full-stack",
        "lập trình viên Node.js Thái Lan", "lập trình viên Node.js Bangkok", "lập trình viên Node.js Chiang Mai",
        "lập trình viên backend Thái Lan", "lập trình viên full-stack Thái Lan", "kỹ sư phần mềm", "lập trình viên phần mềm Thái Lan",
        "CHORN", "đổi mới kỹ thuật số", "phần mềm doanh nghiệp"
    ]
}