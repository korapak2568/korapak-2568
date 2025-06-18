import {Metadata} from "next";
import {MetadataPhpEN} from "@/metadata/pages/backend/php/MetadataPhpEN";
import {MetadataPhpTH} from "@/metadata/pages/backend/php/MetadataPhpTH";
import {MetadataPhpFI} from "@/metadata/pages/backend/php/MetadataPhpFI";
import {MetadataPhpFR} from "@/metadata/pages/backend/php/MetadataPhpFR";
import {MetadataPhpJA} from "@/metadata/pages/backend/php/MetadataPhpJA";
import {MetadataPhpZH} from "@/metadata/pages/backend/php/MetadataPhpZH";
import {MetadataPhpDE} from "@/metadata/pages/backend/php/MetadataPhpDE";
import {MetadataPhpNL} from "@/metadata/pages/backend/php/MetadataPhpNL";
import {MetadataPhpDA} from "@/metadata/pages/backend/php/MetadataPhpDA";
import {MetadataPhpKO} from "@/metadata/pages/backend/php/MetadataPhpKO";

export const MetadataPhp: Record<string, Metadata> = {
    en: MetadataPhpEN,
    th: MetadataPhpTH,
    fr: MetadataPhpFR,
    ja: MetadataPhpJA,
    zh: MetadataPhpZH,
    de: MetadataPhpDE,
    nl: MetadataPhpNL,
    da: MetadataPhpDA,
    fi: MetadataPhpFI,
    ko: MetadataPhpKO
}