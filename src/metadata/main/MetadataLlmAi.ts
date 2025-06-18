import {Metadata} from "next";
import {MetadataLlmAiTH} from "@/metadata/pages/llm-ai/MetadataLlmAiTH";
import {MetadataLlmAiFR} from "@/metadata/pages/llm-ai/MetadataLlmAiFR";
import {MetadataLlmAiJA} from "@/metadata/pages/llm-ai/MetadataLlmAiJA";
import {MetadataLlmAiZH} from "@/metadata/pages/llm-ai/MetadataLlmAiZH";
import {MetadataLlmAiDA} from "@/metadata/pages/llm-ai/MetadataLlmAiDA";
import {MetadataLlmAiDE} from "@/metadata/pages/llm-ai/MetadataLlmAiDE";
import {MetadataLlmAiNL} from "@/metadata/pages/llm-ai/MetadataLlmAiNL";
import {MetadataLlmAiFI} from "@/metadata/pages/llm-ai/MetadataLlmAiFI";
import {MetadataLlmAiKO} from "@/metadata/pages/llm-ai/MetadataLlmAiKO";
import {MetadataLlmAiEN} from "@/metadata/pages/llm-ai/MetadataLlmAiEN";

export const MetadataLlmAi: Record<string, Metadata> = {
    en: MetadataLlmAiEN,
    th: MetadataLlmAiTH,
    fr: MetadataLlmAiFR,
    ja: MetadataLlmAiJA,
    zh: MetadataLlmAiZH,
    de: MetadataLlmAiDE,
    nl: MetadataLlmAiNL,
    da: MetadataLlmAiDA,
    fi: MetadataLlmAiFI,
    ko: MetadataLlmAiKO
}