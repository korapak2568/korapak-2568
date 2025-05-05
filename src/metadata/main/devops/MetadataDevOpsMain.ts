import {Metadata} from "next";
import {MetadataDevOpsMainEN} from "@/metadata/pages/devops/main/MetadataDevOpsMainEN";
import {MetadataDevOpsMainTH} from "@/metadata/pages/devops/main/MetadataDevOpsMainTH";
import {MetadataDevOpsMainFI} from "@/metadata/pages/devops/main/MetadataDevOpsMainFI";
import {MetadataDevOpsMainFR} from "@/metadata/pages/devops/main/MetadataDevOpsMainFR";
import {MetadataDevOpsMainJA} from "@/metadata/pages/devops/main/MetadataDevOpsMainJA";
import {MetadataDevOpsMainVI} from "@/metadata/pages/devops/main/MetadataDevOpsMainVI";
import {MetadataDevOpsMainZH} from "@/metadata/pages/devops/main/MetadataDevOpsMainZH";
import {MetadataDevOpsMainDE} from "@/metadata/pages/devops/main/MetadataDevOpsMainDE";
import {MetadataDevOpsMainNL} from "@/metadata/pages/devops/main/MetadataDevOpsMainNL";
import {MetadataDevOpsMainDA} from "@/metadata/pages/devops/main/MetadataDevOpsMainDA";
import {MetadataDevOpsMainKO} from "@/metadata/pages/devops/main/MetadataDevOpsMainKO";

export const MetadataDevOpsMain: Record<string, Metadata> = {
    en: MetadataDevOpsMainDA,
    th: MetadataDevOpsMainTH,
    fr: MetadataDevOpsMainFR,
    ja: MetadataDevOpsMainJA,
    vi: MetadataDevOpsMainVI,
    zh: MetadataDevOpsMainZH,
    de: MetadataDevOpsMainDE,
    nl: MetadataDevOpsMainNL,
    da: MetadataDevOpsMainDA,
    fi: MetadataDevOpsMainFI,
    ko: MetadataDevOpsMainKO
}