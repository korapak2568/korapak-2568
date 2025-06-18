import {Metadata} from "next";
import {MetadataWebDevelopmentEN} from "@/metadata/pages/web-development/MetadataWebDevelopmentEN";
import {MetadataWebDevelopmentTH} from "@/metadata/pages/web-development/MetadataWebDevelopmentTH";
import {MetadataWebDevelopmentFR} from "@/metadata/pages/web-development/MetadataWebDevelopmentFR";
import {MetadataWebDevelopmentJA} from "@/metadata/pages/web-development/MetadataWebDevelopmentJA";
import {MetadataWebDevelopmentZH} from "@/metadata/pages/web-development/MetadataWebDevelopmentZH";
import {MetadataWebDevelopmentDE} from "@/metadata/pages/web-development/MetadataWebDevelopmentDE";
import {MetadataWebDevelopmentNL} from "@/metadata/pages/web-development/MetadataWebDevelopmentNL";
import {MetadataWebDevelopmentDA} from "@/metadata/pages/web-development/MetadataWebDevelopmentDA";
import {MetadataWebDevelopmentFI} from "@/metadata/pages/web-development/MetadataWebDevelopmentFI";
import {MetadataWebDevelopmentKO} from "@/metadata/pages/web-development/MetadataWebDevelopmentKO";

export const MetadataWebDevelopment: Record<string, Metadata> = {
    'en': MetadataWebDevelopmentEN,
    'th': MetadataWebDevelopmentTH,
    'fr': MetadataWebDevelopmentFR,
    'ja': MetadataWebDevelopmentJA,
    'zh': MetadataWebDevelopmentZH,
    'de': MetadataWebDevelopmentDE,
    'nl': MetadataWebDevelopmentNL,
    'da': MetadataWebDevelopmentDA,
    'fi': MetadataWebDevelopmentFI,
    'ko': MetadataWebDevelopmentKO
}