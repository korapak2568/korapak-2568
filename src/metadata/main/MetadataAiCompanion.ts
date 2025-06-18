import {Metadata} from "next";
import {MetadataAiCompanionEN} from "@/metadata/pages/ai-companion/MetadataAiCompanionEN";
import {MetadataAiCompanionTH} from "@/metadata/pages/ai-companion/MetadataAiCompanionTH";
import {MetadataAiCompanionFI} from "@/metadata/pages/ai-companion/MetadataAiCompanionFI";
import {MetadataAiCompanionFR} from "@/metadata/pages/ai-companion/MetadataAiCompanionFR";
import {MetadataAiCompanionJA} from "@/metadata/pages/ai-companion/MetadataAiCompanionJA";
import {MetadataAiCompanionZH} from "@/metadata/pages/ai-companion/MetadataAiCompanionZH";
import {MetadataAiCompanionDA} from "@/metadata/pages/ai-companion/MetadataAiCompanionDA";
import {MetadataAiCompanionDE} from "@/metadata/pages/ai-companion/MetadataAiCompanionDE";
import {MetadataAiCompanionNL} from "@/metadata/pages/ai-companion/MetadataAiCompanionNL";
import {MetadataAiCompanionKO} from "@/metadata/pages/ai-companion/MetadataAiCompanionKO";

export const MetadataAiCompanion: Record<string, Metadata> = {
    en: MetadataAiCompanionEN,
    th: MetadataAiCompanionTH,
    fr: MetadataAiCompanionFR,
    ja: MetadataAiCompanionJA,
    zh: MetadataAiCompanionZH,
    de: MetadataAiCompanionDE,
    nl: MetadataAiCompanionNL,
    da: MetadataAiCompanionDA,
    fi: MetadataAiCompanionFI,
    ko: MetadataAiCompanionKO
}