import {Metadata} from "next";
import {MetadataNextjsEN} from "@/data/metadata/pages/frontend/nextjs/MetadataNextjsEN";
import {MetadataNextjsTH} from "@/data/metadata/pages/frontend/nextjs/MetadataNextjsTH";
import {MetadataNextjsFI} from "@/data/metadata/pages/frontend/nextjs/MetadataNextjsFI";
import {MetadataNextjsFR} from "@/data/metadata/pages/frontend/nextjs/MetadataNextjsFR";
import {MetadataNextjsJA} from "@/data/metadata/pages/frontend/nextjs/MetadataNextjsJA";
import {MetadataNextjsVI} from "@/data/metadata/pages/frontend/nextjs/MetadataNextjsVI";
import {MetadataNextjsZH} from "@/data/metadata/pages/frontend/nextjs/MetadataNextjsZH";
import {MetadataNextjsDE} from "@/data/metadata/pages/frontend/nextjs/MetadataNextjsDE";
import {MetadataNextjsNL} from "@/data/metadata/pages/frontend/nextjs/MetadataNextjsNL";
import {MetadataNextjsDA} from "@/data/metadata/pages/frontend/nextjs/MetadataNextjsDA";
import {MetadataNextjsKO} from "@/data/metadata/pages/frontend/nextjs/MetadataNextjsKO";

export const MetadataNextjs: Record<string, Metadata> = {
    'en': MetadataNextjsEN,
    'th': MetadataNextjsTH,
    'fr': MetadataNextjsFR,
    'ja': MetadataNextjsJA,
    'vi': MetadataNextjsVI,
    'zh': MetadataNextjsZH,
    'de': MetadataNextjsDE,
    'nl': MetadataNextjsNL,
    'da': MetadataNextjsDA,
    'fi': MetadataNextjsFI,
    'ko': MetadataNextjsKO
}