import {Metadata} from "next";
import {MetadataFrontEndMainEN} from "@/data/metadata/pages/frontend/main/MetadataFrontEndMainEN";
import {MetadataFrontEndMainTH} from "@/data/metadata/pages/frontend/main/MetadataFrontEndMainTH";
import {MetadataFrontEndMainFI} from "@/data/metadata/pages/frontend/main/MetadataFrontEndMainFI";
import {MetadataFrontEndMainFR} from "@/data/metadata/pages/frontend/main/MetadataFrontEndMainFR";
import {MetadataFrontEndMainJA} from "@/data/metadata/pages/frontend/main/MetadataFrontEndMainJA";
import {MetadataFrontEndMainVI} from "@/data/metadata/pages/frontend/main/MetadataFrontEndMainVI";
import {MetadataFrontEndMainZH} from "@/data/metadata/pages/frontend/main/MetadataFrontEndMainZH";
import {MetadataFrontEndMainDE} from "@/data/metadata/pages/frontend/main/MetadataFrontEndMainDE";
import {MetadataFrontEndMainNL} from "@/data/metadata/pages/frontend/main/MetadataFrontEndMainNL";
import {MetadataFrontEndMainDA} from "@/data/metadata/pages/frontend/main/MetadataFrontEndMainDA";
import {MetadataFrontEndMainKO} from "@/data/metadata/pages/frontend/main/MetadataFrontEndMainKO";

export const MetadataFrontEndMain: Record<string, Metadata> = {
    'en': MetadataFrontEndMainEN,
    'th': MetadataFrontEndMainTH,
    'fr': MetadataFrontEndMainFR,
    'ja': MetadataFrontEndMainJA,
    'vi': MetadataFrontEndMainVI,
    'zh': MetadataFrontEndMainZH,
    'de': MetadataFrontEndMainDE,
    'nl': MetadataFrontEndMainNL,
    'da': MetadataFrontEndMainDA,
    'fi': MetadataFrontEndMainFI,
    'ko': MetadataFrontEndMainKO
}