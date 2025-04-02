import {Metadata} from "next";
import {MetadataLinkBackEndMain} from "@/metadata/pages/backend/main/common/MetadataLinkBackEndMain";

export const MetadataBackEndMainVI: Metadata = {
    title: "Phát triển API Back-End | CHORN",
    description: "Dịch vụ phát triển API Back-End với chuyên môn kỹ thuật, sử dụng công nghệ hiện đại như Node.js, Java Spring Boot, .NET Core, Go, Python và PHP để xây dựng ứng dụng chất lượng cao và có thể mở rộng theo nhu cầu doanh nghiệp.",
    alternates: MetadataLinkBackEndMain.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "Phát triển API Back-End | CHORN",
        description: "Phát triển API Back-End với chuyên môn kỹ thuật, sử dụng Node.js, Java Spring Boot, .NET Core, Go, Python và PHP để xây dựng ứng dụng chất lượng cao và có thể mở rộng theo nhu cầu doanh nghiệp.",
        images: MetadataLinkBackEndMain.openGraph.images,
        url: MetadataLinkBackEndMain.openGraph.url,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Phát triển API Back-End | CHORN",
        description: "Phát triển API Back-End để xây dựng ứng dụng web có thể mở rộng bằng Node.js, Java Spring Boot, .NET Core, Go, Python và PHP.",
        images: MetadataLinkBackEndMain.twitter.images,
    },
}