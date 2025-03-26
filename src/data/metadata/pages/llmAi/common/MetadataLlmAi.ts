import {Metadata} from "next";
import {MetadataLlmAiTH} from "@/data/metadata/pages/llmAi/MetadataLlmAiTH";
import {MetadataLlmAiFR} from "@/data/metadata/pages/llmAi/MetadataLlmAiFR";
import {MetadataLlmAiJA} from "@/data/metadata/pages/llmAi/MetadataLlmAiJA";
import {MetadataLlmAiVI} from "@/data/metadata/pages/llmAi/MetadataLlmAiVI";
import {MetadataLlmAiZH} from "@/data/metadata/pages/llmAi/MetadataLlmAiZH";
import {MetadataLlmAiDA} from "@/data/metadata/pages/llmAi/MetadataLlmAiDA";
import {MetadataLlmAiDE} from "@/data/metadata/pages/llmAi/MetadataLlmAiDE";
import {MetadataLlmAiNL} from "@/data/metadata/pages/llmAi/MetadataLlmAiNL";
import {MetadataLlmAiFI} from "@/data/metadata/pages/llmAi/MetadataLlmAiFI";
import {MetadataLlmAiKO} from "@/data/metadata/pages/llmAi/MetadataLlmAiKO";
import {MetadataLlmAiEN} from "@/data/metadata/pages/llmAi/MetadataLlmAiEN";

export const MetadataLlmAi: Record<string, Metadata> = {
    'en': MetadataLlmAiEN,
    'th': MetadataLlmAiTH,
    'fr': MetadataLlmAiFR,
    'ja': MetadataLlmAiJA,
    'vi': MetadataLlmAiVI,
    'zh': MetadataLlmAiZH,
    'de': MetadataLlmAiDE,
    'nl': MetadataLlmAiNL,
    'da': MetadataLlmAiDA,
    'fi': MetadataLlmAiFI,
    'ko': MetadataLlmAiKO
}