import {Metadata} from "next";
import {MetadataPhpEN} from "@/data/metadata/pages/backend/php/MetadataPhpEN";
import {MetadataPhpTH} from "@/data/metadata/pages/backend/php/MetadataPhpTH";
import {MetadataPhpFI} from "@/data/metadata/pages/backend/php/MetadataPhpFI";
import {MetadataPhpFR} from "@/data/metadata/pages/backend/php/MetadataPhpFR";
import {MetadataPhpJA} from "@/data/metadata/pages/backend/php/MetadataPhpJA";
import {MetadataPhpVI} from "@/data/metadata/pages/backend/php/MetadataPhpVI";
import {MetadataPhpZH} from "@/data/metadata/pages/backend/php/MetadataPhpZH";
import {MetadataPhpDE} from "@/data/metadata/pages/backend/php/MetadataPhpDE";
import {MetadataPhpNL} from "@/data/metadata/pages/backend/php/MetadataPhpNL";
import {MetadataPhpDA} from "@/data/metadata/pages/backend/php/MetadataPhpDA";
import {MetadataPhpKO} from "@/data/metadata/pages/backend/php/MetadataPhpKO";

export const MetadataPhp: Record<string, Metadata> = {
    'en': MetadataPhpEN,
    'th': MetadataPhpTH,
    'fr': MetadataPhpFR,
    'ja': MetadataPhpJA,
    'vi': MetadataPhpVI,
    'zh': MetadataPhpZH,
    'de': MetadataPhpDE,
    'nl': MetadataPhpNL,
    'da': MetadataPhpDA,
    'fi': MetadataPhpFI,
    'ko': MetadataPhpKO
}