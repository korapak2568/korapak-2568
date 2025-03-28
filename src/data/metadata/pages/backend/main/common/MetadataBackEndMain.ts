import {Metadata} from "next";
import {MetadataBackEndMainEN} from "@/data/metadata/pages/backend/main/MetadataBackEndMainEN";
import {MetadataBackEndMainTH} from "@/data/metadata/pages/backend/main/MetadataBackEndMainTH";
import {MetadataBackEndMainFI} from "@/data/metadata/pages/backend/main/MetadataBackEndMainFI";
import {MetadataBackEndMainFR} from "@/data/metadata/pages/backend/main/MetadataBackEndMainFR";
import {MetadataBackEndMainJA} from "@/data/metadata/pages/backend/main/MetadataBackEndMainJA";
import {MetadataBackEndMainVI} from "@/data/metadata/pages/backend/main/MetadataBackEndMainVI";
import {MetadataBackEndMainZH} from "@/data/metadata/pages/backend/main/MetadataBackEndMainZH";
import {MetadataBackEndMainDE} from "@/data/metadata/pages/backend/main/MetadataBackEndMainDE";
import {MetadataBackEndMainNL} from "@/data/metadata/pages/backend/main/MetadataBackEndMainNL";
import {MetadataBackEndMainDA} from "@/data/metadata/pages/backend/main/MetadataBackEndMainDA";
import {MetadataBackEndMainKO} from "@/data/metadata/pages/backend/main/MetadataBackEndMainKO";

export const MetadataBackEndMain: Record<string, Metadata> = {
    'en': MetadataBackEndMainEN,
    'th': MetadataBackEndMainTH,
    'fr': MetadataBackEndMainFR,
    'ja': MetadataBackEndMainJA,
    'vi': MetadataBackEndMainVI,
    'zh': MetadataBackEndMainZH,
    'de': MetadataBackEndMainDE,
    'nl': MetadataBackEndMainNL,
    'da': MetadataBackEndMainDA,
    'fi': MetadataBackEndMainFI,
    'ko': MetadataBackEndMainKO
}