import {Metadata} from "next";
import {MetadataDevOpsMainEN} from "@/data/metadata/pages/devops/main/MetadataDevOpsMainEN";
import {MetadataDevOpsMainTH} from "@/data/metadata/pages/devops/main/MetadataDevOpsMainTH";
import {MetadataDevOpsMainFI} from "@/data/metadata/pages/devops/main/MetadataDevOpsMainFI";
import {MetadataDevOpsMainFR} from "@/data/metadata/pages/devops/main/MetadataDevOpsMainFR";
import {MetadataDevOpsMainJA} from "@/data/metadata/pages/devops/main/MetadataDevOpsMainJA";
import {MetadataDevOpsMainVI} from "@/data/metadata/pages/devops/main/MetadataDevOpsMainVI";
import {MetadataDevOpsMainZH} from "@/data/metadata/pages/devops/main/MetadataDevOpsMainZH";
import {MetadataDevOpsMainDE} from "@/data/metadata/pages/devops/main/MetadataDevOpsMainDE";
import {MetadataDevOpsMainNL} from "@/data/metadata/pages/devops/main/MetadataDevOpsMainNL";
import {MetadataDevOpsMainDA} from "@/data/metadata/pages/devops/main/MetadataDevOpsMainDA";
import {MetadataDevOpsMainKO} from "@/data/metadata/pages/devops/main/MetadataDevOpsMainKO";

export const MetadataDevOpsMain: Record<string, Metadata> = {
    'en': MetadataDevOpsMainDA,
    'th': MetadataDevOpsMainTH,
    'fr': MetadataDevOpsMainFR,
    'ja': MetadataDevOpsMainJA,
    'vi': MetadataDevOpsMainVI,
    'zh': MetadataDevOpsMainZH,
    'de': MetadataDevOpsMainDE,
    'nl': MetadataDevOpsMainNL,
    'da': MetadataDevOpsMainDA,
    'fi': MetadataDevOpsMainFI,
    'ko': MetadataDevOpsMainKO
}