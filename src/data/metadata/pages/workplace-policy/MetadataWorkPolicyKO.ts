import {Metadata} from "next";
import {MetadataLinkWorkPolicy} from "@/data/metadata/pages/workplace-policy/common/MetadataLinkWorkPolicy";

export const MetadataWorkPolicyKO: Metadata = {
    title: "업무 정책 | CHORN",
    description: "CHORN은 원격 근무, 사무실 근무 및 하이브리드 근무를 포함한 다양한 업무 방식을 지원하며, 각 프로젝트의 특정 요구 사항에 맞게 조정됩니다. 이 접근 방식은 원활한 커뮤니케이션과 효율성을 보장합니다.",
    icons: {
        icon: '/favicon.ico',
    },
    alternates: MetadataLinkWorkPolicy.alternates,
    authors: [
        {
            name: "CHORN"
        }
    ],
    openGraph: {
        title: "업무 정책 | CHORN",
        description: "CHORN은 원격 근무, 사무실 근무 및 하이브리드 근무를 포함한 다양한 업무 방식을 지원하며, 각 프로젝트의 특정 요구 사항에 맞게 조정됩니다. 이 접근 방식은 원활한 커뮤니케이션과 효율성을 보장합니다.",
        images: MetadataLinkWorkPolicy.openGraph.images,
        url: MetadataLinkWorkPolicy.openGraph.url,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "업무 정책 | CHORN",
        description: "CHORN은 원격 근무, 사무실 근무 및 하이브리드 근무를 포함한 다양한 업무 방식을 지원하며, 각 프로젝트의 특정 요구 사항에 맞게 조정됩니다. 이 접근 방식은 원활한 커뮤니케이션과 효율성을 보장합니다.",
        images: MetadataLinkWorkPolicy.twitter.images,
    },
}
