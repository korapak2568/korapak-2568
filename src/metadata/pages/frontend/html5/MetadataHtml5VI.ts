import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataHtml5VI: Metadata = {
    title: "Dịch Vụ Phát Triển HTML5 | CHORN",
    description: "Chuyên môn phát triển HTML5 để tạo ra các ứng dụng web phản hồi và tương tác.",
    alternates: metadataLink(LanguageCode.vi, MetaLinks.frontend.html5).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Phát Triển HTML5 | CHORN",
        description: "Xây dựng ứng dụng web hiện đại và tương tác với chuyên môn kỹ thuật.",
        images: metadataLink(LanguageCode.vi, MetaLinks.frontend.html5).openGraph.images,
        url: metadataLink(LanguageCode.vi, MetaLinks.frontend.html5).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Dịch Vụ Phát Triển HTML5 | CHORN",
        description: "Tạo ứng dụng web tương tác với chuyên môn HTML5.",
        images: metadataLink(LanguageCode.vi, MetaLinks.frontend.html5).twitter.images,
    },
    keywords: [
        "Phát triển HTML5", "Chuyên môn kỹ thuật HTML5", "Lập trình viên HTML5", "Phát triển HTML5 tùy chỉnh", "Thiết kế responsive HTML5",
        "Ứng dụng web HTML5", "Phát triển di động HTML5", "Ứng dụng web tùy chỉnh", "Ứng dụng đa nền tảng HTML5",
        "Phát triển phần mềm tùy chỉnh",
        "Ứng dụng một trang", "Phát triển Frontend", "Lập trình viên web", "Ứng dụng web có thể mở rộng",
        "Thiết kế web hiệu suất cao", "Thiết kế web responsive", "Giao diện người dùng động",
        "Lập trình viên HTML5 Thái Lan", "Lập trình viên HTML5 Bangkok", "Lập trình viên HTML5 Chiang Mai", "Lập trình viên Frontend Thái Lan",
        "Lập trình viên web Bangkok", "Kỹ sư phần mềm", "Lập trình viên phần mềm Thái Lan",
        "CHORN", "Đổi mới kỹ thuật số", "Phần mềm doanh nghiệp"
    ]
}
