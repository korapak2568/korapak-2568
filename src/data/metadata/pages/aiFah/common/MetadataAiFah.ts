import {Metadata} from "next";
import {MetadataAiFahEN} from "@/data/metadata/pages/aiFah/MetadataAiFahEN";
import {MetadataAiFahTH} from "@/data/metadata/pages/aiFah/MetadataAiFahTH";
import {MetadataAiFahFR} from "@/data/metadata/pages/aiFah/MetadataAiFahFR";
import {MetadataAiFahJA} from "@/data/metadata/pages/aiFah/MetadataAiFahJA";
import {MetadataAiFahVI} from "@/data/metadata/pages/aiFah/MetadataAiFahVI";
import {MetadataAiFahZH} from "@/data/metadata/pages/aiFah/MetadataAiFahZH";
import {MetadataAiFahDA} from "@/data/metadata/pages/aiFah/MetadataAiFahDA";
import {MetadataAiFahDE} from "@/data/metadata/pages/aiFah/MetadataAiFahDE";
import {MetadataAiFahNL} from "@/data/metadata/pages/aiFah/MetadataAiFahNL";
import {MetadataAiFahKO} from "@/data/metadata/pages/aiFah/MetadataAiFahKO";
import {MetadataAiFahFI} from "@/data/metadata/pages/aiFah/MetadataAiFahFI";

export const MetadataAiFah: Record<string, Metadata> = {
    'en': MetadataAiFahEN,
    'th': MetadataAiFahTH,
    'fr': MetadataAiFahFR,
    'ja': MetadataAiFahJA,
    'vi': MetadataAiFahVI,
    'zh': MetadataAiFahZH,
    'de': MetadataAiFahDE,
    'nl': MetadataAiFahNL,
    'da': MetadataAiFahDA,
    'fi': MetadataAiFahFI,
    'ko': MetadataAiFahKO
}