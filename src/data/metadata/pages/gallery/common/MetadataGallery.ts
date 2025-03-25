import {Metadata} from "next";
import {MetadataGalleryEN} from "@/data/metadata/pages/gallery/MetadataGalleryEN";
import {MetadataGalleryTH} from "@/data/metadata/pages/gallery/MetadataGalleryTH";
import {MetadataGalleryFR} from "@/data/metadata/pages/gallery/MetadataGalleryFR";
import {MetadataGalleryJA} from "@/data/metadata/pages/gallery/MetadataGalleryJA";
import {MetadataGalleryVI} from "@/data/metadata/pages/gallery/MetadataGalleryVI";
import {MetadataGalleryZH} from "@/data/metadata/pages/gallery/MetadataGalleryZH";
import {MetadataGalleryDE} from "@/data/metadata/pages/gallery/MetadataGalleryDE";
import {MetadataGalleryNL} from "@/data/metadata/pages/gallery/MetadataGalleryNL";
import {MetadataGalleryDA} from "@/data/metadata/pages/gallery/MetadataGalleryDA";
import {MetadataGalleryFI} from "@/data/metadata/pages/gallery/MetadataGalleryFI";
import {MetadataGalleryKO} from "@/data/metadata/pages/gallery/MetadataGalleryKO";

export const MetadataGallery: Record<string, Metadata> = {
    'en': MetadataGalleryEN,
    'th': MetadataGalleryTH,
    'fr': MetadataGalleryFR,
    'ja': MetadataGalleryJA,
    'vi': MetadataGalleryVI,
    'zh': MetadataGalleryZH,
    'de': MetadataGalleryDE,
    'nl': MetadataGalleryNL,
    'da': MetadataGalleryDA,
    'fi': MetadataGalleryFI,
    'ko': MetadataGalleryKO
}