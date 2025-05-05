import {IOpenGraphImage} from "@/metadata/metadataLink/model/IOpenGraphImage";
import {OpenGraph} from "next/dist/lib/metadata/types/opengraph-types";

export interface IMetaPage {
    alternates: {
        canonical: string,
        languages: Record<string, string>
    },
    openGraph: {
        images: IOpenGraphImage[],
    } | OpenGraph,
    twitter: {
        images: string[],
    },
}