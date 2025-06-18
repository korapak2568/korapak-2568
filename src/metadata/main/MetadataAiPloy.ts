import {Metadata} from "next";
import {MetadataAiPloyEN} from "@/metadata/pages/ai-ploy/MetadataAiPloyEN";
import {MetadataAiPloyTH} from "@/metadata/pages/ai-ploy/MetadataAiPloyTH";
import {MetadataAiPloyFR} from "@/metadata/pages/ai-ploy/MetadataAiPloyFR";
import {MetadataAiPloyJA} from "@/metadata/pages/ai-ploy/MetadataAiPloyJA";
import {MetadataAiPloyZH} from "@/metadata/pages/ai-ploy/MetadataAiPloyZH";
import {MetadataAiPloyDE} from "@/metadata/pages/ai-ploy/MetadataAiPloyDE";
import {MetadataAiPloyNL} from "@/metadata/pages/ai-ploy/MetadataAiPloyNL";
import {MetadataAiPloyDA} from "@/metadata/pages/ai-ploy/MetadataAiPloyDA";
import {MetadataAiPloyFI} from "@/metadata/pages/ai-ploy/MetadataAiPloyFI";
import {MetadataAiPloyKO} from "@/metadata/pages/ai-ploy/MetadataAiPloyKO";

export const MetadataAiPloy: Record<string, Metadata> = {
    en: MetadataAiPloyEN,
    th: MetadataAiPloyTH,
    fr: MetadataAiPloyFR,
    ja: MetadataAiPloyJA,
    zh: MetadataAiPloyZH,
    de: MetadataAiPloyDE,
    nl: MetadataAiPloyNL,
    da: MetadataAiPloyDA,
    fi: MetadataAiPloyFI,
    ko: MetadataAiPloyKO
}