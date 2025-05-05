import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataPythonVI: Metadata = {
    title: "Phát Triển Full Stack Python | CHORN",
    description: "Phát triển Full Stack Python, chuyên môn kỹ thuật để xây dựng ứng dụng web động và có thể mở rộng.",
    alternates: metadataLink(LanguageCode.vi, MetaLinks.backend.python).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Phát Triển Python | CHORN",
        description: "Xây dựng ứng dụng web động và có thể mở rộng với chuyên môn kỹ thuật phát triển Full Stack Python.",
        images: metadataLink(LanguageCode.vi, MetaLinks.backend.python).openGraph.images,
        url: metadataLink(LanguageCode.vi, MetaLinks.backend.python).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Phát Triển Full Stack Python | CHORN",
        description: "Chuyên môn kỹ thuật phát triển Full Stack Python cho các ứng dụng web động và có thể mở rộng.",
        images: metadataLink(LanguageCode.vi, MetaLinks.backend.python).twitter.images,
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
