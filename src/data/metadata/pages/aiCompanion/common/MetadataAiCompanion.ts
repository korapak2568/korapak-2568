import {Metadata} from "next";
import {MetadataAiCompanionEN} from "@/data/metadata/pages/aiCompanion/MetadataAiCompanionEN";
import {MetadataAiCompanionTH} from "@/data/metadata/pages/aiCompanion/MetadataAiCompanionTH";
import {MetadataAiCompanionFI} from "@/data/metadata/pages/aiCompanion/MetadataAiCompanionFI";
import {MetadataAiCompanionFR} from "@/data/metadata/pages/aiCompanion/MetadataAiCompanionFR";
import {MetadataAiCompanionJA} from "@/data/metadata/pages/aiCompanion/MetadataAiCompanionJA";
import {MetadataAiCompanionVI} from "@/data/metadata/pages/aiCompanion/MetadataAiCompanionVI";
import {MetadataAiCompanionZH} from "@/data/metadata/pages/aiCompanion/MetadataAiCompanionZH";
import {MetadataAiCompanionDA} from "@/data/metadata/pages/aiCompanion/MetadataAiCompanionDA";
import {MetadataAiCompanionDE} from "@/data/metadata/pages/aiCompanion/MetadataAiCompanionDE";
import {MetadataAiCompanionNL} from "@/data/metadata/pages/aiCompanion/MetadataAiCompanionNL";
import {MetadataAiCompanionKO} from "@/data/metadata/pages/aiCompanion/MetadataAiCompanionKO";

export const MetadataAiCompanion: Record<string, Metadata> = {
    'en': MetadataAiCompanionEN,
    'th': MetadataAiCompanionTH,
    'fr': MetadataAiCompanionFR,
    'ja': MetadataAiCompanionJA,
    'vi': MetadataAiCompanionVI,
    'zh': MetadataAiCompanionZH,
    'de': MetadataAiCompanionDE,
    'nl': MetadataAiCompanionNL,
    'da': MetadataAiCompanionDA,
    'fi': MetadataAiCompanionFI,
    'ko': MetadataAiCompanionKO
}