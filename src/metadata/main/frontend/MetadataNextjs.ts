import {Metadata} from "next";
import {MetadataNextjsEN} from "@/metadata/pages/frontend/nextjs/MetadataNextjsEN";
import {MetadataNextjsTH} from "@/metadata/pages/frontend/nextjs/MetadataNextjsTH";
import {MetadataNextjsFI} from "@/metadata/pages/frontend/nextjs/MetadataNextjsFI";
import {MetadataNextjsFR} from "@/metadata/pages/frontend/nextjs/MetadataNextjsFR";
import {MetadataNextjsJA} from "@/metadata/pages/frontend/nextjs/MetadataNextjsJA";
import {MetadataNextjsZH} from "@/metadata/pages/frontend/nextjs/MetadataNextjsZH";
import {MetadataNextjsDE} from "@/metadata/pages/frontend/nextjs/MetadataNextjsDE";
import {MetadataNextjsNL} from "@/metadata/pages/frontend/nextjs/MetadataNextjsNL";
import {MetadataNextjsDA} from "@/metadata/pages/frontend/nextjs/MetadataNextjsDA";
import {MetadataNextjsKO} from "@/metadata/pages/frontend/nextjs/MetadataNextjsKO";

export const MetadataNextjs: Record<string, Metadata> = {
    en: MetadataNextjsEN,
    th: MetadataNextjsTH,
    fr: MetadataNextjsFR,
    ja: MetadataNextjsJA,
    zh: MetadataNextjsZH,
    de: MetadataNextjsDE,
    nl: MetadataNextjsNL,
    da: MetadataNextjsDA,
    fi: MetadataNextjsFI,
    ko: MetadataNextjsKO
}