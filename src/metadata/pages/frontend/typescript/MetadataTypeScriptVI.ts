import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataTypeScriptVI: Metadata = {
    title: "TypeScript | CHORN - Chuyên gia phát triển phần mềm tùy chỉnh",
    description: "Sử dụng TypeScript để xây dựng các giải pháp phần mềm tùy chỉnh có thể mở rộng, mạnh mẽ và hiệu quả cho các doanh nghiệp trong nhiều ngành nghề.",
    alternates: metadataLink(LanguageCode.vi, MetaLinks.frontend.typescript).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "CHORN - Phát triển phần mềm tùy chỉnh với TypeScript",
        description: "Chuyên môn về TypeScript, công cụ mạnh mẽ để xây dựng các ứng dụng có thể mở rộng và hiệu suất cao. Tìm hiểu lý do chúng tôi chọn TypeScript cho các giải pháp phần mềm tùy chỉnh.",
        images: metadataLink(LanguageCode.vi, MetaLinks.frontend.typescript).openGraph.images,
        url: metadataLink(LanguageCode.vi, MetaLinks.frontend.typescript).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "CHORN - Phát triển TypeScript cho các giải pháp phần mềm tùy chỉnh",
        description: "Sử dụng TypeScript để cung cấp các giải pháp phần mềm có thể mở rộng và chất lượng cao phù hợp với nhu cầu của doanh nghiệp.",
        images: metadataLink(LanguageCode.vi, MetaLinks.frontend.typescript).twitter.images,
    },
    keywords: [
        "Phát triển TypeScript", "Chuyên môn TypeScript", "Lập trình viên TypeScript", "Phát triển TypeScript tùy chỉnh",
        "Ứng dụng web TypeScript", "Phát triển Full Stack TypeScript", "Phát triển Frontend TypeScript",
        "Phát triển phần mềm tùy chỉnh",
        "Ứng dụng web có thể mở rộng", "Phát triển Frontend", "Phát triển Backend",
        "Ứng dụng hiệu suất cao", "Giải pháp phần mềm doanh nghiệp", "Ứng dụng web tùy chỉnh", "Phát triển API",
        "Lập trình viên TypeScript Thái Lan", "Lập trình viên TypeScript Bangkok", "Lập trình viên TypeScript Chiang Mai",
        "Lập trình viên Frontend Thái Lan", "Lập trình viên Backend Thái Lan", "Lập trình viên Full Stack Thái Lan",
        "Kỹ sư phần mềm", "Lập trình viên phần mềm Thái Lan",
        "CHORN", "Đổi mới kỹ thuật số", "Phần mềm doanh nghiệp"
    ]
}
