import {Metadata} from "next";
import {MetadataPostmanEN} from "@/data/metadata/pages/devops/postman/MetadataPostmanEN";
import {MetadataPostmanTH} from "@/data/metadata/pages/devops/postman/MetadataPostmanTH";
import {MetadataPostmanFI} from "@/data/metadata/pages/devops/postman/MetadataPostmanFI";
import {MetadataPostmanFR} from "@/data/metadata/pages/devops/postman/MetadataPostmanFR";
import {MetadataPostmanJA} from "@/data/metadata/pages/devops/postman/MetadataPostmanJA";
import {MetadataPostmanVI} from "@/data/metadata/pages/devops/postman/MetadataPostmanVI";
import {MetadataPostmanZH} from "@/data/metadata/pages/devops/postman/MetadataPostmanZH";
import {MetadataPostmanDE} from "@/data/metadata/pages/devops/postman/MetadataPostmanDE";
import {MetadataPostmanNL} from "@/data/metadata/pages/devops/postman/MetadataPostmanNL";
import {MetadataPostmanDA} from "@/data/metadata/pages/devops/postman/MetadataPostmanDA";
import {MetadataPostmanKO} from "@/data/metadata/pages/devops/postman/MetadataPostmanKO";

export const MetadataPostman: Record<string, Metadata> = {
    'en': MetadataPostmanEN,
    'th': MetadataPostmanTH,
    'fr': MetadataPostmanFR,
    'ja': MetadataPostmanJA,
    'vi': MetadataPostmanVI,
    'zh': MetadataPostmanZH,
    'de': MetadataPostmanDE,
    'nl': MetadataPostmanNL,
    'da': MetadataPostmanDA,
    'fi': MetadataPostmanFI,
    'ko': MetadataPostmanKO
}