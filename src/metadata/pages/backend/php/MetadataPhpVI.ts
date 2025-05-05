import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataPhpVI: Metadata = {
    title: "Phát triển PHP Full Stack | CHORN",
    description: "Phát triển PHP Full Stack, chuyên môn kỹ thuật để xây dựng các ứng dụng web động và có thể mở rộng.",
    alternates: metadataLink(LanguageCode.vi, MetaLinks.backend.php).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Phát triển PHP | CHORN",
        description: "Tận dụng phát triển PHP Full Stack, chuyên môn kỹ thuật để xây dựng các ứng dụng web có thể mở rộng và động.",
        images: metadataLink(LanguageCode.vi, MetaLinks.backend.php).openGraph.images,
        url: metadataLink(LanguageCode.vi, MetaLinks.backend.php).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Phát triển PHP Full Stack | CHORN",
        description: "Chuyên môn phát triển PHP Full Stack cho các ứng dụng web động và có thể mở rộng.",
        images: metadataLink(LanguageCode.vi, MetaLinks.backend.php).twitter.images,
    },
    keywords: [
        "Phát triển PHP", "Chuyên môn kỹ thuật PHP", "Lập trình viên PHP", "Phát triển PHP tùy chỉnh", "Ứng dụng web PHP",
        "Phát triển PHP Full Stack", "Ứng dụng PHP cho doanh nghiệp", "Phát triển phần mềm tùy chỉnh",
        "Phát triển Symfony", "Phát triển Laravel", "Phát triển Yii Framework", "Phát triển Phalcon",
        "Phát triển Symfony tùy chỉnh", "Phát triển Laravel tùy chỉnh", "Phát triển Yii tùy chỉnh", "Phát triển Phalcon tùy chỉnh",
        "Ứng dụng web có thể mở rộng", "Phát triển backend", "Ứng dụng web hiệu suất cao",
        "Ứng dụng web tùy chỉnh", "Phát triển API", "Phần mềm doanh nghiệp", "Framework PHP",
        "Lập trình viên PHP Thái Lan", "Lập trình viên PHP Bangkok", "Lập trình viên PHP Chiang Mai",
        "Lập trình viên backend Thái Lan", "Lập trình viên full stack Thái Lan", "Kỹ sư phần mềm", "Lập trình viên phần mềm Thái Lan",
        "CHORN", "Đổi mới số", "Phần mềm doanh nghiệp"
    ]
}
