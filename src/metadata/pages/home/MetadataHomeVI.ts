import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataHomeVI: Metadata = {
    title: "CHORN | Phát triển phần mềm doanh nghiệp và tích hợp hệ thống",
    description: "Nâng cao doanh nghiệp của bạn với phân tích hệ thống chuyên nghiệp và các giải pháp phần mềm tiên tiến. CHORN chuyên về phát triển full-stack, tự động hóa dựa trên AI, điện toán đám mây và hiện đại hóa hệ thống để thúc đẩy đổi mới và hiệu quả.",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: metadataLink(LanguageCode.vi, MetaLinks.home).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "CHORN | Phát triển phần mềm doanh nghiệp và tích hợp hệ thống",
        description: "Nâng cao doanh nghiệp của bạn với phân tích hệ thống chuyên nghiệp và các giải pháp phần mềm tiên tiến. CHORN chuyên về phát triển full-stack, tự động hóa dựa trên AI, điện toán đám mây và hiện đại hóa hệ thống để thúc đẩy đổi mới và hiệu quả.",
        images: metadataLink(LanguageCode.vi, MetaLinks.home).openGraph.images,
        url: metadataLink(LanguageCode.vi, MetaLinks.home).openGraph.url,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "CHORN | Phát triển phần mềm doanh nghiệp và tích hợp hệ thống",
        description: "Nâng cao doanh nghiệp của bạn với phân tích hệ thống chuyên nghiệp và các giải pháp phần mềm tiên tiến. CHORN chuyên về phát triển full-stack, tự động hóa dựa trên AI, điện toán đám mây và hiện đại hóa hệ thống để thúc đẩy đổi mới và hiệu quả.",
        images: metadataLink(LanguageCode.vi, MetaLinks.home).twitter.images,
    },
    keywords: [
        "CHORN", "CHORN phát triển phần mềm tùy chỉnh", "CHORN gia công phần mềm", "CHORN là gì",
        "CHORN phát triển phần mềm tại Việt Nam", "CHORN lập trình viên tại Chiang Mai", "CHORN lập trình viên tại Bangkok",

        "phát triển phần mềm tùy chỉnh", "công ty phát triển phần mềm tùy chỉnh", "gia công phần mềm",
        "chuyên môn kỹ thuật gia công phần mềm", "gia công phát triển phần mềm", "công ty gia công phát triển phần mềm",
        "công ty gia công phần mềm hàng đầu", "công ty gia công phát triển web", "công ty phát triển IT",
        "công ty gia công", "gia công tại Việt Nam", "công ty gia công tại Việt Nam",
        "phát triển phần mềm tại Chiang Mai", "gia công phần mềm tại Chiang Mai", "gia công phần mềm tại Bangkok",

        "kỹ sư phần mềm", "lập trình viên", "lập trình viên frontend", "lập trình viên backend", "lập trình viên full-stack",
        "lập trình viên web", "lập trình viên di động", "lập trình viên React", "lập trình viên Angular", "lập trình viên Java",
        "lập trình viên Node.js", "lập trình viên .NET Core", "lập trình viên PHP", "lập trình viên API", "lập trình viên blockchain",
        "lập trình viên Web3", "lập trình viên microservices", "đổi mới kỹ thuật số", "phần mềm doanh nghiệp", "trang web có thể mở rộng",

        "lập trình viên tại Việt Nam", "lập trình viên tại Chiang Mai", "lập trình viên tại Bangkok",
        "kỹ sư phần mềm tại Việt Nam", "lập trình viên frontend tại Việt Nam", "lập trình viên backend tại Việt Nam",
        "lập trình viên full-stack tại Việt Nam", "công việc lập trình web tại Việt Nam", "lập trình viên di động tại Việt Nam",
        "lập trình viên full-stack tại Chiang Mai", "công việc lập trình viên từ xa", "gia công lập trình viên tại Việt Nam",

        "trưởng phòng kỹ thuật", "trưởng phòng kỹ thuật tại Việt Nam", "giám đốc kỹ thuật",
        "giám đốc kỹ thuật tại Việt Nam", "trưởng phòng phát triển phần mềm", "trưởng phòng phát triển phần mềm tại Việt Nam",
        "trưởng phòng kỹ thuật phần mềm", "trưởng phòng kỹ thuật phần mềm tại Việt Nam", "quản lý dự án IT",
        "quản lý phát triển phần mềm", "trưởng bộ phận công nghệ", "nhà phân tích hệ thống",

        "lập trình viên Next.js", "lập trình viên React.js", "Spring Boot", "framework frontend", "kiến trúc frontend",
        "lập trình viên web full-stack", "phát triển frontend và backend", "microservices",

        "gia công phát triển", "công ty gia công tại Việt Nam", "gia công lập trình",
        "gia công các tác vụ lập trình", "công việc gia công lập trình", "nhiệm vụ gia công lập trình",
        "chương trình gia công trực tuyến"
    ]
}