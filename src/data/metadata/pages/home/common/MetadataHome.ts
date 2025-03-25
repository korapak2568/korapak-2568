import {Metadata} from "next";
import {MetadataHomeEN} from "@/data/metadata/pages/home/MetadataHomeEN";
import {MetadataHomeTH} from "@/data/metadata/pages/home/MetadataHomeTH";
import {MetadataHomeFR} from "@/data/metadata/pages/home/MetadataHomeFR";
import {MetadataHomeJA} from "@/data/metadata/pages/home/MetadataHomeJA";
import {MetadataHomeVI} from "@/data/metadata/pages/home/MetadataHomeVI";
import {MetadataHomeZH} from "@/data/metadata/pages/home/MetadataHomeZH";
import {MetadataHomeDA} from "@/data/metadata/pages/home/MetadataHomeDA";
import {MetadataHomeDE} from "@/data/metadata/pages/home/MetadataHomeDE";
import {MetadataHomeNL} from "@/data/metadata/pages/home/MetadataHomeNL";
import {MetadataHomeFI} from "@/data/metadata/pages/home/MetadataHomeFI";
import {MetadataHomeKO} from "@/data/metadata/pages/home/MetadataHomeKO";

export const MetadataHome: Record<string, Metadata> = {
    'en': MetadataHomeEN,
    'th': MetadataHomeTH,
    'fr': MetadataHomeFR,
    'ja': MetadataHomeJA,
    'vi': MetadataHomeVI,
    'zh': MetadataHomeZH,
    'de': MetadataHomeDE,
    'nl': MetadataHomeNL,
    'da': MetadataHomeDA,
    'fi': MetadataHomeFI,
    'ko': MetadataHomeKO
}