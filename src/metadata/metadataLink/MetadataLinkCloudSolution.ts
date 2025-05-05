// src/metadata/metadataLink/MetadataLinkCloudSolution.ts

import {OpenGraph} from "@/metadata/opengraph/OpenGraph";
import {IMetadataLinkPage} from "@/metadata/metadataLink/model/IMetadataLinkPage";
import {canonicalUrls} from "@/metadata/canonical/CanonicalUrls";
import {CanonicalPaths} from "@/metadata/canonical/CanonicalPaths";

export const metadataLinkCloudSolution = (lang: string): IMetadataLinkPage => ({
    alternates: {
        canonical: canonicalUrls(CanonicalPaths.cloudSolution)[lang],
        languages: canonicalUrls(CanonicalPaths.cloudSolution)
    },
    openGraph: {
        images: [
            {
                url: OpenGraph.cloudSolutions.url,
                width: 1200,
                height: 630,
                alt: OpenGraph.cloudSolutions.alt,
            }
        ],
        url: canonicalUrls(CanonicalPaths.cloudSolution)[lang],
        type: "website",
    },
    twitter: {
        images: [
            OpenGraph.cloudSolutions.url,
        ],
    },
})