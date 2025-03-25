import {IOpenGraphImage} from "@/data/metadata/model/IOpenGraphImage";
import {OpenGraph} from "next/dist/lib/metadata/types/opengraph-types";

export interface IMetadataLinkPage {
    alternates: {
        canonical: string,
        languages: {
            "en": string,
            "th": string,
            "fr": string,
            "ja": string,
            "vi": string,
            "zh": string,
            "de": string,
            "nl": string,
            "da": string,
            "fi": string,
            "ko": string,
        }
    },
    openGraph: {
        images: IOpenGraphImage[],
        url: string
    } | OpenGraph,
    twitter: {
        images: string[],
    },
}