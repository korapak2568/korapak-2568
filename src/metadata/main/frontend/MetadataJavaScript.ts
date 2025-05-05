import {Metadata} from "next";
import {MetadataJavaScriptEN} from "@/metadata/pages/frontend/javascript/MetadataJavaScriptEN";
import {MetadataJavaScriptTH} from "@/metadata/pages/frontend/javascript/MetadataJavaScriptTH";
import {MetadataJavaScriptFI} from "@/metadata/pages/frontend/javascript/MetadataJavaScriptFI";
import {MetadataJavaScriptFR} from "@/metadata/pages/frontend/javascript/MetadataJavaScriptFR";
import {MetadataJavaScriptJA} from "@/metadata/pages/frontend/javascript/MetadataJavaScriptJA";
import {MetadataJavaScriptVI} from "@/metadata/pages/frontend/javascript/MetadataJavaScriptVI";
import {MetadataJavaScriptZH} from "@/metadata/pages/frontend/javascript/MetadataJavaScriptZH";
import {MetadataJavaScriptDE} from "@/metadata/pages/frontend/javascript/MetadataJavaScriptDE";
import {MetadataJavaScriptNL} from "@/metadata/pages/frontend/javascript/MetadataJavaScriptNL";
import {MetadataJavaScriptDA} from "@/metadata/pages/frontend/javascript/MetadataJavaScriptDA";
import {MetadataJavaScriptKO} from "@/metadata/pages/frontend/javascript/MetadataJavaScriptKO";

export const MetadataJavaScript: Record<string, Metadata> = {
    en: MetadataJavaScriptEN,
    th: MetadataJavaScriptTH,
    fr: MetadataJavaScriptFR,
    ja: MetadataJavaScriptJA,
    vi: MetadataJavaScriptVI,
    zh: MetadataJavaScriptZH,
    de: MetadataJavaScriptDE,
    nl: MetadataJavaScriptNL,
    da: MetadataJavaScriptDA,
    fi: MetadataJavaScriptFI,
    ko: MetadataJavaScriptKO
}