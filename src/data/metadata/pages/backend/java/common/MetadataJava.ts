import {Metadata} from "next";
import {MetadataJavaEN} from "@/data/metadata/pages/backend/java/MetadataJavaEN";
import {MetadataJavaTH} from "@/data/metadata/pages/backend/java/MetadataJavaTH";
import {MetadataJavaFI} from "@/data/metadata/pages/backend/java/MetadataJavaFI";
import {MetadataJavaFR} from "@/data/metadata/pages/backend/java/MetadataJavaFR";
import {MetadataJavaJA} from "@/data/metadata/pages/backend/java/MetadataJavaJA";
import {MetadataJavaVI} from "@/data/metadata/pages/backend/java/MetadataJavaVI";
import {MetadataJavaZH} from "@/data/metadata/pages/backend/java/MetadataJavaZH";
import {MetadataJavaDE} from "@/data/metadata/pages/backend/java/MetadataJavaDE";
import {MetadataJavaNL} from "@/data/metadata/pages/backend/java/MetadataJavaNL";
import {MetadataJavaDA} from "@/data/metadata/pages/backend/java/MetadataJavaDA";
import {MetadataJavaKO} from "@/data/metadata/pages/backend/java/MetadataJavaKO";

export const MetadataJava: Record<string, Metadata> = {
    'en': MetadataJavaEN,
    'th': MetadataJavaTH,
    'fr': MetadataJavaFR,
    'ja': MetadataJavaJA,
    'vi': MetadataJavaVI,
    'zh': MetadataJavaZH,
    'de': MetadataJavaDE,
    'nl': MetadataJavaNL,
    'da': MetadataJavaDA,
    'fi': MetadataJavaFI,
    'ko': MetadataJavaKO
}