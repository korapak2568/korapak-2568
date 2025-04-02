import {Metadata} from "next";
import {MetadataAiAomEN} from "@/metadata/pages/ai-aom/MetadataAiAomEN";
import {MetadataAiAomTH} from "@/metadata/pages/ai-aom/MetadataAiAomTH";
import {MetadataAiAomFR} from "@/metadata/pages/ai-aom/MetadataAiAomFR";
import {MetadataAiAomJA} from "@/metadata/pages/ai-aom/MetadataAiAomJA";
import {MetadataAiAomVI} from "@/metadata/pages/ai-aom/MetadataAiAomVI";
import {MetadataAiAomZH} from "@/metadata/pages/ai-aom/MetadataAiAomZH";
import {MetadataAiAomDE} from "@/metadata/pages/ai-aom/MetadataAiAomDE";
import {MetadataAiAomNL} from "@/metadata/pages/ai-aom/MetadataAiAomNL";
import {MetadataAiAomDA} from "@/metadata/pages/ai-aom/MetadataAiAomDA";
import {MetadataAiAomFI} from "@/metadata/pages/ai-aom/MetadataAiAomFI";
import {MetadataAiAomKO} from "@/metadata/pages/ai-aom/MetadataAiAomKO";

export const MetadataAiAom: Record<string, Metadata> = {
    'en': MetadataAiAomEN,
    'th': MetadataAiAomTH,
    'fr': MetadataAiAomFR,
    'ja': MetadataAiAomJA,
    'vi': MetadataAiAomVI,
    'zh': MetadataAiAomZH,
    'de': MetadataAiAomDE,
    'nl': MetadataAiAomNL,
    'da': MetadataAiAomDA,
    'fi': MetadataAiAomFI,
    'ko': MetadataAiAomKO
}