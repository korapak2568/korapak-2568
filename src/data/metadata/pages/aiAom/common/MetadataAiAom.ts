import {Metadata} from "next";
import {MetadataAiAomEN} from "@/data/metadata/pages/aiAom/MetadataAiAomEN";
import {MetadataAiAomTH} from "@/data/metadata/pages/aiAom/MetadataAiAomTH";
import {MetadataAiAomFR} from "@/data/metadata/pages/aiAom/MetadataAiAomFR";
import {MetadataAiAomJA} from "@/data/metadata/pages/aiAom/MetadataAiAomJA";
import {MetadataAiAomVI} from "@/data/metadata/pages/aiAom/MetadataAiAomVI";
import {MetadataAiAomZH} from "@/data/metadata/pages/aiAom/MetadataAiAomZH";
import {MetadataAiAomDE} from "@/data/metadata/pages/aiAom/MetadataAiAomDE";
import {MetadataAiAomNL} from "@/data/metadata/pages/aiAom/MetadataAiAomNL";
import {MetadataAiAomDA} from "@/data/metadata/pages/aiAom/MetadataAiAomDA";
import {MetadataAiAomFI} from "@/data/metadata/pages/aiAom/MetadataAiAomFI";
import {MetadataAiAomKO} from "@/data/metadata/pages/aiAom/MetadataAiAomKO";

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