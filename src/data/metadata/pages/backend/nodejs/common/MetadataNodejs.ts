import {Metadata} from "next";
import {MetadataNodejsEN} from "@/data/metadata/pages/backend/nodejs/MetadataNodejsEN";
import {MetadataNodejsTH} from "@/data/metadata/pages/backend/nodejs/MetadataNodejsTH";
import {MetadataNodejsFI} from "@/data/metadata/pages/backend/nodejs/MetadataNodejsFI";
import {MetadataNodejsFR} from "@/data/metadata/pages/backend/nodejs/MetadataNodejsFR";
import {MetadataNodejsJA} from "@/data/metadata/pages/backend/nodejs/MetadataNodejsJA";
import {MetadataNodejsVI} from "@/data/metadata/pages/backend/nodejs/MetadataNodejsVI";
import {MetadataNodejsZH} from "@/data/metadata/pages/backend/nodejs/MetadataNodejsZH";
import {MetadataNodejsDE} from "@/data/metadata/pages/backend/nodejs/MetadataNodejsDE";
import {MetadataNodejsNL} from "@/data/metadata/pages/backend/nodejs/MetadataNodejsNL";
import {MetadataNodejsDA} from "@/data/metadata/pages/backend/nodejs/MetadataNodejsDA";
import {MetadataNodejsKO} from "@/data/metadata/pages/backend/nodejs/MetadataNodejsKO";

export const MetadataNodejs: Record<string, Metadata> = {
    'en': MetadataNodejsEN,
    'th': MetadataNodejsTH,
    'fr': MetadataNodejsFR,
    'ja': MetadataNodejsJA,
    'vi': MetadataNodejsVI,
    'zh': MetadataNodejsZH,
    'de': MetadataNodejsDE,
    'nl': MetadataNodejsNL,
    'da': MetadataNodejsDA,
    'fi': MetadataNodejsFI,
    'ko': MetadataNodejsKO
}