import {Metadata} from "next";
import {MetadataLinkPhp} from "@/metadata/pages/backend/php/common/MetadataLinkPhp";

export const MetadataPythonVI: Metadata = {
    title: "Phát Triển Full Stack Python | CHORN",
    description: "Phát triển Full Stack Python, chuyên môn kỹ thuật để xây dựng ứng dụng web động và có thể mở rộng.",
    alternates: MetadataLinkPhp.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Phát Triển Python | CHORN",
        description: "Xây dựng ứng dụng web động và có thể mở rộng với chuyên môn kỹ thuật phát triển Full Stack Python.",
        images: MetadataLinkPhp.openGraph.images,
        url: MetadataLinkPhp.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Phát Triển Full Stack Python | CHORN",
        description: "Chuyên môn kỹ thuật phát triển Full Stack Python cho các ứng dụng web động và có thể mở rộng.",
        images: MetadataLinkPhp.twitter.images,
    },
    keywords: [
        "Phát triển Python", "Chuyên môn Python", "Lập trình viên Python", "Phát triển Python tùy chỉnh", "Ứng dụng web Python",
        "Phát triển Python backend", "Phát triển Full Stack Python", "Phát triển phần mềm tùy chỉnh",
        "Ứng dụng web có thể mở rộng", "Phát triển backend", "Ứng dụng Python cho doanh nghiệp",
        "Ứng dụng hiệu suất cao", "Ứng dụng web tùy chỉnh", "Phát triển API", "Phát triển machine learning",
        "Lập trình viên Python Thái Lan", "Lập trình viên Python Bangkok", "Lập trình viên Python Chiang Mai",
        "Lập trình viên backend Thái Lan", "Kỹ sư phần mềm", "Lập trình viên phần mềm Thái Lan",
        "CHORN", "Đổi mới kỹ thuật số", "Phần mềm doanh nghiệp"
    ]
}
