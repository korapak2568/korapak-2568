import {IOpenGraphImage} from "@/metadata/opengraph/model/IOpenGraphImage";
import {OpenGraph} from "next/dist/lib/metadata/types/opengraph-types";

export interface IMetadataLinkPage {
    alternates: {
        canonical: string,
        languages: Record<string, string>
    },
    openGraph: {
        images: IOpenGraphImage[],
        url: string
    } | OpenGraph,
    twitter: {
        images: string[],
    },
}