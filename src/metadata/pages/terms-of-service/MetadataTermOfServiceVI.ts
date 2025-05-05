import {Metadata} from "next";
import {metadataLink} from "@/metadata/metadataLink/metadataLink";
import {LanguageCode} from "@/data/translate/LanguageCode";
import {MetaLinks} from "@/metadata/metadataLink/MetaLinks";

export const MetadataTermOfServiceVI: Metadata = {
    title: "Điều khoản dịch vụ | CHORN",
    description: "CHORN cung cấp Điều khoản dịch vụ quy định việc sử dụng trang web này. Bằng cách truy cập hoặc sử dụng trang web, bạn đồng ý tuân thủ các điều khoản này.",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: metadataLink(LanguageCode.vi, MetaLinks.termOfServices).alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Điều khoản dịch vụ | CHORN",
        description: "CHORN cung cấp Điều khoản dịch vụ quy định việc sử dụng trang web này. Bằng cách truy cập hoặc sử dụng trang web, bạn đồng ý tuân thủ các điều khoản này.",
        images: metadataLink(LanguageCode.vi, MetaLinks.termOfServices).openGraph.images,
        url: metadataLink(LanguageCode.vi, MetaLinks.termOfServices).alternates.canonical,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Điều khoản dịch vụ | CHORN",
        description: "CHORN cung cấp Điều khoản dịch vụ quy định việc sử dụng trang web này. Bằng cách truy cập hoặc sử dụng trang web, bạn đồng ý tuân thủ các điều khoản này.",
        images: metadataLink(LanguageCode.vi, MetaLinks.termOfServices).twitter.images,
    },
}