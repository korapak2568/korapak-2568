import {Metadata} from "next";
import {MetadataLinkSoapUI} from "@/metadata/pages/devops/soapui/common/MetadataLinkSoapUI";

export const MetadataSoapUIVI: Metadata = {
    title: "Dịch vụ kiểm thử SoapUI | CHORN",
    description: "Chuyên môn kiểm thử SoapUI giúp đảm bảo API và chuyên môn kỹ thuật web của bạn được kiểm thử toàn diện và đáng tin cậy.",
    alternates: MetadataLinkSoapUI.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Kiểm thử SoapUI | CHORN",
        description: "Đảm bảo độ tin cậy của API và chuyên môn kỹ thuật web với chuyên môn kiểm thử kỹ thuật.",
        images: MetadataLinkSoapUI.openGraph.images,
        url: MetadataLinkSoapUI.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Dịch vụ kiểm thử SoapUI | CHORN",
        description: "Tối ưu hóa kiểm thử API của bạn với chuyên môn SoapUI để kiểm thử dịch vụ web toàn diện và đáng tin cậy.",
        images: MetadataLinkSoapUI.twitter.images,
    },
    keywords: [
        "Kiểm thử SoapUI", "Kiểm thử API", "CHORN", "Cloud DevOps",
        "Kiểm thử dịch vụ web", "Kiểm thử đáng tin cậy", "Tự động hóa kiểm thử",
        "Đảm bảo chất lượng", "Kiểm thử phần mềm", "Độ tin cậy của API",
        "Chuyên môn kiểm thử tại Việt Nam", "Chuyên môn SoapUI", "Kiểm thử ứng dụng web"
    ]
}