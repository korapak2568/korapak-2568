import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataDevOpsMainVI: Metadata = {
    title: "Giải Pháp DevOps và Cloud cho Doanh Nghiệp | CHORN",
    description: "Tăng tốc quá trình chuyển đổi số của bạn với chuyên môn về DevOps và Cloud. Chúng tôi cung cấp các pipeline CI/CD tối ưu, tự động hóa cơ sở hạ tầng và các giải pháp Cloud-native giúp nâng cao độ tin cậy và giảm thời gian ra mắt thị trường.",
    alternates: metadataLink(LanguageCode.vi, MetaLinks.devops.main).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Giải Pháp DevOps và Cloud cho Doanh Nghiệp | CHORN",
        description: "Tăng tốc quá trình chuyển đổi số của bạn với chuyên môn về DevOps và Cloud. Chúng tôi cung cấp các pipeline CI/CD tối ưu, tự động hóa cơ sở hạ tầng và các giải pháp Cloud-native giúp nâng cao độ tin cậy và giảm thời gian ra mắt thị trường.",
        images: metadataLink(LanguageCode.vi, MetaLinks.devops.main).openGraph.images,
        url: metadataLink(LanguageCode.vi, MetaLinks.devops.main).alternates.canonical,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Giải Pháp DevOps và Cloud cho Doanh Nghiệp | CHORN",
        description: "Tăng tốc quá trình chuyển đổi số của bạn với chuyên môn về DevOps và Cloud. Chúng tôi cung cấp các pipeline CI/CD tối ưu, tự động hóa cơ sở hạ tầng và các giải pháp Cloud-native giúp nâng cao độ tin cậy và giảm thời gian ra mắt thị trường.",
        images: metadataLink(LanguageCode.vi, MetaLinks.devops.main).twitter.images,
    },
    keywords: [
        "Cloud DevOps", "chuyên môn DevOps", "kiểm tra phần mềm", "tích hợp liên tục", "CI/CD pipeline", "kiểm tra tự động",
        "giải pháp dựa trên Cloud", "phát triển phần mềm tùy chỉnh", "tư vấn DevOps", "đảm bảo chất lượng phần mềm",
        "kiểm tra hiệu suất", "kiểm tra tải", "kiểm tra bảo mật", "tự động hóa kiểm tra", "DevOps Thái Lan",
        "kỹ sư DevOps", "chuyên môn kiểm tra Thái Lan", "quản lý cơ sở hạ tầng IT", "vòng đời phát triển phần mềm",
        "nhà phát triển phần mềm Thái Lan", "công cụ DevOps", "ứng dụng có thể mở rộng", "giải pháp kiểm tra phần mềm",
        "nhà phát triển full stack", "hạ tầng Cloud"
    ],
}
