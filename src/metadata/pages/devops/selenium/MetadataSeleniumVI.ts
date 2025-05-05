import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataSeleniumVI: Metadata = {
    title: "Dịch vụ kiểm thử Selenium | CHORN",
    description: "Chuyên môn kỹ thuật toàn diện về kiểm thử Selenium để đảm bảo chất lượng và hiệu suất của ứng dụng thông qua kiểm thử tự động.",
    alternates: metadataLink(LanguageCode.vi, MetaLinks.devops.selenium).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Kiểm thử Selenium | CHORN",
        description: "Tự động hóa kiểm thử ứng dụng của bạn với chuyên môn kỹ thuật Selenium để đạt được kết quả mạnh mẽ và đáng tin cậy.",
        images: metadataLink(LanguageCode.vi, MetaLinks.devops.selenium).openGraph.images,
        url: metadataLink(LanguageCode.vi, MetaLinks.devops.selenium).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Dịch vụ kiểm thử Selenium | CHORN",
        description: "Nâng cao chất lượng ứng dụng của bạn với chuyên môn kỹ thuật Selenium cho kiểm thử tự động hiệu quả.",
        images: metadataLink(LanguageCode.vi, MetaLinks.devops.selenium).twitter.images,
    },
    keywords: [
        "Kiểm thử Selenium", "Kiểm thử tự động", "CHORN", "Cloud DevOps",
        "Đảm bảo chất lượng ứng dụng", "Tự động hóa kiểm thử", "Kiểm thử phần mềm",
        "Chuyên môn kỹ thuật đảm bảo chất lượng", "Chuyên môn kỹ thuật kiểm thử", "Kịch bản kiểm thử",
        "Kiểm thử phần mềm Việt Nam", "Chuyên môn kỹ thuật Selenium", "Kiểm thử ứng dụng web"
    ]
}
