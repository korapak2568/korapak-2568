import {Metadata} from "next";
import {MetadataFrontEndMainEN} from "@/metadata/pages/frontend/main/MetadataFrontEndMainEN";
import {MetadataFrontEndMainTH} from "@/metadata/pages/frontend/main/MetadataFrontEndMainTH";
import {MetadataFrontEndMainFI} from "@/metadata/pages/frontend/main/MetadataFrontEndMainFI";
import {MetadataFrontEndMainFR} from "@/metadata/pages/frontend/main/MetadataFrontEndMainFR";
import {MetadataFrontEndMainJA} from "@/metadata/pages/frontend/main/MetadataFrontEndMainJA";
import {MetadataFrontEndMainZH} from "@/metadata/pages/frontend/main/MetadataFrontEndMainZH";
import {MetadataFrontEndMainDE} from "@/metadata/pages/frontend/main/MetadataFrontEndMainDE";
import {MetadataFrontEndMainNL} from "@/metadata/pages/frontend/main/MetadataFrontEndMainNL";
import {MetadataFrontEndMainDA} from "@/metadata/pages/frontend/main/MetadataFrontEndMainDA";
import {MetadataFrontEndMainKO} from "@/metadata/pages/frontend/main/MetadataFrontEndMainKO";

export const MetadataFrontEndMain: Record<string, Metadata> = {
    en: MetadataFrontEndMainEN,
    th: MetadataFrontEndMainTH,
    fr: MetadataFrontEndMainFR,
    ja: MetadataFrontEndMainJA,
    zh: MetadataFrontEndMainZH,
    de: MetadataFrontEndMainDE,
    nl: MetadataFrontEndMainNL,
    da: MetadataFrontEndMainDA,
    fi: MetadataFrontEndMainFI,
    ko: MetadataFrontEndMainKO
}