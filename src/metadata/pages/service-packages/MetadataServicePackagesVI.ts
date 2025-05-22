import { Metadata } from "next";
import { metadataLink } from "@/metadata/metadataLink/metadataLink";
import { LanguageCode } from "@/data/translate/LanguageCode";
import { MetaLinks } from "@/metadata/metadataLink/MetaLinks";

export const MetadataServicePackagesVI: Metadata = {
    title: "Gói dịch vụ | Phân tích hệ thống & Phát triển phần mềm Full-Stack",
    description: "Gói dịch vụ từ CHORN hỗ trợ phát triển phần mềm tùy chỉnh, Web3, NFT và các giải pháp blockchain toàn diện.",
    alternates: metadataLink(LanguageCode.vi, MetaLinks.servicePackages).alternates,
    authors: [{ name: "CHORN" }],
    openGraph: {
        title: "Gói dịch vụ phát triển phần mềm & Web3",
        description: "Dịch vụ phát triển phần mềm và blockchain linh hoạt với kế hoạch chuyên trách và chia sẻ.",
        images: metadataLink(LanguageCode.vi, MetaLinks.servicePackages).openGraph.images,
        url: metadataLink(LanguageCode.vi, MetaLinks.servicePackages).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "CHORN Gói dịch vụ phát triển phần mềm & Web3",
        description: "Phát triển phần mềm, blockchain, NFT và hỗ trợ hệ thống toàn diện với CHORN.",
        images: metadataLink(LanguageCode.vi, MetaLinks.servicePackages).twitter.images,
    },
    keywords: [
        // Từ khóa thương hiệu
        "CHORN", "CHORN phát triển phần mềm theo yêu cầu", "CHORN gia công phần mềm", "CHORN là gì",
        "CHORN phát triển phần mềm Thái Lan", "CHORN lập trình viên Chiang Mai", "CHORN lập trình viên Bangkok",

        // Dịch vụ cốt lõi
        "phát triển phần mềm tùy chỉnh", "công ty gia công phần mềm", "gia công phát triển phần mềm",
        "gia công phát triển web", "công ty phát triển IT tại Thái Lan", "gia công phần mềm Bangkok",

        // Vị trí & vai trò kỹ thuật
        "kỹ sư phần mềm", "lập trình viên frontend", "lập trình viên backend", "lập trình viên full-stack",
        "lập trình viên web", "lập trình viên React", "lập trình viên Java", "lập trình viên Node.js", "lập trình viên API",
        "lập trình viên blockchain", "lập trình viên Web3", "phát triển microservices", "phần mềm doanh nghiệp",

        // Công nghệ và framework
        "Next.js", "React.js", "Spring Boot", "kiến trúc frontend", "giải pháp Web3"
    ]
};