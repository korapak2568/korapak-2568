import {Metadata} from "next";
import {MetadataJavaScriptEN} from "@/data/metadata/pages/frontend/javascript/MetadataJavaScriptEN";
import {MetadataJavaScriptTH} from "@/data/metadata/pages/frontend/javascript/MetadataJavaScriptTH";
import {MetadataJavaScriptFI} from "@/data/metadata/pages/frontend/javascript/MetadataJavaScriptFI";
import {MetadataJavaScriptFR} from "@/data/metadata/pages/frontend/javascript/MetadataJavaScriptFR";
import {MetadataJavaScriptJA} from "@/data/metadata/pages/frontend/javascript/MetadataJavaScriptJA";
import {MetadataJavaScriptVI} from "@/data/metadata/pages/frontend/javascript/MetadataJavaScriptVI";
import {MetadataJavaScriptZH} from "@/data/metadata/pages/frontend/javascript/MetadataJavaScriptZH";
import {MetadataJavaScriptDE} from "@/data/metadata/pages/frontend/javascript/MetadataJavaScriptDE";
import {MetadataJavaScriptNL} from "@/data/metadata/pages/frontend/javascript/MetadataJavaScriptNL";
import {MetadataJavaScriptDA} from "@/data/metadata/pages/frontend/javascript/MetadataJavaScriptDA";
import {MetadataJavaScriptKO} from "@/data/metadata/pages/frontend/javascript/MetadataJavaScriptKO";

export const MetadataJavaScript: Record<string, Metadata> = {
    'en': MetadataJavaScriptEN,
    'th': MetadataJavaScriptTH,
    'fr': MetadataJavaScriptFR,
    'ja': MetadataJavaScriptJA,
    'vi': MetadataJavaScriptVI,
    'zh': MetadataJavaScriptZH,
    'de': MetadataJavaScriptDE,
    'nl': MetadataJavaScriptNL,
    'da': MetadataJavaScriptDA,
    'fi': MetadataJavaScriptFI,
    'ko': MetadataJavaScriptKO
}