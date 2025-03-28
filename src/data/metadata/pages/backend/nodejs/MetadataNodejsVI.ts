import {Metadata} from "next";
import {MetadataLinkNodejs} from "@/data/metadata/pages/backend/nodejs/common/MetadataLinkNodejs";

export const MetadataNodejsVI: Metadata = {
    title: "Phát triển Full Stack Go | CHORN",
    description: "Chuyên môn kỹ thuật phát triển full-stack Go để xây dựng các ứng dụng web hiệu quả và có thể mở rộng.",
    alternates: MetadataLinkNodejs.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Phát triển Go | CHORN",
        description: "Xây dựng các ứng dụng web hiệu quả và có thể mở rộng với chuyên môn kỹ thuật phát triển full-stack Go.",
        images: MetadataLinkNodejs.openGraph.images,
        url: MetadataLinkNodejs.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Phát triển Full Stack Go | CHORN",
        description: "Chuyên môn phát triển full-stack Go để cung cấp các ứng dụng web hiệu quả và có thể mở rộng.",
        images: MetadataLinkNodejs.twitter.images,
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