import {Metadata} from "next";
import {MetadataJavaEN} from "@/metadata/pages/backend/java/MetadataJavaEN";
import {MetadataJavaTH} from "@/metadata/pages/backend/java/MetadataJavaTH";
import {MetadataJavaFI} from "@/metadata/pages/backend/java/MetadataJavaFI";
import {MetadataJavaFR} from "@/metadata/pages/backend/java/MetadataJavaFR";
import {MetadataJavaJA} from "@/metadata/pages/backend/java/MetadataJavaJA";
import {MetadataJavaZH} from "@/metadata/pages/backend/java/MetadataJavaZH";
import {MetadataJavaDE} from "@/metadata/pages/backend/java/MetadataJavaDE";
import {MetadataJavaNL} from "@/metadata/pages/backend/java/MetadataJavaNL";
import {MetadataJavaDA} from "@/metadata/pages/backend/java/MetadataJavaDA";
import {MetadataJavaKO} from "@/metadata/pages/backend/java/MetadataJavaKO";

export const MetadataJava: Record<string, Metadata> = {
    en: MetadataJavaEN,
    th: MetadataJavaTH,
    fr: MetadataJavaFR,
    ja: MetadataJavaJA,
    zh: MetadataJavaZH,
    de: MetadataJavaDE,
    nl: MetadataJavaNL,
    da: MetadataJavaDA,
    fi: MetadataJavaFI,
    ko: MetadataJavaKO
}