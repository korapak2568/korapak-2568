import {Metadata} from "next";
import {MetadataLinkTermOfService} from "@/metadata/pages/terms-of-service/common/MetadataLinkTermOfService";

export const MetadataTermOfServiceVI: Metadata = {
    title: "Điều khoản dịch vụ | CHORN",
    description: "CHORN cung cấp Điều khoản dịch vụ quy định việc sử dụng trang web này. Bằng cách truy cập hoặc sử dụng trang web, bạn đồng ý tuân thủ các điều khoản này.",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: MetadataLinkTermOfService.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Điều khoản dịch vụ | CHORN",
        description: "CHORN cung cấp Điều khoản dịch vụ quy định việc sử dụng trang web này. Bằng cách truy cập hoặc sử dụng trang web, bạn đồng ý tuân thủ các điều khoản này.",
        images: MetadataLinkTermOfService.openGraph.images,
        url: MetadataLinkTermOfService.openGraph.url,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Điều khoản dịch vụ | CHORN",
        description: "CHORN cung cấp Điều khoản dịch vụ quy định việc sử dụng trang web này. Bằng cách truy cập hoặc sử dụng trang web, bạn đồng ý tuân thủ các điều khoản này.",
        images: MetadataLinkTermOfService.twitter.images,
    },
}