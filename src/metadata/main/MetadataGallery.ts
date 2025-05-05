import {Metadata} from "next";
import {MetadataGalleryEN} from "@/metadata/pages/gallery/MetadataGalleryEN";
import {MetadataGalleryTH} from "@/metadata/pages/gallery/MetadataGalleryTH";
import {MetadataGalleryFR} from "@/metadata/pages/gallery/MetadataGalleryFR";
import {MetadataGalleryJA} from "@/metadata/pages/gallery/MetadataGalleryJA";
import {MetadataGalleryVI} from "@/metadata/pages/gallery/MetadataGalleryVI";
import {MetadataGalleryZH} from "@/metadata/pages/gallery/MetadataGalleryZH";
import {MetadataGalleryDE} from "@/metadata/pages/gallery/MetadataGalleryDE";
import {MetadataGalleryNL} from "@/metadata/pages/gallery/MetadataGalleryNL";
import {MetadataGalleryDA} from "@/metadata/pages/gallery/MetadataGalleryDA";
import {MetadataGalleryFI} from "@/metadata/pages/gallery/MetadataGalleryFI";
import {MetadataGalleryKO} from "@/metadata/pages/gallery/MetadataGalleryKO";

export const MetadataGallery: Record<string, Metadata> = {
    en: MetadataGalleryEN,
    th: MetadataGalleryTH,
    fr: MetadataGalleryFR,
    ja: MetadataGalleryJA,
    vi: MetadataGalleryVI,
    zh: MetadataGalleryZH,
    de: MetadataGalleryDE,
    nl: MetadataGalleryNL,
    da: MetadataGalleryDA,
    fi: MetadataGalleryFI,
    ko: MetadataGalleryKO
}