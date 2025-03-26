import {Metadata} from "next";
import {MetadataAiPloyEN} from "@/data/metadata/pages/aiPloy/MetadataAiPloyEN";
import {MetadataAiPloyTH} from "@/data/metadata/pages/aiPloy/MetadataAiPloyTH";
import {MetadataAiPloyFR} from "@/data/metadata/pages/aiPloy/MetadataAiPloyFR";
import {MetadataAiPloyJA} from "@/data/metadata/pages/aiPloy/MetadataAiPloyJA";
import {MetadataAiPloyVI} from "@/data/metadata/pages/aiPloy/MetadataAiPloyVI";
import {MetadataAiPloyZH} from "@/data/metadata/pages/aiPloy/MetadataAiPloyZH";
import {MetadataAiPloyDE} from "@/data/metadata/pages/aiPloy/MetadataAiPloyDE";
import {MetadataAiPloyNL} from "@/data/metadata/pages/aiPloy/MetadataAiPloyNL";
import {MetadataAiPloyDA} from "@/data/metadata/pages/aiPloy/MetadataAiPloyDA";
import {MetadataAiPloyFI} from "@/data/metadata/pages/aiPloy/MetadataAiPloyFI";
import {MetadataAiPloyKO} from "@/data/metadata/pages/aiPloy/MetadataAiPloyKO";

export const MetadataAiPloy: Record<string, Metadata> = {
    'en': MetadataAiPloyEN,
    'th': MetadataAiPloyTH,
    'fr': MetadataAiPloyFR,
    'ja': MetadataAiPloyJA,
    'vi': MetadataAiPloyVI,
    'zh': MetadataAiPloyZH,
    'de': MetadataAiPloyDE,
    'nl': MetadataAiPloyNL,
    'da': MetadataAiPloyDA,
    'fi': MetadataAiPloyFI,
    'ko': MetadataAiPloyKO
}