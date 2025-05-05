import {Metadata} from "next";
import {MetadataNodejsEN} from "@/metadata/pages/backend/nodejs/MetadataNodejsEN";
import {MetadataNodejsTH} from "@/metadata/pages/backend/nodejs/MetadataNodejsTH";
import {MetadataNodejsFI} from "@/metadata/pages/backend/nodejs/MetadataNodejsFI";
import {MetadataNodejsFR} from "@/metadata/pages/backend/nodejs/MetadataNodejsFR";
import {MetadataNodejsJA} from "@/metadata/pages/backend/nodejs/MetadataNodejsJA";
import {MetadataNodejsVI} from "@/metadata/pages/backend/nodejs/MetadataNodejsVI";
import {MetadataNodejsZH} from "@/metadata/pages/backend/nodejs/MetadataNodejsZH";
import {MetadataNodejsDE} from "@/metadata/pages/backend/nodejs/MetadataNodejsDE";
import {MetadataNodejsNL} from "@/metadata/pages/backend/nodejs/MetadataNodejsNL";
import {MetadataNodejsDA} from "@/metadata/pages/backend/nodejs/MetadataNodejsDA";
import {MetadataNodejsKO} from "@/metadata/pages/backend/nodejs/MetadataNodejsKO";

export const MetadataNodejs: Record<string, Metadata> = {
    en: MetadataNodejsEN,
    th: MetadataNodejsTH,
    fr: MetadataNodejsFR,
    ja: MetadataNodejsJA,
    vi: MetadataNodejsVI,
    zh: MetadataNodejsZH,
    de: MetadataNodejsDE,
    nl: MetadataNodejsNL,
    da: MetadataNodejsDA,
    fi: MetadataNodejsFI,
    ko: MetadataNodejsKO
}