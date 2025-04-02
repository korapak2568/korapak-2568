import {Metadata} from "next";
import {MetadataBackEndMainEN} from "@/metadata/pages/backend/main/MetadataBackEndMainEN";
import {MetadataBackEndMainTH} from "@/metadata/pages/backend/main/MetadataBackEndMainTH";
import {MetadataBackEndMainFI} from "@/metadata/pages/backend/main/MetadataBackEndMainFI";
import {MetadataBackEndMainFR} from "@/metadata/pages/backend/main/MetadataBackEndMainFR";
import {MetadataBackEndMainJA} from "@/metadata/pages/backend/main/MetadataBackEndMainJA";
import {MetadataBackEndMainVI} from "@/metadata/pages/backend/main/MetadataBackEndMainVI";
import {MetadataBackEndMainZH} from "@/metadata/pages/backend/main/MetadataBackEndMainZH";
import {MetadataBackEndMainDE} from "@/metadata/pages/backend/main/MetadataBackEndMainDE";
import {MetadataBackEndMainNL} from "@/metadata/pages/backend/main/MetadataBackEndMainNL";
import {MetadataBackEndMainDA} from "@/metadata/pages/backend/main/MetadataBackEndMainDA";
import {MetadataBackEndMainKO} from "@/metadata/pages/backend/main/MetadataBackEndMainKO";

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