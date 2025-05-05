import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataJavaScriptVI: Metadata = {
    title: "JavaScript | CHORN - Chuyên gia phát triển phần mềm tùy chỉnh",
    description: "Sử dụng JavaScript để xây dựng các giải pháp phần mềm tùy chỉnh, có thể mở rộng, mạnh mẽ và hiệu quả cho các doanh nghiệp trong nhiều ngành.",
    alternates: metadataLink(LanguageCode.vi, MetaLinks.frontend.javascript).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "CHORN - Phát triển phần mềm tùy chỉnh với JavaScript",
        description: "Chuyên môn về JavaScript, một công cụ mạnh mẽ để xây dựng các ứng dụng có thể mở rộng và hiệu suất cao. Tìm hiểu lý do tại sao chúng tôi chọn JavaScript cho các giải pháp phần mềm tùy chỉnh.",
        images: metadataLink(LanguageCode.vi, MetaLinks.frontend.javascript).openGraph.images,
        url: metadataLink(LanguageCode.vi, MetaLinks.frontend.javascript).openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "CHORN - Phát triển JavaScript cho các giải pháp phần mềm tùy chỉnh",
        description: "Sử dụng JavaScript để cung cấp các giải pháp phần mềm có thể mở rộng và chất lượng cao, phù hợp với nhu cầu của các doanh nghiệp.",
        images: metadataLink(LanguageCode.vi, MetaLinks.frontend.javascript).twitter.images,
    },
    keywords: [
        "phát triển JavaScript", "chuyên môn JavaScript", "nhà phát triển JavaScript", "phát triển JavaScript tùy chỉnh",
        "ứng dụng web JavaScript", "phát triển JavaScript full stack", "phát triển JavaScript frontend",
        "phát triển phần mềm tùy chỉnh",
        "ứng dụng web có thể mở rộng", "phát triển frontend", "phát triển backend",
        "ứng dụng hiệu suất cao", "giải pháp phần mềm doanh nghiệp", "ứng dụng web tùy chỉnh", "phát triển API",
        "nhà phát triển JavaScript Thái Lan", "nhà phát triển JavaScript Bangkok", "nhà phát triển JavaScript Chiang Mai",
        "nhà phát triển frontend Thái Lan", "nhà phát triển backend Thái Lan", "nhà phát triển full stack Thái Lan",
        "kỹ sư phần mềm", "nhà phát triển phần mềm Thái Lan",
        "CHORN", "đổi mới kỹ thuật số", "phần mềm doanh nghiệp"
    ]
}
