import {Metadata} from "next";
import {MetadataTypeScriptEN} from "@/data/metadata/pages/frontend/typescript/MetadataTypeScriptEN";
import {MetadataTypeScriptTH} from "@/data/metadata/pages/frontend/typescript/MetadataTypeScriptTH";
import {MetadataTypeScriptFI} from "@/data/metadata/pages/frontend/typescript/MetadataTypeScriptFI";
import {MetadataTypeScriptFR} from "@/data/metadata/pages/frontend/typescript/MetadataTypeScriptFR";
import {MetadataTypeScriptJA} from "@/data/metadata/pages/frontend/typescript/MetadataTypeScriptJA";
import {MetadataTypeScriptVI} from "@/data/metadata/pages/frontend/typescript/MetadataTypeScriptVI";
import {MetadataTypeScriptZH} from "@/data/metadata/pages/frontend/typescript/MetadataTypeScriptZH";
import {MetadataTypeScriptDE} from "@/data/metadata/pages/frontend/typescript/MetadataTypeScriptDE";
import {MetadataTypeScriptNL} from "@/data/metadata/pages/frontend/typescript/MetadataTypeScriptNL";
import {MetadataTypeScriptDA} from "@/data/metadata/pages/frontend/typescript/MetadataTypeScriptDA";
import {MetadataTypeScriptKO} from "@/data/metadata/pages/frontend/typescript/MetadataTypeScriptKO";

export const MetadataTypeScript: Record<string, Metadata> = {
    'en': MetadataTypeScriptEN,
    'th': MetadataTypeScriptTH,
    'fr': MetadataTypeScriptFR,
    'ja': MetadataTypeScriptJA,
    'vi': MetadataTypeScriptVI,
    'zh': MetadataTypeScriptZH,
    'de': MetadataTypeScriptDE,
    'nl': MetadataTypeScriptNL,
    'da': MetadataTypeScriptDA,
    'fi': MetadataTypeScriptFI,
    'ko': MetadataTypeScriptKO
}