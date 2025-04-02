import {Metadata} from "next";
import {MetadataPythonTH} from "@/metadata/pages/backend/python/MetadataPythonTH";
import {MetadataPythonFI} from "@/metadata/pages/backend/python/MetadataPythonFI";
import {MetadataPythonFR} from "@/metadata/pages/backend/python/MetadataPythonFR";
import {MetadataPythonJA} from "@/metadata/pages/backend/python/MetadataPythonJA";
import {MetadataPythonVI} from "@/metadata/pages/backend/python/MetadataPythonVI";
import {MetadataPythonZH} from "@/metadata/pages/backend/python/MetadataPythonZH";
import {MetadataPythonDE} from "@/metadata/pages/backend/python/MetadataPythonDE";
import {MetadataPythonNL} from "@/metadata/pages/backend/python/MetadataPythonNL";
import {MetadataPythonDA} from "@/metadata/pages/backend/python/MetadataPythonDA";
import {MetadataPythonKO} from "@/metadata/pages/backend/python/MetadataPythonKO";
import {MetadataPythonEN} from "@/metadata/pages/backend/python/MetadataPythonEN";

export const MetadataPython: Record<string, Metadata> = {
    'en': MetadataPythonEN,
    'th': MetadataPythonTH,
    'fr': MetadataPythonFR,
    'ja': MetadataPythonJA,
    'vi': MetadataPythonVI,
    'zh': MetadataPythonZH,
    'de': MetadataPythonDE,
    'nl': MetadataPythonNL,
    'da': MetadataPythonDA,
    'fi': MetadataPythonFI,
    'ko': MetadataPythonKO
}