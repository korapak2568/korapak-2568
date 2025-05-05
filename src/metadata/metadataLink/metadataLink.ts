import {IMetaPage} from "@/metadata/metadataLink/model/IMetaPage";
import LanguageUrls from "@/metadata/metadataLink/LanguageUrls";
import {IMetaLink} from "@/metadata/metadataLink/model/IMetaLink";

export const metadataLink = (lang: string, metaLink: IMetaLink): IMetaPage => ({
    alternates: {
        canonical: LanguageUrls(metaLink.canonical)[lang],
        languages: LanguageUrls(metaLink.canonical)
    },
    openGraph: {
        images: [
            {
                url: metaLink.image.url,
                width: 1200,
                height: 630,
                alt: metaLink.image.alt,
            }
        ],
        url: LanguageUrls(metaLink.canonical)[lang],
        type: "website",
    },
    twitter: {
        images: [
            metaLink.image.url,
        ],
    },
})