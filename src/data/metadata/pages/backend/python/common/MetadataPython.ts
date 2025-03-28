import {Metadata} from "next";
import {MetadataPythonTH} from "@/data/metadata/pages/backend/python/MetadataPythonTH";
import {MetadataPythonFI} from "@/data/metadata/pages/backend/python/MetadataPythonFI";
import {MetadataPythonFR} from "@/data/metadata/pages/backend/python/MetadataPythonFR";
import {MetadataPythonJA} from "@/data/metadata/pages/backend/python/MetadataPythonJA";
import {MetadataPythonVI} from "@/data/metadata/pages/backend/python/MetadataPythonVI";
import {MetadataPythonZH} from "@/data/metadata/pages/backend/python/MetadataPythonZH";
import {MetadataPythonDE} from "@/data/metadata/pages/backend/python/MetadataPythonDE";
import {MetadataPythonNL} from "@/data/metadata/pages/backend/python/MetadataPythonNL";
import {MetadataPythonDA} from "@/data/metadata/pages/backend/python/MetadataPythonDA";
import {MetadataPythonKO} from "@/data/metadata/pages/backend/python/MetadataPythonKO";
import {MetadataPythonEN} from "@/data/metadata/pages/backend/python/MetadataPythonEN";

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